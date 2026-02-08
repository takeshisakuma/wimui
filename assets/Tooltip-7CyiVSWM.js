import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-COgBPo70.js";import{M as s,C as i,a as l}from"./index-CXa1I-HV.js";import{T as p,D as h,a,B as d,L as x,R as m,W as c}from"./Tooltip.stories-BMdyHke4.js";import"./iframe-CQ0Ubeji.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaxEcj4W.js";import"./index-DQ99pi5X.js";import"./index-i0Uscrie.js";import"./index-BSzPpKL7.js";import"./index-CgHfhZWB.js";import"./index-CUeFpPxj.js";import"./Button-Dh_X0-gQ.js";import"./index-BjLbaRvQ.js";import"./Icon-BUq_Nb1C.js";import"./useTranslation-D7k7fFt6.js";function e(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(t.p,{children:"ホバーまたはフォーカス時に補足情報を表示します。"}),`
`,o.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";\r
\r
<Tooltip>\r
  <TooltipTrigger>Hover me</TooltipTrigger>\r
  <TooltipContent>\r
    Tooltip text\r
  </TooltipContent>\r
</Tooltip>
`})}),`
`,o.jsx(t.h3,{id:"delay",children:"Delay"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"delay"})," プロパティで表示までの遅延時間を設定できます（デフォルト: 200ms）。"]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`<Tooltip delay={500}>\r
  <TooltipTrigger>Hover me</TooltipTrigger>\r
  <TooltipContent>\r
    Delayed tooltip\r
  </TooltipContent>\r
</Tooltip>
`})}),`
`,o.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(t.h3,{id:"default",children:"Default"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(t.h3,{id:"positioning",children:"Positioning"}),`
`,o.jsx(t.h4,{id:"top",children:"Top"}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(t.h4,{id:"bottom",children:"Bottom"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(t.h4,{id:"left",children:"Left"}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(t.h4,{id:"right",children:"Right"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(t.h3,{id:"with-delay",children:"With Delay"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(t.h2,{id:"api",children:"API"}),`
`,o.jsx(l,{})]})}function E(n={}){const{wrapper:t}={...r(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{E as default};
