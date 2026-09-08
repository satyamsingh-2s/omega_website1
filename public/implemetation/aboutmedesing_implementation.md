# Omega Website --- About Me Section

## Design & Implementation Specification

**File purpose:** This document defines the final design, content,
interaction, animation, layout, and implementation requirements for the
**About Me / Founder section** of the Omega website.

The section should introduce the person behind Omega without turning the
website into a personal portfolio page. Omega remains the primary
subject. The founder section simply establishes that there is a real
person designing and building the product and gives visitors a direct
way to connect.

------------------------------------------------------------------------

# 1. Design Intent

The section should feel like the **signature of the person behind
Omega**, not a conventional "About Me" page section.

The website has already established a visual and narrative language:

-   dark, quiet interface
-   large editorial typography
-   generous negative space
-   restrained orange accent
-   local-first philosophy
-   craftsmanship
-   user sovereignty
-   long-term journeys
-   minimal interaction
-   purposeful motion

The About Me section must continue that language.

## Core principle

> **Introduce the builder without taking attention away from what was
> built.**

The section should communicate:

1.  Omega is independently built.
2.  Satyam Singh is the person behind it.
3.  He is an **ANDROID DEVELOPER · PRODUCT BUILDER**.
4.  He designs and builds Omega end to end.
5.  Visitors can contact him if they want to ask about Omega or build
    something together.

Do not make the section feel like a job application, resume, biography,
or personal-brand advertisement.

------------------------------------------------------------------------

# 2. Position in the Website

Place the section near the end of the website, **above the final
footer**.

Recommended narrative order:

``` text
Omega story
    ↓
Product / system
    ↓
Future
    ↓
Funding / joining the journey
    ↓
About Me / person behind Omega
    ↓
Final footer
```

The About Me section should act as a human transition from the Omega
product story into the final footer.

It should not interrupt the main product narrative earlier on the page.

------------------------------------------------------------------------

# 3. Section Structure

Use a single editorial section rather than a card grid.

Conceptual structure:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  THE PERSON BEHIND OMEGA                                    │
│                                                              │
│  Built by Satyam Singh.                                     │
│                                                              │
│  ANDROID DEVELOPER · PRODUCT BUILDER                        │
│                                                              │
│  Omega is an independent project I started to build a        │
│  different kind of productivity system — one that gives      │
│  structure and direction without taking control away         │
│  from the person using it.                                   │
│                                                              │
│  I design and build Omega end to end, from the product       │
│  and Android application to the systems behind it.           │
│                                                              │
│  Have a question about Omega?                               │
│  Want to build something together?                           │
│                                                              │
│  Get in touch →                                             │
│                                                              │
│       [revealed after click]                                │
│       Email →                                                │
│       LinkedIn →                                             │
│       My Website →                                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The actual implementation should use responsive HTML/CSS rather than
reproducing this box literally.

------------------------------------------------------------------------

# 4. Final Content

## Section label

``` text
THE PERSON BEHIND OMEGA
```

Use the same small uppercase/letter-spaced label treatment used by the
other major sections.

------------------------------------------------------------------------

## Main heading

``` text
Built by Satyam Singh.
```

Important:

-   Keep **"Satyam Singh" on one line** on desktop.
-   Do not split the name intentionally.
-   The heading should remain visually strong but smaller than the major
    hero/product headlines.
-   On narrow mobile screens, natural wrapping is acceptable if required
    by viewport width.

------------------------------------------------------------------------

## Role

``` text
ANDROID DEVELOPER · PRODUCT BUILDER
```

This wording is final.

Do not replace it with:

-   CEO
-   Founder & CEO
-   Software Engineer
-   Android Engineer
-   Indie Hacker
-   Entrepreneur

The chosen wording is intentionally simple and credible.

------------------------------------------------------------------------

## Description

Use exactly:

``` text
Omega is an independent project I started to build a different kind of productivity system — one that gives structure and direction without taking control away from the person using it.

I design and build Omega end to end, from the product and Android application to the systems behind it.
```

Do not add a longer biography.

Do not add educational background, employment history, achievements,
resume information, or a technology stack list here.

Those belong elsewhere, if needed.

------------------------------------------------------------------------

# 5. Contact Prompt

