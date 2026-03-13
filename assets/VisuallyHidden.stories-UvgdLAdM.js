import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-Dj-MT3vJ.js";import{u as d}from"./useTranslation-CLFZhCB5.js";const t=({children:r,className:s,...a})=>n.jsx("span",{className:i("wim-visually-hidden",s),...a,children:r});t.__docgenInfo={description:"視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。",methods:[],displayName:"VisuallyHidden",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示されないが、スクリーンリーダーには読み上げられるコンテンツ。"}}};const c={title:"Components/Internal/VisuallyHidden",component:t,tags:[],parameters:{layout:"centered"}},o={render:function(s){const{t:a}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(t,{...s,children:a("story_visuallyhidden_accessible")})}},e={render:function(){const{t:s}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsxs("button",{"aria-label":s("story_visuallyhidden_close"),children:[n.jsx("span",{"aria-hidden":"true",children:"×"}),n.jsx(t,{children:s("story_visuallyhidden_close")})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <VisuallyHidden {...args}>\r
        {t("story_visuallyhidden_accessible")}\r
      </VisuallyHidden>;
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <button aria-label={t("story_visuallyhidden_close")}>\r
        <span aria-hidden="true">×</span>\r
        <VisuallyHidden>{t("story_visuallyhidden_close")}</VisuallyHidden>\r
      </button>;
  }
}`,...e.parameters?.docs?.source}}};const l=["Primary","WithinButton"],p=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,WithinButton:e,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{o as P,p as V,e as W};
