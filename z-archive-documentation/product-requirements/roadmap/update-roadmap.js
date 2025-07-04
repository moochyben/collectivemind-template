#!/usr/bin/env node

/**
 * Roadmap Generator Script
 * 
 * This script scans the product documentation directories and generates
 * an updated roadmap data file based on the configuration.
 * 
 * Usage: node update-roadmap.js [--output=<format>]
 * Options:
 *   --output=json,html,svg,png  Output formats (default: json)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');
const { execSync } = require('child_process');
const { generateMarkdownSummary } = require('./generate-markdown-summary');

// Configuration paths
const CONFIG_PATH = path.join(__dirname, 'roadmap-config.json');
const DATA_PATH = path.join(__dirname, 'roadmap-data.json');

// Load configuration
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// Parse command line arguments
const args = process.argv.slice(2);
const outputFormats = args
  .find(arg => arg.startsWith('--output='))
  ?.split('=')[1]
  ?.split(',') || ['json'];

/**
 * Extract feature information from a markdown file
 * @param {string} filePath - Path to the markdown file
 * @param {string} type - Type of documentation (feature, implementation)
 * @returns {Object} - Extracted feature information
 */
function extractFeatureInfo(filePath, type) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Extract directory name which contains the date and feature name
    const dirMatch = filePath.match(/(\d{4}-\d{2}-\d{2}-[^\/]+)/);
    const dirName = dirMatch ? dirMatch[1] : '';
    const [dateStr, ...featureNameParts] = dirName.split('-');
    const featureName = featureNameParts.join('-');
    
    // Basic feature info
    const feature = {
      id: featureName,
      name: data.title || featureName.replace(/-/g, ' '),
      description: data.description || extractDescription(content),
      category: data.category || inferCategory(content),
      status: data.status || inferStatus(content),
      priority: data.priority || inferPriority(content),
      startDate: dateStr,
      documentationPath: filePath
    };
    
    // Additional info from implementation plan
    if (type === 'implementation') {
      const phases = extractPhases(content);
      if (phases.length > 0) {
        const lastPhase = phases[phases.length - 1];
        feature.endDate = lastPhase.endDate || calculateEndDate(dateStr, 30); // Default to 30 days
        feature.progress = calculateProgress(phases);
        feature.dependencies = extractDependencies(content);
        feature.owner = extractOwner(content);
        feature.contributors = extractContributors(content);
      }
    }
    
    return feature;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

/**
 * Extract a short description from content
 * @param {string} content - Markdown content
 * @returns {string} - Extracted description
 */
function extractDescription(content) {
  const descriptionMatch = content.match(/## Overview\s+([^\n]+)/);
  return descriptionMatch ? descriptionMatch[1].trim() : '';
}

/**
 * Infer category from content
 * @param {string} content - Markdown content
 * @returns {string} - Inferred category
 */
function inferCategory(content) {
  const categories = {
    'core-features': ['core', 'essential', 'fundamental'],
    'user-experience': ['ux', 'user experience', 'interface', 'ui'],
    'productivity': ['productivity', 'efficiency', 'workflow', 'pomodoro'],
    'integrations': ['integration', 'connect', 'api', 'third-party']
  };
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => content.toLowerCase().includes(keyword))) {
      return category;
    }
  }
  
  return 'core-features'; // Default category
}

/**
 * Infer status from content
 * @param {string} content - Markdown content
 * @returns {string} - Inferred status
 */
function inferStatus(content) {
  if (content.toLowerCase().includes('completed') || 
      content.toLowerCase().includes('finished')) {
    return 'completed';
  } else if (content.toLowerCase().includes('delayed') || 
             content.toLowerCase().includes('postponed')) {
    return 'delayed';
  } else if (content.toLowerCase().includes('in progress') || 
             content.toLowerCase().includes('ongoing')) {
    return 'in-progress';
  }
  
  return 'planned'; // Default status
}

/**
 * Infer priority from content
 * @param {string} content - Markdown content
 * @returns {string} - Inferred priority
 */
