import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CFkbIIDV.js";import{M as d,C as o,a as t}from"./index-rpXTgLEU.js";import{S as c,D as a,C as l,a as p}from"./Sidebar.stories-C89NZCWC.js";import{T as h}from"./T-Ckb0fOKR.js";import"./iframe-BH0Ng3GP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AKsaZg1n.js";import"./index-cY8EZfiX.js";import"./index-tiSflvjO.js";import"./index-B6e3L0Dd.js";import"./index-CeziNkB0.js";import"./Sidebar-BCuBNyTp.js";import"./index-vBebSrq2.js";import"./Icon-Bbl_qIp5.js";import"./useTranslation-lavx0w9B.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(h,{k:"doc_sidebar_title"})}),`
`,e.jsx(n.p,{children:"Sidebarは、ページの横側に配置されるナビゲーションや情報のパネルです。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"PCのみ"}),": このコンポーネントは主にPC（マウス・キーボード操作）向けに設計されています。スマートフォンなどの小画面デバイスでは、",e.jsx(n.code,{children:"TabBar"}),"やドロワーメニューなどの代替手段を検討してください。"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["📘 Guide: See ",e.jsx(n.a,{href:"?path=/docs/guides-app-layout--docs",children:"Guides / App Layout"})," for layout patterns."]}),`
`]}),`
`,e.jsx(n.h2,{id:"インポート",children:"インポート"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import Sidebar from "@/components/Sidebar/Sidebar";\r
import { T } from "../T";\r

`})}),`
`,e.jsx(n.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Sidebar"})," の中に ",e.jsx(n.code,{children:"Sidebar.Header"}),", ",e.jsx(n.code,{children:"Sidebar.Content"}),", ",e.jsx(n.code,{children:"Sidebar.Footer"})," を配置し、",e.jsx(n.code,{children:"Content"})," の中に ",e.jsx(n.code,{children:"Sidebar.Item"})," を配置します。"]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"折りたたみ状態-collapsed",children:"折りたたみ状態 (Collapsed)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"collapsed"})," プロパティを使用すると、サイドバーを最小サイズに折りたたみます。アイコンのみが表示されるようになります。"]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"カスタム幅",children:"カスタム幅"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"width"})," プロパティを使用して、展開時の幅を調整できます。"]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,e.jsx(t,{})]})}function P(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{P as default};
