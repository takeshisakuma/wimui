import{j as s}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./FieldError-D2842XTA.js";import{u as c}from"./useTranslation-BH3LN071.js";const d={title:"Components/Form Layout/FieldError",component:t,argTypes:{content:{control:"text"}}},r={render:function(o){const{t:n}=c(["docs","common","components"]);return s.jsx(t,{...o,content:n("story_fielderror_error")})}},e={render:function(o){const{t:n}=c(["docs","common","components"]);return s.jsx(t,{...o,content:n("story_fielderror_required")})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_error")} />;
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_required")} />;
  }
}`,...e.parameters?.docs?.source}}};const m=["Default","ShortMessage"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ShortMessage:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{r as D,p as F,e as S};
