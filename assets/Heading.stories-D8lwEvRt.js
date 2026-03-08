import{j as o}from"./jsx-runtime-u17CrQMm.js";import{H as r}from"./Heading-CAkIbMh7.js";import{u as s}from"./useTranslation-CQiqGYf8.js";const h={title:"Components/Typography & Icons/Heading",component:r,parameters:{layout:"padded"},argTypes:{tag:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]},align:{control:"radio",options:["left","center","right"]}}},a={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h1",size:"2xl",color:"black",align:"left"}},t={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h2",size:"xl",color:"black",align:"left"}},c={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h3",size:"lg",color:"black",align:"left"}},i={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h4",size:"md",color:"black",align:"left"}},g={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h5",size:"sm",color:"black",align:"left"}},d={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_text")})},args:{tag:"h6",size:"xs",color:"black",align:"left"}},l={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_underline")})},args:{tag:"h2",size:"xl",decoration:"underline"}},m={render:n=>{const{t:e}=s(["docs","common","components"]);return o.jsx(r,{...n,children:e("story_heading_highlight")})},args:{tag:"h2",size:"xl",decoration:"highlight"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h1",
    size: "2xl",
    color: "black",
    align: "left"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    color: "black",
    align: "left"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h3",
    size: "lg",
    color: "black",
    align: "left"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h4",
    size: "md",
    color: "black",
    align: "left"
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h5",
    size: "sm",
    color: "black",
    align: "left"
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_text")}</Heading>;
  },
  args: {
    tag: "h6",
    size: "xs",
    color: "black",
    align: "left"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_underline")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "underline"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Heading {...args}>{t("story_heading_highlight")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "highlight"
  }
}`,...m.parameters?.docs?.source}}};const p=["h1_heading","h2_heading","h3_heading","h4_heading","h5_heading","h6_heading","UnderlineHeading","HighlightHeading"],H=Object.freeze(Object.defineProperty({__proto__:null,HighlightHeading:m,UnderlineHeading:l,__namedExportsOrder:p,default:h,h1_heading:a,h2_heading:t,h3_heading:c,h4_heading:i,h5_heading:g,h6_heading:d},Symbol.toStringTag,{value:"Module"}));export{H,t as a,c as b,i as c,g as d,d as e,a as h};
