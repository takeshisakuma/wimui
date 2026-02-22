import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DhrOGvY0.js";import{M as t,C as e,a as c}from"./index-DqMa9Xj3.js";import{S as a,D as d,W as h,a as x,b as p,E as j,c as l,I as m,d as f}from"./Snackbar.stories-B6Z25-o_.js";import{T as u}from"./T-IK0ETVlr.js";import"./iframe-NVrUTb6N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQ4qN5_.js";import"./index-v9ZsL78_.js";import"./index-Dg8S07U-.js";import"./index-DodcnahT.js";import"./index-CPiavtRL.js";import"./Icon-CznYQWbk.js";import"./index-JlUUufzG.js";import"./Button-B2XAbF_j.js";import"./useTranslation-diiz0MKx.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Component/Feedback/Snackbar",of:a}),`
`,n.jsx(r.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(u,{k:"doc_snackbar_title"})}),`
`,n.jsx(r.p,{children:"スナックバーは、ユーザーに短いメッセージを通知するために使用されます。通常、画面の下部に表示され、アクションボタンを含めることができます。トーストよりも目立たない、一時的な通知に適しています。"}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(r.p,{children:"メッセージを指定して表示します。"}),`
`,n.jsx(e,{of:d}),`
`,n.jsx(r.h2,{id:"アクション付き",children:"アクション付き"}),`
`,n.jsx(r.p,{children:"アクションボタン（例：「元に戻す」など）を含めることができます。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h2,{id:"閉じるボタン付き",children:"閉じるボタン付き"}),`
`,n.jsx(r.p,{children:"自動で閉じないように設定し、ユーザーが手動で閉じることができるようにします。"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"variant"})," プロパティを使用して、状態（成功、エラーなど）に応じたスタイルを適用できます。"]}),`
`,n.jsx(r.h3,{id:"success",children:"Success"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(r.h3,{id:"error",children:"Error"}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(r.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(r.h3,{id:"info",children:"Info"}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(r.h3,{id:"interactive-demo",children:"Interactive Demo"}),`
`,n.jsx(r.p,{children:"実際に動作を確認できます。"}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"便利な使い方-provider--hook",children:"便利な使い方 (Provider & Hook)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"SnackbarProvider"})," と ",n.jsx(r.code,{children:"useSnackbar"})," フックを使用すると、アプリケーションのどこからでも簡単にスナックバーを表示できます。"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from './Snackbar';\r
import { T } from "../T";\r
\r
const App = () => (\r
  <SnackbarProvider>\r
    <MyComponent />\r
  </SnackbarProvider>\r
);\r
\r
const MyComponent = () => {\r
  const { showMessage } = useSnackbar();\r
\r
  return (\r
    <button onClick={() => showMessage({ \r
      message: "保存されました", \r
      variant: "success",\r
      actionLabel: "閉じる"\r
    })}>\r
      スナックバーを表示\r
    </button>\r
  );\r
};
`})}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function X(o={}){const{wrapper:r}={...i(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{X as default};
