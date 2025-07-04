# Design System Component Documentation Template

**Component Name**: [Name of the component]  
**Version**: [Version number]  
**Last Updated**: [Date of last update]  
**Status**: [Draft | Ready for Review | Approved | Deprecated]  
**Designer**: [Name of designer]  
**Developer**: [Name of developer]

## Overview

[Provide a brief overview of the component, its purpose, and when to use it.]

## Visual Example

[Insert an image of the component here]

*Figma Link: [Link to the component in Figma]*

## Component Variants

[Document the different variants of this component:

### Variant 1: [Name of variant]
[Insert image of variant]
- **Purpose**: [When to use this variant]
- **Differences**: [How this variant differs from the base component]

### Variant 2: [Name of variant]
[Insert image of variant]
- **Purpose**: [When to use this variant]
- **Differences**: [How this variant differs from the base component]

... and so on]

## Component States

[Document the different states of this component:

### State 1: [Name of state]
[Insert image of state]
- **Trigger**: [What causes this state]
- **Appearance**: [How the component appears in this state]

### State 2: [Name of state]
[Insert image of state]
- **Trigger**: [What causes this state]
- **Appearance**: [How the component appears in this state]

... and so on]

## Anatomy

[Insert an image showing the anatomy of the component with labeled parts]

### Component Parts

1. **Part 1**: [Description of part]
2. **Part 2**: [Description of part]
3. **Part 3**: [Description of part]
   ... and so on

## Design Specifications

### Dimensions

[Document the dimensions of the component:
- Width
- Height
- Padding
- Margins
- Border radius]

### Typography

[Document the typography used in the component:
- Font family
- Font weight
- Font size
- Line height
- Letter spacing]

### Color

[Document the colors used in the component:
- Background colors
- Text colors
- Border colors
- Icon colors
- State colors (hover, active, disabled)]

### Spacing

[Document the spacing used in the component:
- Internal spacing
- Spacing between elements
- Spacing when used with other components]

### Icons and Assets

[Document any icons or assets used in the component:
- Icon names
- Icon sizes
- Asset specifications]

## Behavior

[Document how the component behaves:
- Interactions
- Animations
- Transitions
- Event handling]

## Responsive Behavior

[Document how the component adapts to different screen sizes:
- Desktop behavior
- Tablet behavior
- Mobile behavior
- Breakpoints]

## Accessibility

[Document accessibility considerations for this component:
- ARIA attributes
- Keyboard navigation
- Focus states
- Screen reader support
- Color contrast requirements]

## Code Implementation

### Props/API

[Document the props or API for this component:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | 'default' | Description of prop1 |
| prop2 | boolean | false | Description of prop2 |
| prop3 | function | () => {} | Description of prop3 |
... and so on]

### Code Example

```jsx
// Example usage of the component
<Component
  prop1="value"
  prop2={true}
  prop3={() => handleEvent()}
>
  Children content
</Component>
```

## Usage Guidelines

### Do's

[List best practices for using this component:
- Do use this component for X
- Do combine with Y component
- Do consider Z when implementing]

### Don'ts

[List practices to avoid with this component:
- Don't use this component for A
- Don't combine with B component
- Don't implement in C way]

## Related Components

[List and link to related components:
- Similar components
- Components often used with this one
- Alternative components]

## Design Decisions

[Document key design decisions and their rationale:
- Why certain design choices were made
- Alternatives that were considered
- Research that informed the design]

## Feedback and Iterations

[Document feedback received and iterations made:

### Feedback Session: [Date]
- [Feedback point 1]
- [Feedback point 2]

### Iterations
- [Iteration 1]
- [Iteration 2]]

## Version History

| Version | Date | Description of Changes |
|---------|------|------------------------|
| 1.0 | [Date] | Initial version |
| 1.1 | [Date] | [Description of changes] |
... and so on 