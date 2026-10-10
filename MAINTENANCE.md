# 定期点検

CI が毎回見ているものは、ここには書かない。**ここにあるのは「壊れても赤が出ない」もの**だけである。

**毎週月曜 09:00 JST に、その週にやる項目のチェックリストが issue で立つ**（ラベル `maintenance`・`.github/workflows/maintenance-reminder.yml`）。隔週は ISO 週番号が偶数の週、四半期は 1 / 4 / 7 / 10 月の 1 日を含む週に加わり、リリース前は出ない。本文は下の `## 毎週` / `## 隔週` / `## 四半期` の `### 項目` から組み立てるので、**項目を足すならここに `###` で足すだけでよい**（区分の見出しを変えるとスクリプトが落ちて知らせる）。手元での確認は `npm run maintenance:preview -- --date 2026-09-28`。

赤が出ない欠陥は、優先度で後回しにされるのではなく、**そもそも数えられていない**から放置される。
2026-08-07 の 1 日で、次のものがすべて「緑のまま存在していた」:

- `check:external-assets` は `category` が無く、`audit:lib` にも `audit:docs` にも入らず **CI で一度も走っていなかった**
- `check:prop-api` は `DataGridColumn` の中身を見ておらず、**`width` を丸ごと消しても exit 0**
- `vrt:report` は**実変更 30 枚を 30 枚とも `noise`** と報告していた
- `Chip` の `subtle` は**どのストーリーにも出ておらず**、変えても VRT が何も言わない
- `LoadingOverlay` の JSDoc は `Card` を名指しして「position を持たない」と書いていたが、**その記述のほうが実装より古かった**
- 実装が着地しているのに `IMPROVEMENTS.md` の行が古いものが **4 件**（T87 / T11 / T88 / T94）

どれも「見に行けば 10 分で分かる」ものだった。**見に行く日を決めていなかっただけ**である。

---

## 毎週

### 1. Dependabot の PR を処理する

minor / patch はグループ PR をマージしてよい（`AGENTS.md` の委任ポリシー）。major は互換性の根拠を添えて提案まで。

### 2. ブロック中の依存を、版番号ではなく**ブロッカーの実体**で再確認する

**最後に実体で確認した日: 2026-10-09**（2026-10-09 は宣言を読み直しただけで、どれも解けていない。`eslint` 10 は、peer を外して実際に流した ── 下の注記。以下は 2026-10-07 の記録: `vitest` 5 が解けていたので上げた ── 下の「解除したもの」。`eslint` 10・`typescript` 7・FullCalendar 7・`marked` 18 は解けていない。addon-mcp の行は 2026-10-02 の実測のまま）。**確認は `npm view <ブロッカー> peerDependencies` で、
宣言の実物を読む** ── 「まだ無理だろう」で飛ばすと、解けたことに気づかないまま何か月も止まる。
実際この日、`i18next-http-backend` は**解けていた**（`storybook-react-i18next` の peer が `^2 || ^3` から
`^2 || ^3 || ^4` へ動いていた。メモには「2026-07-06 再確認、変化なし」と書いたまま放置されていた）。

> **`node_modules` ではなく lockfile を読むこと。** 手元の `node_modules` は `npm install` を挟まないと
> lockfile より古いままで、2026-09-20 の実測では `storybook-react-i18next` が lock 10.1.4 / 手元 10.1.2 と
> ずれており、**手元だけを見ると「まだ `^3` まで」と読めてしまった**。CI は lock から入れるので、
> 判定材料は lock（か `npm view`）。

いま止めているもの:

| 依存 | 止めている理由 | 再開の判定材料 |
|---|---|---|
| `@storybook/addon-mcp` | ライブ MCP サーバの instructions がハードコードで第三者拡張が不可（T23） | `dist/preset.js` の `instructions` getter が外部のメタデータを受けるようになったか。**2026-09-28（10.6.0）: 一部だけ動いた。** ライブのサーバ（`initializeMCPServer` の `get instructions()`）は今も `buildServerInstructions` の結果だけを返す＝閉じたまま。一方、新しく **`experimental_storybookAi` プリセット**ができ、addon-mcp の実装（`buildStorybookAiMetadata`）は前のプリセットの `existingMetadata.instructions` を `joinInstructions` で**つなぐ**。読むのは Storybook の CLI 側の MCP（`storybook/dist/bin/core.js` の `src/cli/ai/mcp/local-metadata.ts`）。**CLI 経由のエージェントには WIM の合成ルールを届けられる道ができた**が、名前が `experimental_` で、開発サーバの MCP には効かない。T23 を進めるなら、まずこの道で `.storybook/main.ts` から instructions を足して CLI の MCP に出るかを実測する。**2026-10-02 に実測した（10.6.0。10.6.1 と 11.0.0-alpha.1 は getter だけ確認）: 採らない。** この道で足した instructions が出るのは `storybook ai --help` だけ（`STORYBOOK_FEATURE_AI_CLI=1` が要り、非推奨と表示される）。`storybook skills` / `storybook tools` / 開発サーバの MCP には出ない。**次に見るのは、`storybook skills` か `get instructions()` が、外から足した instructions を読むようになったか** |
| `eslint` 10 | `eslint-plugin-jsx-a11y` / `eslint-plugin-react` の peer が `^9` まで。**宣言だけの壁ではない**（2026-10-09 に実測。`eslint-plugin-react@7.37.5` は、今の設定のまま ESLint 10 で例外を投げる。下の注記） | 両プラグインの peer 宣言。`eslint-plugin-react` は、宣言に加えて `lib/util/version.js` が `getFilename` を呼ばなくなったか |
| `typescript` 7 | **`typescript-eslint` の peer が `>=4.8.4 <6.1.0`**（8.67.0 時点。TS 7 どころか 6.1 も範囲外） | `npm view typescript-eslint peerDependencies.typescript` の上限が動いたか |
| `marked` 18 | `@tiptap/markdown@3.31.4` が dependencies に `marked: ^17.0.1` を持つ。こちらだけ上げると marked が 2 つ入り、RichTextEditor が作った `Marked` のインスタンス（18）を 17 向けの実装へ渡す形になる（2026-10-07・#883 は型チェックが TS2322 で落ちた。major の ignore は #884） | `npm view @tiptap/markdown dependencies.marked` が 18 を含んだか（含んだら、marked の devDependencies と peer のレンジ、`@tiptap/markdown` を 1 PR で） |
| `@fullcalendar/*` 7 | プラグイン 3 つ（daygrid / timegrid / interaction）の `latest` が 6.1.21 のまま（2026-10-07。core だけ 7.1.1）。#598 の経緯は `dependabot.yml` のコメント | 3 つのプラグインの `latest` が 7 になったか（なったら、5 パッケージを 1 PR で） |

**解除したもの**:

| 依存 | 解除した日 | 何を確かめたか |
|---|---|---|
| `@changesets/cli` 3 | **2026-09-20**（T247 で cli 3.0.2 + `changesets/action@v2` を 1 PR で入れ、0.30.0 を新経路で公開した） | **本番でしか検証できない経路なので、実物まで見た** ── ①Version PR が `version-script` を経由している（`public/llms.txt` が 0.29.10 → 0.30.0 に再生成された。v1 の入力名なら黙って無視されてこのファイルは差分に出ない）②npm の `latest` = 0.30.0（provenance の attestations つき）③タグ `v0.30.0` ④GitHub Release。**「publish 成功のままタグと Release だけ静かに消える」という非対称な壊れ方は起きなかった。** 判定は引き続き `check:release-workflow` が持つ（CLI と action の組を見張る）。 |
| `i18next-http-backend` 4 | **2026-09-20**（3.0.6 → 4.0.2） | **ブロッカーの peer が動いていた** ── `storybook-react-i18next` の `i18next-http-backend` peer が `^2 || ^3` から `^2 || ^3 || ^4` へ（lock の 10.1.4）。v4 の破壊的変更は **Node 18+ と native `fetch` の要求**（`cross-fetch` を落とした）だけで、この repo は `engines.node >=22`・使用先は Storybook（ブラウザ）なので当たらない。**確かめたこと**: `npm ls` で `storybook-react-i18next@10.1.4` が 4.0.2 を deduped で受けること、`npm run build-storybook` が通ること（`.storybook/i18n.ts` が `Backend` を import している実体）、CI の VRT / a11y。使い方は `.use(Backend)` + `backend.loadPath` だけで、v4 で変わった面に触れていない。 |
| `vitest` + `@vitest/*` 5 | **2026-10-07**（4.1.11 → 5.0.3。`@storybook/addon-vitest` は 10.6.1 のまま） | **ブロッカーの peer が動いていた** ── `@storybook/addon-vitest@10.6.1` の `vitest` / `@vitest/browser` が `^3.0.0 \|\| ^4.0.0 \|\| ^5.0.0` に、`@vitest/browser-playwright` が `^4.0.0 \|\| ^5.0.0` になった。**確かめたこと**: ①CI と同じコマンド（`npx vitest run --coverage --config vite.config.ts --reporter=verbose`）で 269 ファイル・3598 件が通る（main の vitest 4 のランと同じ件数。カバレッジは 91.67 / 86.04 / 91.22 / 93.74 で、main は 91.66 / 86.03 / 91.22 / 93.74）②`check:aschild`（vitest を直接呼ぶ検査）③`tsc` / `lint` / `build` / `size` / `check:api` ④Storybook のビルドと、それを使う VRT / a11y / E2E は、PR の CI で見た（手元の Windows では、`oxc-resolver` のネイティブのファイルが OS のアプリ制御に止められて、Storybook をビルドできなかった。main と同じ版で、vitest とは関係が無い）。**直したこと**: vitest 5 は `Assertion` が `jest.Matchers` を継がなくなり、jest-dom のマッチャーの型が 2805 か所で落ちた（実行は通る。落ちるのは型チェックだけ）。`vitest-jest-dom.d.ts` で、vitest 5 が広げる場所にした `Matchers<R, T>` に乗せた。`@testing-library/jest-dom`（7.0.1）が vitest 5 に追随したら、このファイルは消せる。 |

