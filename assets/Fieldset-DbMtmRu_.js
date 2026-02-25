import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BdJmE6jO.js";import{M as s,C as t,a as d}from"./index-4d6KwSW1.js";import{F as l,D as p,W as m,a as c}from"./Fieldset.stories-DjgjRzW1.js";import{T as a}from"./T-B9tp72Y-.js";import"./iframe-C-4JLACx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeJq3KNp.js";import"./index-jud4T1_Y.js";import"./index-BNSEd8dy.js";import"./index-DC1su9bf.js";import"./index-DFxqoh7w.js";import"./index-HB-Qm5fy.js";import"./Legend-D-Fa7Ush.js";import"./Label-DrL6qNHi.js";import"./Badge-DfpgZypw.js";import"./useTranslation-BFGhrLDt.js";import"./Input-DEk6UMyB.js";/* empty css              */import"./Icon-D6zGy4PL.js";import"./CheckboxGroup-DmGcJ7DS.js";import"./Checkbox-B7SEmvbT.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(a,{k:"doc_fieldset_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Fieldset"}),` コンポーネントは、関連するフォーム要素を論理的にグループ化するために使用されます。
通常、アクセシビリティの観点から `,e.jsx(n.code,{children:"Legend"})," コンポーネントと組み合わせて、そのグループの目的を示します。"]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Fieldset, Legend, Label, Input } from "wimui";
import { T } from "../T";

<Fieldset>
  <Legend>ユーザー情報</Legend>
  <Label label="名前">
    <Input />
  </Label>
  <Label label="メールアドレス">
    <Input />
  </Label>
</Fieldset>;
`})}),`
`,e.jsx(n.h2,{id:"ストーリー",children:"ストーリー"}),`
`,e.jsx(n.h3,{id:"デフォルト",children:"デフォルト"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"チェックボックスグループとの組み合わせ",children:"チェックボックスグループとの組み合わせ"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"無効化状態",children:"無効化状態"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," プロパティを設定すると、",e.jsx(n.code,{children:"Fieldset"})," 内のすべてのフォーム要素が一括で無効化されます。"]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"コンポーネントのプロパティ",children:"コンポーネントのプロパティ"}),`
`,e.jsx(d,{})]})}function z(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{z as default};
