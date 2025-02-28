#!/bin/bash

# Setup script for Confluence MCP Server in Cursor
# This script helps configure and test the Confluence MCP server integration

echo "Setting up Confluence MCP Server for Collective Mind project"
echo "-----------------------------------------------------------"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed. Please install Docker first."
    echo "Visit https://docs.docker.com/get-docker/ for installation instructions."
    exit 1
fi

# Check if mcp-config.json exists
if [ ! -f "mcp-config.json" ]; then
    echo "Error: mcp-config.json not found. Please create it first."
    exit 1
fi

# Prompt for Confluence credentials
read -p "Enter your Confluence domain (e.g., your-domain.atlassian.net): " CONFLUENCE_DOMAIN
read -p "Enter your Confluence email: " CONFLUENCE_EMAIL
read -p "Enter your Confluence API token: " CONFLUENCE_API_TOKEN

# Update the configuration file
sed -i '' "s|your-domain.atlassian.net|$CONFLUENCE_DOMAIN|g" mcp-config.json
sed -i '' "s|your-email@domain.com|$CONFLUENCE_EMAIL|g" mcp-config.json
sed -i '' "s|your-api-token|$CONFLUENCE_API_TOKEN|g" mcp-config.json

echo "Configuration updated successfully!"

# Instructions for using in Cursor
echo ""
echo "To use the Confluence MCP Server in Cursor:"
echo "1. Open Cursor and navigate to Settings"
echo "2. Go to the 'MCP Servers' section"
echo "3. Add the path to your mcp-config.json file"
echo "4. Restart Cursor"
echo ""
echo "After setup, you can use commands like:"
echo "- 'Search Confluence for documentation about X'"
echo "- 'Create a new Confluence page with this content'"
echo "- 'Update the Confluence page about Y'"
echo ""
echo "Setup complete! Your Collective Mind project is now configured to use the Confluence MCP Server." 