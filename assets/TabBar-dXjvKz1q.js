"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,h as r,m as i,n as a,u as o}from"./blocks-jhaXMEKM.js";import{t as s}from"./mdx-react-shim-D1rZKK2O.js";import{n as c,t as l}from"./T-Dz91WLtt.js";import{n as u,t as d}from"./Docgen-BeElYI3e.js";import{Default as f,WithoutLabels as p,n as m,t as h}from"./TabBar.stories-DdHZ264E.js";function g(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,pre:`pre`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(i,{}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_long_desc_p1`})}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsx)(l,{k:`doc.tabbar_mobile_only`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:``,children:(0,v.jsx)(l,{k:`doc.design_intent_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_design_intent`})}),`
`,(0,v.jsx)(t.h2,{id:`-1`,children:(0,v.jsx)(l,{k:`doc.choice_matrix_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_choice_matrix_desc`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.component`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.usage_scenario`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`TabBar`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.tabbar_choice_self_when`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`Tabs`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.tabbar_choice_alt_when`})})]})]})]}),`
`,(0,v.jsx)(d,{componentName:`TabBar`,section:`anatomy`}),`
`,(0,v.jsx)(t.h2,{id:`-2`,children:(0,v.jsx)(l,{k:`doc.a11y_spec_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_a11y_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-3`,children:(0,v.jsx)(l,{k:`doc.real_world_scenarios_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.usage_scenario`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.table_header_description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(l,{k:`doc.scenario_nav_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.tabbar_scenario_1`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(l,{k:`doc.scenario_admin_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.tabbar_scenario_2`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-4`,children:(0,v.jsx)(l,{k:`doc.best_practices_title`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.tabbar_best_practice_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.tabbar_best_practice_2`})})]}),`
`,(0,v.jsx)(t.h2,{id:`-5`,children:(0,v.jsx)(l,{k:`doc.usage`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`import { TabBar } from "wimui";
`})}),`
`,(0,v.jsx)(t.h2,{id:`-6`,children:(0,v.jsx)(l,{k:`doc.basic_usage`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_basic_usage_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const [active, setActive] = useState("home");

<TabBar>
  <TabBar.Item
    label="Home"
    icon={<HomeIcon />}
    active={active === "home"}
    onClick={() => setActive("home")}
  />
  <TabBar.Item
    label="Search"
    icon={<SearchIcon />}
    active={active === "search"}
    onClick={() => setActive("search")}
  />
  <TabBar.Item
    label="Profile"
    icon={<UserIcon />}
    active={active === "profile"}
    onClick={() => setActive("profile")}
  />
</TabBar>;
`})}),`
`,(0,v.jsx)(t.h2,{id:`-7`,children:(0,v.jsx)(l,{k:`doc.tabbar_badge_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_badge_desc`})}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`-8`,children:(0,v.jsx)(l,{k:`doc.tabbar_icon_only_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_icon_only_desc`})}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(d,{componentName:`TabBar`,section:`props`}),`
`,(0,v.jsx)(d,{componentName:`TabBar`,section:`tokens`}),`
`,(0,v.jsx)(t.h2,{id:`-9`,children:(0,v.jsx)(l,{k:`doc.keyboard_nav_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.tabbar_keyboard_desc`})}),`
`,(0,v.jsx)(d,{componentName:`TabBar`,section:`i18n`}),`
`,(0,v.jsx)(d,{componentName:`TabBar`,section:`test`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c(),u()}))();export{_ as default};