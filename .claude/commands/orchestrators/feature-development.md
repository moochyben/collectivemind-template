---
description: End-to-end feature development with parallel testing
argument-hint: <feature-name>
allowed-tools: Read, Write, Edit, Grep, Glob, Bash, Task
model: sonnet
---

# Feature Development Pipeline: $ARGUMENTS

## Phase 1: Specification & Design (Parallel Sub-Agents)

Deploy the following sub-agents in parallel:

1. **Product Manager Sub-Agent**
   Task: Review PRD from @product/specs/$ARGUMENTS.md
   - Validate requirements completeness
   - Generate acceptance criteria
   - Create test scenarios
   - Define success metrics

2. **Engineering Architect Sub-Agent**
   Task: Design technical architecture for $ARGUMENTS
   - Design system components
   - API specification
   - Database schema
   - Performance requirements

3. **Security Engineer Sub-Agent**
   Task: Security assessment for $ARGUMENTS
   - Threat modelling
   - Security requirements
   - Compliance check
   - Penetration test plan

4. **Product Manager Sub-Agent** (UX Focus)
   Task: UX design review for $ARGUMENTS
   - Wireframe validation
   - Accessibility audit
   - Mobile responsiveness
   - User flow optimisation

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