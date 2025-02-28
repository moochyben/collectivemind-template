#!/bin/bash

# Simple script to test Confluence API connection

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is not installed. Please install it first."
    exit 1
fi

# Check if mcp-config.json exists
if [ ! -f "mcp-config.json" ]; then
    echo "Error: mcp-config.json not found. Please create it first."
    exit 1
fi

# Read configuration
CONFLUENCE_URL=$(jq -r '.confluenceUrl' mcp-config.json)
CONFLUENCE_USERNAME=$(jq -r '.username' mcp-config.json)
CONFLUENCE_API_TOKEN=$(jq -r '.apiToken' mcp-config.json)

echo "Testing connection to Confluence at $CONFLUENCE_URL"
echo "Using username: $CONFLUENCE_USERNAME"

# Test if we can connect to Confluence
echo "Attempting to connect to Confluence..."

# Create a temporary directory for the test
TEST_DIR="documentation/confluence-test"
mkdir -p "$TEST_DIR"

# Start the Docker container
echo "Starting Confluence MCP container..."
CONTAINER_ID=$(docker run -d \
  -e "CONFLUENCE_DOMAIN=$CONFLUENCE_URL" \
  -e "CONFLUENCE_EMAIL=$CONFLUENCE_USERNAME" \
  -e "CONFLUENCE_API_TOKEN=$CONFLUENCE_API_TOKEN" \
  -p 3000:3000 \
  ghcr.io/aaronsb/confluence-cloud-mcp:latest)

# Wait for the container to start
echo "Waiting for container to start..."
sleep 5

# Test the connection by listing spaces
echo "Listing Confluence spaces..."
curl -s http://localhost:3000/spaces > "$TEST_DIR/spaces.json"

# Check if we got a valid response
if jq -e . "$TEST_DIR/spaces.json" > /dev/null 2>&1; then
    echo "Successfully connected to Confluence!"
    echo "Found spaces:"
    jq -r '.[] | "- " + .name + " (" + .key + ")"' "$TEST_DIR/spaces.json"
    
    # Ask if user wants to fetch a page
    read -p "Would you like to fetch a page from a space? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # List spaces for selection
        echo "Available spaces:"
        jq -r '.[] | .key + ": " + .name' "$TEST_DIR/spaces.json"
        
        # Ask for space key
        read -p "Enter space key: " SPACE_KEY
        
        # List pages in the space
        echo "Listing pages in space $SPACE_KEY..."
        curl -s "http://localhost:3000/spaces/$SPACE_KEY/pages" > "$TEST_DIR/pages.json"
        
        # Check if we got a valid response
        if jq -e . "$TEST_DIR/pages.json" > /dev/null 2>&1; then
            echo "Found pages:"
            jq -r '.[] | "- " + .title + " (ID: " + .id + ")"' "$TEST_DIR/pages.json"
            
            # Ask for page ID
            read -p "Enter page ID to fetch: " PAGE_ID
            
            # Fetch the page
            echo "Fetching page $PAGE_ID..."
            curl -s "http://localhost:3000/pages/$PAGE_ID/markdown" > "$TEST_DIR/page_$PAGE_ID.md"
            
            echo "Page fetched and saved to $TEST_DIR/page_$PAGE_ID.md"
        else
            echo "Error: Could not list pages in space $SPACE_KEY"
        fi
    fi
else
    echo "Error: Could not connect to Confluence. Check your credentials and try again."
    cat "$TEST_DIR/spaces.json"
fi

# Stop and remove the container
echo "Stopping and removing container..."
docker stop "$CONTAINER_ID" > /dev/null
docker rm "$CONTAINER_ID" > /dev/null

echo "Test complete!" 