After the description, introduce contact as an invitation rather than a
generic contact block.

Use:

``` text
Have a question about Omega?
Want to build something together?
```

Then the primary interaction:

``` text
Get in touch →
```

This is the only visible contact action before interaction.

------------------------------------------------------------------------

# 6. Contact Interaction

The three contact options should **not be visible initially**.

Initial state:

``` text
Have a question about Omega?
Want to build something together?

Get in touch →
```

After the user clicks:

``` text
Have a question about Omega?
Want to build something together?

Get in touch →

Email →
LinkedIn →
My Website →
```

The interaction should feel like a small disclosure rather than opening
another page or modal.

## No modal

Do not use:

-   modal
-   dialog
-   drawer
-   popup
-   dropdown menu
-   separate contact page for this interaction

The links should reveal **inline inside the same section**.

------------------------------------------------------------------------

# 7. Contact Options

Use three links:

### 01 --- Email

``` text
Email →
```

Implementation:

``` html
<a href="mailto:YOUR_EMAIL">Email →</a>
```

Replace `YOUR_EMAIL` with the actual email address during
implementation.

------------------------------------------------------------------------

### 02 --- LinkedIn

``` text
LinkedIn →
```

Implementation should point to the actual LinkedIn profile.

Do not display the raw URL.

------------------------------------------------------------------------

### 03 --- My Website

``` text
My Website →
```

This should point to Satyam's personal portfolio website.

Do not display the raw URL.

The label intentionally says **My Website**, rather than:

-   Portfolio
-   Personal Portfolio
-   Website
-   Visit Portfolio

It maintains the conversational tone of the section.

------------------------------------------------------------------------

# 8. Contact Reveal Animation

The reveal is the only meaningful interaction in this section.

## Initial state

The three links should either:

-   be removed from layout, or
-   be in a collapsed hidden container.

Prefer an implementation that does not leave unnecessary invisible
space.

------------------------------------------------------------------------

## On click

When `Get in touch →` is clicked:

1.  Expand the contact-links container.
2.  Fade the links in.
3.  Move them upward slightly into their final position.
4.  Optionally use a very small stagger between the three links.

Recommended values:

``` text
Duration:       250–350ms
Easing:         ease-out
Stagger:        50–80ms
Vertical shift: 6–12px
Opacity:        0 → 1
```

Example visual progression:

``` text
Before:

Get in touch →


After:

Get in touch →

Email →
LinkedIn →
My Website →
```

The animation must be subtle.

------------------------------------------------------------------------

# 9. Contact Button State

The primary button should remain visible after expansion.

Do not transform it into a close button unless there is a strong
implementation reason.

The preferred state is:

``` text
Get in touch →

Email →
LinkedIn →
My Website →
```

This makes the interaction feel like the button revealed additional
possibilities rather than opening a temporary menu.

If the implementation requires a toggle, the alternate state may be:

``` text
Hide contact options ↑
```

but this is optional and should only be used if the expanded state needs
to be dismissible.

------------------------------------------------------------------------

# 10. Visual Design

## Background

Use the existing Omega website background.

Do not introduce a new color or gradient specifically for this section.

The section should naturally belong to the page.

------------------------------------------------------------------------

## Typography

Use the same typography system already established by the website.

### Label

Small:

``` text
THE PERSON BEHIND OMEGA
```

Properties:

-   uppercase
-   generous letter spacing
-   muted blue/grey
-   small font size
-   orange only where the existing system already uses orange for
    section numbering/accent

### Heading

``` text
Built by Satyam Singh.
```

Use the website's editorial serif/display typeface.

It should be visually dominant within the section.

### Role

``` text
ANDROID DEVELOPER · PRODUCT BUILDER
```

Use the website's small uppercase / mono-like label treatment or
equivalent existing role typography.

### Body

Use the existing sans-serif body font.

Keep the text comfortable to read and avoid making the paragraph too
wide.

------------------------------------------------------------------------

# 11. Layout

Do **not** use the same three-card or 50/50 image-text layouts used in
product sections.

This section should have more breathing room.

Recommended desktop structure:

