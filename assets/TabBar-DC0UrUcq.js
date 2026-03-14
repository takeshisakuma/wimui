import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dbw7WYh5.js";import{M as s,C as t,a as i}from"./blocks-YlLHP36W.js";import"./TabBar-DqzB_yvs.js";import{T as l,D as d,W as x}from"./TabBar.stories-CGTRYQ-V.js";import{T as o}from"./T-BEHcLzOk.js";import"./iframe-83F82oTe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pzv1Evjv.js";import"./index-BKcJ-fS3.js";import"./index-L4TRoZI1.js";import"./index-C9o4qv_2.js";import"./index-zfnUGBBN.js";import"./Icon-C3VpYLWw.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-CgRV5_0i.js";function a(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h2,{id:"-3",children:e.jsx(o,{k:"doc_tabbar_icon_only_title"})}),`
`,e.jsx("p",{children:e.jsx(o,{k:"doc_tabbar_icon_only_desc"})}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"-4",children:e.jsx(o,{k:"doc_api_reference"})}),`
`,e.jsx(i,{})]})}function y(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{y as default};
