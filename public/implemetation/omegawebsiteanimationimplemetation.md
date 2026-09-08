# Omega Website — Animation Implementation Specification

## 0. Purpose

This document is the implementation contract for the Omega website animation system.

The website already has its visual direction and story. The implementation must make the animation feel like a natural extension of that design.

**Do not add animation simply because animation looks impressive.**

The motion system must communicate:

> Structure grows. Focus holds. Context stays. Progress accumulates. The journey continues.

For the current implementation phase, **do not use the final Omega product images**.

Use dimension-accurate asset placeholders. Final images will be inserted later without changing the page structure or animation architecture.

---

# 1. Non-Negotiable Rules

## 1.1 No cursor trail

Do NOT implement:

- cursor tails
- cursor-following glowing lines
- particle trails
- mouse-position canvas effects
- pointer-following SVG paths

Reason:

- unnecessary CPU/GPU work
- distracting from the story
- not required for Omega's visual language

The animation system must work independently of mouse position.

---

## 1.2 No animation everywhere

Not every element should move.

Omega should have intentional stillness.

Use motion primarily when it communicates:

- structure
- transition
- continuity
- accumulation
- active state
- return

If an animation has no semantic purpose, do not implement it.

---

## 1.3 No heavy animation technology

Do not introduce:

- Three.js
- WebGL
- physics engines
- particle libraries
- large animation frameworks solely for decorative effects
- continuously running canvas rendering

Prefer:

- CSS transitions
- CSS transforms
- CSS opacity
- SVG stroke animation
- IntersectionObserver
- small React state changes
- `requestAnimationFrame` only when absolutely necessary

---

# 2. Animation Architecture

Create a small reusable motion system instead of implementing animation independently inside every section.

Recommended structure:

```text
src/
├── components/
│   ├── animation/
│   │   ├── Reveal.tsx
│   │   ├── Stagger.tsx
│   │   ├── DrawLine.tsx
│   │   ├── AssetPlaceholder.tsx
│   │   └── MotionSection.tsx
│   │
│   └── ...
│
├── styles/
│   ├── motion.css
│   └── ...
│
└── ...
```

The exact project structure may differ. Preserve the existing project's architecture if equivalent components already exist.

Do not restructure the entire application merely to implement animation.

---

# 3. Motion Tokens

Create centralized animation constants/tokens.

Recommended values:

```css
--motion-fast: 180ms;
--motion-normal: 300ms;
--motion-reveal: 600ms;
--motion-slow: 900ms;
--motion-structural: 1100ms;

--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-soft: cubic-bezier(0.25, 0.8, 0.25, 1);
```

These are defaults, not reasons to animate everything for exactly these durations.

---

# 4. Base Reveal System

Most website sections should use one consistent reveal behavior.

Initial state:

```css
opacity: 0;
transform: translateY(14px);
filter: blur(3px);
```

Final state:

```css
opacity: 1;
transform: translateY(0);
filter: blur(0);
```

Duration:

```text
500–700ms
```

Easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Movement should remain small.

Do not use:

```text
translateY(100px)
scale(0.7)
rotate(...)
```

for normal section content.

---

# 5. IntersectionObserver

Use `IntersectionObserver` for scroll-triggered reveals.

The preferred lifecycle is:

```text
outside viewport
      ↓
enters viewport
      ↓
animate once
      ↓
settled
```

Do not continuously calculate scroll position for basic reveals.

Recommended threshold:

```text
0.15–0.25
```

Recommended root margin:

```text
0px 0px -8% 0px
```

The exact values can be adjusted during implementation.

---

# 6. Reveal Stagger

For sections containing:

```text
label
heading
body
supporting content
asset
```

use a small stagger.

Example:

```text
label       0ms
heading     80ms
body        160ms
support     240ms
asset       320ms
```

Do not create large cinematic gaps.

The elements should feel like one composition becoming visible.

---

# 7. Asset Placeholder System

Until final images are available, every image area must use an asset placeholder.

Create a reusable component:

```tsx
<AssetPlaceholder id="01" title="KNOWLEDGE TREE" width={620} height={760} />
```

The placeholder must preserve the exact aspect ratio.

It should visually match the website:

```text
dark background
thin border
subtle inner border
technical typography
orange asset number
muted dimensions
```

Example:

```text
┌───────────────────────────┐
│                           │
│                           │
│          ASSET 01         │
│                           │
│      KNOWLEDGE TREE       │
│                           │
│        620 × 760          │
│        RATIO 31:38        │
│                           │
│                           │
└───────────────────────────┘
```

The placeholder is not a temporary random rectangle.

It is part of the final layout system.

---

# 8. Asset Dimension Contracts

Use these current asset specifications:

