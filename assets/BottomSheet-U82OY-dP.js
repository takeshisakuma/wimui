import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-kcP-R2fq.js";import{M as m,C as n,a as h}from"./index-DH0R01eL.js";import{B as s,D as l,S as c}from"./BottomSheet.stories-CnlUVP8B.js";import{T as d}from"./T-Vx7G9GEz.js";import"./iframe-DDy8tEXT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7VlCIB5.js";import"./index-ChEOCr56.js";import"./index-TedqZ2pt.js";import"./index-CWrlP1XP.js";import"./index-5cdVbo8u.js";import"./index-CTDH5i5b.js";import"./Portal-DbyX0IDi.js";import"./Transition-D-zJf7ua.js";import"./FocusTrap-CAFGkeHy.js";import"./Button-D2Eobxop.js";import"./Icon-Cm43onam.js";import"./useTranslation-BN35Yg5v.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:s}),`
`,t.jsx(e.h1,{id:"bottomsheet-ボトムシート",children:"BottomSheet (ボトムシート)"}),`
`,t.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:t.jsx(d,{k:"doc_bottomsheet_title"})}),`
`,t.jsx(e.p,{children:"ボトムシートは、画面の下端に固定されて表示されるオーバーレイコンポーネントです。主にモバイルインターフェースにおいて、現在のコンテキストを維持したまま、タスクに特化したアクションや追加情報の表示を行うために使用されます。"}),`
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
`,t.jsx(h,{})]})}function A(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{A as default};
