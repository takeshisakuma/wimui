import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./index-CliG8xe-.js";import{A as i}from"./iframe-R6z5wUgf.js";import{u as d}from"./useTranslation-ByGRA6ap.js";const t=({children:a,className:e,...o})=>s.jsx("span",{className:l("wim-visually-hidden",e),...o,children:a});t.__docgenInfo={description:"視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。",methods:[],displayName:"VisuallyHidden",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示されないが、スクリーンリーダーには読み上げられるコンテンツ。"}}};const c={title:"Components/Internal/VisuallyHidden",component:t,tags:[],parameters:{layout:"centered"}},n={render:function(e){const{t:o}=d(i);return s.jsx(t,{...e,children:o("story_visuallyhidden_accessible")})}},r={render:function(){const{t:e}=d(i);return s.jsxs("button",{"aria-label":e("story_visuallyhidden_close"),children:[s.jsx("span",{"aria-hidden":"true",children:"×"}),s.jsx(t,{children:e("story_visuallyhidden_close")})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <VisuallyHidden {...args}>
        {t("story_visuallyhidden_accessible")}
      </VisuallyHidden>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <button aria-label={t("story_visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story_visuallyhidden_close")}</VisuallyHidden>
      </button>;
  }
}`,...r.parameters?.docs?.source}}};const u=["Primary","WithinButton"],h=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,WithinButton:r,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{n as P,h as V,r as W};
