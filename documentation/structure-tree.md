# Documentation Structure Tree

This document shows the current structure of the documentation directory after reorganization.

## Main Categories

- **Product Documentation** (`product-requirements/`)
  - Features
  - Roadmap
  - Templates

- **Process Documentation** (`process/`)
  - Workflows
  - Templates
  - Standards
  - Onboarding
  - Roles
  - Operations
    - Technical Operations (from operations-docs)
    - Business Operations (from business-operations-docs)
      - Marketing
      - Sales
      - Funding & Financial Management
      - Customer Support
      - Operations Management
  - Integrations

- **Project Management** (`project-management/`)
  - Charters
  - Plans
  - Reports
  - Risks

- **Agile Documentation** (`agile/`)
  - Sprints
  - Ceremonies

- **Technical Documentation** (`technical/`)
  - Architecture
    - Data Architecture (from data-architecture)
    - Solution Architecture (from solution-architecture)
  - APIs
  - Infrastructure
  - Mobile (from mobile-docs)
  - Testing (from testing-docs)
  - Localization (from localization-docs)

- **Design Documentation** (`design/`)
  - Wireframes
  - Prototypes
  - Design System
  - User Flows
  - UX Design Docs

- **Strategy and Research**
  - Strategy (`strategy/`) (from business-docs)
    - Vision
    - Goals
  - Market Research (`market-research/`)
    - Competitive Analysis
    - User Research
    - Analytics (from analytics-docs)

- **Support and Legal**
  - Support (`support/`)
    - Guides (from user-guides)
    - FAQs
    - Troubleshooting
    - Accessibility (from accessibility-docs)
  - Legal (`legal/`)
    - Contracts
    - Policies
    - Compliance

- **Integrations** (`integrations/`)
  - Confluence (from confluence-sync)
  - External (from integration-docs)

## Specialized Documentation

- API Documentation (`api-docs/`)
- DevOps Documentation (`devops-docs/`)
- Security Documentation (`security-docs/`)
- Deployment Documentation (`deployment-docs/`)

## Directories Pending Cleanup

The following directories have been migrated to new locations and are pending cleanup:

- `accessibility-docs/` → `support/accessibility/`
- `analytics-docs/` → `market-research/analytics/`
- `business-docs/` → `strategy/`
- `business-operations-docs/` → `process/operations/` (Business Operations)
- `confluence-sync/` → `integrations/confluence/`
- `integration-docs/` → `integrations/external/`
- `operations-docs/` → `process/operations/` (Technical Operations)
- `reference-materials/` → Various locations
- `testing-docs/` → `technical/testing/`
- `user-guides/` → `support/guides/`
- `temp/` → To be removed

## Recent Updates

- Combined both technical operations and business operations content in `process/operations/README.md`
- Preserved all business operations content from `business-operations-docs/`
- Ensured all README files were properly migrated to their new locations

## Next Steps

After reviewing this structure, you can run the cleanup script to remove the old directories:

```bash
./documentation/cleanup-v2.sh
```

Generated on Fri Feb 28 12:29:48 EST 2025