> **`vitest` 系は「手で上げようとして時間を溶かす」型。** 2026-08-22 に 3 通り試して全部だめだった:
>
> | やり方 | 結果 |
> |---|---|
> | 4 つまとめて `npm install` | **ERESOLVE**（`vitest@4.1.10` の peerOptional が `@vitest/browser-playwright@"4.1.10"` を厳密ピン） |
> | `vitest` だけ 1 本で（storybook で効いた順番） | **5 分応答なし**（再現性あり） |
> | `npm install --package-lock-only` | **ERESOLVE** |
>
> 残る道はロック全体の作り直し（`rm -rf node_modules package-lock.json`）だが、**patch 1 つのために全依存の解決をやり直す**ことになり、レビューできない差分が出る。
> **Dependabot は自前の解決器でロックを作り直すので、グループ PR に任せる。**
> **2026-10-07 に効いた 4 つ目のやり方（major を手で上げるとき）**: `package.json` の 4 つを書き換えたあと、**lock の `packages` から `node_modules/vitest` と `node_modules/@vitest/*` の項目だけを消し**、`node_modules` の同じフォルダも消してから `npx npm@10 install`。輪になっているのは lock に残った厳密ピンなので、輪の中だけを外せば解決し直せる。版が動いたのは 28 項目（vitest 系と、その依存の入れ替わり）で、Storybook が持つ `@vitest/expect@3.2.4` は同じ版のまま入り直した。`npm ci --dry-run` は npm 10 と 11 の両方で通した。
> なお **storybook で効いた「ピンの根元から 1 本ずつ」は、ここでは効かない** ── あちらは一方向の peer（addon → storybook）だったが、こちらは**相互に厳密ピンした輪**である。
>
> **（2026-09-20 に解除済み。以下は「なぜ組でしか上げられないか」の記録で、`check:release-workflow` が見張っている内容そのもの。）** **`@changesets/cli` 3 は「上げると赤が出ずにリリースが壊れる」型だった。** `changesets/action@v1` は publish の標準出力を正規表現で読んで publish 済みを判定している（`src/run.ts`: `let newTagRegex = /New tag:/`）。cli 3.0.0 の dist にはこの文字列が無く、代わりに `Creating git tags...` を出す。したがって **npm publish は成功したまま `published: false` と判定され、`git.pushTag` と GitHub Release の作成が丸ごとスキップされる**。ワークフローは緑で終わる。実際この 2 つは動いており（`v0.23.16` の Release と タグが存在する）、止まっても誰も気付かない。
>
> action v2 は NDJSON の構造化イベント（`type: "git-tag"`）で判定するため **cli 3 とセットでしか動かない**（v2 は cli 2 を検出して v1 へ誘導する）。片方だけ上げる道は無い。
>
> **2026-08-16: 据え置きで確定（→ 2026-09-20 に解除）。判定は `check:release-workflow` が持つ。** 「いつ上げるか」を期日で決めるのはやめた ── 外から強制する時計が無いため（action v1 / v2 とも runtime は `node24`）。代わりに **CLI と action の組**（v1 ⇔ cli 2 / v2 ⇔ cli 3）をガードの契約にした。片方だけ動かした変更は CI で止まるので、**この行を毎週見る必要は無い**。
>
> **上げる日を選ぶときの条件**: この変更の本丸（publish 経路のタグと GitHub Release）は**本番でしか検証できない**。だから「リリース予定が無い日」に上げない。手順は ①CLI + action + `release.yml` の入力名を 1 PR で ②直後に捨て changeset で patch を 1 本切る ③タグと Release が実際に作られたか確認 ④作られなければ即 revert。
>
> **鏡側も塞いだ（2026-08-16）。** npm 側の ignore を入れた直後、Dependabot が **github-actions 側から `changesets/action` v1 → v2 を出してきた**（#433。設定変更の push が即時チェックを走らせるため）。**エコシステムが 2 つある依存は、片方を塞いでも反対側から同じ結合が来る。** こちら向きは cli 2 を検出して落ちる＝赤が出るぶん silent ではないが、いずれにせよ単独では動かないので `github-actions` セクションにも major の ignore を足した。

> **`typescript` 7 の判定材料を差し替えた（2026-08-16）。** それまでの根拠は「#14 が CI 全滅」という**再現に CI 1 周が要り、何が直れば解けるのかを示さない**観測だった。いまは `typescript-eslint` の peer 上限 1 つで判定できる。**古い根拠を残すと、次に見る人が同じ 1 周を回す。**
>
> **`eslint` 10 は「宣言だけの壁」ではなかった（2026-10-09 に実測）。** 別の作業ツリーで `eslint@10.12.0` と `@eslint/js@10.0.1` を入れ、`overrides` で 2 つのプラグインの peer を外して（`npm ls eslint` で 10.12.0 が 1 つだけ入ったことを確認）、`eslint src stories --max-warnings=0` を流した。対照は main の 9.39.5（1091 ファイル・エラー 0・警告 0）。
>
> | やったこと | 結果 |
> |---|---|
> | 今の設定のまま | **1 ファイル目で例外**（`react/display-name` の読み込みで `contextOrFilename.getFilename is not a function`）。`settings.react.version: "detect"` が通る `eslint-plugin-react/lib/util/version.js` が、ESLint 10 で消えた `context.getFilename()` を呼ぶ |
> | React の版を設定に直に書く（`"19.3.0"`） | 最後まで走る。1091 ファイルで、エラーは `no-useless-assignment` の 2 件だけ（`Terminal.tsx` 90 行目・`Toolbar.tsx` 168 行目。ESLint 10 の `recommended` に入った規則で、プラグインとは関係が無い） |
> | 3 つのプラグイン（react / jsx-a11y / react-hooks）の、非推奨でない規則を全部 `warn` にして、9 と 10 の報告を比べる | `eslint-plugin-react` の **6 規則が ESLint 10 で例外**（`forward-ref-uses-ref` / `jsx-filename-extension` / `jsx-equals-spacing` / `jsx-tag-spacing` / `jsx-curly-spacing` / `jsx-one-expression-per-line`。消えた `getSourceCode` / `getFilename` / `isSpaceBetweenTokens` を呼ぶ）。**6 つとも `recommended` には入っていない**（この repo は使っていない）。6 つを外すと、報告は 9 が 51,234 件・10 が 51,236 件で、差は上の `no-useless-assignment` の 2 件。プラグイン別の件数は同じ（react 43 規則・50,760 件 / jsx-a11y 5 規則・179 件 / react-hooks 3 規則・330 件）。`react-hooks` の 34 件は文言に作業ツリーの絶対パスが入るので突き合わせからは外れたが、規則ごとの件数は両方で同じ |
>
> **確かめていないこと**: どちらの版でも 1 件も報告しなかった規則（jsx-a11y で報告を出したのは 5 規則だけ）は、例外を投げなかったことしか見ていない ── 違反を見つけられるかは測っていない。lint-staged の経路（`--fix --cache`）と、CI の Lint ジョブも通していない。
>
> **判断: 上げない（保留のまま）。** 上げるには、`overrides` 2 つ・React の版の直書き（`detect` をやめる）・2 件の修正が要り、プラグインの作者が動作を保証していない組み合わせに乗る。得るものは、今のところ無い（ESLint 9 は npm の `maintenance` タグに残っている。2026-10-09 時点で 9.39.5）。**見直す条件**: ①`eslint-plugin-react` の peer が `^10` を含んだ ②ESLint 9 に修正が出なくなり、直したい欠陥が 10 にしか無い ── ②のときは、上の 3 点で上げられる。試した作業ツリーは残していない。

**版番号だけを見ると判定を誤る。** 2026-08-07 に `@storybook/addon-mcp` を再確認したとき、`latest` は 0.7.0 のままだったが `10.6.0-alpha.4` が出ていた ── これは Storybook 10.x に揃える**改番**であって、Dependabot には **major の PR として来る**。中身を見ると getter は閉じたままだった。**見るべきは版番号ではなく、止めている理由がまだ成立するか。**

```bash
npm view @storybook/addon-mcp version
npm pack @storybook/addon-mcp@<新しい版> && tar -xzf *.tgz
grep -n "buildServerInstructions" package/dist/preset.js
```

---

## 隔週

### 3. `IMPROVEMENTS.md` の行と、実装の実物を突き合わせる

`check:improvements` が見ているのは**状態列と本文の整合**だけで、**行と実装がずれていても緑**になる。

やること: 未完了の行を上から順に、**その行が主張している欠陥がいま実在するか**をコードで確かめる。

```bash
node -e '
const fs=require("fs"); const L=fs.readFileSync("IMPROVEMENTS.md","utf8").split("\n");
let hdr=null;
for (const l of L) {
  if (/^\|\s*#\s*\|/.test(l)) { hdr=l.split("|").slice(1,-1).map(s=>s.trim()); continue; }
  const m=l.match(/^\| (T\d+) \| /); if (!m || !hdr) continue;
  const i=hdr.findIndex(c=>/優先|状態/.test(c));
  const st=(l.split("|")[i+1]||"").trim();
  if (!/\*\*済/.test(st)) console.log(m[1].padEnd(6)+st.slice(0,30));
}'
```

**squash マージのため `git merge-base --is-ancestor` は使えない**（ブランチのコミットは main の祖先にならないので、常に「入っていない」と出る）。**ファイルの中身を読むこと。**

### 4. ガードの到達性を数える

「あるガード」と「走っているガード」は別に数える。3 つの型がある:

1. **どこからも呼ばれない** ── `audit-all.js` の `category` 漏れなど
2. **lint-staged だけ** ── 見るのは**ステージされたファイルだけ**なので、全量では違反が残っていても通る（`check:slop` のラチェットが実際にこれで素通りしていた）
3. **失敗できない** ── `process.exit` を持たず、何を見つけても exit 0

```bash
node -e '
const fs=require("fs");
const pkg=JSON.parse(fs.readFileSync("package.json","utf8"));
const auditAll=fs.readFileSync("scripts/audit-all.js","utf8");
const wf=fs.readdirSync(".github/workflows").map(f=>fs.readFileSync(".github/workflows/"+f,"utf8")).join("\n");
const ls=JSON.stringify(pkg["lint-staged"]||{});
for (const n of Object.keys(pkg.scripts).filter(k=>/^(check|audit)/.test(k))) {
  const file=(pkg.scripts[n].match(/scripts\/[\w.-]+/)||[])[0]; if(!file) continue;
  const ci=auditAll.includes(file)||wf.includes("npm run "+n)||wf.includes(file);
  const src=fs.existsSync(file)?fs.readFileSync(file,"utf8"):"";
  // 「1 で落ちる」を文字列で探すと取りこぼす（`process.exit(n > 0 ? 1 : 0)` は
  // その形をしていない）。**落ちる仕組みを 1 つも持たないか**だけを見る。
  const canFail=/process\.exit\(|exitCode/.test(src);
  if (!ci) console.log((ls.includes(file)?"lint-staged だけ":"どこからも呼ばれない").padEnd(20)+n);
  else if (!canFail) console.log("失敗できない".padEnd(20)+n);
}'
```

**2026-09-29 時点の実測**: CI で走る **81 件** ／ lint-staged だけ **0 件** ／ 失敗できない **0 件** ／ どこからも呼ばれない **1 件**（同じ `check:skills-mirror`。架空の `check:zzz-fake` を足すと「どこからも呼ばれない」に出ることを確かめてから数えた）。

**旧: 2026-09-20 時点の実測**: CI で走る **74 件** ／ lint-staged だけ **0 件** ／ 失敗できない **0 件** ／ どこからも呼ばれない **1 件**。

> **その 1 件（`check:skills-mirror`）は意図的な例外。** `.claude/` は `.gitignore` に入っており、
> ミラーはクリーンチェックアウトには存在しない（`npm install` の `prepare` が張る）。
> CI で `--check` を走らせても、比べる相手が毎回その場で作られるだけなので意味が無い。
> **このガードはローカル環境の整合を見るもの**なので、次に数えたときもここは 1 件のままでよい。
> 実証は `npm run prove:skills`。

> 数え方の自己検証もした: `scripts/check-zzz-fake.js` を置くと**ちゃんと「どこからも呼ばれない」に出る**
> （置かずに「0 件」を見ても、走査が壊れているのか本当に 0 なのか区別できない）。

**2026-08-16 時点の実測**: CI で走る **59 件** ／ lint-staged だけ **0 件** ／ どこからも呼ばれない **0 件**。

`check:consistency` を塞いだ（**8 日間放置していた最後の 1 件**）。`--lib`（台帳 ↔ 実装）と `--docs`（実装 ↔ ストーリー / MDX）に分けて `audit-all.js` の両カテゴリへ登録し、欠落 1 件でも `process.exit(1)` するようにした。**lint-staged には入れていない** ── 台帳と全実装を突き合わせる種類のガードは、ステージされたファイルだけを見ると常に素通りする（`check:slop` のラチェットで実際に起きた型 2）。

> 完成の判定は「4 セクションすべてに故意の違反を入れて落ちること」で行った: 台帳にあるのに実装が無い（`ZzzGhost`）／実装があるのに台帳に無い・ストーリーが無い・MDX が無い（`ZzzProbe`）。**同時に「鳴ってはいけない経路で鳴らないこと」も確認した** ── `ZzzGhost` は `--docs` を落とさず（docs 側は実装のある部品しか見ない）、ストーリー欠落は `--lib` を落とさない。

**旧: 2026-08-08 時点**: CI で走る 43 件 ／ lint-staged だけ 3 件（`check:casing` / `check:links` / `check:intent-text` ── いずれも全量で走らせても緑）／ どこからも呼ばれない 1 件（`check:consistency`。しかも `process.exit` を 1 つも持たず、**何を見つけても exit 0** で終わる）。

