#!/bin/bash

# Script to push the documentation template to a remote repository

# Default to moochyben's GitHub account
DEFAULT_URL="https://github.com/moochyben/documentation-template.git"

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
git push -u origin main

echo "Documentation template pushed to $REMOTE_URL"
echo "You can now clone it from the remote repository in future projects." 