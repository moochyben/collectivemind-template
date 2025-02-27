# Documentation Template Repository

This repository contains a comprehensive documentation template structure that can be used for new projects. The template provides a standardized way to organize and maintain project documentation.

## Repository Structure

- **documentation-template/**: The main template directory containing the full documentation structure
  - **TEMPLATE-README.md**: Instructions for using the template
  - All documentation directories and their README files
  - Process rules and guidelines

- **create-documentation-template.sh**: Script used to create the template from an existing documentation structure
- **install-documentation-template.sh**: Script to install the template into a target project

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