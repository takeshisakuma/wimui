# WIM UI 改善リスト（継続用）

最終更新: 2026-07-13（asChild 残り / Form レシピ）  
作業再開時はここから。済んだ詳細は git 履歴を参照。

---

## 次にやるとよい順（publish 以外）

大きな戦略タスクは一通り済。残りは任意の品質・DX 改善。

1. **運用維持**  
   `PX_BASELINE = 0` / `i18n:check` / `check:api` / `check:imports`。触った SCSS に未注記 px を増やさない。

**npm 公開**は人が決める項目（`private` 解除・changeset・`NPM_TOKEN`）。エージェントは勝手に進めない。

---

## 状態付きメモ

| 項目 | 状態 |
|---|---|
| グローバル密度トークン（基盤） | **済**（`data-density` / `setWimDensity`） |
| 密度の適用拡大（field / list / item） | **済**（Input・Textarea・Segmented・Toggle・Menu・Select 系など） |
| Form 連携（RHF / zod） | **済**（`wimui/rhf`） |
| Form レシピ（DatePicker / Rating / Switch） | **済**（Patterns/ReactHookForm） |
| エクスポート DX / Docgen Import | **済** |
| Props 説明 i18n（leaf + 複合） | **済**（Missing 0） |
| `PX_BASELINE` | **済**（0。維持のみ） |
| VRT ベースライン | **更新済**（2026-07-13 push） |
| npm 公開の破壊なし準備 | **済**。公開判断は未 |
| asChild 残り | **済**（ButtonGroup / ThemeToggle / RangeSlider / Rating / CopyButton / BackTop） |
| RTL / 論理プロパティ | **対応予定なし** |

### RTL（対応予定なし）
- 公式言語 en / ja / pt は LTR。部分適用はしない
- **やらないこと（エージェント）**: RTL 実装・論理プロパティ一括移行・`dir="rtl"` の勝手な着手

---

## 運用メモ

```bash
npm run audit:hardcoded   # PX ベースライン
npm run check:api         # 公開 API スナップショット
npm run check:imports     # peer のルート import 禁止
npm run i18n:check        # 3言語キー整合
npm run check:aschild     # asChild 必須リスト
```

- Docgen: `src/data/docgen_*.json` は gitignore
- peer マップ: `src/data/peer-imports.json`

---

## 完了ログ（直近）

### 2026-07-13
- asChild 残り（低優先）: ButtonGroup / ThemeToggle / RangeSlider / Rating / CopyButton / BackTop
- Form レシピ: Patterns に DatePicker / Rating / Switch（`WithPickers`）
- 密度適用拡大: `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*`
- Form 連携（`wimui/rhf`）、密度トークン基盤、RTL 対応予定なし
- Docgen Import / Props i18n 複合 / `PX_BASELINE` → 0
- UI 微修正、npm 公開の破壊なし準備、VRT ベースライン更新

### それ以前（要約）
- VRT・ダーク安定化、Toolbar / Menubar、asChild 高中優先、エクスポート DX、Props i18n leaf など一式
