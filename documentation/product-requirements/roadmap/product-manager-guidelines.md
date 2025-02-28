# Product Manager Guidelines for Roadmap Management

## Overview

This document provides guidelines for Product Managers on how to effectively use and maintain the product roadmap visualization and Markdown summary tools. These tools are designed to help you communicate product strategy, track feature development, and maintain alignment with stakeholders and development teams.

## Responsibilities

As a Product Manager, your responsibilities regarding roadmap management include:

1. **Strategic Alignment**: Ensure the roadmap reflects the product strategy and business objectives
2. **Feature Definition**: Create and maintain comprehensive feature documentation
3. **Prioritization**: Regularly review and adjust feature priorities based on business value and dependencies
4. **Stakeholder Management**: Use the roadmap to communicate plans and progress to stakeholders
5. **Cross-functional Coordination**: Align with engineering, design, and other teams on feature implementation
6. **Progress Monitoring**: Track feature development against strategic goals
7. **Outcome Measurement**: Assess the impact of delivered features against success metrics

## Recommended Workflow

### 1. Creating New Features

When adding a new feature to the roadmap:

1. Create the feature directory with the appropriate date prefix:
   ```bash
   mkdir -p documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name
   ```

2. Create the PRD with all required metadata:
   ```bash
   touch documentation/product-requirements/features/$(date +%Y-%m-%d)-feature-name/prd.md
   ```

3. Include the following frontmatter in your PRD:
   ```markdown
   ---
   title: Feature Name
   description: Concise description of the feature
   category: core-features  # Choose from existing categories
   status: planning  # planning, in-progress, review, completed
   priority: high  # high, medium, low
   startDate: YYYY-MM-DD
   endDate: YYYY-MM-DD
   progress: 0  # 0-100
   dependencies: []  # List of feature IDs this feature depends on
   owner: Product Manager Name
   contributors: [Designer Name, Tech Lead Name]
   ---
   ```

4. Run the roadmap update to see your feature in the visualization:
   ```bash
   ./update-roadmap.sh --open
   ```

### 2. Quarterly Planning

During quarterly planning:

- Generate the latest roadmap visualization and Markdown summary
- Use the milestone view to plan feature groupings for upcoming quarters
- Review dependencies to ensure logical sequencing of features
- Assess team assignments to ensure balanced workload across teams
- Update feature priorities based on business objectives and market feedback

### 3. Monthly Reviews

On a monthly basis:

- Update the roadmap to reflect current status and progress
- Review features that are behind schedule or at risk
- Adjust priorities and timelines as needed
- Communicate changes to stakeholders using the Markdown summary

### 4. Feature Status Updates

When updating feature status:

1. Edit the PRD frontmatter to update status, progress, and other relevant fields
2. If moving to "in-progress", ensure the implementation plan is created:
   ```bash
   mkdir -p documentation/product-requirements/features/YYYY-MM-DD-feature-name/implementation
   touch documentation/product-requirements/features/YYYY-MM-DD-feature-name/implementation/implementation-plan.md
   ```
3. Run the roadmap update to reflect the changes:
   ```bash
   ./update-roadmap.sh
   ```

### 5. Stakeholder Communications

For stakeholder updates:

- Generate the Markdown summary before stakeholder meetings
- Focus on milestones and high-level progress in executive communications
- Use the category-based feature lists to discuss progress in specific areas
- Highlight dependencies and risks that may impact delivery timelines

## Best Practices

### Documentation Quality

- Write clear, concise feature descriptions that communicate user value
- Include specific, measurable acceptance criteria for each feature
- Document dependencies explicitly, including external dependencies
- Keep status and progress information up-to-date
- Include links to relevant research, designs, and technical specifications

### Strategic Alignment

- Regularly review the roadmap against product strategy and business objectives
- Ensure each feature has a clear connection to strategic goals
- Use the category groupings to maintain balance across different product areas
- Adjust priorities based on market feedback and business needs

### Cross-functional Collaboration

- Share the roadmap visualization with design and engineering teams
- Use the team assignments section to facilitate resource planning discussions
- Review dependencies with technical leads to validate feasibility
- Collaborate with project managers on timeline and resource allocation

### Metrics and Success Tracking

- Define clear success metrics for each feature in the PRD
- Track feature impact after release
- Use the progress tracking to identify bottlenecks in the development process
- Measure the accuracy of timeline estimates to improve future planning

## Roadmap Configuration

### Customizing Categories

To add or modify feature categories:

1. Edit the `roadmap-config.json` file
2. Update the `categories` array:
   ```json
   "categories": [
     {
       "id": "new-category",
       "name": "New Category Name",
       "color": "#HEX_COLOR",
       "order": 5
     }
   ]
   ```
3. Run the roadmap update to apply changes

### Adjusting Timeline View

To change the timeline range:

1. Edit the `roadmap-config.json` file
2. Update the `timelineConfig` object:
   ```json
   "timelineConfig": {
     "startDate": "2023-01-01",
     "endDate": "2024-12-31",
     "timeUnits": ["quarter", "month"],
     "defaultView": "quarter"
   }
   ```

## Troubleshooting

### Common Issues

1. **Features Not Appearing in Roadmap**
   - Check that the PRD has all required frontmatter fields
   - Verify the file path follows the expected structure
   - Ensure the feature ID is unique

2. **Incorrect Dependencies**
   - Verify that dependency IDs match the actual feature IDs
   - Check for circular dependencies
   - Update dependency lists when feature IDs change

3. **Visualization Issues**
   - Check for date format consistency (YYYY-MM-DD)
   - Verify that start dates precede end dates
   - Ensure categories and status values match those in the configuration

## Conclusion

The roadmap visualization and Markdown summary tools are powerful assets for product management. By maintaining high-quality documentation and regularly updating the roadmap, you can improve communication, alignment, and decision-making across the organization. Remember that the roadmap is a strategic tool that should evolve with your product strategy and market conditions. 