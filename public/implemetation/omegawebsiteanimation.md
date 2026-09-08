# Omega Website Animation Specification

## 01. Purpose

This document defines the animation system for the Omega website.

The goal is **not** to add animation for decoration. Motion must work together with the existing visual design and product story so the website communicates Omega as a continuous journey:

> **Idea → Structure → Focus → Execution → Pause → Remember → Return → Continue → Progress**

Animation must feel calm, deliberate, editorial, technical, physical, and restrained.

---

## 02. Core Motion Principle

### Motion must have meaning

Every major animation should answer:

> **What is this section trying to communicate, and what physical behavior represents that idea?**

Examples:

- Structure → structure grows
- AI creation → an idea becomes a structure
- Active Flow → the current state remains alive
- Execution → surrounding noise recedes
- Memory → context accumulates
- Progress → work accumulates as evidence
- Return → an interrupted path continues
- Future → capabilities move forward

Generic portfolio effects should be avoided.

---

## 03. Omega Motion Metaphor — The Thread

Omega's website should have one underlying motion concept:

### The Thread

The Thread represents continuity of work and context.

It is **not** a visible cursor trail, particle effect, or continuously running graphic.

It is expressed through existing design elements:

- structural lines
- borders
- progress indicators
- section numbering
- tree branches
- connecting paths
- stacked context
- active indicators

The visitor should not consciously notice "the thread animation."

They should feel that the sections belong to one continuous system.

---

## 04. Global Animation Rules

### 04.1 Reveal behavior

Most sections use a restrained reveal:

```text
opacity: 0 → 1
translateY: 12px → 0
blur: 4px → 0
```

Use short, controlled movement.

Do not use large entrances.

### 04.2 Duration

| Animation                 |   Duration |
| ------------------------- | ---------: |
| Small UI interaction      |  150–220ms |
| Button/card hover         |  180–280ms |
| Text reveal               |  450–650ms |
| Asset reveal              |  650–900ms |
| Structural drawing        | 700–1200ms |
| Major semantic transition | 900–1400ms |

### 04.3 Easing

Preferred:

```text
ease-out
cubic-bezier(0.22, 1, 0.36, 1)
```

For subtle UI:

```text
ease-in-out
```

Avoid elastic/bounce easing.

Omega should never feel playful or game-like.

---

## 05. Page Load Animation

The first impression should establish Omega calmly.

Recommended sequence:

```text
0ms
Background / page shell
        ↓
200ms
Location / metadata
        ↓
350ms
OMEGA identity
        ↓
500ms
Primary headline
        ↓
650ms
Secondary headline / accent line
        ↓
800ms
Description
        ↓
950ms
Hero asset
```

Use opacity + small vertical movement.

Do not make every element move independently.

The sequence should feel like the interface is **coming into focus**.

---

## 06. Hero Animation

### Story

> You choose the journey. Omega stays with you.

The hero introduces Omega's central idea: a persistent companion around a long-running journey.

### Headline

Reveal with:

```text
opacity: 0 → 1
translateY: 12px → 0
```

The typography remains visually dominant.

### Hero image

Use:

```text
opacity: 0 → 1
scale: 0.97 → 1
translateY: 18px → 0
```

Duration:

```text
800–1000ms
```

After settling, the image remains still.

No continuous floating animation is required.

---

## 07. Section Reveal System

Every major section follows a consistent hierarchy:

```text
Section number / label
        ↓
Headline
        ↓
Supporting text
        ↓
Bullets / cards / asset
```

Recommended stagger:

```text
label       0ms
headline    80ms
body        160ms
support     240ms
```

Keep the stagger tight so the visitor perceives one coherent reveal.

---

## 08. Asset Frame Animation

Omega already uses technical asset frames such as:

```text
ASSET 01
KNOWLEDGE TREE
620 × 760
RATIO 31:38
```

These frames become part of the motion system.

### Asset reveal

1. Outer frame appears.
2. Border subtly draws/reveals.
3. Asset label appears.
4. Asset title appears.
5. Product/image content appears.

The asset should feel like a **designed system artifact being revealed**, not a decorative picture.

---

## 09. Section 01 — Structure / Knowledge Tree

### Story

> The Knowledge Tree  
> Structure complex goals with unlimited depth.

Omega converts a large goal into branches and executable leaf-level work.

### Animation

Communicate:

```text
Goal
 ↓
Branches
 ↓
Sub-branches
 ↓
Leaf work
```

Structural lines appear progressively:

```text
root
 ↓
primary branches
 ↓
secondary branches
 ↓
leaf nodes
```

Use SVG `stroke-dashoffset` or similarly lightweight drawing techniques where appropriate.

Nodes can fade/scale in slightly after their connecting line appears.

### Meaning

> A large goal becomes an executable structure.

---

## 10. Section 02 — Co-Creation / AI

### Story

> Start with an idea. Build the structure later.

The transformation is:

```text
Idea
 ↓
Structure
```

### Animation

Start with the central idea.

Then let the structure emerge from it:

```text
IDEA
 │
 ├── Research
 ├── Architecture
 └── Implementation
```

Branches should originate from the initial idea rather than appearing as unrelated cards.

### Meaning

> A goal can begin unstructured and become a structured path.

---

## 11. Section 03 — Active Flow

### Story

> One active focus. Wherever you go.

Only one active session exists globally.

### Animation

Use the existing active indicator:

```text
● ACTIVE FLOW
```

The indicator may use a very subtle pulse:

- slow
- low amplitude
- low visual intensity

Avoid flashing.

### Meaning

> Your current place is still being held.

---

## 12. Section 04 — Desk Omega

### Story

> Quiet, immersive focus.

> When planning is finished, the interface should get out of the way.

### Animation

Instead of aggressively animating the Desk Omega asset into view, surrounding information should subtly become quieter while the execution interface becomes dominant.

Conceptually:

```text
Planning
Navigation
Secondary information
        ↓
      recede
        ↓
Active Session
```

Movement should remain small.

### Meaning

> Planning ends. Execution takes over.

---

## 13. Section 05 — Memory

### Story

> Keep the work.  
> Keep the context.

Omega preserves meaningful context around work sessions.

### Animation

Use the existing stacked-card visual language.

Context layers gradually accumulate:

```text
Session
   +
Revision Note
   +
Attachment
   +
Context
```

The layers settle into a stable stack.

Do not make them continuously float.

### Meaning

> Work happened → context was attached → context was preserved.

---

## 14. Section 06 — Progress / Footprints

### Story

> Progress as evidence.

Omega treats invested work as evidence rather than punishment.

### Animation

Use accumulation rather than disappearance:

```text
work
 ↓
more work
 ↓
more evidence
 ↓
accumulated progress
```

Progress visualizations should fill or build progressively.

Avoid red overdue-style behavior.

### Meaning

> What you actually did remains visible.

---

## 15. Tracker vs Omega Comparison

### Story

> A tracker asks what you need to do.  
> Omega asks where you are.

Initially, both cards have relatively equal visual weight.

As the Omega statement becomes active:

- border becomes slightly stronger
- orange accent appears
- luminance increases subtly

Do not use large movement.

### Meaning

The animation reinforces:

```text
Task
vs.
Context
```

---

## 16. Abandonment / Two Paths

This should be one of the strongest semantic animations on the website.

### The Loop of Guilt

```text
01 Start
02 Work
03 Interrupt
04 Lose Context
05 Abandon
06 Restart from Zero
```

### Omega Breaks the Loop

```text
01 Start
02 Work
03 Pause
04 Remember
05 Return
06 Continue
```

### Animation

Reveal each path progressively.

The left path reaches:

```text
Abandon
```

and stops.

The right path continues:

```text
Pause
 ↓
Remember
 ↓
Return
 ↓
Continue
```

The final `Continue` state becomes the orange emphasis.

### Meaning

> Interruption does not have to become abandonment.

---

## 17. Local-First / No Trackers

### Story

> Your journey stays yours.

This section intentionally uses restraint.

### Animation

Very little motion:

- section reveal
- subtle card entrance
- typography reveal

Then allow the section to become completely still.

### Meaning

> Omega does not demand attention.

Do not add particles, scanning effects, or surveillance-style visualizations.

---

## 18. Future / Adaptive Companion

### Story

> Your adaptive companion.

Omega becomes more useful without becoming noisy.

### Animation

Reveal capability cards progressively:

```text
Gemini AI Generator
        ↓
Smart Revision Notes
        ↓
Personal Contextual Memory
```

Each card feels like the next stage of the system.

Use small staggered movement.

Avoid floating-card effects.

