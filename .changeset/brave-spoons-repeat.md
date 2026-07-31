---
"wimui": patch
---

`Stats.Trend` is legible on its own. It used to tint its text with the trend
colour and leave the background alone, which put coloured text on the card's
surface at a contrast you had to squint at. It now paints a filled chip and puts
the surface colour on the text, so the direction reads at a glance instead of
depending on how the tint landed.

`EmptyState`'s `+` is the size the rest of the set is — it was hardcoding a 48px
inline size rather than taking it from the icon scale.
