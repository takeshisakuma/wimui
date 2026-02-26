import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-v4U2F5oq.js";import{M as l,C as e,a as d}from"./index-B7aycoAu.js";import{T as t}from"./T-wbVrzvMP.js";import{A as p,S as r,M as x,D as m}from"./Accordion.stories-B13zC0kc.js";import"./iframe-B5KNG_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTYWegQ.js";import"./index-Cywy72sA.js";import"./index-DGJ29Zxn.js";import"./index-BUrRW1D7.js";import"./index-DtD5XXQ5.js";import"./useTranslation-CmAbqblj.js";import"./index-Cj7drDfE.js";import"./Icon-BstGARio.js";function c(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p}),`
`,n.jsx(i.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(t,{k:"doc_accordion_title"})}),`
`,n.jsx(i.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示し、ユーザーがクリックして詳細を表示できるようにします。"}),`
`,n.jsx(i.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Single/Multiple モード: 一度に1つのアイテムのみ開くか、複数のアイテムを同時に開くかを選択できます。"}),`
`,n.jsxs(i.li,{children:["Collapsible: ",n.jsx(i.code,{children:"single"})," モードで開いているアイテムを再度クリックして閉じることができます。"]}),`
`,n.jsx(i.li,{children:"アクセシビリティ: WAI-ARIA に準拠し、適切なロールと属性を保持しています。"}),`
`]}),`
`,n.jsx(i.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { Accordion } from "@/components/Accordion/Accordion";

const Example = () => (
  <Accordion type="single" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>タイトル</Accordion.Trigger>
      <Accordion.Content>折りたたまれるコンテンツ</Accordion.Content>
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,n.jsx(i.h2,{id:"キャンバス",children:"キャンバス"}),`
`,n.jsx(e,{of:r}),`
`,n.jsx(d,{of:r}),`
`,n.jsx(i.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(i.h3,{id:"複数展開可能-multiple",children:"複数展開可能 (Multiple)"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:'type="multiple"'})," を指定することで、複数のアイテムを同時に開いた状態にできます。"]}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(i.h3,{id:"無効化-disabled",children:"無効化 (Disabled)"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"Accordion.Item"})," に ",n.jsx(i.code,{children:"disabled"})," プロップを渡すことで、そのアイテムの操作を無効化できます。"]}),`
`,n.jsx(e,{of:m})]})}function T(o={}){const{wrapper:i}={...s(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(c,{...o})}):c(o)}export{T as default};
