import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-Ckw0h7AD.js";import{u as i}from"./useTranslation-BH3LN071.js";const o=({children:t,className:e,...a})=>r.jsx("span",{className:d("wim-visually-hidden",e),...a,children:t});o.__docgenInfo={description:"視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。",methods:[],displayName:"VisuallyHidden",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示されないが、スクリーンリーダーには読み上げられるコンテンツ。"}}};const c={title:"Components/Internal/VisuallyHidden",component:o,tags:[],parameters:{layout:"centered"}},n={render:function(e){const{t:a}=i(["docs","common","components"]);return r.jsx(o,{...e,children:a("story_visuallyhidden_accessible")})}},s={render:function(){const{t:e}=i(["docs","common","components"]);return r.jsxs("button",{"aria-label":e("story_visuallyhidden_close"),children:[r.jsx("span",{"aria-hidden":"true",children:"×"}),r.jsx(o,{children:e("story_visuallyhidden_close")})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <VisuallyHidden {...args}>\r
        {t("story_visuallyhidden_accessible")}\r
      </VisuallyHidden>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <button aria-label={t("story_visuallyhidden_close")}>\r
        <span aria-hidden="true">×</span>\r
        <VisuallyHidden>{t("story_visuallyhidden_close")}</VisuallyHidden>\r
      </button>;
  }
}`,...s.parameters?.docs?.source}}};const l=["Primary","WithinButton"],y=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,WithinButton:s,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{n as P,y as V,s as W};
