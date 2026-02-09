import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Budm3pu9.js";import{M as t,C as i,a as l}from"./index-CIxawHDQ.js";import{A as d,S as e,M as h,D as x}from"./Accordion.stories-BLYca_6z.js";import"./iframe-Cm-zy8nu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAMAVdt2.js";import"./index-x6Bl2_xi.js";import"./index-bFMCoDcL.js";import"./index-Bbc124dC.js";import"./index-CDczMLuC.js";import"./index-C6Hyae_i.js";import"./Icon-wcArljtl.js";function s(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Component/Content Containers/Accordion",of:d}),`
`,n.jsx(o.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(o.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示し、ユーザーがクリックして詳細を表示できるようにします。"}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Single/Multiple モード"}),": 一度に1つのアイテムのみ開くか、複数のアイテムを同時に開くかを選択できます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Collapsible"}),": ",n.jsx(o.code,{children:"single"})," モードで開いているアイテムを再度クリックして閉じることができます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"アクセシビリティ"}),": WAI-ARIA に準拠し、適切なロールと属性を保持しています。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";\r
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
`,n.jsx(i,{of:e}),`
`,n.jsx(l,{of:e}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(o.h3,{id:"複数展開可能-multiple",children:"複数展開可能 (Multiple)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:'type="multiple"'})," を指定することで、複数のアイテムを同時に開いた状態にできます。"]}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(o.h3,{id:"無効化-disabled",children:"無効化 (Disabled)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Accordion.Item"})," に ",n.jsx(o.code,{children:"disabled"})," プロップを渡すことで、そのアイテムの操作を無効化できます。"]}),`
`,n.jsx(i,{of:x})]})}function S(r={}){const{wrapper:o}={...c(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(s,{...r})}):s(r)}export{S as default};
