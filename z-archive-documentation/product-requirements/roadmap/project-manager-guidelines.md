# Project Manager Guidelines for Roadmap Management

## Overview

This document provides guidelines for Project Managers and Scrum Masters on how to effectively use and maintain the product roadmap visualization and Markdown summary tools. These tools are essential for maintaining transparency, facilitating communication, and ensuring alignment across teams.

## Responsibilities

As a Project Manager or Scrum Master, your responsibilities regarding roadmap management include:

1. **Regular Updates**: Ensure the roadmap data is updated at least bi-weekly, or whenever significant changes occur
2. **Accuracy Verification**: Validate that feature statuses, timelines, and dependencies are accurately reflected
3. **Stakeholder Communication**: Use the roadmap visualizations in stakeholder meetings and reports
4. **Team Alignment**: Review the roadmap with development teams during sprint planning and refinement
5. **Progress Tracking**: Monitor feature progress against planned timelines
6. **Dependency Management**: Identify and manage cross-feature dependencies
7. **Risk Identification**: Use the roadmap to identify potential schedule risks

## Recommended Workflow

### 1. Pre-Sprint Planning

Before each sprint planning session:

- Run `./update-roadmap.sh --open` to generate the latest roadmap data and Markdown summary
- Review the feature dependencies section to identify any blockers
- Check team assignments to ensure balanced workload
- Identify features that may need reprioritization based on progress and dependencies

### 2. During Sprint Planning

During sprint planning:

- Share the roadmap visualization with the team
- Discuss how the current sprint's work aligns with the overall roadmap
- Highlight dependencies that may impact the team's work
- Use the feature details to inform story point estimation

### 3. Sprint Reviews

For sprint reviews:

- Update the roadmap before the review to reflect the latest progress
- Present the updated roadmap to stakeholders
- Highlight completed features and progress made
- Discuss any changes to timelines or priorities

### 4. Retrospectives

During retrospectives:

- Review the roadmap to identify if any features are consistently falling behind schedule
- Discuss process improvements that could help keep the roadmap on track
- Identify any roadblocks that are impacting multiple features

### 5. Stakeholder Updates

For stakeholder communications:

- Generate the Markdown summary before stakeholder meetings
- Include the roadmap visualization in status reports
- Use the milestone summary to communicate high-level progress
- Highlight dependencies and risks that may require stakeholder attention

## Best Practices

### Documentation Maintenance

- Ensure all feature documentation follows the standard format
- Verify that PRDs and implementation plans include all required metadata
- Regularly audit the documentation for completeness and accuracy
- Update implementation plans with actual progress information

### Roadmap Tool Usage

- Use the shell script (`update-roadmap.sh`) for consistent updates
- Consider setting up automated updates via CI/CD pipelines
- Customize the configuration file to match your project's specific needs
- Integrate the roadmap visualization into your project dashboard

### Team Collaboration

- Train team members on how to update their feature documentation
- Establish a regular cadence for roadmap reviews
- Use the team assignments section to facilitate discussions about resource allocation
- Encourage team members to reference the roadmap when discussing dependencies

## Troubleshooting

### Common Issues

1. **Missing or Incomplete Data**
   - Verify that all feature documentation follows the required format
   - Check that all required fields are populated in PRDs and implementation plans
   - Ensure file paths match the expected structure

2. **Inconsistent Status Information**
   - Establish clear guidelines for when to update status information
   - Implement a review process for status changes
   - Consider automating status updates based on issue tracking systems

3. **Timeline Discrepancies**
   - Regularly validate start and end dates against actual progress
   - Update implementation plans when timelines change
   - Document reasons for timeline changes

## Integration with Agile Processes

### Scrum

- Update the roadmap after each sprint review
- Use the roadmap during backlog refinement to inform prioritization
- Reference the roadmap during daily stand-ups when discussing blockers

### Kanban

- Update the roadmap whenever a feature changes status
- Use the roadmap to visualize flow and identify bottlenecks
- Align WIP limits with roadmap priorities

## Metrics and Reporting

Consider tracking the following metrics:

1. **Roadmap Accuracy**: Compare planned vs. actual completion dates
2. **Dependency Impact**: Measure delays caused by dependencies
3. **Feature Completion Rate**: Track the percentage of features completed on time
4. **Team Allocation**: Monitor the distribution of work across teams

## Conclusion

Effective roadmap management is crucial for project success. By following these guidelines, you can ensure that the roadmap remains an accurate, valuable tool for planning, communication, and decision-making. Remember that the roadmap is a living document that should evolve with the project, and regular updates are essential to maintain its relevance and usefulness. 