> このスニペット自体を一度間違えた。「1 で落ちる」を文字列で探していたため、`process.exit(results.length > 0 ? 1 : 0)` で落ちる `audit:stories-i18n` を「失敗できない」と誤報した。**検出器を書いたら、既知の正解で 1 度は突き合わせること。**

### 5. docs・JSDoc と実装の乖離

`check:doc-drift` は CI で走るが、見ているのは**prop 名の対応**であって**説明文の主張**ではない。

やること: 直近に変更したコンポーネントの JSDoc を読み、**他のコンポーネントを名指ししている記述**を疑う。名指しは相手が変わった瞬間に嘘になる。

> 実例: `LoadingOverlay` の `fixed` は「`Card` does not set one」と書いていたが、`Card` に `position` を足した時点で**説明のほうが誤りになった**（T88）。ガードは 1 つも鳴らない。

```bash
npm run check:doc-drift
grep -rn "does not\|has no\|は持たない\|を持っていない" src/components/**/*.tsx | grep -i "card\|button\|input\|dialog"
```

**a11y の記述は、道具で候補を出してから読む。** docs の a11y 節が名指しする ARIA 属性と role を、その部品の実装と突き合わせる:

```bash
npm run measure:doc-aria-claims
```

出るのは「実装のソースに同じ文字列が無い主張」の一覧で、**ガードではない**（落とさない）。docs の文には、実装についての主張（「`aria-current` で現在地を示す」）と、利用者への助言（「`aria-label` を付けること」）が混ざっていて、機械では分けられない。読んで、実装についての主張だけを拾う。外れたら、**docs と実装のどちらが正しいかを先に決める** ── docs が正しければ実装を足し、実装が正しければ docs を直す。

> **2026-10-10 の実測**: 127 部品・357 件のうち、文字列で見つからないものが 41 件。読むと本物は 5 件だった（残りは助言・複数形の `aria-labels`・どの MDX からも参照されていないキー）。`Anchor`（`aria-current`）と `Kanban`（`list` / `listitem`）は docs が正しく、実装を足した（#913）。`VirtualList`（実装は `aria-setsize` / `aria-posinset`）・`ThoughtProcess`（`role="region"` は無い）・`PromptInput`（`aria-multiline` は無い）と、`Kanban` の `aria-disabled` は docs を直した。直したあとの候補は 34 件で、どれも読み終えたもの ── **次に数えて 34 から増えていたら、増えた分を読む**。
>
> **届かないもの**: キー操作の記述（「矢印キーで移動」）と実際の挙動（7-4 の E2E の領分）、ja / pt にしか無い主張（en だけを読む）、外部ライブラリが付ける属性（一覧の `ext=[…]` を見て、ライブラリ側を読む）。

**コード例は、2026-10-10 からガードが見る**（`check:examples` が MDX のコードフェンスもコンパイルする）。ここで手で見る必要は無い。ガードが見ないのは、部品もフックも出てこない断片（型だけの例など）と、`code-example: skip` を付けた例 ── 件数は実行のたびに出る。

### 6. VRT / a11y に写っていない variant・状態を洗う

写っていないものは、**変えても壊しても赤が出ない**。

```bash
# variant / intent の値ごとに、ストーリーで使われている回数を数える
for v in solid outline subtle; do printf "%-10s %s\n" "$v" "$(grep -rho "variant=\"$v\"" stories/ sandbox/ | wc -l)"; done
```

> 実例: `Chip` の `subtle` は 3 つの variant のうちここだけ**どのストーリーにも出ていなかった**（2026-08-07 に追加）。`LoadingOverlay` は 8 ストーリーすべてが `position: relative` の親で包んでおり、**素直に書いたときの姿を一度も撮っていなかった**。

### 7. まだ合成画面で使っていないコンポーネントを数える

**2026-08-15 以降**: この走査はカタログのカバー率には使わない（T179）。残件の台帳（T180）は 0 件で尽きたので `docs/history/improvements-archive.md` へ退避した（2026-09-21）。**数え直して Pattern ページを書かないこと。** 下のスニペットと時点記録は履歴。

合成による探索（T32）は**いちばん打率の高い欠陥の見つけ方**で、5 枚目は 7 件出して 7 件とも実在した。次にどこを作るかは、**印象ではなく残りの数**で決める。

```bash
node - <<'EOF'
import fs from "node:fs"; import path from "node:path";
const walk=(d,a=[])=>{for(const f of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,f.name);
  if(f.isDirectory())walk(p,a); else if(/\.(tsx|mdx)$/.test(f.name))a.push(p);} return a;};
const src=[...walk("stories/Patterns"),...walk("sandbox")].map(f=>fs.readFileSync(f,"utf8")).join("\n");
// `<` を許すのはジェネリクス付き JSX（`<DataGrid<Row> …>`）のため
const count=(n)=>(src.match(new RegExp("<"+n.replace(/\./g,"\\.")+"[\\s/><]","g"))||[]).length;
// **自己検証を先に通す。** 走査が壊れていれば全部「未合成」に見えてしまう
if (count("Button")===0 || count("DataGrid")===0) { console.error("走査が成立していない"); process.exit(1); }
const idx=JSON.parse(fs.readFileSync("src/data/docgen_index.json","utf8"));
const INTERNAL=/(Inner|Internal|Wrapper|^Default|^parse)/;
const un=Object.entries(idx).filter(([n,c])=>c!=="_internal"&&!n.includes(".")&&!INTERNAL.test(n)&&count(n)===0);
const by={}; un.forEach(([n,c])=>(by[c] ??= []).push(n));
for (const c of Object.keys(by).sort()) console.log(`[${c}] ${by[c].length}\n  ${by[c].sort().join(", ")}`);
console.log("\n未合成 " + un.length + " 件");
EOF
```

**自己検証を先に置くこと。** この走査は 2 回間違えた ── 1 回目は `Button` まで未合成と出し（使用済み 44 件という数字がおかしくて気付いた）、2 回目は `DataGrid` を 0 件と誤報した（**ジェネリクス付き JSX** は名前の直後が `<`）。**走査が壊れると「全部未合成」に見えるので、緑ではなく数字の大きさで気付くしかない。**

**この自己検証は 3 回目も鳴った（2026-08-09）。** 上のスニペットを**ヒアドキュメントでファイルに書き出して**実行したところ、`\\s` が `s` に潰れて正規表現が `<Button[s/><]` になり、`Button` も `DataGrid` も 0 件になった。自己検証がなければ「371 件すべて未合成」という結果を信じるところだった。**スニペットはヒアドキュメント経由で書き出さず、そのまま `node - <<'EOF'` で流すか、エディタで直接ファイルに書くこと。**

**2026-08-08 時点**: 362 件中 使用済み 136 / 未合成 226（合成に使える単位では 158）。`AppShell` / `Navbar` / `Footer` が未合成＝**既存 5 枚はどれも「画面の中身」だけを作っていた**。

**2026-08-09 時点**: **371 件中 未合成 144**（6 枚目 `Patterns/Captions/CaptionReview` が `AppShell` / `Navbar` / `Footer` とオーバーレイ層を埋めた）。カテゴリ別の残りは form 28 / data-display 28 / overlay 15 / ai 14 / layout 13 / charts 12 / navigation 10 / media 8 / feedback 11 / typography 5。次の 3 枚は `docs/history/improvements-ledger.md` の T95（7 枚目）/ T109（8 枚目）/ T110（9 枚目）。

**2026-08-11（9 枚目のあと）**: **372 件中 未合成 107**（`Patterns/Roastery` が charts を 13 → 2 に）。カテゴリ別は data-display 24 / overlay 15 / ai 14 / layout 12 / feedback 11 / navigation 10 / media 8 / form 6 / typography 5 / charts 2。**charts の残り 2 件は `PieChart`（`Treemap` と仕事が重なるので置かない）と `CustomizedContent`（`Treemap` の内側の描画部品）** ── どちらも「使えない」ではなく「JSX タグとして書かない」もの。次に未踏なのは overlay 15 / ai 14 / feedback 11。

**旧: 2026-08-11（8 枚目のあと）**: **372 件中 未合成 117**（`Patterns/Hiring` が form の重い入力を埋めた）。カテゴリ別は data-display 24 / overlay 15 / ai 14 / layout 13 / charts 12 / feedback 11 / navigation 10 / media 8 / form 5 / typography 5。**form の 5 件は「使えない」ではなく「JSX タグとして書かない」もの** ── `Radio` / `ToolbarButton` / `TransferList` は `RadioGroup` / `RichTextEditor` / `Transfer` の内側で描かれ、`InputBase` は入力の殻、`FloatButton` は置く画面が無かった。**この走査はタグ名を数えるので、内側で描かれる部品は永久に「未合成」に出る。** 次は T110（9 枚目・charts）。

**旧: 2026-08-09 夜（7 枚目のあと）**: **371 件中 未合成 139**（ が Kanban / TreeView / SortableList / Transfer / VirtualList を埋めた）。カテゴリ別は form 27 / data-display 24 / overlay 15 / ai 14 / layout 13 / charts 12 / navigation 10 / feedback 11 / media 8 / typography 5。次は T109（8 枚目・form 重量級）/ T110（9 枚目・charts）。

### 7-2. 合成画面を**狭い幅で**開く（390px / 768px）

CI は 1280px でしか撮っていない。**狭幅の崩れは赤が出ない。**

