# リリース手順（npm 公開・CI 自動ルート）

このリポジトリを npm へ公開する runbook。**CI（GitHub Actions + changesets）で自動 publish** する前提。

**分担**: changeset の作成と PR まではエージェントが行ってよい（コードは動かず、人がレビューしてマージする）。
**publish を起こすのは「Version Packages」PR のマージ**で、そこと `private` 解除は**人間が行う**。
境界は「**publish が起きるか**」であって、リリースに関係するファイルを触るかどうかではない。

> 2026-08-05 に文言を直した。それまで「changeset 作成は人間が行う（エージェント対象外）」と書かれていたが、
> **0.7.0 / 0.11.0 / 0.14.0 / 0.15.0 の changeset はいずれもエージェントが書いて PR にしている**（`git log` で確認できる）。
> 文章が実態から取り残されていて、0.16.0 の準備で実際に手が止まった。

> なぜ CI ルートか: 初回から **provenance（なりすまし publish 対策）**と **CHANGELOG 自動化**が付き、
> 以降ずっと同じ流れで運用できる。手動 `npm publish` は捨て学習になるので使わない。

---

## 0. 前提（repo 側で済んでいること）

- パッケージメタ完備（`license: MIT` + `LICENSE`、`publishConfig.access: public`、`exports` / `files:["dist"]` / `sideEffects` / `engines`）
- `release.yml`（changesets/action・**provenance 有効**・`environment: release`）+ `.changeset/config.json`
- 品質: スモークゲート / tree-shaking / pnpm strict / ブランチ保護 / `npm audit` 0
- 英語 README を正本化（**npm のパッケージページが表示するのは `README.md` だけ**。`README.ja.md` 自体は tarball に入るが、表示はされない）
- npm 名 `wimui` は未取得（最初の publish で取得）

## 1. 初回だけの準備（人間）

1. **npm アカウント + 2FA**（Google Authenticator 等。"Authorization and writes" で publish も保護）。
2. **トークン発行**: npmjs.com → Access Tokens → **Granular Access Token**（対象 `wimui`・**Read and write**・期限付き）。
3. **GitHub 側**: リポジトリ → Settings → Environments → **`release`** 環境を作成 → その環境の **Secrets** に **`NPM_TOKEN`**（= 上のトークン）を登録。
4. **（推奨）`release` 環境に Required reviewers = 自分**を設定 → publish 前に手動承認が要る（NPM_TOKEN 流出耐性）。

> `NPM_TOKEN` は必ず **`release` 環境の Secret** に置く（リポジトリ直下の Secret ではなく）。`release.yml` が `environment: release` を参照している。

## 2. 公開の流れ（**PR が 2 回出るのが正常**）

```bash
# a. リリース用 changeset を作成
npm run changeset      # 初回は minor を選ぶ（0.x）。変更概要を1行書く → .changeset/*.md が生成される

# b. private を外す：package.json の "private": true を削除   ← 初回だけ
# c. README の「未公開」表記を差し替え（下の §3）              ← 初回だけ

# d. a〜c を 1 つの PR にして main へマージ
```

> **b と c は初回（0.1.0・2026-07-18 の #45）で済んでいる。** 2 回目以降は a と d だけ ── `private` は既に無く、
> README の「未公開」表記も既に消えている。0.16.0 の準備でここを読み直して一度止まったので明記する。

**ここから CI が動く。初見で必ず戸惑うポイント:**

- d をマージすると、`changesets/action` が **もう 1 つ PR を自動で作る**。タイトルは通常 **「Version Packages」**。
- この 2 回目の PR は、`package.json` の **version を上げ**、`CHANGELOG.md` を**生成/更新**し、`.changeset/*.md` を消化する内容。
- **この「Version Packages」PR をマージした瞬間に、`release.yml` が `npm publish` を実行**する（`release` 環境に reviewer を付けていれば、Actions の実行前に承認を求められる → 承認する）。
- ⚠️ **「Version Packages」PR には CI チェックが付かない**（changesets bot が `GITHUB_TOKEN` で push するため、GitHub の仕様で workflow が起動しない）。ブランチ保護で `BLOCKED` になるが、**中身は version + CHANGELOG のみでコード変更が無い**ので、管理者は **"Merge without waiting"（admin バイパス）でそのままマージしてよい**（`enforce_admins: false` 前提）。完全自動化したい場合は changesets/action に PAT を渡す（長寿命 Secret が増えるトレードオフ）。

