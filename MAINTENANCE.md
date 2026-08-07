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

**2026-08-08 時点の実測**: CI で走る 43 件 ／ lint-staged だけ 3 件（`check:casing` / `check:links` / `check:intent-text` ── いずれも全量で走らせても緑）／ どこからも呼ばれない 1 件（`check:consistency`。しかも `process.exit` を 1 つも持たず、**何を見つけても exit 0** で終わる）。

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

---

## リリース前

### 7. 公開物を**実物で**確かめる

リポジトリに置いてあることと、`npm` から取れることは別。

```bash
npm pack
tar -tzf wimui-*.tgz | head -30      # 入っているもの
tar -xzf wimui-*.tgz && ls package/  # NOTICE / dist / llms.txt
```

> 実例: 公開済み 0.15.0 の tarball を取ったら `NOTICE` が入っていなかった（T80）。「リポジトリにある」では確認になっていない。

### 8. README / llms.txt の主張と `package.json` の一致

ガードがある。リリース前に手でも通す。

```bash
npm run check:readme && npm run check:examples && npm run check:llms && npm run check:sandbox-pin
```

**`check:llms` はリリース PR で必ず落ちる**（`llms.txt` が `package.json` の version を埋め込むため、`changeset version` の直後は必ず不一致）。手順は `RELEASING.md` を見ること。

---

## 四半期

### 9. Node の EOL と `engines`

下限は「**CI で検証している非 EOL の LTS**」に保つ。いまは `>=22`。**次の見直しは Node 22 の EOL（2027-04）前**。

### 10. GitHub Actions の runner image と actions の major

`ubuntu-24.04` の更新、`actions/*` の major。**これらを差し替える PR は `vrt.yml` / `a11y.yml` 自身を書き換える**ので、T92 で `paths` に自分自身を足してある（足す前は VRT も a11y も走らなかった）。

### 11. a11y 全量の再測定（T68）

同一コミットで複数回流し、赤の集合が一致するかを見る。**1 ラン 4 シャード × 約 9 分の CI 律速**なので、回数を増やす費用対効果は低い。2026-08-05 に 5 回流して 5 回とも緑だったが、**それは非決定性が消えた証明ではない**（起票時も赤は 1〜2 件で、緑を引くことはありうる）。

### 12. VRT スナップショットの衛生

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
