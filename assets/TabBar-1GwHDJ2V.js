import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Bc4BInNb.js";import{M as o,C as i,a}from"./blocks-TnLz58s7.js";import"./TabBar-ejJodavu.js";import{T as d,D as l,W as x}from"./TabBar.stories-I0m5V9-F.js";import{T as n}from"./T-swAsn_9k.js";import"./iframe-BnGmj9_-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-joLxKjBL.js";import"./index-CuzJ-B4l.js";import"./index-LMFUUKZq.js";import"./index-By2e_LDN.js";import"./index-BRP2Ilxn.js";import"./Icon-CTeXjsnO.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-CPTvk89p.js";function t(c){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_tabbar_anatomy_root"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_tabbar_anatomy_content"})})]}),`
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
`,e.jsx(a,{})]})}function M(c={}){const{wrapper:s}={...r(),...c.components};return s?e.jsx(s,{...c,children:e.jsx(t,{...c})}):t(c)}export{M as default};
