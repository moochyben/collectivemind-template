---
description: End-to-end feature development with parallel testing
---

# Feature Development Pipeline: $ARGUMENTS

## Phase 1: Specification & Design (4 parallel subagents)

1. **Product Specification**
   - Read PRD from /product/specs/$ARGUMENTS.md
   - Validate requirements completeness
   - Generate acceptance criteria
   - Create test scenarios

2. **Technical Architecture**
   - Design system components
   - API specification
   - Database schema
   - Performance requirements

3. **Security Assessment**
   - Threat modeling
   - Security requirements
   - Compliance check
   - Penetration test plan

4. **UX Design Review**
   - Wireframe validation
   - Accessibility audit
   - Mobile responsiveness
   - User flow optimization

## Phase 2: Implementation (6 parallel subagents)

1. **Backend Development**
   ```
   Task: Implement API endpoints for $ARGUMENTS
   - Create service layer
   - Implement business logic
   - Add database migrations
   - Write unit tests (min 90% coverage)
   ```

2. **Frontend Development**
   ```
   Task: Build UI components for $ARGUMENTS
   - React components
   - State management
   - API integration
   - Responsive design
   ```

3. **Test Automation**
   ```
   Task: Create comprehensive test suite
   - Unit tests (Jest)
   - Integration tests (Supertest)
   - E2E tests (Cypress)
   - Performance tests (k6)
   ```

4. **Documentation**
   ```
   Task: Generate all documentation
   - API documentation (OpenAPI)
   - User guides
   - Developer docs
   - Release notes
   ```

5. **Infrastructure**
   ```
   Task: Prepare deployment infrastructure
   - Terraform configs
   - Kubernetes manifests
   - Monitoring setup
   - Alerting rules
   ```

6. **Quality Assurance**
   ```
   Task: Comprehensive testing
   - Manual testing
   - Edge case validation
   - Cross-browser testing
   - Load testing
   ```

## Phase 3: Review & Deployment

1. **Code Review Orchestration**
   - Assign reviewers based on expertise
   - Track review comments
   - Ensure all feedback addressed
   - Merge when approved

2. **Deployment Pipeline**
   ```bash
   # Automated deployment sequence
   1. Run final test suite
   2. Build Docker images
   3. Deploy to staging
   4. Run smoke tests
   5. Deploy to production (canary)
   6. Monitor metrics
   7. Full rollout or rollback
   ```

## Success Criteria
- All tests passing (100%)
- Code coverage > 90%
- Performance benchmarks met
- Security scan clean
- Documentation complete