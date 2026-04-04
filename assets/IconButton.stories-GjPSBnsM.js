import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./IconButton-TrLYvB1v.js";import{A as a}from"./iframe-CiRA90at.js";import{u as c}from"./useTranslation-BEAd_Ta8.js";const u={title:"Components/Buttons/IconButton",component:r,tags:[],argTypes:{disabled:{control:"boolean"},variant:{control:"select",options:["solid","outline","ghost"]}}},o={render:function(t){const{t:e}=c(a);return s.jsx(r,{...t,iconName:"SearchIcon","aria-label":e("story.iconbutton_search")})}},n={render:function(t){const{t:e}=c(a);return s.jsx(r,{...t,iconName:"CloseIcon","aria-label":e("story.iconbutton_close")})},args:{variant:"ghost"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story.iconbutton_close")} />;
  },
  args: {
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","Close"],b=Object.freeze(Object.defineProperty({__proto__:null,Close:n,Default:o,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{o as D,b as I};
