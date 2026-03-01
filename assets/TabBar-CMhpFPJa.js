import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Qc9b23kE.js";import{M as s,C as r,a as i}from"./blocks-Cnn37VBH.js";import"./TabBar-wCWzWo9t.js";import{T as l,D as d,W as x}from"./TabBar.stories-MM9nrTf-.js";import{T as o}from"./T-DvLxYKZz.js";import"./iframe-4kQ8xNvr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B73ZmNqE.js";import"./index-UTB4rSFB.js";import"./index-B5r4f4jS.js";import"./index-CpzCQ-QW.js";import"./index-Y00k1ZS7.js";import"./Icon-bh-ccXg7.js";import"./useTranslation-BF3eF4oS.js";function t(a){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"tabbar",children:"TabBar"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(o,{k:"doc_tabbar_title"})}),`
`,e.jsx("p",{children:e.jsx(o,{k:"doc_tabbar_long_desc_p1"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(o,{k:"doc_tabbar_mobile_only"})})}),`
`]}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(o,{k:"doc_usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import TabBar from "@/components/TabBar/TabBar";
`})}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(o,{k:"doc_basic_usage"})}),`
`,e.jsx("p",{children:e.jsx(o,{k:"doc_tabbar_basic_usage_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [active, setActive] = useState("home");

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
`,e.jsx(n.h2,{id:"-2",children:e.jsx(o,{k:"doc_tabbar_badge_title"})}),`
`,e.jsx("p",{children:e.jsx(o,{k:"doc_tabbar_badge_desc"})}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"-3",children:e.jsx(o,{k:"doc_tabbar_icon_only_title"})}),`
`,e.jsx("p",{children:e.jsx(o,{k:"doc_tabbar_icon_only_desc"})}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"-4",children:e.jsx(o,{k:"doc_api_reference"})}),`
`,e.jsx(i,{})]})}function M(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{M as default};
