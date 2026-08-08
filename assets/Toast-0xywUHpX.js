"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,d as r,h as i,m as a,n as o,u as s}from"./blocks-jhaXMEKM.js";import{t as c}from"./mdx-react-shim-D1rZKK2O.js";import{n as l,t as u}from"./T-Dz91WLtt.js";import{n as d,t as f}from"./Docgen-BeElYI3e.js";import{Danger as p,Success as m,Warning as h,n as g,t as _}from"./Toast.stories-fstF5WoY.js";function v(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:_}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_long_desc`})}),`
`,(0,b.jsx)(r,{}),`
`,(0,b.jsx)(f,{componentName:`Toast`,section:`props`}),`
`,(0,b.jsx)(t.h2,{id:``,children:(0,b.jsx)(u,{k:`doc.design_intent_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_design_intent`})}),`
`,(0,b.jsx)(t.h2,{id:`-1`,children:(0,b.jsx)(u,{k:`doc.choice_matrix_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_choice_matrix_desc`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.component`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.usage_scenario`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Toast`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.toast_choice_toast_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Snackbar`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.toast_choice_snackbar_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Alert`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.toast_choice_alert_when`})})]})]})]}),`
`,(0,b.jsx)(f,{componentName:`Toast`,section:`anatomy`}),`
`,(0,b.jsx)(t.h2,{id:`-2`,children:(0,b.jsx)(u,{k:`doc.a11y_spec_title`})}),`
`,(0,b.jsx)(`ul`,{children:(0,b.jsx)(`li`,{children:(0,b.jsx)(u,{k:`doc.toast_a11y_status`})})}),`
`,(0,b.jsx)(t.h2,{id:`-3`,children:(0,b.jsx)(u,{k:`doc.real_world_scenarios_title`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.usage_scenario`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.description`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:(0,b.jsx)(u,{k:`doc.scenario_save_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.toast_scenario_save`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:(0,b.jsx)(u,{k:`doc.scenario_copy_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.toast_scenario_copy`})})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`-4`,children:(0,b.jsx)(u,{k:`doc.best_practices_title`})}),`
`,(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(u,{k:`doc.toast_best_practice_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(u,{k:`doc.toast_best_practice_2`})})]}),`
`,(0,b.jsx)(t.h2,{id:`-5`,children:(0,b.jsx)(u,{k:`doc.toast_system_usage`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_system_usage_desc`})}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { ToastProvider, useToast } from "wimui";

const MyComponent = () => {
  const { show } = useToast();

  return (
    <button
      onClick={() =>
        show({
          title: "Success",
          description: "Data has been successfully saved.",
          status: "success",
        })
      }
    >
      Show Toast
    </button>
  );
};
`})}),`
`,(0,b.jsx)(t.h2,{id:`-6`,children:(0,b.jsx)(u,{k:`doc.variations`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_variants_desc`})}),`
`,(0,b.jsx)(t.h3,{id:`-7`,children:(0,b.jsx)(u,{k:`doc.success`})}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h3,{id:`-8`,children:(0,b.jsx)(u,{k:`doc.warning`})}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(t.h3,{id:`-9`,children:(0,b.jsx)(u,{k:`doc.error`})}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(f,{componentName:`Toast`,section:`tokens`}),`
`,(0,b.jsx)(t.h2,{id:`-10`,children:(0,b.jsx)(u,{k:`doc.keyboard_nav_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.toast_keyboard_desc`})}),`
`,(0,b.jsx)(f,{componentName:`Toast`,section:`i18n`}),`
`,(0,b.jsx)(f,{componentName:`Toast`,section:`test`})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),c(),i(),g(),l(),d()}))();export{y as default};