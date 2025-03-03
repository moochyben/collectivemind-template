# Product Roadmap Generator and Visualizer

This tool provides a visual representation of the product roadmap by scanning the product documentation and generating an interactive timeline view. The roadmap can be refreshed on command to reflect the latest documentation updates.

## Features

- **Automatic Documentation Scanning**: Scans feature documentation and implementation plans to extract roadmap data
- **Interactive Timeline**: Visual representation of features with their timelines and progress
- **Filtering and Search**: Filter features by category, status, and priority, or search by text
- **Detailed Feature View**: Click on any feature to see detailed information
- **Markdown Summary**: Generates a comprehensive Markdown report of all features grouped by category
- **Dark Mode Support**: Supports both light and dark themes
- **Responsive Design**: Works on desktop and mobile devices
- **Multiple Output Formats**: Generate JSON, HTML, SVG, and PNG outputs
- **Role-Specific Guidelines**: Dedicated documentation for Product Managers and Project Managers

## Prerequisites

```bash
npm install date-fns framer-motion glob gray-matter react react-dom typescript @types/react @types/react-dom @types/node
```

## Usage

### 1. Update Roadmap Data

To update the roadmap data from documentation:

```bash
node update-roadmap.js [--output=<format>]
```

Options:
- `--output`: Comma-separated list of output formats (default: json)
  - Available formats: json, html, svg, png
  - Example: `--output=json,html,svg`

Alternatively, use the shell script for a more user-friendly experience:

```bash
./update-roadmap.sh [--output=<format>] [--open] [--no-markdown]
```

Additional options:
- `--open`: Automatically open the Markdown summary after generation
- `--no-markdown`: Skip generating the Markdown summary

### 2. Generate Markdown Summary

To generate a Markdown summary of all features:

```bash
node generate-markdown-summary.js
```

This will create a `feature-summary.md` file with:
- Features grouped by category
- Status and progress indicators
- Timeline information
- Dependencies between features
- Team assignments

The Markdown summary is also automatically generated when you run `update-roadmap.js` or `update-roadmap.sh`.

### 3. Use the React Component

```tsx
import RoadmapVisualizer from './RoadmapVisualizer';

function App() {
  const handleRefresh = async () => {
    // Call the update script
    await fetch('/api/update-roadmap');
  };

  return (
    <RoadmapVisualizer
      configPath="/documentation/product-requirements/roadmap/roadmap-config.json"
      dataPath="/documentation/product-requirements/roadmap/roadmap-data.json"
      onRefresh={handleRefresh}
      className="min-h-screen"
    />
  );
}
```

### 4. Configuration

The roadmap configuration is stored in `roadmap-config.json`. Key settings include:

- Timeline range and units
- Categories and their colors
- Status types and their colors
- Priority levels
- Display options
- Documentation source paths

Example configuration updates:

```json
{
  "timelineConfig": {
    "startDate": "2025-01-01",
    "endDate": "2025-12-31",
    "timeUnits": ["quarter", "month"],
    "defaultView": "quarter"
  },
  "categories": [
    {
      "id": "core-features",
      "name": "Core Features",
      "color": "#4285F4",
      "order": 1
    }
  ]
}
```

## Role-Specific Guidelines

For detailed guidelines on how to use and maintain the roadmap, please refer to the following documentation:

- [General Documentation Guidelines](/documentation/process/documentation-guidelines.md): Overview of documentation structure and standards
- [Product Manager Guidelines](/documentation/process/roles/product-manager.md): Guidelines for product managers on roadmap management and feature documentation
- [Project Manager Guidelines](/documentation/process/roles/project-manager.md): Guidelines for project managers on using the roadmap for planning and reporting

These guidelines include:
- Role-specific responsibilities
- Recommended workflows
- Best practices
- Troubleshooting tips
- Integration with existing processes

## Documentation Structure

The roadmap generator expects documentation to follow this structure:

```
documentation/
  product-requirements/
    features/
      YYYY-MM-DD-feature-name/
        prd.md
        implementation/
          implementation-plan.md
```

### Feature Documentation Format

Feature documentation (`prd.md`) should include:

```markdown
---
title: Feature Name
description: Short description
category: core-features
status: in-progress
priority: high
---

## Overview
[Feature overview]

## Goals
[Feature goals]

...
```

### Implementation Plan Format

Implementation plans should include:

```markdown
## Implementation Phases

### Phase 1: Foundation (Week 1)
[Phase details]

### Phase 2: Enhanced Features (Week 2)
[Phase details]

## Dependencies
- Dependency 1
- Dependency 2

Owner: Product Team
Contributors: Frontend Team, Backend Team
```

## Refreshing the Roadmap

The roadmap can be refreshed in several ways:

1. **Manual Refresh**: Click the "Refresh" button in the UI
2. **Command Line**: Run `node update-roadmap.js` or `./update-roadmap.sh`
3. **API Endpoint**: Call your refresh endpoint
4. **Git Hook**: Add a pre-commit or post-merge hook:

```bash
#!/bin/sh
node documentation/product-requirements/roadmap/update-roadmap.js
```

## Development

### Adding New Features

1. Create a new feature directory with the current date:
   ```bash
   mkdir -p documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name
   ```

2. Create the required documentation files:
   ```bash
   touch documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name/prd.md
   mkdir -p documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name/implementation
   touch documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name/implementation/implementation-plan.md
   ```

3. Update the documentation following the templates

4. Refresh the roadmap to see the new feature

### Customizing the Visualizer

The React component can be customized through:

1. Props for basic configuration
2. CSS classes for styling
3. Configuration file for colors and display options
4. Component extension for advanced customization

## Contributing

1. Follow the documentation structure
2. Update tests when adding features
3. Maintain TypeScript types
4. Follow the existing code style
5. Document changes in the README

## Troubleshooting

Common issues and solutions:

1. **Missing Data**
   - Check documentation structure
   - Verify file permissions
   - Check for syntax errors in markdown files

2. **Incorrect Dates**
   - Ensure directory names follow YYYY-MM-DD format
   - Check date formats in documentation
   - Verify timeline configuration

3. **Visualization Issues**
   - Check browser console for errors
   - Verify CSS classes
   - Check responsive breakpoints

## License

MIT License 