```bash
npm run build-storybook
npx http-server@14 storybook-static -p 6007 -c-1 --silent &
node - <<'EOF'
import { chromium } from "playwright";
const ids = process.argv.slice(2).length ? process.argv.slice(2)
  : ["patterns-captions--caption-review"]; // 対象のストーリー ID を渡す
const browser = await chromium.launch();
for (const id of ids) for (const width of [390, 768]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(`http://localhost:6007/iframe.html?id=${id}&viewMode=story`, { waitUntil: "load" });
  await page.waitForSelector("#storybook-root > *"); await page.waitForTimeout(800);
  console.log(id, width, JSON.stringify(await page.evaluate(() => {
    const de = document.documentElement;
    // ①ページ自体が横スクロールしない ②ビューポートより右に出ている要素が無い
    const over = [...document.querySelectorAll("*")].filter(e => {
      const b = e.getBoundingClientRect(); return b.width > 0 && b.right > de.clientWidth + 1;
    }).slice(0, 4).map(e => e.tagName + "." + (e.className || "").toString().split(" ")[0]);
    // ③クロームが自分の高さに収まっている（ヘッダから縦にはみ出していないか）
    const hdr = document.querySelector("header"); const hr = hdr?.getBoundingClientRect();
    const tall = hr ? [...hdr.querySelectorAll("*")].some(e => {
      const b = e.getBoundingClientRect(); return b.height > 0 && (b.top < hr.top - 0.5 || b.bottom > hr.bottom + 0.5);
    }) : null;
    return { pageScrolls: de.scrollWidth > de.clientWidth, overflowing: over, chromeOverflowsHeader: tall };
  })));
  await page.close();
}
await browser.close();
EOF
```

**3 つとも false / 空でなければ不合格。ただし ② は「祖先が `overflow: hidden` で切っているか」を見ないと嘘をつく。**

> **② の直し方を間違えると、判定が丸ごと死ぬ（2026-08-16 に実測）。** 「祖先を遡って `overflow` が `visible` 以外なら切られている」と実装したところ、**`body` が `overflow` を持つだけで全部が握りつぶされ、常に空**になった。走査は 116 通りを回して「0 件」と報告したが、**実際には ② が一度も動いていなかった**。
>
> **正しい形は「① が鳴ったときだけ ② を犯人の名前として使う」**: ページが横に伸びていない（`scrollWidth <= clientWidth`）なら、右にはみ出した要素は誰かが切っている＝見えないので報告する意味が無い。逆にページが伸びているなら、右に出ている要素をそのまま並べれば犯人が分かる。
>
> ```js
> pageScrolls: de.scrollWidth > de.clientWidth,
> culprits: de.scrollWidth > de.clientWidth ? wide : [],   // ← ① に従属させる
> ```
>
> **③ は `header` が無い画面では `null` を返す**（判定不能）。`hasHeader` も一緒に返して、「鳴らなかった」と「見ていない」を分けること。実際 `patterns-alpinedesk--` は 4 ストーリー中 1 つしか `header` を持たない。
>
> **走査を書いたら、故意に壊して 3 判定とも鳴らしてから回すこと。** ①は 3000px の要素を足す、②は①と同時、③は `header` の中に `position: absolute; top: -40px` を置く。無傷で鳴らないことも同時に見る。
>
> **2026-08-16 の実測**: `patterns-*` 58 ストーリー × 390 / 768 = **116 通りで 0 件**（3 判定の実証つき）。「はみ出しは無い」までしか言えない ── 下の「潰れ」は別。
>
> **2026-09-29 の実測**: 同じ 116 通りで **0 件**。今回は「潰れ」も数えた（直下に 4 文字以上のテキストを持ち、幅が 2em 未満で高さが 3em を超える要素）。**4 判定とも、注入した 1 通りで鳴ることを先に確かめた**。ただし **102 通りは `header` を持たず、③は判定不能**（「鳴らなかった」ではなく「見ていない」）。

> **この 3 つは「はみ出し」しか見ていない。「潰れ」は緑で通る。**（2026-08-11・9 枚目）
> `Dashboard` が狭い幅で列を減らすのに span を畳まず、grid が
> `0px 186.188px 151.812px` に壊れて**幅 30px のカードに 1 文字ずつ縦に折れて**いたが、
> ページは横スクロールせず、要素も画面外に出ていないので**走査は 3 つとも false**だった。
> ユーザーが画面を見て気付いた。**幅が極端に狭い要素（例: 文字が 1 文字ずつ折れる）**も
> 数えること ── 目安は「テキストを持つ要素の幅が 2em 未満」。

> 実例（2026-08-11、8 枚目）: `ImageCropper` は**自然サイズのままの画像をドラッグで動かす**部品なので、
> 画像は常に viewer（`overflow: hidden`）より大きい。素の走査は 390px で `IMG(+317px)` を挙げるが、
> **切られている＝ページは横に伸びず、残りはドラッグで到達できる**ので不合格ではない。
> 判定に「祖先に `overflow-x !== visible` があり、その祖先自身は画面内に収まっている」なら除く、を足すこと。
> これを入れないと、パン・ズーム・仮想化のように**わざと大きい中身を持つ部品が毎回 false positive になる**。 表を含む画面では `Table` / `DataGrid` に **`mobileCard` が付いているか**も見る（`Table` にもある。付けないと 390px で列が潰れ、最終列が画面外へ出る）。カードのラベルは `Table.Cell` の `label` から出るので、**`mobileCard` だけ付けて `label` を書かないと値だけが並ぶ**。

> 実例（2026-08-08、6 枚目）: 390px で①は false（ページは横に伸びない）なのに、②で表が 456px まで出ていた（`mobileCard` 未指定）。③では `Menubar` が 2 行に折れて **64px のヘッダから 6px はみ出していた**。**どれも 1280px の VRT と a11y は全緑**だった。

### 7-3. 不要になったブランチを消す

マージ済み・放棄済みのブランチが残ると、`git branch -a` が長くなるだけでなく、**古い head に対して CI が回り続ける**。

**このリポジトリは squash merge なので、`git branch --merged` も `git log origin/main..<branch>` も使えない。**
squash 後のブランチ先端は main のどのコミットとも一致せず、**マージ済みのブランチが全部「未マージ・コミット 1 件あり」に見える**（2026-08-08 に実測: `--merged` は 0 件、差分ありは 39 件＝全部）。判定は **PR の状態**で行う。

```bash
git fetch --prune origin
gh pr list --state merged --limit 200 --json headRefName -q '.[].headRefName' | sort -u > /tmp/merged.txt
gh pr list --state open   --limit 100 --json headRefName -q '.[].headRefName' | sort -u > /tmp/open.txt
for b in $(git branch -r | grep -v HEAD | grep -vE "origin/(main|gh-pages)$" | sed 's|  origin/||'); do
  if grep -qx "$b" /tmp/open.txt; then continue; fi                      # 開いている PR は残す
  if grep -qx "$b" /tmp/merged.txt; then echo "DELETABLE $b"; else echo "REVIEW    $b"; fi
done
git branch -vv | grep ": gone]"   # 追跡先が消えたローカルブランチ
```

- `DELETABLE` … PR がマージ済み。`git push origin --delete <branch>` の候補
- `REVIEW` … PR が無い／閉じただけ。**途中で止めた作業の可能性がある**ので中身を見る
- `changeset-release/main` と `gh-pages` は**自動生成なので消さない**

**削除はユーザー判断**（一覧を出して提案するところまで）。PR 作成時に `--delete-branch` を付けておけば、そもそも溜まらない。

### 7-4. 観点を 1 つ決めて、全部品を同じ手順で測る（デザインと操作の一貫性）

**「改善できそうなところがないか」とは問わない。** 開いた問いには毎回なにかしら答えが出て、直すべきものと好みの差が混ざる。2026-10-04 の 1 日で見つかった欠陥は、どれも**観点を 1 つに絞って、同じ役割の部品を同じ手順で測った**ときに出た:

| 観点 | 測り方 | 出たもの |
|---|---|---|
| 開いた姿が自動検査に写っているか | 開く引き金を持つ部品に `Open` ストーリーを足し、a11y スペックで測る | 名前の無い `dialog`・壊れた参照・背後の `aria-hidden`（20 部品のうち 7 部品。#816 / #826） |
| 開いたリストで Tab を押したあと | 番兵のボタンを足して Tab を押し、フォーカスの行き先と、リストが残るかを数える | ModelSelector がフォーカスを失う（#825）／ Select と TreeSelect だけ開いたまま（T299 / T300） |
| モーダルの面からフォーカスが出ないか | Tab / Shift+Tab を 40 回ずつ押す | TreeSelect だけ外へ出る（`FocusTrap` の端の数え方。#831） |
| 既定の文言が表示言語に従うか | 直書きのラチェットと、検査が拾わない 1 語のラベルを数える | 演算子 27 行・国名 10・Carousel 4 が英語で固定（#832） |

**手順**

1. 下の候補を**全部**測る（2026-10-10 から。それまでは 1 回に 1 つだった ── 候補が 8 件溜まると 16 週かかり、その間に件数も該当する部品も古くなる。絞るのは直すほうで、測るほうではない）。候補が無い回は、測らずに次へ進む。外部の AI のデザイン診断の指摘を、観点の候補として使ってよい ── ただし指摘をそのまま直さず、ここで測って確かめてから起票する
2. **同じ役割の部品を全部**、同じ手順で測る。結果は数字で残す（測った数・外れた数・測れなかった数）。「0 件」のときは、外れると分かっている対照を 1 つ流して、測り方が鳴ることを確かめる
3. 外れを、下の「外れの扱い」で仕分ける。`DESIGN.md` の「揃えていない差（意図したもの）」に載っている差は、指摘から外す
4. **見た目の良し悪しは判定しない。** 測れるのは「在る・無い」「同じ・違う」「届く・届かない」まで。並べて見て決めるのは四半期の 14
5. 下の表に 1 行足す

**外れの扱い**（2026-10-04・ユーザー判断。記録と管理のコストまで入れて決めた）

測るのは安く（スクリプト 1 本・数分）、直すのが高い（PR ごとに CI 10〜15 分・マージ・公開の承認）。外れが出るたびに PR を出すと、同じ部品を何度も開くことになる ── 2026-10-04 は PhoneInput を 6 本、ModelSelector を 4 本の PR で触った。

| 扱い | 当てはまるもの | やること |
|---|---|---|
| **すぐ直す** | 操作が壊れている（フォーカスや入力を失う・操作を完了できない）。公開済みの版で起きている | その部品の PR を 1 本出す |
| **同乗させる** | すぐ直す PR で触る部品の、ほかの外れ。判断が要らず、小さいもの | 同じ PR で直す（T301 の PR に T303 を足した）。別に残すと、その部品だけのために PR をもう 1 本出すことになる |
| **起票して後でまとめる** | 判断が要るもの・大きいもの・同乗先が無いもの | 起票だけして、観点を一巡してから、部品（または共通の原因）ごとに束ねて直す |

- **起票の単位は「直す単位」にする。** 外れ 1 件ごとではなく、部品（または共通の原因）の束で 1 行。行が減り、済にする回数も減る
- **原因が共有の部品にあるものは、部品ごとではなく原因で束ねる**（TreeSelect の閉じ込めの件は、原因が `FocusTrap` と `TreeView` にあった。#831）
- **一巡の範囲は、測り始める時点で候補の一覧にあるものまで。** あとから思いついた観点は次の回へ回す（「全部の観点が終わったら直す」の終わりを動かさない）
- **番兵のボタンは 2 つ置く**（引き金の直後と、文書の末尾）。末尾だけだと、ポータルの中から Tab で文書の末尾へ飛んだのを「次へ進んだ」と読み違える（T301 の Tab がそうだった）

**観点の候補**（測り終えたら消し、思いついたら足す。2026-10-04 に 13 観点、2026-10-05 に 4 観点を測ったので、下は次の回の分）

- **題が言う結果を見ていないテスト**（変更のときに気づいた・2026-10-11・CI-17）。`Cascader.test.tsx` の「navigates to first item with Home key」「navigates to last item with End key」「ArrowUp does not go below index 0」は、どれも「開いたままである」ことしか見ていない ── Home や End が何もしなくても通る。**数え方**: 題に `navigates` / `moves` / `focuses` / `selects` などの動詞を持つ `it` のうち、期待が「開いている」「在る」だけのもの（動いた先 ── フォーカス・`aria-activedescendant`・選択の値 ── を見ていないもの）。件数は未計測。「無いこと」だけを見る形（CI-17）とは別の弱さで、あちらの数え方では拾えない
- **2026-10-10 の一巡の測り残し**: ①渡した属性の行き先は、入力系（`wimui/form` の 36 部品）と、スプレッドのあとに固定の属性を書く 19 か所だけを測った。ほかのカテゴリの部品に `aria-label` / `aria-describedby` を渡したとき、操作要素に届くかは測っていない ②`Mentions` は、測る側の渡し方が合わずに例外になった ③`ScrollProgress` は、スクロールせずに中身の高さだけが変わったときの値を、ブラウザでは測っていない（コードを読んだだけ）
- 省略記号なしで切れる文字のうち、2026-10-08 に測っていないもの ── 閉じている面の中（`Open` のストーリーが無い部品のメニューやリスト）、dark と compact、pt。文字の無い 123 ストーリー（図・キャンバス・アイコンだけのもの）は対象外
- 開いた面の枠と影のうち、2026-10-05 に測れなかった 5 部品（Dialog・Lightbox は画面いっぱいの入れ物を面として拾った。Tour・HoverCard・HamburgerMenu は役割から面を見つけられなかった）。面を部品ごとに名指しして測る
- 項目を選んで閉じたあとのフォーカスの行き先のうち、引き金に `aria-haspopup` / `aria-expanded` / `role="combobox"` が無くて測れなかった部品（TimePicker・ColorInput・Tour。ContextMenu と CommandPalette は既存の E2E がある）
- **選択中の要素**のホバー（2026-10-05 は選択中でない要素だけを測った。開いている Accordion の見出しと Anchor の現在地は、ホバーで変わらなかった）。押下の側は 2026-10-06 に測り終えた（覆われていた要素は、状態を強制して測れる。下の表）
- 実機のスクリーンリーダーで、開く部品の読み上げ（ModelSelector と PhoneInput は 2026-10-04 にナレーターで確認済み。ほかの選択系・メニュー系は未確認。**人の手が要る**）

**測り終えた観点の分け先**（2026-10-10・ユーザーとの相談で決めた）。観点は、基本的に 1 回きりの掃除である。直したあとに同じ手順を隔週で流し直しても、ほぼ毎回 0 件になる。**毎回流す価値があるものは、人ではなく CI に流させる。** 測り終えたら、次の 3 つのどれかに分ける。

| 分け先 | 当てはまるもの | 例 |
|---|---|---|
| CI の検査に昇格 | 退行しやすく、機械で合否が決まる | 押下の検査（`vrt/pressed-states.e2e.spec.ts`）、MDX のコード例（`check:examples`） |
| 四半期に再測定 | 退行しうるが、全量が重いか、人の仕分けが要る | 強制カラーのフォーカス表示（12-4） |
| 消す | 一度直せば戻らない | 個別の文言の修正 |

**頻度を下げる条件**: いまは測るたびに外れが出ているので隔週に置く。**2 回続けて起票が 0 件になったら、この項目を四半期へ移す**（見出しごと `## 四半期` の下へ）。下げたあとに外れが続けて出たら戻す。