### Meaning

> Omega develops with the journey.

---

## 19. Final Section

### Story

> This is only the beginning.

The final section should be the quietest major animation.

Sequence:

```text
headline
 ↓
supporting statement
 ↓
orange closing statement
 ↓
CTA
```

Use slow, restrained opacity/position reveals.

After:

> You choose the journey. Omega stays with you.

the page settles into stillness.

No looping background animation.

No particles.

No dramatic zoom.

The ending should feel like continuation rather than a conclusion.

---

## 20. Navigation Animation

The navigation is a persistent reference point.

### Initial load

```text
translateY(-12px → 0)
opacity 0 → 1
```

### Scroll

Prefer keeping the navigation visually stable.

If a compact-on-scroll state is implemented, the change must be subtle.

Do not hide/show the navbar aggressively.

### Meaning

The navigation behaves like a stable reference point while the visitor moves through the journey.

---

## 21. Buttons

On hover:

```text
slight luminance increase
arrow translateX: 3–5px
```

Optional:

```text
scale: 1.00 → 1.01
```

Maximum.

Do not use bounce, large scale, glow explosions, or rotating icons.

---

## 22. Cards

On hover:

```text
border brightness ↑
background slightly lighter
translateY: 0 → -2px
```

Duration:

```text
180–280ms
```

Cards return smoothly on pointer exit.

---

## 23. Scroll Progress / Journey Indicator

A small journey indicator can reinforce Omega's concept of knowing where you are.

Concept:

```text
01
●
│
02
○
│
03
○
│
04
○
│
05
○
```

The active section changes as the visitor progresses.

Keep it secondary to the main content.

### Meaning

> Omega asks where you are in the journey.

---

## 24. Performance Rules

Animation must not compromise website performance.

### Do not use

- cursor-following trails
- continuously running particle systems
- unnecessary canvas rendering
- WebGL for simple effects
- heavy physics simulations
- large numbers of animated DOM elements
- continuously running JavaScript animation loops

### Prefer

- CSS transforms
- CSS opacity
- CSS transitions
- SVG stroke-dashoffset
- IntersectionObserver
- scroll-triggered state changes
- GPU-friendly transform/opacity animation

Use `requestAnimationFrame` only where continuous motion is genuinely required.

---

## 25. Reduced Motion

Respect:

```css
prefers-reduced-motion
```

When enabled:

- remove structural drawing
- remove movement
- remove pulses
- remove stagger
- use simple opacity transitions or no transition

The website must remain fully usable without motion.

---

## 26. Mobile Behavior

Mobile should not receive the desktop animation system unchanged.

Priorities:

1. readability
2. performance
3. touch interaction
4. semantic motion

Remove or simplify effects that depend on hover.

Do not add cursor-dependent effects.

Reduce animation distances and stagger on smaller screens.

Keep the semantic animations:

- tree construction
- idea → structure
- active state
- memory accumulation
- progress accumulation
- abandonment → continue

---

## 27. Explicitly Excluded

The following are outside the Omega animation language:

- cursor tail/trail
- particle backgrounds
- excessive parallax
- floating cards
- spinning UI
- bounce animations
- constant glowing objects
- giant zoom transitions
- excessive text splitting
- decorative 3D effects
- animation on every scroll pixel
- animation simply to make the website look "fancy"

If an effect cannot be connected to the Omega story or existing visual system, reject it.

---

## 28. Motion Hierarchy

Not every section should have equal motion intensity.

```text
HIGH SEMANTIC MOTION
│
├── Knowledge Tree
├── AI Creation
├── Abandonment / Continue
└── Progress

MEDIUM
│
├── Active Flow
├── Memory
├── Desk Omega
└── Tracker vs Omega

LOW
│
├── Hero
├── Local-first
├── Future
└── Final section
```

The website should breathe between animated moments.

---

## 29. Final Motion Philosophy

Omega is about continuing meaningful work through interruption.

Therefore the website should behave similarly.

It should:

```text
Reveal
   ↓
Explain
   ↓
Demonstrate
   ↓
Settle
   ↓
Move forward
   ↓
Pause
   ↓
Continue
```

The strongest animations are not the most visually complicated ones.

They are the ones where the visitor can **feel the product philosophy through motion**.

The final motion language is:

> **Structure grows. Focus holds. Context stays. Progress accumulates. The journey continues.**
