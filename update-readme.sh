#!/bin/bash

#==============================================================================
# update-readme.sh
#
# PURPOSE:
#   This script helps update README files without automatically committing
#   or pushing them to git. It provides a way to edit README files and
#   optionally stage them for commit, but never automatically commits or pushes.
#
# USAGE:
#   ./update-readme.sh [path/to/readme.md]
#
# EXAMPLES:
#   ./update-readme.sh README.md
#   ./update-readme.sh documentation/README.md
#==============================================================================

# Set strict error handling
set -e

# Check if a file was provided
if [ -z "$1" ]; then
  echo "Error: No README file specified"
  echo "Usage: ./update-readme.sh [path/to/readme.md]"
  exit 1
fi

README_FILE="$1"

# Check if the file exists
if [ ! -f "$README_FILE" ]; then
  echo "Error: File '$README_FILE' not found"
  exit 1
fi

# Check if the file is a README file
if [[ ! "$README_FILE" =~ readme.*\.md$ ]]; then
  echo "Warning: '$README_FILE' doesn't appear to be a README file"
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo ""
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Operation cancelled."
    exit 1
  fi
fi

# Open the file in the default editor
echo "Opening '$README_FILE' in your default editor..."
${EDITOR:-vi} "$README_FILE"

# Ask if the user wants to stage the changes
echo ""
echo "README file updated."
read -p "Do you want to stage these changes for commit? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git add "$README_FILE"
  echo "Changes to '$README_FILE' have been staged."
  echo ""
  echo "To commit these changes, run:"
  echo "  git commit -m 'Update $README_FILE'"
  echo ""
  echo "To push these changes, run:"
  echo "  git push"
else
  echo "Changes to '$README_FILE' have NOT been staged."
  echo ""
  echo "To stage these changes later, run:"
  echo "  git add $README_FILE"
fi

exit 0 