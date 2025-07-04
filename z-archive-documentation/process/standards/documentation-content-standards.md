# Documentation Content Standards

## Introduction

This document outlines the **content standards and formatting requirements** for creating and maintaining documentation within the CollectiveMind project. It focuses on **what to include** in your documentation and **how to format it** to ensure consistency, accessibility, and quality.

**Related Documentation:**
- For information on documentation organization, directory structure, workflows, and tools, please refer to the [Documentation Organization Guidelines](./documentation-organization-guidelines.md) document.

The combination of these two documents provides a complete framework for documentation practices at CollectiveMind.

## Overview

This document outlines the standards and best practices for creating and maintaining documentation within the CollectiveMind project. Following these standards ensures that documentation is consistent, accessible, and valuable to all team members and stakeholders.

## General Principles

### Clarity and Conciseness

- Write in clear, simple language
- Use short sentences and paragraphs
- Avoid jargon and acronyms without explanation
- Be specific and provide examples where helpful

### Audience Awareness

- Consider the technical level of your audience
- Define technical terms when writing for a mixed audience
- Provide context and background information when necessary
- Use appropriate tone for the intended audience

### Accuracy and Completeness

- Ensure all information is accurate and up-to-date
- Include all necessary information for the topic
- Provide links to related documentation
- Cite sources where appropriate

### Maintainability

- Structure documents for easy updates
- Use templates for consistent formatting
- Include version information and last updated dates
- Assign ownership for maintenance

## Document Structure

### Metadata

All documents should include the following metadata at the top:

```markdown
---
title: Document Title
author: Author Name
created_date: YYYY-MM-DD
last_updated: YYYY-MM-DD
status: [Draft/In Review/Approved]
version: X.Y.Z
---
```

### Standard Sections

Most documents should include the following sections:

1. **Title**: Clear, descriptive title
2. **Overview/Introduction**: Brief summary of the document's purpose
3. **Main Content**: Organized into logical sections with clear headings
4. **Conclusion/Summary**: Recap of key points (for longer documents)
5. **References**: Links to related documents or external resources
6. **Appendix**: Additional information that supports the main content

### Headings and Navigation

- Use hierarchical headings (H1, H2, H3, etc.)
- Include a table of contents for documents longer than 3 sections
- Use descriptive heading titles that clearly indicate the content
- Limit heading nesting to 3 levels when possible

## Formatting Standards

### Markdown Usage

- Use Markdown for all documentation
- Follow GitHub Flavored Markdown syntax
- Use consistent formatting for similar elements

### Text Formatting

- Use **bold** for emphasis and UI elements
- Use *italics* for introducing new terms or for slight emphasis
- Use `code formatting` for code snippets, file names, and technical values
- Use > blockquotes for quotes or important notes

### Lists

- Use numbered lists for sequential steps or prioritized items
- Use bullet points for unordered lists
- Be consistent with punctuation in lists
- Nest lists with proper indentation

### Code Blocks

- Use triple backticks with language specification for code blocks
- Include comments in code examples
- Keep code examples concise and focused
- Ensure code examples are correct and tested

```javascript
// Example of a JavaScript code block
function example() {
  console.log("This is an example");
  return true;
}
```

### Tables

- Use tables for structured data
- Include headers for all columns
- Align content appropriately
- Keep tables simple and readable

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |

### Images and Diagrams

- Include descriptive alt text for all images
- Use consistent image dimensions
- Optimize images for web viewing
- Store images in an `assets` folder within the relevant directory
- Use SVG format for diagrams when possible
- Include captions for complex images or diagrams

## Content Standards

### Writing Style

- Use active voice
- Write in present tense
- Be consistent with terminology
- Use gender-neutral language
- Follow American English spelling and grammar

### Technical Content

- Include prerequisites and dependencies
- Provide step-by-step instructions for procedures
- Include troubleshooting sections for complex procedures
- Validate technical accuracy with subject matter experts

### Links and References

- Use relative links for internal documentation
- Use descriptive link text (avoid "click here")
- Verify that all links work
- Include version information when linking to external resources

### Versioning

- Follow semantic versioning (MAJOR.MINOR.PATCH)
- Document breaking changes clearly
- Maintain a changelog for significant documents
- Archive outdated versions rather than deleting them

## Documentation Types

### README Files

- Include a README.md in each directory
- Provide an overview of the directory contents
- List key documents with brief descriptions
- Include getting started information where appropriate

### Technical Documentation

- Focus on how things work
- Include architecture diagrams
- Document APIs, interfaces, and data models
- Include performance considerations and limitations

### Process Documentation

- Clearly outline steps in processes
- Include roles and responsibilities
- Document inputs and outputs
- Include decision points and alternatives

### User Documentation

- Focus on how to use features
- Include screenshots and examples
- Provide troubleshooting guidance
- Consider creating quick reference guides

## Review Process

### Self-Review

Before submitting documentation for review:

- Check for technical accuracy
- Proofread for grammar and spelling
- Verify formatting and links
- Ensure compliance with these standards

### Peer Review

All documentation should undergo peer review:

- Technical review by subject matter experts
- Editorial review for clarity and style
- Structural review for organization and completeness
- Accessibility review for inclusive language and formatting

### Approval Process

- Document the approval workflow for each document type
- Identify required approvers
- Track review status and comments
- Document the resolution of review comments

## Accessibility

### Inclusive Language

- Use inclusive, respectful language
- Avoid idioms that may not translate across cultures
- Be mindful of terms with negative connotations
- Use person-first language when appropriate

### Accessible Formatting

- Use proper heading hierarchy
- Provide alt text for images
- Use sufficient color contrast
- Avoid conveying information through color alone
- Ensure tables are properly structured with headers

## Tools and Templates

### Templates

Templates are available in the `documentation/process/templates` directory:

- Feature documentation template
- Technical architecture template
- Process documentation template
- User guide template
- API documentation template

For information on documentation tools and automation, please refer to the [Documentation Organization Guidelines](./documentation-organization-guidelines.md).

## Appendix

### Glossary of Terms

Include definitions for project-specific terms and acronyms.

### Markdown Cheat Sheet

Quick reference for common Markdown syntax:

```
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Code text`

- Bullet point
1. Numbered item

[Link text](URL)
![Alt text](image-url)

| Table | Header |
|-------|--------|
| Cell  | Cell   |

```

### Documentation Checklist

Use this checklist before submitting documentation:

- [ ] Metadata is complete and accurate
- [ ] Document follows the standard structure
- [ ] Content is technically accurate
- [ ] Grammar and spelling have been checked
- [ ] Formatting is consistent and follows standards
- [ ] Links have been verified
- [ ] Images have alt text
- [ ] Document has been reviewed by a peer 