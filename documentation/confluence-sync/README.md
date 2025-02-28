# Confluence Sync

This directory contains Confluence pages that have been synced with the Collective Mind project.

## Purpose

The purpose of this directory is to maintain a local copy of important Confluence pages, allowing team members to:

1. Access documentation offline
2. Track changes to documentation over time using version control
3. Ensure consistency between code and documentation
4. Collaborate on documentation using the same tools used for code

## Syncing Process

Pages are synced from Confluence using the `sync-confluence-pages.sh` script in the project root. This script:

1. Connects to Confluence using the MCP (Machine Callable Program) server
2. Fetches pages and converts them to Markdown format
3. Organizes them by space key in this directory

## Directory Structure

Pages are organized by Confluence space key:

```
confluence-sync/
├── README.md
├── [SPACE_KEY1]/
│   ├── page1.md
│   ├── page2.md
│   └── ...
├── [SPACE_KEY2]/
│   ├── page1.md
│   ├── page2.md
│   └── ...
└── ...
```

## Usage Guidelines

When working with synced Confluence pages:

1. **Do not edit** these files directly if possible - make changes in Confluence and re-sync
2. If you need to make local changes, document them clearly and update Confluence as soon as possible
3. Use the sync script regularly to keep the local copies up to date
4. When committing changes, include the sync date in the commit message

## Syncing Frequency

It's recommended to sync pages:

1. At the beginning of each sprint
2. After major documentation updates in Confluence
3. When starting work on a feature that relies on specific documentation

## Related Documentation

For more information about the Confluence integration:

- [Confluence Integration](../confluence-integration/README.md) - Overview of the Confluence integration
- [Using Confluence MCP](../process/integrations/using-confluence-mcp.md) - Guide for using the Confluence MCP 