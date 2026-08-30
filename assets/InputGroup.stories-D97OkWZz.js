"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Gr as c,Wr as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Button-vRcm9ObM.js";import{t as f}from"./Input-D7MtBloK.js";var p=e({Basic:()=>g,Disabled:()=>b,FullWidth:()=>x,MultipleAddons:()=>y,Suffix:()=>v,WithButton:()=>_,__namedExportsOrder:()=>S,default:()=>h}),m,h,g,_,v,y,b,x,S,C=t((()=>{n(),u(),o(),i(),m=a(),h={title:`Components/Form Layout/InputGroup`,component:l,parameters:{layout:`centered`}},g={render:e=>(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(c,{children:`@`}),(0,m.jsx)(f,{placeholder:`username`})]})},_={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(f,{placeholder:t(`story.inputgroup_placeholder_subject`)}),(0,m.jsx)(d,{variant:`solid`,icon:`SearchIcon`,children:t(`action.search`)})]})}},v={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(f,{placeholder:t(`story.inputgroup_placeholder_username`)}),(0,m.jsx)(c,{children:`@example.com`})]})}},y={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(c,{children:`$`}),(0,m.jsx)(c,{children:`0.00`}),(0,m.jsx)(f,{placeholder:t(`story.inputgroup_placeholder_price`)}),(0,m.jsx)(c,{children:`.00`})]})}},b={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(c,{children:`@`}),(0,m.jsx)(f,{placeholder:t(`story.inputgroup_placeholder_username`),defaultValue:`johndoe`,disabled:!0})]})}},x={args:{fullWidth:!0},render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:`600px`},children:(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(c,{children:t(`action.search`)}),(0,m.jsx)(f,{placeholder:t(`story.inputgroup_placeholder_message`)}),(0,m.jsx)(d,{variant:`solid`,children:t(`story.inputgroup_go`)})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_subject")} />
        <Button variant="solid" icon="SearchIcon">{t("action.search")}</Button>
      </InputGroup>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_username")} />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <Input placeholder={t("story.inputgroup_placeholder_username")} defaultValue="johndoe" disabled />
      </InputGroup>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`WithButton`,`Suffix`,`MultipleAddons`,`Disabled`,`FullWidth`]}));C();export{g as Basic,b as Disabled,x as FullWidth,y as MultipleAddons,v as Suffix,_ as WithButton,S as __namedExportsOrder,h as default,C as n,p as t};