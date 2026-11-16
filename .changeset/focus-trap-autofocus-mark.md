---
"wimui": minor
---

開いた面の最初のフォーカス先を、`data-autofocus` の印で選べるようにした（T399）。`FocusTrap` は、有効になったとき、印を付けた要素へフォーカスを置き、印が無ければ今までどおり DOM の最初のフォーカスできる要素へ置く。`FocusTrap` を使う `Dialog`・`Drawer`・`BottomSheet`・`CommandPalette` などに効く。props は増えない。印を付けた要素がフォーカスを取れないときは、印が無いのと同じに扱う。
