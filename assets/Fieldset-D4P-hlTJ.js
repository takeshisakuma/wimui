import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BRZoJ6_p.js";import{M as s,C as t,a as d}from"./blocks-Bnoxqp6H.js";import{F as l,D as p,W as m,a as c}from"./Fieldset.stories-De7RkX5H.js";import{T as a}from"./T-DKX3xNM1.js";import"./iframe-CtzyBWFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eq0L1KCm.js";import"./index-CnfAmiWZ.js";import"./index-CoLICJJZ.js";import"./index-BcttMTGM.js";import"./index-B7Z--H5j.js";import"./Legend-CFJs-D3q.js";import"./Label-DHYBElkT.js";import"./Badge-CuSXAcmI.js";import"./useTranslation-BoUpQfq3.js";import"./Input-Bd-i3foX.js";/* empty css              */import"./Icon-DjP0alSe.js";import"./CheckboxGroup-DN8VrxKo.js";import"./Checkbox-BR64HQmw.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
`,e.jsx(d,{})]})}function v(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{v as default};