``` text
SECTION WIDTH
────────────────────────────────────────────────

THE PERSON BEHIND OMEGA

Built by Satyam Singh.

ANDROID DEVELOPER · PRODUCT BUILDER


Omega is an independent project I started to build a
different kind of productivity system — one that gives
structure and direction without taking control away
from the person using it.

I design and build Omega end to end, from the product
and Android application to the systems behind it.


Have a question about Omega?
Want to build something together?

Get in touch →
```

Use a readable content width rather than stretching paragraphs across
the entire viewport.

------------------------------------------------------------------------

# 12. Spacing

The section should have generous vertical breathing room.

Suggested starting values:

``` text
Section top padding:       120–160px
Section bottom padding:    100–140px

Label → heading:            24–32px
Heading → role:             20–28px
Role → body:                36–48px
Paragraph gap:              20–28px
Body → contact prompt:      48–64px
Prompt → button:            20–24px
Button → revealed links:    20–24px
Link gap:                   12–18px
```

These values are starting points, not rigid pixel requirements.

Preserve the site's existing spacing system if one already exists.

------------------------------------------------------------------------

# 13. Width

Keep the text column restrained.

Recommended:

``` text
max-width: 720–820px
```

Do not make the founder description span the full desktop viewport.

The empty space is intentional.

It reinforces the quiet, independent nature of Omega.

------------------------------------------------------------------------

# 14. No Founder Photo

Do **not** add a portrait/photo in the initial implementation.

Reason:

The current Omega website communicates through:

-   typography
-   product imagery
-   negative space
-   system diagrams
-   restrained UI
-   editorial composition

A generic portrait would introduce a different visual language.

The founder is introduced through typography and writing.

A portrait can be reconsidered later if a deliberately art-directed
image exists.

------------------------------------------------------------------------

# 15. No Resume Information

Do not add:

``` text
B.Tech
Kolkata
Years of experience
Previous companies
Programming languages
Certifications
Awards
GitHub statistics
Project count
```

This is not the resume section.

The goal is simply:

> **There is a person behind Omega, and you can reach him.**

------------------------------------------------------------------------

# 16. No Excessive Self-Promotion

Avoid phrases such as:

``` text
Passionate developer
Visionary founder
Building the future
10x developer
Technology enthusiast
AI expert
Innovative entrepreneur
```

These are inconsistent with Omega's restrained voice.

The section should demonstrate credibility through what has already been
built.

------------------------------------------------------------------------

# 17. Relationship to Funding Section

Keep the funding/join-the-journey section separate.

The two sections have different purposes.

### Funding section

Communicates:

> You can participate in Omega's journey.

Possible participation includes:

-   financial support
-   sponsorship
-   collaboration
-   other meaningful forms of contribution

### About Me section

Communicates:

> This is the person building Omega.

Do not merge the two.

Do not write:

``` text
Support me
```

Do not write:

``` text
I need your support
```

Do not make the founder section sound financially dependent on visitors.

------------------------------------------------------------------------

# 18. Relationship to Final CTA

The current final CTA has the Omega message:

``` text
You choose the journey.
Omega stays with you.
```

and:

``` text
Back the project today →
```

The About Me section should not compete with this.

The hierarchy should remain:

``` text
Omega's final message
        ↓
Founder identity
        ↓
Contact
        ↓
Footer
```

The founder section is a human signature, not another hero.

------------------------------------------------------------------------

# 19. Footer Integration

After the About Me section, keep the existing footer language.

Recommended structure:

``` text
──────────────────────────────────────────────────────────────

OMEGA              Product   Roadmap   Contact   Privacy


LOCAL-FIRST. NO TRACKERS. BUILT FOR THE LONG JOURNEY.
```

Do not add another large heading after the founder section.

The footer should feel like the website is quietly closing.

------------------------------------------------------------------------

# 20. Animation Philosophy

This section must follow the overall Omega animation philosophy.

## Required

-   opacity transitions
-   small vertical movement
-   height/layout expansion
-   subtle stagger
-   transform-based animation where appropriate
-   `prefers-reduced-motion` support

## Avoid

-   cursor trails
-   particle systems
-   floating elements
-   continuous animations
-   parallax
-   large-scale scroll effects
-   animated gradients
-   glowing cards
-   bouncing buttons
-   excessive spring physics
-   animation running continuously in the background

