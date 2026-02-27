import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-ASF-mazP.js";import{M as h,P as t,a as c,d as s}from"./index-B25bep_z.js";import{D as l,W as x,A as j}from"./Dropdown.stories-9n-zM5pN.js";import{T as o}from"./T-Dv52hiQU.js";import"./iframe-DLp3Jz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdy6QgF.js";import"./index-DBODvmcM.js";import"./index-CSblWT8I.js";import"./index-B17ZCLRR.js";import"./index-CW_-86og.js";import"./index-DUAuVduf.js";import"./Transition-DoP7XyL0.js";import"./Button-Cr0oHLPg.js";import"./Icon-DfmmhfZE.js";import"./useTranslation-BDUJJ6MV.js";function e(d){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:l}),`
`,n.jsx(r.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_dropdown_title"})}),`
`,n.jsx(r.p,{children:`一般的なアクションメニューやナビゲーションメニューを表示するためのコンポーネントです。
あらかじめ用意された選択肢の中からユーザーが項目を選択するUIパーツとして、特に画面スペースが限られている場合に効率的です。
WebやアプリのUIにおいても頻繁に使用され、特にWebデザインでは重宝されます。`}),`
`,n.jsx(r.h2,{id:"使用ガイドライン",children:"使用ガイドライン"}),`
`,n.jsx(r.h3,{id:"メリット",children:"メリット"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"メリット"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"利便性向上"})}),n.jsx("td",{children:"クリックやタップだけで選択でき、直感的な操作が可能。入力の手間や心理的ハードルを減らします。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"入力間違いの防止"})}),n.jsx("td",{children:"定義された選択肢から選ぶため、誤字脱字や表記ゆれを防ぎ、データの整合性を保ちます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"データ管理の効率化"})}),n.jsx("td",{children:"入力内容が統一されるため、後の集計や分析が容易になります。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"省スペース"})}),n.jsx("td",{children:"長いリストを画面内に直接配置する必要がなく、情報量を抑えられます。"})]})]})]}),`
`,n.jsx(r.h3,{id:"デメリット",children:"デメリット"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"デメリット"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"操作コスト"})}),n.jsx("td",{children:"リストを開いて項目を探すため、最低でも2回の操作が必要です。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"一覧性"})}),n.jsx("td",{children:"選択肢が隠れているため、スクロール量や頻度によってはユーザビリティが低下します。特に長いリストでは目的の項目を探しにくくなります。"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ベストプラクティス",children:"ベストプラクティス"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ベストプラクティス"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"目的の項目に素早くアクセスできる設計"})}),n.jsx("td",{children:n.jsxs(r.p,{children:["わかりやすい順序や分類で整理してください。",n.jsx("br",{}),`
選択肢が10個以上の場合は、カテゴリー分けや検索機能（Combobox）の導入を検討してください。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"視覚的なフィードバック"})}),n.jsx("td",{children:n.jsxs(r.p,{children:["ホバー時や選択時に色を変えるなど、現在地や操作対象を明確にします。",n.jsx("br",{}),`
デスクトップではキーボード操作にも対応させます。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"レイアウトと配置の最適化"})}),n.jsx("td",{children:n.jsx(r.p,{children:"モバイル: 画面スペースが限られているため、ドロップダウンではなく「半モーダル（BottomSheet）」や別画面でのリスト表示を検討してください。"})})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"他の選択式フォームとの比較",children:"他の選択式フォームとの比較"}),`
`,n.jsx(r.h3,{id:"vs-ラジオボタン-radio",children:"vs ラジオボタン (Radio)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"UI"}),n.jsx("th",{children:"特徴・適正"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ラジオボタン"})}),n.jsx("td",{children:"全ての選択肢が常に表示されています。選択肢が少ない（3個以下）場合や、一覧性が重要な場合に適しています。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ドロップダウン"})}),n.jsx("td",{children:"画面スペースの節約に優れています。選択肢が多い（4個以上）場合にWebでは適していますが、モバイルでは操作性に注意が必要です。"})]})]})]}),`
`,n.jsx(r.h3,{id:"vs-チェックボックス-checkbox",children:"vs チェックボックス (Checkbox)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"UI"}),n.jsx("th",{children:"特徴・適正"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"チェックボックス"})}),n.jsx("td",{children:"複数選択が可能で、画面上に選択肢が並びます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ドロップダウン"})}),n.jsx("td",{children:"通常は単一選択ですが、リスト内にチェックボックスを組み込むことで、省スペースな複数選択UIとしても機能します。"})]})]})]}),`
`,n.jsx(r.h3,{id:"vs-コンボボックス-combobox",children:"vs コンボボックス (Combobox)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"UI"}),n.jsx("th",{children:"特徴・適正"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"コンボボックス"})}),n.jsx("td",{children:"自由入力やフィルタリング（検索）が可能です。選択肢が多い場合や、ユーザーが独自の値を入力する必要がある場合に適しています。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ドロップダウン"})}),n.jsx("td",{children:"選択肢が固定されており、入力はできません。"})]})]})]}),`
`,n.jsx(r.h3,{id:"vs-マルチセレクト-multiselect",children:"vs マルチセレクト (MultiSelect)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"UI"}),n.jsx("th",{children:"特徴・適正"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"マルチセレクト"})}),n.jsx("td",{children:"タグ形式などで複数の項目を同時に選ぶことに特化しています。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ドロップダウン"})}),n.jsx("td",{children:"基本は単一選択です。"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"使い分けの判断基準",children:"使い分けの判断基準"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"条件"}),n.jsx("th",{children:"推奨UI"}),n.jsx("th",{children:"理由"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"項目が少ない (〜3個)"}),n.jsx("td",{children:"Radio / Checkbox"}),n.jsx("td",{children:"ワンタップで選択でき、一覧性が高い。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"項目が多い (4個〜)"}),n.jsxs("td",{children:["Dropdown (Web)",n.jsx("br",{}),"BottomSheet (Mobile)"]}),n.jsx("td",{children:"省スペース。モバイルではスクロールしやすいUIを選ぶ。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"複数選択が必要"}),n.jsx("td",{children:"Checkbox / MultiSelect"}),n.jsx("td",{children:"複数の値を同時に扱うための専用UI。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"自由入力が必要"}),n.jsx("td",{children:"Text Input"}),n.jsx("td",{children:"日付や数値など、明確な値が決まっている場合。"})]})]})]}),`
`,n.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "wimui";
import { T } from "../T";

<Dropdown>
  <DropdownTrigger>
    <Button label="Open Menu" />
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem onClick={handleProfile}>Profile</DropdownItem>
    <DropdownItem onClick={handleSettings}>Settings</DropdownItem>
  </DropdownMenu>
</Dropdown>;
`})}),`
`,n.jsx(t,{}),`
`,n.jsx(r.h2,{id:"components",children:"Components"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Dropdown"})}),n.jsx("td",{children:"ルートコンポーネント。開閉状態を管理します。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DropdownTrigger"})}),n.jsxs("td",{children:["メニューを開閉するトリガーとなる要素をラップします。通常は ",n.jsx("code",{children:"Button"})," や ",n.jsx("code",{children:"Icon"})," などを含めます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DropdownMenu"})}),n.jsxs("td",{children:["ドロップダウンのメニュー本体です。",n.jsx("code",{children:"align"})," プロパティで表示位置（左寄せ/右寄せ）を制御できます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DropdownItem"})}),n.jsxs("td",{children:["メニュー内の各項目です。",n.jsx("code",{children:"onClick"})," ハンドラを設定したり、Disabled状態にすることができます。"]})]})]})]}),`
`,n.jsx(c,{}),`
`,n.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(r.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(r.p,{children:"アイコンを含めたメニュー項目の例です。"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(r.h3,{id:"right-alignment",children:"Right Alignment"}),`
`,n.jsx(r.p,{children:"メニューを右寄せにする例です。画面の右端にあるトリガーに適しています。"}),`
`,n.jsx(s,{of:j})]})}function T(d={}){const{wrapper:r}={...i(),...d.components};return r?n.jsx(r,{...d,children:n.jsx(e,{...d})}):e(d)}export{T as default};
