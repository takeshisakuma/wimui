---
"wimui": patch
---

強制カラー（Windows のコントラスト テーマ）で、`Switch`・`Radio`・`SegmentedControl` の選択・オンの状態が見えるようにした（T391 の 1 本目）。これまでは、背景の色だけで示していたので、`Switch` は部品ごと地に溶け（ラベルの文字だけが残る）、`Radio` は選択の点が消え、`SegmentedControl` はどれが選ばれているか分からなかった。システムの色（`Highlight` / `HighlightText` / `ButtonText` / `GrayText`）で塗り直す。通常の表示は変わらない。
