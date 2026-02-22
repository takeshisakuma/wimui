import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DO2lBYjB.js";import{M as l,C as r,a as h}from"./index-C4-6wvZZ.js";import{C as c,B as x,M as j,R as t,A as o,N as a,W as p,a as u}from"./Carousel.stories-UVV79_vX.js";import{T as m}from"./T-D3Jf8nC4.js";import"./iframe-B26gg4xa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DakxIVxD.js";import"./index-B1JjXUQw.js";import"./index-CHVKF0mU.js";import"./index-DMfHpqmo.js";import"./index-CW4--Tzu.js";import"./index-B4VeCX-Y.js";import"./Icon-CkBiA6DD.js";import"./imagesanple-VDI2Kzk_.js";import"./useTranslation-BcvmeLdz.js";function e(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{of:c}),`
`,s.jsx(n.h1,{id:"carousel",children:"Carousel"}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(m,{k:"doc_carousel_title"})}),`
`,s.jsxs(n.p,{children:["Carousel（カルーセル）は、複数のコンテンツをスライドさせて表示するためのコンポーネント",s.jsx("br",{}),`\r
シームレスなループ、レスポンシブな表示数設定に対応している`]}),`
`,s.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"無限ループ: 最後のスライドから次に進むと、最初のスライドがスムーズに現れる"}),`
`,s.jsxs(n.li,{children:["表示数のカスタマイズ: ",s.jsx(n.code,{children:"slidesToShow"})," プロパティで、一度に表示するスライドの数を指定できる"]}),`
`,s.jsx(n.li,{children:"レスポンシブ対応: デバイスの幅に応じて表示数を自動的に切り替えることができる"}),`
`]}),`
`,s.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,s.jsx(n.h3,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"loop={true}"}),"（デフォルト）により、シームレスな無限ループが有効"]}),`
`,s.jsx(r,{of:x}),`
`,s.jsx(n.h3,{id:"表示数の指定",children:"表示数の指定"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"slidesToShow"})," で一度に表示するスライドの数を指定できる"]}),`
`,s.jsx(r,{of:j}),`
`,s.jsx(n.h3,{id:"レスポンシブ対応",children:"レスポンシブ対応"}),`
`,s.jsx(n.p,{children:"ブレークポイントごとに表示数を指定できる"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-tsx",children:`<Carousel \r
  slidesToShow={{\r
    base: 1,  // スマホ\r
    sm: 2,    // タブレット\r
    md: 3,    // PC\r
    lg: 4     // ワイド\r
  }}\r
>\r
  {/* slides */}\r
