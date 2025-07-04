# Product Manager Documentation Guidelines

## Overview

This document provides guidelines for Product Managers on how to effectively create, maintain, and utilize documentation throughout the product lifecycle. Well-structured documentation is essential for communicating product strategy, tracking feature development, and maintaining alignment with stakeholders and development teams.

## Documentation Responsibilities

As a Product Manager, your documentation responsibilities include:

1. **Strategic Documentation**
   - Product Vision and Strategy
   - Market Research and Analysis
   - Competitive Landscape
   - User Personas and Journey Maps

2. **Feature Documentation**
   - Product Requirements Documents (PRDs)
   - User Stories and Acceptance Criteria
   - Feature Specifications
   - Design Briefs

3. **Planning Documentation**
   - Product Roadmaps
   - Release Plans
   - Sprint Planning Documents
   - Feature Prioritization Frameworks

4. **Measurement Documentation**
   - Success Metrics and KPIs
   - Experiment Plans
   - Analytics Requirements
   - Post-Launch Reviews

## Documentation Structure

### Directory Organization

Maintain documentation in the following directory structure:

```
documentation/
  ├── product-requirements/
  │   ├── features/
  │   │   └── YYYY-MM-DD-feature-name/
  │   │       ├── prd.md
  │   │       └── implementation/
  │   │           └── implementation-plan.md
  │   └── roadmap/
  ├── market-research/
  │   ├── competitive-analysis/
  │   └── user-research/
  ├── strategy/
  │   ├── vision/
  │   └── goals/
  └── process/
      ├── roles/
      └── workflows/
```

### File Naming Conventions

- Use kebab-case for all file and directory names
- Include dates in YYYY-MM-DD format for versioned documents
- Use descriptive names that clearly indicate content
- Group related documents in appropriately named directories

## Documentation Workflows

### Creating New Feature Documentation

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

4. Update the roadmap to include the new feature:
   ```bash
   cd documentation/product-requirements/roadmap
   ./update-roadmap.sh --open
   ```

### Updating Documentation

Establish a regular cadence for updating documentation:

- **Daily**: Update status and progress information for active features
- **Weekly**: Review and update documentation for features in the current sprint
- **Monthly**: Conduct a comprehensive review of all documentation
- **Quarterly**: Update strategic documentation and roadmaps

### Documentation Review Process

1. **Self-Review**: Ensure your documentation is clear, complete, and accurate
2. **Peer Review**: Have another Product Manager review your documentation
3. **Stakeholder Review**: Share documentation with relevant stakeholders for feedback
4. **Team Review**: Review documentation with the development team for feasibility and clarity

## Roadmap Management

### Roadmap Maintenance

1. **Regular Updates**: Update the roadmap at least bi-weekly, or whenever significant changes occur
2. **Quarterly Planning**: Conduct a comprehensive roadmap review and update each quarter
3. **Stakeholder Communication**: Use the roadmap for executive updates and stakeholder alignment

### Using the Roadmap Tools

1. Generate the latest roadmap visualization and Markdown summary:
   ```bash
   cd documentation/product-requirements/roadmap
   ./update-roadmap.sh --open
   ```

2. Use the generated Markdown summary for stakeholder communications:
   - Focus on milestones and high-level progress in executive communications
   - Use the category-based feature lists to discuss progress in specific areas
   - Highlight dependencies and risks that may impact delivery timelines

3. Customize the roadmap configuration to match your product needs:
   - Edit `roadmap-config.json` to update categories, status types, and timeline settings
   - Run the roadmap update to apply changes

## Best Practices

### Documentation Quality

- Write clear, concise descriptions that communicate user value
- Include specific, measurable acceptance criteria for each feature
- Document dependencies explicitly, including external dependencies
- Keep status and progress information up-to-date
- Include links to relevant research, designs, and technical specifications
- Use consistent formatting and terminology throughout documentation

### Strategic Alignment

- Regularly review documentation against product strategy and business objectives
- Ensure each feature has a clear connection to strategic goals
- Use category groupings to maintain balance across different product areas
- Adjust priorities based on market feedback and business needs
- Document the rationale behind prioritization decisions

### Cross-functional Collaboration

- Share documentation with design and engineering teams early and often
- Use documentation to facilitate resource planning discussions
- Review dependencies with technical leads to validate feasibility
- Collaborate with project managers on timeline and resource allocation
- Incorporate feedback from all stakeholders into documentation updates

### Documentation Tools

- Use version control for all documentation
- Leverage templates for consistency
- Implement automation where possible (e.g., roadmap generation)
- Use collaboration tools that support Markdown and version history
- Consider implementing documentation review workflows

## Troubleshooting Common Documentation Issues

1. **Inconsistent Documentation**
   - Establish clear templates and guidelines
   - Conduct regular documentation audits
   - Use automation to enforce consistency

2. **Outdated Information**
   - Implement a regular review schedule
   - Clearly mark document status and last updated date
   - Automate updates where possible

3. **Incomplete Documentation**
   - Use checklists to ensure completeness
   - Implement peer review processes
   - Create templates with required sections

4. **Poor Adoption of Documentation**
   - Make documentation easily accessible
   - Demonstrate the value of documentation
   - Integrate documentation into existing workflows

## Conclusion

Effective documentation is a critical aspect of product management. By following these guidelines, you can create and maintain high-quality documentation that improves communication, alignment, and decision-making across the organization. Remember that documentation should evolve with your product and processes, and regular updates are essential to maintain its relevance and usefulness. 