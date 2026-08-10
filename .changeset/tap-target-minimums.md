---
"wimui": patch
---

Give icon-only controls the WCAG minimum tap target.

Four controls were smaller than the 24×24 CSS pixels WCAG 2.5.8 (AA) asks for:
the clear button inside inputs (20×20), Snackbar's close button (14.2×14.2),
TreeView's expand toggle (22.4×22.4) and Notification's close button
(23.8×23.8). All four are transparent buttons whose paint is the icon inside,
so `min-width` and `min-height` raise the hit area without changing how they
look at rest.

The minimum comes from a new `--wim-tap-target-min` token, fixed at 24px and
deliberately **not** density-aware: `--wim-height-xs` drops to 20px under
`compact`, which is below the floor it would be enforcing.

Nothing was measuring this. axe does not implement the rule, and a smaller
button screenshots fine.
