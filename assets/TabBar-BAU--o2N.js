import{j as n}from"./jsx-runtime-u17CrQMm.js";import{u as r,M as d,C as i,a}from"./blocks-CvY7VvN2.js";import"./TabBar-xTTWnHKH.js";import{T as o,D as l,W as x}from"./TabBar.stories-CZG7mkhs.js";import{T as e}from"./T-CD3mXOKe.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-00CRNq2O.js";import"./index-TLWsG8hr.js";import"./index-BKfDsxAZ.js";import"./index-DpixjxJs.js";import"./index-BH-P-2NS.js";import"./index-Gwnravlj.js";import"./Icon-DuncFQFu.js";import"./useTranslation-BYdSjFhs.js";function t(c){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o}),`
`,n.jsx(s.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(e,{k:"doc.tabbar_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_long_desc_p1"})}),`
`,n.jsxs(s.blockquote,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(e,{k:"doc.tabbar_mobile_only"})})}),`
`]}),`
`,n.jsx(s.h2,{id:"",children:n.jsx(e,{k:"doc.design_intent_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_design_intent"})}),`
`,n.jsx(s.h2,{id:"-1",children:n.jsx(e,{k:"doc.choice_matrix_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_choice_matrix_desc"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx(e,{k:"doc.component"})}),n.jsx("th",{children:n.jsx(e,{k:"doc.usage_scenario"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"TabBar"})}),n.jsx("td",{children:n.jsx(e,{k:"doc.tabbar_choice_self_when"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Tabs"})}),n.jsx("td",{children:n.jsx(e,{k:"doc.tabbar_choice_alt_when"})})]})]})]}),`
`,n.jsx(s.h2,{id:"-2",children:n.jsx(e,{k:"doc.anatomy_title"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx(e,{k:"doc.component"})}),n.jsx("th",{children:n.jsx(e,{k:"doc.description"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:n.jsx(e,{k:"doc.tabbar_anatomy_root_label"})})}),n.jsx("td",{children:n.jsx(e,{k:"doc.tabbar_anatomy_root"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:n.jsx(e,{k:"doc.tabbar_anatomy_content_label"})})}),n.jsx("td",{children:n.jsx(e,{k:"doc.tabbar_anatomy_content"})})]})]})]}),`
`,n.jsx(s.h2,{id:"-3",children:n.jsx(e,{k:"doc.content_guidelines_title"})}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx(e,{k:"doc.tabbar_content_guideline"})})}),`
`,n.jsx(s.h2,{id:"-4",children:n.jsx(e,{k:"doc.motion_spec_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_motion_desc"})}),`
`,n.jsx(s.h2,{id:"-5",children:n.jsx(e,{k:"doc.a11y_spec_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_a11y_desc"})}),`
`,n.jsx(s.h2,{id:"-6",children:n.jsx(e,{k:"doc.real_world_scenarios_title"})}),`
`,n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx(e,{k:"doc.scenario_nav_title"}),":"]}),n.jsx(e,{k:"doc.tabbar_scenario_1"})]}),n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx(e,{k:"doc.scenario_admin_title"}),":"]}),n.jsx(e,{k:"doc.tabbar_scenario_2"})]})]}),`
`,n.jsx(s.h2,{id:"-7",children:n.jsx(e,{k:"doc.best_practices_title"})}),`
`,n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(e,{k:"doc.tabbar_best_practice_1"})}),n.jsx("li",{children:n.jsx(e,{k:"doc.tabbar_best_practice_2"})})]}),`
`,n.jsx(s.h2,{id:"-8",children:n.jsx(e,{k:"doc.usage"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-jsx",children:`import TabBar from "@/components/navigation/TabBar/TabBar";
`})}),`
`,n.jsx(s.h2,{id:"-9",children:n.jsx(e,{k:"doc.basic_usage"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_basic_usage_desc"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-jsx",children:`const [active, setActive] = useState("home");

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
`,n.jsx(s.h2,{id:"-10",children:n.jsx(e,{k:"doc.tabbar_badge_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_badge_desc"})}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(s.h2,{id:"-11",children:n.jsx(e,{k:"doc.tabbar_icon_only_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_icon_only_desc"})}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(s.h2,{id:"-12",children:n.jsx(e,{k:"doc.api_reference"})}),`
`,n.jsx(a,{}),`
`,n.jsx(s.h2,{id:"-13",children:n.jsx(e,{k:"doc.keyboard_nav_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_keyboard_desc"})}),`
`,n.jsx(s.h2,{id:"-14",children:n.jsx(e,{k:"doc.i18n_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"doc.tabbar_i18n_desc"})}),`
`,n.jsx(s.h2,{id:"-15",children:n.jsx(e,{k:"doc.test_title"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`npm run test -- TabBar
`})})]})}function C(c={}){const{wrapper:s}={...r(),...c.components};return s?n.jsx(s,{...c,children:n.jsx(t,{...c})}):t(c)}export{C as default};
