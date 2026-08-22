"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{jn as s,t as c}from"./src-Ssuy8lr7.js";var l=e({Colors:()=>p,Default:()=>f,Sizes:()=>m,WithLabel:()=>h,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Loading States/Spinner`,component:s,tags:[],argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},labelPosition:{control:`radio`,options:[`right`,`bottom`]}}},f={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,label:t(`story.spinner_label_loading`)})}},p={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,u.jsx)(s,{...e,color:`primary`}),(0,u.jsx)(s,{...e,color:`secondary`}),(0,u.jsx)(s,{...e,color:`success`}),(0,u.jsx)(s,{...e,color:`warning`}),(0,u.jsx)(s,{...e,color:`danger`}),(0,u.jsx)(s,{...e,color:`neutral`})]})},m={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,u.jsx)(s,{...e,size:`sm`}),(0,u.jsx)(s,{...e,size:`md`}),(0,u.jsx)(s,{...e,size:`lg`})]})},h={render:function(e){let{t}=n(o);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,u.jsx)(s,{...e,label:t(`story.spinner_loading_right`),labelPosition:`right`}),(0,u.jsx)(s,{...e,label:t(`story.spinner_loading_bottom`),labelPosition:`bottom`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Colors`,`Sizes`,`WithLabel`]}));_();export{p as Colors,f as Default,m as Sizes,h as WithLabel,g as __namedExportsOrder,d as default,_ as n,l as t};