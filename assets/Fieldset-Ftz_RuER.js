import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BqE_2Viu.js";import{M as s,C as t,a as d}from"./index-nX7vBXOI.js";import{F as l,D as p,W as m,a as c}from"./Fieldset.stories-DI5Nvncm.js";import{T as a}from"./T-B61OVoBv.js";import"./iframe-XOVTCxac.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEJf9WnE.js";import"./index-CEYSoel4.js";import"./index-cq53MBx1.js";import"./index-C02Wztqw.js";import"./index-Cr-nXHnX.js";import"./index-Jk7r-gPn.js";import"./Legend-C3Gw5YF4.js";import"./Label-BygR7Tp-.js";import"./Badge-_OirAtxr.js";import"./useTranslation-DUvHu8nS.js";import"./Input-CibQPxa7.js";/* empty css              */import"./Icon-BcGQWofn.js";import"./CheckboxGroup-_gSCdalY.js";import"./Checkbox-BjM2f10t.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
