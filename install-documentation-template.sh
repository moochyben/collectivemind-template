#!/bin/bash

# Documentation Template Installation Script
# This script installs the documentation template into a target project

# Default target directory
TARGET_DIR="documentation"

# Display usage information
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

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    -t|--target)
      TARGET_DIR="$2"
      shift 2
      ;;
    -h|--help)
      show_usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      show_usage
      exit 1
      ;;
  esac
done

# Check if source directory exists
if [ ! -d "documentation-template" ]; then
  echo "Error: documentation-template directory not found."
  echo "Make sure you're running this script from the root of the documentation template repository."
  exit 1
fi

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy template to target directory
echo "Installing documentation template to $TARGET_DIR..."
cp -r documentation-template/* "$TARGET_DIR/"

# Remove the TEMPLATE-README.md from the target directory
if [ -f "$TARGET_DIR/TEMPLATE-README.md" ]; then
  rm "$TARGET_DIR/TEMPLATE-README.md"
fi

echo "Documentation template installed successfully!"
echo ""
echo "Next steps:"
echo "1. Review and update the main README.md in $TARGET_DIR"
echo "2. Customize the directory structure as needed for your project"
echo "3. Add project-specific documentation files"
echo ""
echo "For more information, see the documentation template repository README.md"