import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-tDHZoey2.js";import{M as c,C as s,a}from"./index-Du0z2M3n.js";import{S as t,D as d,W as h,a as x,b as j,E as p,c as l,I as m,d as f}from"./Snackbar.stories-B1Q0nCKi.js";import"./iframe-DkKouYTS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfMRczEt.js";import"./index-D1Exp1FE.js";import"./index-Y18cy8sl.js";import"./index-2RdZOA5F.js";import"./index-DYBq3YjF.js";import"./Icon-DR9Ol5M1.js";import"./index-0gwFuz90.js";import"./Button-D1h1CGGi.js";import"./useTranslation-BxY74sFT.js";function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Component/Feedback/Snackbar",of:t}),`
`,n.jsx(r.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx(r.p,{children:"スナックバーは、ユーザーに短いメッセージを通知するために使用されます。通常、画面の下部に表示され、アクションボタンを含めることができます。トーストよりも目立たない、一時的な通知に適しています。"}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(r.p,{children:"メッセージを指定して表示します。"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(r.h2,{id:"アクション付き",children:"アクション付き"}),`
`,n.jsx(r.p,{children:"アクションボタン（例：「元に戻す」など）を含めることができます。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(r.h2,{id:"閉じるボタン付き",children:"閉じるボタン付き"}),`
`,n.jsx(r.p,{children:"自動で閉じないように設定し、ユーザーが手動で閉じることができるようにします。"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(r.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"variant"})," プロパティを使用して、状態（成功、エラーなど）に応じたスタイルを適用できます。"]}),`
`,n.jsx(r.h3,{id:"success",children:"Success"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(r.h3,{id:"error",children:"Error"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(r.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(r.h3,{id:"info",children:"Info"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(r.h3,{id:"interactive-demo",children:"Interactive Demo"}),`
`,n.jsx(r.p,{children:"実際に動作を確認できます。"}),`
`,n.jsx(s,{of:f}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"便利な使い方-provider--hook",children:"便利な使い方 (Provider & Hook)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"SnackbarProvider"})," と ",n.jsx(r.code,{children:"useSnackbar"})," フックを使用すると、アプリケーションのどこからでも簡単にスナックバーを表示できます。"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from './Snackbar';\r
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
`,n.jsx(a,{})]})}function X(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{X as default};
