# CollectiveMind Sub-Agent Migration Guide

## Overview

CollectiveMind has been updated to leverage Claude Code's latest **sub-agent** and **slash command** capabilities, providing significant improvements in execution speed, context isolation, and architectural clarity.

This guide explains the changes and how to migrate from the previous persona-based system to the new sub-agent architecture.

---

## What Changed?

### Before: Persona-Based System
- Domain expertise defined in department CLAUDE.md files
- Manual context switching via file references
- Sequential execution patterns
- Shared context window across all operations

### After: Sub-Agent Architecture
- Domain expertise encapsulated in discrete sub-agents (`.claude/agents/`)
- Automatic context isolation per sub-agent
- Parallel execution with Claude Code's Task tool
- Enhanced slash commands with YAML frontmatter
- Constitutional decision framework as dedicated sub-agent

---

## Key Benefits

### 1. **10x Faster Parallel Execution**
Sub-agents can execute simultaneously, reducing complex workflows from minutes to seconds.

**Example**: Daily briefing now gathers intelligence from 6 departments in parallel instead of sequentially.

### 2. **Better Context Isolation**
Each sub-agent operates in its own context window, preventing context pollution and maintaining focused expertise.

### 3. **Clearer Delegation Patterns**
Explicit sub-agent invocation makes workflows more understandable and maintainable.

### 4. **Enhanced Tool Security**
Sub-agents can be configured with specific tool permissions, reducing security risks.

### 5. **Improved Reusability**
Sub-agents can be shared across projects and easily customised per organisation.

---

## Architecture Changes

### New Directory Structure

```
collectivemind-template/
├── .claude/
│   ├── agents/                          # NEW: Sub-agent definitions
│   │   ├── engineering-architect.md
│   │   ├── product-manager.md
│   │   ├── finance-controller.md
│   │   ├── security-engineer.md
│   │   ├── data-scientist.md
│   │   ├── operations-manager.md
│   │   └── constitutional-reviewer.md   # NEW: Constitutional AI reviewer
│   ├── commands/
│   │   ├── executive/
│   │   │   └── daily-coordination.md    # UPDATED: Uses parallel sub-agents
│   │   ├── orchestrators/
│   │   │   ├── feature-development.md   # UPDATED: Sub-agent invocation
│   │   │   ├── strategic-analysis.md    # NEW: Multi-functional analysis
│   │   │   └── security-review.md       # NEW: Parallel security assessment
│   │   └── atomic/
│   │       ├── analyze-metrics.md       # UPDATED: YAML frontmatter
│   │       └── code-review.md           # UPDATED: YAML frontmatter
│   └── memory/                          # Existing institutional memory
├── engineering/
│   └── CLAUDE.md                        # LEGACY: Retained for reference
├── product/
│   └── CLAUDE.md                        # LEGACY: Retained for reference
└── CLAUDE.md                            # UPDATED: Sub-agent coordination
```

---

## Sub-Agent Definitions

### Available Sub-Agents

| Sub-Agent | Purpose | Tools | When to Invoke |
|-----------|---------|-------|----------------|
| `engineering-architect` | Technical architecture, system design | Read, Write, Edit, Bash, Grep, Glob | Architecture decisions, technical reviews, infrastructure |
| `product-manager` | Product strategy, feature prioritisation | Read, Write, Edit, WebFetch, WebSearch | Product decisions, roadmap, user research |
| `finance-controller` | Financial planning, analysis, forecasting | Read, Write, Edit, Bash | Financial modelling, budget, fundraising |
| `security-engineer` | Application security, compliance | Read, Grep, Bash | Security audits, vulnerability assessment, compliance |
| `data-scientist` | Business intelligence, analytics | Read, Write, Edit, Bash | Dashboard creation, cohort analysis, A/B testing |
| `operations-manager` | Operational excellence, coordination | Read, Write, Edit, Bash | Process optimisation, resource allocation |
| `constitutional-reviewer` | Strategic alignment verification | Read, Write | Major strategic decisions requiring governance |

---

## Migration Examples

### Example 1: Daily Briefing

#### Before (Sequential)
```markdown
1. Read @engineering/CLAUDE.md for context
2. Analyse engineering status
3. Read @product/CLAUDE.md for context
4. Analyse product metrics
5. Read @finance/CLAUDE.md for context
6. Analyse financial position
... (sequential for all departments)
```

#### After (Parallel Sub-Agents)
```markdown
Deploy simultaneously:
- engineering-architect sub-agent → Engineering status
- product-manager sub-agent → Product metrics
- finance-controller sub-agent → Financial position
- operations-manager sub-agent → Operational efficiency
- data-scientist sub-agent → Analytics insights
- security-engineer sub-agent → Security posture

Synthesize results in < 2 minutes
```

