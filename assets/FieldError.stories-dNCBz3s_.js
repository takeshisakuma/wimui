import{j as s}from"./jsx-runtime-u17CrQMm.js";import{F as n}from"./FieldError-CevOZjcM.js";import{A as a}from"./iframe-BKE1Tr9u.js";import{u as c}from"./useTranslation-B4UNbNY1.js";const d={title:"Components/Form Layout/FieldError",component:n,argTypes:{content:{control:"text"}}},r={render:function(o){const{t}=c(a);return s.jsx(n,{...o,content:t("story_fielderror_error")})}},e={render:function(o){const{t}=c(a);return s.jsx(n,{...o,content:t("story_fielderror_required")})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story_fielderror_error")} />;
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story_fielderror_required")} />;
  }
}`,...e.parameters?.docs?.source}}};const u=["Default","ShortMessage"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ShortMessage:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{r as D,_ as F,e as S};
