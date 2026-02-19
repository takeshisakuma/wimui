import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BN2NFrjq.js";import{M as s,C as i,a as d}from"./index-CYwf42CA.js";import{F as l,D as p,W as m,a as c}from"./Fieldset.stories-1BRLTPN1.js";import{T as a}from"./T-B7lP0ynS.js";import"./iframe-Bq3ITTxP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BO-USw1X.js";import"./index-BsLrfx-q.js";import"./index-BAwZRRgE.js";import"./index-C4jnXSOy.js";import"./index-BYOMJS_F.js";import"./index-CBSBtogc.js";import"./Legend-CHh4FNo2.js";import"./Label-Bv9LrvQI.js";import"./Badge-a8ca5-qK.js";import"./useTranslation-BBPAu78T.js";import"./Input-B47h1pKa.js";/* empty css              */import"./Icon-CJnkB41t.js";import"./CheckboxGroup-CQJqRbnC.js";import"./Checkbox-TKel_ckJ.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(a,{k:"doc_fieldset_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Fieldset"}),` コンポーネントは、関連するフォーム要素を論理的にグループ化するために使用されます。\r
通常、アクセシビリティの観点から `,e.jsx(n.code,{children:"Legend"})," コンポーネントと組み合わせて、そのグループの目的を示します。"]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Fieldset, Legend, Label, Input } from "wimui";\r
import { T } from "../T";\r
\r
<Fieldset>\r
    <Legend>ユーザー情報</Legend>\r
    <Label label="名前">\r
        <Input />\r
    </Label>\r
    <Label label="メールアドレス">\r
        <Input />\r
    </Label>\r
</Fieldset>
`})}),`
`,e.jsx(n.h2,{id:"ストーリー",children:"ストーリー"}),`
`,e.jsx(n.h3,{id:"デフォルト",children:"デフォルト"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"チェックボックスグループとの組み合わせ",children:"チェックボックスグループとの組み合わせ"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"無効化状態",children:"無効化状態"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," プロパティを設定すると、",e.jsx(n.code,{children:"Fieldset"})," 内のすべてのフォーム要素が一括で無効化されます。"]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"コンポーネントのプロパティ",children:"コンポーネントのプロパティ"}),`
`,e.jsx(d,{})]})}function z(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{z as default};
