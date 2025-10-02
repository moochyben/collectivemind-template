---
description: Daily briefing with parallel department intelligence gathering
argument-hint: [optional: specific-focus-area]
allowed-tools: Read, Task, Bash
model: sonnet
---

# Daily Executive Coordination Briefing

## Objective
Generate comprehensive daily intelligence briefing by deploying specialized sub-agents in parallel across all business functions.

**Focus Area**: ${ARGUMENTS:-"All Departments"}

## Parallel Intelligence Gathering

Deploy the following sub-agents **simultaneously** for maximum speed:

### 1. Engineering Architect Sub-Agent
**Task**: Engineering status and technical priorities for today
- Yesterday's deployments and incidents
- Today's critical technical work
- Blocker identification
- Infrastructure health
- Engineering team capacity

**Expected Output**:
- Status: Green/Yellow/Red
- Critical Items: 0-3 bullet points
- Attention Required: Yes/No with details

### 2. Product Manager Sub-Agent
**Task**: Product metrics and user insights for today
- Key product metrics (DAU, engagement, adoption)
- User feedback highlights
- Feature performance
- Product roadmap status
- Customer escalations

**Expected Output**:
- Metrics Summary: Traffic light status
- User Sentiment: Positive/Neutral/Negative
- Action Items: 0-3 priorities

### 3. Finance Controller Sub-Agent
**Task**: Financial position and burn rate for today
- Cash position and runway
- Revenue performance (daily/weekly/monthly)
- Major expenses or commitments
- Fundraising status
- Budget variance alerts

**Expected Output**:
- Financial Health: Green/Yellow/Red
- Runway: X months
- Key Metrics: MRR, burn rate
- Alerts: Any concerns

### 4. Operations Manager Sub-Agent
**Task**: Operational efficiency and cross-functional coordination
- Project delivery status
- Resource utilization
- Process bottlenecks
- Vendor/partner issues
- Team coordination needs

**Expected Output**:
- Operational Status: Green/Yellow/Red
- Delivery Health: On-track items vs. at-risk
- Coordination Needs: Yes/No with details

### 5. Data Scientist Sub-Agent
**Task**: Business intelligence and trend analysis
- Dashboard highlights
- Anomaly detection
- Trend analysis
- Predictive insights
- Data quality issues

**Expected Output**:
- Insights: Top 3 data-driven observations
- Anomalies: Any unusual patterns
- Predictions: Forward-looking indicators

### 6. Security Engineer Sub-Agent
**Task**: Security posture and threat landscape
- Security incidents (last 24 hours)
- Vulnerability status
- Compliance updates
- Threat intelligence
- Security metrics

**Expected Output**:
- Security Status: Green/Yellow/Red
- Incidents: Count and severity
- Action Required: Yes/No with priority

## Synthesis and Executive Summary

After all sub-agents report:

### 1. Overall Company Health
Aggregate status across all functions:
- **Overall Status**: [Green/Yellow/Red]
- **Confidence Level**: [High/Medium/Low]

### 2. Top 3 Priorities for Today
Based on all sub-agent inputs:
1. [Priority 1 with owner and deadline]
2. [Priority 2 with owner and deadline]
3. [Priority 3 with owner and deadline]

### 3. Critical Attention Required
Items needing immediate executive intervention:
- [Item 1 with severity and recommended action]
- [Item 2 with severity and recommended action]

### 4. Strategic Opportunities
Emerging opportunities identified:
- [Opportunity 1 with potential impact]
- [Opportunity 2 with potential impact]

### 5. Cross-Functional Coordination Needs
Dependencies and alignment requirements:
- [Coordination need 1]
- [Coordination need 2]

## Output Format

```markdown
# Daily Executive Briefing - [DATE]

## 🎯 Executive Summary
**Overall Status**: [🟢 Green | 🟡 Yellow | 🔴 Red]

**Top 3 Priorities**:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

**Critical Attention**: [Yes/No]

---

## 📊 Department Status

### 🔧 Engineering
**Status**: [🟢/🟡/🔴]
- [Key point 1]
- [Key point 2]
- **Action Required**: [Yes/No]

### 📦 Product
**Status**: [🟢/🟡/🔴]
- [Key point 1]
- [Key point 2]
- **Action Required**: [Yes/No]

### 💰 Finance
**Status**: [🟢/🟡/🔴]
- **Runway**: X months
- **MRR**: $X (+/- Y%)
- **Action Required**: [Yes/No]

### ⚙️ Operations
**Status**: [🟢/🟡/🔴]
- [Key point 1]
- [Key point 2]
- **Action Required**: [Yes/No]

### 📈 Analytics
**Status**: [🟢/🟡/🔴]
- [Key insight 1]
- [Key insight 2]
- **Action Required**: [Yes/No]

### 🔒 Security
**Status**: [🟢/🟡/🔴]
- **Incidents**: X (severity)
- [Key point]
- **Action Required**: [Yes/No]

---

## 🚨 Immediate Actions Required

1. **[Action 1]**
   - Owner: [Name]
   - Deadline: [Time]
   - Why Critical: [Reason]

2. **[Action 2]**
   - Owner: [Name]
   - Deadline: [Time]
   - Why Critical: [Reason]

---

## 💡 Strategic Opportunities

1. **[Opportunity 1]**
   - Potential Impact: [High/Medium/Low]
   - Next Step: [Action]

---

## 🔗 Cross-Functional Coordination

- **[Department A ↔ Department B]**: [Coordination need]
- **[Department C ↔ Department D]**: [Coordination need]

---

## 📌 Notes
[Any additional context or observations]
```

## Execution Notes

- **Timing**: Run this command first thing each morning
- **Parallelism**: All 6 sub-agents should execute simultaneously
- **Speed**: Target completion in < 2 minutes
- **Action-Oriented**: Focus on decisions needed, not just information
- **Escalation**: Red status in any area should trigger immediate executive attention
