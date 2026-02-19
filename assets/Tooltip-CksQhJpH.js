import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DPYnmjkI.js";import{M as s,C as i,a as l}from"./index-DqjFaxX_.js";import{T as p}from"./T-DbHuq7Bw.js";import{T as d,D as h,a,B as x,L as m,R as c,W as j}from"./Tooltip.stories-Bi9h15ox.js";import"./Tooltip-P552Sw4U.js";import"./iframe-DaIVb5M8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-COqnMFVS.js";import"./index-D4qojjh2.js";import"./index-ltzyWiRZ.js";import"./index-COYKkzTw.js";import"./index-CYQfgNtp.js";import"./useTranslation-B-sTzXYn.js";import"./Button-C1qLIhqZ.js";import"./index-Dgw6-tPc.js";import"./Icon-D9TceFkm.js";function e(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
`,o.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:o.jsx(p,{k:"doc_tooltip_title"})}),`
`,o.jsx(t.p,{children:"ホバーまたはフォーカス時に補足情報を表示します。"}),`
`,o.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip/Tooltip";\r
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
`,o.jsx(i,{of:x}),`
`,o.jsx(t.h4,{id:"left",children:"Left"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(t.h4,{id:"right",children:"Right"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(t.h3,{id:"with-delay",children:"With Delay"}),`
`,o.jsx(i,{of:j}),`
`,o.jsx(t.h2,{id:"api",children:"API"}),`
`,o.jsx(l,{})]})}function E(n={}){const{wrapper:t}={...r(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{E as default};
