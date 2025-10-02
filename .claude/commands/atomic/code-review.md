---
description: Intelligent code review with multiple perspectives
argument-hint: <file-path-or-PR-number>
allowed-tools: Read, Grep, Bash(git *)
model: sonnet
---

# Comprehensive Code Review: $ARGUMENTS

## Review Checklist

### 1. Code Quality Analysis
```python
# Check for:
- SOLID principles adherence
- DRY violations
- Code complexity (cyclomatic < 10)
- Function length (<50 lines)
- Clear naming conventions
```

### 2. Security Review
```yaml
Security Scan:
  - SQL injection vulnerabilities
  - XSS attack vectors
  - Authentication bypasses
  - Sensitive data exposure
  - Dependency vulnerabilities
```

### 3. Performance Analysis
```javascript
// Analyze:
// - Database query optimization
// - Caching opportunities
// - Algorithm complexity
// - Memory leaks
// - Async operation handling
```

### 4. Test Coverage
```bash
# Verify:
- Unit test coverage > 90%
- Integration test presence
- Edge case handling
- Error scenario testing
- Mocking appropriateness
```

### 5. Documentation Check
- API documentation completeness
- Code comments for complex logic
- README updates
- Changelog entries
- Architecture decision records

## Review Output Format

```markdown
## Code Review Summary

**PR**: #$ARGUMENTS
**Risk Level**: [Low|Medium|High]
**Approval Status**: [Approved|Changes Requested|Needs Discussion]

### Strengths
- [Positive aspect 1]
- [Positive aspect 2]

### Required Changes
1. **[Critical]** [Issue description]
   ```
   // Current code
   ```
   ```
   // Suggested improvement
   ```

### Suggestions
- [Optional improvement 1]
- [Optional improvement 2]

### Security Considerations
- [Any security concerns]

### Performance Impact
- [Expected performance changes]
```