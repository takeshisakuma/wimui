import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DqmbFHE3.js";import{M as i,C as e,a as c}from"./index-DtoN9zbH.js";import{T as d,D as h,I as p,a,S as x,W as l,E as j}from"./Toast.stories-BaLXUxF9.js";import{T as m}from"./T-D_Gx5n1r.js";import"./iframe-B4Qoxu3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnCDoS8F.js";import"./index-DV9E679G.js";import"./index-Dx7V1Jf6.js";import"./index-Dl9aIjA8.js";import"./index-DlSymbc8.js";import"./index-l9XHiKBA.js";import"./Transition-CfPk8PFu.js";import"./Icon-ntAEgp2I.js";import"./Button-DPDi7xP2.js";import"./useTranslation-CklcMfUY.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Component/Feedback/Toast",of:d}),`
`,n.jsx(r.h1,{id:"toast",children:"Toast"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(m,{k:"doc_toast_title"})}),`
`,n.jsx(r.p,{children:"トーストコンポーネントは、ユーザーに短い通知やフィードバックを伝えるために使用されます。通常、画面の隅に表示され、一定時間後に自動的に消えます。"}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(r.p,{children:"トーストは、タイトル、説明文、およびバリアント（info, success, warning, error）を組み合わせて使用します。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h2,{id:"トーストシステムの使用方法",children:"トーストシステムの使用方法"}),`
`,n.jsxs(r.p,{children:["実際にトーストを表示するには、",n.jsx(r.code,{children:"ToastProvider"})," でアプリケーションをラップし、",n.jsx(r.code,{children:"useToast"})," フックを使用することをお勧めします。"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from './Toast';\r
import { T } from "../T";\r
\r
const App = () => (\r
  <ToastProvider position="bottom-right">\r
    <MyComponent />\r
  </ToastProvider>\r
);\r
\r
const MyComponent = () => {\r
  const { show } = useToast();\r
\r
  return (\r
    <button onClick={() => show({ \r
      title: "保存完了", \r
      description: "データが正常に保存されました。", \r
      variant: "success" \r
    })}>\r
      トーストを表示\r
    </button>\r
  );\r
};
`})}),`
`,n.jsx(r.h3,{id:"インタラクティブな例",children:"インタラクティブな例"}),`
`,n.jsx(r.p,{children:"以下の例では、実際にトーストを表示して動作を確認できます。"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(r.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"variant"})," プロパティを使用して、通知の種類に応じたスタイルを選択できます。"]}),`
`,n.jsx(r.h3,{id:"info",children:"Info"}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(r.h3,{id:"success",children:"Success"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(r.h3,{id:"error",children:"Error"}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(r.h3,{id:"toast-props",children:"Toast Props"}),`
`,n.jsx(c,{}),`
`,n.jsx(r.h3,{id:"toastprovider-props",children:"ToastProvider Props"}),`
`,n.jsxs(r.p,{children:[`| Prop | Type | Default | Description |\r
| :--- | :--- | :--- | :--- |\r
| `,n.jsx(r.code,{children:"children"})," | ",n.jsx(r.code,{children:"ReactNode"}),` | - | プロバイダーの下に配置される要素 |\r
| `,n.jsx(r.code,{children:"position"})," | ",n.jsx(r.code,{children:"ToastPosition"})," | ",n.jsx(r.code,{children:'"top-right"'})," | トーストの表示位置 (",n.jsx(r.code,{children:"top-right"}),", ",n.jsx(r.code,{children:"top-left"}),", ",n.jsx(r.code,{children:"top-center"}),", ",n.jsx(r.code,{children:"bottom-right"}),", ",n.jsx(r.code,{children:"bottom-left"}),", ",n.jsx(r.code,{children:"bottom-center"}),`) |\r
| `,n.jsx(r.code,{children:"duration"})," | ",n.jsx(r.code,{children:"number"})," | ",n.jsx(r.code,{children:"3000"})," | トーストが表示される時間（ミリ秒） |"]})]})}function W(o={}){const{wrapper:r}={...t(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{W as default};