function inferPriority(content) {
  if (content.toLowerCase().includes('high priority') || 
      content.toLowerCase().includes('critical')) {
    return 'high';
  } else if (content.toLowerCase().includes('low priority') || 
             content.toLowerCase().includes('minor')) {
    return 'low';
  }
  
  return 'medium'; // Default priority
}

/**
 * Extract implementation phases from content
 * @param {string} content - Markdown content
 * @returns {Array} - Extracted phases
 */
function extractPhases(content) {
  const phasesMatch = content.match(/## Implementation Phases([\s\S]*?)(?:##|$)/);
  if (!phasesMatch) return [];
  
  const phasesContent = phasesMatch[1];
  const phaseMatches = phasesContent.matchAll(/### Phase \d+[: ]+(.*?)(?:\(Week (\d+)\))?\s+([\s\S]*?)(?=### Phase \d+|$)/g);
  
  const phases = [];
  for (const match of phaseMatches) {
    const phaseName = match[1].trim();
    const weekNumber = match[2] ? parseInt(match[2]) : null;
    const phaseContent = match[3].trim();
    
    phases.push({
      name: phaseName,
      week: weekNumber,
      content: phaseContent,
      endDate: null // Will be calculated later
    });
  }
  
  return phases;
}

/**
 * Calculate end date based on start date and duration
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {number} durationDays - Duration in days
 * @returns {string} - End date in YYYY-MM-DD format
 */
function calculateEndDate(startDate, durationDays) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + durationDays);
  return date.toISOString().split('T')[0];
}

/**
 * Calculate progress based on phases
 * @param {Array} phases - Implementation phases
 * @returns {number} - Progress percentage
 */
function calculateProgress(phases) {
  if (phases.length === 0) return 0;
  
  // Check for completed phases
  const completedPhases = phases.filter(phase => 
    phase.content.toLowerCase().includes('completed') || 
    phase.content.toLowerCase().includes('finished')
  ).length;
  
  return Math.round((completedPhases / phases.length) * 100);
}

/**
 * Extract dependencies from content
 * @param {string} content - Markdown content
 * @returns {Array} - Extracted dependencies
 */
