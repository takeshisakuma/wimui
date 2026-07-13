# WIM UI 改善リスト（継続用）

最終更新: 2026-07-13  
作業再開時はここから。済んだ詳細は git 履歴を参照。

---

## 次にやるとよい順

1. **未コミット作業の整理** — Form 連携 / 密度 / RTL 方針明記など、この会話分が未コミットならコミット or PR
2. **npm 公開の人間判断** — 準備コードは済。残は人が決める:
   - [ ] `private: true` を削除
   - [ ] `npm run changeset`（初回リリース）
   - [ ] `npm run build && npm pack --dry-run`
   - [ ] GitHub Secrets に `NPM_TOKEN`
   - [ ] README の「npm 未公開」表記を公開後に更新
   - **やらないこと（エージェント）**: 無断で `private` 解除・publish・force push
3. **運用維持** — `PX_BASELINE = 0` を崩さない／`i18n:check`・`check:api`・`check:imports`

大きな未着手の戦略タスクは現状なし（公開判断以外はメンテと任意の小粒改善）。

---

## 状態付きメモ

| 項目 | 状態 |
|---|---|
| グローバル密度トークン | **済**（`data-density` / `setWimDensity`） |
| Form 連携（RHF / zod） | **済**（`wimui/rhf`） |
| エクスポート DX / Docgen Import | **済** |
| Props 説明 i18n（leaf + 複合） | **済**（Missing 0） |
| `PX_BASELINE` | **済**（0。維持のみ） |
| npm 公開の破壊なし準備 | **済**（`prepublishOnly` 等）。公開判断は未 |
| asChild 残り | **意図的低優先**（ButtonGroup / ThemeToggle / Rating 等） |
| RTL / 論理プロパティ | **対応予定なし** |

### RTL（対応予定なし）
- 公式言語 en / ja / pt は LTR。部分適用はしない
- **やらないこと（エージェント）**: RTL 実装・論理プロパティ一括移行・`dir="rtl"` の勝手な着手
- 方針変更時はこの節を更新してから専用作業とする

---

## 運用メモ

```bash
npm run audit:hardcoded   # PX ベースライン
npm run check:api         # 公開 API スナップショット
npm run check:imports     # peer のルート import 禁止
npm run i18n:check        # 3言語キー整合
npm run check:aschild     # asChild 必須リスト
```

- VRT: CI linux ベースラインが古ければ Actions で `Update baseline snapshots: true`
- Docgen: `src/data/docgen_*.json` は gitignore
- peer マップ: `src/data/peer-imports.json`

---

## 完了ログ（直近）

### 2026-07-13
- Form 連携（`wimui/rhf`）、密度トークン（`data-density`）、RTL 対応予定なしを明記
- Docgen Import / Props i18n 複合 / `PX_BASELINE` → 0
- UI 微修正（InputBase disabled アイコン、FieldLabel / ErrorBoundary i18n、ChatUI 吹き出し）
- npm 公開の破壊なし準備（`prepublishOnly` / keywords / publishConfig / README チェックリスト）

### それ以前（要約）
- VRT・ダーク安定化、Toolbar / Menubar、asChild 高中優先、エクスポート DX、Props i18n leaf、内部4パーツ Storybook、README / CI `audit:lib` など一式
