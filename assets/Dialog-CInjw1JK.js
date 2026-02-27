import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-ASF-mazP.js";import{M as l,C as r,a as o}from"./index-B25bep_z.js";import{D as c,a as t,U as h,C as x}from"./Dialog.stories-Bqi74pIH.js";import{T as j}from"./T-Dv52hiQU.js";import"./iframe-DLp3Jz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdy6QgF.js";import"./index-DBODvmcM.js";import"./index-CSblWT8I.js";import"./index-B17ZCLRR.js";import"./index-CW_-86og.js";import"./index-DUAuVduf.js";import"./Portal-8GJZ77po.js";import"./Transition-DoP7XyL0.js";import"./FocusTrap-DDiTRHeL.js";import"./Button-Cr0oHLPg.js";import"./Icon-DfmmhfZE.js";import"./useTranslation-BDUJJ6MV.js";import"./Input-BJDaGFkR.js";/* empty css              */import"./Label-wFtu6pKG.js";import"./Badge-gR9NSyKK.js";function i(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(d.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_dialog_title"})}),`
`,n.jsx(d.p,{children:`Dialogは、現在のページの上にレイヤーとしてコンテンツを表示し、ユーザーに重要な情報を伝えたり、アクションを求めたりするために使用されます。
一般的に「モーダル」と呼ばれることが多いですが、本デザインシステムでは「モーダルダイアログ (Modal Dialog)」と呼称することを推奨します。`}),`
`,n.jsx(d.h3,{id:"モーダルと省略しない理由",children:"「モーダル」と省略しない理由"}),`
`,n.jsx(d.p,{children:`「モーダル (Modal)」は本来「モード（状態）を持つ」という意味の形容詞であり、UIコンポーネントそのものを指す言葉ではありません。
モードレス (Modeless) なダイアログ（操作をブロックしないウィンドウ）との対比として使われる用語です。`}),`
`,n.jsx(d.p,{children:`単に「モーダル」と呼ぶと、それが「モーダルな状態」を指すのか、「ダイアログコンポーネント」を指すのかが曖昧になります。
「モーダルダイアログ」と正しく呼ぶことで、「ユーザーの操作を一時的に拘束する（モードを持つ）対話ウィンドウ（ダイアログ）」という機能的特性を正確に表現し、開発者やデザイナー間での認識のズレを防ぎます。
同様に、モードレスなものは「モードレスダイアログ」と呼び分けます。`}),`
`,n.jsx(d.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"Dialog"})," コンポーネントの中に ",n.jsx(d.code,{children:"DialogTrigger"})," と ",n.jsx(d.code,{children:"DialogContent"}),` を配置します。
`,n.jsx(d.code,{children:"DialogContent"})," の中には、ヘッダー、フッター、タイトル、説明文などを配置できます。"]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(d.h2,{id:"制御されていない状態-uncontrolled",children:"制御されていない状態 (Uncontrolled)"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"Dialog"})," はデフォルトで制御されていない状態で動作します。トリガーをクリックすると開き、閉じるボタンやオーバーレイのクリック、Escapeキーで閉じます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(d.h2,{id:"制御された状態-controlled",children:"制御された状態 (Controlled)"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"open"})," プロパティと ",n.jsx(d.code,{children:"onOpenChange"})," イベントハンドラを使用することで、ダイアログの開閉状態を完全に制御できます。"]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(d.h2,{id:"設計思想-右上のボタンを排除した理由",children:"設計思想: 右上の「×」ボタンを排除した理由"}),`
`,n.jsx(d.p,{children:"本コンポーネントでは、意図的に右上の「×」ボタンを排除しています。その理由は以下の通りです。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"設計思想"}),n.jsx("th",{children:"詳細"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"意思決定の曖昧さの排除"})}),n.jsx("td",{children:"「×」ボタンを押した場合、「入力を破棄して閉じたい」のか、あるいは「入力したからとりあえず閉じたい（保存されたと思っている）」のか、ユーザーの意図が不明確になります。肯定（保存など）か否定（キャンセル）かをユーザーに明確に選択させることで、データの整合性を保ち、操作ミスを防ぎます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"オブジェクト指向UI (OOUI) との整合性"})}),n.jsx("td",{children:"モデルベースUIやOOUIの考え方では、対象（オブジェクト）に対する操作（アクション）の流れを重視します。モーダル内での操作は、そのオブジェクトに対する「確定」か「破棄」のどちらかであるべきです。右上の「×」ボタンはOSやブラウザの「ウィンドウを閉じる」という汎用的なアクションに由来しており、特定のタスク操作としては抽象的すぎると捉えられます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アクセシビリティと視線移動の最適化"})}),n.jsx("td",{children:"多くのアクションボタン（保存・キャンセル）は右下に配置されます。右上に「×」があると、ユーザーは対角線上に視線を大きく動かす必要があり、認知負荷が高まります。また、モーダル内外のクリック操作と混同されやすく、意図せず入力内容が消えてしまうリスクを軽減します。"})]})]})]}),`
`,n.jsx(d.h2,{id:"api",children:"API"}),`
`,n.jsx(d.h3,{id:"dialog-components",children:"Dialog Components"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Dialog"})}),n.jsx("td",{children:"ルートコンポーネント。コンテキストを提供します。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogTrigger"})}),n.jsxs("td",{children:["ダイアログを開くためのボタントリガー。",n.jsx("code",{children:"asChild"})," を使用して他のコンポーネントをトリガーとして機能させることができます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogContent"})}),n.jsx("td",{children:"ダイアログの中身を表示するオーバーレイコンテナ。FocusTrapとスクロールロックを管理します。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogHeader"})}),n.jsx("td",{children:"タイトルなどのヘッダー領域。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogFooter"})}),n.jsx("td",{children:"アクションボタンなどのフッター領域。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogTitle"})}),n.jsx("td",{children:"ダイアログのタイトル。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogDescription"})}),n.jsx("td",{children:"ダイアログの補助的な説明。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"DialogClose"})}),n.jsxs("td",{children:["ダイアログを閉じるためのボタン。",n.jsx("code",{children:"asChild"})," が利用可能です。"]})]})]})]}),`
`,n.jsx(d.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{})]})}function v(e={}){const{wrapper:d}={...s(),...e.components};return d?n.jsx(d,{...e,children:n.jsx(i,{...e})}):i(e)}export{v as default};