function extractDependencies(content) {
  const dependenciesMatch = content.match(/## Dependencies([\s\S]*?)(?:##|$)/);
  if (!dependenciesMatch) return [];
  
  const dependenciesContent = dependenciesMatch[1];
  const dependencies = [];
  
  const listItems = dependenciesContent.match(/- (.*?)(?=\n|$)/g);
  if (listItems) {
    for (const item of listItems) {
      const dependency = item.replace(/- /, '').trim();
      if (dependency) {
        // Convert to kebab-case ID
        dependencies.push(dependency.toLowerCase().replace(/\s+/g, '-'));
      }
    }
  }
  
  return dependencies;
}

/**
 * Extract owner from content
 * @param {string} content - Markdown content
 * @returns {string} - Extracted owner
 */
function extractOwner(content) {
  const ownerMatch = content.match(/Owner: (.*?)(?=\n|$)/);
  return ownerMatch ? ownerMatch[1].trim() : 'Product Team';
}

/**
 * Extract contributors from content
 * @param {string} content - Markdown content
 * @returns {Array} - Extracted contributors
 */
function extractContributors(content) {
  const contributorsMatch = content.match(/Contributors: (.*?)(?=\n|$)/);
  if (!contributorsMatch) return ['Product Team'];
  
  return contributorsMatch[1].split(',').map(contributor => contributor.trim());
}

/**
 * Extract milestones from features
 * @param {Array} features - Feature data
 * @returns {Array} - Extracted milestones
 */
function extractMilestones(features) {
  const milestones = [];
  const milestoneMap = {};
  
  // Group features by quarter
  for (const feature of features) {
    if (!feature.endDate) continue;
    
    const endDate = new Date(feature.endDate);
    const year = endDate.getFullYear();
    const quarter = Math.floor(endDate.getMonth() / 3) + 1;
    const milestoneId = `q${quarter}-${year}-release`;
    
    if (!milestoneMap[milestoneId]) {
      const quarterEndMonth = quarter * 3;
      const quarterEndDay = [31, 30, 30, 31][quarter - 1];
      const quarterEndDate = `${year}-${String(quarterEndMonth).padStart(2, '0')}-${quarterEndDay}`;
      
      milestoneMap[milestoneId] = {
        id: milestoneId,
        name: `Q${quarter} ${year} Release`,
        date: quarterEndDate,
        description: `Release of ${quarter === 1 ? 'Q1' : quarter === 2 ? 'Q2' : quarter === 3 ? 'Q3' : 'Q4'} ${year} features`,
        features: [],
        status: 'planned'
      };
      
      milestones.push(milestoneMap[milestoneId]);
    }
    
    milestoneMap[milestoneId].features.push(feature.id);
    
    // Update milestone status based on features
    if (feature.status === 'completed' && 
        milestoneMap[milestoneId].features.every(id => 
          features.find(f => f.id === id)?.status === 'completed'
        )) {
      milestoneMap[milestoneId].status = 'completed';
    } else if (feature.status === 'in-progress') {
      milestoneMap[milestoneId].status = 'in-progress';
    }
  }
  
  return milestones;
}

/**
 * Generate roadmap data from documentation
 * @returns {Object} - Generated roadmap data
 */
async function generateRoadmapData() {
  const features = [];
  const processedPaths = new Set();
  
  // Process each documentation source
  for (const source of config.documentationSources) {
    const files = glob.sync(source.pattern, { cwd: source.path, absolute: true });
    
    for (const file of files) {
      const featureInfo = extractFeatureInfo(file, source.type);
      if (!featureInfo) continue;
      
      // Check if we've already processed this feature
      const existingFeatureIndex = features.findIndex(f => f.id === featureInfo.id);
      
      if (existingFeatureIndex === -1) {
        // New feature
        features.push(featureInfo);
      } else {
        // Update existing feature
        features[existingFeatureIndex] = {
          ...features[existingFeatureIndex],
          ...featureInfo,
          // Preserve paths
          [source.type === 'feature' ? 'documentationPath' : 'implementationPath']: file
        };
      }
      
      processedPaths.add(file);
    }
  }
  
  // Generate milestones
  const milestones = extractMilestones(features);
  
  // Load existing data to preserve any manual edits
  let existingData = {};
  try {
    existingData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  } catch (error) {
    console.log('No existing roadmap data found, creating new file.');
  }
  
  // Merge with existing data
  const mergedFeatures = features.map(feature => {
    const existingFeature = existingData.features?.find(f => f.id === feature.id);
    return existingFeature ? { ...existingFeature, ...feature } : feature;
  });
  
  // Add features from existing data that weren't found in documentation
  if (existingData.features) {
    for (const existingFeature of existingData.features) {
      if (!mergedFeatures.some(f => f.id === existingFeature.id)) {
        mergedFeatures.push(existingFeature);
      }
    }
  }
  
  // Create final roadmap data
  const roadmapData = {
    lastUpdated: new Date().toISOString(),
    features: mergedFeatures,
    milestones
  };
  
  return roadmapData;
}

/**
 * Generate visual outputs
 * @param {Object} roadmapData - Roadmap data
 * @param {Array} formats - Output formats
 */
function generateVisualOutputs(roadmapData, formats) {
  // Save JSON output
  fs.writeFileSync(DATA_PATH, JSON.stringify(roadmapData, null, 2));
  console.log(`✅ Roadmap data saved to ${DATA_PATH}`);
  
  // Update config with last refreshed timestamp
  config.refreshConfig.lastRefreshed = new Date().toISOString();
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  
  // Generate other formats if requested
  if (formats.includes('html')) {
    generateHtmlOutput(roadmapData);
  }
  
  if (formats.includes('svg') || formats.includes('png')) {
    console.log('SVG/PNG generation requires the React component to be built first.');
    console.log('Please run: npm run build-roadmap');
  }
}

/**
 * Generate HTML output
 * @param {Object} roadmapData - Roadmap data
 */
function generateHtmlOutput(roadmapData) {
  const htmlPath = path.join(__dirname, 'roadmap.html');
  
  // Simple HTML template
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.roadmapTitle}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    .last-updated {
      text-align: right;
      font-size: 0.8em;
      color: #666;
      margin-bottom: 20px;
    }
    .timeline {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }
    .timeline-header {
      display: grid;
      grid-template-columns: 200px repeat(${Math.ceil((new Date(config.timelineConfig.endDate) - new Date(config.timelineConfig.startDate)) / (1000 * 60 * 60 * 24 * 30))}, 1fr);
      gap: 1px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .timeline-header-cell {
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 0.8em;
    }
    .timeline-row {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 20px;
      margin-bottom: 10px;
    }
    .timeline-label {
      font-weight: bold;
    }
    .timeline-bar-container {
      position: relative;
      height: 30px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .timeline-bar {
      position: absolute;
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.8em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 10px;
    }
    .milestone {
      position: absolute;
      top: -15px;
      width: 10px;
      height: 10px;
      background-color: #333;
      border-radius: 50%;
      transform: translateX(-50%);
    }
    .milestone::after {
      content: attr(data-name);
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.7em;
      white-space: nowrap;
    }
    .feature-details {
      margin-top: 40px;
    }
    .feature-card {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      margin-bottom: 20px;
    }
    .feature-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .feature-title {
      margin: 0;
      font-size: 1.2em;
    }
    .feature-status {
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 0.8em;
      color: white;
    }
    .feature-description {
      margin-bottom: 15px;
    }
    .feature-meta {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
      font-size: 0.9em;
    }
    .feature-meta-item {
      display: flex;
      flex-direction: column;
    }
    .feature-meta-label {
      font-weight: bold;
      font-size: 0.8em;
      color: #666;
    }
    .progress-bar {
      height: 8px;
      background-color: #f5f5f5;
      border-radius: 4px;
      margin-top: 5px;
    }
    .progress-value {
      height: 100%;
      border-radius: 4px;
      background-color: #4285F4;
    }
  </style>
</head>
<body>
  <h1>${config.roadmapTitle}</h1>
  <div class="last-updated">Last updated: ${new Date(roadmapData.lastUpdated).toLocaleString()}</div>
  
  <div class="timeline">
    <div class="timeline-header">
      <div class="timeline-header-cell">Feature</div>
      ${generateTimelineHeaders()}
    </div>
    
    ${roadmapData.features.map(feature => `
      <div class="timeline-row">
        <div class="timeline-label">${feature.name}</div>
        <div class="timeline-bar-container">
          ${generateTimelineBar(feature)}
        </div>
      </div>
    `).join('')}
  </div>
  
  <div class="feature-details">
    <h2>Feature Details</h2>
    ${roadmapData.features.map(feature => `
      <div class="feature-card">
        <div class="feature-header">
          <h3 class="feature-title">${feature.name}</h3>
          <span class="feature-status" style="background-color: ${getStatusColor(feature.status)}">${getStatusName(feature.status)}</span>
        </div>
        <div class="feature-description">${feature.description}</div>
        <div class="feature-meta">
          <div class="feature-meta-item">
            <span class="feature-meta-label">Category</span>
            <span>${getCategoryName(feature.category)}</span>
          </div>
          <div class="feature-meta-item">
            <span class="feature-meta-label">Priority</span>
            <span>${getPriorityName(feature.priority)}</span>
          </div>
          <div class="feature-meta-item">
            <span class="feature-meta-label">Start Date</span>
            <span>${formatDate(feature.startDate)}</span>
          </div>
          <div class="feature-meta-item">
            <span class="feature-meta-label">End Date</span>
            <span>${formatDate(feature.endDate)}</span>
          </div>
          <div class="feature-meta-item">
            <span class="feature-meta-label">Progress</span>
            <div class="progress-bar">
              <div class="progress-value" style="width: ${feature.progress}%"></div>
            </div>
          </div>
          ${feature.owner ? `
            <div class="feature-meta-item">
              <span class="feature-meta-label">Owner</span>
              <span>${feature.owner}</span>
            </div>
          ` : ''}
          ${feature.dependencies && feature.dependencies.length > 0 ? `
            <div class="feature-meta-item">
              <span class="feature-meta-label">Dependencies</span>
              <span>${feature.dependencies.map(dep => {
                const depFeature = roadmapData.features.find(f => f.id === dep);
                return depFeature ? depFeature.name : dep;
              }).join(', ')}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('')}
  </div>
  
  <script>
    // Add any interactive functionality here
  </script>
</body>
</html>`;
  
  fs.writeFileSync(htmlPath, html);
  console.log(`✅ HTML roadmap saved to ${htmlPath}`);
  
  /**
   * Generate timeline headers
   * @returns {string} - HTML for timeline headers
   */
  function generateTimelineHeaders() {
    const startDate = new Date(config.timelineConfig.startDate);
    const endDate = new Date(config.timelineConfig.endDate);
    const months = [];
    
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      months.push(`${currentDate.toLocaleString('default', { month: 'short' })} ${year}`);
      
      currentDate.setMonth(month + 1);
    }
    
    return months.map(month => `<div class="timeline-header-cell">${month}</div>`).join('');
  }
  
  /**
   * Generate timeline bar for a feature
   * @param {Object} feature - Feature data
   * @returns {string} - HTML for timeline bar
   */
  function generateTimelineBar(feature) {
    if (!feature.startDate || !feature.endDate) return '';
    
    const startDate = new Date(feature.startDate);
    const endDate = new Date(feature.endDate);
    const timelineStart = new Date(config.timelineConfig.startDate);
    const timelineEnd = new Date(config.timelineConfig.endDate);
    
    const timelineWidth = timelineEnd - timelineStart;
    const startPosition = ((startDate - timelineStart) / timelineWidth) * 100;
    const width = ((endDate - startDate) / timelineWidth) * 100;
    
    const statusColor = getStatusColor(feature.status);
    
    return `<div class="timeline-bar" style="left: ${startPosition}%; width: ${width}%; background-color: ${statusColor}">
      ${feature.name}
    </div>`;
  }
  
  /**
   * Get status color
   * @param {string} statusId - Status ID
   * @returns {string} - Status color
   */
  function getStatusColor(statusId) {
    const status = config.statusTypes.find(s => s.id === statusId);
    return status ? status.color : '#9AA0A6';
  }
  
  /**
   * Get status name
   * @param {string} statusId - Status ID
   * @returns {string} - Status name
   */
  function getStatusName(statusId) {
    const status = config.statusTypes.find(s => s.id === statusId);
    return status ? status.name : 'Unknown';
  }
  
  /**
   * Get category name
   * @param {string} categoryId - Category ID
   * @returns {string} - Category name
   */
  function getCategoryName(categoryId) {
    const category = config.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  }
  
  /**
   * Get priority name
   * @param {string} priorityId - Priority ID
   * @returns {string} - Priority name
   */
  function getPriorityName(priorityId) {
    const priority = config.priorityLevels.find(p => p.id === priorityId);
    return priority ? priority.name : 'Unknown';
  }
  
  /**
   * Format date
   * @param {string} dateStr - Date string
   * @returns {string} - Formatted date
   */
  function formatDate(dateStr) {
    if (!dateStr) return 'TBD';
    return new Date(dateStr).toLocaleDateString();
  }
}

// Main execution
async function main() {
  try {
    console.log('Generating roadmap data...');
    const roadmapData = await generateRoadmapData();
    
    console.log('Generating visual outputs...');
    generateVisualOutputs(roadmapData, outputFormats);
    
    console.log('✅ Roadmap generation completed successfully!');
    
    // Generate Markdown summary
    await generateMarkdownSummary();
    
    return DATA_PATH;
  } catch (error) {
    console.error('❌ Error generating roadmap:', error);
    process.exit(1);
  }
}

main(); 