| Asset | Purpose                                                | Dimensions | Ratio |
| ----- | ------------------------------------------------------ | ---------: | ----: |
| 01    | Omega Hero Product Composition / Knowledge Tree visual |  620 × 760 | 31:38 |
| 02    | Chart a Path / AI Creation                             |  540 × 680 | 27:34 |
| 03    | Active Flow Product Screen                             |  520 × 720 | 13:18 |
| 04    | Desk Omega Composition                                 |  600 × 760 | 15:19 |
| 05    | Memory / Context visual                                |  320 × 220 | 16:11 |
| 06    | Footprints / History Screen                            |  520 × 720 | 13:18 |
| 07    | Journeys                                               |  420 × 300 |   7:5 |
| 08    | Sparks                                                 |  420 × 300 |   7:5 |
| 09    | Footprints Pillar                                      |  420 × 300 |   7:5 |

Important:

**Do not resize these arbitrarily just to make the placeholder fit.**

The surrounding layout should respect these proportions.

Final artwork can be replaced later.

---

# 9. Asset Replacement Contract

The final implementation must make it possible to replace:

```text
<AssetPlaceholder />
```

with:

```text
<img ... />
```

without changing:

- section layout
- surrounding spacing
- animation triggers
- responsive behavior
- section heights
- content hierarchy

The asset wrapper owns the dimensions.

The image should use:

```css
width: 100%;
height: 100%;
object-fit: cover;
```

or `contain` depending on the final artwork.

Do not hard-code image-specific positioning into the section.

---

# 10. Hero Animation

Hero story:

> You choose the journey. Omega stays with you.

The hero should feel like Omega is coming into focus.

Sequence:

```text
metadata
   ↓
hero headline
   ↓
supporting copy
   ↓
CTA
   ↓
hero asset
```

Recommended animation:

```text
opacity: 0 → 1
translateY: 14px → 0
```

For the hero asset:

```text
opacity: 0 → 1
scale: 0.97 → 1
translateY: 18px → 0
```

Duration:

```text
800–1000ms
```

After the reveal, the hero asset should become still.

No permanent floating animation.

No breathing scale loop.

---

# 11. Asset Frame Reveal

When an asset enters the viewport, use:

```text
outer frame
    ↓
asset label
    ↓
asset content
```

The outer frame can use a subtle border reveal.

If using SVG:

```text
stroke-dasharray
stroke-dashoffset
```

can be used.

Do not use this effect for every border on the page.

Reserve structural drawing for meaningful asset frames and diagrams.

---

# 12. Section 01 — Knowledge Tree

Story:

> The Knowledge Tree  
> Structure complex goals with unlimited depth.

This is a structural concept.

Therefore its animation should communicate:

```text
GOAL
 ↓
BRANCHES
 ↓
SUB-BRANCHES
 ↓
LEAF WORK
```

Implementation with placeholder:

The placeholder itself can initially show a simplified diagram.

Example:

```text
                 GOAL
                  │
          ┌───────┴───────┐
          │               │
       BRANCH           BRANCH
          │
      ┌───┴───┐
      │       │
    LEAF     LEAF
```

Animation order:

```text
root appears
      ↓
main branch draws
      ↓
secondary branches draw
      ↓
leaf nodes appear
```

Use lightweight SVG.

Avoid JavaScript-driven frame-by-frame drawing.

---

# 13. Section 02 — Co-Creation / AI

Story:

> Start with an idea. Build the structure later.

Core transformation:

```text
IDEA
 ↓
STRUCTURE
```

Animation should start with one central idea.

Then the structure emerges from it.

Example:

```text
IDEA
  │
  ├── Research
  ├── Architecture
  └── Implementation
```

The important part is causality.

Do not animate three unrelated cards appearing simultaneously.

The viewer should understand:

> Omega takes an initial goal and turns it into a path.

---

# 14. Section 03 — Active Flow

Story:

> One active focus. Wherever you go.

The active state should be visually alive but restrained.

Use the existing active indicator.

Example:

```text
● ACTIVE FLOW
```

A very subtle pulse is allowed.

Suggested:

```text
opacity: 0.75 → 1 → 0.75
scale: 1 → 1.04 → 1
```

Duration:

```text
2.5–3.5 seconds
```

Repeat:

```text
infinite
```

Only the small indicator should animate.

Do not animate the entire card continuously.

---

# 15. Section 04 — Desk Omega

Story:

> Quiet, immersive focus.

The concept is:

```text
planning
    ↓
noise recedes
    ↓
execution becomes dominant
```

Implementation:

When the section enters:

1. Section content reveals normally.
2. Secondary decorative elements remain subdued.
3. Main Desk Omega asset becomes the visual focus.
4. Everything settles.

