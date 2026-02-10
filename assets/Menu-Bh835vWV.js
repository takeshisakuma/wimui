import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-b9MKzoeK.js";import{M as o,P as c,a as h,d as r}from"./index-B0UYZZsv.js";import{M as l,W as t,a as u,b as x,H as j,I as m}from"./Menu.stories-CCJ3fYw9.js";import"./iframe-DBYVvlF0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQl0RnuE.js";import"./index-CGGdyD6e.js";import"./index-p9MFa6IT.js";import"./index-DuPZYNZj.js";import"./index-BkpqF3gg.js";import"./Icon-CkDHUi3z.js";import"./index-BDt_y6sF.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsx(e.p,{children:`ナビゲーションメニューやアクションリストを表示するための汎用的なメニューコンポーネントです。\r
サブメニュー、グルーピング、複数の表示モードをサポートしています。`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from "wimui";\r
\r
<Menu>\r
  <MenuItem icon={<Icon name="CheckIcon" />}>Home</MenuItem>\r
  <MenuItem>About</MenuItem>\r
  <SubMenu itemKey="services" title="Services">\r
    <MenuItem>Service 1</MenuItem>\r
    <MenuItem>Service 2</MenuItem>\r
  </SubMenu>\r
</Menu>
`})}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.h3,{id:"menu-1",children:"Menu"}),`
`,n.jsx(e.p,{children:"ルートコンポーネント。メニューの表示モードや開閉状態を管理します。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Props:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mode"}),": メニューの表示モード (",n.jsx(e.code,{children:'"vertical"'})," | ",n.jsx(e.code,{children:'"horizontal"'})," | ",n.jsx(e.code,{children:'"inline"'}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultOpenKeys"}),": デフォルトで開いているサブメニューのキー配列"]}),`
`]}),`
`,n.jsx(e.h3,{id:"menuitem",children:"MenuItem"}),`
`,n.jsx(e.p,{children:"メニューの個別項目です。クリックイベントやアイコンを設定できます。"}),`
`,n.jsx(e.h3,{id:"submenu",children:"SubMenu"}),`
`,n.jsxs(e.p,{children:["展開可能なサブメニューです。",n.jsx(e.code,{children:"itemKey"})," プロパティで一意のキーを指定する必要があります。"]}),`
`,n.jsx(e.h3,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化し、タイトルを表示します。"}),`
`,n.jsx(e.h3,{id:"menudivider",children:"MenuDivider"}),`
`,n.jsx(e.p,{children:"メニュー項目間に区切り線を挿入します。"}),`
`,n.jsx(h,{}),`
`,n.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(e.p,{children:"アイコン付きのメニュー項目の例です。"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(e.h3,{id:"with-submenu",children:"With SubMenu"}),`
`,n.jsx(e.p,{children:"サブメニューを含むメニューの例です。サブメニューはクリックで展開・折りたたみができます。"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化する例です。区切り線も使用しています。"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx(e.p,{children:"水平方向に表示されるメニューです。ヘッダーナビゲーションなどに適しています。"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(e.p,{children:"インラインモードのメニューです。サイドバーナビゲーションなどに適しています。"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"キーボードナビゲーション対応（Tab キーでフォーカス移動）"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="menu"'})," と ",n.jsx(e.code,{children:'role="menuitem"'})," を適切に設定"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-haspopup"})," と ",n.jsx(e.code,{children:"aria-expanded"})," でサブメニューの状態を通知"]}),`
`,n.jsxs(e.li,{children:["disabled 状態の項目には ",n.jsx(e.code,{children:"aria-disabled"})," を設定"]}),`
`]})]})}function D(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{D as default};
