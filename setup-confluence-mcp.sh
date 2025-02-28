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

# Create documentation directory for Confluence integration if it doesn't exist
if [ ! -d "documentation/confluence-integration" ]; then
    mkdir -p documentation/confluence-integration
    
    # Create README for Confluence integration
    cat > documentation/confluence-integration/README.md << 'EOF'
# Confluence Integration

This directory contains documentation related to the integration between Collective Mind and Confluence.

## Purpose

The purpose of this integration is to enable seamless knowledge sharing between Collective Mind and Confluence, allowing teams to access and update information across both platforms.

## Setup

The integration uses the Confluence MCP Server, which provides tools for interacting with Confluence Cloud directly from the AI assistant in Cursor.

### Prerequisites

- Docker installed on your system
- Confluence Cloud account with API access
- API token for authentication

### Configuration

The integration is configured using the `mcp-config.json` file in the root directory of the project. This file contains the necessary credentials and settings for connecting to Confluence.

## Usage

For detailed usage instructions, please refer to the [Using Confluence MCP](../process/integrations/using-confluence-mcp.md) guide in the process/integrations directory.

When using Cursor with this project, you can interact with Confluence using natural language commands, such as:

- "Create a new Confluence page with this content"
- "Search Confluence for information about X"
- "Update the Confluence page about Y"
- "Get the content of the Confluence page with title Z"

## Troubleshooting

If you encounter issues with the Confluence integration:

1. Verify that your API token is valid and has the necessary permissions
2. Check that Docker is running and can access the internet
3. Ensure the Confluence domain is correct in the configuration file
4. Check the Cursor logs for any error messages related to the MCP server
EOF

    echo "Created documentation for Confluence integration"
fi

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
echo ""
echo "NOTE: Changes have been made locally only. If you want to commit these changes to your repository:"
echo "1. Review the changes: git status"
echo "2. Add the changes: git add ."
echo "3. Commit the changes: git commit -m 'Configure Confluence MCP integration'"
echo "4. Push the changes (if desired): git push" 