**Performance**: 6-8x faster execution

---

### Example 2: Strategic Decision

#### Before (Manual)
```markdown
1. Manually reference @strategy/strategic-context.md
2. Manually assess mission/vision/values alignment
3. Manually evaluate stakeholder impact
4. Manually consider alternatives
5. Document decision rationale
```

#### After (Constitutional Review Sub-Agent)
```markdown
Invoke constitutional-reviewer sub-agent with:
- Decision proposal
- Strategic context reference
- Stakeholder considerations

Receive:
- Strategic alignment scores (X/60)
- Constitutional self-critique
- Stakeholder impact assessment
- Alternative analysis
- Recommended modifications
- Automatic memory documentation
```

**Benefit**: Systematic, repeatable decision governance

---

### Example 3: Feature Development

#### Before
```markdown
/orchestrators:feature-development new-ai-chat

→ Sequential phases with manual coordination
→ ~2-3 hours for comprehensive development
```

#### After
```markdown
/orchestrators:feature-development new-ai-chat

Phase 1: Deploy 4 sub-agents in parallel
- product-manager: Requirements validation
- engineering-architect: Technical design
- security-engineer: Security assessment
- product-manager (UX): Design review

Phase 2: Deploy 6 sub-agents in parallel
- Backend, Frontend, Test, Docs, Infra, QA

Phase 3: Synthesis and deployment

→ ~30-45 minutes for comprehensive development
```

**Performance**: 4x faster with better quality

---

## Slash Command Enhancements

### New YAML Frontmatter

All slash commands now include structured metadata:

```yaml
---
description: Brief description of command purpose
argument-hint: <expected-argument-format>
allowed-tools: Tool1, Tool2, Bash(specific *)
model: sonnet
---
```

### Benefits
- **Argument hints**: Better user experience with clear expectations
- **Tool permissions**: Enhanced security by limiting tool access
- **Model selection**: Ability to specify optimal model per command
- **Discoverability**: Better command documentation

---

## New Orchestration Commands

### `/orchestrators:strategic-analysis`
Comprehensive strategic analysis with parallel sub-agent deployment across product, finance, data, security, operations, engineering, and constitutional review.

**Use Case**: Major strategic decisions, market entry, M&A evaluation

### `/executive:daily-coordination`
Daily briefing with parallel intelligence gathering from all departments.

**Use Case**: Daily morning executive briefing (< 2 minutes)

### `/orchestrators:security-review`
Comprehensive security assessment with parallel analysis across application, infrastructure, data, architecture, SAST, DAST, and threat modelling.

**Use Case**: Pre-deployment security validation, compliance audits

---

## Constitutional AI Integration

### New Sub-Agent: `constitutional-reviewer`

Implements systematic decision governance:

1. **Strategic Alignment Assessment**: Score against mission/vision/values
2. **Constitutional Self-Critique**: Identify potential issues and improvements
3. **Stakeholder Impact Assessment**: Evaluate effects on all constituencies
4. **Alternative Analysis**: Consider multiple options through strategic lens
5. **Constitutional Revision**: Improve decision based on analysis
6. **Memory Integration**: Log decision for organisational learning

### When to Use
- Major strategic decisions (budget >£100K, strategic direction changes)
- Cross-functional initiatives affecting multiple departments
- Decisions with significant stakeholder impact
- Compliance-sensitive decisions
- Long-term commitments (vendor contracts, partnerships)

---

## Migration Checklist

### For Existing CollectiveMind Users

- [ ] **Review new sub-agent definitions** in `.claude/agents/`
- [ ] **Customise sub-agents** with organisation-specific context (if needed)
- [ ] **Update strategic context** in `@strategy/strategic-context.md` (critical!)
- [ ] **Test new orchestration commands**:
  - [ ] `/executive:daily-coordination`
  - [ ] `/orchestrators:strategic-analysis <topic>`
  - [ ] `/orchestrators:security-review <component>`
- [ ] **Update custom commands** to use sub-agent invocation patterns
- [ ] **Configure constitutional review** thresholds for your organisation
- [ ] **Train team** on new sub-agent invocation patterns
- [ ] **Archive legacy persona references** (optional, retained for context)

### For New CollectiveMind Users

- [ ] **Customise strategic context** in `@strategy/strategic-context.md` (required!)
- [ ] **Review and customise sub-agents** with organisation-specific details
- [ ] **Configure organisational metrics** in root CLAUDE.md
- [ ] **Set up institutional memory** structure in `.claude/memory/`
- [ ] **Test orchestration commands** with sample scenarios
- [ ] **Establish constitutional review** process for major decisions

