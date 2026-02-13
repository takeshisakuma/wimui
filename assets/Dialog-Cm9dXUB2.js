import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DI7J9QVw.js";import{M as l,C as r,a as d}from"./index-wQ-fu4Ac.js";import{D as c,a as t,U as h,C as x}from"./Dialog.stories-CZYeCxJR.js";import{T as j}from"./T-BBfoCICe.js";import"./iframe-8PFyu00w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8Mn0_-2.js";import"./index-CNF4RscW.js";import"./index-Bgsm3l6N.js";import"./index-CsnEVgKO.js";import"./index-v9oG74FQ.js";import"./index-D8TpllMe.js";import"./FocusTrap-Ch7N8uFP.js";import"./Icon-D4Pw3yPr.js";import"./Button-Bp7GRDi3.js";import"./useTranslation-Cyt_ZMVf.js";import"./Input-sdmJ2JOz.js";/* empty css              */import"./Label-C2EppvHY.js";import"./Badge-CLX4ij0W.js";function s(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(i.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_dialog_title"})}),`
`,n.jsx(i.p,{children:`Dialogは、現在のページの上にレイヤーとしてコンテンツを表示し、ユーザーに重要な情報を伝えたり、アクションを求めたりするために使用されます。\r
一般的に「モーダル」と呼ばれることが多いですが、本デザインシステムでは**「モーダルダイアログ (Modal Dialog)」**と呼称することを推奨します。`}),`
`,n.jsx(i.h3,{id:"モーダルと省略しない理由",children:"「モーダル」と省略しない理由"}),`
`,n.jsx(i.p,{children:`「モーダル (Modal)」は本来「モード（状態）を持つ」という意味の形容詞であり、UIコンポーネントそのものを指す言葉ではありません。\r
モードレス (Modeless) なダイアログ（操作をブロックしないウィンドウ）との対比として使われる用語です。`}),`
`,n.jsx(i.p,{children:`単に「モーダル」と呼ぶと、それが「モーダルな状態」を指すのか、「ダイアログコンポーネント」を指すのかが曖昧になります。\r
「モーダルダイアログ」と正しく呼ぶことで、「ユーザーの操作を一時的に拘束する（モードを持つ）対話ウィンドウ（ダイアログ）」という機能的特性を正確に表現し、開発者やデザイナー間での認識のズレを防ぎます。\r
同様に、モードレスなものは「モードレスダイアログ」と呼び分けます。`}),`
`,n.jsx(i.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"Dialog"})," コンポーネントの中に ",n.jsx(i.code,{children:"DialogTrigger"})," と ",n.jsx(i.code,{children:"DialogContent"}),` を配置します。\r
`,n.jsx(i.code,{children:"DialogContent"})," の中には、ヘッダー、フッター、タイトル、説明文などを配置できます。"]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(i.h2,{id:"制御されていない状態-uncontrolled",children:"制御されていない状態 (Uncontrolled)"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"Dialog"})," はデフォルトで制御されていない状態で動作します。トリガーをクリックすると開き、閉じるボタンやオーバーレイのクリック、Escapeキーで閉じます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(i.h2,{id:"制御された状態-controlled",children:"制御された状態 (Controlled)"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"open"})," プロパティと ",n.jsx(i.code,{children:"onOpenChange"})," イベントハンドラを使用することで、ダイアログの開閉状態を完全に制御できます。"]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(i.h2,{id:"設計思想-右上のボタンを排除した理由",children:"設計思想: 右上の「×」ボタンを排除した理由"}),`
`,n.jsx(i.p,{children:"本コンポーネントでは、意図的に右上の「×」ボタンを排除しています。その理由は以下の通りです。"}),`
`,n.jsx(i.h3,{id:"1-意思決定の曖昧さの排除",children:"1. 意思決定の曖昧さの排除"}),`
`,n.jsx(i.p,{children:`「×」ボタンを押した場合、「入力を破棄して閉じたい」のか、あるいは「入力したからとりあえず閉じたい（保存されたと思っている）」のか、ユーザーの意図が不明確になります。\r
肯定（保存など）か否定（キャンセル）かをユーザーに明確に選択させることで、データの整合性を保ち、操作ミスを防ぎます。`}),`
`,n.jsx(i.h3,{id:"2-オブジェクト指向ui-ooui-との整合性",children:"2. オブジェクト指向UI (OOUI) との整合性"}),`
`,n.jsx(i.p,{children:`モデルベースUIやOOUIの考え方では、対象（オブジェクト）に対する操作（アクション）の流れを重視します。\r
モーダル内での操作は、そのオブジェクトに対する「確定」か「破棄」のどちらかであるべきです。右上の「×」ボタンはOSやブラウザの「ウィンドウを閉じる」という汎用的なアクションに由来しており、特定のタスク操作としては抽象的すぎると捉えられます。`}),`
`,n.jsx(i.h3,{id:"3-アクセシビリティと視線移動の最適化",children:"3. アクセシビリティと視線移動の最適化"}),`
`,n.jsx(i.p,{children:`多くのアクションボタン（保存・キャンセル）は右下に配置されます。右上に「×」があると、ユーザーは対角線上に視線を大きく動かす必要があり、認知負荷が高まります。\r
また、モーダル内外のクリック操作と混同されやすく、意図せず入力内容が消えてしまうリスクを軽減します。`}),`
`,n.jsx(i.h2,{id:"api",children:"API"}),`
`,n.jsx(i.h3,{id:"dialog-components",children:"Dialog Components"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Dialog"}),": ルートコンポーネント。コンテキストを提供します。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogTrigger"}),": ダイアログを開くためのボタントリガー。",n.jsx(i.code,{children:"asChild"})," を使用して他のコンポーネントをトリガーとして機能させることができます。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogContent"}),": ダイアログの中身を表示するオーバーレイコンテナ。FocusTrapとスクロールロックを管理します。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogHeader"}),": タイトルなどのヘッダー領域。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogFooter"}),": アクションボタンなどのフッター領域。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogTitle"}),": ダイアログのタイトル。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogDescription"}),": ダイアログの補助的な説明。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogClose"}),": ダイアログを閉じるためのボタン。",n.jsx(i.code,{children:"asChild"})," が利用可能です。"]}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{})]})}function k(o={}){const{wrapper:i}={...e(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(s,{...o})}):s(o)}export{k as default};
