# Collective Mind

A collaborative platform for shared knowledge and collective intelligence.

## Project Overview

Collective Mind is a platform designed to harness the power of collective intelligence by enabling teams to collaborate, share knowledge, and make better decisions together. The platform provides tools for knowledge management, collaborative decision-making, and team coordination.

## Repository Structure

This repository contains:

- **documentation/**: Comprehensive documentation for the project
  - Development guidelines
  - Architecture documentation
  - API documentation
  - User guides
  - Process documentation
  - Integrations documentation

- **src/**: Source code for the Collective Mind platform (coming soon)

## Documentation

The documentation directory follows a standardized structure to organize all project documentation. It includes:

- **API Documentation**: Details about API endpoints, request/response formats
- **Architecture Documentation**: System design, component interactions
- **Development Guidelines**: Coding standards, development workflows
- **User Guides**: Instructions for end-users
- **Process Documentation**: Team processes and workflows
- **Integrations Documentation**: Documentation for integrating with external systems

To explore the documentation, navigate to the [documentation](./documentation) directory.

## Confluence Integration

Collective Mind integrates with Confluence to maintain a synchronized copy of important documentation. This integration allows team members to:

1. Access Confluence documentation offline
2. Track documentation changes using version control
3. Ensure consistency between code and documentation

### Syncing Confluence Pages

To sync Confluence pages with your local repository:

1. Ensure Docker is installed on your system
2. Create a `mcp-config.json` file with your Confluence credentials
3. Run the sync script: `./sync-confluence-pages.sh`

For detailed instructions, see the [Confluence Integration documentation](./documentation/process/integrations/confluence-integration.md).

## Getting Started

Instructions for setting up the development environment and running the project will be added as the codebase develops.

## Contributing

Contributions to Collective Mind are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 