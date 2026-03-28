import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as e}from"./IconButton-Bm8Hfi3K.js";import{A as s}from"./iframe-DhNyLLHC.js";import{u as c}from"./useTranslation-OwuDKqc3.js";const u={title:"Components/Buttons/IconButton",component:e,tags:[],argTypes:{disabled:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},r={render:function(n){const{t}=c(s);return a.jsx(e,{...n,iconName:"SearchIcon","aria-label":t("story_iconbutton_search")})}},o={render:function(n){const{t}=c(s);return a.jsx(e,{...n,iconName:"CloseIcon","aria-label":t("story_iconbutton_close")})},args:{priority:"tertiary"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story_iconbutton_search")} />;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story_iconbutton_close")} />;
  },
  args: {
    priority: "tertiary"
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","Close"],y=Object.freeze(Object.defineProperty({__proto__:null,Close:o,Default:r,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,y as I};
