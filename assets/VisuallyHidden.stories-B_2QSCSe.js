import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as o}from"./index-DcECRbSM.js";const s=({children:t,className:n,...i})=>a.jsx("span",{className:o("wim-visually-hidden",n),...i,children:t});s.__docgenInfo={description:"視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。",methods:[],displayName:"VisuallyHidden",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示されないが、スクリーンリーダーには読み上げられるコンテンツ。"}}};const d={title:"Component/Utilities/VisuallyHidden",component:s,tags:[],parameters:{layout:"centered"}},e={args:{children:"このテキストは視覚的に隠されていますが、スクリーンリーダーでは読み上げられます。"}},r={render:()=>a.jsxs("button",{"aria-label":"閉じる",children:[a.jsx("span",{"aria-hidden":"true",children:"×"}),a.jsx(s,{children:"閉じる"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "このテキストは視覚的に隠されていますが、スクリーンリーダーでは読み上げられます。"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <button aria-label="閉じる">\r
            <span aria-hidden="true">×</span>\r
            <VisuallyHidden>閉じる</VisuallyHidden>\r
        </button>
}`,...r.parameters?.docs?.source}}};const c=["Primary","WithinButton"],p=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,WithinButton:r,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,p as V,r as W};
