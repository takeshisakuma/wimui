import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as x,M as o,T as i,P as r,a as j,C as c}from"./blocks-B62MMC0C.js";import{C as _,W as l,a as h,b as m,O as a}from"./ContextMenu.stories-CNQ1cvSH.js";import{T as n}from"./T-CkAzEBp_.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BPJl5Wr-.js";import"./index-B7eul-Hp.js";import"./index-Bp80jN63.js";import"./index-CAUnMwS_.js";import"./index-DYK3pW9f.js";import"./ContextMenu-ChpsSFQ0.js";import"./index-BGnpSqQE.js";import"./floating-ui.react-B1z-es1-.js";import"./Transition-BsYZ2K1q.js";import"./BaseListItem-_d5DHmHA.js";import"./Icon-CTpb_z-A.js";import"./useTranslation-Deg3T5Lq.js";function d(s){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:_}),`
`,e.jsx(i,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_contextmenu_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_long_desc_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_note"})}),`
`,e.jsx(t.h2,{id:"",children:e.jsx(n,{k:"doc_design_intent_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_design_intent"})}),`
`,e.jsx(t.h2,{id:"-1",children:e.jsx(n,{k:"doc_choice_matrix_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_choice_matrix_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_usage_scenario"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"ContextMenu"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_choice_self_when"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Dropdown"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_choice_alt_when"})})]})]})]}),`
`,e.jsx(t.h2,{id:"-2",children:e.jsx(n,{k:"doc_anatomy_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc_contextmenu_anatomy_root_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_anatomy_root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(n,{k:"doc_contextmenu_anatomy_content_label"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_anatomy_content"})})]})]})]}),`
`,e.jsx(t.h2,{id:"-3",children:e.jsx(n,{k:"doc_content_guidelines_title"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"doc_contextmenu_content_guideline"})})}),`
`,e.jsx(t.h2,{id:"-4",children:e.jsx(n,{k:"doc_motion_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_motion_desc"})}),`
`,e.jsx(t.h2,{id:"-5",children:e.jsx(n,{k:"doc_a11y_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_desc"})}),`
`,e.jsx(t.h2,{id:"-6",children:e.jsx(n,{k:"doc_real_world_scenarios_title"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc_scenario_files_title"}),":"]}),e.jsx(n,{k:"doc_contextmenu_scenario_1"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(n,{k:"doc_scenario_admin_title"}),":"]}),e.jsx(n,{k:"doc_contextmenu_scenario_2"})]})]}),`
`,e.jsx(t.h2,{id:"-7",children:e.jsx(n,{k:"doc_best_practices_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_contextmenu_best_practice_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_contextmenu_best_practice_2"})})]}),`
`,e.jsx(t.h2,{id:"-8",children:e.jsx(n,{k:"doc_usage"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ContextMenu, ContextMenuItem, ContextMenuDivider } from "wimui";

<ContextMenu
  menu={
    <>
      <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
      <ContextMenuItem onClick={handleCopy}>Copy</ContextMenuItem>
      <ContextMenuDivider />
      <ContextMenuItem danger onClick={handleDelete}>
        Delete
      </ContextMenuItem>
    </>
  }
>
  <div>Right-click this element</div>
</ContextMenu>;
`})}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"-9",children:e.jsx(n,{k:"doc_components"})}),`
`,e.jsx(t.h3,{id:"contextmenu",children:"ContextMenu"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_comp_1_desc"})}),`
`,e.jsx(t.p,{children:"Props:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"menu"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_prop_1_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_prop_2_desc"})})]})]})]}),`
`,e.jsx(t.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_comp_2_desc"})}),`
`,e.jsx(t.p,{children:"Props:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_prop_3_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"danger"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_prop_4_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_prop_5_desc"})})]})]})]}),`
`,e.jsx(t.h3,{id:"contextmenudivider",children:"ContextMenuDivider"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_comp_3_desc"})}),`
`,e.jsx(t.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_comp_4_desc"})}),`
`,e.jsx(j,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"-10",children:e.jsx(n,{k:"doc_contextmenu_story_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_1_desc"})}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h3,{id:"-11",children:e.jsx(n,{k:"doc_contextmenu_story_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_2_desc"})}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(t.h3,{id:"-12",children:e.jsx(n,{k:"doc_contextmenu_story_3"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_3_desc"})}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(t.h3,{id:"-13",children:e.jsx(n,{k:"doc_contextmenu_story_4"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_4_desc"})}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(t.h2,{id:"-14",children:e.jsx(n,{k:"doc_features"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_features"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_1"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_1_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_2"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_2_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_3"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_3_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_4"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_4_desc"})})]})]})]}),`
`,e.jsx(t.h2,{id:"-15",children:e.jsx(n,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_3"})})]})}function X(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(d,{...s})}):d(s)}export{X as default};
