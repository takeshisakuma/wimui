import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Cpzut4EG.js";import{M as t}from"./index-CDeIroHw.js";import{T as n}from"./T-DIWC4I8T.js";import"./iframe-CN-u-8FK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9VI5iTV.js";import"./index-BMqb84-a.js";import"./index-BeFx1j0N.js";import"./index-B8Ad1bz4.js";import"./index-2F-nz17u.js";import"./useTranslation-gZYIT26N.js";function d(r){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Link vs Button"}),`
`,e.jsx(s.h1,{id:"",children:e.jsx(n,{k:"guide_lvb_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_desc"})}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"guide_lvb_criteria_title"})}),`
`,e.jsx("div",{style:{background:"#e0f2fe",padding:"16px",borderRadius:"8px",borderLeft:"4px solid #0284c7",margin:"16px 0"},children:e.jsx(n,{k:"guide_lvb_criteria_text"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{minWidth:"140px"},children:e.jsx(n,{k:"table_header_component"})}),e.jsxs("th",{children:[e.jsx("code",{children:"<a>"})," Tag"]}),e.jsxs("th",{children:[e.jsx("code",{children:"<button>"})," Tag"]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_role"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_role_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_role_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_scene"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_scene_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_scene_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_seo"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_seo_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_seo_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_behavior"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_behavior_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_behavior_b"})})]})]})]}),`
`,e.jsx(s.h2,{id:"コンポーネントの役割と典型的なアクション",children:"コンポーネントの役割と典型的なアクション"}),`
`,e.jsxs(s.p,{children:[`| コンポーネント | 目的 | 典型的なアクション |\r
| :--- | :--- | :--- |\r
| `,e.jsx(s.strong,{children:"Link"})," (",e.jsx(s.code,{children:"<a>"}),`) | ナビゲーション | 他のページへの遷移、ページ内リンク、外部サイトへの移動 |\r
| `,e.jsx(s.strong,{children:"Button"})," (",e.jsx(s.code,{children:"<button>"}),") | アクション | フォームの送信、モーダルの開閉、状態の変更、計算の実行 |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"1-",children:["1. ",e.jsx(n,{k:"guide_lvb_anchor_case"})]}),`
`,e.jsx("ul",{children:e.jsxs("li",{children:["🔗 ",e.jsx(n,{k:"guide_lvb_anchor_example"})]})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Good example -->\r
<a href="/checkout" class="btn btn-primary">Proceed to Checkout</a>
`})}),`
`,e.jsxs(s.h2,{id:"2-",children:["2. ",e.jsx(n,{k:"guide_lvb_button_case"})]}),`
`,e.jsx("ul",{children:e.jsxs("li",{children:["🖱️ ",e.jsx(n,{k:"guide_lvb_button_example"})]})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Good example -->\r
<button type="submit" class="btn btn-primary">Place Order</button>\r
<button type="button" onClick={addToCart}>Add to Cart</button>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(n,{k:"guide_lvb_a11y_title"})}),`
`,e.jsx("div",{style:{background:"#f0fdf4",padding:"16px",borderRadius:"8px",borderLeft:"4px solid #16a34a",margin:"16px 0"},children:e.jsx(n,{k:"guide_lvb_standard_text"})}),`
`,e.jsx(s.h3,{id:"-3",children:e.jsx(n,{k:"guide_lvb_a11y_rightclick"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_rightclick_desc"})}),`
`,e.jsx(s.h3,{id:"keyboard--screen-readers",children:"Keyboard & Screen Readers"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_keyboard_screenreader"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"-",children:["❓ ",e.jsx(n,{k:"guide_lvb_confusion_title"})]}),`
`,e.jsx(s.h3,{id:"form-submission",children:"Form Submission"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_confusion_submit_text"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"️-",children:["⚠️ ",e.jsx(n,{k:"guide_lvb_antipattern_title"})]}),`
`,e.jsx("div",{style:{background:"#fef2f2",padding:"16px",borderRadius:"8px",borderLeft:"4px solid #dc2626",margin:"16px 0"},children:e.jsx(n,{k:"guide_lvb_antipattern_text"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`// ❌ Bad: Button behaving as link\r
<button onClick={() => window.location.href = '/about'}>About (Bad)</button>\r
\r
// ❌ Bad: Anchor behaving as button\r
<a href="#" onClick={saveData}>Save (Bad)</a>
`})}),`
`,e.jsx(s.h2,{id:"-4",children:e.jsx(n,{k:"guide_lvb_summary"})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(n,{k:"guide_lvb_summary_text"}),`
`]})]})}function k(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(d,{...r})}):d(r)}export{k as default};
