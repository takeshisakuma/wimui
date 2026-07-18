# リリース手順（npm 公開）

このリポジトリを npm に公開するための runbook。**公開の実行は人間が行う**（`private` 解除・changeset 作成・publish はエージェント対象外）。

---

## 0. 前提（このリポジトリ側で済んでいること）

- パッケージメタ完備（`license: MIT` + `LICENSE`、`publishConfig.access: public`、`exports` / `files: ["dist"]` / `sideEffects` / `engines`）
- `release.yml`（changesets/action）+ `.changeset/config.json`（access public）+ `prepublishOnly` で build
- **provenance 有効化済み**（`release.yml` の `NPM_CONFIG_PROVENANCE: true` + `id-token: write`）
- 品質: tarball スモークゲート / tree-shaking / pnpm strict / ブランチ保護 / `npm audit` 0
- 英語 README を正本化（`README.ja.md` は tarball に入らない＝npm では英語のみ表示）
- npm 名 `wimui` は未取得（最初の publish で取得）

## 1. 事前準備（初回だけ・人間）

1. **npm アカウント**を用意（無料）し、**2FA を有効化**（Account → Two-Factor Auth → "Authorization and writes"）。
2. **トークン発行**: npmjs.com → Access Tokens → **Granular Access Token**（対象 `wimui`・Read and write・期限付き）を推奨。CI 用なので 2FA をバイパスできる automation 相当。
3. **GitHub Secret 登録**: リポジトリ → Settings → Environments → **`release`** 環境を作成 → その環境の Secrets に **`NPM_TOKEN`** を登録。
4. **（推奨）Environment 保護**: `release` 環境に **Required reviewers** を自分に設定 → publish 前に手動承認が要るようになり、NPM_TOKEN 流出耐性が上がる。

> 手動 publish するだけなら 2〜4 は不要（`npm login` → `npm publish` でその場 2FA）。CI 自動化する場合に必要。

## 2. 公開手順（順序）

```bash
# a. リリース用 changeset を作成（バージョン/変更点を宣言）
npm run changeset          # 初回は minor か major を選ぶ（0.x なら minor 推奨）

# b. private を外す
#    package.json の "private": true を削除

# c. README の「未公開」表記を差し替え（下の §3 の文面に）

# d. a〜c を PR にして main へマージ
#    → changesets/action が「Version Packages」PR を自動作成する

# e. 「Version Packages」PR をマージ
#    → release.yml が npm publish を実行（Environment 承認を設定していれば承認する）
```

- 手動で出す場合は d/e の代わりに、build 済みで `npm publish --access public`（`npm login` 済み前提）。

## 3. 公開時の README 差し替え文面

`README.md` の **Installation** セクションを次に置換:

~~~markdown
## Installation

```bash
npm install wimui
# peers (React 19):
npm install react@^19 react-dom@^19
```

Optional features need their own peer (see "Optional peerDependencies"): e.g. `npm install recharts` for `wimui/charts`.
~~~

`README.ja.md` の **インストール** セクションを次に置換:

~~~markdown
## インストール

```bash
npm install wimui
# peer（React 19）:
npm install react@^19 react-dom@^19
```

optional 機能は対応する peer が必要（「オプショナルな peerDependencies」参照）。例: `wimui/charts` を使うなら `npm install recharts`。
~~~

> 併せて、両 README 冒頭付近の「Not yet published / 現在 npm には未公開です」旨の一文も削除する。

## 4. 公開後の確認

- `npm view wimui version` で公開バージョンを確認。
- npm のパッケージページに **Provenance** バッジが出ているか確認（`NPM_CONFIG_PROVENANCE` が効いた証拠）。
- 別ディレクトリで `npm install wimui react@^19 react-dom@^19` → 代表コンポーネントが import・描画できるか（スモークゲートと同等の手動確認）。

## 5. インシデント対応（サプライチェーン）

- **依存が汚染**（例: 依存の悪性版が公表）: `npm audit` → `overrides` で安全版に固定 → patch を publish → CHANGELOG/Advisory で告知。
- **自分の公開物が汚染**（攻撃者が悪性 `wimui` を publish）: ①該当版を `npm unpublish`（72h 以内可、超過は npm サポート）②**全トークンをローテーション**＋2FA 強化 ③クリーンな patch を publish ④**GitHub Security Advisory** を発行（Private Vulnerability Reporting 有効化済み）。
- `Dependabot alerts` / 週次 `Dependency Audit`（`audit.yml`）を監視。

## 6. 継続運用

- 変更ごとに `npm run changeset`（自動 CHANGELOG・semver）。
- **1.0 以降は semver 厳守**（破壊的変更＝major）。今は 0.x で柔軟。
- 不良/古い版は `npm deprecate` で警告。
- peer レンジ（React / zod）の追随は `docs/feature-watchlist.json`（T14）が補助。
