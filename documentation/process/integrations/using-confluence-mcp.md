# Using Confluence MCP

This guide explains how to use the Confluence Machine Callable Program (MCP) server to interact with Confluence from the command line.

## What is Confluence MCP?

The Confluence MCP is a Docker container that provides a command-line interface to Confluence. It allows you to:

1. Fetch pages from Confluence
2. List spaces and pages
3. Convert Confluence content to Markdown
4. Search for content in Confluence

## Prerequisites

Before using the Confluence MCP, ensure you have:

1. Docker installed on your system
2. A Confluence Cloud account with API access
3. An API token for authentication
4. The `mcp-config.json` file configured with your credentials

## Configuration

Create a `mcp-config.json` file in the project root with the following structure:

```json
{
  "confluenceUrl": "https://your-confluence-instance.atlassian.net",
  "username": "your-username",
  "apiToken": "your-api-token"
}
```

Replace the placeholders with your actual Confluence information:
- `confluenceUrl`: The URL of your Confluence instance
- `username`: Your Confluence username (usually your email)
- `apiToken`: Your Confluence API token (can be generated in your Atlassian account settings)

## Starting the MCP Server

The MCP server is started automatically when you run the `sync-confluence-pages.sh` script. If you need to start it manually, you can use the following Docker command:

```bash
docker run -d --name confluence-mcp -p 3000:3000 -v $(pwd)/mcp-config.json:/app/config.json mcr.microsoft.com/mcp/confluence:latest
```

## Basic Commands

### Listing Spaces

To list all spaces in your Confluence instance:

```bash
curl -X GET http://localhost:3000/spaces
```

### Listing Pages in a Space

To list all pages in a specific space:

```bash
curl -X GET http://localhost:3000/spaces/{spaceKey}/pages
```

Replace `{spaceKey}` with the key of the space you want to list pages from.

### Fetching a Page

To fetch a specific page:

```bash
curl -X GET http://localhost:3000/pages/{pageId}
```

Replace `{pageId}` with the ID of the page you want to fetch.

### Converting a Page to Markdown

To fetch a page and convert it to Markdown:

```bash
curl -X GET http://localhost:3000/pages/{pageId}/markdown
```

Replace `{pageId}` with the ID of the page you want to convert.

## Using the Sync Script

The `sync-confluence-pages.sh` script provides a user-friendly interface to the MCP server. To use it:

1. Make sure the script is executable: `chmod +x sync-confluence-pages.sh`
2. Run the script: `./sync-confluence-pages.sh`
3. Follow the menu prompts to list spaces, fetch pages, or sync all pages in a space

## Troubleshooting

If you encounter issues with the MCP server:

1. Check that Docker is running: `docker ps`
2. Verify your configuration in `mcp-config.json`
3. Check the MCP server logs: `docker logs confluence-mcp`
4. Ensure you're using the correct API token and have the necessary permissions in Confluence

## Advanced Usage

### Custom Markdown Conversion

The MCP server converts Confluence content to Markdown using a set of rules. If you need to customize the conversion, you can modify the `sync-confluence-pages.sh` script to post-process the Markdown files.

### Automating Sync

You can automate the syncing process by adding the `sync-confluence-pages.sh` script to a cron job or CI/CD pipeline. For example, to sync pages daily:

```bash
0 0 * * * /path/to/your/project/sync-confluence-pages.sh --auto-sync
```

Note: The `--auto-sync` option is not currently implemented but could be added to enable non-interactive syncing.

## Related Documentation

- [Confluence Integration](./confluence-integration.md) - Overview of the Confluence integration
- [Syncing Confluence Pages](./syncing-confluence-pages.md) - Guide for syncing Confluence pages 