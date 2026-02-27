import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-ASF-mazP.js";import{M as s,C as i,a as l}from"./index-B25bep_z.js";import{T as p}from"./T-Dv52hiQU.js";import{C as a,D as c,S as d,L as h}from"./CopyButton.stories-DMhTZkig.js";import"./iframe-DLp3Jz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdy6QgF.js";import"./index-DBODvmcM.js";import"./index-CSblWT8I.js";import"./index-B17ZCLRR.js";import"./index-CW_-86og.js";import"./useTranslation-BDUJJ6MV.js";import"./index-DUAuVduf.js";import"./Button-Cr0oHLPg.js";import"./Icon-DfmmhfZE.js";import"./Tooltip-BxHbxI3p.js";import"./floating-ui.react-DvmLjL-2.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(o.h1,{id:"copybutton",children:"CopyButton"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_copybutton_title"})}),`
`,n.jsx(o.p,{children:"指定されたテキストをクリップボードにコピーするためのボタンコンポーネント"}),`
`,n.jsx(o.h2,{id:"comparison-with-button",children:"Comparison with Button"}),`
`,n.jsxs(o.p,{children:["通常の ",n.jsx(o.code,{children:"Button"}),'(priority="tertiary" + アイコンのみ)との違い']}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["コピーロジックのカプセル化: クリック時に ",n.jsx(o.code,{children:"navigator.clipboard.writeText"})," を実行するロジックをあらかじめ持っています。"]}),`
`,n.jsx(o.li,{children:'状態フィードバック: コピー完了後、アイコンが一時的に「チェック」に切り替わり、成功を示す緑色（role="positive"）になります。'}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { CopyButton } from "@/components/CopyButton/CopyButton";

<CopyButton value="コピーしたいテキスト" />;
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(o.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(o.h4,{id:"small",children:"Small"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(o.h4,{id:"large",children:"Large"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function X(t={}){const{wrapper:o}={...e(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(r,{...t})}):r(t)}export{X as default};
