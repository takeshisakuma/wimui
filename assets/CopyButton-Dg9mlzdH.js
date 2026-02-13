import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CNevrb60.js";import{M as s,C as r,a as l}from"./index-pOEgHDjg.js";import{T as p}from"./T-B6tHb3ID.js";import{C as c,D as a,S as d,L as h}from"./CopyButton.stories-CykCFbA8.js";import"./iframe-BRQWL27F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CsL2SFOk.js";import"./index-CYjtzbAX.js";import"./index-DLkabaxQ.js";import"./index-CvX-948d.js";import"./index-CNxpXZFm.js";import"./useTranslation-C2ZSqrVI.js";import"./index-DWoaxWMs.js";import"./Button-CRTzFfQx.js";import"./Icon-CpAaWSX6.js";function e(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(o.h1,{id:"copybutton",children:"CopyButton"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_copybutton_title"})}),`
`,n.jsx(o.p,{children:"指定されたテキストをクリップボードにコピーするためのボタンコンポーネント"}),`
`,n.jsx(o.h2,{id:"comparison-with-button",children:"Comparison with Button"}),`
`,n.jsxs(o.p,{children:["通常の ",n.jsx(o.code,{children:"Button"}),'(priority="tertiary" + アイコンのみ)との違い']}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"コピーロジックのカプセル化"}),": クリック時に ",n.jsx(o.code,{children:"navigator.clipboard.writeText"})," を実行するロジックをあらかじめ持っています。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"状態フィードバック"}),': コピー完了後、アイコンが一時的に「チェック」に切り替わり、成功を示す緑色（role="positive"）になります。']}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { CopyButton } from "@/components/CopyButton/CopyButton";\r
\r
<CopyButton value="コピーしたいテキスト" />
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(o.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(o.h4,{id:"small",children:"Small"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(o.h4,{id:"large",children:"Large"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function _(t={}){const{wrapper:o}={...i(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e(t)}export{_ as default};
