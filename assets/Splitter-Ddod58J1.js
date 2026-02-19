import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-6bcfPm2a.js";import{M as l,C as i,a as c}from"./index-BLFIKG6L.js";import{S as h,H as t,V as o,M as x,N as j,C as p}from"./Splitter.stories-D3TtZrAf.js";import"./iframe-DR2UsQ0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9pUUXKS.js";import"./index-Cq8dXl4I.js";import"./index-DHSzm0Tv.js";import"./index-REnd3jZz.js";import"./index-DDH3cDFS.js";import"./index-DALvJQM_.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"splitter",children:"Splitter"}),`
`,e.jsx(n.p,{children:"Splitter は、複数のパネルをドラッグ操作でリサイズできるようにするレイアウトコンポーネントです。"}),`
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
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h3,{id:"垂直方向-vertical",children:"垂直方向 (Vertical)"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"複数パネル",children:"複数パネル"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"入れ子-nested",children:"入れ子 (Nested)"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"サイズ制限-constraints",children:"サイズ制限 (Constraints)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"minSize"})," や ",e.jsx(n.code,{children:"maxSize"})," プロパティを使用して、パネルのリサイズ範囲を制限できます。"]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"splitter-props",children:"Splitter Props"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.h3,{id:"splitterpanel-props",children:"Splitter.Panel Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"初期サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:"最小サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:"最大サイズ（パーセンテージ）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"内容"})]})]})]}),`
`,e.jsx(n.h3,{id:"splitterhandle-props",children:"Splitter.Handle Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"カスタムハンドル要素（オプション）"})]})})]})]})}function N(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{N as default};
