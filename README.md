# Documentation Template Repository

This repository contains a comprehensive documentation template structure that can be used for new projects. The template provides a standardized way to organize and maintain project documentation.

## Repository Structure

- **documentation-template/**: The main template directory containing the full documentation structure
  - All documentation directories and their README files
  - Process rules and guidelines

- **install-documentation-template.sh**: Script to install the template into a target project
- **update-documentation-template.sh**: Script to update existing projects with the latest template changes

## Using the Template

There are two ways to use this template in a new project:

### Option 1: Using the Installation Script

1. Clone this repository:
   ```bash
   git clone https://github.com/moochyben/documentation-template.git
   ```

2. Run the installation script:
   ```bash
   cd documentation-template
   ./install-documentation-template.sh --target /path/to/your/project/documentation
   ```

### Option 2: Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/moochyben/documentation-template.git
   ```

2. Copy the template to your project:
   ```bash
   cp -r documentation-template/documentation-template /path/to/your/project/documentation
   ```

3. Navigate to your project:
   ```bash
   cd /path/to/your/project
   ```

4. Customize the documentation for your project:
   - Update the main README.md with your project information
   - Modify directory descriptions as needed
   - Add project-specific documentation files
   - Update links and references to match your project structure

## Managing Template Updates and Project-Specific Changes

### Bidirectional Synchronization Process

This template system supports a bidirectional workflow for managing documentation across multiple projects:

#### 1. Template-to-Project Updates (Forward Sync)

When the template is updated with improvements, new sections, or best practices:

1. Pull the latest template changes:
   ```bash
   cd documentation-template
   git pull
   ```

2. Run the update script to propagate changes to existing projects:
   ```bash
   ./update-documentation-template.sh --target /path/to/your/project/documentation
   ```

The update script intelligently handles changes:
- **Structure Updates**: Adds any new directories or files from the template
- **Content Preservation**: Preserves project-specific content while updating template sections
- **Safety Measures**: Creates backups of modified files with `.bak` extension
- **Selective Updates**: Updates README structure while keeping project-specific details

#### 2. Project-to-Template Updates (Reverse Sync)

When you make improvements in a specific project that should be incorporated back into the template:

1. Identify the valuable changes in your project documentation
2. Manually copy those changes to the template repository
3. Commit and push the changes to the template repository
4. Use the update script to propagate these improvements to other projects

#### 3. Understanding the Update Boundaries

The update script uses the **"Purpose"** section in README files as the boundary between:
- **Template Structure** (before the Purpose section): Updated from the template
- **Project-Specific Content** (after the Purpose section): Preserved during updates

This allows for consistent structure while maintaining project-specific details.

### Best Practices for Bidirectional Updates

1. **Regular Template Updates**: Schedule periodic reviews of the template to incorporate best practices
2. **Consistent Section Structure**: Maintain the same section headers across all projects
3. **Clear Boundaries**: Keep template content and project-specific content clearly separated
4. **Documentation Review**: After updates, review the changes to ensure nothing important was lost
5. **Version Control**: Commit documentation changes separately from code changes for clearer history

### When to Update the Template

Consider updating the template when you:
- Discover a better way to organize certain documentation
- Create a new type of document that would benefit multiple projects
- Improve the clarity or completeness of README files
- Establish new documentation standards or processes

## Template Features

The documentation template includes:

1. **Comprehensive Directory Structure**: 21 specialized documentation directories covering all aspects of project documentation
2. **README Files**: Each directory contains a README.md with guidelines and best practices
3. **Documentation Rules**: Standards and processes for maintaining documentation
4. **Consistent Format**: Standardized structure for all documentation types

## Directory Structure

The template includes directories for:

- Accessibility documentation
- Analytics documentation
- API documentation
- Business documentation
- Business operations documentation
- Data architecture documentation
- Deployment documentation
- Design documentation
- DevOps documentation
- Integration documentation
- Localization documentation
- Mobile documentation
- Operations documentation
- Process documentation
- Product requirements documentation
- Reference materials
- Security documentation
- Solution architecture documentation
- Testing documentation
- User guides
- UX design documentation

## Documentation Rules

The template includes documentation rules in the process/rules directory:

- **readme-update.mdc**: Guidelines for reviewing and updating README files
- **documentation-update.mdc**: Guidelines for documentation review and updates
- **data-architect.mdc**: Guidelines for data architecture documentation
- **product-manager.mdc**: Guidelines for product management documentation
- **Convex Rules.mdc**: Guidelines for Convex projects

## Customizing the Template

You can customize this template for your organization:

1. Modify the directory structure to match your project needs
2. Update the README files with organization-specific guidelines
3. Add or remove directories based on your documentation requirements
4. Customize the documentation rules to match your processes

## License

This documentation template is available under the [MIT License](LICENSE).

## Contributing

Contributions to improve the documentation template are welcome. Please submit a pull request or open an issue to suggest improvements. 