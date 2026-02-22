import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DO2lBYjB.js";import{M as c,C as o,a as s}from"./index-C4-6wvZZ.js";import"./TabBar-CpAdNUM8.js";import{T as l,D as d,W as h}from"./TabBar.stories-BAFRtFsd.js";import{T as t}from"./T-D3Jf8nC4.js";import"./iframe-B26gg4xa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DakxIVxD.js";import"./index-B1JjXUQw.js";import"./index-CHVKF0mU.js";import"./index-DMfHpqmo.js";import"./index-CW4--Tzu.js";import"./index-B4VeCX-Y.js";import"./Icon-CkBiA6DD.js";import"./useTranslation-BcvmeLdz.js";function i(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(e.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(t,{k:"doc_tabbar_title"})}),`
`,n.jsx(t,{k:"doc_tab_bar_title"}),`
`,n.jsx(e.p,{children:`TabBarは、モバイルアプリケーション向けの画面下部に固定されるナビゲーションバーです。\r
主要な画面間の切り替えに使用されます。`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["⚠️ ",n.jsx(e.strong,{children:"スマートフォンのみ"}),": このコンポーネントは主にモバイルデバイス（タッチ操作・小画面）向けに設計されています。PC環境では、",n.jsx(e.code,{children:"Sidebar"}),"や",n.jsx(e.code,{children:"Navbar"}),"の利用を検討してください。"]}),`
`]}),`
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
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h2,{id:"アイコンのみ-icon-only",children:"アイコンのみ (Icon Only)"}),`
`,n.jsx(e.p,{children:"ラベルは任意です。ラベルを省略した場合、アイコンは垂直方向の中央に配置されます。"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(s,{})]})}function A(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{A as default};
