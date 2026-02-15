import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CpFiB6ue.js";import{M as d,P as c,a as t,d as r}from"./index-CXf5e_bV.js";import{M as l,W as h,a as x,b as u,H as m,I as j}from"./Menu.stories-DVg2_t6a.js";import{T as p}from"./T-B3AFHBdm.js";import"./iframe-DCP7Q_DB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPr30mO6.js";import"./index-C8r2V7IH.js";import"./index-DvPvgKD0.js";import"./index-jamwwvbr.js";import"./index-CJK2m6bn.js";import"./index-DROgmfby.js";import"./Icon-CjXlYNhp.js";import"./useTranslation-bFPHz6-h.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_menu_title"})}),`
`,n.jsx(e.p,{children:`ナビゲーションメニューやアクションリストを表示するための汎用的なメニューコンポーネントです。\r
サブメニュー、グルーピング、複数の表示モードをサポートしています。`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from "wimui";\r
import { T } from "../T";\r
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
`,n.jsx(e.p,{children:"Props:"}),`
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
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(e.p,{children:"アイコン付きのメニュー項目の例です。"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"with-submenu",children:"With SubMenu"}),`
`,n.jsx(e.p,{children:"サブメニューを含むメニューの例です。サブメニューはクリックで展開・折りたたみができます。"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化する例です。区切り線も使用しています。"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx(e.p,{children:"水平方向に表示されるメニューです。ヘッダーナビゲーションなどに適しています。"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(e.p,{children:"インラインモードのメニューです。サイドバーナビゲーションなどに適しています。"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"キーボードナビゲーション対応（Tab キーでフォーカス移動）"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="menu"'})," と ",n.jsx(e.code,{children:'role="menuitem"'})," を適切に設定"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-haspopup"})," と ",n.jsx(e.code,{children:"aria-expanded"})," でサブメニューの状態を通知"]}),`
`,n.jsxs(e.li,{children:["disabled 状態の項目には ",n.jsx(e.code,{children:"aria-disabled"})," を設定"]}),`
`]})]})}function G(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{G as default};
