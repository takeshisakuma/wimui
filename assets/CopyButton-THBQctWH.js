import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-B2K_e2w9.js";import{M as s,C as i,a as l}from"./blocks-Co24uSwP.js";import{T as p}from"./T-CNQyDgm7.js";import{C as a,D as c,S as d,L as h}from"./CopyButton.stories-xM4we93f.js";import"./iframe-BN-4pijT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDyAH9Gx.js";import"./index-CXYa8rZT.js";import"./index-BTwjK_Rj.js";import"./index-hqaaz1Nb.js";import"./useTranslation-1LeyJRh3.js";import"./index-CubViWzO.js";import"./Button-Cw-0rNsx.js";import"./Icon-Bl9Iq_fA.js";import"./Tooltip-BK7ZnLJ4.js";import"./floating-ui.react-BahebXla.js";function e(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
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
`,n.jsx(l,{})]})}function z(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e(t)}export{z as default};
