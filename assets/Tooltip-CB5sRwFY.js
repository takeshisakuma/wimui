import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-yzWstPwL.js";import{M as s,C as i,a as l}from"./blocks-RvW5MQ2B.js";import{T as p,D as h,a,B as d,L as x,R as m,W as c}from"./Tooltip.stories-KGEF9mjD.js";import"./iframe-pOyiLBDM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1AMkXdw.js";import"./index-BLX9bJcf.js";import"./index-C6oC6zBM.js";import"./index-BgAYcDyu.js";import"./index-C7t_AByc.js";import"./Button-Bqq1b3Oq.js";import"./index-CNFaK4Wu.js";import"./Icon-BdnaLHRQ.js";import"./useTranslation-BTUfQarB.js";function e(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(n.p,{children:"ホバーまたはフォーカス時に補足情報を表示します。"}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";\r
\r
<Tooltip>\r
  <TooltipTrigger>Hover me</TooltipTrigger>\r
  <TooltipContent>\r
    Tooltip text\r
  </TooltipContent>\r
</Tooltip>
`})}),`
`,o.jsx(n.h3,{id:"delay",children:"Delay"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"delay"})," プロパティで表示までの遅延時間を設定できます（デフォルト: 200ms）。"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`<Tooltip delay={500}>\r
  <TooltipTrigger>Hover me</TooltipTrigger>\r
  <TooltipContent>\r
    Delayed tooltip\r
  </TooltipContent>\r
</Tooltip>
`})}),`
`,o.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(n.h3,{id:"default",children:"Default"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n.h3,{id:"positioning",children:"Positioning"}),`
`,o.jsx(n.h4,{id:"top",children:"Top"}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(n.h4,{id:"bottom",children:"Bottom"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n.h4,{id:"left",children:"Left"}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(n.h4,{id:"right",children:"Right"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n.h3,{id:"with-delay",children:"With Delay"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n.h2,{id:"api",children:"API"}),`
`,o.jsx(l,{})]})}function w(t={}){const{wrapper:n}={...r(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(e,{...t})}):e(t)}export{w as default};
