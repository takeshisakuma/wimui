import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DqmbFHE3.js";import{M as c,C as t,a as s}from"./index-DtoN9zbH.js";import"./TabBar-bGXudxZJ.js";import{T as l,D as d,W as m}from"./TabBar.stories-B8R8bgKi.js";import{T as i}from"./T-D_Gx5n1r.js";import"./iframe-B4Qoxu3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnCDoS8F.js";import"./index-DV9E679G.js";import"./index-Dx7V1Jf6.js";import"./index-Dl9aIjA8.js";import"./index-DlSymbc8.js";import"./index-l9XHiKBA.js";import"./Icon-ntAEgp2I.js";import"./useTranslation-CklcMfUY.js";function o(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(r.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(i,{k:"doc_tabbar_title"})}),`
`,n.jsx(i,{k:"doc_tab_bar_title"}),`
`,n.jsx(r.p,{children:`TabBarは、モバイルアプリケーション向けの画面下部に固定されるナビゲーションバーです。\r
主要な画面間の切り替えに使用されます。`}),`
`,n.jsx(r.h2,{id:"インポート",children:"インポート"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-jsx",children:`import TabBar from "@/components/TabBar/TabBar";
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
`,n.jsx(t,{of:d}),`
`,n.jsx(r.h2,{id:"アイコンのみ-icon-only",children:"アイコンのみ (Icon Only)"}),`
`,n.jsx(r.p,{children:"ラベルは任意です。ラベルを省略した場合、アイコンは垂直方向の中央に配置されます。"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(s,{})]})}function A(e={}){const{wrapper:r}={...a(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{A as default};
