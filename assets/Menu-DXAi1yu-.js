import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Xbs8vuYb.js";import{M as r,T as x,P as _,a as j,C as c}from"./blocks-BDiLT288.js";import{M as t,W as l,a as h,b as m,H as u,I as p}from"./Menu.stories-BIuxbtax.js";import{T as e}from"./T-B0GQsxj2.js";import"./iframe-BROZIFWR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeGcYQMM.js";import"./index-V_QwhSEQ.js";import"./index-Bfqmm18q.js";import"./index-BtzVS0FN.js";import"./index-CcYSKHnQ.js";import"./BaseListItem-YPG5bQ-4.js";import"./Transition-DBOVTF1P.js";import"./Icon-CyJ-O3si.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-BRvuTCUW.js";function d(i){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:t}),`
`,n.jsx(x,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(e,{k:"doc_menu_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_long_desc"})}),`
`,n.jsx(s.h2,{id:"",children:n.jsx(e,{k:"doc_design_intent_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_design_intent"})}),`
`,n.jsx(s.h2,{id:"-1",children:n.jsx(e,{k:"doc_choice_matrix_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_choice_matrix_desc"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx(e,{k:"doc_component"})}),n.jsx("th",{children:n.jsx(e,{k:"doc_usage_scenario"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Menu"})}),n.jsx("td",{children:n.jsx(e,{k:"doc_menu_choice_self_when"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Dropdown"})}),n.jsx("td",{children:n.jsx(e,{k:"doc_menu_choice_alt_when"})})]})]})]}),`
`,n.jsx(s.h2,{id:"-2",children:n.jsx(e,{k:"doc_anatomy_title"})}),`
`,n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(e,{k:"doc_menu_anatomy_root"})}),n.jsx("li",{children:n.jsx(e,{k:"doc_menu_anatomy_content"})})]}),`
`,n.jsx(s.h2,{id:"-3",children:n.jsx(e,{k:"doc_content_guidelines_title"})}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx(e,{k:"doc_menu_content_guideline"})})}),`
`,n.jsx(s.h2,{id:"-4",children:n.jsx(e,{k:"doc_motion_spec_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_motion_desc"})}),`
`,n.jsx(s.h2,{id:"-5",children:n.jsx(e,{k:"doc_a11y_spec_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_a11y_desc"})}),`
`,n.jsx(s.h2,{id:"-6",children:n.jsx(e,{k:"doc_real_world_scenarios_title"})}),`
`,n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx(e,{k:"doc_scenario_nav_title"}),":"]}),n.jsx(e,{k:"doc_menu_scenario_1"})]}),n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx(e,{k:"doc_scenario_admin_title"}),":"]}),n.jsx(e,{k:"doc_menu_scenario_2"})]})]}),`
`,n.jsx(s.h2,{id:"-7",children:n.jsx(e,{k:"doc_best_practices_title"})}),`
`,n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(e,{k:"doc_menu_best_practice_1"})}),n.jsx("li",{children:n.jsx(e,{k:"doc_menu_best_practice_2"})})]}),`
`,n.jsx(s.h2,{id:"-8",children:n.jsx(e,{k:"doc_usage"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from "wimui";

<Menu>
  <MenuItem icon={<Icon name="CheckIcon" />}>Home</MenuItem>
  <MenuItem>About</MenuItem>
  <SubMenu itemKey="services" title="Services">
    <MenuItem>Service 1</MenuItem>
    <MenuItem>Service 2</MenuItem>
  </SubMenu>
</Menu>;
`})}),`
`,n.jsx(_,{}),`
`,n.jsx(s.h2,{id:"-9",children:n.jsx(e,{k:"doc_components"})}),`
`,n.jsx(s.h3,{id:"menu",children:"Menu"}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_comp_menu_desc"})}),`
`,n.jsx(s.p,{children:"Props:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"mode"}),": ",n.jsx(e,{k:"doc_menu_props_mode"})," (",n.jsx(s.code,{children:'"vertical"'})," | ",n.jsx(s.code,{children:'"horizontal"'})," | ",n.jsx(s.code,{children:'"inline"'}),")"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"defaultOpenKeys"}),": ",n.jsx(e,{k:"doc_menu_props_default_open_keys"})]}),`
`]}),`
`,n.jsx(s.h3,{id:"menuitem",children:"MenuItem"}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_comp_menuitem_desc"})}),`
`,n.jsx(s.h3,{id:"submenu",children:"SubMenu"}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_comp_submenu_desc"})}),`
`,n.jsx(s.h3,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_comp_itemgroup_desc"})}),`
`,n.jsx(s.h3,{id:"menudivider",children:"MenuDivider"}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_comp_divider_desc"})}),`
`,n.jsx(s.h2,{id:"-10",children:n.jsx(e,{k:"doc_props"})}),`
`,n.jsx(j,{}),`
`,n.jsx(s.h2,{id:"-11",children:n.jsx(e,{k:"doc_examples"})}),`
`,n.jsx(s.h3,{id:"-12",children:n.jsx(e,{k:"doc_with_icons"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_stories_icons_desc"})}),`
`,n.jsx(c,{of:l}),`
`,n.jsx(s.h3,{id:"-13",children:n.jsx(e,{k:"doc_with_submenu"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_stories_submenu_desc"})}),`
`,n.jsx(c,{of:h}),`
`,n.jsx(s.h3,{id:"-14",children:n.jsx(e,{k:"doc_with_groups"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_stories_groups_desc"})}),`
`,n.jsx(c,{of:m}),`
`,n.jsx(s.h3,{id:"-15",children:n.jsx(e,{k:"doc_horizontal"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_stories_horizontal_desc"})}),`
`,n.jsx(c,{of:u}),`
`,n.jsx(s.h3,{id:"-16",children:n.jsx(e,{k:"doc_inline"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc_menu_stories_inline_desc"})}),`
`,n.jsx(c,{of:p}),`
`,n.jsx(s.h2,{id:"-17",children:n.jsx(e,{k:"doc_accessibility"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(e,{k:"doc_menu_a11y_1"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(e,{k:"doc_menu_a11y_2"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(e,{k:"doc_menu_a11y_3"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(e,{k:"doc_menu_a11y_4"}),`
`]}),`
`]})]})}function P(i={}){const{wrapper:s}={...o(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(d,{...i})}):d(i)}export{P as default};
