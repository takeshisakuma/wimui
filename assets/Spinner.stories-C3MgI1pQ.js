"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Spinner-q4VB1Pzw.js";var l=t({Colors:()=>p,Default:()=>f,Sizes:()=>m,WithLabel:()=>h,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Loading States/Spinner`,component:c,tags:[],argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},labelPosition:{control:`radio`,options:[`right`,`bottom`]}}},f={render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.spinner_label_loading`)})}},p={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,u.jsx)(c,{...e,color:`primary`}),(0,u.jsx)(c,{...e,color:`secondary`}),(0,u.jsx)(c,{...e,color:`success`}),(0,u.jsx)(c,{...e,color:`warning`}),(0,u.jsx)(c,{...e,color:`danger`}),(0,u.jsx)(c,{...e,color:`neutral`})]})},m={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,u.jsx)(c,{...e,size:`sm`}),(0,u.jsx)(c,{...e,size:`md`}),(0,u.jsx)(c,{...e,size:`lg`}),(0,u.jsx)(c,{...e,size:`xl`})]})},h={render:function(e){let{t}=n(a);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,u.jsx)(c,{...e,label:t(`story.spinner_loading_right`),labelPosition:`right`}),(0,u.jsx)(c,{...e,label:t(`story.spinner_loading_bottom`),labelPosition:`bottom`})]})}},g=[`Default`,`Colors`,`Sizes`,`WithLabel`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Spinner {...args} label={t("story.spinner_label_loading")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="danger" />
      <Spinner {...args} color="neutral" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px"
    }}>
      <Spinner {...args} label={t("story.spinner_loading_right")} labelPosition="right" />
      <Spinner {...args} label={t("story.spinner_loading_bottom")} labelPosition="bottom" />
    </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{h as a,l as i,f as n,_ as o,m as r,p as t};