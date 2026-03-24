import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as n}from"./IconButton-D6jnoxzj.js";import{A as s}from"./iframe-C4dXFIAh.js";import{u as c}from"./useTranslation-BuGUkK9t.js";const u={title:"Components/Buttons/IconButton",component:n,tags:[]},o={render:function(t){const{t:e}=c(s);return a.jsx(n,{...t,iconName:"SearchIcon","aria-label":e("story_iconbutton_search")})}},r={render:function(t){const{t:e}=c(s);return a.jsx(n,{...t,iconName:"CloseIcon","aria-label":e("story_iconbutton_close"),priority:"tertiary"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story_iconbutton_search")} />;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story_iconbutton_close")} priority="tertiary" />;
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","Close"],f=Object.freeze(Object.defineProperty({__proto__:null,Close:r,Default:o,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{o as D,f as I};
