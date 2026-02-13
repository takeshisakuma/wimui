import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CNevrb60.js";import{M as c,C as t,a as s}from"./index-pOEgHDjg.js";import{T as l,D as d,W as h}from"./TabBar.stories-DkLDgBrs.js";import{T as a}from"./T-B6tHb3ID.js";import"./iframe-BRQWL27F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CsL2SFOk.js";import"./index-CYjtzbAX.js";import"./index-DLkabaxQ.js";import"./index-CvX-948d.js";import"./index-CNxpXZFm.js";import"./index-DWoaxWMs.js";import"./Icon-CpAaWSX6.js";import"./useTranslation-C2ZSqrVI.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(e.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(a,{k:"doc_tabbar_title"})}),`
`,n.jsx(a,{k:"doc_tab_bar_title"}),`
`,n.jsx(e.p,{children:`TabBarは、モバイルアプリケーション向けの画面下部に固定されるナビゲーションバーです。\r
主要な画面間の切り替えに使用されます。`}),`
`,n.jsx(e.h2,{id:"インポート",children:"インポート"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import TabBar from "@/components/TabBar/TabBar";
`})}),`
`,n.jsx(e.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TabBar.Item"})," を使用して、各タブを定義します。アイコンとラベルを設定し、",n.jsx(e.code,{children:"onClick"})," イベントでアクティブなタブを切り替えます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [active, setActive] = useState('home');\r
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
`,n.jsx(e.h2,{id:"バッジ付き-with-badges",children:"バッジ付き (With Badges)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TabBar.Item"})," に ",n.jsx(e.code,{children:"badge"})," プロパティを追加することで、通知数やインジケーターを表示できます。"]}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h2,{id:"アイコンのみ-icon-only",children:"アイコンのみ (Icon Only)"}),`
`,n.jsx(e.p,{children:"ラベルは任意です。ラベルを省略した場合、アイコンは垂直方向の中央に配置されます。"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(s,{})]})}function M(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{M as default};
