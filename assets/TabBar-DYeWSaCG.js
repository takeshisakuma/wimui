import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DfxhQRvj.js";import{M as t,C as a,a as c}from"./index-B53xL5dF.js";import{T as s,D as l,W as d}from"./TabBar.stories-CveGagrt.js";import{T as h}from"./T-D4n0Ig0E.js";import"./iframe-BSv3CQ2B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1A-F8x2.js";import"./index-CUDJJ2Dz.js";import"./index-wfGKCs4U.js";import"./index-CDThqjCR.js";import"./index-DXSlcuVR.js";import"./index-CogSwlJB.js";import"./Icon-DyvtjtDA.js";import"./useTranslation-BmmjQ9nD.js";function i(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:s}),`
`,n.jsx(r.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx(h,{k:"doc_tab_bar_title"}),`
`,n.jsx(r.p,{children:`TabBarは、モバイルアプリケーション向けの画面下部に固定されるナビゲーションバーです。\r
主要な画面間の切り替えに使用されます。`}),`
`,n.jsx(r.h2,{id:"インポート",children:"インポート"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`import TabBar from "./TabBar";
`})}),`
`,n.jsx(r.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"TabBar.Item"})," を使用して、各タブを定義します。アイコンとラベルを設定し、",n.jsx(r.code,{children:"onClick"})," イベントでアクティブなタブを切り替えます。"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`const [active, setActive] = useState('home');\r
\r
<TabBar>\r
  <TabBar.Item \r
    label="ホーム" \r
    icon={<HomeIcon />} \r
    active={active === 'home'} \r
    onClick={() => setActive('home')} \r
  />\r
  <TabBar.Item \r
    label="検索" \r
    icon={<SearchIcon />} \r
    active={active === 'search'} \r
    onClick={() => setActive('search')} \r
  />\r
  <TabBar.Item \r
    label="マイページ" \r
    icon={<UserIcon />} \r
    active={active === 'profile'} \r
    onClick={() => setActive('profile')} \r
  />\r
</TabBar>
`})}),`
`,n.jsx(r.h2,{id:"バッジ付き-with-badges",children:"バッジ付き (With Badges)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"TabBar.Item"})," に ",n.jsx(r.code,{children:"badge"})," プロパティを追加することで、通知数やインジケーターを表示できます。"]}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(r.h2,{id:"アイコンのみ-icon-only",children:"アイコンのみ (Icon Only)"}),`
`,n.jsx(r.p,{children:"ラベルは任意です。ラベルを省略した場合、アイコンは垂直方向の中央に配置されます。"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{})]})}function A(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{A as default};
