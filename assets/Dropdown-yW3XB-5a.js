import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BR1AGYsD.js";import{M as s,P as l,a as h,d as e}from"./index-EANsZONE.js";import{D as c,W as x,A as t}from"./Dropdown.stories-DzbNMeM9.js";import{T as j}from"./T-DhxTfql-.js";import"./iframe-DCAeh2dD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zFijSkhc.js";import"./index-DSpDV5CK.js";import"./index-DIxjwRde.js";import"./index-ZWxNc-wc.js";import"./index-51iWkYGm.js";import"./index-uXcbFB1C.js";import"./Transition--FtX0byJ.js";import"./Button-33wsPcnp.js";import"./Icon-B42dLUU4.js";import"./useTranslation-CQR_VnVw.js";function o(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(r.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_dropdown_title"})}),`
`,n.jsx(r.p,{children:`一般的なアクションメニューやナビゲーションメニューを表示するためのコンポーネントです。\r
あらかじめ用意された選択肢の中からユーザーが項目を選択するUIパーツとして、特に画面スペースが限られている場合に効率的です。\r
WebやアプリのUIにおいても頻繁に使用され、特にWebデザインでは重宝されます。`}),`
`,n.jsx(r.h2,{id:"使用ガイドライン",children:"使用ガイドライン"}),`
`,n.jsx(r.h3,{id:"メリット",children:"メリット"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"利便性向上: クリックやタップだけで選択でき、直感的な操作が可能。入力の手間や心理的ハードルを減らします。"}),`
`,n.jsx(r.li,{children:"入力間違いの防止: 定義された選択肢から選ぶため、誤字脱字や表記ゆれを防ぎ、データの整合性を保ちます。"}),`
`,n.jsx(r.li,{children:"データ管理の効率化: 入力内容が統一されるため、後の集計や分析が容易になります。"}),`
`,n.jsx(r.li,{children:"省スペース: 長いリストを画面内に直接配置する必要がなく、情報量を抑えられます。"}),`
`]}),`
`,n.jsx(r.h3,{id:"デメリット",children:"デメリット"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"操作コスト: リストを開いて項目を探すため、最低でも2回の操作が必要です。"}),`
`,n.jsx(r.li,{children:"一覧性: 選択肢が隠れているため、スクロール量や頻度によってはユーザビリティが低下します。特に長いリストでは目的の項目を探しにくくなります。"}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ベストプラクティス",children:"ベストプラクティス"}),`
`,n.jsx(r.h3,{id:"1-目的の項目に素早くアクセスできる設計",children:"1. 目的の項目に素早くアクセスできる設計"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"わかりやすい順序や分類で整理してください。"}),`
`,n.jsx(r.li,{children:"選択肢が10個以上の場合は、カテゴリー分けや検索機能（Combobox）の導入を検討してください。"}),`
`]}),`
`,n.jsx(r.h3,{id:"2-視覚的なフィードバック",children:"2. 視覚的なフィードバック"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"ホバー時や選択時に色を変えるなど、現在地や操作対象を明確にします。"}),`
`,n.jsx(r.li,{children:"デスクトップではキーボード操作にも対応させます。"}),`
`]}),`
`,n.jsx(r.h3,{id:"3-レイアウトと配置の最適化",children:"3. レイアウトと配置の最適化"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"モバイル: 画面スペースが限られているため、ドロップダウンではなく「半モーダル（BottomSheet）」や別画面でのリスト表示を検討してください。"}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"他の選択式フォームとの比較",children:"他の選択式フォームとの比較"}),`
`,n.jsx(r.h3,{id:"vs-ラジオボタン-radio",children:"vs ラジオボタン (Radio)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"ラジオボタン: 全ての選択肢が常に表示されています。選択肢が少ない（3個以下）場合や、一覧性が重要な場合に適しています。"}),`
`,n.jsx(r.li,{children:"ドロップダウン: 画面スペースの節約に優れています。選択肢が多い（4個以上）場合にWebでは適していますが、モバイルでは操作性に注意が必要です。"}),`
`]}),`
`,n.jsx(r.h3,{id:"vs-チェックボックス-checkbox",children:"vs チェックボックス (Checkbox)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"チェックボックス: 複数選択が可能で、画面上に選択肢が並びます。"}),`
`,n.jsx(r.li,{children:"ドロップダウン: 通常は単一選択ですが、リスト内にチェックボックスを組み込むことで、省スペースな複数選択UIとしても機能します。"}),`
`]}),`
`,n.jsx(r.h3,{id:"vs-コンボボックス-combobox",children:"vs コンボボックス (Combobox)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"コンボボックス: 自由入力やフィルタリング（検索）が可能です。選択肢が多い場合や、ユーザーが独自の値を入力する必要がある場合に適しています。"}),`
`,n.jsx(r.li,{children:"ドロップダウン: 選択肢が固定されており、入力はできません。"}),`
`]}),`
`,n.jsx(r.h3,{id:"vs-マルチセレクト-multiselect",children:"vs マルチセレクト (MultiSelect)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"マルチセレクト: タグ形式などで複数の項目を同時に選ぶことに特化しています。"}),`
`,n.jsx(r.li,{children:"ドロップダウン: 基本は単一選択です。"}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"使い分けの判断基準",children:"使い分けの判断基準"}),`
`,n.jsxs(r.p,{children:[`| 条件 | 推奨UI | 理由 |\r
| :--- | :--- | :--- |\r
| 項目が少ない (〜3個) | Radio / Checkbox | ワンタップで選択でき、一覧性が高い。 |\r
| 項目が多い (4個〜) | Dropdown (Web)`,n.jsx("br",{}),`BottomSheet (Mobile) | 省スペース。モバイルではスクロールしやすいUIを選ぶ。 |\r
| 複数選択が必要 | Checkbox / MultiSelect | 複数の値を同時に扱うための専用UI。 |\r
| 自由入力が必要 | Text Input | 日付や数値など、明確な値が決まっている場合。 |`]}),`
`,n.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "wimui";\r
import { T } from "../T";\r
\r
<Dropdown>\r
  <DropdownTrigger>\r
    <Button label="Open Menu" />\r
  </DropdownTrigger>\r
  <DropdownMenu>\r
    <DropdownItem onClick={handleProfile}>Profile</DropdownItem>\r
    <DropdownItem onClick={handleSettings}>Settings</DropdownItem>\r
  </DropdownMenu>\r
</Dropdown>
`})}),`
`,n.jsx(l,{}),`
`,n.jsx(r.h2,{id:"components",children:"Components"}),`
`,n.jsx(r.h3,{id:"dropdown-1",children:"Dropdown"}),`
`,n.jsx(r.p,{children:"ルートコンポーネント。開閉状態を管理します。"}),`
`,n.jsx(r.h3,{id:"dropdowntrigger",children:"DropdownTrigger"}),`
`,n.jsxs(r.p,{children:["メニューを開閉するトリガーとなる要素をラップします。通常は ",n.jsx(r.code,{children:"Button"})," や ",n.jsx(r.code,{children:"Icon"})," などを含めます。"]}),`
`,n.jsx(r.h3,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,n.jsxs(r.p,{children:["ドロップダウンのメニュー本体です。",n.jsx(r.code,{children:"align"})," プロパティで表示位置（左寄せ/右寄せ）を制御できます。"]}),`
`,n.jsx(r.h3,{id:"dropdownitem",children:"DropdownItem"}),`
`,n.jsxs(r.p,{children:["メニュー内の各項目です。",n.jsx(r.code,{children:"onClick"})," ハンドラを設定したり、Disabled状態にすることができます。"]}),`
`,n.jsx(h,{}),`
`,n.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(r.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(r.p,{children:"アイコンを含めたメニュー項目の例です。"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h3,{id:"right-alignment",children:"Right Alignment"}),`
`,n.jsx(r.p,{children:"メニューを右寄せにする例です。画面の右端にあるトリガーに適しています。"}),`
`,n.jsx(e,{of:t})]})}function W(i={}){const{wrapper:r}={...d(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(o,{...i})}):o(i)}export{W as default};
