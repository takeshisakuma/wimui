---
"wimui": patch
---

`Checkbox` and `Radio` meet the WCAG minimum tap target when they carry no label.

Both render a `<label>` around their input, so the label is what you click. With
text beside the box the label is already at least 24px tall from its line
height; without text — a row-selection checkbox in a table, a bare radio in a
list — it collapsed to the 18×18 of the box itself, below the 24×24 that WCAG
2.5.8 (AA) asks for.

The minimum now sits on the label, so the painted box stays 18px and centred.
Bare checkboxes and radios claim a little more room; labelled ones are
unchanged.
