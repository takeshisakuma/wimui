import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DlgCFPTR.js";import{M as r,P as c,a as l}from"./blocks-CeNsGH9y.js";import{C as a}from"./CommandPalette.stories-C3Latd_t.js";import{T as t}from"./T-QoylbS6P.js";import"./iframe-CxGJGCEe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWcj0LX7.js";import"./index-Bz28715Q.js";import"./index-C0leNsjK.js";import"./index-DldsUZWL.js";import"./index-kCw4ylN7.js";import"./Portal-Qvj5YdbE.js";import"./Transition-pTJKl-ee.js";import"./Icon-CBegJE_x.js";import"./FocusTrap-CrzzXr4W.js";import"./useTranslation-zoxZjRpn.js";function s(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...o(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"command-palette",children:"Command Palette"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(t,{k:"doc_commandpalette_title"})}),`
`,e.jsx("p",{children:e.jsx(t,{k:"doc_commandpalette_long_desc_1"})}),`
`,e.jsx("p",{children:e.jsx(t,{k:"doc_commandpalette_long_desc_2"})}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(t,{k:"doc_features"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(t,{k:"doc_features"})}),e.jsx("th",{children:e.jsx(t,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(t,{k:"doc_commandpalette_feature_1"})})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_feature_1_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(t,{k:"doc_commandpalette_feature_2"})})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_feature_2_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(t,{k:"doc_commandpalette_feature_3"})})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_feature_3_desc"})})]})]})]}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(t,{k:"doc_components_structure"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(t,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(t,{k:"doc_role"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPalette"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteTrigger"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteContent"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteInput"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_4"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteList"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteGroup"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_6"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteItem"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_7"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteEmpty"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_8"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteFooter"})}),e.jsx("td",{children:e.jsx(t,{k:"doc_commandpalette_role_9"})})]})]})]}),`
`,e.jsx(n.h2,{id:"-2",children:e.jsx(t,{k:"doc_usage"})}),`
`,e.jsx(n.h3,{id:"-3",children:e.jsx(t,{k:"doc_commandpalette_usage_1"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CommandPalette>
  <CommandPaletteTrigger>
    <span>Open Command</span>
    <kbd>⌘K</kbd>
  </CommandPaletteTrigger>

  <CommandPaletteContent>
    <CommandPaletteInput />
    <CommandPaletteList>
      <CommandPaletteItem onSelect={() => {}}>Action 1</CommandPaletteItem>
    </CommandPaletteList>
  </CommandPaletteContent>
</CommandPalette>
`})}),`
`,e.jsx(n.h3,{id:"-4",children:e.jsx(t,{k:"doc_commandpalette_usage_2"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [open, setOpen] = useState(false);

return (
  <>
    <button onClick={() => setOpen(true)}>Open</button>
    <CommandPalette open={open} onOpenChange={setOpen}>
      <CommandPaletteContent>{/* ... */}</CommandPaletteContent>
    </CommandPalette>
  </>
);
`})}),`
`,e.jsx(n.h2,{id:"-5",children:e.jsx(t,{k:"doc_preview"})}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"-6",children:e.jsx(t,{k:"doc_properties"})}),`
`,e.jsx(l,{})]})}function I(d={}){const{wrapper:n}={...o(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{I as default};
