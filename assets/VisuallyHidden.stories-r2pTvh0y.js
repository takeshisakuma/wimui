import{j as s}from"./jsx-runtime-u17CrQMm.js";import{V as t}from"./VisuallyHidden-C6tB2oC3.js";import{A as a}from"./iframe-DtzJMWg3.js";import{u as o}from"./useTranslation-uHyy6oEH.js";const l={title:"Components/Internal/VisuallyHidden",component:t,tags:[],parameters:{layout:"centered"}},e={render:function(r){const{t:d}=o(a);return s.jsx(t,{...r,children:d("story_visuallyhidden_accessible")})}},n={render:function(){const{t:r}=o(a);return s.jsxs("button",{"aria-label":r("story_visuallyhidden_close"),children:[s.jsx("span",{"aria-hidden":"true",children:"×"}),s.jsx(t,{children:r("story_visuallyhidden_close")})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <VisuallyHidden {...args}>
        {t("story_visuallyhidden_accessible")}
      </VisuallyHidden>;
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <button aria-label={t("story_visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story_visuallyhidden_close")}</VisuallyHidden>
      </button>;
  }
}`,...n.parameters?.docs?.source}}};const u=["Primary","WithinButton"],_=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,WithinButton:n,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,_ as V,n as W};
