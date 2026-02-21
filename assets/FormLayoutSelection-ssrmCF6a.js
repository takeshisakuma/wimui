import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BBZEH7U7.js";import{M as t}from"./index-CPJf9xVo.js";import"./iframe-8YyUgjUD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTZzMpSu.js";import"./index-BByLr51g.js";import"./index-Dnx-ZVgZ.js";import"./index-B3oGAfiZ.js";import"./index-BJM3YyK_.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{title:"Category/Form Layout"}),`
`,r.jsx(n.h1,{id:"フォームレイアウトの使い分け",children:"フォームレイアウトの使い分け"}),`
`,r.jsx(n.p,{children:"入力フィールドを整理し、アクセシビリティとユーザビリティを高めるための要素です。"}),`
`,r.jsx(n.h2,{id:"基本要素",children:"基本要素"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"コンポーネント"}),r.jsx("th",{children:"役割"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"Label"})}),r.jsx("td",{children:"入力項目の名称を明示。クリックでフィールドにフォーカスします。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"InputGroup"})}),r.jsx("td",{children:"入力欄の前後（Prefix/Suffix）にアイコンや単位を付加。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"FieldError"})}),r.jsx("td",{children:"バリデーションエラーの内容を視覚的に提示。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"Fieldset"})}),r.jsx("td",{children:"関連する入力項目を意味的にグループ化。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"Legend"})}),r.jsx("td",{children:"Fieldset でグループ化された項目群のタイトル。"})]})]})]}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"ベストプラクティス",children:"ベストプラクティス"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"ラベルの必須性"}),": すべての入力項目には ",r.jsx(n.code,{children:"Label"})," を付け、プレースホルダーで代用しない。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"近接性の原則"}),": ",r.jsx(n.code,{children:"FieldError"})," は、エラーが発生している入力項目のすぐ近くに配置する。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"視覚的グループ化"}),": 住所情報やプロフィール情報など、意味的なまとまりには ",r.jsx(n.code,{children:"Fieldset"})," を使用する。"]}),`
`]})]})}function u(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{u as default};
