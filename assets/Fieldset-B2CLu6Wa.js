import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-LXWd5u4c.js";import{M as s,C as i,a as d}from"./index-B_OnKYrG.js";import{F as l,D as m,W as p,a as c}from"./Fieldset.stories-B4YtYRpS.js";import"./iframe-DDn5rYTw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHE_q56U.js";import"./index-BNMOREiB.js";import"./index-ZkqhN6Ih.js";import"./index-CSdtmtAP.js";import"./index-jNItDu80.js";import"./index-DZY4SCiT.js";import"./Legend-DFVDDR3y.js";import"./Label-D7QyK0RX.js";import"./Badge-D3GOn6Mi.js";import"./useTranslation-C5xaZ8Xb.js";import"./Input-CVQmv54Y.js";/* empty css              */import"./Icon-BVAIvGim.js";import"./CheckboxGroup-DcDmww3z.js";import"./Checkbox-DY__blSL.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