Do not create a dramatic zoom.

Do not darken the entire page.

Do not create a fake camera movement.

The motion should communicate reduction of noise.

---

# 16. Section 05 — Memory

Story:

> Keep the work. Keep the context.

The design uses stacked visual material.

Animation should represent accumulation.

Example:

```text
SESSION
   ↓
REVISION NOTE
   ↓
ATTACHMENT
   ↓
CONTEXT
```

Each layer enters with:

```text
opacity: 0 → 1
translateY: 8px → 0
```

and then settles.

The final state is a stable stack.

Do not continuously float the cards.

Do not continuously rotate them.

Meaning:

> Context accumulates around the work.

---

# 17. Section 06 — Progress / Footprints

Story:

> Progress as evidence.

The animation should represent accumulation.

Possible visual:

```text
0%
 ↓
25%
 ↓
50%
 ↓
75%
 ↓
100%
```

or a progressively filled footprint/progress structure.

Important:

This must NOT look like:

```text
loading...
```

It represents:

> actual work accumulating over time.

The animation should run once when the section enters.

After completion, it remains at its final state.

---

# 18. Tracker vs Omega

Story:

> A tracker asks what you need to do.  
> Omega asks where you are.

There are two cards.

Initially:

```text
equal visual weight
```

Then the Omega card becomes slightly emphasized.

Use:

```text
border brightness
background contrast
accent text
```

Avoid:

```text
large scale
card movement
glowing explosion
```

The semantic difference should come from restrained emphasis.

---

# 19. Abandonment / Continue Animation

This is a high-priority semantic animation.

The two paths are:

### Conventional tracker loop

```text
Start
 ↓
Work
 ↓
Interrupt
 ↓
Lose Context
 ↓
Abandon
 ↓
Restart from Zero
```

### Omega path

```text
Start
 ↓
Work
 ↓
Pause
 ↓
Remember
 ↓
Return
 ↓
Continue
```

Implementation:

Both paths begin together.

The left path progresses until:

```text
ABANDON
```

Then stops.

The right path continues:

```text
PAUSE
 ↓
REMEMBER
 ↓
RETURN
 ↓
CONTINUE
```

The final `CONTINUE` becomes the strongest orange accent.

This animation should make the product thesis understandable even without reading the surrounding paragraph.

---

# 20. Local-First / No Trackers

Story:

> Your journey stays yours.

This section should deliberately use almost no motion.

Use:

```text
normal reveal
```

Then settle.

Do not add:

- surveillance graphics
- scanning effects
- particles
- data streams
- tracking lines

The absence of motion is part of the message.

---

# 21. Future / Adaptive Companion

Story:

> Your adaptive companion.

Cards:

```text
Gemini AI Generator
Smart Revision Notes
Personal Contextual Memory
```

Reveal progressively.

```text
card 1
   ↓
card 2
   ↓
card 3
```

Use subtle stagger.

The cards should settle into a stable grid.

No infinite floating.

No carousel unless the existing design explicitly requires one.

---

# 22. Final Section

Story:

> This is only the beginning.

Animation hierarchy:

```text
headline
   ↓
supporting copy
   ↓
orange statement
   ↓
CTA
```

Use slower, calmer reveals.

After the final CTA appears:

```text
STOP
```

No looping effect.

No dramatic outro.

The final feeling should be:

> continuation, not conclusion.

---

# 23. Navigation

The navigation should behave as a stable reference point.

Initial reveal:

```text
opacity: 0 → 1
translateY: -10px → 0
```

After that:

```text
stable
```

If the existing site already uses a sticky navbar, preserve that behavior.

Do not repeatedly hide/show the navbar while scrolling unless the current design specifically requires it.

---

# 24. Buttons

Hover:

```text
arrow translateX: 3–5px
```

Optional:

```text
scale: 1.00 → 1.01
```

Background/border can brighten slightly.

Duration:

```text
180–250ms
```

No bounce.

No large scale.

No icon rotation.

---

# 25. Cards

Hover:

```text
translateY: 0 → -2px
border brightness slightly increases
background becomes slightly lighter
```

Duration:

```text
180–280ms
```

Only use hover effects where cards are interactive.

Non-interactive storytelling cards do not need hover animation.

---

# 26. Journey Indicator

If a section/journey indicator is present, it can show the current position.

Concept:

```text
01 ●
   │
02 ○
   │
03 ○
   │
04 ○
```

The active state changes when the corresponding section enters the viewport.

Use:

```text
opacity
border
accent
```

Do not create a constantly moving indicator.

Meaning:

> Omega asks where you are.

---

# 27. Responsive Behavior

Desktop animation and mobile animation should not be identical.

On mobile:

