import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as x}from"./index-BKDHwPvH.js";import{M as o,T as r,P as i,a as j,C as c}from"./blocks-C2yLos7v.js";import{C as h,W as _,a as l,b as m,O as p}from"./ContextMenu.stories-DZHGPTS6.js";import{T as n}from"./T-DfJNEyk-.js";import"./iframe-DUo8Bj02.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbJcNV3Q.js";import"./index-w-Maux7X.js";import"./index-BnWDOAAC.js";import"./index-DZV6DE0N.js";import"./index-CI1dtVTQ.js";import"./Portal-dxcBIpeK.js";import"./Transition-B6GdazEw.js";import"./BaseListItem-xP86GDCQ.js";import"./Icon-C5_8LwyI.js";import"./useTranslation-C2tw1dPV.js";function d(s){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
`,e.jsx(r,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_contextmenu_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_long_desc_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_note"})}),`
`,e.jsx(t.h2,{id:"",children:e.jsx(n,{k:"doc_usage"})}),`
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
`,e.jsx(i,{}),`
`,e.jsx(t.h2,{id:"-1",children:e.jsx(n,{k:"doc_components"})}),`
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
`,e.jsx(t.h3,{id:"-2",children:e.jsx(n,{k:"doc_contextmenu_story_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_1_desc"})}),`
`,e.jsx(c,{of:_}),`
`,e.jsx(t.h3,{id:"-3",children:e.jsx(n,{k:"doc_contextmenu_story_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_2_desc"})}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h3,{id:"-4",children:e.jsx(n,{k:"doc_contextmenu_story_3"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_3_desc"})}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(t.h3,{id:"-5",children:e.jsx(n,{k:"doc_contextmenu_story_4"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_story_4_desc"})}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(t.h2,{id:"-6",children:e.jsx(n,{k:"doc_features"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"doc_features"})}),e.jsx("th",{children:e.jsx(n,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_1"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_1_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_2"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_2_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_3"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_3_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"doc_contextmenu_feat_4"})})}),e.jsx("td",{children:e.jsx(n,{k:"doc_contextmenu_feat_4_desc"})})]})]})]}),`
`,e.jsx(t.h2,{id:"-7",children:e.jsx(n,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_contextmenu_a11y_3"})})]})}function w(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(d,{...s})}):d(s)}export{w as default};
