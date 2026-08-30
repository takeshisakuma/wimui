"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-splidnB2.js";import{D as n,h as r,u as i}from"./blocks-qGTaibzD.js";import{t as a}from"./mdx-react-shim-CsIlWI2E.js";import{n as o,t as s}from"./T-D8-Z5cHp.js";import{n as c,t as l}from"./Command-D9_Akcsp.js";function u(e){let t={code:`code`,h2:`h2`,hr:`hr`,pre:`pre`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{title:`Token/Breakpoints`}),`
`,(0,f.jsx)(`h1`,{children:(0,f.jsx)(s,{k:`token.bp_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`token.bp_desc`})}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`token.bp_list`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`token.bp_th_key`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`token.bp_th_width`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`token.bp_th_device`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(t.code,{children:`sm`})}),(0,f.jsx)(`td`,{children:`576px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_sm_device`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(t.code,{children:`md`})}),(0,f.jsx)(`td`,{children:`768px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_md_device`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(t.code,{children:`lg`})}),(0,f.jsx)(`td`,{children:`992px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_lg_device`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(t.code,{children:`xl`})}),(0,f.jsx)(`td`,{children:`1200px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_xl_device`})})]})]})]}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`token.bp_scss`})}),`
`,(0,f.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<T k='token.bp_scss_desc' />`}}),`
`,(0,f.jsx)(`h3`,{children:(0,f.jsx)(t.code,{children:`@include up($breakpoint)`})}),`
`,(0,f.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<T k='token.bp_up_desc' />`}}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-scss`,children:`@use "../../tokens/breakpoints" as *;

.my-component {
  // Default (for small screens like smartphones)
  display: block;

  @include up(md) {
    // Style for screen width 768px and above
    display: flex;
  }
}
`})}),`
`,(0,f.jsx)(`h3`,{children:(0,f.jsx)(t.code,{children:`@include down($breakpoint)`})}),`
`,(0,f.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<T k='token.bp_down_desc' />`}}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-scss`,children:`@use "../../tokens/breakpoints" as *;

.my-button {
  padding: 16px;

  @include down(sm) {
    // Reduce padding only when screen width is 576px or less
    padding: 8px;
  }
}
`})}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`token.bp_mq_vs_cq_title`})}),`
`,(0,f.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<T k='token.bp_mq_vs_cq_desc' />`}}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`token.bp_mq_label`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`token.bp_cq_label`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`token.bp_decision_col`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_mq_criterion`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_cq_criterion`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.real_world_scenarios_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_mq_examples`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`token.bp_cq_examples`})})]})]})]}),`
`,(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`token.bp_cq_why_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`token.bp_cq_why_desc`})}),`
`,(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`token.bp_cq_usage_title`})}),`
`,(0,f.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<T k='token.bp_cq_usage_desc' />`}}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-scss`,children:`@use "../../tokens/breakpoints" as *;

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
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`token.bp_cq_note`})}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:``,children:(0,f.jsx)(s,{k:`doc.std_summary_title`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{width:`30%`},children:(0,f.jsx)(s,{k:`doc.std_summary_item`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`doc.std_summary_desc`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.global_standards_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`doc.global_standards_desc`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.test_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(l,{children:`npm run i18n:check`})})]})]})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),a(),c(),r(),o()}))();export{d as default};