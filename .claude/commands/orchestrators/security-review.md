---
description: Comprehensive security review with parallel analysis
argument-hint: <system-component-or-codebase-path>
allowed-tools: Read, Grep, Bash, Task
model: sonnet
---

# Security Review: $ARGUMENTS

## Objective
Conduct comprehensive security assessment by deploying security and engineering sub-agents in parallel to identify vulnerabilities, assess risks, and recommend remediation.

**Target**: $ARGUMENTS

## Phase 1: Parallel Security Analysis

Deploy the following sub-agents **simultaneously**:

### 1. Security Engineer Sub-Agent - Application Security
**Task**: Application-level security assessment for $ARGUMENTS
- OWASP Top 10 vulnerability scan
- Input validation analysis
- Authentication/authorisation review
- Session management assessment
- API security evaluation
- Dependency vulnerability scan

**Expected Output**:
- Vulnerabilities Found: Count by severity
- Critical Issues: Detailed list
- CVSS Scores: For each vulnerability
- Remediation Priority: High/Medium/Low

### 2. Security Engineer Sub-Agent - Infrastructure Security
**Task**: Infrastructure and deployment security for $ARGUMENTS
- Network security configuration
- IAM policy review
- Encryption at rest/transit verification
- Secrets management assessment
- Container/Kubernetes security
- Cloud security posture

**Expected Output**:
- Infrastructure Risks: Count by severity
- Configuration Issues: Detailed list
- Compliance Gaps: Any violations
- Hardening Recommendations: Prioritised list

### 3. Security Engineer Sub-Agent - Data Security
**Task**: Data protection and privacy assessment for $ARGUMENTS
- Data classification review
- PII/sensitive data handling
- Data retention policies
- Encryption implementation
- Access control verification
- GDPR/CCPA compliance check

**Expected Output**:
- Data Security Score: 1-10
- Privacy Violations: Any found
- Compliance Status: Pass/Fail by regulation
- Data Protection Recommendations: Prioritised

### 4. Engineering Architect Sub-Agent - Security Architecture
**Task**: Architectural security review for $ARGUMENTS
- Security design patterns
- Defence in depth analysis
- Zero-trust implementation
- Fault tolerance and resilience
- Security monitoring capabilities
- Incident response readiness

**Expected Output**:
- Architecture Security Score: 1-10
- Design Weaknesses: Identified issues
- Architecture Recommendations: Improvements
- Monitoring Gaps: What's missing

## Phase 2: Code-Level Analysis (If Applicable)

### 5. Security Engineer Sub-Agent - Static Analysis
**Task**: SAST (Static Application Security Testing) for $ARGUMENTS
- Code security patterns
- Hardcoded credentials detection
- Insecure cryptography usage
- Race condition identification
- Memory safety issues
- Logic flaw detection

**Expected Output**:
- SAST Findings: Count by severity
- Code Smells: Security-related
- False Positive Rate: Estimation
- Remediation Code Examples: For critical issues

### 6. Security Engineer Sub-Agent - Dynamic Analysis
**Task**: DAST (Dynamic Application Security Testing) for $ARGUMENTS
- Runtime vulnerability detection
- Injection attack testing
- XSS vulnerability probing
- CSRF protection verification
- Authentication bypass attempts
- Authorisation flaw testing

**Expected Output**:
- DAST Findings: Count by severity
- Exploitable Vulnerabilities: Detailed list
- Proof of Concept: For critical issues
- Remediation Steps: Prioritised

## Phase 3: Threat Modelling and Risk Assessment

### 7. Security Engineer Sub-Agent - Threat Modelling
**Task**: Comprehensive threat modelling for $ARGUMENTS using STRIDE methodology
- **S**poofing threats
- **T**ampering threats
- **R**epudiation threats
- **I**nformation disclosure threats
- **D**enial of service threats
- **E**levation of privilege threats

**Expected Output**:
- Threat Model Diagram: Attack surface mapping
- Threat Scenarios: Top 10 by likelihood × impact
- Risk Rating: For each threat
- Mitigation Strategies: Prioritised by risk

## Synthesis and Remediation Plan

After all sub-agents complete their analysis:

### 1. Aggregate Vulnerability Report
Consolidate findings across all security dimensions:
- **Total Vulnerabilities**: Count by severity (Critical/High/Medium/Low)
- **Exploitability**: Ease of exploitation assessment
- **Business Impact**: Revenue, reputation, compliance risk
- **Attack Surface**: Exposure and accessibility

### 2. Prioritised Remediation Roadmap
- **Immediate (P0)**: Fix within 24 hours
- **Urgent (P1)**: Fix within 1 week
- **Important (P2)**: Fix within 1 month
- **Standard (P3)**: Fix within next quarter

