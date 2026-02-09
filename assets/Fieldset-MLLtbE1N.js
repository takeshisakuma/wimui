import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-N_Gubu8Z.js";import{M as s,C as i,a as d}from"./index-PgOjwxms.js";import{F as l,D as m,W as p,a as c}from"./Fieldset.stories-BrzHVxn1.js";import"./iframe-B0xzzNDa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bDTqSnyr.js";import"./index-DzipthgM.js";import"./index-BIy8WZ3u.js";import"./index-BeXwBRwA.js";import"./index-DE8hgc8w.js";import"./index-BufBIhLZ.js";import"./Legend-Gruk33MA.js";import"./Label-CLxXlT6g.js";import"./Badge-DGPN2RtJ.js";import"./useTranslation-BjT7I1yF.js";import"./Input-CxDu4otU.js";/* empty css              */import"./Icon-CR2U3mau.js";import"./CheckboxGroup-DrLb26TF.js";import"./Checkbox-A47OCvtU.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"チェックボックスグループとの組み合わせ",children:"チェックボックスグループとの組み合わせ"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"無効化状態",children:"無効化状態"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," プロパティを設定すると、",e.jsx(n.code,{children:"Fieldset"})," 内のすべてのフォーム要素が一括で無効化されます。"]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"コンポーネントのプロパティ",children:"コンポーネントのプロパティ"}),`
`,e.jsx(d,{})]})}function E(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{E as default};
