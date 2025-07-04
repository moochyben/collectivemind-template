#!/usr/bin/env node

/**
 * Feature Summary Markdown Generator
 * 
 * This script generates a Markdown summary of all features from the roadmap data,
 * grouped by category and showing their status.
 */

const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

// Configuration
const CONFIG_PATH = path.join(__dirname, 'roadmap-config.json');
const DATA_PATH = path.join(__dirname, 'roadmap-data.json');
const OUTPUT_PATH = path.join(__dirname, 'feature-summary.md');

/**
 * Generates a Markdown summary of features grouped by category
 */
async function generateMarkdownSummary() {
  try {
    // Load configuration and data
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    
    // Sort categories by order
    const sortedCategories = [...config.categories].sort((a, b) => a.order - b.order);
    
    // Create a map of status types for easy lookup
    const statusMap = new Map(config.statusTypes.map(status => [status.id, status]));
    const priorityMap = new Map(config.priorityLevels.map(priority => [priority.id, priority]));
    
    // Group features by category
    const featuresByCategory = {};
    sortedCategories.forEach(category => {
      featuresByCategory[category.id] = [];
    });
    
    // Add features to their respective categories
    data.features.forEach(feature => {
      if (featuresByCategory[feature.category]) {
        featuresByCategory[feature.category].push(feature);
      } else {
        // Handle features with unknown categories
        if (!featuresByCategory['uncategorized']) {
          featuresByCategory['uncategorized'] = [];
        }
        featuresByCategory['uncategorized'].push(feature);
      }
    });
    
    // Sort features within each category by status order and then by priority
    Object.keys(featuresByCategory).forEach(categoryId => {
      featuresByCategory[categoryId].sort((a, b) => {
        // First sort by status
        const statusA = statusMap.get(a.status);
        const statusB = statusMap.get(b.status);
        const statusOrderA = statusA ? statusA.order : 999;
        const statusOrderB = statusB ? statusB.order : 999;
        
        if (statusOrderA !== statusOrderB) {
          return statusOrderA - statusOrderB;
        }
        
        // Then sort by priority
        const priorityA = priorityMap.get(a.priority);
        const priorityB = priorityMap.get(b.priority);
        const priorityOrderA = priorityA ? priorityA.order : 999;
        const priorityOrderB = priorityB ? priorityB.order : 999;
        
        return priorityOrderA - priorityOrderB;
      });
    });
    
    // Generate Markdown content
    let markdown = `# Feature Summary\n\n`;
    markdown += `*Generated on ${format(new Date(), 'PPP')} at ${format(new Date(), 'pp')}*\n\n`;
    markdown += `This document provides a summary of all features in the product roadmap, grouped by category and ordered by status and priority.\n\n`;
    
    // Add table of contents
    markdown += `## Table of Contents\n\n`;
    sortedCategories.forEach(category => {
      if (featuresByCategory[category.id].length > 0) {
        markdown += `- [${category.name}](#${category.name.toLowerCase().replace(/\s+/g, '-')})\n`;
      }
    });
    if (featuresByCategory['uncategorized'] && featuresByCategory['uncategorized'].length > 0) {
      markdown += `- [Uncategorized](#uncategorized)\n`;
    }
    markdown += `\n`;
    
    // Add milestone summary
    markdown += `## Milestones\n\n`;
    markdown += `| Milestone | Date | Status | Features |\n`;
    markdown += `|-----------|------|--------|----------|\n`;
    
    data.milestones.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(milestone => {
      const featureNames = milestone.features.map(featureId => {
        const feature = data.features.find(f => f.id === featureId);
        return feature ? feature.name : featureId;
      }).join(', ');
      
      const statusText = milestone.status === 'completed' ? '✅ Completed' : 
                         milestone.status === 'in-progress' ? '🔄 In Progress' : 
                         '📅 Planned';
      
      markdown += `| **${milestone.name}** | ${format(new Date(milestone.date), 'PP')} | ${statusText} | ${featureNames} |\n`;
    });
    
    markdown += `\n`;
    
    // Add features by category
    sortedCategories.forEach(category => {
      const features = featuresByCategory[category.id];
      
      if (features.length > 0) {
        markdown += `## ${category.name}\n\n`;
        
        // Add feature table for this category
        markdown += `| Feature | Status | Priority | Progress | Timeline |\n`;
        markdown += `|---------|--------|----------|----------|----------|\n`;
        
        features.forEach(feature => {
          const status = statusMap.get(feature.status);
          const priority = priorityMap.get(feature.priority);
          
          const statusEmoji = status?.id === 'completed' ? '✅' : 
                             status?.id === 'in-progress' ? '🔄' : 
                             status?.id === 'review' ? '🔍' : 
                             '📅';
          
          const priorityEmoji = priority?.id === 'high' ? '🔴' : 
                               priority?.id === 'medium' ? '🟡' : 
                               '🟢';
          
          const progressBar = generateProgressBar(feature.progress);
          const timeline = `${format(new Date(feature.startDate), 'PP')} - ${format(new Date(feature.endDate), 'PP')}`;
          
          markdown += `| **[${feature.name}](${feature.documentationPath})** | ${statusEmoji} ${status?.name || feature.status} | ${priorityEmoji} ${priority?.name || feature.priority} | ${progressBar} ${feature.progress}% | ${timeline} |\n`;
        });
        
        markdown += `\n`;
      }
    });
    
    // Add uncategorized features if any
    if (featuresByCategory['uncategorized'] && featuresByCategory['uncategorized'].length > 0) {
      markdown += `## Uncategorized\n\n`;
      
      // Add feature table for uncategorized features
      markdown += `| Feature | Status | Priority | Progress | Timeline |\n`;
      markdown += `|---------|--------|----------|----------|----------|\n`;
      
      featuresByCategory['uncategorized'].forEach(feature => {
        const status = statusMap.get(feature.status);
        const priority = priorityMap.get(feature.priority);
        
        const statusEmoji = status?.id === 'completed' ? '✅' : 
                           status?.id === 'in-progress' ? '🔄' : 
                           status?.id === 'review' ? '🔍' : 
                           '📅';
        
        const priorityEmoji = priority?.id === 'high' ? '🔴' : 
                             priority?.id === 'medium' ? '🟡' : 
                             '🟢';
        
        const progressBar = generateProgressBar(feature.progress);
        const timeline = `${format(new Date(feature.startDate), 'PP')} - ${format(new Date(feature.endDate), 'PP')}`;
        
        markdown += `| **[${feature.name}](${feature.documentationPath})** | ${statusEmoji} ${status?.name || feature.status} | ${priorityEmoji} ${priority?.name || feature.priority} | ${progressBar} ${feature.progress}% | ${timeline} |\n`;
      });
      
      markdown += `\n`;
    }
    
    // Add dependencies section
    markdown += `## Feature Dependencies\n\n`;
    
    // Create a map of features with dependencies
    const featuresWithDependencies = data.features.filter(feature => feature.dependencies.length > 0);
    
    if (featuresWithDependencies.length > 0) {
      markdown += `The following features have dependencies:\n\n`;
      
      featuresWithDependencies.forEach(feature => {
        markdown += `- **${feature.name}** depends on:\n`;
        
        feature.dependencies.forEach(depId => {
          const dependency = data.features.find(f => f.id === depId);
          if (dependency) {
            const status = statusMap.get(dependency.status);
            const statusEmoji = status?.id === 'completed' ? '✅' : 
                               status?.id === 'in-progress' ? '🔄' : 
                               status?.id === 'review' ? '🔍' : 
                               '📅';
            
            markdown += `  - ${statusEmoji} [${dependency.name}](${dependency.documentationPath})\n`;
          } else {
            markdown += `  - Unknown dependency: ${depId}\n`;
          }
        });
        
        markdown += `\n`;
      });
    } else {
      markdown += `No features have dependencies.\n\n`;
    }
    
    // Add team assignments section
    markdown += `## Team Assignments\n\n`;
    
    // Create a map of team members and their assigned features
    const teamAssignments = {};
    
    // Add owners
    data.features.forEach(feature => {
      if (!teamAssignments[feature.owner]) {
        teamAssignments[feature.owner] = {
          owned: [],
          contributing: []
        };
      }
      
      teamAssignments[feature.owner].owned.push(feature);
    });
    
    // Add contributors
    data.features.forEach(feature => {
      feature.contributors.forEach(contributor => {
        if (!teamAssignments[contributor]) {
          teamAssignments[contributor] = {
            owned: [],
            contributing: []
          };
        }
        
        // Only add as contributor if not already the owner
        if (contributor !== feature.owner) {
          teamAssignments[contributor].contributing.push(feature);
        }
      });
    });
    
    // Sort team members alphabetically
    const sortedTeamMembers = Object.keys(teamAssignments).sort();
    
    sortedTeamMembers.forEach(member => {
      const assignments = teamAssignments[member];
      
      markdown += `### ${member}\n\n`;
      
      if (assignments.owned.length > 0) {
        markdown += `**Owning:**\n\n`;
        assignments.owned.forEach(feature => {
          const status = statusMap.get(feature.status);
          const statusEmoji = status?.id === 'completed' ? '✅' : 
                             status?.id === 'in-progress' ? '🔄' : 
                             status?.id === 'review' ? '🔍' : 
                             '📅';
          
          markdown += `- ${statusEmoji} [${feature.name}](${feature.documentationPath})\n`;
        });
        markdown += `\n`;
      }
      
      if (assignments.contributing.length > 0) {
        markdown += `**Contributing to:**\n\n`;
        assignments.contributing.forEach(feature => {
          const status = statusMap.get(feature.status);
          const statusEmoji = status?.id === 'completed' ? '✅' : 
                             status?.id === 'in-progress' ? '🔄' : 
                             status?.id === 'review' ? '🔍' : 
                             '📅';
          
          markdown += `- ${statusEmoji} [${feature.name}](${feature.documentationPath})\n`;
        });
        markdown += `\n`;
      }
    });
    
    // Write the Markdown file
    fs.writeFileSync(OUTPUT_PATH, markdown);
    
    console.log(`Feature summary generated successfully at ${OUTPUT_PATH}`);
    return OUTPUT_PATH;
  } catch (error) {
    console.error('Error generating Markdown summary:', error);
    throw error;
  }
}

/**
 * Generates a progress bar string based on the given percentage
 * @param {number} percentage - The progress percentage (0-100)
 * @returns {string} A string representing the progress bar
 */
function generateProgressBar(percentage) {
  const width = 10;
  const filledWidth = Math.round((percentage / 100) * width);
  const emptyWidth = width - filledWidth;
  
  return `[${'█'.repeat(filledWidth)}${' '.repeat(emptyWidth)}]`;
}

// Run the generator if this script is executed directly
if (require.main === module) {
  generateMarkdownSummary().catch(error => {
    console.error('Failed to generate feature summary:', error);
    process.exit(1);
  });
}

module.exports = { generateMarkdownSummary }; 