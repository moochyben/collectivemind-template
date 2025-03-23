# Documentation Refresh Prompt Template
Version: 1.0.0
Last Updated: 2025-03-23

## Overview

This prompt template guides AI agents in refreshing and updating existing documentation according to the CollectiveMind nested rules system. The template should be used after a documentation review has identified needed updates.

## Prompt Structure

```
# Documentation Refresh Request

## Document Information
- **Title**: {document_title}
- **Path**: {document_path}
- **Type**: {document_type} (e.g., technical, process, strategy)
- **Last Updated**: {last_updated_date}
- **New Version**: {new_version}
- **Refresh Reason**: {refresh_reason} (e.g., outdated information, structural issues, new feature)

## Applicable Rules
- Global Rules: @rule:global/documentation-standards.md
- Domain Rules: @rule:{domain_path}/{domain_rule_file}
- Task Rules: @rule:{task_path}/{task_rule_file}

## Review Findings
{review_findings_summary}
[Include link to or summary of the review document that prompted this refresh]

## Update Parameters
- **Update Scope**: {update_scope} (targeted, section, comprehensive)
- **Content Changes**: {content_changes} (e.g., update API references, add security section)
- **Structural Changes**: {structural_changes} (e.g., reorganize sections, update formatting)
- **New Information**: {new_information} (e.g., new features, updated processes)

## Refresh Instructions

You are tasked with refreshing the attached documentation based on the review findings and applicable rules. Please perform the following steps:

1. **Preparation**:
   - Analyze the original document structure
   - Review the identified issues and recommendations
   - Understand the applicable documentation rules
   - Identify required reference materials

2. **Content Updates**:
   - Update outdated information with current data
   - Replace deprecated references with current alternatives
   - Add missing required sections or content
   - Remove redundant or unnecessary information
   - Ensure technical accuracy of all content

3. **Structural Improvements**:
   - Reorganize sections as needed for logical flow
   - Ensure consistent heading structure and levels
   - Implement proper formatting according to style guidelines
   - Ensure proper cross-referencing within the document
   - Update table of contents if present

4. **Quality Assurance**:
   - Verify all links are functional and point to correct resources
   - Check that all code examples are complete and runnable
   - Ensure consistency of terminology throughout the document
   - Validate all technical specifications against current system
   - Verify compliance with all applicable rules

5. **Output Format**:
   - Provide the complete refreshed document in markdown format
   - Include a change log summarizing all updates made
   - Highlight any areas requiring human review
   - Include recommendations for future maintenance

## Example Refresh Output

### Change Log
- Updated API endpoint references to v2 throughout document
- Added missing Security Considerations section
- Reorganized Configuration section for improved readability
- Updated all code examples to use current SDK version 3.2.1
- Standardized heading capitalization to title case
- Fixed 3 broken links to related documentation

### Areas Requiring Human Review
- Technical accuracy of new security recommendations
- Completeness of API parameter documentation
- Appropriateness of recommended configuration settings

### Future Maintenance Recommendations
- Schedule quarterly reviews of API references
- Consider expanding troubleshooting section based on support tickets
- Add more code examples for common use cases

### Refreshed Document
```markdown
# API Integration Guide
Version: 2.1.0
Last Updated: 2025-03-23

## Introduction

CollectiveMind provides a RESTful API for integrating with our platform. This guide explains how to authenticate, make requests, and handle responses.

## Authentication

Authentication uses OAuth 2.0 Bearer tokens. To authenticate:

1. Register your application in the developer portal
2. Request an access token using your client credentials
3. Include the token in the Authorization header of all requests

```js
// Example authentication request
const response = await fetch('https://api.collectivemind.com/v2/oauth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    grant_type: 'client_credentials'
  })
});

const { access_token } = await response.json();
```

## API Reference

### Endpoint: /users

The `/users` endpoint provides access to user resources. The base URL is `https://api.collectivemind.com/v2/users`.

#### Available Methods
- `GET /users` - Retrieve a list of users
- `GET /users/{id}` - Retrieve a specific user by ID
- `POST /users` - Create a new user
- `PUT /users/{id}` - Update a user
- `DELETE /users/{id}` - Delete a user

## Security Considerations

When integrating with the CollectiveMind API, follow these security best practices:

1. Store client secrets securely and never expose them in client-side code
2. Implement token rotation and expiration handling
3. Use HTTPS for all API communications
4. Implement proper error handling to avoid exposing sensitive information
5. Apply the principle of least privilege when requesting API permissions

See our [Security Guide](../security/api-security.md) for more detailed recommendations.
```
```

## Usage Instructions

1. Copy this template and customize it for the specific document being refreshed
2. Replace all placeholders in curly braces `{}` with appropriate values
3. Include the original document content with the prompt
4. Include the review findings that prompted the refresh
5. Specify the exact changes needed based on the review

## Customization Guide

### Domain-Specific Customization
- For strategy documents: Include updated market analysis and competitive positioning
- For technical documents: Focus on API changes, code examples, and configuration updates
- For process documents: Update role responsibilities, workflow steps, and integration points
- For requirements documents: Update feature specifications, acceptance criteria, and user stories

### Scope-Specific Customization
- For targeted updates: Focus only on specific sections with minimal changes to other content
- For section refreshes: Completely rewrite specific sections while preserving others
- For comprehensive refreshes: Update the entire document structure and content

## References
- [Documentation Standards](../global/documentation-standards.md)
- [AI Interaction Standards](../global/ai-interaction-standards.md)
- [Documentation Refresh Workflow](../../documentation/process/workflows/documentation-refresh.md) 