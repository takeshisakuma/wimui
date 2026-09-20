# アイコンの規則

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# アイコン

- アイコンは `src/icon/` に SVG ファイルを配置してください。配置されたファイルは、Vite ビルド時および保存時に 自動的に React コンポーネントおよびマッピング定義として `src/icon/index.ts` へエクスポートされます。
- 開発者が手動で `Icon.tsx` のインポートや型定義を更新する必要はありません。
- コンポーネント内でアイコンを使用する場合は、`Icon` コンポーネントの `name` prop にアイコン名（例: `name="CheckIcon"`）を渡すか、`src/icon/` から直接コンポーネントをインポートして `component` prop（例: `component={CheckIcon}`）に渡してください。後者は Tree-shaking に最適です。

## SVG の描き方（`npm run check:icons` で強制）

出荷アイコンは **1 つの線画ファミリー**です。以下は好みではなく契約で、外れると同じ画面に置いたときに**線幅が揃っていても重さが揃いません**（塗りのアイコンは線画の 2〜4 倍のインク量になります）。新規追加はこの形で描いてください。

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12" />
</svg>
```

| 項目 | 値 | 理由 |
|---|---|---|
| `viewBox` | `0 0 24 24` | 座標系を 1 つに保つ。`Icon` は `1em` に追従させるので、ここが違うと同じ `size` でも実寸が変わる |
| `stroke-width` | **`2` 単一値** | ファイル内で 2 種類使わない（太さが混ざると同じ画面で別ファミリーに見える） |
| `stroke-linecap` / `stroke-linejoin` | `round` | 角丸のスタンスをセット全体で揃える |
| `fill` | `none`（線画） | **塗りのアイコンを混ぜない。** 例外は「点」を意味する `circle` のような形だけで、その場合も理由をファイル冒頭のコメントに書く |
| 色 | `currentColor` | 色は必ず継承させる。`#000` 等の直書き禁止 |
| `width` / `height` 属性 | **付けない** | `Icon` が `1em` を当てるので無意味。あると出所の違いが差分に残る |

- **アイコンを足したら `npm run check:icons:provenance` を通してください（`audit:lib` にも入っています）。** 出荷アイコンの中身を Feather / Lucide と突き合わせ、`scripts/icon-provenance.json` の記録とずれたら止まります。**「自分で描いた」という記憶は出所の証拠になりません** ── 2026-08-05 に、契約に沿って描いたつもりの 2 個（`loading` / `square`）が Lucide とバイト一致でした。上流と一致していれば `NOTICE` にその表示が必要になります。記録の更新は `node scripts/check-icon-provenance.js --update` で、**`NOTICE` も必ず一緒に直します**。
- **描き足す前に、代用が起きていないか確認してください。** 記号（`↑` `→`）や自前 SVG で代わりをしているなら、それは「アイコンが足りない」というより「セットに語彙が無い」問題です（`IMPROVEMENTS.md` の T78）。
- **形が同じで名前だけ違うものを増やさないこと。** 既に `align-justify` == `menu`、ホットドッグ == `minus` の重複が出荷されています（T65）。
- 見た目の重さを数値で確かめたいときは、24px 相当で描画して不透明ピクセルの平均濃度（インク量）を測り、**セットの中央値の 0.5〜1.5 倍**に収まるかを見ます。

---

## アイコン・パイプライン (SVGR Integration)

`src/icon/` に SVG を追加するだけで React コンポーネントとして利用可能になる自動化パイプラインが導入されています。

### 使用方法

1.  SVG を追加: `src/icon/` ディレクトリに新しい `.svg` ファイルを置きます（例: `my-icon.svg`）。
2.  自動生成: 保存時またはビルド時に `src/icon/index.ts` が自動更新され、`MyIconIcon` としてエクスポートされます。
3.  コンポーネントで使う:
    -   動的指定 (Name-based Lookup):
        ```tsx
        <Icon name="MyIconIcon" />
        ```
    -   静的インポート (Tree-shaking 向け):
        ```tsx
        import { MyIconIcon } from "@/icon";
        <Icon component={MyIconIcon} />
        ```

### メリット
-   手動更新の排除: `Icon.tsx` の巨大な `switch` 文やマッピングオブジェクトを手動で管理する必要がなくなります。
-   Tree-shaking: 個別のエクスポート形式を提供しているため、使用していないアイコンは最終ビルドから削除されます。
-   TypeScript サポート: `IconName` 型が自動的に更新され、無効なアイコン名を指定するとコンパイルエラーになります。
