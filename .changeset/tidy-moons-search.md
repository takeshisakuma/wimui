---
"wimui": minor
---

Two icons the set was missing: `menu` (three equal-length bars) and `grid`
(a 3×3 arrangement). Both are exported from `wimui/icon` like the rest.

Components that answer to more than one name now say so in `llms.txt`, starting
with `Dropdown`, `HamburgerMenu` and `BentoGrid` — an agent or a reader arriving
with "overflow menu", "kebab menu" or "waffle menu" in hand can find the
component that actually implements it. The aliases are drawn from vocabulary in
use elsewhere (Apple HIG, Material, ARIA APG), not invented.
