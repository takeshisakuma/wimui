import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dj6CIejz.js";import{M as i,C as n,a as h}from"./blocks-BaLfbBwC.js";import{B as d,D as c,S as l}from"./BottomSheet.stories-Cn_V4a_f.js";import{T as m}from"./T-SFaqjFrj.js";import"./iframe-D0pcCsiG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoDHe7zf.js";import"./index-b45Pj6QE.js";import"./index-16wL4qMl.js";import"./index-RV_8ZXaQ.js";import"./index-Die_jmEv.js";import"./Portal-D-6El9vo.js";import"./Transition-CpLgZmUH.js";import"./FocusTrap-Dpc-no4r.js";import"./Button-BGQO9zrY.js";import"./Icon-BrQu9Vgw.js";import"./useTranslation-L3S_NP35.js";function r(o){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:d}),`
`,t.jsx(e.h1,{id:"bottomsheet-ボトムシート",children:"BottomSheet (ボトムシート)"}),`
`,t.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:t.jsx(m,{k:"doc_bottomsheet_title"})}),`
`,t.jsx(e.p,{children:"ボトムシートは、画面の下端に固定されて表示されるオーバーレイコンポーネントです。主にモバイルインターフェースにおいて、現在のコンテキストを維持したまま、タスクに特化したアクションや追加情報の表示を行うために使用されます。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"スマートフォンのみ"}),": このコンポーネントは主にモバイルデバイス向けに設計されています。PC環境では、",t.jsx(e.code,{children:"Dialog"})," や ",t.jsx(e.code,{children:"Drawer"})," の利用を検討してください。"]}),`
`]}),`
`,t.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"特徴"}),t.jsx("th",{children:"説明"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"モバイル最適化"})}),t.jsx("td",{children:"画面下部に配置され、親指で操作しやすい位置に表示されます。"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"フォーカス管理"})}),t.jsx("td",{children:"アクセシビリティのため、フォーカストラップ機能を備えています。"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"バックドロップ・ブラー"})}),t.jsx("td",{children:"背景を暗くし、背後のコンテンツをぼかすことで視覚的な集中を促します。"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"スクロール可能なコンテンツ"})}),t.jsx("td",{children:"コンテンツが長い場合、内部のスクロールエリアで対応します。"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"ハンドルキュー"})}),t.jsx("td",{children:"シート上部に視覚的なハンドルを表示し、一般的なボトムシートの作法に従っています。"})]})]})]}),`
`,t.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetClose,
} from "./BottomSheet";

function Example() {
  return (
    <BottomSheet>
      <BottomSheetTrigger>開く</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>タイトル</BottomSheetTitle>
          <BottomSheetDescription>
            ここに説明文が入ります
          </BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetBody>メインコンテンツをここに配置します...</BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose>閉じる</BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}
`})}),`
`,t.jsx(e.h2,{id:"サンプル",children:"サンプル"}),`
`,t.jsx(e.h3,{id:"デフォルト-default",children:"デフォルト (Default)"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h3,{id:"アクションメニュー-single-action-menu",children:"アクションメニュー (Single Action Menu)"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(e.h2,{id:"props-プロパティ",children:"Props (プロパティ)"}),`
`,t.jsx(h,{})]})}function _(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{_ as default};