| 日付 | 観点 | 測った範囲 | 外れ | 起票 |
|---|---|---|---|---|
| 2026-10-04 | 開いたリストで Tab を押したあと（フォーカスの行き先・リストが残るか） | 選択系 7 部品（Select / MultiSelect / Combobox / Cascader / TreeSelect / ModelSelector / PhoneInput）の `Open` ストーリー | 2（Select・TreeSelect が開いたまま）。フォーカスを失う部品は 0 | T299（#829）・T300（#831）。どちらも済 |
| 2026-10-04 | 同じ役割の部品で、キー操作が揃っているか（メニュー系・日付系） | メニュー系 6（Dropdown / SplitButton / Menubar / ContextMenu / HamburgerMenu / Menu）と日付系 5（DatePicker / DateRangePicker / Calendar / RangeCalendar / TimePicker）。開くキー 4 種・面の中の移動・Escape・Tab | 5 件。**測れなかったもの 1**（TimePicker はブラウザ標準の `<input type="time">` で、開く面を持たない）。外れなし: 置いてある Menu（矢印・Home / End が動き、Tab で外へ出る）。メニューの中の矢印・Home / End は 4 部品とも揃っていた | T301（Dropdown / SplitButton が Escape でフォーカスを失う）・T302（Tab の挙動が 3 通り。Menubar は開いたまま残る）・T303（↓ で開かない）・T304（カレンダーは矢印で日を動かせず、全部の日が Tab の停止点）・T305（HamburgerMenu が Escape で閉じない） |
| 2026-10-04 | **一巡（13 観点をまとめて）** ── ①選択系の開くキーと面の中の移動 ②タブ・ツリー・一覧のキー操作 ③閉じたあとのフォーカスの戻り先 ④エラーの伝わり方 ⑤無効のふるまい ⑥読み上げで文字がつながる箇所 ⑦日本語表示で英語が残る既定の文言 ⑧状態の網羅 ⑨サイズの段 ⑩dark の浮く面 ⑪密度への追従 ⑫動きを減らす設定 ⑬`onChange` の形 | 全 223 部品を 1 回ずつ開いて対象を洗い出し（開く引き金あり 26・無効のストーリー 51・エラーのストーリー 21・サイズのストーリー 26）、①〜③は開く部品 22・ボタンで開く面 8・置いてある部品 20、⑥⑦は全ストーリー 1,086 を英語と日本語で、⑧⑪は既定のストーリー、⑬は Props の抽出結果（型を持つ 38 部品） | **外れなし**: ⑥（ブラウザが計算した名前では、区切りなしで出たものは 0。flex の子は別の箱として空白が入る。#837 の ModelSelector は名前ではなく combobox の値だった）・⑩（開いた面の地は全部、ページの地と違う色）・⑫（動きの時間が残る部品 0）・⑬（38 部品とも「値を渡す」形。イベントを渡すものは 0）。**測り方が粗くて起票に使えなかった**: ⑧のホバーと押下（最初の操作要素が「選択中」のことが多く、変化しないのが正しい場合と区別できない。フォーカスは全部品で変化あり）。**計測の誤りだったもの**: Combobox が ↓ で開かない（別の要素にフォーカスしていた）・TreeView で ↓ がフォーカスを失う（項目へ直接 `focus()` していた。Tab で入れば動く）・無効の Transfer が Enter で動く（常設の listbox を「開いた」と数えていた）・Fieldset の無効（`<fieldset disabled>` の子は `.disabled` が false を返す） | T306（SpeedDial）・T307（Menubar）・T308（CommandPalette）・T309（TreeSelect）・T310（Tour）・T311（InputBase のボタン）・T312（英語の既定の文言 12 部品）・T313（高さ）・T314（密度）・T315（小さなキー操作）・T316（エラーのストーリー）。**すぐ直す**に当たるのは T306〜T308（フォーカスを失う・見えない要素に着く） |
| 2026-10-05 | 開いた面の枠・角丸・影 | `Open` のストーリー 21 本 × light / dark。測れた 16 部品・測れない 5（Dialog / Lightbox / Tour / HoverCard / HamburgerMenu） | 枠の色 3 部品（dark でだけ明るい）・角丸が 4px と 8px に割れる・影のトークン 1 部品 | T320 |
| 2026-10-05 | 項目を選んで閉じたあとのフォーカスの行き先 | 開く引き金を持つ 22 部品（項目を選ぶのは 15）。キーボードで開き、Enter で選ぶ | フォーカスを失う部品 0。閉じないもの 3（MultiSelect・Cascader は意図どおり。SpeedDial は外れ） | T322 |
| 2026-10-05 | 状態の網羅（ホバー・押下。選択中でない要素） | 223 部品の既定のストーリー。操作要素を持つ 100 部品・143 要素（測れない 5） | 押下で変わらない 62。ホバーで変わらない 13（部品の外れは 0）。**1 回目は祖先を見ておらず 69 と出た** | T321 |
| 2026-10-05 | 表示言語を pt にしたとき、文言が枠からはみ出すか | `Components/` の 1086 ストーリーを en と pt で開いて比べた（1 本は開けず） | 0（横スクロール・箱からのはみ出し・省略記号なしの切れは、en より増えない）。省略（…）が増えるのは 5 ストーリーで、どれも省略する作りの箇所。**対照**: en だけでも、はみ出し 2・切れ 15・省略 10 を拾っている | なし |
| 2026-10-06 | 並んだ面の境目に、隣の要素の影が落ちていないか（ユーザーの報告: SplitButton の境目に線が 2 本） | 部品・パターン・Audit の 1,166 ストーリーを dark で開き、影を持つ要素の各辺の 2px 外側に、祖先でも子孫でもない地を持つ要素が並んでいるかを見た（`SHADOW_SWEEP=1` で `vrt/joined-shadow.e2e.spec.ts`。約 16 分） | 3 部品（SplitButton の solid・ButtonGroup の joined の solid・InputGroup の中のボタン）。**1 回目は兄弟だけを見て 1 組しか出なかった**（ラッパーを 1 段挟む SplitButton を拾えず、対照が鳴らなかったので気づいた） | なし（3 部品とも、その日のうちに直した） |
| 2026-10-06 | 押下の測り残し（dark・compact・既定のストーリーに出ない操作要素・覆われていた要素） | `vrt/pressed-states.e2e.spec.ts` を環境変数で広げて流した（`PRESSED_GLOBALS` で dark と compact、`PRESSED_ALL=1` で `Components/` の全ストーリー。同じ部品の同じ要素は 1 回だけ測る）。覆われていてマウスで押せない要素は、`:hover` と `:hover:active` を強制して比べた | dark と compact は light と同じ（外れ 1）。全ストーリーでは、測った 328 要素のうち 32 が押しても変わらない: 部品の要素が 12 か所、ストーリーが直に置いた素のボタンなどが 6、**計測の誤りが 1**（NodeGraph の中の Button。xyflow が表示のあとでノードの位置を合わせ直すので、古い位置を押していた。押せていないときは状態を強制して測るように直した） | なし（12 か所とも、その日のうちに直した） |
| 2026-10-08 | 省略記号なしで文字が切れている箇所 | `Components/` の 1,088 ストーリーを、en の 1280px・ja の 1280px・en の 390px で開いた（各回とも開けなかったもの 0・文字の無いもの 123〜124）。文字の矩形を祖先の箱と比べ、丸ごと外にあるものは「隠れている」、スクロールできる箱から出ているものは「届く」として外し、hidden / clip の箱から一部だけ出ているもの（横は 1.5px 超・縦は行の 4 分の 1 超）を切れに数えた。切る箱に `text-overflow: ellipsis` か行数の省略があるものと、2px 以下の箱（読み上げ専用）は別に数えた。対照は 5 つ足して確かめた（横の切れ・縦の切れ・省略記号・丸ごと隠れ・スクロール） | 1280px は en・ja とも 1（CodeBlock の `maxLines`）。390px は 8 ストーリー・3 部品（CodeBlock 1・ScheduleView 3・Marquee 4。Marquee は流れる文字を箱で切る部品なので外れに数えない）。省略記号つきは en 12 ストーリー・読み上げ専用は 15 ストーリー。**1 回目はスクロールできる箱を見ておらず 6 と出た**（PhoneInput・Combobox のリスト、Tabs、CodeDiffViewer は内側がスクロールする。Carousel は隣のスライドが丸ごと隠れていた）。**前回の候補に書いた「15 ストーリー・7 部品」は、全部が読み上げ専用の文字だった** | T324・T325（計測とは別に CI-15） |
| 2026-10-10 | 渡した属性が、出力のどこに出るか（`aria-describedby` / `aria-labelledby` / `aria-label`） | ①スプレッドのあとに固定の属性を書く開きタグ 19 か所（`src/components` の `.tsx` 231 ファイル・スプレッドを持つ開きタグ 266）を読んだ ②入力系 36 部品を、ラベルもエラーも渡さずに描いて、3 つの属性がどの要素に出るかを見た（測れず 1: Mentions） | **消える**（型は受ける）: CheckboxGroup / SwitchGroup / RadioGroup / CounterTextarea の `aria-labelledby` と `aria-describedby`、ToggleGroup の `aria-describedby`、TagInput は 3 つとも。Kanban は `aria-label` を内蔵の名前で上書き、Drawer は `aria-labelledby` と `role` を上書き。**包みに落ちる**: Cascader・PhoneInput・OtpInput・InlineEdit、Slider / RangeSlider の `aria-describedby`。**型が受けない**: DateRangePicker / SegmentedControl / Transfer。操作要素に届くのは 21 部品。**最初の粗い数え方（17 か所）は、消える部品の半分を拾えていなかった** ── 分割代入で取り出してから渡さないものは、スプレッドの形をしていない | T328・T329 |
| 2026-10-10 | DOM を測って位置を決めるが、測り直さない | 測る 17 部品のうち、測り直しの口が同じファイルに無い 10 部品のコードを読み、Anchor をブラウザで測った（リンクの大きさを変えたあと、印がリンクに重なっているか） | 1（Anchor。印の幅が 87px のまま、リンクは 152px。印の位置は現在地が変わったときにしか測り直さない）。**外れなし 8**: Rating / Image / ImageCompare / Splitter / SwipeAction / SignaturePad は操作のたびに測る。Terminal と Button は中身が変わるたびに測る。**ブラウザでは測っていない 1**: ScrollProgress。**対照**: 測った変化は、注入したスタイルで文字を大きくしたもの ── 実際の引き金（フォントの読み込み・表示言語の切り替え・入れ物の幅）では測っていない | T331 |
| 2026-10-10 | ホバーでしか起きない動作 | `onMouseEnter` を持ち、フォーカス側の口が同じファイルに無い 9 部品のコードを読んだ | 0。7 部品（Select / MultiSelect / Cascader / PhoneInput / Mentions / ModelSelector / CommandPalette）は、リストの項目のハイライト（矢印キーで同じ項目に届く。2026-10-04 の一巡の①）。Menubar は開いているメニューの切り替え、SpeedDial は開く動作で、どちらもキー操作がある。**対照なし** ── 元の Marquee（T265）は直してあるので、鳴る例が手元に無い | なし |
| 2026-10-10 | ポインタでしかできない操作 | ドラッグかポインタの移動を扱い、`onKeyDown` が同じファイルに無い 4 部品のコードを読んだ | 1（ImageCropper。画像の位置はドラッグでしか動かせない。拡大はスライダー、回転はボタンで届く）。外れなし: Kanban（移動ボタン）・SwipeAction（T275）。SignaturePad は、手書きそのものが目的なので外れに数えない | T330 |
| 2026-10-10 | 見出しのレベルが固定で、利用者が変えられない | `<h1>`〜`<h6>` か `aria-level` を直に書く 8 部品 | モーダルの中の 3（Dialog / Drawer / BottomSheet の `h2`）は、面が独立した文脈なので外れに数えない。ページの流れの中に置かれる 5（Toast の `h5`・ThoughtProcess のレベル 3・Tour と Lightbox の `h3`・Dashboard の `h2`）は、置いただけで見出しの順が飛びうる。レベルを変える口を持つものは 0 | T333（判断待ち） |
| 2026-10-10 | 読み上げ用のロール（`status` / `alert` / `log` / `aria-live`）を持つが、読む中身が無い | `Components/` の 1,091 ストーリー（開けず 0）。読み上げ用の要素 138 個。**対照**: 空の `role="status"` を注入した 4 ストーリーで、4 つとも拾った | 空で、隠れていないもの 24 個。うち外れは 1 部品（LoadingOverlay。`role="status"` と `aria-live` を持つが、文言を渡さない 5 ストーリーでは中身が空 ── T228 の Loader と同じ形）。残りは `aria-live` の入れ物で、**知らせる文が入るまで空なのが正しい**（NodeGraph / Transfer / QueryBuilder / SwipeAction） | T332 |
| 2026-10-10 | 「無いこと」だけを見るテスト | `src/components` のテストの `it` 2,882 件（最初の粗い数え方は、字下げの深い `it` を数えておらず 2,594 件と出た） | 期待が全部「無い」側のもの 273。うち、操作を含むのに、操作の前に「在る」を見ていないもの 100（43 ファイル。多い順に Cascader 13・`useVideoPlayer` 10・ContextMenu 8・Select 7）。大半は「無効のときは起きない」の確認で、対になる「有効なら起きる」が同じファイルにあれば正当。**1 件ずつは読んでいない** | CI-17 |
| 2026-10-10 | 許可リストの `color-contrast` の incomplete を、axe が挙げる理由で分ける | 許可 225 通り（story × theme）を手元で開き直した（開けず 0。225 通りとも、いまも incomplete が出る＝許可リストと一致） | ノードの内訳: 画像の上 776・背景の重なり 374・短い文字 144・絵文字など 112・覆われている 58・グラデーション 38・疑似要素 34・ほかの要素が一部を覆う 6・背景画像 2。**要素の重なりだけが理由の通りは 10（5 ストーリー）**: `modelselector--open` / `virtuallist--with-overscan` / `tour--open` / `patterns-captions--discard-take` / `audit-patternfamily--overview`。配置で消せるかは、1 つずつは確かめていない（#917 の `AlertDialogOpen` は、同じ理由で、引き金を真裏から外して消せた） | CI-18 |
| 2026-10-10 | 未実装のまま残したことを書いたコメント（変更のときに気づいた・T330。ImageCropper の「実際にはここで Canvas 等を使用してクロップ処理を行いますが、今回は…」） | `src/components` の `.tsx`（テストとストーリーを除く）で、`実際には` / `今回は` / `TODO` / `FIXME` / `would be used` / `not implemented` / `未実装` / `仮実装` / `ダミー` を含む行: 5 行・3 ファイル。1 行ずつ読んだ | 1（ImageCropper。切り抜きを行わず、元の画像の URL を返している）。外れなし: InputMask（処理の説明で、実装はある）・WaterfallChart（文中の「実際には」）。**語の一覧に無い書き方は拾えない** | T334 |
| 2026-10-10 | マウスのイベントだけでドラッグを実装している部品（変更のときに気づいた・T330） | `mousemove` を扱う部品のうち、`touchstart` / `touchmove` / `pointerdown` / `pointermove` を同じファイルで扱っていないもの | 1（ImageCropper。タッチ端末では画像の位置を動かせない。`components.json` は `mobile: true`）。ほかに `mousemove` でドラッグを組む部品は、タッチかポインタの口を持っていた | T335 |
| 2026-10-11 | 「無いこと」だけを見るテストの仕分け（CI-17 の続き） | 数え方を直した: `.not.toBeNull()` のような二重否定は「在る」側なので外した（2026-10-10 の数え方は、これを「無い」側に数えていた）。`it` 2,926 件のうち、操作を含み、期待が全部「無い」側のもの **83**（2026-10-10 は 100）。多い 6 ファイル・35 件を 1 件ずつ読んだ（`useVideoPlayer` 10・ContextMenu 8・`useAudioPlayer` 5・TreeView 4・Cascader 4・SmartSearchInput 4） | **何も起きなくても通るもの 6**: `useVideoPlayer` 3（`isPlaying` や `loop` が初期値の false のまま「false である」を見ていた）・`useAudioPlayer` 2（同じ形と、タイマーが動き出したことを見ていない）・Cascader 1（「消すボタンが在れば押す」と書いていて、無効のときはボタンが無いので何も押していなかった）。**正当 29**: 対になる「起きる」側の検査が同じファイルにある（SmartSearchInput の 4 件は、直前に「Enter で送る」がある）か、操作の途中で要素を引いていて、無ければ落ちる。**対照**: 強くした検査のうち 3 件は、実装の該当の行を外すと落ちることを確かめた（強くする前は通っていた）。**読んでいない**: 残りの 48 件（37 ファイル。1 ファイルあたり 1〜3 件） | CI-17（済にするのは別の PR） |

