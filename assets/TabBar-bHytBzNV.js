import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as r,M as d,C as i,a}from"./blocks-YV_YYV1O.js";import"./TabBar-CSW2ceot.js";import{T as o,D as l,W as x}from"./TabBar.stories-U4XIbb89.js";import{T as n}from"./T-BPmsGk09.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D6rvPPdp.js";import"./index-Il7EPDiT.js";import"./index-Cg-CQUTy.js";import"./index-CLZzvcUW.js";import"./index-CmE3iBFb.js";import"./index-C8PrtP12.js";import"./Icon-HFh0Vh85.js";import"./useTranslation-DWrX2Ryb.js";function t(c){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(s.h1,{id:"tabbar",children:"TabBar"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_tabbar_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_long_desc_p1"})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(n,{k:"doc_tabbar_mobile_only"})})}),`
`]}),`
`,e.jsx(s.h2,{id:"",children:e.jsx(n,{k:"doc_design_intent_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_design_intent"})}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"doc_choice_matrix_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_choice_matrix_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_usage_scenario"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"TabBar"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_tabbar_choice_self_when"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Tabs"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_tabbar_choice_alt_when"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(n,{k:"doc_anatomy_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc_tabbar_anatomy_root_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_tabbar_anatomy_root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc_tabbar_anatomy_content_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_tabbar_anatomy_content"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-3",children:e.jsx(n,{k:"doc_content_guidelines_title"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"doc_tabbar_content_guideline"})})}),`
`,e.jsx(s.h2,{id:"-4",children:e.jsx(n,{k:"doc_motion_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_motion_desc"})}),`
`,e.jsx(s.h2,{id:"-5",children:e.jsx(n,{k:"doc_a11y_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_a11y_desc"})}),`
`,e.jsx(s.h2,{id:"-6",children:e.jsx(n,{k:"doc_real_world_scenarios_title"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc_scenario_nav_title"}),":"]}),e.jsx(n,{k:"doc_tabbar_scenario_1"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc_scenario_admin_title"}),":"]}),e.jsx(n,{k:"doc_tabbar_scenario_2"})]})]}),`
`,e.jsx(s.h2,{id:"-7",children:e.jsx(n,{k:"doc_best_practices_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_tabbar_best_practice_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_tabbar_best_practice_2"})})]}),`
`,e.jsx(s.h2,{id:"-8",children:e.jsx(n,{k:"doc_usage"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import TabBar from "@/components/TabBar/TabBar";
`})}),`
`,e.jsx(s.h2,{id:"-9",children:e.jsx(n,{k:"doc_basic_usage"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_basic_usage_desc"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`const [active, setActive] = useState("home");

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
`,e.jsx(s.h2,{id:"-10",children:e.jsx(n,{k:"doc_tabbar_badge_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_badge_desc"})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(s.h2,{id:"-11",children:e.jsx(n,{k:"doc_tabbar_icon_only_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_icon_only_desc"})}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"-12",children:e.jsx(n,{k:"doc_api_reference"})}),`
`,e.jsx(a,{}),`
`,e.jsx(s.h2,{id:"-13",children:e.jsx(n,{k:"doc_keyboard_nav_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_keyboard_desc"})}),`
`,e.jsx(s.h2,{id:"-14",children:e.jsx(n,{k:"doc_i18n_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_i18n_desc"})}),`
`,e.jsx(s.h2,{id:"-15",children:e.jsx(n,{k:"doc_test_title"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm run test -- TabBar
`})})]})}function C(c={}){const{wrapper:s}={...r(),...c.components};return s?e.jsx(s,{...c,children:e.jsx(t,{...c})}):t(c)}export{C as default};
