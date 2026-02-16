import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Ck-gB__-.js";import{M as i}from"./index-CSevX7wz.js";import{T as n}from"./T-CCQl6naC.js";import"./iframe-4bM1vrrp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PwYTsuqL.js";import"./index-BfRII9fN.js";import"./index-DuJtemmP.js";import"./index-45a-nKAS.js";import"./index-B9hN9QaI.js";import"./useTranslation-BFrfyqZo.js";function r(d){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",pre:"pre",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Link vs Button"}),`
`,e.jsx(s.h1,{id:"",children:e.jsx(n,{k:"guide_lvb_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_desc"})}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"guide_lvb_criteria_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{minWidth:"140px"},children:e.jsx(n,{k:"table_header_component"})}),e.jsxs("th",{children:[e.jsx("code",{children:"<a>"})," Tag"]}),e.jsxs("th",{children:[e.jsx("code",{children:"<button>"})," Tag"]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_judgment"})})}),e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_judgment_a"})})}),e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_judgment_b"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_role"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_role_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_role_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_scene"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_scene_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_scene_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_seo"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_seo_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_seo_b"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_lvb_table_behavior"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_behavior_a"})}),e.jsx("td",{children:e.jsx(n,{k:"guide_lvb_table_behavior_b"})})]})]})]}),`
`,e.jsx(s.h2,{id:"コンポーネントの役割と典型的なアクション",children:"コンポーネントの役割と典型的なアクション"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"コンポーネント"}),e.jsx("th",{children:"目的"}),e.jsx("th",{children:"典型的なアクション"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Link"})," (",e.jsx("code",{children:"<a>"}),")"]}),e.jsx("td",{children:"ナビゲーション"}),e.jsx("td",{children:"他のページへの遷移、ページ内リンク、外部サイトへの移動"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Button"})," (",e.jsx("code",{children:"<button>"}),")"]}),e.jsx("td",{children:"アクション"}),e.jsx("td",{children:"フォームの送信、モーダルの開閉、状態の変更、計算の実行"})]})]})]}),`
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
`,e.jsx(s.h3,{id:"-3",children:e.jsx(n,{k:"guide_lvb_a11y_rightclick"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_rightclick_desc"})}),`
`,e.jsx(s.h3,{id:"keyboard--screen-readers",children:"Keyboard & Screen Readers"}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_lvb_a11y_keyboard_screenreader"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"️-",children:["⚠️ ",e.jsx(n,{k:"guide_lvb_antipattern_title"})]}),`
`,e.jsx("div",{style:{background:"#fef2f2",padding:"16px",borderRadius:"8px",borderLeft:"4px solid #dc2626",margin:"16px 0"},children:e.jsx(n,{k:"guide_lvb_antipattern_text"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`// ❌ Bad: Button behaving as link\r
<button onClick={() => window.location.href = '/about'}>About (Bad)</button>\r
\r
// ❌ Bad: Anchor behaving as button\r
<a href="#" onClick={saveData}>Save (Bad)</a>
`})})]})}function m(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(r,{...d})}):r(d)}export{m as default};
