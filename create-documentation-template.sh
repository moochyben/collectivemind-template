#!/bin/bash

# Create documentation template script
# This script creates a reusable documentation template from the current documentation structure

# Set directories
SOURCE_DIR="documentation"
TEMPLATE_DIR="documentation-template"

# Create template directory if it doesn't exist
mkdir -p "$TEMPLATE_DIR"

# Copy main README.md
cp "$SOURCE_DIR/README.md" "$TEMPLATE_DIR/README.md"

# Create all subdirectories and copy their README files
SUBDIRS=(
  "accessibility-docs"
  "analytics-docs"
  "api-docs"
  "business-docs"
  "business-operations-docs"
  "data-architecture"
  "deployment-docs"
  "design-docs"
  "devops-docs"
  "integration-docs"
  "localization-docs"
  "mobile-docs"
  "operations-docs"
  "process"
  "product-requirements"
  "reference-materials"
  "security-docs"
  "solution-architecture"
  "testing-docs"
  "user-guides"
  "ux-design-docs"
)

# Create subdirectories and copy README files
for dir in "${SUBDIRS[@]}"; do
  mkdir -p "$TEMPLATE_DIR/$dir"
  if [ -f "$SOURCE_DIR/$dir/README.md" ]; then
    cp "$SOURCE_DIR/$dir/README.md" "$TEMPLATE_DIR/$dir/README.md"
  fi
done

# Create reference-materials subdirectories
mkdir -p "$TEMPLATE_DIR/reference-materials/templates"
mkdir -p "$TEMPLATE_DIR/reference-materials/standards"
mkdir -p "$TEMPLATE_DIR/reference-materials/research"

# Copy process/rules directory
mkdir -p "$TEMPLATE_DIR/process/rules"
cp "$SOURCE_DIR/process/rules/"* "$TEMPLATE_DIR/process/rules/"

# Create a README for the template
cat > "$TEMPLATE_DIR/TEMPLATE-README.md" << 'EOF'
# Documentation Template

This directory contains a reusable documentation template structure that can be copied into new projects.

## Usage

To use this template in a new project:

```bash
# Clone or copy this template to your project
cp -r documentation-template /path/to/your/project/documentation

# Navigate to your project
cd /path/to/your/project

# Update the main README.md and other files as needed
```

## Template Structure

This template includes:

1. A complete documentation directory structure with subdirectories for different documentation types
2. README.md files for each directory with guidelines and best practices
3. Documentation rules and standards in the process/rules directory

## Customization

After copying this template to your project:

1. Update the project name and description in the main README.md
2. Modify directory descriptions as needed for your specific project
3. Add project-specific documentation files
4. Update links and references to match your project structure

## Directory Structure

The template includes the following directories:

- accessibility-docs/: Accessibility standards and implementation
- analytics-docs/: Analytics architecture and implementation
- api-docs/: API documentation and integration guides
- business-docs/: Business-related documentation
- business-operations-docs/: Business operations documentation
- data-architecture/: Data model documentation and database schema analyses
- deployment-docs/: Deployment architecture and procedures
- design-docs/: Technical design documents
- devops-docs/: DevOps practices and tools
- integration-docs/: Integration specifications and patterns
- localization-docs/: Internationalization and localization
- mobile-docs/: Mobile-specific documentation
- operations-docs/: Operational procedures and monitoring
- process/: Development processes, workflows, and best practices
- product-requirements/: Product requirement documents
- reference-materials/: Industry standards, templates, and research
- security-docs/: Security architecture and procedures
- solution-architecture/: System architecture documentation
- testing-docs/: Testing strategies and procedures
- user-guides/: End-user documentation and usage guides
- ux-design-docs/: User experience design documentation

## Documentation Rules

The template includes documentation rules in the process/rules directory:

- readme-update.mdc: Guidelines for reviewing and updating README files
- documentation-update.mdc: Guidelines for documentation review and updates
- Other rules specific to different roles and processes
EOF

echo "Documentation template created in $TEMPLATE_DIR"
echo "You can now commit this template to your git repository" 