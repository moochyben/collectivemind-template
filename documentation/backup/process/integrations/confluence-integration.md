# Confluence Integration

This document provides an overview of the integration between the Collective Mind project and Confluence.

## Overview

Confluence is used as the primary knowledge management system for the Collective Mind project. This integration allows team members to:

1. Sync Confluence pages to the local repository
2. Reference Confluence documentation in code
3. Maintain consistency between code and documentation
4. Track documentation changes alongside code changes

## Components

The Confluence integration consists of the following components:

1. **Confluence MCP Server** - A Docker container that provides a Machine Callable Program interface to Confluence
2. **Sync Script** - A bash script that fetches pages from Confluence and converts them to Markdown
3. **Configuration** - JSON configuration for connecting to Confluence
4. **Synced Pages** - Local copies of Confluence pages stored in the `documentation/confluence-sync` directory

## Setup

To set up the Confluence integration:

1. Ensure Docker is installed on your system
2. Create a `mcp-config.json` file in the project root with your Confluence credentials:
   ```json
   {
     "confluenceUrl": "https://your-confluence-instance.atlassian.net",
     "username": "your-username",
     "apiToken": "your-api-token"
   }
   ```
3. Run the sync script to test the connection: `./sync-confluence-pages.sh`

## Usage

See the following guides for detailed usage instructions:

- [Using Confluence MCP](./using-confluence-mcp.md) - Guide for using the Confluence MCP
- [Syncing Confluence Pages](./syncing-confluence-pages.md) - Guide for syncing Confluence pages

## Best Practices

When working with the Confluence integration:

1. Keep your `mcp-config.json` file secure and never commit it to version control
2. Sync pages regularly to ensure local copies are up to date
3. Reference Confluence pages in code comments using the page ID or URL
4. Document any local changes made to synced pages

## Troubleshooting

Common issues and their solutions:

1. **Connection errors** - Check your Confluence URL and credentials in `mcp-config.json`
2. **Docker errors** - Ensure Docker is running and you have permission to create containers
3. **Sync failures** - Check the Confluence MCP logs for detailed error messages
4. **Format issues** - Some Confluence elements may not convert perfectly to Markdown 