---

## リリース前

### 8. 公開物を**実物で**確かめる

リポジトリに置いてあることと、`npm` から取れることは別。

```bash
npm run build                        # ← 必須。npm pack はビルドしない
npm pack
tar -tzf wimui-*.tgz | head -30      # 入っているもの
tar -xzf wimui-*.tgz && ls package/  # NOTICE / dist / llms.txt
```

> 実例: 公開済み 0.15.0 の tarball を取ったら `NOTICE` が入っていなかった（T80）。「リポジトリにある」では確認になっていない。

> **`npm run build` を省くと、この検査は古い `dist` を測る。** `npm pack` はビルドを起こさない
> （ビルドを噛ませているのは `prepublishOnly` で、これは `npm publish` でしか走らない）。
> 0.18.0 の準備で実際に踏んだ: 素の `npm pack` で取った tarball には `dist/reset.css` が無く、
> その日に入れたトークンの変更も載っていなかった。**「入っていない」という結論のほうが誤りで**、
> ビルドを挟んだら両方あった。**欠落を報告する前に、まず自分が何を測ったかを疑うこと。**

**公開したあとは、リポジトリの pack ではなくレジストリの実物で測る。**

```bash
npm pack wimui@<version>              # ← レジストリから取る（ローカルの dist を一切見ない）
tar -tzf wimui-<version>.tgz | grep -v '^package/dist/'   # 同梱されたルートのファイル
# ローカルの build 済み dist と突き合わせる（出ている版 == 今の main か）
sha256sum dist/styles.css dist/reset.css dist/index.js dist/llms.txt
```

> 実例（2026-08-11、0.19.0）: **欠落なし。** `NOTICE` / `LICENSE` / `README.md` / `README.ja.md` と
> `dist/{styles.css,reset.css,llms.txt,llms-full.txt}` / `dist/locales/{en,ja,pt}` 12 本がすべてあり、
> `llms.txt` の版表記も `v0.19.0` で `package.json` と一致（1483 ファイル / 1.0 MB）。
> `npm run build` 後のローカルと上記 4 ファイルが**バイト一致**したので、出ている版が現在の main と
> 同じものであることまで確認できた。**この突き合わせをすると「実物にあるか」と「実物が最新か」を
> 1 回で見られる。**

> 実例（2026-08-18、0.24.0）: **欠落なし。** ルート同梱は `LICENSE` / `NOTICE` / `package.json` /
> `README.md` / `README.ja.md`、`dist/locales/{en,ja,pt}` は各 4 本。`llms.txt` の版表記は `v0.24.0` で
> `package.json` と一致（1490 ファイル / 1.04 MB）。`styles.css` / `reset.css` / `index.js` /
> `llms.txt` / `llms-full.txt` の **5 本すべてがローカル build とバイト一致**。
> **中身まで見た**: この版の主題である T208 の規則が、レジストリの `reset.css` に
> `h1,h2,h3,h4,h5,h6{line-height:var(--wim-line-height-snug)}` と
> `[lang=ja] h1,…{line-height:var(--wim-line-height-snug-jp)}` として実在する。
> **ファイル名の一致だけでは「その版の変更が入っているか」は分からない**ので、
> 版の主題にあたる 1 行を実物から grep するところまでやると 1 回で見終わる。
> なお `CHANGELOG.md` は同梱されない（0.19.0 の記録と同じで、退行ではない）。

### 8.5. 詰まっている Release ランが無いか

```bash
gh api "repos/takeshisakuma/wimui/actions/runs?status=waiting" \
  --jq '.workflow_runs[] | "\(.name)\t\(.created_at)\t\(.id)"'
```

**承認されないまま `waiting` で残ったランが 1 本あるだけで、以降のリリースが無音で止まる。**
`release.yml` の concurrency に `cancel-in-progress` が無いため、後続はジョブを 1 つも作らずに
`pending` で待つ ── チェックも通知も承認ボタンも出ない。

> 実例: 0.18.0 の準備で、**2026-08-08 の push で作られたランが 38 時間グループを占有していた**。
> `gh run list` では `pending` としか見えず「順番待ち」に読めるので、最初は承認待ちだと誤って報告した。
> `pending_deployments` が空だったことが手がかりになった。恒久対応は T116。
>
> 古いランをキャンセルするときは**承認しないこと**。承認するとその古いコミットに対して
> changesets が走る。

**失敗した Release ランも見る。** Version PR のマージと version ジョブがぶつかると
`cannot lock ref refs/heads/changeset-release/main` で落ちる（T170）。`recover-version`
ジョブが latest main を取り直して拾うが、ジョブ自体が消えている・checkout がトリガー SHA
のまま、だと **changeset が main に残ったまま Version PR が無い**状態になる。
`workflow_dispatch` で `release.yml` を流せば拾える。

```bash
gh run list --workflow=release.yml --limit 5
```

失敗のあとに open な「Version Packages」PR が無いかを見る:

```bash
gh pr list --head changeset-release/main
```

### 9. README / llms.txt の主張と `package.json` の一致

ガードがある。リリース前に手でも通す。

```bash
npm run check:readme && npm run check:examples && npm run check:llms && npm run check:sandbox-pin
```

**`check:llms` はリリース PR で必ず落ちる**（`llms.txt` が `package.json` の version を埋め込むため、`changeset version` の直後は必ず不一致）。手順は `RELEASING.md` を見ること。

---

## 四半期

### 10. Node の EOL と `engines`

下限は「**CI で検証している非 EOL の LTS**」に保つ。いまは `>=22`。**次の見直しは Node 22 の EOL（2027-04）前**。

**2026-09-29 の確認**: `engines` は `>=22.0.0`、CI は 25 か所とも Node 22。Node 22 の EOL は 2027-04-30（nodejs/Release の schedule.json）。Node 24 は 2026-10-20 に maintenance、Node 26 は 2026-10-28 に LTS。変更なし。

### 11. GitHub Actions の runner image と actions の major

`ubuntu-26.04` の更新、`actions/*` の major。**これらを差し替える PR は `vrt.yml` / `a11y.yml` 自身を書き換える**ので、T92 で `paths` に自分自身を足してある（足す前は VRT も a11y も走らなかった）。

