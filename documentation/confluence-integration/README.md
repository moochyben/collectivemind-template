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