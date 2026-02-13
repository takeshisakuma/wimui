import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-D1dscaeJ.js";import{M as s,C as n,a as h}from"./index-D1caZpI6.js";import{B as m,D as l,S as c}from"./BottomSheet.stories-DJj3solH.js";import{T as d}from"./T-yz6DdsoI.js";import"./iframe-w7zQUmWk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpeMR2ip.js";import"./index-BkJafYQv.js";import"./index-Z5AnbU84.js";import"./index-CHxKVF9N.js";import"./index-acwp71_Q.js";import"./index-CvoI-pTh.js";import"./FocusTrap-D3AqK0NG.js";import"./Button-DaO-K04q.js";import"./Icon-sjEwCG4v.js";import"./useTranslation-B50xyzQM.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
`,t.jsx(e.h1,{id:"bottomsheet-ボトムシート",children:"BottomSheet (ボトムシート)"}),`
`,t.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:t.jsx(d,{k:"doc_bottomsheet_title"})}),`
`,t.jsx(e.p,{children:"ボトムシートは、画面の下端に固定されて表示されるオーバーレイコンポーネントです。主にモバイルインターフェースにおいて、現在のコンテキストを維持したまま、タスクに特化したアクションや追加情報の表示を行うために使用されます。"}),`
`,t.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"モバイル最適化"}),": 画面下部に配置され、親指で操作しやすい位置に表示されます。"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"フォーカス管理"}),": アクセシビリティのため、フォーカストラップ機能を備えています。"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"バックドロップ・ブラー"}),": 背景を暗くし、背後のコンテンツをぼかすことで視覚的な集中を促します。"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"スクロール可能なコンテンツ"}),": コンテンツが長い場合、内部のスクロールエリアで対応します。"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"ハンドルキュー"}),": シート上部に視覚的なハンドルを表示し、一般的なボトムシートの作法に従っています。"]}),`
`]}),`
`,t.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import {\r
  BottomSheet,\r
  BottomSheetTrigger,\r
  BottomSheetContent,\r
  BottomSheetHeader,\r
  BottomSheetTitle,\r
  BottomSheetDescription,\r
  BottomSheetBody,\r
  BottomSheetFooter,\r
  BottomSheetClose\r
} from "./BottomSheet";\r
\r
function Example() {\r
  return (\r
    <BottomSheet>\r
      <BottomSheetTrigger>開く</BottomSheetTrigger>\r
      <BottomSheetContent>\r
        <BottomSheetHeader>\r
          <BottomSheetTitle>タイトル</BottomSheetTitle>\r
          <BottomSheetDescription>ここに説明文が入ります</BottomSheetDescription>\r
        </BottomSheetHeader>\r
        <BottomSheetBody>\r
          メインコンテンツをここに配置します...\r
        </BottomSheetBody>\r
        <BottomSheetFooter>\r
          <BottomSheetClose>閉じる</BottomSheetClose>\r
        </BottomSheetFooter>\r
      </BottomSheetContent>\r
    </BottomSheet>\r
  );\r
}
`})}),`
`,t.jsx(e.h2,{id:"サンプル",children:"サンプル"}),`
`,t.jsx(e.h3,{id:"デフォルト-default",children:"デフォルト (Default)"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(e.h3,{id:"アクションメニュー-single-action-menu",children:"アクションメニュー (Single Action Menu)"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"props-プロパティ",children:"Props (プロパティ)"}),`
`,t.jsx(h,{})]})}function X(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{X as default};
