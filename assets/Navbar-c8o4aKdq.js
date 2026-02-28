import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DFNKA_V7.js";import{M as t,C as a,a as d}from"./blocks-CX2MuiOa.js";import{N as c,G as l,C as p}from"./Navbar.stories-D3h_5VDI.js";import{T as o}from"./T-BxJRC_oq.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./index-DV843YsD.js";import"./HamburgerMenu-BjMMohaW.js";import"./Drawer-Dr2YZbpN.js";import"./Portal-CmAigOsF.js";import"./Transition-R3kp3W-0.js";import"./FocusTrap-BbtJY5RA.js";import"./Button-DHI4TNfF.js";import"./Icon-DOwTT6BK.js";import"./useTranslation-CnASG-hp.js";function s(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(r.h1,{id:"navbar",children:"Navbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_navbar_title"})}),`
`,n.jsx(o,{k:"doc_navbar_title"}),`
`,n.jsx(r.p,{children:"Navbarは、ページの上部に配置されるレスポンシブなナビゲーションヘッダーです。"}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:["📘 Guide: See ",n.jsx(r.a,{href:"?path=/docs/guides-app-layout--docs",children:"Guides / App Layout"}),` for layout patterns.
ブランドロゴ、ナビゲーションリンク、アクションボタンなどを配置するためのコンテナとして機能します。`]}),`
`]}),`
`,n.jsx(r.h2,{id:"インポート",children:"インポート"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`import Navbar from "@/components/Navbar/Navbar";
`})}),`
`,n.jsx(r.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Navbar"})," コンポーネントの中に ",n.jsx(r.code,{children:"Navbar.Brand"}),"、",n.jsx(r.code,{children:"Navbar.Content"})," などを配置して使用します。"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`<Navbar bordered>
  <Navbar.Brand>Brand</Navbar.Brand>
  <Navbar.Content>
    <Navbar.Link href="#" active>
      ホーム
    </Navbar.Link>
    <Navbar.Link href="#">概要</Navbar.Link>
    <Navbar.Link href="#">お問い合わせ</Navbar.Link>
  </Navbar.Content>
</Navbar>
`})}),`
`,n.jsx(r.h2,{id:"グラスモーフィズム-glassmorphism",children:"グラスモーフィズム (Glassmorphism)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"glass"}),` プロパティを使用すると、背景にぼかし効果（すりガラス効果）を適用できます。
カラフルな背景画像やグラデーションの上に固定ヘッダーとして配置する場合に効果的です。`]}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(r.h2,{id:"コンテンツの配置",children:"コンテンツの配置"}),`
`,n.jsxs(r.p,{children:["複数の ",n.jsx(r.code,{children:"Navbar.Content"})," コンポーネントを使用し、",n.jsx(r.code,{children:"justify"})," プロパティ（",n.jsx(r.code,{children:"start"}),", ",n.jsx(r.code,{children:"center"}),", ",n.jsx(r.code,{children:"end"}),"）を組み合わせることで、柔軟なレイアウトが可能です。"]}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{})]})}function S(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{S as default};
