import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BdJmE6jO.js";import{M as d,a as t,C as s}from"./index-4d6KwSW1.js";import{T as c}from"./T-B9tp72Y-.js";import{I as a,D as h,R as l,C as x,W as j,a as p}from"./Image.stories-BV93LhAD.js";import"./iframe-C-4JLACx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeJq3KNp.js";import"./index-jud4T1_Y.js";import"./index-BNSEd8dy.js";import"./index-DC1su9bf.js";import"./index-DFxqoh7w.js";import"./useTranslation-BFGhrLDt.js";import"./index-HB-Qm5fy.js";import"./imagesanple-VDI2Kzk_.js";function r(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(i.h1,{id:"image",children:"Image"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(c,{k:"doc_image_title"})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"Image"}),` コンポーネントは、画像を洗練された形で表示するためのラッパーコンポーネントです。
レスポンシブなサイズ調整、角丸、影、枠線、キャプションなどの機能を備えています。`]}),`
`,n.jsx(i.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["アスペクト比の制御: ",n.jsx(i.code,{children:"fit"})," プロパティ（",n.jsx(i.code,{children:"object-fit"}),"）により、画像の収まり方を調整可能。"]}),`
`,n.jsxs(i.li,{children:["スタイリング: ",n.jsx(i.code,{children:"radius"}),"、",n.jsx(i.code,{children:"shadow"}),"、",n.jsx(i.code,{children:"border"})," プロパティで外観を簡単に変更。"]}),`
`,n.jsxs(i.li,{children:["キャプション付き: ",n.jsx(i.code,{children:"caption"})," プロパティで画像の下に説明文を追加。"]}),`
`]}),`
`,n.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { Image } from "@/components/Image/Image";

<Image
  src="path/to/image.webp"
  alt="説明文"
  width={400}
  radius="medium"
  shadow
  caption="サンプルの画像です"
/>;
`})}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(i.h3,{id:"default",children:"Default"}),`
`,n.jsx(i.p,{children:"標準的な画像表示です。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(i.h3,{id:"rounded--circular",children:"Rounded & Circular"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"radius"})," プロパティで角丸を調整できます。"]}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(i.h3,{id:"with-caption",children:"With Caption"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"caption"})," を追加して、画像の説明を表示します。"]}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(i.h3,{id:"with-shadow",children:"With Shadow"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"shadow"})," を有効にして、浮き上がったような効果を与えます。"]}),`
`,n.jsx(s,{of:p})]})}function v(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{v as default};
