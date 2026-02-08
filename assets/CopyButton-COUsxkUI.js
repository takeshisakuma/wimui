import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-9I3CaXbD.js";import{M as i,C as t,a as l}from"./index-SXFOAGR5.js";import{C as a,D as h,S as p,L as d}from"./CopyButton.stories-C7bK2dFM.js";import"./iframe-CBzo6FU_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXY_ioGk.js";import"./index-DccsuQjq.js";import"./index-BASy7BvE.js";import"./index-DMW_L08v.js";import"./index-BVHz3hgc.js";import"./index-BNhRDuWm.js";import"./Button-D4mjioBQ.js";import"./Icon-L9cfNnnU.js";import"./useTranslation-jYK0wIRo.js";function s(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(o.h1,{id:"copybutton",children:"CopyButton"}),`
`,n.jsx(o.p,{children:"指定されたテキストをクリップボードにコピーするためのボタンコンポーネント"}),`
`,n.jsx(o.h2,{id:"comparison-with-button",children:"Comparison with Button"}),`
`,n.jsxs(o.p,{children:["通常の ",n.jsx(o.code,{children:"Button"}),'(priority="tertiary" + アイコンのみ)との違い']}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"コピーロジックのカプセル化"}),": クリック時に ",n.jsx(o.code,{children:"navigator.clipboard.writeText"})," を実行するロジックをあらかじめ持っています。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"状態フィードバック"}),': コピー完了後、アイコンが一時的に「チェック」に切り替わり、成功を示す緑色（role="positive"）になります。']}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { CopyButton } from "./CopyButton";\r
\r
<CopyButton value="コピーしたいテキスト" />
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(o.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(o.h4,{id:"small",children:"Small"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(o.h4,{id:"large",children:"Large"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function L(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(s,{...r})}):s(r)}export{L as default};