**`ubuntu-latest` の中身が変わる予告も見る**（actions/runner-images の issue に `ubuntu-latest` の移行予告が立つ）。描画を測るワークフロー（Playwright を使う 6 本）は `ubuntu-26.04` に固定してあり（T281。2026-09-30 に 24.04 から意図して移った ── 試しのランで VRT・a11y とも差分ゼロ）、**ほかは `ubuntu-latest` のまま**。固定した OS の廃止予告が出たら、1 本の PR で意図して移る（手順は T281）。

**2026-09-29 の実測**: actions は 6 種類とも最新の major（checkout v7 / setup-node v7 / upload-artifact v7 / download-artifact v8 / changesets v2 / actions-gh-pages v4）。runner の実体は ubuntu-24.04（イメージ 20260920.314）。**`ubuntu-latest` が 2026-10-19〜11-19 に 26.04 へ移る予告（#14748）を見つけ、描画を測る 6 本を固定した（T281）**。

### 11-2. Playwright を上げたら、VRT の比較器がまだ生きているか確かめる（T238）

**発動条件は major ではなく「Playwright の版が動いたこと」。** minor でも同梱 Chromium はまたぐ ── #594（`1.62.1` → `1.63.0`）で **Chromium は `151.0.7922` → `153.0.8010`** と 2 版動き、textarea のリサイズグリップ（UA が描く部品）の描画が変わって dark のベースラインが 2 枚落ちた。**同梱ブラウザが変わる更新は、比較器の入口でもある。**

`vrt/vrt.spec.ts` は `_comparator: "ssim-cie94"` を指定している。**アンダースコア始まり＝非公開オプション**なので、Playwright を上げると**黙って無視され、既定の pixelmatch に戻る可能性がある**。戻ると `includeAA: false` の盲点も戻り、**細い記号やアイコンの消失が再び緑で通る**（#564 がそうだった）。

**「指定が残っている」ことでは確かめられない。** 効いているかは対照でしか分からない。

確かめ方（30 分ほど）:

1. 使い捨てブランチで `DataGrid.tsx` の `sortable={Boolean(col.sortable && onSortChange)}` を `sortable={col.sortable}` に戻す（#564 の 1 行）
2. `npm run build-storybook`
3. Windows なら `CI=1 npx playwright test vrt/vrt.spec.ts -g "DataGrid" --update-snapshots` を**先に main で**回して `-chromium-win32.png` を作り、両端を揃える（終わったら消す）
4. `CI=1 npx playwright test vrt/vrt.spec.ts -g "DataGrid"`

**期待: 20 件が落ちる**（変化した 10 ストーリー × 2 テーマ）。**32/32 緑なら比較器が効いていない。**

**実測の記録**（この対照を通した版だけを書く。通していない版は「不明」であって「大丈夫」ではない）:

| Playwright | 同梱 Chromium | 結果 |
|---|---|---|
| 1.62.1 | 151.0.7922.34 | 20 failed / 12 passed（T238 の起票時） |
| 1.63.0 | 153.0.8010.12 | **20 failed / 12 passed**（2026-09-12・#594 で実測。落ちた 10 ストーリーの内訳も一致） |

**先に静的確認をしておくと、対照が空振りしたときの切り分けが早い**（ただし**これで代用はしない**）:

```bash
npm pack playwright@<版> --silent && tar xzf playwright-<版>.tgz --one-top-level=pwtest
grep -rn "_comparator" pwtest/package/lib/matchers/expect.js   # comparator への写し替えが残っているか
npm pack playwright-core@<版> --silent && tar xzf playwright-core-<版>.tgz
grep -rl "ssim-cie94" package/lib                              # 比較器そのものが同梱されているか
```

### 12. a11y 全量の再測定（T68）

同一コミットで複数回流し、赤の集合が一致するかを見る。**1 ラン 4 シャード × 約 9 分の CI 律速**なので、回数を増やす費用対効果は低い。2026-08-05 に 5 回流して 5 回とも緑だったが、**それは非決定性が消えた証明ではない**（起票時も赤は 1〜2 件で、緑を引くことはありうる）。

**同じ ref では並べて流せない。** `a11y.yml` の concurrency は `a11y-<ブランチ名>` で `cancel-in-progress: true` なので、同じブランチに続けて dispatch すると古いランが止められる。**同じコミットを指す別名のブランチを作り**（`git push origin <SHA>:refs/heads/maint/a11y-rerun-N`）、それぞれに dispatch すると並ぶ。終わったらブランチを消す。

**2026-09-29 の実測**: main の `41d7e02d`（#743・runner を ubuntu-24.04 に固定した直後）で **4 回流して 4 回とも緑**（main への push で起きたラン＋別名ブランチ 3 本）。赤の集合は空で一致。

### 12-2. a11y の `incomplete` ラチェットを更新する（T205）

`vrt/a11y-incomplete.json` は「**axe が人に確かめろと言った指摘**（`incomplete`）のうち、見たうえで許しているもの」の一覧（rule × story × theme）。**増えても減っても CI が落ちる** ── 減ったときに落とすのは、直したのに許可が残り続ける状態（＝次に同じ指摘が出ても誰も気づかない）を防ぐため。

**更新は CI の dispatch でやる**（`gh workflow run a11y.yml -f update_incomplete=true --ref <branch>`）。ローカル（Windows / macOS）と CI（Linux）ではフォントもレンダリングも違うので、`color-contrast` の「重なりで判定不能」のような**レイアウト依存の incomplete は環境をまたぐと一致しない** ── VRT のスナップショットを `chromium-linux` だけで持っているのと同じ理由。ワークフローが 4 シャードで測り、断片を集めて畳み、`vrt/a11y-incomplete.json` をコミットバックする。**VRT の update と同じく、そのブランチへの push が全部終わってから最後に 1 回**。

ローカルで**中身を見る**とき（数え直し・仕分け）は同じ手順を手で踏める:

```bash
npm run build-storybook
CI=1 A11Y_INCOMPLETE_UPDATE=1 npx playwright test vrt/a11y.spec.ts   # 全量 2130 通りで約 20 分
npm run a11y:incomplete:update      # 断片 → ベースライン（増減を印字する）
npm run check:a11y-incomplete       # 形・理由・孤児
```

**ただしローカルで作ったベースラインをそのままコミットしない**（CI で落ちる可能性がある）。

- **部分実行（`--shard` / `--grep`）の断片から作らない。** 走らなかったストーリーの許可が丸ごと消え、次の CI が「消えた incomplete」で一斉に落ちる。`a11y:incomplete:update` は `storybook-static/index.json` の母数と突き合わせ、1 通りでも欠けていたら**書き込まずに落ちる**
- **新しいルールを許すときは `reasons` に「なぜ機械には判定できないのか」を書く。** 空だと `check:a11y-incomplete` が落ちる（＝「見たうえで許す」を機械側に置いてある）
- 直したときは、その許可を消して着地させる（update が減として印字する）
- **出たり出なかったりするルールは `unstable` に理由つきで入れる**（「今回は出なかった」を赤にしない。新しく出たほうは赤のまま）。いまは `frame-tested` の 1 つ ── 外部 iframe（Google Maps）が読み込めた回にだけ出るので、全量 2 回の測定で結果が割れた。**この判断は 1 回の測定では決められないので、update は `unstable` を持ち越すだけで、消すのは人がやる**
- **原因がストーリー側の作りにあるときは `unstableStories`**（そのストーリーだけ、出る / 出ないの両方を許す）。いまは `Audio/PremiumFeatures` の 1 つ ── `demoDelay={2000}` + fadeIn で **2 秒後に中身が入れ替わる**ので、axe がどちら側を測るかが走行ごとに変わる（同じ Linux の 2 ラン間で light ⇄ 消滅を往復した）。**どちらの免除も「そのストーリーのどれかのテーマに載っているルール」に限る** ── 載っていないルールが出たら赤なので、新しい指摘は見落とさない

**2026-09-29 の実測**: main の `41d7e02d` を別名のブランチに出して update を dispatch した。**許可 251 → 250、増えたものは 0**。減った 1 件は `Audio/PremiumFeatures` の dark で、上の `unstableStories` のとおり出たり出なかったりするもの（同じ差分は #742 の update で既に main に入っていた）ので、PR にはしていない。**ルールごとの理由（`reasons`）と `unstable` / `unstableStories` は変わっていない。**

### 12-3. 凍結した `color-contrast` を測り直す（T206）

**凍結は目視の代わりにならない。** `vrt/a11y-incomplete.json` に載っている `color-contrast` は「axe が背景色を決められなかった」だけで、**中身が真っ黒とは限らない**（実測で 1325 ノード中 496 が 4.5:1 を割っていた ＝ T212 / T213 / T214）。

```bash
npm run build-storybook
npx http-server@14 storybook-static -p 6006 -c-1 --silent   # 別ターミナル

npm run a11y:incomplete:measure -- --verify                 # **道具の確認を先に**（axe 本来の比と突き合わせる）
npm run a11y:incomplete:measure                             # 凍結分を全量（約 40 分 / 既定 4 並列）
npm run a11y:incomplete:measure -- --report tmp-a11y-measure/results.jsonl   # まとめ直すだけ
```

**測り方**: 対象の**文字だけ透明にして矩形を撮り**、実際に描かれている画素（最頻・最暗・最明）を地として**見本を 1 つ作り、判定は axe にさせる**。比は自分で計算しない（T108 ── 色計算を再実装したら本物と食い違った）。詳細と落とし穴は `scripts/measure-a11y-incomplete.mjs` の冒頭に書いてある。

- **`--verify` を飛ばさない。** axe が自力で測れているノードに同じ手順をかけて比が一致するかを見る。ずれたら結果を信用しない（0.5 を超えるずれ、または 1 件も突き合わせられないときは exit 1）
- **直したあとは「0 件」を信用しない。** `--inject-fg "rgb(215,215,215)"` で故意に文字色を潰し、light で落ちて **dark で落ちないこと**まで見る（明るい灰は暗い地では通る＝鳴ってはいけない経路で鳴らない確認）

**2026-09-29 の実測**（main の `639f4ce2` から build）: `--verify` は 3 ストーリー 78 ノードで **axe 本来の比と全件一致**。凍結分 222 通り（story × theme）・**1346 行 / 測れた 1344 / 測れず 2 / エラー 0**。面の大半を占める背景で割るのは **17 件**（2026-08-19 は 496 件）で、**どれも扱いが決まっているもの**:

| 件数 | 何か | 扱い |
|---|---|---|
| 14 | `LoadingOverlay` の幕の下の本文（`audit-feedbackfamily` / `audit-skeletonfamily` の 2 を含む。2.12〜2.44） | 2026-08-19 に「コントラストの契約を課さない」と決めて閉じた（`reasons.color-contrast`） |
| 2 | `Image / BlendingEffects` の中央ラベル（1.3） | **道具の既知の限界**。`mix-blend-mode: difference` を無視して `color` で見本を作る。T213 で画素の差分から測り直して 2.95 と分かっている |
| 1 | `Audio / PremiumFeatures` の時刻（3.4） | **既知の偽陽性**。`demoDelay={2000}` の入れ替わりの前を測っている。T213 で 3 秒後の実画素が 8.13 と確かめてある |

**BlendingEffects と Audio は今回は測り直していない**（前回の結論を当てはめた）。数字は前回と違う（Audio は 1.06 → 3.4）── 入れ替わりの途中を測ったと見ているが、確かめてはいない。決まらない理由は nonBmp 112 / equalRatio 30（覆われている文字。SwipeAction の隠れたラベルなど）。
- **覆われている文字は測れない。** 拾える画素は覆っている側の色になる（`SwipeAction` の隠れたラベルは白 on 白＝ `equalRatio`）。出ている状態のストーリーが要る
- **Storybook のキャンバス地（`#e5e5e5` / `#262626`）は製品のサーフェストークン（`#fff` / `#393939`）と違う。** 4.5 の境界付近はトークンの地で測り直す（画素の丸めで ±0.07 動く）
- CI には載せていない。**ラチェット（12-2）が「増減」を見張り、この道具は「中身」を見る**という分担

