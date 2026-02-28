import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CmxFiERU.js";import{M as c,C as s,a as t}from"./blocks-C-hgfApg.js";import{H as a,P as o,D as l,B as h,G as x,S as j}from"./Header.stories-C_LWZ3M7.js";import{T as p}from"./T-9MrW2l-B.js";import"./iframe-DucY8PCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lsUD8MDW.js";import"./index-C_Vr7lCO.js";import"./index-BULwwhUN.js";import"./index-CpnJMwY8.js";import"./Header-CE94Vo9h.js";import"./index-CYKEKBJn.js";import"./useTranslation-Cfa0KY3M.js";function d(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(p,{k:"doc_header_title"})}),`
`,e.jsx(n.p,{children:"Headerは、ページの上部やセクションの上部に配置される汎用的なヘッダーコンポーネントです。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["📘 Guide: See ",e.jsx(n.a,{href:"?path=/docs/guides-app-layout--docs",children:"Guides / App Layout"})," for layout patterns."]}),`
`]}),`
`,e.jsx(n.h2,{id:"インターアクティブなデモ-playground",children:"インターアクティブなデモ (Playground)"}),`
`,e.jsxs(n.p,{children:["以下の Controls を使用して、",e.jsx(n.code,{children:"bordered"}),", ",e.jsx(n.code,{children:"glass"}),", ",e.jsx(n.code,{children:"background"})," などのプロパティをリアルタイムで変更し、挙動を確認できます。"]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h2,{id:"インポート",children:"インポート"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import Header from "@/components/Header/Header";
`})}),`
`,e.jsx(n.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Header"})," コンポーネントの中に ",e.jsx(n.code,{children:"Header.Section"}),` を配置して使用します。
`,e.jsx(n.code,{children:"Header.Section"})," には ",e.jsx(n.code,{children:"align"}),' プロパティ ("start", "center", "end") を指定して、コンテンツの配置を制御できます。']}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"バリエーション",children:"バリエーション"}),`
`,e.jsx(n.h3,{id:"境界線-bordered",children:"境界線 (Bordered)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bordered"})," プロパティを使用すると、下部に境界線が表示されます。コンテンツの区切りを明確にするのに役立ちます。"]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"グラスモーフィズム-glassmorphism",children:"グラスモーフィズム (Glassmorphism)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"glass"})," プロパティを使用すると、背景にぼかし効果が適用されます。背景色が半透明になり、背面のコンテンツが透けて見えます。"]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"固定スティッキーヘッダー-sticky",children:"固定/スティッキーヘッダー (Sticky)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sticky"})," または ",e.jsx(n.code,{children:"fixed"})," プロパティを使用することで、スクロール時にヘッダーを追従させることができます。"]}),`
`,e.jsx(s,{of:j})]})}function q(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{q as default};
