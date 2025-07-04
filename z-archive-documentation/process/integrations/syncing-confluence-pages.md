# Syncing Confluence Pages

This guide explains how to use the `sync-confluence-pages.sh` script to sync Confluence pages with your local repository.

## Overview

The `sync-confluence-pages.sh` script allows you to:

1. List all spaces in your Confluence instance
2. List all pages in a specific space
3. Fetch a specific page and convert it to Markdown
4. Sync all pages in a space to your local repository

## Prerequisites

Before using the script, ensure you have:

1. Docker installed on your system
2. A Confluence Cloud account with API access
3. An API token for authentication
4. The `mcp-config.json` file configured with your credentials

## Running the Script

To run the script:

1. Open a terminal in the project root directory
2. Make sure the script is executable: `chmod +x sync-confluence-pages.sh`
3. Run the script: `./sync-confluence-pages.sh`

## Using the Menu

When you run the script, you'll see a menu with the following options:

1. **List Spaces** - Lists all spaces in your Confluence instance
2. **List Pages in a Space** - Lists all pages in a specific space
3. **Fetch a Specific Page** - Fetches a specific page and converts it to Markdown
4. **Sync All Pages in a Space** - Syncs all pages in a space to your local repository
5. **Exit** - Exits the script

### Listing Spaces

To list all spaces in your Confluence instance:

1. Select option 1 from the menu
2. The script will display a list of all spaces, including their keys and names

Example output:
```
Available Spaces:
KEY    NAME
----   ----
PROJ   Project Documentation
TEAM   Team Space
DEV    Development
```

### Listing Pages in a Space

To list all pages in a specific space:

1. Select option 2 from the menu
2. Enter the space key when prompted
3. The script will display a list of all pages in the space, including their IDs and titles

Example output:
```
Pages in space PROJ:
ID        TITLE
----      -----
12345     Project Overview
67890     Requirements
54321     Architecture
```

### Fetching a Specific Page

To fetch a specific page and convert it to Markdown:

1. Select option 3 from the menu
2. Enter the page ID when prompted
3. The script will fetch the page, convert it to Markdown, and save it to the `documentation/confluence-sync` directory

Example output:
```
Fetching page 12345...
Page fetched successfully!
Saved to documentation/confluence-sync/PROJ/Project_Overview.md
```

### Syncing All Pages in a Space

To sync all pages in a space to your local repository:

1. Select option 4 from the menu
2. Enter the space key when prompted
3. The script will fetch all pages in the space, convert them to Markdown, and save them to the `documentation/confluence-sync/{SPACE_KEY}` directory

Example output:
```
Syncing all pages in space PROJ...
Fetching page 12345 (Project Overview)...
Saved to documentation/confluence-sync/PROJ/Project_Overview.md
Fetching page 67890 (Requirements)...
Saved to documentation/confluence-sync/PROJ/Requirements.md
Fetching page 54321 (Architecture)...
Saved to documentation/confluence-sync/PROJ/Architecture.md
Sync complete! 3 pages synced.
```

## File Organization

The script organizes synced pages by space key in the `documentation/confluence-sync` directory:

```
documentation/confluence-sync/
├── README.md
├── PROJ/
│   ├── Project_Overview.md
│   ├── Requirements.md
│   └── Architecture.md
├── TEAM/
│   ├── Team_Members.md
│   └── Meeting_Notes.md
└── ...
```

## Customizing the Script

You can customize the script to suit your needs:

### Changing the Sync Directory

To change the directory where synced pages are saved, modify the `SYNC_DIR` variable at the top of the script:

```bash
SYNC_DIR="documentation/confluence-sync"
```

### Adding Auto-Sync Functionality

To add auto-sync functionality, you can modify the script to accept command-line arguments:

```bash
if [[ "$1" == "--auto-sync" ]]; then
  # Add code to automatically sync all spaces or specific spaces
  # without user interaction
fi
```

## Troubleshooting

If you encounter issues with the script:

1. Check that Docker is running: `docker ps`
2. Verify your configuration in `mcp-config.json`
3. Check the MCP server logs: `docker logs confluence-mcp`
4. Ensure you're using the correct API token and have the necessary permissions in Confluence

## Best Practices

When syncing Confluence pages:

1. Sync pages regularly to ensure your local copies are up to date
2. Include the sync date in commit messages when committing synced pages
3. Do not edit synced pages directly if possible - make changes in Confluence and re-sync
4. If you need to make local changes, document them clearly and update Confluence as soon as possible

## Related Documentation

- [Confluence Integration](./confluence-integration.md) - Overview of the Confluence integration
- [Using Confluence MCP](./using-confluence-mcp.md) - Guide for using the Confluence MCP 