```
自分の PR（changeset + private削除 + README）をマージ
        ↓ changesets が自動生成
「Version Packages」PR（version↑ + CHANGELOG）をマージ  ←★ここで publish される
        ↓
npm に wimui が公開（provenance バッジ付き）
```

> 「なぜ 2 回 PR が出るの？」= **バージョン確定を人間が最終承認する**ための仕組み。1 回目で「出したい変更」を宣言し、2 回目で「実際のバージョン/CHANGELOG」を確認してからマージ＝publish、という 2 段階。

## 3. 公開時の README 差し替え文面

`README.md` の **Installation** セクションを置換:

~~~markdown
## Installation

```bash
npm install wimui
# peers (React 19):
npm install react@^19 react-dom@^19
```

Optional features need their own peer (see "Optional peerDependencies"): e.g. `npm install recharts` for `wimui/charts`.
~~~

`README.ja.md` の **インストール** セクションを置換:

~~~markdown
## インストール

```bash
npm install wimui
# peer（React 19）:
npm install react@^19 react-dom@^19
```

optional 機能は対応する peer が必要（「オプショナルな peerDependencies」参照）。例: `wimui/charts` を使うなら `npm install recharts`。
~~~

> 併せて、両 README 冒頭付近の「Not yet published / 現在 npm には未公開です」の一文も削除。

## 4. 公開後の確認

- `npm view wimui version` で公開バージョンを確認。
- npm のパッケージページに **Provenance** バッジが出ているか（`NPM_CONFIG_PROVENANCE` が効いた証拠）。
- 別ディレクトリで `npm install wimui react@^19 react-dom@^19` → 代表コンポーネントが import・描画できるか。

## 5. 2 回目以降

- 変更ごとに `npm run changeset`（patch/minor/major を選ぶ）→ 通常の PR に含めてマージ。
- あとは §2 と同じ（「Version Packages」PR が出る → マージで publish）。
- **1.0 以降は semver 厳守**（破壊的変更＝major）。今は 0.x で柔軟。

## 6. 手動フォールバック（CI が使えない緊急時のみ）

通常は §2 の CI ルートを使う。**GitHub Actions 障害・NPM_TOKEN 不調・緊急ホットフィックス**などで CI から publish できないときだけ、ローカルから同じ publish コマンドを実行する。

```bash
npm login                 # 対話で 2FA 込みログイン（Google Authenticator の 6 桁）
npm run changeset         # まだ無ければ作る（変更点・semver を宣言）
npm run version           # changeset を消化して package.json の version と CHANGELOG.md を更新
npm run release           # = build + changeset publish（= 実際の npm publish）
```

- **CI ルートと同じ `npm run release` を叩くだけ**なので、version/CHANGELOG は整合が保たれる（`npm publish` を直接叩くより安全）。
- **注意: 手動 publish には provenance が付かない**（provenance は CI の OIDC が前提）。緊急時の一時手段と割り切り、落ち着いたら次のリリースは CI ルートへ戻す。
- 実行後は §4 の確認（`npm view wimui version` 等）を必ず行う。

## 7. インシデント対応（サプライチェーン）

- **依存が汚染**: `npm audit` → `overrides` で安全版に固定 → patch を publish → CHANGELOG/Advisory で告知。
- **自分の公開物が汚染**（攻撃者が悪性 `wimui` を publish）: ①該当版を `npm unpublish`（72h 以内可、超過は npm サポート）②**全トークンをローテーション**＋2FA 強化 ③クリーンな patch を publish ④**GitHub Security Advisory** を発行（Private Vulnerability Reporting 有効化済み）。
- `Dependabot alerts` / 週次 `Dependency Audit`（`audit.yml`）を監視。
