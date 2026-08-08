---
"wimui": patch
---

`AppShell`: warn in development when the `sidebar` prop is mixed with the Composition API.

With structural children (`AppShell.Main`, `AppShell.Sidebar`, …), only the props-API branch renders `sidebar`, so the prop was dropped with no signal. Development builds now warn once and point at `<AppShell.Sidebar>` inside `<AppShell.Body>`.
