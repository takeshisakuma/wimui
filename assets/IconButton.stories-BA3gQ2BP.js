import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./IconButton-5it1gJOx.js";import{A as s}from"./iframe-DsTXv44w.js";import{u as c}from"./useTranslation-BJ9oq-Jr.js";const l={title:"Components/Buttons/IconButton",component:r,tags:[],argTypes:{disabled:{control:"boolean"},variant:{control:"select",options:["filled","outline","ghost"]}}},o={render:function(t){const{t:e}=c(s);return a.jsx(r,{...t,iconName:"SearchIcon","aria-label":e("story.iconbutton_search")})}},n={render:function(t){const{t:e}=c(s);return a.jsx(r,{...t,iconName:"CloseIcon","aria-label":e("story.iconbutton_close")})},args:{variant:"ghost"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const u=["Default","Close"],f=Object.freeze(Object.defineProperty({__proto__:null,Close:n,Default:o,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{o as D,f as I};
