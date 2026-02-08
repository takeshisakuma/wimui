import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-B8dccGv3.js";import{M as s,C as i,a as d}from"./index-Hw0KSbfG.js";import{F as l,D as m,W as p,a as c}from"./Fieldset.stories-KFm4m2xv.js";import"./iframe-D7BhmU8I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZfsV87K.js";import"./index-DAsuSGnz.js";import"./index-DWkPlJRB.js";import"./index-dx5FCfvU.js";import"./index-CF3Ivw1r.js";import"./index-BFGcS2dx.js";import"./Legend-CmWpKPGv.js";import"./Label-DYyaM5sa.js";import"./Badge-C6cI-T4X.js";import"./useTranslation-CDZt9J5t.js";import"./Input-BoOpCBXh.js";/* empty css              */import"./Icon-sAf_4biW.js";import"./CheckboxGroup-CaO9SfRu.js";import"./Checkbox-BQPYjliL.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
