---
"wimui": patch
---

`Kanban`: make the scrollable board reachable by keyboard.

The board root is `role="region"` with `overflow-x: auto`, but it could not take
focus. When the columns are wide enough to scroll and the cards contain nothing
focusable, a keyboard user had no way to reach the columns off-screen — axe
reports this as `scrollable-region-focusable` at serious impact.

It never showed up in the component's own stories, because those do not scroll
far enough and focusable card content makes the rule inapplicable. It surfaced
in the seventh composed screen (`Patterns/Newsroom`), where four columns sit
inside an `AppShell`.

The board now carries `tabIndex={0}`, which adds one tab stop per board.