</Carousel>
`})}),`
`,s.jsx(r,{of:t}),`
`,s.jsx(n.h3,{id:"自動再生",children:"自動再生"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"autoPlay"})," プロパティを ",s.jsx(n.code,{children:"true"})," に設定すると、一定間隔で自動的にスライドが切り替わる"]}),`
`,s.jsx(r,{of:o}),`
`,s.jsx(n.h3,{id:"ループなし",children:"ループなし"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"loop={false}"})," を設定すると、最初と最後のスライドで停止し、端のボタンが無効になります。"]}),`
`,s.jsx(r,{of:a}),`
`,s.jsx(n.h3,{id:"画像の使用例",children:"画像の使用例"}),`
`,s.jsx(n.p,{children:"実際の画像を使用した例です。"}),`
`,s.jsx(r,{of:p}),`
`,s.jsx(n.h3,{id:"アスペクト比の指定",children:"アスペクト比の指定"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"aspectRatio"})," を指定することで、画像の高さを統一し、アスペクト比を維持したまま切り抜いて表示（",s.jsx(n.code,{children:'objectFit="cover"'}),`）させることができます。\r
縦長や横長の画像が混在している場合に、全体の高さを揃えるのに便利です。`]}),`
`,s.jsx(r,{of:u}),`
`,s.jsx(n.h2,{id:"props",children:"Props"}),`
`,s.jsx(h,{}),`
`,s.jsx(n.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["前後ボタンには適切な ",s.jsx(n.code,{children:"aria-label"})," が設定されている"]}),`
`,s.jsxs(n.li,{children:["インジケーターには ",s.jsx(n.code,{children:"aria-current"})," が設定され、現在表示中のスライドを示している"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"infinite loop"})," 実装では、クローンされた要素を使用してシームレスな遷移を実現している"]}),`
`]}),`
`,s.jsx(n.h2,{id:"carousel-uiとは",children:"Carousel UIとは?"}),`
`,s.jsx(n.p,{children:`カルーセルUI (Carousel UI) は、限られたスペースで複数の画像やコンテンツをスライドショーのように切り替えて表示する手法です。\r
「カルーセル（carousel）」の語源は回転木馬（メリーゴーラウンド）に由来し、モバイルデバイスの普及とともに、省スペースで多くの情報を伝える手段として一般化しました。`}),`
`,s.jsx(n.h3,{id:"スライドショースライダーとの違い",children:"スライドショー・スライダーとの違い"}),`
`,s.jsx(n.p,{children:"厳密な定義はありませんが、以下のように使い分けられることがあります。"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"用語"}),s.jsx("th",{children:"特徴"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"カルーセル"})}),s.jsx("td",{children:"複数のコンテンツが回転するように表示され、ユーザーが手動で操作（スワイプ/クリック）できる。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"スライドショー"})}),s.jsx("td",{children:"自動的に切り替わる機能が主で、手動操作が限定的な場合が多い。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"スライダー"})}),s.jsx("td",{children:"自由度が高く、数値を調整するUI（レンジスライダー）を指すこともあるが、画像切り替えの意味ではカルーセルに近い。"})]})]})]}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"導入のメリット",children:"導入のメリット"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"メリット"}),s.jsx("th",{children:"説明"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"省スペース化"})}),s.jsx("td",{children:"限られた領域（特にモバイル画面）に多くの情報を詰め込める。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"注目を集めやすい"})}),s.jsx("td",{children:"動きのあるUIは視覚的にユーザーの目を引く。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"要素の強調"})}),s.jsx("td",{children:"1つずつ大きく表示することで、個々のコンテンツに集中させることができる。"})]})]})]}),`
`,s.jsx(n.h2,{id:"注意点とデメリット",children:"注意点とデメリット"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"課題"}),s.jsx("th",{children:"説明"}),s.jsx("th",{children:"対策"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"2枚目以降が見られにくい"})}),s.jsx("td",{children:"ユーザーがスライド操作に気づかない場合がある。"}),s.jsx("td",{children:s.jsxs("ul",{children:[s.jsx("li",{children:"次のスライドを少し見切れさせる（チラ見せ）"}),s.jsx("li",{children:"インジケーターを設置する"})]})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"パフォーマンスへの影響"})}),s.jsx("td",{children:"大きな画像やスクリプトが読み込み速度を低下させる可能性がある。"}),s.jsx("td",{children:s.jsxs("ul",{children:[s.jsx("li",{children:"画像の遅延読み込み (Lazy loading)"}),s.jsx("li",{children:"スクリプトの軽量化"})]})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ユーザーへのストレス"})}),s.jsx("td",{children:"自動切り替えが速すぎたり、操作が直感的でないと離脱につながる。"}),s.jsx("td",{children:s.jsxs("ul",{children:[s.jsx("li",{children:"停止ボタンの設置"}),s.jsx("li",{children:"適切な切り替え速度"}),s.jsx("li",{children:"手動操作の優先"})]})})]})]})]}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"機能要件-functional-requirements",children:"機能要件 (Functional Requirements)"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"要件"}),s.jsx("th",{children:"詳細"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"移動ボタン"})}),s.jsx("td",{children:"左右の矢印ボタンやスワイプ操作で前後に移動できること。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"タッチ操作（スワイプ）"})}),s.jsx("td",{children:"モバイル環境では、「横にスワイプしてスライドさせる」直感的なタッチドラッグ操作に対応しています。一方で、PC（マウス操作）環境では、無意識な画像・テキストのブラウザ標準選択（ドラッグ保存など）を防ぐため、敢えてマウスドラッグによるスライド操作は実装せず、矢印ボタンやインジケーターのみでの操作としています。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"インジケーター"})}),s.jsx("td",{children:"現在位置を示し、特定のスライドへ直接ジャンプできること（ドットなど）。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"自動回転の制御"})}),s.jsx("td",{children:"ユーザーが操作中は一時停止する、または停止ボタンを提供する。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ループ機能"})}),s.jsx("td",{children:"最後のスライドから最初に戻るシームレスなループ。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"キーボード操作"})}),s.jsx("td",{children:"矢印キーで移動できるなど、アクセシビリティへの配慮。"})]})]})]}),`
`,s.jsx(n.h2,{id:"実装採用時のポイント",children:"実装・採用時のポイント"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"ポイント"}),s.jsx("th",{children:"詳細"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"コンテンツの吟味"})}),s.jsx("td",{children:"テーマを統一し、スライド枚数は3〜5枚程度に抑える。重要な情報は1枚目に。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"レスポンシブ対応"})}),s.jsx("td",{children:"PCでは複数カラム、SPでは1カラムなど、デバイスに応じた表示。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"直感的な操作性"})}),s.jsx("td",{children:"「スワイプできそう」「クリックできそう」な視覚的アフォーダンスを提供する。"})]})]})]})]})}function D(d={}){const{wrapper:n}={...i(),...d.components};return n?s.jsx(n,{...d,children:s.jsx(e,{...d})}):e(d)}export{D as default};
