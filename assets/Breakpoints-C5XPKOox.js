import{j as n}from"./jsx-runtime-u17CrQMm.js";import{u as r,M as c}from"./blocks-DcM3rLFC.js";import{T as e}from"./T-D0FbGMFl.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BZoygCoD.js";import"./index-C3cltd-v.js";import"./index-DIvW4L8Y.js";import"./index-DhezEoE4.js";import"./index-BinIN5UN.js";import"./useTranslation-CVcR0t5u.js";function d(t){const s={code:"code",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Token/Breakpoints"}),`
`,n.jsx("h1",{children:n.jsx(e,{k:"token.bp_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"token.bp_desc"})}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:n.jsx(e,{k:"token.bp_list"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx(e,{k:"token.bp_th_key"})}),n.jsx("th",{children:n.jsx(e,{k:"token.bp_th_width"})}),n.jsx("th",{children:n.jsx(e,{k:"token.bp_th_device"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(s.code,{children:"sm"})}),n.jsx("td",{children:"576px"}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_sm_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(s.code,{children:"md"})}),n.jsx("td",{children:"768px"}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_md_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(s.code,{children:"lg"})}),n.jsx("td",{children:"992px"}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_lg_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(s.code,{children:"xl"})}),n.jsx("td",{children:"1200px"}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_xl_device"})})]})]})]}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:n.jsx(e,{k:"token.bp_scss"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token.bp_scss_desc' />"}}),`
`,n.jsx("h3",{children:n.jsx(s.code,{children:"@include up($breakpoint)"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token.bp_up_desc' />"}}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;

.my-component {
  // Default (for small screens like smartphones)
  display: block;

  @include up(md) {
    // Style for screen width 768px and above
    display: flex;
  }
}
`})}),`
`,n.jsx("h3",{children:n.jsx(s.code,{children:"@include down($breakpoint)"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token.bp_down_desc' />"}}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;

.my-button {
  padding: 16px;

  @include down(sm) {
    // Reduce padding only when screen width is 576px or less
    padding: 8px;
  }
}
`})}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:n.jsx(e,{k:"token.bp_mq_vs_cq_title"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token.bp_mq_vs_cq_desc' />"}}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{}),n.jsx("th",{children:n.jsx(e,{k:"token.bp_mq_label"})}),n.jsx("th",{children:n.jsx(e,{k:"token.bp_cq_label"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:n.jsx(e,{k:"token.bp_decision_col"})})}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_mq_criterion"})}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_cq_criterion"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:n.jsx(e,{k:"doc.real_world_scenarios_title"})})}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_mq_examples"})}),n.jsx("td",{children:n.jsx(e,{k:"token.bp_cq_examples"})})]})]})]}),`
`,n.jsx("h3",{children:n.jsx(e,{k:"token.bp_cq_why_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"token.bp_cq_why_desc"})}),`
`,n.jsx("h3",{children:n.jsx(e,{k:"token.bp_cq_usage_title"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token.bp_cq_usage_desc' />"}}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;

.wim-my-component {
  container-type: inline-size;

  // Narrow layout when container is 768px or less
  @include container-down(md) {
    .wim-my-component__fields {
      flex-direction: column;
    }
  }
}
`})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"token.bp_cq_note"})})]})}function m(t={}){const{wrapper:s}={...r(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(d,{...t})}):d(t)}export{m as default};
