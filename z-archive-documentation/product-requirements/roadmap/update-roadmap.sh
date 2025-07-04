#!/bin/bash

# Roadmap Generator and Markdown Summary Script
# This script updates the roadmap data and generates a Markdown summary

# Change to the script directory
cd "$(dirname "$0")"

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to use this script."
    exit 1
fi

# Check if required packages are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing required packages..."
    npm install
fi

# Parse command line arguments
OUTPUT_FORMAT="json"
GENERATE_MARKDOWN=true
OPEN_MARKDOWN=false

for arg in "$@"; do
    case $arg in
        --output=*)
            OUTPUT_FORMAT="${arg#*=}"
            ;;
        --no-markdown)
            GENERATE_MARKDOWN=false
            ;;
        --open)
            OPEN_MARKDOWN=true
            ;;
        --help)
            echo "Usage: ./update-roadmap.sh [options]"
            echo ""
            echo "Options:"
            echo "  --output=FORMAT    Comma-separated list of output formats (default: json)"
            echo "                     Available formats: json, html, svg, png"
            echo "  --no-markdown      Skip generating Markdown summary"
            echo "  --open             Open the Markdown summary after generation"
            echo "  --help             Show this help message"
            echo ""
            exit 0
            ;;
    esac
done

# Update roadmap data
echo "🔄 Updating roadmap data..."
node update-roadmap.js --output=$OUTPUT_FORMAT

# Generate Markdown summary if not disabled
if [ "$GENERATE_MARKDOWN" = true ]; then
    echo "📝 Generating Markdown summary..."
    node generate-markdown-summary.js
    
    # Open the Markdown summary if requested
    if [ "$OPEN_MARKDOWN" = true ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            open feature-summary.md
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            # Linux
            xdg-open feature-summary.md
        elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
            # Windows
            start feature-summary.md
        else
            echo "⚠️ Could not open Markdown summary automatically on this OS."
        fi
    fi
fi

echo "✅ Roadmap update completed successfully!" 