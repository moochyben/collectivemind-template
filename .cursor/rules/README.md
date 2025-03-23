# CollectiveMind Documentation Rules System

This directory contains the nested rules system for maintaining high-quality documentation in the CollectiveMind repository. The rules are organized in a hierarchical structure to provide comprehensive guidance for documentation creation, review, and maintenance.

## Directory Structure

```
rules/
├── global/               # Global rules that apply to all documentation
├── strategy/             # Rules for strategy documentation
├── market-research/      # Rules for market research documentation
├── product-requirements/ # Rules for product requirements documentation
├── technical/            # Rules for technical documentation
├── process/              # Rules for process documentation
└── prompts/              # AI agent prompt templates
```

## Rule Hierarchy

The rules follow a hierarchical structure:

1. **Global Rules**: Apply to all documentation
2. **Domain Rules**: Apply to specific documentation domains (e.g., technical, process)
3. **Task Rules**: Apply to specific documentation tasks (e.g., creation, review)

Rules at lower levels inherit from and may override rules at higher levels.

## Rule References

Rules can reference other rules using the following syntax:

```
@rule:path/to/rule.md
```

For example:

```
This rule follows the formatting standards defined in @rule:global/documentation-standards.md
```

## Using Rules

### For Human Authors

1. Identify the type of documentation you're working with
2. Review the global rules and domain-specific rules
3. Apply the rules during document creation or update
4. Use the rules as a checklist before submitting documents for review

### For AI Agents

1. Use the prompt templates in the `prompts` directory
2. Reference relevant rules in your prompts
3. Apply rules in a hierarchical manner (global → domain → task)
4. Provide rule-based recommendations for improvements

## Prompt Templates

The `prompts` directory contains templates for AI agents. These templates provide structured guidance for:

- Documentation review
- Documentation refresh
- Content creation
- Compliance checks

See the [prompts README](./prompts/README.md) for more information.

## Maintaining Rules

Rules should be:

1. **Clear**: Easy to understand and apply
2. **Specific**: Provide concrete guidance
3. **Consistent**: Align with other rules in the system
4. **Evolving**: Updated as processes and standards evolve

To propose changes to rules:

1. Create a branch with your proposed changes
2. Submit a PR with a clear explanation of the changes
3. Have the changes reviewed by documentation stakeholders
4. Update related rules if needed to maintain consistency

## Rule Validation

Rules can be validated using the rule validation script:

```bash
./validate-rules.sh
```

This checks for:
- Invalid rule references
- Circular references
- Missing referenced rules
- Rule formatting issues

---

Last updated: 2025-03-23 