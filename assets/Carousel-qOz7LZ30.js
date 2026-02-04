import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CupEk5JK.js";import{M as l,C as r,a as d}from"./index-B9rMTvYD.js";import{C as c,B as h,M as x,R as j,A as t,N as a}from"./Carousel.stories-CIUDjbYc.js";import"./iframe-CgGi8QfL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK8MAJKK.js";import"./index-cV0NH7_w.js";import"./index-C-hsx5Wr.js";import"./index-D18CoHLM.js";import"./Icon-DcD4NQaU.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(s.h1,{id:"carousel",children:"Carousel"}),`
`,n.jsx(s.p,{children:"Carousel（カルーセル）は、複数のコンテンツをスライドさせて表示するためのコンポーネントです。シームレスなループ、レスポンシブな表示数設定に対応しています。"}),`
`,n.jsx(s.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"無限ループ"}),": 最後のスライドから次に進むと、最初のスライドがスムーズに現れます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"表示数のカスタマイズ"}),": ",n.jsx(s.code,{children:"slidesToShow"})," プロパティで、一度に表示するスライドの数を指定できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"レスポンシブ対応"}),": デバイスの幅に応じて表示数を自動的に切り替えることができます。"]}),`
`]}),`
`,n.jsx(s.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(s.h3,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"loop={true}"}),"（デフォルト）により、シームレスな無限ループが有効です。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(s.h3,{id:"表示数の指定",children:"表示数の指定"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"slidesToShow"})," で一度に表示するスライドの数を指定できます。"]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(s.h3,{id:"レスポンシブ対応",children:"レスポンシブ対応"}),`
`,n.jsx(s.p,{children:"ブレークポイントごとに表示数を指定できます。"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`<Carousel \r
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
`,n.jsx(r,{of:j}),`
`,n.jsx(s.h3,{id:"自動再生",children:"自動再生"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"autoPlay"})," プロパティを ",n.jsx(s.code,{children:"true"})," に設定すると、一定間隔で自動的にスライドが切り替わります。"]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(s.h3,{id:"ループなし",children:"ループなし"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"loop={false}"})," を設定すると、最初と最後のスライドで停止し、端のボタンが無効になります。"]}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(s.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{}),`
`,n.jsx(s.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["前後ボタンには適切な ",n.jsx(s.code,{children:"aria-label"})," が設定されています。"]}),`
`,n.jsxs(s.li,{children:["インジケーターには ",n.jsx(s.code,{children:"aria-current"})," が設定され、現在表示中のスライドを示します。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"infinite loop"})," 実装では、クローンされた要素を使用してシームレスな遷移を実現しています。"]}),`
`]})]})}function D(e={}){const{wrapper:s}={...o(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{D as default};
