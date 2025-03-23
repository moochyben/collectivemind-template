# AI Agent Prompt Templates

This directory contains prompt templates designed for AI agents working with CollectiveMind documentation. These templates provide structured guidance to ensure consistent, high-quality interactions between AI agents and documentation artifacts.

## Available Templates

| Template Name | Purpose | Key Features |
|---------------|---------|-------------|
| [Documentation Review](./documentation-review-template.md) | Guide AI in reviewing documentation against standards | Rule-based evaluation, issue identification, prioritized recommendations |
| [Documentation Refresh](./documentation-refresh-template.md) | Guide AI in updating documentation based on review findings | Structured refresh process, change tracking, quality assurance steps |

## How to Use These Templates

1. **Select the appropriate template** for your documentation task
2. **Customize the template** by replacing placeholder values in curly braces `{}`
3. **Include relevant rule references** specific to the documentation domain 
4. **Add the document content** that the AI will be working with
5. **Submit the prompt** to your AI agent along with specific instructions

### Example: Documentation Review Workflow

1. Select the Documentation Review template
2. Fill in document information (title, path, type, last updated date)
3. Include appropriate rules:
   ```
   - Global Rules: @rule:global/documentation-standards.md
   - Domain Rules: @rule:technical/api-documentation.md
   - Task Rules: @rule:tasks/review-tasks.md
   ```
4. Specify review parameters (thoroughness level, focus areas)
5. Submit to AI agent along with document content

### Example: Documentation Refresh Workflow

1. Select the Documentation Refresh template
2. Fill in document information and update parameters
3. Include the review findings that prompted the refresh
4. Specify the exact scope of changes needed
5. Submit to AI agent along with original document content

## Customizing Templates

You may customize these templates for specific documentation types or review contexts:

1. **Domain-specific customization**: Add domain-specific checks and requirements
2. **Task-specific customization**: Adjust focus areas based on the specific task
3. **Project-specific customization**: Add project-specific rules and references

## Integration with Rules System

These prompt templates leverage the nested rules system through rule references (`@rule:path/to/rule.md`). The AI agent will access and apply the referenced rules during its task. This ensures that:

1. All documentation work adheres to established standards
2. Domain-specific requirements are properly addressed
3. Task-specific considerations are incorporated
4. The AI agent has clear guidance on expectations and outputs

## Adding New Templates

When creating new templates, follow these guidelines:

1. Use the existing templates as a structural starting point
2. Include clear sections for:
   - Document information
   - Applicable rules
   - Task parameters
   - Step-by-step instructions
   - Expected output format
   - Example output
   - Usage instructions
3. Save in markdown format with a descriptive filename
4. Update this README to include the new template

## Testing Templates

Before using a template in production, test it with:

1. A representative sample document
2. Various AI agents (if available)
3. Different parameter configurations
4. Multiple rule combinations

Document any issues or improvements in the CollectiveMind issue tracker.

## Versioning

Templates follow semantic versioning:

- Major version: Significant structural or functional changes
- Minor version: New features or substantial improvements
- Patch version: Bug fixes and minor adjustments

Always reference the template version when using it to ensure reproducibility.

---

Last updated: 2025-03-23 