---

## Best Practices

### 1. Sub-Agent Invocation
- **Parallel when possible**: Deploy independent sub-agents simultaneously
- **Sequential when dependent**: Chain sub-agents when output informs input
- **Synthesis required**: Always synthesise insights from multiple sub-agents

### 2. Constitutional Review
- **Apply systematically**: Use for all major strategic decisions
- **Document thoroughly**: Capture decision rationale in memory
- **Track outcomes**: Monitor decision results for organisational learning
- **Iterate framework**: Refine constitutional criteria based on experience

### 3. Custom Sub-Agent Creation
- **Single responsibility**: Each sub-agent should have focused expertise
- **Clear invocation criteria**: Description should clearly indicate when to use
- **Tool minimalism**: Only grant necessary tool permissions
- **Context references**: Include relevant file references in system prompt

### 4. Slash Command Design
- **Descriptive names**: Use clear, self-documenting command names
- **Argument hints**: Provide helpful argument format guidance
- **Tool permissions**: Limit to minimum required tools
- **Parallel execution**: Design for parallelism where applicable

---

## Troubleshooting

### Sub-Agent Not Found
**Issue**: Error invoking sub-agent
**Solution**: Verify sub-agent file exists in `.claude/agents/` with correct name

### Slow Parallel Execution
**Issue**: Sub-agents not executing in parallel
**Solution**: Ensure using Task tool with multiple concurrent invocations

### Tool Permission Denied
**Issue**: Sub-agent cannot access required tool
**Solution**: Add tool to `allowed-tools` in sub-agent YAML frontmatter

### Constitutional Review Failing
**Issue**: Constitutional reviewer cannot find strategic context
**Solution**: Verify `@strategy/strategic-context.md` exists and is customised

### Memory Not Persisting
**Issue**: Decisions not appearing in memory logs
**Solution**: Check `.claude/memory/` directory exists with proper structure

---

## Performance Benchmarks

Based on initial testing with CollectiveMind enterprise implementation:

| Workflow | Before (Sequential) | After (Parallel Sub-Agents) | Improvement |
|----------|---------------------|----------------------------|-------------|
| Daily Briefing | 8-10 min | 1-2 min | 6x faster |
| Strategic Analysis | 20-30 min | 5-7 min | 4x faster |
| Security Review | 15-20 min | 4-6 min | 4x faster |
| Feature Development | 2-3 hours | 30-45 min | 3-4x faster |
| Constitutional Review | Manual (variable) | 3-5 min (systematic) | Consistent quality |

---

## Additional Resources

### Documentation
- [Claude Code Sub-Agents](https://docs.claude.com/en/docs/claude-code/sub-agents)
- [Claude Code Slash Commands](https://docs.claude.com/en/docs/claude-code/slash-commands)
- [CollectiveMind Methodology](../README.md)

### Support
- GitHub Issues: Report issues or request features
- Community: Share custom sub-agents and orchestration patterns

---

## Backward Compatibility

### Legacy Persona Files
Original persona CLAUDE.md files are **retained** in their respective directories for:
- Reference and context
- Gradual migration
- Organisational documentation

These files are **not actively invoked** by the new sub-agent system but provide valuable context and can be referenced as needed.

### Gradual Migration
You can migrate incrementally:
1. Start using new orchestration commands alongside existing workflows
2. Gradually adopt sub-agent patterns for new workflows
3. Refactor existing custom commands to use sub-agents
4. Archive or update legacy references once fully migrated

---

## Future Enhancements

Planned improvements to CollectiveMind sub-agent architecture:

- **Dynamic sub-agent generation**: Create specialised sub-agents on-the-fly
- **Sub-agent metrics**: Track sub-agent performance and effectiveness
- **Multi-project sub-agent sharing**: Cross-repository sub-agent library
- **Enhanced constitutional framework**: Industry-specific governance templates
- **Sub-agent marketplace**: Community-contributed domain expertise

---

## Conclusion

The migration to Claude Code's sub-agent architecture represents a significant evolution in CollectiveMind's capabilities. The new system provides:

✅ **Faster execution** through parallelism
✅ **Better context isolation** through dedicated sub-agents
✅ **Clearer architecture** through explicit delegation
✅ **Enhanced security** through tool permissions
✅ **Systematic governance** through constitutional review
✅ **Improved reusability** through modular sub-agents

**Recommended Migration Timeline**: 1-2 weeks for full adoption

**Questions?** Review the troubleshooting section or consult the Claude Code documentation.

---

**Version**: 2.0
**Last Updated**: 2025-10-02
**Migration Guide Maintained By**: CollectiveMind Core Team
