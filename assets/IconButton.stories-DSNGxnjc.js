import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./IconButton-Cha3zpAs.js";import{u as a}from"./useTranslation-BS4yh-5V.js";const i={title:"Components/Buttons/IconButton",component:r,tags:[]},o={render:function(e){const{t}=a(["docs","common","components"]);return s.jsx(r,{...e,iconName:"SearchIcon","aria-label":t("story_iconbutton_search")})}},n={render:function(e){const{t}=a(["docs","common","components"]);return s.jsx(r,{...e,iconName:"CloseIcon","aria-label":t("story_iconbutton_close"),priority:"tertiary"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story_iconbutton_search")} />;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story_iconbutton_close")} priority="tertiary" />;
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","Close"],d=Object.freeze(Object.defineProperty({__proto__:null,Close:n,Default:o,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,d as I};
