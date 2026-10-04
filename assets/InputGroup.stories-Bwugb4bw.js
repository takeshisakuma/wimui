"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./Input-Cx7cDmF1.js";import{n as f,r as p,t as m}from"./InputGroup-i7iZ4WR1.js";var h=t({Basic:()=>v,Disabled:()=>S,FullWidth:()=>C,MultipleAddons:()=>x,Suffix:()=>b,WithButton:()=>y,__namedExportsOrder:()=>w,default:()=>_}),g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),c(),u(),p(),i(),a(),g=s(),_={title:`Components/Form Layout/InputGroup`,component:m,parameters:{layout:`centered`}},v={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{children:`@`}),(0,g.jsx)(d,{placeholder:`username`})]})},y={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(d,{placeholder:t(`story.inputgroup_placeholder_subject`)}),(0,g.jsx)(l,{variant:`solid`,icon:`SearchIcon`,children:t(`action.search`)})]})}},b={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(d,{placeholder:t(`story.inputgroup_placeholder_username`)}),(0,g.jsx)(f,{children:`@example.com`})]})}},x={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{children:`$`}),(0,g.jsx)(f,{children:`0.00`}),(0,g.jsx)(d,{placeholder:t(`story.inputgroup_placeholder_price`)}),(0,g.jsx)(f,{children:`.00`})]})}},S={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{children:`@`}),(0,g.jsx)(d,{placeholder:t(`story.inputgroup_placeholder_username`),defaultValue:`johndoe`,disabled:!0})]})}},C={args:{fullWidth:!0},render:function(e){let{t}=r(o);return(0,g.jsx)(`div`,{style:{width:`100%`,maxWidth:`600px`},children:(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{children:t(`action.search`)}),(0,g.jsx)(d,{placeholder:t(`story.inputgroup_placeholder_message`)}),(0,g.jsx)(l,{variant:`solid`,children:t(`story.inputgroup_go`)})]})})}},w=[`Basic`,`WithButton`,`Suffix`,`MultipleAddons`,`Disabled`,`FullWidth`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_subject")} />
        <Button variant="solid" icon="SearchIcon">{t("action.search")}</Button>
      </InputGroup>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_username")} />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <Input placeholder={t("story.inputgroup_placeholder_price")} />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <Input placeholder={t("story.inputgroup_placeholder_username")} defaultValue="johndoe" disabled />
      </InputGroup>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "600px"
    }}>
        <InputGroup {...args}>
          <InputGroupText>{t("action.search")}</InputGroupText>
          <Input placeholder={t("story.inputgroup_placeholder_message")} />
          <Button variant="solid">{t("story.inputgroup_go")}</Button>
        </InputGroup>
      </div>;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{b as a,x as i,C as n,y as o,h as r,T as s,v as t};