### 12-4. 強制カラーでフォーカス表示が出るかを測り直す

**書き方のガードは実物の代わりにならない。** `check:focus-indicator` の focus-forced-colors は「影だけでフォーカスを示して outline が無い」ブロックを落とすが、親が切り取る・外部ライブラリの規則が勝つ・JS が付ける属性で出し分ける、はコードから決められない。Windows のハイコントラストなどの強制カラー（forced-colors）では box-shadow が描かれないので、実物で Tab を当てて測る。

```bash
npm run build-storybook
npx http-server@14 storybook-static -p 6006 -c-1 --silent   # 別ターミナル

npm run measure:focus-forced-colors                          # Components を全量（通常 → 強制カラー。合わせて 20〜25 分 / 6 並列）
npm run measure:focus-forced-colors -- --only tabs           # ストーリー ID の部分一致で絞る
npm run measure:focus-forced-colors -- --scope Patterns/ --out tmp-focus-forced-colors-patterns   # 合成画面（58 ストーリーで 2 分ほど）
npm run measure:focus-forced-colors -- --report tmp-focus-forced-colors   # まとめ直すだけ
```

**測り方**: 各ストーリーで Tab を最大 8 回（ポップアップを持つ要素は最初の 1 つだけ開く）。停止点ごとに、フォーカス中と `blur()` 後の画素と computed style を比べ、通常の表示と強制カラー（Playwright の `forcedColors: "active"`）を突き合わせる。強制カラーで **outline の線種が none 以外に変わること**が合格。`nothing`（画素差 0）/ `weak`（周長に満たない差）が 1 つでもあれば exit 1。

- **「停止点 0 のストーリー数」を先に見る。** 描画前に Tab を押すと 0 件になる（T270 で 86% が 0 件になった）。前回から大きく増えたら、結果ではなく測り方を疑う
- **画素差 > 0 を「見える」と数えない。** 強制カラーでは `caret-color: transparent` が効かず、入力欄は文字カーソルの分だけ差が出る。1px の枠の色が Highlight に変わるだけの差も出る（模擬パレットでは黒 → 濃い紫で、ほぼ見分けられない）
- **直したあとは「0 件」を信用しない。** 修正前の結果を同じ集計に通して落ちることを確かめてある（下の実測）。道具を変えたら、`outline: none` ＋ `box-shadow` を故意に戻した部品を `--only` で測って `nothing` と出ることを見る

**2026-10-03 の実測**（Components 1063 ストーリー・**停止点 1499 / 停止点 0 のストーリー 424 / エラー 0 / 突き合わせ漏れ 0**。修正前後で同じ）:

| | outline | nothing | weak | other-visible | 測れず |
|---|---|---|---|---|---|
| 修正前（main の `bb91106416`） | 1054 | 246 | 115 | 84 | 0 |
| 修正後 | 1482 | 0 | 0 | 16 | 1 |

- 修正前に消えていたのは、`outline: none` にして影（`--wim-shadow-focus` / `-ring` / 内側の影）や背景だけで示していた部品（Pagination 49 / Select・Cascader などの入力枠 22 / Link 18 / GanttChart 17 / Accordion 14 / Banner 10 ほか）。`weak` は入力欄の文字カーソル 90・ScheduleView 20・Tabs の下線の色 3 ほか
- 直し方は `src/styles/_focus-mixins.scss` の `forced-colors-outline`（透明の outline。規則は `docs/rules/css.md`）。通常の表示は変わらない ── 透明の outline の有無で画素を直に比べて、Link / Input / Textarea は差 0、OtpInput は 8 画素が 1 階調（207 と 208）
- **`other-visible` の 16 は NodeGraph / InteractiveGraph**（SVG の線の色と太さが変わる）。強制カラーでも見えているので落とさない。**測れずの 1 は AspectRatio の iframe**（中身が別の文書）
- **ScheduleView のボタンは FullCalendar のもの**で、ライブラリ側が `.fc .fc-button:focus { outline: 0; box-shadow }` と書いている。ガードは自分の SCSS しか見ないので、外部ライブラリを包む部品はこの道具でしか見つからない。通常の表示のフォーカスが FullCalendar の灰色の輪のままなのは今回触っていない
- **届いていない範囲**: 閉じたポップアップの中（最初の 1 つを開いた分だけ）。CommandPalette の検索欄はここに当たり、ガード側（入れ子のブロックを見る規則）で見つけた。全量は Chromium の模擬で測った（実機は `--system` で一部だけ）。Patterns のストーリーは対象外
- **実機のパレットで測るときは `--system`**（2026-10-04）。OS のコントラスト テーマを適用した状態で `npm run measure:focus-forced-colors -- --system --only <ID の一部>` を流すと、模擬ではなく OS の設定のまま測る（ウィンドウが開く。画面を出さないモードは OS の強制カラーに従わない）。模擬と実機は色が違い、**模擬では気づけない欠陥があった** ── 入力欄は外枠の `:focus-within` に outline を出すが、色を任せると本文の色（白）になり、枠と同じ色の線が足されるだけだった（フォーカスした要素そのものの outline は強調色になる）。mixin が `outline-color: Highlight` を名指しするようにして直した。**この道具の合否は線種しか見ていない**ので、色は画像で確かめること
- **Patterns も測った**（2026-10-04・T296。`--scope Patterns/`）。58 ストーリー・**停止点 230 / 停止点 0 のストーリー 4 / エラー 0 / 突き合わせ漏れ 0**。230 の停止点は通常も強制カラーも全部 outline で、消える・弱い停止点は 0。停止点 0 の 4 つ（`patterns-marketing--testimonial` / `--feature-section` / `--comparison-table`、`patterns-roastery--default`）は、Tab で届く要素が実際に 0 個の画面（対照の `patterns-hiring--default` は 38 個で、同じ数え方で Tab が届く）。Components と同じく、Tab は最大 8 回・閉じたポップアップは最初の 1 つだけなので、画面の奥の停止点は測っていない
- CI には載せていない（全量で 20 分強）。**ガードが「書き方」を見張り、この道具は「実物」を見る**という分担

### 13. VRT スナップショットの衛生

```bash
ls vrt/vrt.spec.ts-snapshots/*.png | wc -l
ls vrt/vrt.spec.ts-snapshots/ | sed 's/.*-\(chromium-[a-z0-9]*\)\.png/\1/' | sort | uniq -c
ls vrt/vrt.spec.ts-snapshots/ | grep -c '^light-'; ls vrt/vrt.spec.ts-snapshots/ | grep -c '^dark-'
```

**2026-09-29 時点**: 2082 枚すべて `chromium-linux`、light 1041 / dark 1041 で名前も対称。`check:vrt-orphans` は孤児 0（index のストーリー 1099 件と照合）。

**2026-08-07 時点**: 1990 枚すべて `chromium-linux`、light 995 / dark 995 で対称。かつては CI 未使用の `chromium-win32` が 2,942 枚、削除済みストーリーの orphan が 80 枚あった（T11）。

### 14. 部品を**並べて**見る（Audit のストーリー・人の目）

**不揃いは、1 つずつ見ても気づけず、並べると気づく。** `stories/Audit/` に、部品族ごとに並べた画面が 21 枚ある（Input / Selection / Button / Overlay / Feedback / Navigation ほか）。四半期に 1 回、light と dark で開いて見る。

- **見るのは人**（ユーザー）。エージェントは「問題なし」と報告しない（`AGENTS.md`「委任時の 2 つの約束」の 2）。エージェントが添えるのは、前回から見た目が変わった部品の一覧（その四半期にベースラインが動いた部品）と、隔週の 7-4 で外れが出た部品族
- 気づいた不揃いは、**直す**（起票）か **揃えない**（`DESIGN.md` の「揃えていない差（意図したもの）」に理由つきで足す）かを決める。どちらにも書かないと、次の点検で同じ指摘が上がる
- Audit の画面は VRT から外してある（`vrt/vrt.spec.ts` の除外。ページが大きくジッタが累積するため）。**絵の変化は CI では分からない**ので、この項目でしか見られない

### 15. 他のライブラリの部品一覧と突き合わせる

**「無い」のか「名前が違って見つからない」のかは、並べないと分からない。** 外から来た人と AI は、他所の語彙で探す。見つからなければ「無い」と判断して自作に進む（T46 で、穴の大半は名前の違いだった）。

やること:

1. 主要なライブラリの部品一覧を取る。**一覧は記憶で書かない** ── `llms.txt` を置いているものは、そこから取れる（2026-10-10 に取れたもの: `https://ant.design/llms.txt` / `https://mantine.dev/llms.txt` / `https://ui.shadcn.com/llms.txt` / `https://mui.com/material-ui/llms.txt`。Chakra UI と React Aria は、この形では一覧を取れなかった）
2. `src/data/components.json` の `name` と `aliases`、`src/data/not-planned.json`、下の「需要待ちの一覧」に当たらない名前だけを残す
3. 残った名前を、**ソースで不在を確かめてから** 4 つに分ける。名前で探して無くても、別の部品の prop や内側に在ることがある（`aria-pressed` は `ToggleGroup` の内側に、素の `<select>` は `Pagination` の内側に在った）

| 分け先 | 当てはまるもの | 書く場所 |
|---|---|---|
| **別名** | 同じものが別の名前で在る | `components.json` の `aliases`（他所では別の意味を持つ語は `disambiguation`）。`check:aliases` が衝突を見る |
| **採らない** | あっても入れない（演出系など） | `not-planned.json`（理由と代わりを書く） |
| **候補** | 無くて、足す価値がある | `IMPROVEMENTS.md` に起票（**足すかどうかはユーザーが決める**） |
| **需要待ち** | 無いが、困った人がまだいない | 下の「需要待ちの一覧」に足す（起票しない。要る画面か要望が出たら起票する） |

**4 つのどれかに書くこと。** どこにも書かないと、次の回に同じ名前がまた上がる。

> **2026-10-10 の実測**: 4 ライブラリの一覧と突き合わせた。**別名**を 7 部品に足した（`Combobox` に Autocomplete、`OtpInput` に Pin Input / Input OTP、`Toast` に Message / Sonner、`Stats` に Statistic、`Splitter` に Resizable、`FileUpload` に Upload、`TabBar` に Bottom Navigation）。**候補**として挙がったのは、DateTimePicker / MonthPicker / YearPicker、`Dialog` の `role="alertdialog"`、選べるカード（RadioCard / CheckboxCard）、NativeSelect、単体の Toggle、単体の Collapsible、OverflowList、NavigationMenu、棒と線の複合チャート、RTL（`.scss` の物理方向 171 か所・論理プロパティ 20 か所）。**起票したのは `Dialog` の `alertdialog` だけ**（T327。新しい部品ではなく a11y の不足で、prop 1 つで済む）。**残りは「需要待ち」と決めた**（2026-10-10・ユーザー判断）── 根拠が「他所にある」だけで、使う人が困ったという事実がまだ無い。部品を 1 つ足すと、VRT・a11y・3 言語の docs・サイズ予算が乗り続ける。
>
> **需要待ちの一覧**（次の回は、**ここに無い名前だけ**を見る。ここにある名前は、実際に要る画面か利用者の要望が出たときに起票する）: DateTimePicker / MonthPicker / YearPicker ・ RadioCard / CheckboxCard ・ NativeSelect ・ 単体の Toggle ・ 単体の Collapsible ・ OverflowList ・ NavigationMenu ・ 棒と線の複合チャート ・ RTL。このうち、利用者が既存の部品から組めないのは日時・月・年の選択と RTL で、ほかは組める（NativeSelect は素の `<select>`、Toggle は `ToggleGroup`、Collapsible は `Accordion`、選べるカードは `Radio` と `Card`）。
