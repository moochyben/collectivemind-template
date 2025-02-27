#!/bin/bash

# Script to push the documentation template to a remote repository

# Check if a remote URL was provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 <remote_url>"
  echo "Example: $0 https://github.com/yourusername/documentation-template.git"
  exit 1
fi

REMOTE_URL=$1

# Add the remote repository
git remote add origin "$REMOTE_URL"

# Push to the remote repository
git push -u origin main

echo "Documentation template pushed to $REMOTE_URL"
echo "You can now clone it from the remote repository in future projects." 