### 3. Compliance Assessment
- SOC 2 Type II implications
- GDPR/CCPA compliance status
- PCI DSS requirements (if applicable)
- Industry-specific regulations

### 4. Security Metrics and KPIs
- Security posture score (0-100)
- Mean time to remediate (MTTR)
- Vulnerability density
- Security debt quantification

## Output Format

```markdown
# Security Review Report: $ARGUMENTS
**Date**: [Current Date]
**Reviewer**: Collective Mind Security Team
**Risk Level**: [🔴 Critical | 🟡 High | 🟢 Acceptable]

---

## 🎯 Executive Summary

**Overall Security Posture**: [X/100]
**Critical Vulnerabilities**: X
**High-Risk Issues**: Y
**Compliance Status**: [Pass/Conditional/Fail]

**Immediate Action Required**: [Yes/No]

---

## 📊 Vulnerability Summary

| Severity | Count | Status |
|----------|-------|--------|
| Critical | X     | [Action Required] |
| High     | Y     | [Action Required] |
| Medium   | Z     | [Planned] |
| Low      | W     | [Backlog] |

---

## 🚨 Critical Findings

### 1. [Critical Issue 1]
- **Severity**: Critical (CVSS: X.X)
- **Component**: [Affected system]
- **Description**: [Detailed vulnerability description]
- **Exploit Scenario**: [How this could be exploited]
- **Business Impact**: [Consequence of exploitation]
- **Remediation**: [Specific fix with code example if applicable]
- **Timeline**: [Immediate - within 24 hours]

### 2. [Critical Issue 2]
[Same format as above]

---

## 📋 Security Analysis by Category

### Application Security
- **Score**: X/10
- **Key Findings**:
  - [Finding 1]
  - [Finding 2]
- **Recommendations**: [Prioritised list]

### Infrastructure Security
- **Score**: X/10
- **Key Findings**:
  - [Finding 1]
  - [Finding 2]
- **Recommendations**: [Prioritised list]

### Data Security & Privacy
- **Score**: X/10
- **Compliance**: [GDPR/CCPA status]
- **Key Findings**:
  - [Finding 1]
  - [Finding 2]
- **Recommendations**: [Prioritised list]

### Security Architecture
- **Score**: X/10
- **Design Strengths**: [What's well-designed]
- **Design Weaknesses**: [What needs improvement]
- **Recommendations**: [Architectural improvements]

---

## 🎭 Threat Model

### Top Threats by Risk
1. **[Threat 1]**
   - Likelihood: [High/Medium/Low]
   - Impact: [High/Medium/Low]
   - Risk Score: [X/10]
   - Mitigation: [Strategy]

2. **[Threat 2]**
   [Same format]

---

## 🛠️ Remediation Roadmap

### Immediate (P0) - 24 Hours
1. [Action 1 with owner]
2. [Action 2 with owner]

### Urgent (P1) - 1 Week
1. [Action 1 with owner]
2. [Action 2 with owner]

### Important (P2) - 1 Month
1. [Action 1 with owner]
2. [Action 2 with owner]

### Standard (P3) - Next Quarter
1. [Action 1 with owner]
2. [Action 2 with owner]

---

## ✅ Compliance Assessment

| Regulation | Status | Gaps | Actions |
|------------|--------|------|---------|
| SOC 2      | [Pass/Fail] | [Issues] | [Required] |
| GDPR       | [Pass/Fail] | [Issues] | [Required] |
| CCPA       | [Pass/Fail] | [Issues] | [Required] |

---

## 📈 Security Metrics

- **Security Posture Score**: X/100 (was Y/100 last review)
- **Vulnerability Density**: X vulnerabilities per 1000 LOC
- **Attack Surface**: [Increased/Decreased/Stable]
- **Mean Time to Remediate**: X days
- **Security Debt**: Estimated £X or Y engineer-days

---

## 🔄 Continuous Improvement

### Monitoring Recommendations
- [Monitoring enhancement 1]
- [Monitoring enhancement 2]

### Security Testing Cadence
- Automated SAST/DAST: [Frequency]
- Penetration Testing: [Frequency]
- Security Reviews: [Frequency]

### Training Needs
- [Team training recommendation 1]
- [Team training recommendation 2]

---

## 📌 Next Steps

1. **[Immediate Action 1]** - Owner: [Name], Deadline: [Date]
2. **[Immediate Action 2]** - Owner: [Name], Deadline: [Date]
3. **Schedule Follow-up Review** - [Date]
```

## Execution Notes

- **Parallelism**: Deploy all Phase 1 sub-agents simultaneously
- **Evidence**: Include code snippets, config examples, proof-of-concept where applicable
- **Actionability**: Every finding must have a specific remediation step
- **Prioritisation**: Use risk-based approach (Likelihood × Impact)
- **Follow-up**: Schedule remediation tracking and verification
