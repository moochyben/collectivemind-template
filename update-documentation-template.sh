#!/bin/bash

# Script to update documentation template files in existing projects
# This script will update README files and structure while preserving project-specific content

# Display usage information
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

# Check if help was requested
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
  show_usage
  exit 0
fi

# Check if target directory was provided
if [ "$1" != "--target" ] || [ -z "$2" ]; then
  echo "Error: Target directory not specified."
  show_usage
  exit 1
fi

TARGET_DIR="$2"

# Check if target directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Target directory '$TARGET_DIR' does not exist."
  exit 1
fi

# Source template directory
TEMPLATE_DIR="$(dirname "$0")/documentation-template"

# Check if template directory exists
if [ ! -d "$TEMPLATE_DIR" ]; then
  echo "Error: Template directory '$TEMPLATE_DIR' does not exist."
  exit 1
fi

echo "Updating documentation template in $TARGET_DIR..."

# Function to update README files
update_readme() {
  local source_file="$1"
  local target_file="$2"
  
  # If target file doesn't exist, just copy the source file
  if [ ! -f "$target_file" ]; then
    cp "$source_file" "$target_file"
    echo "Created new file: $target_file"
    return
  fi
  
  # Create a backup of the target file
  cp "$target_file" "${target_file}.bak"
  
  # Extract the project-specific content (everything after the "Purpose" section)
  local project_content=$(awk '/^## Purpose/,0{print}' "$target_file")
  
  # Extract the template structure (everything before the "Purpose" section)
  local template_structure=$(awk '/^## Purpose/{exit} {print}' "$source_file")
  
  # If no Purpose section exists, preserve the entire file
  if [ -z "$project_content" ]; then
    echo "Warning: Could not identify standard sections in $target_file"
    echo "File not updated. A backup was created at ${target_file}.bak"
    return
  fi
  
  # Combine the updated template structure with the project-specific content
  echo "$template_structure" > "$target_file"
  echo "$project_content" >> "$target_file"
  
  echo "Updated: $target_file"
}

# Update main README.md
if [ -f "$TEMPLATE_DIR/README.md" ] && [ -f "$TARGET_DIR/README.md" ]; then
  update_readme "$TEMPLATE_DIR/README.md" "$TARGET_DIR/README.md"
fi

# Update directory README files
find "$TEMPLATE_DIR" -name "README.md" | while read source_readme; do
  # Get the relative path from the template directory
  rel_path="${source_readme#$TEMPLATE_DIR/}"
  
  # Construct the target path
  target_readme="$TARGET_DIR/$rel_path"
  
  # Create the directory if it doesn't exist
  target_dir=$(dirname "$target_readme")
  if [ ! -d "$target_dir" ]; then
    mkdir -p "$target_dir"
    echo "Created directory: $target_dir"
  fi
  
  # Update the README file
  update_readme "$source_readme" "$target_readme"
done

# Update process rules
if [ -d "$TEMPLATE_DIR/process/rules" ] && [ -d "$TARGET_DIR/process/rules" ]; then
  find "$TEMPLATE_DIR/process/rules" -type f -name "*.mdc" | while read source_rule; do
    # Get the relative path from the template directory
    rel_path="${source_rule#$TEMPLATE_DIR/}"
    
    # Construct the target path
    target_rule="$TARGET_DIR/$rel_path"
    
    # Create the directory if it doesn't exist
    target_dir=$(dirname "$target_rule")
    if [ ! -d "$target_dir" ]; then
      mkdir -p "$target_dir"
      echo "Created directory: $target_dir"
    fi
    
    # Copy the rule file if it doesn't exist or is different
    if [ ! -f "$target_rule" ] || ! cmp -s "$source_rule" "$target_rule"; then
      cp "$source_rule" "$target_rule"
      echo "Updated: $target_rule"
    fi
  done
fi

echo "Documentation template update complete!"
echo ""
echo "Note: Backup files were created with .bak extension. You can remove them once you've verified the updates."
echo "Review the changes to ensure project-specific content was preserved correctly." 