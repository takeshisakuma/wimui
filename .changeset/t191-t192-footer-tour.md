---
"wimui": patch
---

Footer section titles stay out of the heading outline. Tour's dismiss mask has a name, and Back / Next / Finish follow the built-in locale. Tour does not restart scroll or animate the spotlight when step copy updates. Tour waits until the target is measured (and fonts have loaded) before painting, and does not scroll a target that is already on screen. The spotlight mask uses inset instead of 100vw. The mask is committed before the hole is measured, so the spotlight matches the button without a later correction jump.
