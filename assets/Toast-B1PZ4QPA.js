import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CI2WCOrt.js";import{M as i,C as s,a as c}from"./index-CPPfGcmg.js";import{T as d,D as h,I as p,a,S as x,W as l,E as j}from"./Toast.stories-CQbQd1yD.js";import{T as m}from"./T-SlCV1nRl.js";import"./iframe-CqKsglhg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5geYyx2.js";import"./index-CUA8z53Z.js";import"./index-CUkhu9YL.js";import"./index-CwoGqfQI.js";import"./index-DkpCg8Q5.js";import"./index-DMtA5yeu.js";import"./Transition-BZKtM8gr.js";import"./Icon-DPGT72ZZ.js";import"./Button-bN4L0Nfu.js";import"./useTranslation-BOpmJKCh.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(m,{k:"doc_toast_title"})}),`
`,n.jsx(o.p,{children:"トーストコンポーネントは、ユーザーに短い通知やフィードバックを伝えるために使用されます。通常、画面の隅に表示され、一定時間後に自動的に消えます。"}),`
`,n.jsx(o.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(o.p,{children:"トーストは、タイトル、説明文、およびバリアント（info, success, warning, error）を組み合わせて使用します。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(o.h2,{id:"トーストシステムの使用方法",children:"トーストシステムの使用方法"}),`
`,n.jsxs(o.p,{children:["実際にトーストを表示するには、",n.jsx(o.code,{children:"ToastProvider"})," でアプリケーションをラップし、",n.jsx(o.code,{children:"useToast"})," フックを使用することをお勧めします。"]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";
import { T } from "../T";

const App = () => (
  <ToastProvider position="bottom-right">
    <MyComponent />
  </ToastProvider>
);

const MyComponent = () => {
  const { show } = useToast();

  return (
    <button
      onClick={() =>
        show({
          title: "保存完了",
          description: "データが正常に保存されました。",
          variant: "success",
        })
      }
    >
      トーストを表示
    </button>
  );
};
`})}),`
`,n.jsx(o.h3,{id:"インタラクティブな例",children:"インタラクティブな例"}),`
`,n.jsx(o.p,{children:"以下の例では、実際にトーストを表示して動作を確認できます。"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"variant"})," プロパティを使用して、通知の種類に応じたスタイルを選択できます。"]}),`
`,n.jsx(o.h3,{id:"info",children:"Info"}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(o.h3,{id:"success",children:"Success"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(o.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(o.h3,{id:"error",children:"Error"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(o.h3,{id:"toast-props",children:"Toast Props"}),`
`,n.jsx(c,{}),`
`,n.jsx(o.h3,{id:"toastprovider-props",children:"ToastProvider Props"}),`
`,n.jsxs(o.p,{children:[`| Prop       | Type            | Default       | Description                                                                                                |
| :--------- | :-------------- | :------------ | :--------------------------------------------------------------------------------------------------------- |
| `,n.jsx(o.code,{children:"children"})," | ",n.jsx(o.code,{children:"ReactNode"}),`     | -             | プロバイダーの下に配置される要素                                                                           |
| `,n.jsx(o.code,{children:"position"})," | ",n.jsx(o.code,{children:"ToastPosition"})," | ",n.jsx(o.code,{children:'"top-right"'})," | トーストの表示位置 (",n.jsx(o.code,{children:"top-right"}),", ",n.jsx(o.code,{children:"top-left"}),", ",n.jsx(o.code,{children:"top-center"}),", ",n.jsx(o.code,{children:"bottom-right"}),", ",n.jsx(o.code,{children:"bottom-left"}),", ",n.jsx(o.code,{children:"bottom-center"}),`) |
| `,n.jsx(o.code,{children:"duration"})," | ",n.jsx(o.code,{children:"number"}),"        | ",n.jsx(o.code,{children:"3000"}),"        | トーストが表示される時間（ミリ秒）                                                                         |"]})]})}function X(r={}){const{wrapper:o}={...t(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(e,{...r})}):e(r)}export{X as default};
