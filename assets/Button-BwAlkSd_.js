import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DRwB__7s.js";import{M as t,T as i,D as x}from"./index-C5WshmKb.js";import{B as j}from"./Button.stories-BRMqi9TT.js";import{T as c}from"./T-CR9BnqVa.js";import"./iframe-B30VedSu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_4Q7J_iu.js";import"./index-SdzfF9k2.js";import"./index-DsJTYN_k.js";import"./index-pVXWzZ6v.js";import"./index-jhfq1t9c.js";import"./Button-CYm2dsqe.js";import"./index-Ctsy14zb.js";import"./Icon-fjY5dhR1.js";import"./useTranslation-CjF9HhML.js";function n(d){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",...e(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{of:j}),`
`,s.jsx(i,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(c,{k:"doc_button_title"})}),`
`,s.jsx(x,{}),`
`,s.jsxs(r.blockquote,{children:[`
`,s.jsxs(r.p,{children:["📘 Guide: See ",s.jsx(r.a,{href:"?path=/docs/guides-link-vs-button--docs",children:"Guides / Link vs Button"})," for when to use ",s.jsx(r.code,{children:"<button>"})," vs ",s.jsx(r.code,{children:"<a>"}),"."]}),`
`]}),`
`,s.jsx("h2",{children:"考慮点"}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"視認性"}),s.jsxs("td",{children:["目立ちやすくして、ユーザーがすぐに見つけられるようにする",s.jsx("br",{}),`\r
背景色やテキスト色のコントラストを高くする`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"クリック領域"}),s.jsxs("td",{children:["クリック領域は十分に広く設定し、誤クリックを防ぐ",s.jsx("br",{}),`\r
特にモバイルデバイスでは指での操作を考慮する`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ラベル"}),s.jsxs("td",{children:["簡潔でわかりやすい言葉を使い、次に何が起こるかを伝える",s.jsx("br",{}),`\r
例：送信、確認、キャンセル`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"フィードバック"}),s.jsxs("td",{children:["クリックした際のフィードバックを提供することで、ユーザーが正しい操作を行ったことを確認できるようにする",s.jsx("br",{}),`\r
色の変化やアニメーションなどを利用する`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"一貫性"}),s.jsxs("td",{children:["同じ種類のボタンは、一貫したデザインを保つことでユーザーの混乱を避ける",s.jsx("br",{}),`\r
サイト全体で同じスタイルを使用することが望ましい`]})]})]}),`
`,s.jsxs(r.p,{children:[s.jsx("h2",{children:"バリエーション"}),`\r
バリエーションの種類で高さがかわらないようにする`]}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"プライマリーボタン"}),s.jsxs("td",{children:["主要なアクションを示すボタンで、他のボタンよりも目立つデザインにする",s.jsx("br",{}),`\r
ユーザーに次にやってほしいアクションを示す`,s.jsx("br",{}),`\r
画面で最もさせたいアクション`]}),s.jsx("td",{children:"「購入する」」「登録する」など"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"セカンダリーボタン"}),s.jsx("td",{children:"補助的なアクションを示すボタンで、プライマリーボタンよりも控えめなデザインにする"}),s.jsx("td",{children:"「キャンセル(プライマリと対になるもの、ダイアログ、重要な変更)」や「戻る」など"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ターシエリボタン"}),s.jsxs("td",{children:["背景をつけないと、プライマリやセカンダリと並べた時に崩れているように見える",s.jsx("br",{}),`\r
背景があると押せる範囲がわかる`,s.jsx("br",{}),`\r
「テキストリンク」や、ホバー時のみ背景が出る「ゴーストボタン」のような形式`]}),s.jsx("td",{children:"「編集」「キャンセル(重要でない変更)」「サブメニューへのリンク」「ヘルプ」「SNS共有」「新規追加」「写真のアップロード」「詳細を見る」など"})]})]}),`
`,s.jsx("h2",{children:"アイコン"}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"アイコンとテキストのボタン"}),s.jsx("td",{children:"テキストとアイコンを組み合わせたボタン"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ラベルのみのボタン"}),s.jsx("td",{children:"テキストのみのボタン"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"アイコンのみのボタン"}),s.jsxs("td",{children:["特定のアクションを示す",s.jsx("br",{}),`\r
アイコンだけでわかるもののみ使用する`]})]})]}),`
`,s.jsxs(r.p,{children:[s.jsx("h2",{children:"状態"}),`\r
意図的な演出以外で、状態の変化によってサイズが変わらないようにする(レイアウトシフトを避ける)`]}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"通常状態"}),s.jsx("td",{})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ホバー状態"}),s.jsxs("td",{children:["マウスを乗せたときの挙動",s.jsx("br",{}),`\r
押せることを伝える`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"アクティブ状態"}),s.jsxs("td",{children:["押したときの挙動",s.jsx("br",{}),`\r
押していることを伝える`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"無効状態"}),s.jsxs("td",{children:["操作できなくする",s.jsx("br",{}),`\r
押せないことを伝える`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"処理中状態"}),s.jsxs("td",{children:["処理が終わって通常状態に戻るまで操作できなくする",s.jsx("br",{}),`\r
通常状態に戻るまで押せないことを伝える`,s.jsx("br",{}),`\r
「読み込み中」「準備中」「処理中」「保存中」「取得中」などで使用する`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"フォーカス状態"}),s.jsxs("td",{children:["キーボードで操作したときの挙動",s.jsx("br",{}),`\r
操作対象であることを伝える`]})]})]}),`
`,s.jsxs(r.p,{children:[s.jsx("h2",{children:"意味"}),`\r
3色程度までにしないと多すぎて混乱させる`,s.jsx("br",{}),`\r
色だけだと色覚特性を持つ人に差がわからない場合があるので、アイコンも併用する`]}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"default"}),s.jsx("td",{children:"ブランドカラーまたはグレー"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"destructive"}),s.jsx("td",{children:"赤"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"positive"}),s.jsx("td",{children:"緑"})]})]}),`
`,s.jsx("h2",{children:"サイズ"}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"サイズ"}),s.jsx("td",{children:"高さ"}),s.jsx("td",{children:"説明"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Small"}),s.jsx("td",{children:"32px前後"}),s.jsx("td",{children:"フォントサイズ"}),s.jsxs("td",{children:["モバイルのリスト表示に適した大きさにする",s.jsx("br",{}),`\r
テーブル内、サイドバー、密集したUI など`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Medium"}),s.jsx("td",{children:"40px前後"}),s.jsx("td",{children:"フォントサイズ"}),s.jsx("td",{children:"ほとんどの画面"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Large"}),s.jsx("td",{children:"48px前後"}),s.jsx("td",{}),s.jsxs("td",{children:["モバイルでは親指で押しやすいサイズにする",s.jsx("br",{}),`\r
CTA(ランディングページなど)ボタン、ログインボタン など重要なボタン`]})]})]}),`
`,s.jsx("h2",{children:"バリエーションX意味"}),`
`,s.jsxs("table",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"destructiveのプライマリ"}),s.jsx("td",{children:"特に危険な操作（アカウント削除、全データ消去など）"}),s.jsx("td",{children:"最も目立ち、ユーザーに「本当にいいですか？」と強く警告する。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"destructiveのセカンダリ"}),s.jsx("td",{children:"一般的な削除（リストから1つ消す、メッセージを消すなど）"}),s.jsxs("td",{children:["画面内で主張しすぎず、かつ「危険な操作」であることを示す",s.jsx("br",{}),`\r
枠線の太さ(1pxなど)の分だけ中身が小さくなるように計算`]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"destructiveのターシエリ"}),s.jsx("td",{children:"控えめな削除（設定画面の隅にある削除、補助的な消去）"}),s.jsx("td",{children:"他の選択肢を邪魔したくないが、見つけたときには注意を促したい場合。"})]})]}),`
`]})}function T(d={}){const{wrapper:r}={...e(),...d.components};return r?s.jsx(r,{...d,children:s.jsx(n,{...d})}):n(d)}export{T as default};
