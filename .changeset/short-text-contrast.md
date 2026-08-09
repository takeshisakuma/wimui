---
"wimui": patch
---

Fix text contrast on avatars, leaderboard medals and short-label controls

**1 文字のテキストは axe が色コントラストを測りません**（`Element content is too short to
determine if it is actual text content`）。そのため、以下の違反が検出されないまま出荷されていました。

- **`ChatUI` のアバター**: 全 13 色で白文字固定。**light 3 色・dark 9 色**が WCAG AA を割っており、
  ダークの `s7` は **1.52**（基準 4.5）。スウォッチごとに文字色を対にし、白／黒のうち
  コントラストが高い側を機械的に選びました（全 26 通りで最小 4.60）
- **`Leaderboard` のメダル**: 2 位 2.88 / 3 位 3.76。メダル色は変えず文字を暗くして
  7.28 / 5.59（1 位は元からその形）

**アバターとメダルの文字色が変わります。**
