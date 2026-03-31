import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as o,M as r,T as x,P as j,a as t,C as c}from"./blocks-DojPQnHT.js";import{M as l,W as h,a as m,b as _,H as u,I as a}from"./Menu.stories-DSR1UZ88.js";import{T as n}from"./T-oCXCzAOM.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BIQ3_rbw.js";import"./index-CW0q_pgO.js";import"./index-DU5V2j9e.js";import"./index-BMPlCgWl.js";import"./index-CV8RLRr7.js";import"./index-B7ARqZ81.js";import"./BaseListItem-DBy6RGkg.js";import"./Transition-BC33WtBE.js";import"./Icon-BiKegwnP.js";import"./useTranslation-Iz9XWB8E.js";function d(i){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(x,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc.menu_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_long_desc"})}),`
`,e.jsx(s.h2,{id:"",children:e.jsx(n,{k:"doc.design_intent_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_design_intent"})}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"doc.choice_matrix_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_choice_matrix_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc.component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc.usage_scenario"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Menu"})}),e.jsx("td",{children:e.jsx(n,{k:"doc.menu_choice_self_when"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Dropdown"})}),e.jsx("td",{children:e.jsx(n,{k:"doc.menu_choice_alt_when"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(n,{k:"doc.anatomy_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc.component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc.description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc.menu_anatomy_root_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc.menu_anatomy_root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc.menu_anatomy_content_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc.menu_anatomy_content"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-3",children:e.jsx(n,{k:"doc.content_guidelines_title"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"doc.menu_content_guideline"})})}),`
`,e.jsx(s.h2,{id:"-4",children:e.jsx(n,{k:"doc.motion_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_motion_desc"})}),`
`,e.jsx(s.h2,{id:"-5",children:e.jsx(n,{k:"doc.a11y_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_a11y_desc"})}),`
`,e.jsx(s.h2,{id:"-6",children:e.jsx(n,{k:"doc.real_world_scenarios_title"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc.scenario_nav_title"}),":"]}),e.jsx(n,{k:"doc.menu_scenario_1"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc.scenario_admin_title"}),":"]}),e.jsx(n,{k:"doc.menu_scenario_2"})]})]}),`
`,e.jsx(s.h2,{id:"-7",children:e.jsx(n,{k:"doc.best_practices_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc.menu_best_practice_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc.menu_best_practice_2"})})]}),`
`,e.jsx(s.h2,{id:"-8",children:e.jsx(n,{k:"doc.usage"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from "wimui";

<Menu>
  <MenuItem icon={<Icon name="CheckIcon" />}>Home</MenuItem>
  <MenuItem>About</MenuItem>
  <SubMenu itemKey="services" title="Services">
    <MenuItem>Service 1</MenuItem>
    <MenuItem>Service 2</MenuItem>
  </SubMenu>
</Menu>;
`})}),`
`,e.jsx(j,{}),`
`,e.jsx(s.h2,{id:"-9",children:e.jsx(n,{k:"doc.components"})}),`
`,e.jsx(s.h3,{id:"menu",children:"Menu"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_comp_menu_desc"})}),`
`,e.jsx(s.p,{children:"Props:"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"mode"}),": ",e.jsx(n,{k:"doc.menu_props_mode"})," (",e.jsx("code",{children:'"vertical"'})," | ",e.jsx("code",{children:'"horizontal"'})," | ",e.jsx("code",{children:'"inline"'}),")"]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultOpenKeys"}),": ",e.jsx(n,{k:"doc.menu_props_default_open_keys"})]})]}),`
`,e.jsx(s.h3,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_comp_menuitem_desc"})}),`
`,e.jsx(s.h3,{id:"submenu",children:"SubMenu"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_comp_submenu_desc"})}),`
`,e.jsx(s.h3,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_comp_itemgroup_desc"})}),`
`,e.jsx(s.h3,{id:"menudivider",children:"MenuDivider"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_comp_divider_desc"})}),`
`,e.jsx(s.h2,{id:"-10",children:e.jsx(n,{k:"doc.props"})}),`
`,e.jsx(t,{}),`
`,e.jsx(s.h2,{id:"-11",children:e.jsx(n,{k:"doc.examples"})}),`
`,e.jsx(s.h3,{id:"-12",children:e.jsx(n,{k:"doc.with_icons"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_stories_icons_desc"})}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(s.h3,{id:"-13",children:e.jsx(n,{k:"doc.with_submenu"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_stories_submenu_desc"})}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(s.h3,{id:"-14",children:e.jsx(n,{k:"doc.with_groups"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_stories_groups_desc"})}),`
`,e.jsx(c,{of:_}),`
`,e.jsx(s.h3,{id:"-15",children:e.jsx(n,{k:"doc.horizontal"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_stories_horizontal_desc"})}),`
`,e.jsx(c,{of:u}),`
`,e.jsx(s.h3,{id:"-16",children:e.jsx(n,{k:"doc.inline"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_stories_inline_desc"})}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(s.h2,{id:"-17",children:e.jsx(n,{k:"doc.accessibility"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc.menu_a11y_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc.menu_a11y_2"})}),e.jsx("li",{children:e.jsx(n,{k:"doc.menu_a11y_3"})}),e.jsx("li",{children:e.jsx(n,{k:"doc.menu_a11y_4"})})]}),`
`,e.jsx(s.h2,{id:"-18",children:e.jsx(n,{k:"doc.keyboard_nav_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_keyboard_desc"})}),`
`,e.jsx(s.h2,{id:"-19",children:e.jsx(n,{k:"doc.i18n_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc.menu_i18n_desc"})}),`
`,e.jsx(s.h2,{id:"-20",children:e.jsx(n,{k:"doc.test_title"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm run test -- Menu
`})})]})}function W(i={}){const{wrapper:s}={...o(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(d,{...i})}):d(i)}export{W as default};
