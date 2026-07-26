---
"wimui": patch
---

Patch release after 0.5.1. Card `padding` now works at `xl` / `2xl` / `3xl` — the prop type accepted them but no CSS class existed, so they silently did nothing and call sites had to reach for inline style. Badge / Tag / Chip with `intent="neutral"` and `variant="subtle"` were invisible on light surfaces (the `disabled` token painted at 15% alpha resolves to roughly `#fbfbfb` on white); the token is now painted opaque, so **that combination changes appearance** — light `#e5e5e5` with `#393939` text (8.5:1), dark `#4f4f4f` with `#e5e5e5` (6.5:1). `llms.txt` / `llms-full.txt` regenerated: the published copies had been stale since v0.3.0, listing wrong `FeedbackIntent` defaults and missing props.
