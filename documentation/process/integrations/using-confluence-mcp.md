# Using the Confluence MCP in Collective Mind

This guide explains how to use the Confluence MCP (Machine Callable Program) server with the Collective Mind project in Cursor.

## What is the Confluence MCP?

The Confluence MCP is a server that allows AI assistants in Cursor to interact with Confluence Cloud. It provides a set of tools for:

- Searching Confluence content
- Creating new pages
- Updating existing pages
- Retrieving page content
- Managing page permissions
- Working with attachments

## Setup

Before using the Confluence MCP, you need to:

1. Run the `setup-confluence-mcp.sh` script in the project root
2. Configure Cursor to use the MCP server
3. Ensure Docker is running on your system

## Configuring Cursor

To configure Cursor to use the Confluence MCP:

1. Open Cursor
2. Go to Settings (⚙️)
3. Navigate to the "MCP Servers" section
4. Add the path to your `mcp-config.json` file
5. Restart Cursor

## Available Commands

When working with the Collective Mind project in Cursor, you can use the following types of commands:

### Searching Confluence

```
Search Confluence for documentation about knowledge management
```

### Creating Content

```
Create a new Confluence page titled "Collective Mind Integration" with the following content:
[Your content here]
```

### Updating Content

```
Update the Confluence page titled "Project Documentation" to include this section:
[Your content here]
```

### Retrieving Content

```
Get the content of the Confluence page titled "Development Guidelines"
```

### Working with Spaces

```
List all spaces in Confluence
```

```
Create a new space in Confluence called "Collective Mind" with key "CM"
```

## Best Practices

1. **Be specific with page titles**: When referencing Confluence pages, use the exact title to ensure the correct page is found.

2. **Use structured content**: When creating or updating pages, use Markdown formatting for better readability.

3. **Include metadata**: When creating pages, specify the space key where the page should be created.

4. **Handle permissions**: Consider who should have access to the pages you create or modify.

5. **Verify changes**: After creating or updating content, verify that the changes appear correctly in Confluence.

## Troubleshooting

If you encounter issues with the Confluence MCP:

1. Check that Docker is running
2. Verify your API token has the necessary permissions
3. Ensure the Confluence domain is correct in your configuration
4. Check for any error messages in the Cursor console

## Example Workflow

Here's an example workflow for using the Confluence MCP in your project:

1. Search for existing documentation:
   ```
   Search Confluence for documentation about collective intelligence
   ```

2. Create a new page with project information:
   ```
   Create a new Confluence page titled "Collective Mind Overview" in the "CM" space with the following content:
   # Collective Mind
   
   Collective Mind is a platform designed to harness the power of collective intelligence by enabling teams to collaborate, share knowledge, and make better decisions together.
   
   ## Key Features
   
   - Knowledge management
   - Collaborative decision-making
   - Team coordination
   ```

3. Update the page with additional information:
   ```
   Update the Confluence page titled "Collective Mind Overview" to add this section:
   
   ## Implementation Timeline
   
   - Phase 1: Knowledge management (Q2 2024)
   - Phase 2: Collaborative decision-making (Q3 2024)
   - Phase 3: Team coordination (Q4 2024)
   ```

4. Retrieve the updated content:
   ```
   Get the content of the Confluence page titled "Collective Mind Overview"
   ```

## Integration with Development Workflow

The Confluence MCP can be integrated into your development workflow to:

1. Automatically update documentation when code changes
2. Pull requirements from Confluence into your development environment
3. Share implementation details with the team through Confluence
4. Keep project status and documentation in sync 