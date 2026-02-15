import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CpFiB6ue.js";import{M as e}from"./index-CXf5e_bV.js";import"./T-B3AFHBdm.js";import"./Icon-CjXlYNhp.js";import"./iframe-DCP7Q_DB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPr30mO6.js";import"./index-C8r2V7IH.js";import"./index-DvPvgKD0.js";import"./index-jamwwvbr.js";import"./index-CJK2m6bn.js";import"./useTranslation-bFPHz6-h.js";import"./index-DROgmfby.js";function d(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...t(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{title:"Guides/Icons"}),`
`,r.jsx(s.h1,{id:"icons",children:"Icons"}),`
`,r.jsx(s.p,{children:"アプリケーション全体で使用するアイコンの設計指針と使い分けについてのガイドです。"}),`
`,r.jsxs(s.p,{children:["具体的な ",r.jsx(s.code,{children:"Icon"})," コンポーネントの使用方法や、利用可能なアイコンの一覧については、",r.jsx(s.a,{href:"?path=/docs/component-typography-icons-icon--docs",children:"Icon コンポーネントのドキュメント"})," を参照してください。"]}),`
`,r.jsx(s.h2,{id:"アイコンの使い分け指針",children:"アイコンの使い分け指針"}),`
`,r.jsx(s.h3,{id:"線-outline-が向いているケース",children:"線 (Outline) が向いているケース"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"場所"}),r.jsx("th",{})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"ナビゲーションメニュー(未選択時)（サイドバー・タブバー）"}),r.jsxs("td",{children:[" 全てが「塗り」だと画面が重苦しくなるが、「線」にすることでコンテンツ（中身）を主役にできまる",r.jsx("br",{}),`\r
挙動: 普段は「線」、クリックして選択されたら「塗り」に切り替える`]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"アイコンが密集する場所"}),r.jsx("td",{children:"例：ツールバーなど"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"情報の密度が高い場所"}),r.jsxs("td",{children:["ツールバーのようにアイコンが横並びで大量に並ぶとき、「塗り」だと視覚的なノイズ(黒い塊)が多くなりすぎて疲れるが、「線」ならスッキリと整列して見える",r.jsx("br",{}),`\r
例：B2Bツールや管理画面、デザインツールやドキュメント作成ソフトの操作パネル`]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"カードコンポーネント内の補助情報"}),r.jsxs("td",{children:["カード内の主役の「画像」や「タイトル」の邪魔をせず、必要な時だけ認識できる控えめな表現にする",r.jsx("br",{}),`\r
「お気に入り（ハート）」や「共有（シェア）」、「時間（時計）」など`]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"入力フォーム（Input Field）内の装飾"}),r.jsxs("td",{children:["アイコンが目立ちすぎると入力の邪魔になるので、細い線で添える",r.jsx("br",{}),`\r
例：検索バーの「虫眼鏡」や、パスワード入力欄の「目（表示/非表示）」アイコン`]})]})]})]}),`
`,r.jsx(s.h3,{id:"塗りつぶし-filled-が向いているケース",children:"塗りつぶし (Filled) が向いているケース"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"場所"}),r.jsx("th",{})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"選択状態(Active)の表現"}),r.jsx("td",{children:"例：タブバーで今開いている項目"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"重要なアクションボタン"}),r.jsx("td",{children:"例：削除、保存、追加など"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"複雑な背景の上"}),r.jsx("td",{})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"非常に小さいサイズでの表示"}),r.jsx("td",{})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"強いメッセージを持つコンポーネント"}),r.jsx("td",{children:"例：「警告（!）」や「エラー（×）」"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"ボタン内のアイコン"}),r.jsxs("td",{children:["視覚的なバランスを取りやすい",r.jsx("br",{}),`\r
ボタンの背景色に埋もれない`,r.jsx("br",{}),`\r
シルエットがはっきりするので、一目でアイコンの意味を理解できる`]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"テキストの頭に配置するアイコン"}),r.jsxs("td",{children:["視覚的なバランスを取りやすい",r.jsx("br",{}),`\r
主役であるテキストの邪魔をしない、「補助役」のため控えめな表現が適している`,r.jsx("br",{}),`\r
シルエットがはっきりしているため、テキストと並べても埋もれにくく、アイコンの存在を認識しやすい`,r.jsx("br",{}),`\r
テキストが太字（Bold）の場合: 塗りにすると文字の強さに負けない`,r.jsx("br",{}),`\r
テキストが標準(Regular)の場合:塗りにすると、「箇条書きのバレット」のように、視線を誘導するガイドとして機能する`]})]})]})]})]})}function y(n={}){const{wrapper:s}={...t(),...n.components};return s?r.jsx(s,{...n,children:r.jsx(d,{...n})}):d(n)}export{y as default};
