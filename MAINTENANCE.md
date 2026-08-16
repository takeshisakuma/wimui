# 定期点検

CI が毎回見ているものは、ここには書かない。**ここにあるのは「壊れても赤が出ない」もの**だけである。

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

minor / patch はグループ PR をマージしてよい（`CLAUDE.md` の委任ポリシー）。major は互換性の根拠を添えて提案まで。

### 2. ブロック中の依存を、版番号ではなく**ブロッカーの実体**で再確認する

いま止めているもの:

| 依存 | 止めている理由 | 再開の判定材料 |
|---|---|---|
| `@storybook/addon-mcp` | ライブ MCP サーバの instructions がハードコードで第三者拡張が不可（T23） | `dist/preset.js` の `instructions` getter が外部のメタデータを受けるようになったか |
| `eslint` 10 | `eslint-plugin-jsx-a11y` / `eslint-plugin-react` の peer が `^9` まで | 両プラグインの peer 宣言 |
| `typescript` 7 | ネイティブコンパイラ化にビルドチェーンが未追随 | 依存側の対応状況 |
| `i18next-http-backend` 4 | `storybook-react-i18next` の peer 宣言 | 同上 |
| `@changesets/cli` 3 | `changesets/action@v1` が `changeset publish` の stdout を `/New tag:/` で読むが、cli 3 はその行を出さない（2026-08-16 調査） | **単独では判定しない。** cli 3 + `changesets/action@v2` + `release.yml` の入力名（`version` → `version-script` / `publish` → `publish-script`）を**同時に**変える覚悟があるか |

> **`@changesets/cli` 3 は「上げると赤が出ずにリリースが壊れる」型。** `changesets/action@v1` は publish の標準出力を正規表現で読んで publish 済みを判定している（`src/run.ts`: `let newTagRegex = /New tag:/`）。cli 3.0.0 の dist にはこの文字列が無く、代わりに `Creating git tags...` を出す。したがって **npm publish は成功したまま `published: false` と判定され、`git.pushTag` と GitHub Release の作成が丸ごとスキップされる**。ワークフローは緑で終わる。実際この 2 つは動いており（`v0.23.16` の Release と タグが存在する）、止まっても誰も気付かない。
>
> action v2 は NDJSON の構造化イベント（`type: "git-tag"`）で判定するため **cli 3 とセットでしか動かない**（v2 は cli 2 を検出して v1 へ誘導する）。片方だけ上げる道は無い。
>
> **鏡側も塞いだ（2026-08-16）。** npm 側の ignore を入れた直後、Dependabot が **github-actions 側から `changesets/action` v1 → v2 を出してきた**（#433。設定変更の push が即時チェックを走らせるため）。**エコシステムが 2 つある依存は、片方を塞いでも反対側から同じ結合が来る。** こちら向きは cli 2 を検出して落ちる＝赤が出るぶん silent ではないが、いずれにせよ単独では動かないので `github-actions` セクションにも major の ignore を足した。

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

### 6. VRT / a11y に写っていない variant・状態を洗う

写っていないものは、**変えても壊しても赤が出ない**。

```bash
# variant / intent の値ごとに、ストーリーで使われている回数を数える
for v in solid outline subtle; do printf "%-10s %s\n" "$v" "$(grep -rho "variant=\"$v\"" stories/ sandbox/ | wc -l)"; done
```

> 実例: `Chip` の `subtle` は 3 つの variant のうちここだけ**どのストーリーにも出ていなかった**（2026-08-07 に追加）。`LoadingOverlay` は 8 ストーリーすべてが `position: relative` の親で包んでおり、**素直に書いたときの姿を一度も撮っていなかった**。

### 7. まだ合成画面で使っていないコンポーネントを数える

**2026-08-15 以降**: この走査はカタログのカバー率には使わない（T179）。残件の台帳は `IMPROVEMENTS.md` の「プローブ残件」（T180）。**数え直して Pattern ページを書かないこと。** 下のスニペットと時点記録は履歴。

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

**2026-08-09 時点**: **371 件中 未合成 144**（6 枚目 `Patterns/Captions/CaptionReview` が `AppShell` / `Navbar` / `Footer` とオーバーレイ層を埋めた）。カテゴリ別の残りは form 28 / data-display 28 / overlay 15 / ai 14 / layout 13 / charts 12 / navigation 10 / media 8 / feedback 11 / typography 5。次の 3 枚は `IMPROVEMENTS.md` の T95（7 枚目）/ T109（8 枚目）/ T110（9 枚目）。

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

### 11. GitHub Actions の runner image と actions の major

`ubuntu-24.04` の更新、`actions/*` の major。**これらを差し替える PR は `vrt.yml` / `a11y.yml` 自身を書き換える**ので、T92 で `paths` に自分自身を足してある（足す前は VRT も a11y も走らなかった）。

### 12. a11y 全量の再測定（T68）

同一コミットで複数回流し、赤の集合が一致するかを見る。**1 ラン 4 シャード × 約 9 分の CI 律速**なので、回数を増やす費用対効果は低い。2026-08-05 に 5 回流して 5 回とも緑だったが、**それは非決定性が消えた証明ではない**（起票時も赤は 1〜2 件で、緑を引くことはありうる）。

### 13. VRT スナップショットの衛生

```bash
ls vrt/vrt.spec.ts-snapshots/*.png | wc -l
ls vrt/vrt.spec.ts-snapshots/ | sed 's/.*-\(chromium-[a-z0-9]*\)\.png/\1/' | sort | uniq -c
ls vrt/vrt.spec.ts-snapshots/ | grep -c '^light-'; ls vrt/vrt.spec.ts-snapshots/ | grep -c '^dark-'
```

**2026-08-07 時点**: 1990 枚すべて `chromium-linux`、light 995 / dark 995 で対称。かつては CI 未使用の `chromium-win32` が 2,942 枚、削除済みストーリーの orphan が 80 枚あった（T11）。

---

## ベースライン更新を含む PR は**直列に**着地させる

`--update-snapshots=all` は全量を撮り直すので、**内容が同じでもバイト列が変わる PNG が毎回 100 枚前後**生まれる。ベースラインを触る PR を 2 本並行させると、**必ず衝突する**（2026-08-07 に #288 と #289 で 2 回発生。衝突したのはどちらも撮り直しノイズの PNG だった）。

衝突したときの解き方は、**そのブランチがベースラインを正当に所有しているか**で変わる:

- **所有していない**（compare で「既存 0 枚が動く」と実証済み）→ main のベースラインを丸ごと採る。新規追加分だけ残す
- **所有している**（意図した差分がある）→ main のベースラインに揃え直してから、**update をもう 1 回走らせて撮り直す**。146 枚のコミットバックから正しい 36 枚を手で選り分けようとしない
