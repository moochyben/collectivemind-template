# Documentation Organization Guidelines

## Introduction

This document provides guidelines for **organizing, managing, and maintaining** documentation across the CollectiveMind project. It focuses on **where to place** documentation, **how to structure** directories and files, and the **processes and workflows** for creating and updating documentation.

**Related Documentation:**
- For information on content quality, formatting rules, and writing standards, please refer to the [Documentation Content Standards](./documentation-content-standards.md) document.

The combination of these two documents provides a complete framework for documentation practices at CollectiveMind.

## Overview

This document provides general guidelines for creating, maintaining, and organizing documentation across the CollectiveMind project. Well-structured documentation is essential for effective communication, knowledge sharing, and decision-making.

## Documentation Structure

### Directory Organization

The documentation is organized in the following directory structure:

```
documentation/
  ├── product-requirements/
  │   ├── features/
  │   │   └── YYYY-MM-DD-feature-name/
  │   │       ├── prd.md
  │   │       └── implementation/
  │   │           └── implementation-plan.md
  │   └── roadmap/
  ├── market-research/
  │   ├── competitive-analysis/
  │   └── user-research/
  ├── technical/
  │   ├── architecture/
  │   ├── apis/
  │   └── infrastructure/
  ├── project-management/
  │   ├── charters/
  │   ├── plans/
  │   ├── reports/
  │   └── risks/
  ├── agile/
  │   ├── sprints/
  │   │   └── YYYY-MM-DD-sprint-N/
  │   │       ├── plan.md
  │   │       ├── review.md
  │   │       └── retrospective.md
  │   └── ceremonies/
  └── process/
      ├── roles/
      └── workflows/
```

### File Naming Conventions

- Use kebab-case for all file and directory names (e.g., `feature-name.md`)
- Include dates in YYYY-MM-DD format for versioned or time-bound documents
- Use descriptive names that clearly indicate content
- Group related documents in appropriately named directories
- Use consistent file extensions (`.md` for Markdown files)

## Documentation Workflows

### Creating New Documentation

1. Identify the appropriate location in the directory structure
2. Create the file using the naming conventions
3. Include appropriate metadata (see [Documentation Content Standards](./documentation-content-standards.md) for metadata format)
4. Follow the document structure guidelines in the Content Standards
5. Commit the document to version control

### Updating Documentation

1. Regularly review and update documentation to reflect current status
2. Clearly mark changes in version control commits
3. Update related documents as needed
4. Notify relevant stakeholders of significant changes

### Reviewing Documentation

1. Use pull requests for document reviews
2. Assign appropriate reviewers based on content
3. Provide constructive feedback
4. Approve only when documentation meets standards

## Role-Specific Guidelines

Different roles have specific documentation responsibilities and workflows:

- [Product Manager Guidelines](../roles/product-manager.md): Guidelines for product documentation, including PRDs, roadmaps, and feature specifications
- [Project Manager Guidelines](../roles/project-manager.md): Guidelines for project documentation, including sprint plans, status reports, and risk management
- [Developer Guidelines](../roles/developer.md): Guidelines for technical documentation, including architecture, APIs, and code documentation
- [Designer Guidelines](../roles/designer.md): Guidelines for design documentation, including wireframes, prototypes, and design systems

## Documentation Tools

### Recommended Tools

- **Version Control**: Git for tracking changes
- **Text Editors**: VS Code with Markdown extensions
- **Collaboration**: Pull requests for document reviews
- **Automation**: Scripts for generating documentation (e.g., roadmap visualization)

### Roadmap Tools

The product roadmap is maintained using specialized tools:

1. **Roadmap Generator**: Automatically scans feature documentation to generate roadmap data
   ```bash
   cd documentation/product-requirements/roadmap
   ./update-roadmap.sh
   ```

2. **Markdown Summary**: Generates a comprehensive Markdown report of all features
   ```bash
   cd documentation/product-requirements/roadmap
   ./update-roadmap.sh --open
   ```

## Troubleshooting

### Common Issues

1. **Outdated Documentation**
   - Implement regular review schedules
   - Automate updates where possible
   - Clearly mark document status and last updated date

2. **Inconsistent Formatting**
   - Use templates for common document types
   - Refer to the [Documentation Content Standards](./documentation-content-standards.md) for formatting guidelines
   - Implement automated linting for Markdown

3. **Duplicate Information**
   - Maintain a documentation index
   - Link to existing documents rather than duplicating
   - Regularly audit and consolidate documentation

## Conclusion

Effective documentation organization is a shared responsibility across all roles. By following these guidelines, we can create and maintain a well-structured documentation system that improves navigation, discoverability, and maintenance of our documentation. For guidance on content quality, formatting, and writing standards, please refer to the [Documentation Content Standards](./documentation-content-standards.md) document. 