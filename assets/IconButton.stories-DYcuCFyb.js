import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as t}from"./IconButton-vT5t2QFZ.js";import{A as s}from"./iframe-CvmoyyS_.js";import{u as c}from"./useTranslation-B17dmrqB.js";const u={title:"Components/Buttons/IconButton",component:t,tags:[],argTypes:{disabled:{control:"boolean"}}},o={render:function(e){const{t:n}=c(s);return a.jsx(t,{...e,iconName:"SearchIcon","aria-label":n("story_iconbutton_search")})}},r={render:function(e){const{t:n}=c(s);return a.jsx(t,{...e,iconName:"CloseIcon","aria-label":n("story_iconbutton_close"),priority:"tertiary"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const l=["Default","Close"],b=Object.freeze(Object.defineProperty({__proto__:null,Close:r,Default:o,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{o as D,b as I};
