#!/bin/bash

#===================================================================================
# Documentation Template Update Script
# 
# Purpose: Update documentation template files in existing projects while
#          preserving project-specific content.
#
# This script intelligently updates README files and directory structures from
# the template to existing projects. It preserves project-specific content
# while updating the template structure and organization.
#===================================================================================

#===================================================================================
# HELPER FUNCTIONS
#===================================================================================

# Display usage information for the script
# This function is called when --help is used or when invalid arguments are provided
function show_usage {
  echo "Usage: $0 [OPTIONS]"
  echo "Update documentation template files in an existing project."
  echo ""
  echo "Options:"
  echo "  --target <path>    Path to the project documentation directory to update"
  echo "  --help             Display this help message"
  echo ""
  echo "Example:"
  echo "  $0 --target /path/to/your/project/documentation"
}

#===================================================================================
# ARGUMENT PROCESSING
#===================================================================================

# Check if help was requested
# Exit early with usage information if --help or -h was provided
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
  show_usage
  exit 0
fi

# Validate that the target directory was provided correctly
# The script requires --target followed by a valid path
if [ "$1" != "--target" ] || [ -z "$2" ]; then
  echo "Error: Target directory not specified."
  show_usage
  exit 1
fi

# Store the target directory path
TARGET_DIR="$2"

# Verify the target directory exists
# We can't update a directory that doesn't exist
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Target directory '$TARGET_DIR' does not exist."
  exit 1
fi

# Determine the template directory location
# This assumes the template is in a subdirectory of where this script is located
TEMPLATE_DIR="$(dirname "$0")/documentation-template"

# Verify the template directory exists
# We need the template to perform the update
if [ ! -d "$TEMPLATE_DIR" ]; then
  echo "Error: Template directory '$TEMPLATE_DIR' does not exist."
  exit 1
fi

echo "Updating documentation template in $TARGET_DIR..."

#===================================================================================
# README FILE UPDATE FUNCTION
#===================================================================================

# Function to intelligently update README files
# This preserves project-specific content while updating template structure
update_readme() {
  local source_file="$1"  # Template README file
  local target_file="$2"  # Project README file to update
  
  # If the target file doesn't exist, simply copy the source file
  # This handles new directories/files added to the template
  if [ ! -f "$target_file" ]; then
    cp "$source_file" "$target_file"
    echo "Created new file: $target_file"
    return
  fi
  
  # Create a backup of the target file before modifying it
  # This allows users to recover if something goes wrong
  cp "$target_file" "${target_file}.bak"
  
  # Extract the project-specific content (everything after the "Purpose" section)
  # The "Purpose" section is used as a delimiter between template structure and project content
  local project_content=$(awk '/^## Purpose/,0{print}' "$target_file")
  
  # Extract the template structure (everything before the "Purpose" section)
  # This is the part we want to update from the template
  local template_structure=$(awk '/^## Purpose/{exit} {print}' "$source_file")
  
  # If no Purpose section exists, we can't safely update the file
  # In this case, we preserve the entire file and warn the user
  if [ -z "$project_content" ]; then
    echo "Warning: Could not identify standard sections in $target_file"
    echo "File not updated. A backup was created at ${target_file}.bak"
    return
  fi
  
  # Combine the updated template structure with the preserved project-specific content
  # This is the key operation that updates the file while preserving content
  echo "$template_structure" > "$target_file"
  echo "$project_content" >> "$target_file"
  
  echo "Updated: $target_file"
}

#===================================================================================
# MAIN README UPDATE
#===================================================================================

# Update the main README.md file if it exists in both template and target
if [ -f "$TEMPLATE_DIR/README.md" ] && [ -f "$TARGET_DIR/README.md" ]; then
  update_readme "$TEMPLATE_DIR/README.md" "$TARGET_DIR/README.md"
fi

#===================================================================================
# DIRECTORY README FILES UPDATE
#===================================================================================

# Find and update all README.md files in subdirectories
# This ensures all documentation directories are updated with the latest structure
find "$TEMPLATE_DIR" -name "README.md" | while read source_readme; do
  # Extract the relative path from the template directory
  # This preserves the directory structure when updating
  rel_path="${source_readme#$TEMPLATE_DIR/}"
  
  # Construct the corresponding path in the target directory
  target_readme="$TARGET_DIR/$rel_path"
  
  # Create the directory if it doesn't exist in the target
  # This handles new directories added to the template
  target_dir=$(dirname "$target_readme")
  if [ ! -d "$target_dir" ]; then
    mkdir -p "$target_dir"
    echo "Created directory: $target_dir"
  fi
  
  # Update the README file using our intelligent update function
  update_readme "$source_readme" "$target_readme"
done

#===================================================================================
# PROCESS RULES UPDATE
#===================================================================================

# Update process rules files if the directories exist
# Process rules are typically not customized per project, so we can replace them directly
if [ -d "$TEMPLATE_DIR/process/rules" ] && [ -d "$TARGET_DIR/process/rules" ]; then
  find "$TEMPLATE_DIR/process/rules" -type f -name "*.mdc" | while read source_rule; do
    # Extract the relative path from the template directory
    rel_path="${source_rule#$TEMPLATE_DIR/}"
    
    # Construct the corresponding path in the target directory
    target_rule="$TARGET_DIR/$rel_path"
    
    # Create the directory if it doesn't exist in the target
    target_dir=$(dirname "$target_rule")
    if [ ! -d "$target_dir" ]; then
      mkdir -p "$target_dir"
      echo "Created directory: $target_dir"
    fi
    
    # Copy the rule file if it doesn't exist or is different
    # We use cmp to compare files and only update if there are differences
    if [ ! -f "$target_rule" ] || ! cmp -s "$source_rule" "$target_rule"; then
      cp "$source_rule" "$target_rule"
      echo "Updated: $target_rule"
    fi
  done
fi

#===================================================================================
# COMPLETION
#===================================================================================

echo "Documentation template update complete!"
echo ""
echo "Note: Backup files were created with .bak extension. You can remove them once you've verified the updates."
echo "Review the changes to ensure project-specific content was preserved correctly." 