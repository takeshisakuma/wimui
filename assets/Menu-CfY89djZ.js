import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-B_GVjEQG.js";import{M as d,P as c,a as t,d as s}from"./index-BtEPnDjs.js";import{M as l,W as h,a as x,b as u,H as m,I as j}from"./Menu.stories-C9hSSJpL.js";import{T as p}from"./T-DDpXyLBA.js";import"./iframe-3pJU0r9w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9X4EtKa.js";import"./index-BQu9wgyp.js";import"./index-D8oHPCzD.js";import"./index-PRvQPFt2.js";import"./index-As2qqYoz.js";import"./index-DPeCJHdU.js";import"./Transition-DL6Ftrsx.js";import"./Icon-BpoEBrO7.js";import"./useTranslation-kZrKuO_Q.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_menu_title"})}),`
`,n.jsx(e.p,{children:`ナビゲーションメニューやアクションリストを表示するための汎用的なメニューコンポーネントです。
サブメニュー、グルーピング、複数の表示モードをサポートしています。`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from "wimui";
import { T } from "../T";

<Menu>
  <MenuItem icon={<Icon name="CheckIcon" />}>Home</MenuItem>
  <MenuItem>About</MenuItem>
  <SubMenu itemKey="services" title="Services">
    <MenuItem>Service 1</MenuItem>
    <MenuItem>Service 2</MenuItem>
  </SubMenu>
</Menu>;
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
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"with-submenu",children:"With SubMenu"}),`
`,n.jsx(e.p,{children:"サブメニューを含むメニューの例です。サブメニューはクリックで展開・折りたたみができます。"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化する例です。区切り線も使用しています。"}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx(e.p,{children:"水平方向に表示されるメニューです。ヘッダーナビゲーションなどに適しています。"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(e.p,{children:"インラインモードのメニューです。サイドバーナビゲーションなどに適しています。"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"キーボードナビゲーション対応（Tab キーでフォーカス移動）"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="menu"'})," と ",n.jsx(e.code,{children:'role="menuitem"'})," を適切に設定"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-haspopup"})," と ",n.jsx(e.code,{children:"aria-expanded"})," でサブメニューの状態を通知"]}),`
`,n.jsxs(e.li,{children:["disabled 状態の項目には ",n.jsx(e.code,{children:"aria-disabled"})," を設定"]}),`
`]})]})}function T(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{T as default};
