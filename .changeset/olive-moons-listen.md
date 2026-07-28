---
"wimui": patch
---

Three defects 0.6.0 shipped, found by building the second screen with it — a
multi-step wholesale application form.

**Accessibility**

- `FileUpload required` put `aria-required="true"` on its trigger. The trigger is a
  `role="button"`, and that role does not permit the attribute, so axe reported a
  critical `aria-allowed-attr` violation on every required upload in the library.
  The requirement is carried by the field's description instead.

**Correctness**

- `OtpInput` ignored the value it was mounted with. Its derived-state sync seeded the
  previous value from the current one, so the first render always compared equal and
  the sync never ran — `<OtpInput value="418203" />` drew six empty boxes. Re-showing
  a saved code, or remounting the step that holds one, dropped it silently.
- `Alert`, `Banner`, `Notification`, `Snackbar`, `Toast` and `Result` drew the same
  filled circle for every intent but success. `danger`, `warning` and `info` all fell
  through to it, leaving colour alone to carry the intent — while `alert-circle` and
  `info-circle` sat unused in the icon set, and the docs claimed each intent had an
  icon of its own. They now do. `warning` shares `danger`'s glyph, since the set has
  no triangle, and colour still separates the two.

The icon change is visible: anything showing a `danger`, `warning` or `info` feedback
component gets a different glyph in the same position and colour.
