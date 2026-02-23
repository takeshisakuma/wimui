import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as j}from"./index-we5hV298.js";import{M as h,C as d,a,I as r,e}from"./index-CCzXP5Ta.js";import{T as o}from"./T-D0PqHfgB.js";import{I as m,M as l,a as t}from"./Icon.stories-bqK9--kQ.js";import{I as c}from"./Icon-CpVV-ttk.js";import"./iframe-8LF_5NFv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbBvnLjc.js";import"./index-C-q8pw1b.js";import"./index-CfrJt3Ge.js";import"./index-cxX7bZW8.js";import"./index-CGONYfEl.js";import"./useTranslation-BtpuXeMf.js";import"./index-X7K14i5a.js";function x(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...j(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:m}),`
`,n.jsx(s.h1,{id:"icon",children:"Icon"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_icon_title"})}),`
`,n.jsx(s.p,{children:"アプリケーション全体で使用されるアイコンコンポーネント"}),`
`,n.jsx(s.h2,{id:"iconを独立したコンポーネントにする利点",children:"Iconを独立したコンポーネントにする利点"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"すべてのアイコンが一元管理できるのでデザインの一貫性を保てる"}),`
`,n.jsx(s.li,{children:"アイコンのファイル形式やスタイリングなどをアイコンコンポーネントにカプセル化するので変更がしやすくなる"}),`
`,n.jsx(s.li,{children:"ボタンだけでなく、リストアイテム、フォームの入力フィールド、ステータス表示など、さまざまなコンポーネントで同じアイコンを簡単に再利用できる"}),`
`]}),`
`,n.jsx(s.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(d,{of:l}),`
`,n.jsx(s.h2,{id:"カラー",children:"カラー"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"color"})," プロパティでアイコンの色を指定できます。"]}),`
`,n.jsx(d,{of:l}),`
`,n.jsx(s.h2,{id:"サイズ",children:"サイズ"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"size"})," プロパティで ",n.jsx(s.code,{children:"small"}),"、",n.jsx(s.code,{children:"medium"}),"、",n.jsx(s.code,{children:"large"})," からサイズを選択できます。"]}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(s.h2,{id:"icon-のアニメーションと-loader-コンポーネントの使い分け",children:"Icon のアニメーションと Loader コンポーネントの使い分け"}),`
`,n.jsxs(s.p,{children:["Icon コンポーネントでは ",n.jsx(s.code,{children:"LoadingIcon"})," や ",n.jsx(s.code,{children:"SpinnerIcon"})," を指定すると、**360度回転アニメーション（",n.jsx(s.code,{children:"wim-rotate"}),"）**が自動的に適用されます。一方で、別途 ",n.jsx(s.strong,{children:"Loader コンポーネント"})," にも読み込み中を示すアニメーションがあります。これらは用途が異なるため、適切に使い分けてください。"]}),`
`,n.jsxs(s.h3,{id:"icon-のアニメーションloadingicon--spinnericon",children:["Icon のアニメーション（",n.jsx(s.code,{children:"LoadingIcon"})," / ",n.jsx(s.code,{children:"SpinnerIcon"}),"）"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"項目"}),n.jsx("th",{children:"内容"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アニメーション"})}),n.jsxs("td",{children:["単一のアイコンが無限に回転する（",n.jsx("code",{children:"rotate 360deg"}),"）"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"用途"})}),n.jsxs("td",{children:["ボタン内、入力フィールド、テキストの横など ",n.jsx("strong",{children:"インライン（行内）"})," で「処理中」を示す場合"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"特徴"})}),n.jsxs("td",{children:["既存の UI レイアウトに自然に溶け込むサイズ（",n.jsx("code",{children:"small"})," / ",n.jsx("code",{children:"medium"})," / ",n.jsx("code",{children:"large"}),"）で表示できる"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"例"})}),n.jsx("td",{children:"ボタン送信中のスピナー、検索実行中のインジケーター、データ更新中のアイコン"})]})]})]}),`
`,n.jsx(s.h3,{id:"loader-コンポーネントのアニメーション",children:"Loader コンポーネントのアニメーション"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"項目"}),n.jsx("th",{children:"内容"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アニメーション"})}),n.jsxs("td",{children:["複数の要素（3つのバーやドットなど）が時間差で動く波形アニメーション（",n.jsx("code",{children:"bars"})," / ",n.jsx("code",{children:"dots"})," / ",n.jsx("code",{children:"pulse"}),"）"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"用途"})}),n.jsxs("td",{children:["ページ全体やセクション単位で ",n.jsx("strong",{children:"コンテンツの読み込み待ち"})," を表示する場合"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"特徴"})}),n.jsxs("td",{children:["視覚的なバリエーションが豊富で、独立した読み込みインジケーターとして存在感がある。",n.jsx("code",{children:"sm"})," / ",n.jsx("code",{children:"md"})," / ",n.jsx("code",{children:"lg"})," / ",n.jsx("code",{children:"xl"})," のサイズと複数のカラーに対応"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"例"})}),n.jsx("td",{children:"ページ初期ロード、一覧データの取得中、コンテンツ切り替え時の表示"})]})]})]}),`
`,n.jsx(s.h3,{id:"早見表",children:"早見表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"観点"}),n.jsxs("th",{children:["Icon（",n.jsx("code",{children:"LoadingIcon"})," / ",n.jsx("code",{children:"SpinnerIcon"}),"）"]}),n.jsx("th",{children:"Loader コンポーネント"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アニメーション形式"})}),n.jsx("td",{children:"回転（rotate）"}),n.jsx("td",{children:"波形（bars / dots / pulse）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"表示場所"})}),n.jsx("td",{children:"インライン（テキストやボタンの横）"}),n.jsx("td",{children:"ページ・セクションの中央"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"要素数"})}),n.jsx("td",{children:"単一アイコン"}),n.jsx("td",{children:"複数要素（3つのバー/ドット）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"主な用途"})}),n.jsx("td",{children:"アクション実行中のフィードバック"}),n.jsx("td",{children:"コンテンツ読み込み待ちの表示"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"サイズ"})}),n.jsx("td",{children:"small / medium / large"}),n.jsx("td",{children:"sm / md / lg / xl"})]})]})]}),`
`,n.jsx(s.h2,{id:"props",children:"Props"}),`
`,n.jsx(a,{}),`
`,n.jsx(s.h2,{id:"",children:n.jsx(o,{k:"doc_icon_gallery"})}),`
`,n.jsx(s.h3,{id:"線-outline",children:"線 (Outline)"}),`
`,n.jsx(s.p,{children:"主に「控えめな表現」「ナビゲーション」「入力補助」に使用します。"}),`
`,n.jsx(s.h4,{id:"ナビゲーション",children:"ナビゲーション"}),`
`,n.jsx(s.p,{children:"ページ遷移や方向を示すアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"HomeIcon",children:n.jsx(c,{name:"HomeIcon"})}),n.jsx(e,{name:"ChevronUpIcon",children:n.jsx(c,{name:"ChevronUpIcon"})}),n.jsx(e,{name:"ChevronDownIcon",children:n.jsx(c,{name:"ChevronDownIcon"})}),n.jsx(e,{name:"ChevronRightIcon",children:n.jsx(c,{name:"ChevronRightIcon"})}),n.jsx(e,{name:"ChevronLeftIcon",children:n.jsx(c,{name:"ChevronLeftIcon"})}),n.jsx(e,{name:"ExternalLinkIcon",children:n.jsx(c,{name:"ExternalLinkIcon"})})]}),`
`,n.jsx(s.h4,{id:"アクション",children:"アクション"}),`
`,n.jsx(s.p,{children:"ユーザーの操作・アクションを表すアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"EditIcon",children:n.jsx(c,{name:"EditIcon"})}),n.jsx(e,{name:"TrashIcon",children:n.jsx(c,{name:"TrashIcon"})}),n.jsx(e,{name:"CopyIcon",children:n.jsx(c,{name:"CopyIcon"})}),n.jsx(e,{name:"UploadIcon",children:n.jsx(c,{name:"UploadIcon"})}),n.jsx(e,{name:"DownloadIcon",children:n.jsx(c,{name:"DownloadIcon"})}),n.jsx(e,{name:"ShareIcon",children:n.jsx(c,{name:"ShareIcon"})}),n.jsx(e,{name:"RefreshIcon",children:n.jsx(c,{name:"RefreshIcon"})}),n.jsx(e,{name:"PlusIcon",children:n.jsx(c,{name:"PlusIcon"})}),n.jsx(e,{name:"MinusIcon",children:n.jsx(c,{name:"MinusIcon"})}),n.jsx(e,{name:"SearchIcon",children:n.jsx(c,{name:"SearchIcon"})}),n.jsx(e,{name:"FilterIcon",children:n.jsx(c,{name:"FilterIcon"})})]}),`
`,n.jsx(s.h4,{id:"ステータスフィードバック",children:"ステータス・フィードバック"}),`
`,n.jsx(s.p,{children:"状態表示や通知を示すアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"LoadingIcon",children:n.jsx(c,{name:"LoadingIcon"})}),n.jsx(e,{name:"SpinnerIcon",children:n.jsx(c,{name:"SpinnerIcon"})}),n.jsx(e,{name:"CheckIcon",children:n.jsx(c,{name:"CheckIcon"})}),n.jsx(e,{name:"CheckCircleIcon",children:n.jsx(c,{name:"CheckCircleIcon"})}),n.jsx(e,{name:"InfoCircleIcon",children:n.jsx(c,{name:"InfoCircleIcon"})}),n.jsx(e,{name:"AlertCircleIcon",children:n.jsx(c,{name:"AlertCircleIcon"})}),n.jsx(e,{name:"HelpCircleIcon",children:n.jsx(c,{name:"HelpCircleIcon"})}),n.jsx(e,{name:"HourglassIcon",children:n.jsx(c,{name:"HourglassIcon"})})]}),`
`,n.jsx(s.h4,{id:"ファイルメディア",children:"ファイル・メディア"}),`
`,n.jsx(s.p,{children:"ファイル種別やメディアを表すアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"PdfIcon",children:n.jsx(c,{name:"PdfIcon"})}),n.jsx(e,{name:"DocumentIcon",children:n.jsx(c,{name:"DocumentIcon"})}),n.jsx(e,{name:"ImageIcon",children:n.jsx(c,{name:"ImageIcon"})}),n.jsx(e,{name:"VideoIcon",children:n.jsx(c,{name:"VideoIcon"})})]}),`
`,n.jsx(s.h4,{id:"ユーザー認証",children:"ユーザー・認証"}),`
`,n.jsx(s.p,{children:"ユーザー管理やログインに関するアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"UserIcon",children:n.jsx(c,{name:"UserIcon"})}),n.jsx(e,{name:"LogInIcon",children:n.jsx(c,{name:"LogInIcon"})}),n.jsx(e,{name:"LogOutIcon",children:n.jsx(c,{name:"LogOutIcon"})})]}),`
`,n.jsx(s.h4,{id:"コミュニケーション",children:"コミュニケーション"}),`
`,n.jsx(s.p,{children:"通知やメッセージに関するアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"EmailIcon",children:n.jsx(c,{name:"EmailIcon"})}),n.jsx(e,{name:"PhoneIcon",children:n.jsx(c,{name:"PhoneIcon"})}),n.jsx(e,{name:"BellIcon",children:n.jsx(c,{name:"BellIcon"})})]}),`
`,n.jsx(s.h4,{id:"表示切替デバイス",children:"表示切替・デバイス"}),`
`,n.jsx(s.p,{children:"表示モードやデバイスに関するアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"EyeIcon",children:n.jsx(c,{name:"EyeIcon"})}),n.jsx(e,{name:"EyeOffIcon",children:n.jsx(c,{name:"EyeOffIcon"})}),n.jsx(e,{name:"MaximizeIcon",children:n.jsx(c,{name:"MaximizeIcon"})}),n.jsx(e,{name:"MinimizeIcon",children:n.jsx(c,{name:"MinimizeIcon"})}),n.jsx(e,{name:"SunIcon",children:n.jsx(c,{name:"SunIcon"})}),n.jsx(e,{name:"MoonIcon",children:n.jsx(c,{name:"MoonIcon"})}),n.jsx(e,{name:"MonitorIcon",children:n.jsx(c,{name:"MonitorIcon"})}),n.jsx(e,{name:"SmartphoneIcon",children:n.jsx(c,{name:"SmartphoneIcon"})})]}),`
`,n.jsx(s.h4,{id:"メディアコントロール",children:"メディアコントロール"}),`
`,n.jsx(s.p,{children:"音声・動画の再生操作に関するアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"VolumeIcon",children:n.jsx(c,{name:"VolumeIcon"})}),n.jsx(e,{name:"MuteIcon",children:n.jsx(c,{name:"MuteIcon"})}),n.jsx(e,{name:"SkipBackIcon",children:n.jsx(c,{name:"SkipBackIcon"})}),n.jsx(e,{name:"SkipForwardIcon",children:n.jsx(c,{name:"SkipForwardIcon"})}),n.jsx(e,{name:"ShuffleIcon",children:n.jsx(c,{name:"ShuffleIcon"})}),n.jsx(e,{name:"RepeatIcon",children:n.jsx(c,{name:"RepeatIcon"})})]}),`
`,n.jsx(s.h4,{id:"その他-ui",children:"その他 UI"}),`
`,n.jsx(s.p,{children:"汎用的な UI 要素として使うアイコン。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"CloseIcon",children:n.jsx(c,{name:"CloseIcon"})}),n.jsx(e,{name:"CloseSmallIcon",children:n.jsx(c,{name:"CloseSmallIcon"})}),n.jsx(e,{name:"StarIcon",children:n.jsx(c,{name:"StarIcon"})}),n.jsx(e,{name:"ProjectIcon",children:n.jsx(c,{name:"ProjectIcon"})}),n.jsx(e,{name:"ChartIcon",children:n.jsx(c,{name:"ChartIcon"})}),n.jsx(e,{name:"SettingsIcon",children:n.jsx(c,{name:"SettingsIcon"})}),n.jsx(e,{name:"CalendarIcon",children:n.jsx(c,{name:"CalendarIcon"})}),n.jsx(e,{name:"ClockIcon",children:n.jsx(c,{name:"ClockIcon"})}),n.jsx(e,{name:"MoreHorizontalIcon",children:n.jsx(c,{name:"MoreHorizontalIcon"})}),n.jsx(e,{name:"MoreVerticalIcon",children:n.jsx(c,{name:"MoreVerticalIcon"})}),n.jsx(e,{name:"ThumbUpIcon",children:n.jsx(c,{name:"ThumbUpIcon"})}),n.jsx(e,{name:"ThumbDownIcon",children:n.jsx(c,{name:"ThumbDownIcon"})})]}),`
`,n.jsx(s.h3,{id:"塗りつぶし-filled",children:"塗りつぶし (Filled)"}),`
`,n.jsx(s.p,{children:"主に「選択状態（Active）」「強調したいアクション」「小さいサイズでの視認性向上」に使用します。"}),`
`,n.jsxs(r,{children:[n.jsx(e,{name:"CircleIcon",children:n.jsx(c,{name:"CircleIcon"})}),n.jsx(e,{name:"SquareIcon",children:n.jsx(c,{name:"SquareIcon"})}),n.jsx(e,{name:"PlayIcon",children:n.jsx(c,{name:"PlayIcon"})}),n.jsx(e,{name:"PauseIcon",children:n.jsx(c,{name:"PauseIcon"})})]})]})}function U(i={}){const{wrapper:s}={...j(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(x,{...i})}):x(i)}export{U as default};
