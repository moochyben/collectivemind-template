#!/bin/bash

# Script to push the documentation template to a remote repository

# Default to moochyben's GitHub account
DEFAULT_URL="https://github.com/moochyben/documentation-template.git"

# Display usage information
function show_usage {
  echo "Usage: $0 [OPTIONS]"
  echo "Push the documentation template to a GitHub repository."
  echo ""
  echo "Options:"
  echo "  <remote_url>    GitHub repository URL (default: $DEFAULT_URL)"
  echo ""
  echo "Before running this script:"
  echo "1. Create a new repository on GitHub at https://github.com/new"
  echo "2. Name it 'documentation-template' (or your preferred name)"
  echo "3. Do NOT initialize it with README, .gitignore, or license"
  echo "4. Click 'Create repository'"
  echo ""
  echo "Examples:"
  echo "  $0                                                  # Use default URL"
  echo "  $0 https://github.com/moochyben/docs-template.git  # Use custom URL"
  echo "  $0 git@github.com:moochyben/docs-template.git      # Use SSH URL"
}

# Check if help was requested
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  show_usage
  exit 0
fi

# Check if a remote URL was provided
if [ $# -eq 0 ]; then
  echo "No remote URL provided, using default: $DEFAULT_URL"
  REMOTE_URL=$DEFAULT_URL
else
  REMOTE_URL=$1
fi

# Check if remote origin already exists
if git remote | grep -q "^origin$"; then
  echo "Remote 'origin' already exists. Removing it to add the new one."
  git remote remove origin
fi

# Add the remote repository
git remote add origin "$REMOTE_URL"

# Push to the remote repository
echo "Pushing to $REMOTE_URL..."
echo "If you're prompted for credentials, enter your GitHub username and personal access token."
echo "If you don't have a personal access token, create one at: https://github.com/settings/tokens"
echo ""

if git push -u origin main; then
  echo "Documentation template successfully pushed to $REMOTE_URL"
  echo "You can now clone it from the remote repository in future projects."
else
  echo "Failed to push to $REMOTE_URL"
  echo ""
  echo "Possible reasons for failure:"
  echo "1. The repository doesn't exist on GitHub yet. Create it at: https://github.com/new"
  echo "2. Authentication failed. Make sure you're using the correct username and password/token."
  echo "3. You don't have permission to push to this repository."
  echo ""
  echo "For SSH authentication issues, make sure your SSH key is set up correctly:"
  echo "https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
fi 