The interaction should consume almost no meaningful ongoing CPU/GPU
resources.

The only animation should happen when the user interacts.

------------------------------------------------------------------------

# 21. Reduced Motion

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
    /* disable or greatly simplify reveal transitions */
}
```

For reduced-motion users, contact links can simply appear/disappear
without animated movement.

Functionality must remain identical.

------------------------------------------------------------------------

# 22. Accessibility

The interaction must be accessible.

Use a real `<button>` for:

``` text
Get in touch →
```

Do not implement the interaction using a `<div>` click handler.

The button must:

-   be keyboard accessible
-   have a visible focus state
-   have appropriate contrast
-   expose expanded/collapsed state when applicable

Recommended:

``` html
<button
    aria-expanded="false"
    aria-controls="omega-contact-links">
    Get in touch →
</button>
```

After opening:

``` html
<button
    aria-expanded="true"
    aria-controls="omega-contact-links">
    Get in touch →
</button>
```

The contact container should have an appropriate relationship with the
button.

All three links must be keyboard navigable.

------------------------------------------------------------------------

# 23. Responsive Behavior

## Desktop

Use the full editorial layout with generous whitespace.

The name should remain on one line where the viewport permits.

------------------------------------------------------------------------

## Tablet

Reduce:

-   heading size
-   horizontal padding
-   section spacing

Keep the same content hierarchy.

------------------------------------------------------------------------

## Mobile

Stack everything naturally.

Example:

``` text
THE PERSON BEHIND OMEGA

Built by
Satyam Singh.

ANDROID DEVELOPER · PRODUCT BUILDER

Omega is an independent project I started...
...

Have a question about Omega?
Want to build something together?

Get in touch →

Email →
LinkedIn →
My Website →
```

Do not create a separate mobile design.

The same visual language should simply become more compact.

------------------------------------------------------------------------

# 24. Link Behavior

## Email

Open the user's default email client:

``` text
mailto:
```

## LinkedIn

Open the LinkedIn profile.

For external links, use the existing website convention for:

``` text
target="_blank"
rel="noopener noreferrer"
```

if that convention is already used elsewhere.

## My Website

Open Satyam's personal website.

Do not expose raw URLs in the UI.

------------------------------------------------------------------------

# 25. Implementation Architecture

Keep the implementation isolated.

Recommended component structure:

``` text
AboutMeSection
├── SectionLabel
├── FounderHeading
├── FounderRole
├── FounderDescription
└── ContactReveal
    ├── ContactPrompt
    └── ContactLinks
        ├── EmailLink
        ├── LinkedInLink
        └── WebsiteLink
```

The exact component names can follow the existing project's naming
conventions.

Do not introduce a new design system for this section.

Reuse:

-   existing typography classes
-   existing spacing tokens
-   existing button styles
-   existing colors
-   existing container widths
-   existing responsive breakpoints

------------------------------------------------------------------------

# 26. State

Only one small UI state is required:

``` text
contactExpanded: Boolean
```

Initial:

``` text
false
```

After clicking Get in touch:

``` text
true
```

No backend state is necessary.

No API is necessary.

No database is necessary.

No authentication is necessary.

------------------------------------------------------------------------

# 27. Suggested React/TypeScript Logic

Conceptually:

``` tsx
const [contactExpanded, setContactExpanded] = useState(false);

<button
    type="button"
    aria-expanded={contactExpanded}
    aria-controls="omega-contact-links"
    onClick={() => setContactExpanded(value => !value)}
>
    Get in touch →
</button>

<div
    id="omega-contact-links"
    data-expanded={contactExpanded}
>
    ...
</div>
```

Use the project's existing animation approach.

If the project already uses Framer Motion or another animation library,
reuse it rather than adding another dependency.

If no animation library exists, CSS transitions are sufficient.

------------------------------------------------------------------------

# 28. Preferred CSS Behavior

A CSS-only implementation is preferred for this small interaction.

Conceptually:

``` css
.contact-links {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transform: translateY(-8px);
    transition:
        grid-template-rows 300ms ease,
        opacity 250ms ease,
        transform 300ms ease;
}

