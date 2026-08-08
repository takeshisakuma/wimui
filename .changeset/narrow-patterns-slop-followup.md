---
"wimui": patch
---

Table: drop the outer `card` frame when rows become mobile cards; Patterns narrow follow-ups; GanttChart timeline scrolls as one.

`container-type` and the card border lived on the same wrapper, so the border could not be cleared by the mobileCard container query (same reason DataGrid splits root/container). IntakeQueue uses `mobileCard="md"`; ComparisonTable stacks below 768; composition docs match the sm-default break; Dashboard / Starter copy polish. GanttChart puts header + body in one `overflow: auto` scrollport so narrow timelines are reachable (sticky header on vertical scroll). SortableList demo uses `min(100%, 400px)` so the story no longer forces page horizontal scroll. Story demo copy drops Bento/Doe hype; `check:slop` hype scan covers all `docs_stories_*` locales. Audit table samples use real names (placeholder keys keep `John Doe`). `elevated` (Card/Stats variant) is a hype false-positive for `elevate`.
