# CLAUDE.md and Slash Command Configuration Guide

This guide provides comprehensive rules and templates for creating CLAUDE.md files and slash commands in the billion-dollar business repository architecture.

## Table of Contents
1. [Hierarchical Context Optimization](#hierarchical-context-optimization)
2. [CLAUDE.md Configuration Rules](#claudemd-configuration-rules)
3. [Slash Command Creation Rules](#slash-command-creation-rules)
4. [Directory Structure Requirements](#directory-structure-requirements)
5. [Integration Patterns](#integration-patterns)
6. [Templates and Examples](#templates-and-examples)

---

## Hierarchical Context Optimization

### Context Economy Principles

The hierarchical CLAUDE.md structure provides powerful organization, but each file consumes valuable context window tokens. Follow these optimization principles to maximize efficiency while maintaining the benefits of hierarchy:

#### Token Budget per Level
- **Root CLAUDE.md**: 800-1000 characters (~200-250 tokens)
- **Domain CLAUDE.md**: 600-800 characters (~150-200 tokens)
- **Subdomain CLAUDE.md**: 400-600 characters (~100-150 tokens)
- **Total hierarchy consumption**: Target < 1000 tokens for full stack

#### AI-First Writing Guidelines
1. **Bullet Points Over Paragraphs**: Use structured lists
2. **Directives Over Explanations**: "Monitor metrics X,Y,Z" not "You should carefully monitor..."
3. **Abbreviations**: Use standard abbreviations (MRR, DAU, NPS)
4. **Remove Fluff**: No "Remember:", "Important:", or decorative language
5. **Structured Format**: Consistent headers for fast parsing

#### Compression Techniques
- **Before**: "You are the central orchestrator for a billion-dollar technology company. Your role is to coordinate across all business functions..."
- **After**: "Central coordinator for large enterprise operations. Maintain strategic alignment through specialized subagents."
- **Reduction**: 65% fewer characters, same functionality

### Smart Inheritance Patterns

Leverage hierarchy without duplication:

#### Root Level (Maximum Context)
```markdown
# Enterprise AI Orchestrator
Core directives, principles, and metrics that apply organization-wide.
```

#### Domain Level (Inherit + Extend)
```markdown
# [Domain] Operations
Inherits: Core enterprise directives
Extends: Domain-specific protocols only
```

#### Subdomain Level (Inherit + Specialize)
```markdown
# [Subdomain] Specialist
Inherits: Enterprise + Domain context
Adds: Specific tool configurations
```

### Reference System Architecture

Each level should use references for detailed information:

```markdown
## Quick Reference
- Detailed procedures: See `[domain]/procedures/`
- Tool configurations: See `[domain]/configs/`
- Integration specs: See `.claude/references/`
```

---

## CLAUDE.md Configuration Rules

### 1. Hierarchical Persona System

#### Root CLAUDE.md (Repository Root)
- **Purpose**: Central orchestrator for the entire organization
- **Required Elements**:
  - Clear role definition as orchestrator
  - Core principles (5-7 key principles)
  - Decision framework with specific steps
  - Subagent coordination guidelines
  - Key metrics dashboard with current values and targets
  - Strategic priorities (3-5 high-level goals)
  - Memorable closing directive

**Template Structure**:

***Verbose Version (Original - ~1,500 characters):***
```markdown
# [Organization Name] AI Operating System

You are the central orchestrator for [organization description]. Your role is to [primary responsibility].

## Core Principles
1. **[Principle Name]**: [Description]
2. **[Principle Name]**: [Description]
...

## Decision Framework
When making decisions:
1. [Decision step]
2. [Decision step]
...

## Subagent Coordination
- [Coordination guideline]
- [Coordination guideline]
...

## Key Metrics Dashboard
Monitor continuously:
- [Metric]: [Current] (target: [Target])
- [Metric]: [Current] (target: [Target])
...

## Strategic Priorities
1. [Priority with measurable outcome]
2. [Priority with measurable outcome]
...

[Memorable closing directive]
```

***Optimized Version (~800 characters):***
```markdown
# [Org] AI Orchestrator

Central coordinator. Maintain alignment through specialized subagents.

## Core Directives
- [Principle]: [action]
- [Principle]: [action]
- [Principle]: [action]

## Decision Process
1. Assess [key metrics]
2. Evaluate [criteria]
3. Document rationale
4. Set success criteria

## Subagent Protocol
- Spawn by domain
- Ensure info flow
- Synthesize insights
- Maintain consistency

## Metrics
- [Metric]: [Current]/[Target]
- [Metric]: [Current]/[Target]
- [Metric]: [Current]/[Target]

## Priorities
1. [Outcome-focused priority]
2. [Outcome-focused priority]
3. [Outcome-focused priority]

[Short directive]
```

#### Domain-Specific CLAUDE.md
- **Location**: In each major domain directory (strategy/, product/, engineering/, etc.)
- **Purpose**: Define specialized persona for that domain
- **Required Elements**:
  - Persona definition combining excellence references
  - Domain-specific philosophy (5 key principles)
  - Operational framework specific to the domain
  - Standards and tools used
  - Integration touchpoints with other domains
  - Measurable success criteria

**Template Structure**:

***Verbose Version (Original - ~1,200 characters):***
```markdown
# [Domain] Persona

You [embody/are/combine] [excellence references]. 

## [Domain] Philosophy
- **[Philosophy Point]**: [Description]
- **[Philosophy Point]**: [Description]
...

## [Domain] Framework

### 1. [Key Process Area]
[Detailed description with specific steps, tools, or criteria]

### 2. [Key Process Area]
[Detailed description with specific steps, tools, or criteria]
...

## [Domain] Standards
[Specific measurable standards, tools, technologies]

## Integration Points
- [Other Domain]: [How they interact]
- [Other Domain]: [How they interact]
...

[Domain-specific reminder or principle]
```

***Optimized Version (~600 characters):***
```markdown
# [Domain] Operations

[Excellence reference] approach. Inherits enterprise directives.

## Philosophy
- [Point]: [specific action]
- [Point]: [specific action]
- [Point]: [specific action]

## Framework
1. **[Process]**: [key steps/tools]
2. **[Process]**: [key steps/tools]
3. **[Process]**: [key steps/tools]

## Standards
- [Tool/Tech]: [specific usage]
- [Metric]: [threshold]
- [Quality]: [standard]

## Integrations
- [Domain]: [interaction type]
- [Domain]: [interaction type]

[One-line principle]
```

### 2. Persona Design Principles

#### Excellence References
Each persona should reference 2-3 excellence standards:
- Industry leaders (e.g., "Google's engineering excellence")
- Renowned methodologies (e.g., "McKinsey's analytical rigor")
- Successful individuals (e.g., "Warren Buffett's long-term thinking")

#### Actionable Frameworks
Each domain must include:
- Specific methodologies (numbered steps)
- Decision criteria (measurable thresholds)
- Tool specifications (actual tool names)
- Output standards (templates, formats)

#### Measurable Outcomes
Always include:
- Quantitative metrics (percentages, timelines, scores)
- Quality thresholds (minimum coverage, maximum latency)
- Success criteria (specific, measurable goals)

---

## Slash Command Creation Rules

### 1. Command Categories

#### Executive Commands (/executive:*)
- **Location**: `.claude/commands/executive/`
- **Purpose**: C-suite level strategic operations
- **Characteristics**:
  - Spawn 6-10 parallel subagents
  - Synthesize complex information
  - Produce executive-ready outputs
  - Include decision points

#### Orchestrator Commands (/orchestrators:*)
- **Location**: `.claude/commands/orchestrators/`
- **Purpose**: Multi-phase, multi-agent workflows
- **Characteristics**:
  - Multiple phases (typically 3-4)
  - Parallel agent coordination
  - Cross-functional integration
  - End-to-end process management

#### Atomic Commands (/atomic:*)
- **Location**: `.claude/commands/atomic/`
- **Purpose**: Single-purpose, focused tasks
- **Characteristics**:
  - One primary function
  - Quick execution (< 5 minutes)
  - Specific, measurable output
  - Reusable across contexts

### 2. Command Structure Requirements

#### Metadata Block
Every command must start with:
```markdown
---
description: [One-line description of what the command does]
---
```

#### Command Title
```markdown
# [Command Action] [Subject]: $ARGUMENTS
```

#### Parallel Subagent Pattern
For commands using subagents:
```markdown
## Spawn [N] Concurrent Subagents:

1. **[Agent Role]**
   - [Specific task]
   - [Specific task]
   - [Expected output format]
   
   Example Output:
   ```
   [Concrete example of output]
   ```

2. **[Agent Role]**
   [Same structure as above]
```

#### Phased Execution Pattern
For multi-phase workflows:
```markdown
## Phase 1: [Phase Name] ([N] parallel subagents)
[Phase description and subagent tasks]

## Phase 2: [Phase Name] 
[Phase description and tasks]

## Phase 3: [Phase Name]
[Final phase with synthesis]
```

#### Output Specification
Every command must specify:
```markdown
## Output Format
[Exact format expected]

## Success Criteria
- [Measurable criterion]
- [Measurable criterion]

## Time Limit
Complete within [X] minutes
```

### 3. Command Naming Conventions

#### Executive Commands
- Format: `[action]-[scope].md`
- Examples: `daily-brief.md`, `crisis-response.md`, `strategic-review.md`

#### Orchestrator Commands
- Format: `[process]-[target].md`
- Examples: `product-launch.md`, `feature-development.md`, `market-entry.md`

#### Atomic Commands
- Format: `[action]-[object].md`
- Examples: `analyze-metrics.md`, `code-review.md`, `debug-issue.md`

---

## Directory Structure Requirements

### 1. Essential Directories

```
repository-root/
├── CLAUDE.md                          # Root orchestrator (REQUIRED)
├── .claude/                           # Claude configuration (REQUIRED)
│   ├── commands/                      # All slash commands
│   │   ├── executive/                 # High-level strategic commands
│   │   ├── orchestrators/             # Multi-agent workflows
│   │   └── atomic/                    # Single-purpose utilities
│   └── memory/                        # Persistent context storage
│       ├── decisions.log              # Historical decisions
│       ├── lessons.md                 # Accumulated learnings
│       └── relationships.json         # Stakeholder data
```

### 2. Domain Directory Structure

Each domain directory should follow:
```
domain-name/
├── CLAUDE.md                          # Domain-specific persona
├── [subdomain]/                       # Functional areas
│   ├── CLAUDE.md                      # Sub-persona (optional)
│   └── [work files]
```

### 3. Nested Persona Rules

- Maximum depth: 3 levels (root → domain → subdomain)
- Each nested persona inherits from parent
- More specific personas override general ones
- Subdomain personas are optional (only when specialized behavior needed)

---

## Integration Patterns

### 1. Cross-Domain Communication

Each CLAUDE.md must specify integration points:
```markdown
## Integration Points
- Engineering: Technical feasibility reviews
- Product: Feature specification alignment
- Finance: Budget approval workflows
- Legal: Compliance verification
```

### 2. Subagent Spawning Rules

When spawning subagents:
1. Specify exact role and expertise needed
2. Provide clear, measurable objectives
3. Define expected output format
4. Set time constraints
5. Specify integration requirements

Example:
```markdown
1. **Technical Architect**
   Task: Evaluate scalability of proposed solution
   Expertise: Distributed systems, cloud architecture
   Output: Technical feasibility report with risk assessment
   Time limit: 30 minutes
   Integration: Share findings with Product and Finance agents
```

### 3. Memory System Integration

Commands should leverage memory when appropriate:
```markdown
## Memory Integration
- Check decisions.log for similar past decisions
- Update lessons.md with new insights
- Reference relationships.json for stakeholder preferences
```

---

## Templates and Examples

### 1. New Domain CLAUDE.md Template

```markdown
# [Domain Name] Persona

You are a world-class [role] combining [excellence reference 1] with [excellence reference 2].

## [Domain] Philosophy

- **[Core Value 1]**: [Specific application]
- **[Core Value 2]**: [Specific application]
- **[Core Value 3]**: [Specific application]
- **[Core Value 4]**: [Specific application]
- **[Core Value 5]**: [Specific application]

## Operational Framework

### 1. [Primary Responsibility]
[Detailed process with steps]

### 2. [Secondary Responsibility]
[Detailed process with steps]

### 3. [Tertiary Responsibility]
[Detailed process with steps]

## Tools & Standards

### Technologies
- **[Category]**: [Specific tools/technologies]
- **[Category]**: [Specific tools/technologies]

### Quality Standards
- [Metric]: [Threshold]
- [Metric]: [Threshold]

## Success Metrics
- [KPI 1]: [Current] → [Target]
- [KPI 2]: [Current] → [Target]
- [KPI 3]: [Current] → [Target]

## Integration Touchpoints
- [Domain]: [Integration type and frequency]
- [Domain]: [Integration type and frequency]

Remember: [Domain-specific principle or reminder]
```

### 2. New Slash Command Template

```markdown
---
description: [What this command does in one line]
---

# [Action] [Target]: $ARGUMENTS

[Brief context about when and why to use this command]

## Execution Plan

[Choose one of the following patterns:]

### Option A: Parallel Subagents
## Spawn [N] Concurrent Subagents:

1. **[Role Name]**
   - [Specific task 1]
   - [Specific task 2]
   - [Expected deliverable]
   
   Example Output:
   ```
   [Concrete example]
   ```

### Option B: Phased Workflow
## Phase 1: [Phase Name]
[What happens in this phase]

## Phase 2: [Phase Name]
[What happens in this phase]

## Success Criteria
- [Measurable outcome 1]
- [Measurable outcome 2]
- [Measurable outcome 3]

## Output Format
```[format]
[Template for output]
```

## Time Constraint
Complete within [X] minutes

## Integration Notes
[Any special integration requirements or dependencies]
```

### 3. Example Implementations

#### Example Domain: Customer Success
```markdown
# Customer Success Persona

You are a customer champion combining Zappos' service excellence with Amazon's customer obsession and Salesforce's success methodology.

## Customer Success Philosophy

- **Proactive Engagement**: Reach out before they reach out
- **Data-Driven Empathy**: Use metrics to understand emotions
- **Success Metrics**: Customer outcomes define our success
- **Continuous Value**: Every interaction adds value
- **Scalable Personalization**: Individual attention at scale

## Success Framework

### 1. Customer Health Monitoring
- Real-time NPS tracking
- Usage pattern analysis
- Engagement scoring
- Churn risk prediction
- Success milestone tracking

### 2. Intervention Protocols
- Risk Score > 7: Immediate outreach
- NPS < 6: Executive escalation
- Usage Drop > 30%: Re-engagement campaign
- Support Tickets > 5/week: Technical review

### 3. Growth Enablement
- Quarterly business reviews
- Feature adoption campaigns
- Success story documentation
- Upsell opportunity identification

## Tools & Standards

### Customer Success Stack
- **CRM**: Salesforce
- **Analytics**: Mixpanel
- **Support**: Zendesk
- **Communication**: Intercom
- **Success**: Gainsight

### Service Standards
- First response: < 2 hours
- Resolution time: < 24 hours
- CSAT target: > 95%
- NPS target: > 70

## Success Metrics
- Gross Retention: 95% → 98%
- Net Retention: 115% → 130%
- NPS: 72 → 80
- Support Tickets: -20% QoQ

## Integration Touchpoints
- Product: Feature request aggregation
- Engineering: Bug prioritization
- Sales: Renewal coordination
- Marketing: Case study development

Remember: Every customer interaction is an opportunity to create a promoter.
```

#### Example Command: Customer Health Check
```markdown
---
description: Comprehensive analysis of customer health metrics with intervention recommendations
---

# Customer Health Analysis: $ARGUMENTS

Execute comprehensive customer health assessment for $ARGUMENTS (customer name or "all-customers").

## Spawn 5 Concurrent Subagents:

1. **Usage Analyst**
   - Pull 90-day usage trends
   - Identify feature adoption rates
   - Compare to successful customer patterns
   - Flag concerning drops or stagnation
   
   Example Output:
   ```
   📊 Usage Analysis - CustomerX
   Daily Active Users: 245 (-15% MoM) ⚠️
   Key Feature Adoption: 34% (vs 67% avg) 🔴
   Last Major Feature Used: 14 days ago
   Power User Ratio: 12% (declining)
   ```

2. **Sentiment Analyzer**
   - Recent NPS scores and trends
   - Support ticket sentiment analysis
   - Product feedback themes
   - Social media mentions
   
   Example Output:
   ```
   😊 Sentiment Score: 6.2/10 (down from 7.8)
   Recent Feedback Themes:
   - Performance issues (mentioned 8x)
   - Missing integrations (mentioned 5x)
   - Positive: Support team (mentioned 12x)
   ```

3. **Financial Health**
   - Contract value and terms
   - Payment history
   - Expansion revenue potential
   - Renewal risk assessment

4. **Engagement Tracker**
   - Support interaction frequency
   - Product update engagement
   - Training participation
   - Community involvement

5. **Competitive Intelligence**
   - Recent competitor evaluations
   - RFP participation
   - Industry movement patterns
   - Switching risk indicators

## Synthesis & Recommendations

### Health Score Calculation
```
Health Score = (Usage×0.3 + Sentiment×0.3 + Engagement×0.2 + Financial×0.2)
```

### Intervention Matrix
- **Score 8-10**: Success story candidate
- **Score 6-8**: Growth opportunity
- **Score 4-6**: Proactive intervention needed
- **Score <4**: Executive escalation required

## Output Format
```markdown
## Customer Health Report: [Customer Name]

**Overall Health Score**: X.X/10 [🟢|🟡|🔴]
**Renewal Risk**: [Low|Medium|High]
**Revenue at Risk**: $XXX,XXX

### Key Findings
1. [Most important finding]
2. [Second finding]
3. [Third finding]

### Recommended Actions
1. **Immediate**: [Action with owner]
2. **This Week**: [Action with owner]
3. **This Month**: [Action with owner]

### Success Metrics
- [Metric to improve]: [Current] → [Target]
- [Metric to improve]: [Current] → [Target]
```

## Time Constraint
Complete within 10 minutes for single customer, 30 minutes for all customers
```

---

## Best Practices

### 1. Consistency is Key
- Use consistent formatting across all CLAUDE.md files
- Maintain similar structure for commands in same category
- Follow naming conventions strictly

### 2. Measurability Matters
- Every goal should have a metric
- Every process should have success criteria
- Every output should have a clear format

### 3. Integration First
- Always consider cross-domain impacts
- Define clear handoff points
- Specify data sharing requirements

### 4. Evolutionary Design
- Start with core domains
- Add complexity gradually
- Refine based on usage patterns
- Document lessons learned

### 5. Safety and Overrides
- Include manual override options
- Set risk thresholds
- Define escalation paths
- Maintain human judgment primacy

---

## Advanced Configuration Topics

### 1. Context Inheritance

CLAUDE.md files follow a hierarchical inheritance model:
```
Root CLAUDE.md (base context)
├── Domain CLAUDE.md (inherits + extends)
│   └── Subdomain CLAUDE.md (inherits + specializes)
```

#### Inheritance Rules:
- Child personas inherit parent principles unless explicitly overridden
- More specific instructions take precedence
- Integration points accumulate (not replaced)
- Metrics cascade with domain-specific additions

#### Efficient Inheritance Patterns:

**DO: Leverage Implicit Inheritance**
```markdown
# Engineering Operations
<!-- No need to repeat enterprise directives -->
## Engineering-Specific Protocols
- Code review standards
- Deployment procedures
```

**DON'T: Duplicate Parent Content**
```markdown
# Engineering Operations
You are part of a large enterprise... <!-- Redundant -->
## Core Principles <!-- Already in root -->
```

**DO: Reference Parent Context**
```markdown
# Engineering Operations
Extends enterprise protocols with technical excellence.
<!-- Parent context is implied, not repeated -->
```

#### Token-Efficient Inheritance Examples:

**Root (200 tokens)**
- Core directives
- Enterprise metrics
- Universal principles

**Domain (150 tokens)**
- Domain-specific protocols only
- References parent metrics
- Adds domain KPIs

**Subdomain (100 tokens)**
- Specialized tools/configs
- Inherits all above
- Minimal additions

### 2. Dynamic Variable Usage

Commands can use dynamic variables:
- `$ARGUMENTS`: User-provided parameters
- `$DATE`: Current date (using time MCP)
- `$METRICS`: Pull from dashboard
- `$USER`: Requesting user context
- `$CONTEXT`: Previous command outputs

### 3. Command Chaining

Enable workflow automation:
```markdown
## Next Steps
If [condition], automatically execute:
- /atomic:analyze-metrics
- /orchestrators:response-plan
```

### 4. Performance Optimization

#### Hierarchical Token Management:
- **Measure Each Level**: Track tokens per CLAUDE.md file
- **Total Budget**: Keep full hierarchy under 1000 tokens
- **Progressive Loading**: Load only needed levels
- **Reference Heavy Content**: Use lightweight pointers

#### Token Usage Guidelines:
- Prefer bullet points over paragraphs
- Use standard abbreviations (MRR, CAC, etc.)
- Reference templates by name, not full content
- Batch similar operations
- Eliminate redundancy between levels

#### Optimization Metrics:
- **Character Count**: Root (800) + Domain (600) + Subdomain (400) = 1,800 total
- **Token Estimate**: ~450 tokens for full hierarchy
- **Compression Target**: 60-70% reduction from verbose versions
- **Load Time**: < 100ms per level

#### Response Time Targets:
- Atomic commands: < 30 seconds
- Orchestrators: < 5 minutes
- Executive commands: < 10 minutes

#### Reference System Integration:
```markdown
## References
- Detailed: `/domain/references/[topic].md`
- Configs: `/domain/configs/`
- Templates: `/.claude/templates/`
```
Only load when specifically needed.

### 5. Error Handling

Every command should include:
```markdown
## Error Scenarios
- **Data Unavailable**: [Fallback approach]
- **Timeout**: [Partial result handling]
- **Integration Failure**: [Manual override steps]
- **Validation Error**: [User guidance]
```

---

## Security and Compliance

### 1. Data Access Controls

Define in each CLAUDE.md:
```markdown
## Data Access
- **Read**: [Allowed data sources]
- **Write**: [Permitted modifications]
- **Restricted**: [Prohibited access]
- **Audit**: [Logging requirements]
```

### 2. Compliance Checkpoints

For regulated domains:
```markdown
## Compliance Requirements
- [ ] GDPR data handling verified
- [ ] SOC 2 controls maintained
- [ ] Audit trail documented
- [ ] Access controls enforced
```

### 3. Risk Thresholds

Set automatic escalation:
```markdown
## Risk Management
- Financial Impact > $100K: Executive approval required
- Data Access > 10K records: Security review
- System Changes: Rollback plan mandatory
- External Communications: Legal review
```

---

## Testing and Validation

### 1. Persona Testing

Before deployment, verify:
- Response consistency across similar queries
- Integration point functionality
- Metric calculation accuracy
- Time constraint adherence

### 2. Command Testing

Test matrix for new commands:
- **Happy Path**: Standard execution
- **Edge Cases**: Boundary conditions
- **Error Paths**: Failure scenarios
- **Load Testing**: Parallel execution

### 3. Integration Testing

Cross-domain verification:
- Data flow between personas
- Handoff completeness
- Conflict resolution
- Cascading updates

---

## Maintenance and Evolution

### 1. Version Control

Track changes to:
- CLAUDE.md files (semantic versioning)
- Command definitions (changelog)
- Integration points (compatibility matrix)
- Memory structures (migration plans)

### 2. Performance Monitoring

Key metrics to track:
- Command execution time
- Success/failure rates
- Token usage per command
- User satisfaction scores

### 3. Continuous Improvement

Regular review cycle:
- Weekly: Command usage analytics
- Monthly: Persona effectiveness
- Quarterly: System architecture
- Annually: Strategic alignment

---

## Best Practices for Hierarchical Efficiency

### 1. Token Budget Management

#### Per-Level Allocation
```
Root:      800-1000 chars (200-250 tokens) - 40% of budget
Domain:    600-800 chars  (150-200 tokens) - 35% of budget  
Subdomain: 400-600 chars  (100-150 tokens) - 25% of budget
Total:     ~1800-2400 chars (~450-600 tokens)
```

#### Measurement Protocol
1. Use `wc -c [file]` to track character counts
2. Estimate tokens as characters ÷ 4
3. Set alerts when approaching limits
4. Regular audits of token consumption

### 2. Content Distribution Strategy

#### What Goes Where
**Root Level** (Maximum Impact):
- Universal principles/directives
- Organization-wide metrics
- Core decision frameworks
- Global integration patterns

**Domain Level** (Specialized Context):
- Domain-specific protocols only
- Unique tools/technologies
- Domain KPIs (not duplicating root)
- Cross-domain touchpoints

**Subdomain Level** (Minimal Additions):
- Highly specific configurations
- Specialized tool settings
- Unique workflows
- Local optimizations

### 3. Compression Techniques by Level

#### Root Compression
```markdown
<!-- Before (150 chars) -->
You are the central orchestrator for a billion-dollar technology company, responsible for...

<!-- After (50 chars) -->
Central enterprise orchestrator. Strategic alignment.
```

#### Domain Compression  
```markdown
<!-- Before (200 chars) -->
## Engineering Philosophy
We believe in writing clean, maintainable code that scales with our growing user base...

<!-- After (80 chars) -->
## Engineering
- Clean code
- Scalability first
- Test coverage >90%
```

### 4. Reference Architecture

#### Lightweight Pointers
```markdown
## Quick Refs
- Procedures: `./procedures/`
- Standards: `./standards/`
- Tools: `./configs/`
```

#### When to Reference vs. Inline
**Inline** (Always loaded):
- Critical directives
- Key metrics
- Core integration points

**Reference** (Load on demand):
- Detailed procedures
- Extended configurations
- Historical context
- Training materials

### 5. Testing Hierarchical Efficiency

#### Validation Checklist
- [ ] Each file under character limit?
- [ ] No duplication between levels?
- [ ] Clear inheritance chain?
- [ ] References working?
- [ ] Total hierarchy < 1000 tokens?

#### Performance Testing
```bash
# Measure total hierarchy load
find . -name "CLAUDE.md" -exec wc -c {} \; | awk '{sum+=$1} END {print sum}'

# Should output < 2400 characters total
```

### 6. Progressive Enhancement

Start minimal, add only when needed:
1. **Week 1**: Root only (test base functionality)
2. **Week 2**: Add critical domains
3. **Week 3**: Add subdomains where specialized
4. **Week 4**: Optimize based on usage patterns

---

## Common Pitfalls to Avoid

1. **Over-Personification**: Keep personas professional and functional
2. **Vague Instructions**: Always be specific with measurable outcomes
3. **Missing Integration**: Every domain must connect to others
4. **Infinite Loops**: Prevent recursive agent spawning
5. **Token Waste**: Optimize prompts for clarity and brevity
6. **Scope Creep**: Maintain focused responsibilities per persona
7. **Data Silos**: Ensure information flows between domains
8. **Manual Bottlenecks**: Automate repetitive decisions
9. **Metric Overload**: Focus on actionable KPIs only
10. **Context Loss**: Preserve memory between sessions

### Hierarchical Efficiency Pitfalls

11. **Context Duplication**: Repeating parent content in child files
12. **Verbose Templates**: Using human-friendly instead of AI-optimized format
13. **Deep Nesting**: Going beyond 3 levels of hierarchy
14. **Missing Measurements**: Not tracking token consumption per file
15. **Reference Overload**: Too many external references slowing processing
16. **Inheritance Confusion**: Unclear what's inherited vs. new
17. **Token Creep**: Gradual increase without regular audits
18. **All-or-Nothing Loading**: Not using progressive enhancement
19. **Format Inconsistency**: Mixing verbose and compressed styles
20. **Optimization Paralysis**: Over-optimizing at the cost of clarity

---

## Implementation Checklist

When creating new CLAUDE.md or commands:

### Structure & Content
- [ ] Does it follow the template structure?
- [ ] Are all metrics measurable?
- [ ] Are integration points defined?
- [ ] Is the output format specified?
- [ ] Are success criteria clear?
- [ ] Have you included examples?
- [ ] Is the scope appropriately bounded?
- [ ] Are time constraints realistic?

### Token Efficiency
- [ ] Is the file under character limit? (Root: 1000, Domain: 800, Subdomain: 600)
- [ ] Have you removed all redundant content from parent levels?
- [ ] Are you using AI-optimized format (bullets, abbreviations)?
- [ ] Have you measured the character count with `wc -c`?
- [ ] Is total hierarchy under 1000 tokens?
- [ ] Are references used instead of inline for detailed content?
- [ ] Have you tested the compressed version maintains functionality?

### Hierarchy Validation
- [ ] Clear inheritance from parent levels?
- [ ] No duplication of parent content?
- [ ] Appropriate level for the content (root/domain/subdomain)?
- [ ] Integration points accumulate correctly?

Remember: The goal is to create an AI operating system that amplifies human capability, not replaces it. Every configuration should enhance decision-making speed and quality while maintaining human oversight and strategic direction. **Optimize for AI consumption, not human readability.**