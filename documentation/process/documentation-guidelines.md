# Documentation Guidelines

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

## Documentation Standards

### Markdown Format

All documentation should be written in Markdown format for consistency and ease of use. Key formatting guidelines:

- Use heading levels appropriately (# for title, ## for sections, etc.)
- Use bullet points and numbered lists for clarity
- Include code blocks with appropriate language specification
- Use tables for structured data
- Include links to related documents
- Use emphasis (bold, italic) sparingly and consistently

### Frontmatter

Include YAML frontmatter at the beginning of documents where appropriate:

```markdown
---
title: Document Title
author: Author Name
date: YYYY-MM-DD
status: draft | in-review | approved
version: 1.0
---
```

### Document Structure

Each document should include:

1. **Title**: Clear, descriptive title
2. **Overview/Purpose**: Brief explanation of the document's purpose
3. **Main Content**: Organized with clear headings and subheadings
4. **Conclusion/Next Steps**: Summary and action items where appropriate
5. **References**: Links to related documents or external resources

## Role-Specific Guidelines

Different roles have specific documentation responsibilities and workflows:

- [Product Manager Guidelines](./roles/product-manager.md): Guidelines for product documentation, including PRDs, roadmaps, and feature specifications
- [Project Manager Guidelines](./roles/project-manager.md): Guidelines for project documentation, including sprint plans, status reports, and risk management
- [Developer Guidelines](./roles/developer.md): Guidelines for technical documentation, including architecture, APIs, and code documentation
- [Designer Guidelines](./roles/designer.md): Guidelines for design documentation, including wireframes, prototypes, and design systems

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

## Documentation Workflows

### Creating New Documentation

1. Identify the appropriate location in the directory structure
2. Create the file using the naming conventions
3. Include appropriate frontmatter
4. Follow the document structure guidelines
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

## Best Practices

### General Best Practices

- Keep documentation concise and focused
- Update documentation promptly to reflect changes
- Use consistent terminology throughout
- Link related documents for context
- Include visual elements (diagrams, charts) where helpful
- Archive outdated documentation appropriately

### Collaboration Best Practices

- Share documentation early and often
- Gather feedback from all stakeholders
- Maintain a single source of truth
- Make documentation easily accessible
- Celebrate good documentation practices

## Troubleshooting

### Common Issues

1. **Outdated Documentation**
   - Implement regular review schedules
   - Automate updates where possible
   - Clearly mark document status and last updated date

2. **Inconsistent Formatting**
   - Use templates for common document types
   - Provide clear formatting guidelines
   - Implement automated linting for Markdown

3. **Duplicate Information**
   - Maintain a documentation index
   - Link to existing documents rather than duplicating
   - Regularly audit and consolidate documentation

## Conclusion

Effective documentation is a shared responsibility across all roles. By following these guidelines, we can create and maintain high-quality documentation that improves communication, alignment, and decision-making across the organization. Remember that documentation should evolve with our processes and needs, and regular updates are essential to maintain its relevance and usefulness. 