- reduce translation distances
- reduce stagger
- remove hover-dependent behavior
- simplify structural animations if necessary
- preserve semantic animations

Mobile priority:

```text
performance
↓
readability
↓
semantic motion
```

not decorative motion.

---

# 28. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

When reduced motion is enabled:

- remove translation
- remove scale transitions
- remove pulses
- remove structural drawing
- remove stagger
- use opacity-only or no animation

The site must remain fully understandable.

---

# 29. Performance Requirements

The website should remain smooth on normal laptops and mobile devices.

Avoid:

```text
layout-triggering animation
```

Do not animate:

```text
width
height
top
left
margin
padding
```

for routine motion.

Prefer:

```text
transform
opacity
filter
```

Use filters sparingly.

Avoid large blur effects on many elements.

Do not create hundreds of animated DOM nodes.

---

# 30. Animation Lifecycle

Each semantic animation should have a clear lifecycle:

```text
IDLE
 ↓
TRIGGERED
 ↓
ANIMATING
 ↓
SETTLED
```

After settling:

```text
no continuous work
```

except for explicitly approved micro-interactions such as the Active Flow indicator.

This is important for performance.

---

# 31. Do Not Couple Animation to Final Images

The final image may change later.

Therefore:

```text
animation trigger
     ↓
asset wrapper
     ↓
placeholder OR final image
```

not:

```text
animation code
     ↓
specific image dimensions/content
```

The animation system should know:

> "Asset 01 is entering."

It should not know:

> "This particular screenshot has a phone at x=240."

---

# 32. Development Order

Implement in exactly this order unless the existing codebase requires a small dependency change:

```text
01. Inspect existing website architecture
        ↓
02. Create motion tokens
        ↓
03. Create AssetPlaceholder
        ↓
04. Create Reveal primitive
        ↓
05. Create Stagger primitive
        ↓
06. Implement IntersectionObserver
        ↓
07. Hero animation
        ↓
08. Asset frame animation
        ↓
09. Knowledge Tree semantic animation
        ↓
10. AI → Structure animation
        ↓
11. Active Flow
        ↓
12. Desk Omega
        ↓
13. Memory accumulation
        ↓
14. Progress accumulation
        ↓
15. Tracker vs Omega
        ↓
16. Abandonment → Continue
        ↓
17. Local-first
        ↓
18. Future cards
        ↓
19. Final section
        ↓
20. Mobile adaptation
        ↓
21. Reduced-motion support
        ↓
22. Performance audit
```

Do not begin by implementing all animations simultaneously.

---

# 33. Acceptance Criteria

The implementation is successful only if all of the following are true.

## Visual

- Animation matches the existing Omega visual language.
- Motion is restrained.
- Typography remains dominant.
- Dark editorial aesthetic remains intact.
- Orange remains an accent, not a flood of animated color.

## Semantic

- Knowledge Tree motion communicates structure.
- AI motion communicates idea → structure.
- Active Flow communicates persistent current state.
- Desk Omega communicates reduced interface noise.
- Memory communicates accumulated context.
- Progress communicates accumulated work.
- Abandonment animation communicates interruption → return → continue.

## Performance

- No cursor trail.
- No particle system.
- No WebGL.
- No unnecessary continuous animation.
- Scroll reveals use IntersectionObserver.
- Most animation uses transform/opacity.
- No obvious frame drops during scrolling.

## Assets

- All current visual areas use placeholders.
- Placeholders preserve specified dimensions/aspect ratios.
- Final images can later replace placeholders without layout rewrites.

## Accessibility

- `prefers-reduced-motion` is supported.
- Content remains readable without animation.
- No information is conveyed exclusively through motion.

---

# 34. Implementation Decision Rule

Before adding any animation, ask:

### Question 1

What Omega concept does this animation communicate?

If there is no clear answer:

> **Do not add it.**

### Question 2

Can the same idea be communicated with a simpler animation?

If yes:

> **Use the simpler animation.**

### Question 3

Does it require continuous rendering?

If yes:

> **Reject it unless it is essential to the product story.**

### Question 4

Would removing it make the story less understandable?

If no:

> **Remove it.**

---

# 35. Final Animation Language

The finished website should feel like a physical system revealing itself over time.

Not:

> "Look at all these animations."

Instead:

> "I understand how Omega thinks."

The visitor should experience:

```text
I have an idea.
      ↓
I structure it.
      ↓
I choose where to focus.
      ↓
I do the work.
      ↓
Life interrupts.
      ↓
Omega keeps the context.
      ↓
I return.
      ↓
I continue.
      ↓
The work accumulates.
```

That is the implementation target.

**Animation is not decoration. Animation is the visual storytelling layer of Omega.**
