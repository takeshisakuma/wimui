import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BxwVfxVl.js";import{M as h,C as n,a as s}from"./index-OesD9T4H.js";import{B as m,D as l,S as c}from"./BottomSheet.stories-CVfhbdxK.js";import{T as d}from"./T-kpBR0EkH.js";import"./iframe-D7d7Avab.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CX1j9UZq.js";import"./index-CLlOyk_M.js";import"./index-Bb8bMiI8.js";import"./index-Bjw7hl0Y.js";import"./index-Bkh0L9fe.js";import"./index-DeX3lArg.js";import"./Portal-DN8micft.js";import"./Transition-DrSX0W0q.js";import"./FocusTrap-712K4ZmG.js";import"./Button-CbstZCnj.js";import"./Icon-Blrfl-qb.js";import"./useTranslation-cEFdRTae.js";function r(o){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:m}),`
`,t.jsx(e.h1,{id:"bottomsheet-ボトムシート",children:"BottomSheet (ボトムシート)"}),`
`,t.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:t.jsx(d,{k:"doc_bottomsheet_title"})}),`
`,t.jsx(e.p,{children:"ボトムシートは、画面の下端に固定されて表示されるオーバーレイコンポーネントです。主にモバイルインターフェースにおいて、現在のコンテキストを維持したまま、タスクに特化したアクションや追加情報の表示を行うために使用されます。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["⚠️ ",t.jsx(e.strong,{children:"スマートフォンのみ"}),": このコンポーネントは主にモバイルデバイス向けに設計されています。PC環境では、",t.jsx(e.code,{children:"Dialog"})," や ",t.jsx(e.code,{children:"Drawer"})," の利用を検討してください。"]}),`
`]}),`
`,t.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"モバイル最適化: 画面下部に配置され、親指で操作しやすい位置に表示されます。"}),`
`,t.jsx(e.li,{children:"フォーカス管理: アクセシビリティのため、フォーカストラップ機能を備えています。"}),`
`,t.jsx(e.li,{children:"バックドロップ・ブラー: 背景を暗くし、背後のコンテンツをぼかすことで視覚的な集中を促します。"}),`
`,t.jsx(e.li,{children:"スクロール可能なコンテンツ: コンテンツが長い場合、内部のスクロールエリアで対応します。"}),`
`,t.jsx(e.li,{children:"ハンドルキュー: シート上部に視覚的なハンドルを表示し、一般的なボトムシートの作法に従っています。"}),`
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
`,t.jsx(s,{})]})}function q(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{q as default};
