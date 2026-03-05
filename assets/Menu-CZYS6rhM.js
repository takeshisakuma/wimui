import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DhE_Jdw9.js";import{M as r,P as t,a as l,d as o}from"./blocks-Ch-U13af.js";import{M as h,W as u,a as m,b as x,H as j,I as _}from"./Menu.stories-BKckl_1G.js";import{T as i}from"./T-Bz5gytzT.js";import"./iframe-B1hu6V6h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DV6BsTHv.js";import"./index-kCYHI5q0.js";import"./index-CTozqRak.js";import"./index-Cc5J14Yd.js";import"./index-DgjD000u.js";import"./BaseListItem-CMmHBy7t.js";import"./Transition-D0A9VrFQ.js";import"./Icon-B05_UjLA.js";import"./useTranslation-CA51KGSw.js";function c(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:h}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(i,{k:"doc_menu_title"})}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_long_desc"})}),`
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
`,n.jsx(e.h2,{id:"",children:n.jsx(i,{k:"doc_components"})}),`
`,n.jsx(e.h3,{id:"menu-1",children:"Menu"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_comp_menu_desc"})}),`
`,n.jsx(e.p,{children:"Props:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mode"}),": メニューの表示モード (",n.jsx(e.code,{children:'"vertical"'})," | ",n.jsx(e.code,{children:'"horizontal"'})," | ",n.jsx(e.code,{children:'"inline"'}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultOpenKeys"}),": デフォルトで開いているサブメニューのキー配列"]}),`
`]}),`
`,n.jsx(e.h3,{id:"menuitem",children:"MenuItem"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_comp_menuitem_desc"})}),`
`,n.jsx(e.h3,{id:"submenu",children:"SubMenu"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_comp_submenu_desc"})}),`
`,n.jsx(e.h3,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_comp_itemgroup_desc"})}),`
`,n.jsx(e.h3,{id:"menudivider",children:"MenuDivider"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_comp_divider_desc"})}),`
`,n.jsxs(e.h2,{id:"-actually-it-was-controls-but-ill-change-header",children:[n.jsx(i,{k:"doc_props"})," (Actually it was Controls but I'll change header)"]}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"-1",children:n.jsx(i,{k:"doc_story"})}),`
`,n.jsx(e.h3,{id:"-2",children:n.jsx(i,{k:"doc_with_icons"})}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_stories_icons_desc"})}),`
`,n.jsx(o,{of:u}),`
`,n.jsxs(e.h3,{id:"-wait-i-dont-have-this-key-ill-use-common-one",children:[n.jsx(i,{k:"doc_with_submenu"})," (Wait, I don't have this key, I'll use common one)"]}),`
`,n.jsx(e.h3,{id:"with-submenu",children:"With SubMenu"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_stories_submenu_desc"})}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.h3,{id:"-3",children:n.jsx(i,{k:"doc_with_groups"})}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_stories_groups_desc"})}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h3,{id:"-4",children:n.jsx(i,{k:"doc_horizontal"})}),`
`,n.jsx(e.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_stories_horizontal_desc"})}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.h3,{id:"-5",children:n.jsx(i,{k:"doc_inline"})}),`
`,n.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,n.jsx("p",{children:n.jsx(i,{k:"doc_menu_stories_inline_desc"})}),`
`,n.jsx(o,{of:_}),`
`,n.jsx(e.h2,{id:"-6",children:n.jsx(i,{k:"doc_accessibility"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(i,{k:"doc_menu_a11y_1"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(i,{k:"doc_menu_a11y_2"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(i,{k:"doc_menu_a11y_3"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(i,{k:"doc_menu_a11y_4"}),`
`]}),`
`]})]})}function H(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{H as default};
