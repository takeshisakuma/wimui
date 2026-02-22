import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BGL9TZGx.js";import{M as l,C as t,a as c}from"./index-D4sSE8IR.js";import{S as h,H as i,V as o,M as x,N as j,C as p}from"./Splitter.stories-DbIH5FsA.js";import"./iframe-BwYkIQ_M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVy1X-zX.js";import"./index-Cyn8bshH.js";import"./index-DpOA-gKO.js";import"./index-C3AZLzgw.js";import"./index-ZdojNgYZ.js";import"./index-BsX1a6mg.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"splitter",children:"Splitter"}),`
`,e.jsx(n.p,{children:"Splitter は、複数のパネルをドラッグ操作でリサイズできるようにするレイアウトコンポーネントです。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"PCのみ"}),": ドロップ＆ドラッグ等のポインター操作によるリサイズ機能は、主にPC環境向けに設計されています。タッチデバイスでの利用は想定されていません。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用方法",children:"使用方法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Splitter } from "wimui";\r
\r
<Splitter orientation="horizontal">\r
  <Splitter.Panel defaultSize={30}>\r
    Left Content\r
  </Splitter.Panel>\r
  <Splitter.Handle />\r
  <Splitter.Panel defaultSize={70}>\r
    Right Content\r
  </Splitter.Panel>\r
</Splitter>
`})}),`
`,e.jsx(n.h2,{id:"例",children:"例"}),`
`,e.jsx(n.h3,{id:"水平方向-horizontal",children:"水平方向 (Horizontal)"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"垂直方向-vertical",children:"垂直方向 (Vertical)"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h3,{id:"複数パネル",children:"複数パネル"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"入れ子-nested",children:"入れ子 (Nested)"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"サイズ制限-constraints",children:"サイズ制限 (Constraints)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"minSize"})," や ",e.jsx(n.code,{children:"maxSize"})," プロパティを使用して、パネルのリサイズ範囲を制限できます。"]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"splitter-props",children:"Splitter Props"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h3,{id:"splitterpanel-props",children:"Splitter.Panel Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"初期サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:"最小サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:"最大サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"内容"})]})]})]}),`
`,e.jsx(n.h3,{id:"splitterhandle-props",children:"Splitter.Handle Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"カスタムハンドル要素（オプション）"})]})})]})]})}function D(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{D as default};
