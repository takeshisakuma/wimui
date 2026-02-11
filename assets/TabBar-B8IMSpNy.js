import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-WtwRskhy.js";import{M as t,C as a,a as c}from"./blocks-DVQndDHi.js";import{T as s,D as l,W as m}from"./TabBar.stories-CpbECjq6.js";import"./iframe-BF6ISSNM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOjwJZwD.js";import"./index-DAHqHjfk.js";import"./index-CailHeRG.js";import"./index-SQWmBR3Y.js";import"./index-BJP38wbw.js";import"./Icon-CQfDL3_A.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s}),`
`,e.jsx(n.h1,{id:"tabbar",children:"TabBar"}),`
`,e.jsx(n.p,{children:"TabBar is a persistent bottom navigation bar for mobile applications."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import TabBar from "./TabBar";
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [active, setActive] = useState('home');\r
\r
<TabBar>\r
  <TabBar.Item \r
    label="Home" \r
    icon={<HomeIcon />} \r
    active={active === 'home'} \r
    onClick={() => setActive('home')} \r
  />\r
  <TabBar.Item \r
    label="Search" \r
    icon={<SearchIcon />} \r
    active={active === 'search'} \r
    onClick={() => setActive('search')} \r
  />\r
  <TabBar.Item \r
    label="Profile" \r
    icon={<UserIcon />} \r
    active={active === 'profile'} \r
    onClick={() => setActive('profile')} \r
  />\r
</TabBar>
`})}),`
`,e.jsx(n.h2,{id:"with-badges",children:"With Badges"}),`
`,e.jsxs(n.p,{children:["You can add a ",e.jsx(n.code,{children:"badge"})," prop to any ",e.jsx(n.code,{children:"TabBar.Item"})," to show a notification count or indicator."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(n.h2,{id:"icon-only",children:"Icon Only"}),`
`,e.jsx(n.p,{children:"Labels are optional. If omitted, the icon will center vertically."}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{})]})}function I(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{I as default};
