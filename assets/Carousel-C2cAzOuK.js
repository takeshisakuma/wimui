import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-C9ZFQ_0m.js";import{M as l,C as e,a as d}from"./index-RYSs9EKH.js";import{C as c,B as h,M as x,R as j,A as t,N as a,W as p}from"./Carousel.stories-QQBSLf59.js";import"./iframe-CKiqJKW4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRBCKS-Q.js";import"./index-8Tz5iwKS.js";import"./index-qvl2c327.js";import"./index-BVk5RRS3.js";import"./Icon-DtkPysao.js";import"./imagesanple-VDI2Kzk_.js";function i(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(s.h1,{id:"carousel",children:"Carousel"}),`
`,n.jsxs(s.p,{children:["Carousel（カルーセル）は、複数のコンテンツをスライドさせて表示するためのコンポーネント",n.jsx("br",{}),`\r
シームレスなループ、レスポンシブな表示数設定に対応している`]}),`
`,n.jsx(s.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"無限ループ"}),": 最後のスライドから次に進むと、最初のスライドがスムーズに現れる"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"表示数のカスタマイズ"}),": ",n.jsx(s.code,{children:"slidesToShow"})," プロパティで、一度に表示するスライドの数を指定できる"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"レスポンシブ対応"}),": デバイスの幅に応じて表示数を自動的に切り替えることができる"]}),`
`]}),`
`,n.jsx(s.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(s.h3,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"loop={true}"}),"（デフォルト）により、シームレスな無限ループが有効"]}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(s.h3,{id:"表示数の指定",children:"表示数の指定"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"slidesToShow"})," で一度に表示するスライドの数を指定できる"]}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(s.h3,{id:"レスポンシブ対応",children:"レスポンシブ対応"}),`
`,n.jsx(s.p,{children:"ブレークポイントごとに表示数を指定できる"}),`
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
`,n.jsx(e,{of:j}),`
`,n.jsx(s.h3,{id:"自動再生",children:"自動再生"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"autoPlay"})," プロパティを ",n.jsx(s.code,{children:"true"})," に設定すると、一定間隔で自動的にスライドが切り替わる"]}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(s.h3,{id:"ループなし",children:"ループなし"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"loop={false}"})," を設定すると、最初と最後のスライドで停止し、端のボタンが無効になります。"]}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(s.h3,{id:"画像の使用例",children:"画像の使用例"}),`
`,n.jsx(s.p,{children:"実際の画像を使用した例です。"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(s.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{}),`
`,n.jsx(s.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["前後ボタンには適切な ",n.jsx(s.code,{children:"aria-label"})," が設定されている"]}),`
`,n.jsxs(s.li,{children:["インジケーターには ",n.jsx(s.code,{children:"aria-current"})," が設定され、現在表示中のスライドを示している"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"infinite loop"})," 実装では、クローンされた要素を使用してシームレスな遷移を実現している"]}),`
`]})]})}function N(r={}){const{wrapper:s}={...o(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(i,{...r})}):i(r)}export{N as default};
