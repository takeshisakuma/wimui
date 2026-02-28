import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dsz5Chki.js";import{M as c,C as s,a as t}from"./index-DBpWV4oo.js";import{S as a,D as d,W as h,a as x,b as p,E as j,c as l,I as m,d as f}from"./Snackbar.stories-DSiV_DJG.js";import{T as u}from"./T-CkEGlpbz.js";import"./iframe-DY0V2adl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1ZCeEV1.js";import"./index-CRt-iUiP.js";import"./index-CQI1ztNZ.js";import"./index-Cw2hhaG0.js";import"./index-D4dD7-9v.js";import"./Icon-Bk4PPPQY.js";import"./index-qsBB_Z-V.js";import"./Button-D7b0m0cc.js";import"./useTranslation-BxNSKkfN.js";function e(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:a}),`
`,n.jsx(r.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(u,{k:"doc_snackbar_title"})}),`
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
`,n.jsx(s,{of:p}),`
`,n.jsx(r.h3,{id:"error",children:"Error"}),`
`,n.jsx(s,{of:j}),`
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
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from "./Snackbar";
import { T } from "../T";

const App = () => (
  <SnackbarProvider>
    <MyComponent />
  </SnackbarProvider>
);

const MyComponent = () => {
  const { showMessage } = useSnackbar();

  return (
    <button
      onClick={() =>
        showMessage({
          message: "保存されました",
          variant: "success",
          actionLabel: "閉じる",
        })
      }
    >
      スナックバーを表示
    </button>
  );
};
`})}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{})]})}function X(o={}){const{wrapper:r}={...i(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{X as default};
