import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CG91e243.js";import{M as l,T as d,D as c,C as e,P as p,a as x,S as j}from"./blocks-s02UGL5Q.js";import{T as i}from"./T-Y5paWcAE.js";import{T as a,D as h,a as _,B as m,L as T,R as g,W as f}from"./Tooltip.stories-CdduPBnF.js";import"./Tooltip-CzNxDn0g.js";import"./iframe-CKKDYfjM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2cbt4Hmg.js";import"./index-D-5DEcPl.js";import"./index-qKPWTIfQ.js";import"./index-8w_Yn6OU.js";import"./useTranslation-D80Uyf_x.js";import"./Button-BLRjZ0Hy.js";import"./index-K_u7tV9x.js";import"./Icon-DuRhDIXo.js";import"./floating-ui.react-BOn8_3TR.js";function s(n){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:a}),`
`,o.jsx(d,{}),`
`,o.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:o.jsx(i,{k:"doc_tooltip_title"})}),`
`,o.jsx(c,{}),`
`,o.jsx(t.h2,{id:"",children:o.jsx(i,{k:"doc_guidelines_title"})}),`
`,o.jsx(t.h3,{id:"-1",children:o.jsx(i,{k:"doc_guideline_best_practices"})}),`
`,o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(i,{k:"doc_tooltip_best_practice_1"})}),o.jsx("li",{children:o.jsx(i,{k:"doc_tooltip_best_practice_2"})}),o.jsx("li",{children:o.jsx(i,{k:"doc_tooltip_best_practice_3"})})]}),`
`,o.jsx("p",{children:o.jsx(i,{k:"doc_tooltip_long_desc"})}),`
`,o.jsx(t.h2,{id:"-2",children:o.jsx(i,{k:"doc_basic_usage"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip/Tooltip";

<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>;
`})}),`
`,o.jsx(t.h3,{id:"-3",children:o.jsx(i,{k:"doc_tooltip_delay"})}),`
`,o.jsx("p",{children:o.jsx(i,{k:"doc_tooltip_delay_desc"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`<Tooltip delay={500}>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Delayed tooltip</TooltipContent>
</Tooltip>
`})}),`
`,o.jsx(t.h2,{id:"-4",children:o.jsx(i,{k:"doc_usage_examples"})}),`
`,o.jsx(t.h3,{id:"-5",children:o.jsx(i,{k:"doc_default"})}),`
`,o.jsx(e,{of:h}),`
`,o.jsx(p,{}),`
`,o.jsx(t.h2,{id:"-6",children:o.jsx(i,{k:"doc_props"})}),`
`,o.jsx(x,{}),`
`,o.jsx(t.h2,{id:"-7",children:o.jsx(i,{k:"doc_tooltip_positioning"})}),`
`,o.jsx(t.h3,{id:"-8",children:o.jsx(i,{k:"doc_top"})}),`
`,o.jsx(e,{of:_}),`
`,o.jsx(t.h3,{id:"-9",children:o.jsx(i,{k:"doc_bottom"})}),`
`,o.jsx(e,{of:m}),`
`,o.jsx(t.h3,{id:"-10",children:o.jsx(i,{k:"doc_left"})}),`
`,o.jsx(e,{of:T}),`
`,o.jsx(t.h3,{id:"-11",children:o.jsx(i,{k:"doc_right"})}),`
`,o.jsx(e,{of:g}),`
`,o.jsx(t.h3,{id:"-12",children:o.jsx(i,{k:"doc_tooltip_with_delay"})}),`
`,o.jsx(e,{of:f}),`
`,o.jsx(j,{})]})}function W(n={}){const{wrapper:t}={...r(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(s,{...n})}):s(n)}export{W as default};
