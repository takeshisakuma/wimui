import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as i,M as o,C as c,a as d}from"./blocks-C34TwFjl.js";import"./TabBar-D8BdDNEA.js";import{T as a,D as l,W as x}from"./TabBar.stories-CEGfgyQj.js";import{T as n}from"./T-BLBpE4Wl.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ddm5FQ3s.js";import"./index-NSRt9_IK.js";import"./index-HqbpVp3l.js";import"./index-BYTxnAVb.js";import"./index-D67ADwda.js";import"./index-DmFcGT-q.js";import"./Icon-MOwUJT5R.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-BxKydHqK.js";function t(r){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
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
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`const [active, setActive] = useState("home");\r
\r
<TabBar>\r
  <TabBar.Item\r
    label="Home"\r
    icon={<HomeIcon />}\r
    active={active === "home"}\r
    onClick={() => setActive("home")}\r
  />\r
  <TabBar.Item\r
    label="Search"\r
    icon={<SearchIcon />}\r
    active={active === "search"}\r
    onClick={() => setActive("search")}\r
  />\r
  <TabBar.Item\r
    label="Profile"\r
    icon={<UserIcon />}\r
    active={active === "profile"}\r
    onClick={() => setActive("profile")}\r
  />\r
</TabBar>;
`})}),`
`,e.jsx(s.h2,{id:"-10",children:e.jsx(n,{k:"doc_tabbar_badge_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_badge_desc"})}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(s.h2,{id:"-11",children:e.jsx(n,{k:"doc_tabbar_icon_only_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_tabbar_icon_only_desc"})}),`
`,e.jsx(c,{of:x}),`
`,e.jsx(s.h2,{id:"-12",children:e.jsx(n,{k:"doc_api_reference"})}),`
`,e.jsx(d,{})]})}function I(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{I as default};
