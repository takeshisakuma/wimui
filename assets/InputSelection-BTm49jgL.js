import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-e89CbVY2.js";import{M as i}from"./index-BchBXNSQ.js";import"./iframe-BhAqME-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH72S4N.js";import"./index-D7W0jCEc.js";import"./index-gXD_s6uC.js";import"./index-CQDIXRAw.js";import"./index-C1N2IX8j.js";function d(e){const r={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Guides/Form Inputs"}),`
`,n.jsx(r.h1,{id:"入力系コンポーネントの使い分け",children:"入力系コンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"ユーザーからの入力を受け取る際、入力内容の種類や量に基づいて適切なコンポーネントを選択します。"}),`
`,n.jsx(r.h2,{id:"入力タイプ比較",children:"入力タイプ比較"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"入力内容"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Input (Text)"})}),n.jsx("td",{children:"1行のテキスト"}),n.jsx("td",{children:"名前、メールアドレス、電話番号など"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Textarea"})}),n.jsx("td",{children:"複数行のテキスト"}),n.jsx("td",{children:"メッセージ、備考、長い説明文"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Input Group"})}),n.jsx("td",{children:"アイコン/単位付き"}),n.jsx("td",{children:"通貨入力、検索バー、URLプレフィックス付き"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"OtpInput"})}),n.jsx("td",{children:"数字コード"}),n.jsx("td",{children:"2要素認証コード、確認コード"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"DatePicker"})}),n.jsx("td",{children:"日付"}),n.jsx("td",{children:"予約日、誕生日、期限の指定"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"FileUpload / Dropzone"})}),n.jsx("td",{children:"ファイル"}),n.jsx("td",{children:"プロフィール画像、ドキュメントのアップロード"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"入力補助とバリデーション",children:"入力補助とバリデーション"}),`
`,n.jsx(r.h3,{id:"1-label",children:"1. Label"}),`
`,n.jsx(r.p,{children:"すべての入力には明確なラベルが必要です。プレースホルダーをラベルの代わりとして使用しないようにしてください。"}),`
`,n.jsx(r.h3,{id:"2-fielderror",children:"2. FieldError"}),`
`,n.jsx(r.p,{children:"入力エラーは、エラーが発生している入力フィールドのすぐ近くに表示します。"}),`
`,n.jsx(r.h3,{id:"3-input-group-の活用",children:"3. Input Group の活用"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"単位が必要な場合（例：円）は、入力欄の右側に単位を表示します。"}),`
`,n.jsx(r.li,{children:"検索など特定の機能を持つ場合は、アイコンを表示して視認性を高めます。"}),`
`]})]})}function a(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}export{a as default};
