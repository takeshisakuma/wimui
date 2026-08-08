---
"wimui": patch
---

Table: drop the outer `card` frame when rows become mobile cards; Patterns narrow follow-ups.

`container-type` and the card border lived on the same wrapper, so the border could not be cleared by the mobileCard container query (same reason DataGrid splits root/container). IntakeQueue uses `mobileCard="md"`; ComparisonTable stacks below 768; composition docs match the sm-default break; Dashboard / Starter copy polish.
