import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CsrYwmgW.js";import{M as t,C as a,a as d}from"./index-KSe6tpJr.js";import{N as c,G as l,C as p}from"./Navbar.stories-BaaR6REE.js";import{T as o}from"./T-R7LFX61F.js";import"./iframe-BN2RreY_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPXRSKWP.js";import"./index-D-axO1BS.js";import"./index-BkiKKgim.js";import"./index-DSovrFzj.js";import"./index-B0FfWD3u.js";import"./index-Dhl92oZt.js";import"./HamburgerMenu-CLtYCnQN.js";import"./Drawer-B50AB4v7.js";import"./Portal-DHsbP3K_.js";import"./Transition-DIxn4cOZ.js";import"./FocusTrap-sGz_oRg_.js";import"./Button-CCk8mPEu.js";import"./Icon-BdVz6RmM.js";import"./useTranslation-cdADo3sI.js";function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c}),`
`,r.jsx(n.h1,{id:"navbar",children:"Navbar"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(o,{k:"doc_navbar_title"})}),`
`,r.jsx(o,{k:"doc_navbar_title"}),`
`,r.jsx(n.p,{children:"Navbarは、ページの上部に配置されるレスポンシブなナビゲーションヘッダーです。"}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:["📘 Guide: See ",r.jsx(n.a,{href:"?path=/docs/guides-app-layout--docs",children:"Guides / App Layout"}),` for layout patterns.\r
ブランドロゴ、ナビゲーションリンク、アクションボタンなどを配置するためのコンテナとして機能します。`]}),`
`]}),`
`,r.jsx(n.h2,{id:"インポート",children:"インポート"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-jsx",children:`import Navbar from "@/components/Navbar/Navbar";
`})}),`
`,r.jsx(n.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"Navbar"})," コンポーネントの中に ",r.jsx(n.code,{children:"Navbar.Brand"}),"、",r.jsx(n.code,{children:"Navbar.Content"})," などを配置して使用します。"]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-jsx",children:`<Navbar bordered>\r
  <Navbar.Brand>Brand</Navbar.Brand>\r
  <Navbar.Content>\r
    <Navbar.Link href="#" active>ホーム</Navbar.Link>\r
    <Navbar.Link href="#">概要</Navbar.Link>\r
    <Navbar.Link href="#">お問い合わせ</Navbar.Link>\r
  </Navbar.Content>\r
</Navbar>
`})}),`
`,r.jsx(n.h2,{id:"グラスモーフィズム-glassmorphism",children:"グラスモーフィズム (Glassmorphism)"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"glass"}),` プロパティを使用すると、背景にぼかし効果（すりガラス効果）を適用できます。\r
カラフルな背景画像やグラデーションの上に固定ヘッダーとして配置する場合に効果的です。`]}),`
`,r.jsx(a,{of:l}),`
`,r.jsx(n.h2,{id:"コンテンツの配置",children:"コンテンツの配置"}),`
`,r.jsxs(n.p,{children:["複数の ",r.jsx(n.code,{children:"Navbar.Content"})," コンポーネントを使用し、",r.jsx(n.code,{children:"justify"})," プロパティ（",r.jsx(n.code,{children:"start"}),", ",r.jsx(n.code,{children:"center"}),", ",r.jsx(n.code,{children:"end"}),"）を組み合わせることで、柔軟なレイアウトが可能です。"]}),`
`,r.jsx(a,{of:p}),`
`,r.jsx(n.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,r.jsx(d,{})]})}function X(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{X as default};
