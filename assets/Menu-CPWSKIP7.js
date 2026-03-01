import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-kRKb6otn.js";import{M as r,P as t,a as l,d as o}from"./blocks-h-koGg6Y.js";import{M as h,W as u,a as m,b as x,H as j,I as _}from"./Menu.stories-D20064pi.js";import{T as s}from"./T-D3t-8OFd.js";import"./iframe-RqRUvN2f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KrD9KPR3.js";import"./index-MJSI_oPR.js";import"./index-xDlYQR3e.js";import"./index-D5anLY7w.js";import"./index-B1nuKDx0.js";import"./Transition-1UEQMD_9.js";import"./Icon-DEW6Teyt.js";import"./useTranslation-CveckdUp.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:h}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_menu_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_long_desc"})}),`
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
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"",children:n.jsx(s,{k:"doc_components"})}),`
`,n.jsx(e.h3,{id:"menu-1",children:"Menu"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_comp_menu_desc"})}),`
`,n.jsx(e.p,{children:"Props:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mode"}),": メニューの表示モード (",n.jsx(e.code,{children:'"vertical"'})," | ",n.jsx(e.code,{children:'"horizontal"'})," | ",n.jsx(e.code,{children:'"inline"'}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultOpenKeys"}),": デフォルトで開いているサブメニューのキー配列"]}),`
`]}),`
`,n.jsx(e.h3,{id:"menuitem",children:"MenuItem"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_comp_menuitem_desc"})}),`
`,n.jsx(e.h3,{id:"submenu",children:"SubMenu"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_comp_submenu_desc"})}),`
`,n.jsx(e.h3,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_comp_itemgroup_desc"})}),`
`,n.jsx(e.h3,{id:"menudivider",children:"MenuDivider"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_comp_divider_desc"})}),`
`,n.jsxs(e.h2,{id:"-actually-it-was-controls-but-ill-change-header",children:[n.jsx(s,{k:"doc_props"})," (Actually it was Controls but I'll change header)"]}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"-1",children:n.jsx(s,{k:"doc_story"})}),`
`,n.jsx(e.h3,{id:"-2",children:n.jsx(s,{k:"doc_with_icons"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_stories_icons_desc"})}),`
`,n.jsx(o,{of:u}),`
`,n.jsxs(e.h3,{id:"-wait-i-dont-have-this-key-ill-use-common-one",children:[n.jsx(s,{k:"doc_with_submenu"})," (Wait, I don't have this key, I'll use common one)"]}),`
`,n.jsx(e.h3,{id:"with-submenu",children:"With SubMenu"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_stories_submenu_desc"})}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.h3,{id:"-3",children:n.jsx(s,{k:"doc_with_groups"})}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_stories_groups_desc"})}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h3,{id:"-4",children:n.jsx(s,{k:"doc_horizontal"})}),`
`,n.jsx(e.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_stories_horizontal_desc"})}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.h3,{id:"-5",children:n.jsx(s,{k:"doc_inline"})}),`
`,n.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_menu_stories_inline_desc"})}),`
`,n.jsx(o,{of:_}),`
`,n.jsx(e.h2,{id:"-6",children:n.jsx(s,{k:"doc_accessibility"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(s,{k:"doc_menu_a11y_1"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(s,{k:"doc_menu_a11y_2"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(s,{k:"doc_menu_a11y_3"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(s,{k:"doc_menu_a11y_4"}),`
`]}),`
`]})]})}function D(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{D as default};
