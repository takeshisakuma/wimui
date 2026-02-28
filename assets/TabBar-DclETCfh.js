import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Cq_0ZuqL.js";import{M as c,C as o,a}from"./blocks-Smm8kd5x.js";import"./TabBar-phaMFpes.js";import{T as s,D as l,W as d}from"./TabBar.stories-C4XnWUF-.js";import{T as h}from"./T-DhZAlVOu.js";import"./iframe-DntnUelk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxAZpCz.js";import"./index-cEWuJBEv.js";import"./index-OXONRO8J.js";import"./index-DeWF1RVK.js";import"./index-DgKM9sek.js";import"./Icon-Mjw2-9rU.js";import"./useTranslation-HA-l9R96.js";function i(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:s}),`
`,n.jsx(e.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(h,{k:"doc_tabbar_title"})}),`
`,n.jsx(e.p,{children:`TabBarは、モバイルアプリケーション向けの画面下部に固定されるナビゲーションバーです。
主要な画面間の切り替えに使用されます。`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"スマートフォンのみ"}),": このコンポーネントは主にモバイルデバイス（タッチ操作・小画面）向けに設計されています。PC環境では、",n.jsx(e.code,{children:"Sidebar"}),"や",n.jsx(e.code,{children:"Navbar"}),"の利用を検討してください。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"インポート",children:"インポート"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import TabBar from "@/components/TabBar/TabBar";
`})}),`
`,n.jsx(e.h2,{id:"基本的な使用方法",children:"基本的な使用方法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TabBar.Item"})," を使用して、各タブを定義します。アイコンとラベルを設定し、",n.jsx(e.code,{children:"onClick"})," イベントでアクティブなタブを切り替えます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [active, setActive] = useState("home");

<TabBar>
  <TabBar.Item
    label="ホーム"
    icon={<HomeIcon />}
    active={active === "home"}
    onClick={() => setActive("home")}
  />
  <TabBar.Item
    label="検索"
    icon={<SearchIcon />}
    active={active === "search"}
    onClick={() => setActive("search")}
  />
  <TabBar.Item
    label="マイページ"
    icon={<UserIcon />}
    active={active === "profile"}
    onClick={() => setActive("profile")}
  />
</TabBar>;
`})}),`
`,n.jsx(e.h2,{id:"バッジ付き-with-badges",children:"バッジ付き (With Badges)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TabBar.Item"})," に ",n.jsx(e.code,{children:"badge"})," プロパティを追加することで、通知数やインジケーターを表示できます。"]}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h2,{id:"アイコンのみ-icon-only",children:"アイコンのみ (Icon Only)"}),`
`,n.jsx(e.p,{children:"ラベルは任意です。ラベルを省略した場合、アイコンは垂直方向の中央に配置されます。"}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(a,{})]})}function A(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{A as default};
