"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-splidnB2.js";import{D as n,d as r,h as i,m as a,n as o,u as s}from"./blocks-qGTaibzD.js";import{t as c}from"./mdx-react-shim-CsIlWI2E.js";import{n as l,t as u}from"./T-D8-Z5cHp.js";import{n as d,t as f}from"./Docgen-BscC-bD0.js";import{Danger as p,Info as m,Success as h,Warning as g,n as _,t as v}from"./Snackbar.stories-DYYTbSGl.js";function y(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{of:v}),`
`,(0,x.jsx)(a,{}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_long_desc`})}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(f,{componentName:`Snackbar`,section:`props`}),`
`,(0,x.jsx)(t.h2,{id:``,children:(0,x.jsx)(u,{k:`doc.design_intent_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_design_intent`})}),`
`,(0,x.jsx)(t.h2,{id:`-1`,children:(0,x.jsx)(u,{k:`doc.choice_matrix_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_choice_matrix_desc`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.component`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.usage_scenario`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Snackbar`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.snackbar_choice_snackbar_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Toast`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.snackbar_choice_toast_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Dialog`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.snackbar_choice_dialog_when`})})]})]})]}),`
`,(0,x.jsx)(f,{componentName:`Snackbar`,section:`anatomy`}),`
`,(0,x.jsx)(t.h2,{id:`-2`,children:(0,x.jsx)(u,{k:`doc.a11y_spec_title`})}),`
`,(0,x.jsx)(`ul`,{children:(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.snackbar_a11y_polite`})})}),`
`,(0,x.jsx)(t.h2,{id:`-3`,children:(0,x.jsx)(u,{k:`doc.real_world_scenarios_title`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.usage_scenario`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.description`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:(0,x.jsx)(u,{k:`doc.scenario_undo_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.snackbar_scenario_undo`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:(0,x.jsx)(u,{k:`doc.scenario_refresh_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.snackbar_scenario_refresh`})})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`-4`,children:(0,x.jsx)(u,{k:`doc.best_practices_title`})}),`
`,(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.snackbar_best_practice_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.snackbar_best_practice_2`})})]}),`
`,(0,x.jsx)(t.h2,{id:`-5`,children:(0,x.jsx)(u,{k:`doc.variations`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_var_desc`})}),`
`,(0,x.jsx)(t.h3,{id:`-6`,children:(0,x.jsx)(u,{k:`doc.success`})}),`
`,(0,x.jsx)(o,{of:h}),`
`,(0,x.jsx)(t.h3,{id:`-7`,children:(0,x.jsx)(u,{k:`doc.error`})}),`
`,(0,x.jsx)(o,{of:p}),`
`,(0,x.jsx)(t.h3,{id:`-8`,children:(0,x.jsx)(u,{k:`doc.warning`})}),`
`,(0,x.jsx)(o,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`-9`,children:(0,x.jsx)(u,{k:`doc.info`})}),`
`,(0,x.jsx)(o,{of:m}),`
`,(0,x.jsx)(t.h2,{id:`-10`,children:(0,x.jsx)(u,{k:`doc.snackbar_adv_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_adv_desc`})}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import { SnackbarProvider, useSnackbar } from "wimui";

const MyComponent = () => {
  const { showMessage } = useSnackbar();

  return (
    <button
      onClick={() =>
        showMessage({
          message: "Data saved",
          intent: "success",
          actionLabel: "Undo",
        })
      }
    >
      Show Snackbar
    </button>
  );
};
`})}),`
`,(0,x.jsx)(f,{componentName:`Snackbar`,section:`tokens`}),`
`,(0,x.jsx)(t.h2,{id:`-11`,children:(0,x.jsx)(u,{k:`doc.keyboard_nav_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.snackbar_keyboard_desc`})}),`
`,(0,x.jsx)(f,{componentName:`Snackbar`,section:`i18n`}),`
`,(0,x.jsx)(f,{componentName:`Snackbar`,section:`test`})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),c(),i(),_(),l(),d()}))();export{b as default};