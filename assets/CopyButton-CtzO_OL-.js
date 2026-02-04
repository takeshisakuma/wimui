import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-3Ej3eRcy.js";import{M as i,C as t,a as l}from"./index-CAUYrQbg.js";import{C as a,D as d,S as h,L as c}from"./CopyButton.stories-BMlAvn2P.js";import"./iframe-b50X8cdi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS5rv49I.js";import"./index-DOKrV1tN.js";import"./index-Bx_oMoPf.js";import"./index-B70P5TEQ.js";import"./Button-CdXGD-HQ.js";import"./Icon-B31ltcqP.js";import"./useTranslation-CF2pUroq.js";function s(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(o.h1,{id:"copybutton",children:"CopyButton"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"CopyButton"})," は、指定されたテキストをクリップボードにコピーするためのボタンコンポーネントです。"]}),`
`,n.jsx(o.h2,{id:"comparison-with-button",children:"Comparison with Button"}),`
`,n.jsxs(o.p,{children:["通常の ",n.jsx(o.code,{children:"Button"}),'（priority="tertiary" + アイコンのみ）と異なり、以下の機能が内包されています：']}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"コピーロジックののカプセル化"}),": クリック時に ",n.jsx(o.code,{children:"navigator.clipboard.writeText"})," を実行するロジックをあらかじめ持っています。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"状態フィードバック"}),': コピー完了後、アイコンが一時的に「チェック」に切り替わり、成功を示す緑色（role="positive"）になります。']}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { CopyButton } from "./CopyButton";\r
\r
<CopyButton value="コピーしたいテキスト" />
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(o.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(o.h4,{id:"small",children:"Small"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(o.h4,{id:"large",children:"Large"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function v(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(s,{...r})}):s(r)}export{v as default};
