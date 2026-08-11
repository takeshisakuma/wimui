---
"wimui": minor
---

`QueryBuilder` operators are typed, and `ColorInput` becomes what its name says.

**破壊的変更**（0.x のため minor）。

```diff
  <QueryBuilder
    fields={fields}
    defaultQuery={{
      id: "root", combinator: "and", not: false,
      rules: [
-       { id: "r-1", field: "years", operator: "greater_equal", value: 2 },
+       { id: "r-1", field: "years", operator: ">=", value: 2 },
      ],
    }}
  />
```

`QueryRule.operator` was `string`, while the implementation only understood the
`value` side of its operator table — symbols (`=`, `!=`, `>`, `<`, `>=`, `<=`) plus
a few words (`contains`, `starts_with`, `ends_with`, `is_null`, `is_not_null`).
Neither the type nor the documentation said so, and **an operator outside that set
rendered an empty select with no error, no warning and no console output**. The
type is now derived from the table itself (`QueryOperator`, exported), so adding a
value to the table extends the type, and a value that slips past the type — plain
JS, an `as` cast, a query loaded from a server — logs once in development naming
the values that field type accepts. The MDX now lists them.

`ColorInput` rendered `<Input type="color">`: a swatch, nothing else. Its
documentation said it was the one for *entering* an exact colour as text, while
`ColorPicker` was the one for finding a colour visually — but both produced the
same control, differing by two pixels of height. `ColorInput` is now a hex text
field with a swatch beside it. The text you type is kept as you type it and only
commits once it reads as a colour, so `#7a1f` on the way to `#7a1f1f` no longer
fires `onChange`. `value` / `defaultValue` / `onChange` keep their shapes.
`ColorPicker` is unchanged.
