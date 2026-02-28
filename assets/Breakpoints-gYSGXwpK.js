import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-CmxFiERU.js";import{M as i}from"./blocks-C-hgfApg.js";import"./iframe-DucY8PCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lsUD8MDW.js";import"./index-C_Vr7lCO.js";import"./index-BULwwhUN.js";import"./index-CpnJMwY8.js";function s(r){const e={code:"code",pre:"pre",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Token/Breakpoints"}),`
`,n.jsx("h1",{children:"ブレイクポイント (Breakpoints)"}),`
`,n.jsx("p",{children:"wim UIはレスポンシブデザインに対応しており、以下のブレイクポイントを基準にしてレイアウトが切り替わります。"}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:"ブレイクポイント一覧"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"キー"}),n.jsx("th",{children:"サイズ幅 (min-width)"}),n.jsx("th",{children:"想定されるデバイス"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"sm"})}),n.jsx("td",{children:"576px"}),n.jsx("td",{children:"大型のスマートフォン、または縦向きの小さなタブレット"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"md"})}),n.jsx("td",{children:"768px"}),n.jsx("td",{children:"タブレット（iPadなど）の縦向き"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"lg"})}),n.jsx("td",{children:"992px"}),n.jsx("td",{children:"ノートPC、タブレットの横向き"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"xl"})}),n.jsx("td",{children:"1200px"}),n.jsx("td",{children:"大型のデスクトップモニター"})]})]})]}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:"SCSSでの利用方法 (Mixins)"}),`
`,n.jsxs("p",{children:["これらのトークンは、",n.jsx("code",{children:"src/tokens/_breakpoints.scss"})," 内でマップ変数 ",n.jsx("code",{children:"$breakpoints"})," として定義されており、メディアクエリを簡単に書くための Mixin も用意されています。"]}),`
`,n.jsx("h3",{children:n.jsx("code",{children:"@include up($breakpoint)"})}),`
`,n.jsxs("p",{children:["指定したブレイクポイント",n.jsx("strong",{children:"以上 (min-width)"}),"でスタイルを適用する「モバイルファースト」なレイアウトで使用します。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;\r
\r
.my-component {\r
  // デフォルト（スマートフォン等の小さい画面向け）\r
  display: block;\r
\r
  @include up(md) {\r
    // 画面幅が 768px 以上の時のスタイル\r
    display: flex;\r
  }\r
}
`})}),`
`,n.jsx("h3",{children:n.jsx("code",{children:"@include down($breakpoint)"})}),`
`,n.jsxs("p",{children:["指定したブレイクポイント",n.jsx("strong",{children:"以下 (max-width)"}),"でのみスタイルを適用する際に使用します。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;\r
\r
.my-button {\r
  padding: 16px;\r
\r
  @include down(sm) {\r
    // 画面幅が 576px 以下の時にだけパディングを小さくする\r
    padding: 8px;\r
  }\r
}
`})})]})}function m(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
