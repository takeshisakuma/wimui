import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CqHK-5fb.js";import{M as d,a as t,C as r}from"./index-DCFdKc_g.js";import{T as c}from"./T-b39ypo2F.js";import{I as a,D as h,R as l,C as x,W as j,a as m}from"./Image.stories-DJhIfYM2.js";import"./iframe-C582d8o3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C10zozjV.js";import"./index-M-D5V0q7.js";import"./index-C4mbK8Fq.js";import"./index-ZWQHblKk.js";import"./index-CW2OrapX.js";import"./useTranslation-Dj-ZhRwg.js";import"./index-BNTbL7oN.js";import"./imagesanple-VDI2Kzk_.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/Media/Image",of:a}),`
`,n.jsx(e.h1,{id:"image",children:"Image"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(c,{k:"doc_image_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Image"}),` コンポーネントは、画像を洗練された形で表示するためのラッパーコンポーネントです。\r
レスポンシブなサイズ調整、角丸、影、枠線、キャプションなどの機能を備えています。`]}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["アスペクト比の制御: ",n.jsx(e.code,{children:"fit"})," プロパティ（",n.jsx(e.code,{children:"object-fit"}),"）により、画像の収まり方を調整可能。"]}),`
`,n.jsxs(e.li,{children:["スタイリング: ",n.jsx(e.code,{children:"radius"}),"、",n.jsx(e.code,{children:"shadow"}),"、",n.jsx(e.code,{children:"border"})," プロパティで外観を簡単に変更。"]}),`
`,n.jsxs(e.li,{children:["キャプション付き: ",n.jsx(e.code,{children:"caption"})," プロパティで画像の下に説明文を追加。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Image } from "@/components/Image/Image";\r
\r
<Image\r
  src="path/to/image.webp"\r
  alt="説明文"\r
  width={400}\r
  radius="medium"\r
  shadow\r
  caption="サンプルの画像です"\r
/>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(e.p,{children:"標準的な画像表示です。"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"rounded--circular",children:"Rounded & Circular"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"radius"})," プロパティで角丸を調整できます。"]}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"with-caption",children:"With Caption"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"caption"})," を追加して、画像の説明を表示します。"]}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h3,{id:"with-shadow",children:"With Shadow"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"shadow"})," を有効にして、浮き上がったような効果を与えます。"]}),`
`,n.jsx(r,{of:m})]})}function v(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{v as default};
