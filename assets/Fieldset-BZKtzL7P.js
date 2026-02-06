import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-GvHm0r3a.js";import{M as o,C as i,a as d}from"./index-DQFPD0Gu.js";import{F as l,D as c,W as a,a as m}from"./Fieldset.stories-DtXR0t21.js";import"./iframe-CIt-P4wQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEid7NId.js";import"./index-DjC4Gdw4.js";import"./index-BBLDJt5C.js";import"./index-BYQ5NTpU.js";import"./Legend-UwHUy8Z8.js";import"./Label-B8wfcaO0.js";import"./Badge-DIvpF6nT.js";import"./useTranslation-Dax_BxKK.js";import"./Input-Deezq1Ih.js";/* empty css              */import"./Icon-sHR_N-nv.js";import"./CheckboxGroup-CGuxLtT_.js";import"./Checkbox-CTn3Paai.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Fieldset"}),` コンポーネントは、関連するフォーム要素を論理的にグループ化するために使用されます。\r
通常、アクセシビリティの観点から `,e.jsx(n.code,{children:"Legend"})," コンポーネントと組み合わせて、そのグループの目的を示します。"]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Fieldset, Legend, Label, Input } from "wimui";\r
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"チェックボックスグループとの組み合わせ",children:"チェックボックスグループとの組み合わせ"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"無効化状態",children:"無効化状態"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," プロパティを設定すると、",e.jsx(n.code,{children:"Fieldset"})," 内のすべてのフォーム要素が一括で無効化されます。"]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"コンポーネントのプロパティ",children:"コンポーネントのプロパティ"}),`
`,e.jsx(d,{})]})}function v(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{v as default};