.contact-links[data-expanded="true"] {
    grid-template-rows: 1fr;
    opacity: 1;
    transform: translateY(0);
}
```

The internal content should be clipped appropriately while collapsed.

Use the project's existing easing tokens if available.

Do not add complicated animation infrastructure for this.

------------------------------------------------------------------------

# 29. Contact Link Stagger

If the project already has a reusable stagger animation, it can be used.

Otherwise keep it simple.

Recommended:

``` text
Email       0ms
LinkedIn    60ms
My Website  120ms
```

Each link:

``` text
opacity: 0 → 1
transform: translateY(8px) → translateY(0)
```

Keep the effect barely noticeable.

The visitor should perceive:

> "The options appeared."

not:

> "An animation just happened."

------------------------------------------------------------------------

# 30. Visual Hierarchy

The hierarchy must be:

``` text
1. Section label
2. Satyam Singh
3. Android Developer · Product Builder
4. Short explanation
5. Contact invitation
6. Contact links
7. Footer
```

The contact links should never visually overpower the founder heading.

The founder heading should never visually overpower the primary Omega
story.

------------------------------------------------------------------------

# 31. Do Not Add

The AI implementation tool must not introduce:

-   pricing
-   donation amounts
-   payment UI
-   supporter tiers
-   funding counters
-   social follower counts
-   GitHub contribution graphs
-   skill badges
-   technology logos
-   profile statistics
-   testimonials
-   large founder portrait
-   animated avatar
-   cursor animation
-   particle background
-   new gradients
-   new color palette
-   new navigation
-   a modal contact form
-   newsletter signup

These are outside the purpose of this section.

------------------------------------------------------------------------

# 32. Final Acceptance Criteria

The implementation is considered correct only if all of the following
are true:

### Content

-   [ ] Label says `THE PERSON BEHIND OMEGA`.
-   [ ] Heading says `Built by Satyam Singh.`
-   [ ] Role says `ANDROID DEVELOPER · PRODUCT BUILDER`.
-   [ ] Approved two-paragraph description is used.
-   [ ] Contact prompt uses the approved wording.
-   [ ] Contact button says `Get in touch →`.
-   [ ] Three links are Email, LinkedIn, and My Website.

### Interaction

-   [ ] Contact links are hidden initially.
-   [ ] Clicking Get in touch reveals them inline.
-   [ ] No modal opens.
-   [ ] No new page is required for the reveal.
-   [ ] Reveal animation is subtle.
-   [ ] No continuous animation is running.
-   [ ] Reduced-motion behavior is supported.

### Design

-   [ ] Existing Omega typography is reused.
-   [ ] Existing Omega colors are reused.
-   [ ] Existing spacing/container system is reused.
-   [ ] Large negative space is preserved.
-   [ ] No card-heavy layout is introduced.
-   [ ] No portrait is added.
-   [ ] The section feels like a signature, not a resume.

### Technical

-   [ ] Button is keyboard accessible.
-   [ ] `aria-expanded` is updated correctly.
-   [ ] `aria-controls` points to the contact links container.
-   [ ] Email uses `mailto:`.
-   [ ] LinkedIn points to the correct profile.
-   [ ] My Website points to the correct personal website.
-   [ ] No unnecessary dependency is added.
-   [ ] Existing project architecture is respected.

------------------------------------------------------------------------

# 33. Final Visual Intent

The finished section should communicate this without explicitly saying
it:

> **Omega is not a faceless product.**
>
> **It is an independently built system with a person behind it.**
>
> **If you want to understand it, ask about it, or build something
> together, there is a direct path to the person who made it.**

The section should end quietly.

No sales pitch.

No exaggerated founder story.

No desperation.

Just a clear identity and an open door.

------------------------------------------------------------------------

# 34. Final Content Snapshot

``` text
THE PERSON BEHIND OMEGA

Built by Satyam Singh.

ANDROID DEVELOPER · PRODUCT BUILDER

Omega is an independent project I started to build a different
kind of productivity system — one that gives structure and
direction without taking control away from the person using it.

I design and build Omega end to end, from the product and Android
application to the systems behind it.

Have a question about Omega?
Want to build something together?

Get in touch →

    Email →
    LinkedIn →
    My Website →
```

This is the final baseline for implementation. Future visual refinement
should preserve the same hierarchy, restraint, and narrative purpose
rather than adding new UI complexity.
