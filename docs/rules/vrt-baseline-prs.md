# ベースライン更新を含む PR の着地

> この文書は `MAINTENANCE.md`（定期点検）から 2026-09-21 に切り出したものです。定期点検ではなく **VRT / a11y のベースラインを触る PR をマージするとき**の手順なので、その作業のときだけ読む規則として `docs/rules/` に置きます。エージェントへの指示の正本は `AGENTS.md` です。

## update が書き換える範囲は、ワークフローが決める（T258・2026-10-04）

update は、ブランチの変更（既定は `main...<ブランチ>`）を見て、書き換えてよい範囲を自分で決めます。決め方の正本は `scripts/vrt-update-scope.js`（実証は `npm run prove:vrt-update-scope`）。

| 判定 | いつ | 何を書き換えるか |
|---|---|---|
| `all` | トークン・共通のスタイル（`src/styles/`）・Storybook の設定・VRT の撮り方・lockfile・VRT のワークフローを触ったとき。変更ファイルの一覧が取れなかったとき | 全量（従来どおり） |
| `scoped` | それ以外 | ①比較に落ちた絵と新しい絵 ②PR が触った部品（`src/components/<カテゴリ>/<Name>/` と `stories/…/<Dir>/`）のストーリー全部 |

判定は、update のランのジョブサマリ（「VRT update の範囲」）に出ます。**update のあとは、まずそこを読む。**

- **scoped のとき、無関係の絵は書き換わらない前提です。** それでも書き換わっていたら、その絵は compare に落ちる差が出たということなので、戻す前に中身を見ること（`node scripts/vrt-diff-report.js <SHA>`）
- **all のときは、従来どおり手で仕分ける**（下の節）。共通のスタイルを 1 行触っただけでも all になります（その 1 行がどの絵に効くかは、機械では決められないため）
- **ほかの部品を中で使っている画面**（Patterns など）は、PR が触った部品の「持ち物」に入りません。そこに出た変更は、比較に落ちたときだけ書き換わります。閾値未満なら古いベースラインのまま残ります
- 別のブランチに積んだブランチで update するときは、dispatch の `scope_base` に積んだ先を渡します（渡さないと、積んだ先の変更まで自分の変更として数えます）

## ベースライン更新を含む PR は**直列に**着地させる

`--update-snapshots=all` は全量を撮り直すので、**内容が同じでもバイト列が変わる PNG が毎回 100 枚前後**生まれる。ベースラインを触る PR を 2 本並行させると、**必ず衝突する**（2026-08-07 に #288 と #289 で 2 回発生。衝突したのはどちらも撮り直しノイズの PNG だった）。

衝突したときの解き方は、**そのブランチがベースラインを正当に所有しているか**で変わる:

- **所有していない**（compare で「既存 0 枚が動く」と実証済み）→ main のベースラインを丸ごと採る。新規追加分だけ残す
- **所有している**（意図した差分がある）→ main のベースラインに揃え直してから、**update をもう 1 回走らせて撮り直す**。146 枚のコミットバックから正しい 36 枚を手で選り分けようとしない

## ベースラインのコミットバック後は、**head のチェックを数えてからマージする**

VRT の `update` が撮り直した PNG をコミットバックすると、**PR の head は
`github-actions[bot]` のコミットになる**。このとき、その head に対するワークフローが
**`action_required`（承認待ち）で止まったまま**になることがある。

**止まっている間、`gh pr checks` は何も出さず、`mergeStateStatus` は `CLEAN` を返す。**
つまり画面上は「問題なし」に見えるのに、**その head では品質ゲートが 1 つも走っていない。**
気づかずにマージすると、**誰も検証していないコミットが main に入る。**

**毎回ではない。** 実測（どちらも同じ `actor` / `triggering_actor` / `event`）:

| PR | コミットバック head | ワークフロー |
|---|---|---|
| #456（T212） | `e6476dadf` | **承認不要で全部 success** |
| #461（T214） | `a80cf751a` | **8 本すべて `action_required`・head の check-runs は 0 件** |

API のメタデータでは両者を区別できなかったので、**「起きるかもしれない」前提で毎回確かめる**。

### 確かめ方（PR の表示を信じない）

```bash
SHA=$(gh pr view <PR番号> --json headRefOid --jq .headRefOid)

# ① head に紐づくチェックの件数。**0 なら何も走っていない**
gh api repos/takeshisakuma/wimui/commits/$SHA/check-runs --jq '.check_runs | length'

# ② 承認待ちが無いか
gh api "repos/takeshisakuma/wimui/actions/runs?head_sha=$SHA" \
  --jq '.workflow_runs[] | "\(.conclusion // .status)\t\(.name)\t\(.id)"'
```

### 承認待ちだったときの戻し方

```bash
gh api "repos/takeshisakuma/wimui/actions/runs?head_sha=$SHA" \
  --jq '.workflow_runs[] | select(.conclusion == "action_required") | .id' |
while read -r id; do gh api -X POST "repos/takeshisakuma/wimui/actions/runs/$id/approve"; done
```

承認したら ① をもう一度数え、**全部が `success` になってからマージ可否を判断する。**
（2026-08-20・#461 で実測。承認前 0 件 → 承認後 20 件。）

> **なぜ `gh pr checks` では足りないのか。** あれは PR に紐づいた *statuses / checks* を
> 見るが、**走っていないものは存在しない**ので「空」になる。空と全緑は画面上で紛らわしい。
> **件数を数えれば区別がつく。** これは「タイムアウトした job の conclusion が
> `cancelled`（灰色）で赤より目に入らない」（CI-8）のと同じ型 ── **無いものは赤くならない。**

### 2026-09 からの形: ワークフローが 1 本も起動しない（承認する対象が無い）

その 98（2026-09-20〜21）では、コミットバック head の形が変わった。**`action_required` で待っているのではなく、ワークフローのラン自体が 0 件**になる ── 上の ② が空を返し、承認 API には叩く対象が無い。

**PR を close → reopen する**と `pull_request(reopened)` で全部走る（#657 で 0 → 21 件、#658 で 0 → 42 件、#659 も同様。**4 回連続で同じ挙動**）。

```bash
gh pr close <PR番号> && gh pr reopen <PR番号>
```

起こしたら ① をもう一度数え、全部が `success` になってからマージ可否を判断する。**どちらの形が出るかは事前に分からない**ので、① → ② の順に数えて、ランが 0 件なら close → reopen、`action_required` なら承認、と分岐する。
