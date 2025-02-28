#!/bin/bash

#==============================================================================
# sync-confluence-pages.sh
#
# PURPOSE:
#   This script provides functionality to sync Confluence pages with a local
#   repository. It allows users to list spaces, list pages in a space, fetch
#   specific pages, and sync all pages in a space to the local repository.
#
# USAGE:
#   ./sync-confluence-pages.sh
#
# REQUIREMENTS:
#   - Docker installed on the system
#   - mcp-config.json file with Confluence credentials
#==============================================================================

# Set strict error handling
set -e

#==============================================================================
# CONFIGURATION
#==============================================================================

# Directory where synced pages will be saved
SYNC_DIR="documentation/confluence-sync"

# MCP server port
MCP_PORT=3000

# Docker image for the Confluence MCP
MCP_IMAGE="mcr.microsoft.com/mcp/confluence:latest"

# Container name
CONTAINER_NAME="confluence-mcp"

#==============================================================================
# HELPER FUNCTIONS
#==============================================================================

# Function to check if Docker is installed
check_docker() {
  # Check if Docker command is available
  if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed or not in PATH"
    echo "Please install Docker and try again"
    exit 1
  fi
  
  # Check if Docker daemon is running
  if ! docker info &> /dev/null; then
    echo "Error: Docker daemon is not running"
    echo "Please start Docker and try again"
    exit 1
  fi
}

# Function to check if mcp-config.json exists
check_config() {
  # Verify the config file exists
  if [ ! -f "mcp-config.json" ]; then
    echo "Error: mcp-config.json not found"
    echo "Please create a mcp-config.json file with your Confluence credentials"
    echo "Example:"
    echo '{
  "confluenceUrl": "https://your-confluence-instance.atlassian.net",
  "username": "your-username",
  "apiToken": "your-api-token"
}'
    exit 1
  fi
}

# Function to ensure the sync directory exists
create_sync_dir() {
  # Create the sync directory if it doesn't exist
  if [ ! -d "$SYNC_DIR" ]; then
    echo "Creating sync directory: $SYNC_DIR"
    mkdir -p "$SYNC_DIR"
  fi
}

# Function to start the MCP server
start_mcp_server() {
  # Check if the container is already running
  if docker ps | grep -q "$CONTAINER_NAME"; then
    echo "MCP server is already running"
    return 0
  fi
  
  # Check if the container exists but is stopped
  if docker ps -a | grep -q "$CONTAINER_NAME"; then
    echo "Starting existing MCP server container..."
    docker start "$CONTAINER_NAME"
    return 0
  fi
  
  # Start a new container
  echo "Starting MCP server..."
  docker run -d --name "$CONTAINER_NAME" -p "$MCP_PORT:3000" -v "$(pwd)/mcp-config.json:/app/config.json" "$MCP_IMAGE"
  
  # Wait for the server to start
  echo "Waiting for MCP server to start..."
  sleep 5
}

# Function to stop the MCP server
stop_mcp_server() {
  # Only stop the server if we started it
  if docker ps | grep -q "$CONTAINER_NAME"; then
    echo "Stopping MCP server..."
    docker stop "$CONTAINER_NAME" > /dev/null
  fi
}

# Function to fetch spaces from Confluence
fetch_spaces() {
  echo "Fetching spaces..."
  # Use curl to get spaces from the MCP server
  curl -s "http://localhost:$MCP_PORT/spaces" | jq -r '.[] | "\(.key)\t\(.name)"' | (
    echo "Available Spaces:"
    echo "KEY\tNAME"
    echo "----\t----"
    cat
  )
}

# Function to fetch pages in a space
fetch_pages_in_space() {
  local space_key="$1"
  echo "Fetching pages in space $space_key..."
  
  # Use curl to get pages from the MCP server
  curl -s "http://localhost:$MCP_PORT/spaces/$space_key/pages" | jq -r '.[] | "\(.id)\t\(.title)"' | (
    echo "Pages in space $space_key:"
    echo "ID\tTITLE"
    echo "----\t-----"
    cat
  )
}

# Function to fetch a specific page and save it as Markdown
fetch_page() {
  local page_id="$1"
  echo "Fetching page $page_id..."
  
  # Get page details to determine the space key
  local page_details=$(curl -s "http://localhost:$MCP_PORT/pages/$page_id")
  local space_key=$(echo "$page_details" | jq -r '.space.key')
  local title=$(echo "$page_details" | jq -r '.title')
  
  # Create directory for the space if it doesn't exist
  local space_dir="$SYNC_DIR/$space_key"
  mkdir -p "$space_dir"
  
  # Convert title to a valid filename
  local filename=$(echo "$title" | tr ' ' '_').md
  
  # Fetch the page content as Markdown
  echo "Converting to Markdown..."
  curl -s "http://localhost:$MCP_PORT/pages/$page_id/markdown" > "$space_dir/$filename"
  
  echo "Page fetched successfully!"
  echo "Saved to $space_dir/$filename"
}

# Function to sync all pages in a space
sync_space() {
  local space_key="$1"
  echo "Syncing all pages in space $space_key..."
  
  # Create directory for the space if it doesn't exist
  local space_dir="$SYNC_DIR/$space_key"
  mkdir -p "$space_dir"
  
  # Get all pages in the space
  local pages=$(curl -s "http://localhost:$MCP_PORT/spaces/$space_key/pages")
  local page_count=$(echo "$pages" | jq '. | length')
  
  echo "Found $page_count pages to sync"
  
  # Fetch each page
  echo "$pages" | jq -c '.[]' | while read -r page; do
    local page_id=$(echo "$page" | jq -r '.id')
    local title=$(echo "$page" | jq -r '.title')
    
    echo "Fetching page $page_id ($title)..."
    
    # Convert title to a valid filename
    local filename=$(echo "$title" | tr ' ' '_').md
    
    # Fetch the page content as Markdown
    curl -s "http://localhost:$MCP_PORT/pages/$page_id/markdown" > "$space_dir/$filename"
    
    echo "Saved to $space_dir/$filename"
  done
  
  echo "Sync complete! $page_count pages synced."
}

# Function to display the menu
show_menu() {
  echo
  echo "===== Confluence Sync Menu ====="
  echo "1. List Spaces"
  echo "2. List Pages in a Space"
  echo "3. Fetch a Specific Page"
  echo "4. Sync All Pages in a Space"
  echo "5. Exit"
  echo "=============================="
  echo
}

#==============================================================================
# MAIN SCRIPT
#==============================================================================

# Check requirements
check_docker
check_config
create_sync_dir

# Start the MCP server
start_mcp_server

# Set up trap to stop the MCP server on exit
trap stop_mcp_server EXIT

# Main menu loop
while true; do
  show_menu
  read -p "Enter your choice (1-5): " choice
  
  case $choice in
    1)
      # List spaces
      fetch_spaces
      ;;
    2)
      # List pages in a space
      read -p "Enter space key: " space_key
      fetch_pages_in_space "$space_key"
      ;;
    3)
      # Fetch a specific page
      read -p "Enter page ID: " page_id
      fetch_page "$page_id"
      ;;
    4)
      # Sync all pages in a space
      read -p "Enter space key: " space_key
      sync_space "$space_key"
      ;;
    5)
      # Exit
      echo "Exiting..."
      exit 0
      ;;
    *)
      echo "Invalid choice. Please enter a number between 1 and 5."
      ;;
  esac
done 