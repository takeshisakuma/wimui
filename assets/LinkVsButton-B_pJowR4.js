import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CzTKufIO.js";import{M as l}from"./blocks-DyH3g6e0.js";import{T as n}from"./T-BFb9GdfI.js";import"./iframe-VGitSx0_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVOPTU0B.js";import"./index-B6IzPac0.js";import"./index-CeBwqNZk.js";import"./index-BRJRhEe5.js";import"./useTranslation-BYDAsujS.js";function t(d){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Guides/Link vs Button"}),`
`,e.jsx(s.h1,{id:"",children:e.jsx(n,{k:"guide_lvb_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_desc"})}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"guide_lvb_criteria_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{minWidth:"140px"},children:e.jsx(n,{k:"table_header_component"})}),e.jsx("th",{children:e.jsx("code",{children:"<Link>"})}),e.jsx("th",{children:e.jsx("code",{children:"<Button>"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_judgment"})})})}),e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_judgment_a"})})})}),e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_judgment_b"})})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_role"})})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_role_a"})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_role_b"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_scene"})})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_scene_a"})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_scene_b"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_seo"})})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_seo_a"})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_seo_b"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_behavior"})})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_behavior_a"})})}),e.jsx("td",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_table_behavior_b"})})})]})]})]}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(n,{k:"linkvsbutton_roles_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"table_header_component"})}),e.jsx("th",{children:e.jsx(n,{k:"table_header_purpose"})}),e.jsx("th",{children:e.jsx(n,{k:"linkvsbutton_link_typical"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Link"})," (",e.jsx("code",{children:"<a>"}),")"]})}),e.jsx("td",{children:e.jsx(n,{k:"cat_navigation"})}),e.jsx("td",{children:e.jsx(n,{k:"linkvsbutton_link_examples"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Button"})," (",e.jsx("code",{children:"<button>"}),")"]})}),e.jsx("td",{children:e.jsx(n,{k:"linkvsbutton_btn_typical"})}),e.jsx("td",{children:e.jsx(n,{k:"linkvsbutton_btn_examples"})})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-3",children:e.jsx(n,{k:"doc_use_cases"})}),`
`,e.jsx(s.h3,{id:"-4",children:e.jsx(n,{k:"guide_lvb_anchor_case"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_anchor_example"})})})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Good example -->
<a href="/checkout" class="btn btn-primary">Proceed to Checkout</a>
`})}),`
`,e.jsx(s.h3,{id:"-5",children:e.jsx(n,{k:"guide_lvb_button_case"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_button_example"})})})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Good example -->
<button type="button" class="btn btn-primary">Add to Cart</button>
<button type="button" onClick="{addToCart}">Add to Cart</button>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-6",children:e.jsx(n,{k:"guide_lvb_a11y_title"})}),`
`,e.jsx(s.h3,{id:"-7",children:e.jsx(n,{k:"guide_lvb_a11y_rightclick"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_rightclick_desc"})}),`
`,e.jsx(s.h3,{id:"keyboard--screen-readers",children:"Keyboard & Screen Readers"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_keyboard_screenreader"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-8",children:e.jsx(n,{k:"guide_lvb_antipattern_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_antipattern_text"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`// Bad: Button behaving as link
<button onClick={() => window.location.href = '/about'}>About (Bad)</button>

// Bad: Anchor behaving as button
<a href="#" onClick={saveData}>Save (Bad)</a>
`})})]})}function k(d={}){const{wrapper:s}={...i(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(t,{...d})}):t(d)}export{k as default};
