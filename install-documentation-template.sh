#!/bin/bash

#===================================================================================
# Documentation Template Installation Script
#
# Purpose: Install the comprehensive documentation template structure into a 
#          target project directory.
#
# This script copies the documentation template structure to a specified target
# directory, creating a standardized documentation framework for a new project.
#===================================================================================

#===================================================================================
# DEFAULT CONFIGURATION
#===================================================================================

# Default target directory if none is specified
# This will create a 'documentation' directory in the current location
TARGET_DIR="documentation"

#===================================================================================
# HELPER FUNCTIONS
#===================================================================================

# Display usage information for the script
# This function is called when --help is used or when invalid arguments are provided
function show_usage {
  echo "Usage: $0 [OPTIONS]"
  echo "Install the documentation template into a project."
  echo ""
  echo "Options:"
  echo "  -t, --target DIR    Target directory (default: ./documentation)"
  echo "  -h, --help          Display this help message"
  echo ""
  echo "Example:"
  echo "  $0 --target ../my-project/docs"
}

#===================================================================================
# ARGUMENT PROCESSING
#===================================================================================

# Parse command line arguments
# This allows for flexible specification of the target directory
while [[ $# -gt 0 ]]; do
  case "$1" in
    -t|--target)
      # Set the target directory from the command line argument
      TARGET_DIR="$2"
      shift 2  # Move past the option and its value
      ;;
    -h|--help)
      # Display help information and exit
      show_usage
      exit 0
      ;;
    *)
      # Handle unknown options
      echo "Unknown option: $1"
      show_usage
      exit 1
      ;;
  esac
done

#===================================================================================
# VALIDATION
#===================================================================================

# Verify that the source template directory exists
# This ensures the script is being run from the correct location
if [ ! -d "documentation-template" ]; then
  echo "Error: documentation-template directory not found."
  echo "Make sure you're running this script from the root of the documentation template repository."
  exit 1
fi

#===================================================================================
# INSTALLATION
#===================================================================================

# Create the target directory if it doesn't already exist
# This ensures we can install even if the directory structure doesn't exist yet
mkdir -p "$TARGET_DIR"

# Copy the entire template structure to the target directory
# This preserves all directories, README files, and process rules
echo "Installing documentation template to $TARGET_DIR..."
cp -r documentation-template/* "$TARGET_DIR/"

# Remove the template-specific README file from the target
# This file is only needed in the template repository, not in projects
if [ -f "$TARGET_DIR/TEMPLATE-README.md" ]; then
  rm "$TARGET_DIR/TEMPLATE-README.md"
fi

#===================================================================================
# COMPLETION
#===================================================================================

# Provide confirmation and next steps to the user
echo "Documentation template installed successfully!"
echo ""
echo "Next steps:"
echo "1. Review and update the main README.md in $TARGET_DIR"
echo "2. Customize the directory structure as needed for your project"
echo "3. Add project-specific documentation files"
echo ""
echo "For more information, see the documentation template repository README.md"