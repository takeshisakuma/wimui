---
"wimui": minor
---

`ChatMessage`'s actions are now visible without hovering.

**What changes**: `actionsVisible` defaults to `true` instead of `false`. If you
pass `actions` to a `ChatMessage`, those controls are now drawn at full opacity
from the start on pointer devices, not revealed on hover. Touch devices already
behaved this way and are unaffected.

**Why**: hover-reveal does not hide a control, it hides the fact that the control
exists. Someone reading a reply with a mouse has no way to learn that they can
rate it until they happen to point at it, and the tooltips added alongside do not
help — they wait for the same hover, so they only reach people who already found
the buttons.

**If you want the old behaviour**, pass `actionsVisible={false}`. That still
reveals on hover and on `:focus-within`, and still shows the actions
unconditionally on touch (`@media (hover: none)`), because `opacity: 0` does not
disable a control — a hidden thumbs-down remains tappable.

Storybook's `IconGallery` blocks in the icon documentation also render correctly
in dark mode now; they were drawing white icons on a white specimen tile.
