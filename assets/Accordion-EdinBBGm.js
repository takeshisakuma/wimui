import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CIaaJ0sD.js";import{M as t,C as r,a as l}from"./index-BZRe2iec.js";import{T as d}from"./T-BchC5wpB.js";import{A as p,S as e,M as x,D as h}from"./Accordion.stories-CjkI_jE4.js";import"./iframe-CEIkfnXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ2wHx5U.js";import"./index-C648w4He.js";import"./index-DXlNarBj.js";import"./index-DIrdU60S.js";import"./index-Dxqe2Efu.js";import"./useTranslation-CJ_PLnYJ.js";import"./index-CJJF6OTK.js";import"./Icon-UxSqIqEA.js";function c(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Component/Content Containers/Accordion",of:p}),`
`,n.jsx(o.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(d,{k:"doc_accordion_title"})}),`
`,n.jsx(o.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示し、ユーザーがクリックして詳細を表示できるようにします。"}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Single/Multiple モード"}),": 一度に1つのアイテムのみ開くか、複数のアイテムを同時に開くかを選択できます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Collapsible"}),": ",n.jsx(o.code,{children:"single"})," モードで開いているアイテムを再度クリックして閉じることができます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"アクセシビリティ"}),": WAI-ARIA に準拠し、適切なロールと属性を保持しています。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Accordion } from "@/components/Accordion/Accordion";\r
\r
const Example = () => (\r
  <Accordion type="single" collapsible>\r
    <Accordion.Item value="item-1">\r
      <Accordion.Trigger>タイトル</Accordion.Trigger>\r
      <Accordion.Content>\r
        折りたたまれるコンテンツ\r
      </Accordion.Content>\r
    </Accordion.Item>\r
  </Accordion>\r
);
`})}),`
`,n.jsx(o.h2,{id:"キャンバス",children:"キャンバス"}),`
`,n.jsx(r,{of:e}),`
`,n.jsx(l,{of:e}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(o.h3,{id:"複数展開可能-multiple",children:"複数展開可能 (Multiple)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:'type="multiple"'})," を指定することで、複数のアイテムを同時に開いた状態にできます。"]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(o.h3,{id:"無効化-disabled",children:"無効化 (Disabled)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Accordion.Item"})," に ",n.jsx(o.code,{children:"disabled"})," プロップを渡すことで、そのアイテムの操作を無効化できます。"]}),`
`,n.jsx(r,{of:h})]})}function T(i={}){const{wrapper:o}={...s(),...i.components};return o?n.jsx(o,{...i,children:n.jsx(c,{...i})}):c(i)}export{T as default};
