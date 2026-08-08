"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c,wi as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";import{r as d,t as f}from"./DemoCell-BGw1L_9W.js";var p=e({AlignEnd:()=>v,Basic:()=>g,Grow:()=>_,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{n(),o(),i(),c(),d(),m=a(),h={title:`Components/Layout/Group`,component:l,tags:[],argTypes:{align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`]},gap:{control:`text`},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},grow:{control:`boolean`}}},g={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(u,{variant:`solid`,children:t(`story.group_first`,`First`)}),(0,m.jsx)(u,{variant:`outline`,children:t(`story.group_second`,`Second`)}),(0,m.jsx)(u,{variant:`ghost`,children:t(`story.group_third`,`Third`)})]})},args:{gap:16}},_={render:function(e){let{t}=r(s);return(0,m.jsxs)(l,{...e,children:[(0,m.jsx)(u,{variant:`solid`,children:t(`story.group_first`,`First`)}),(0,m.jsx)(u,{variant:`outline`,children:t(`story.group_second`,`Second`)})]})},args:{grow:!0,gap:16}},v={args:{align:`end`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{intent:`primary`,p:0,w:40,h:40}),(0,m.jsx)(f,{intent:`success`,p:0,w:40,h:80}),(0,m.jsx)(f,{intent:`danger`,p:0,w:40,h:60})]}),gap:16}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button variant="solid">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
        <Button variant="ghost">{t("story.group_third", "Third")}</Button>
      </Group>;
  },
  args: {
    gap: 16
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button variant="solid">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
      </Group>;
  },
  args: {
    grow: true,
    gap: 16
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end",
    children: <>
        <DemoCell intent="primary" p={0} w={40} h={40} />
        <DemoCell intent="success" p={0} w={40} h={80} />
        <DemoCell intent="danger" p={0} w={40} h={60} />
      </>,
    gap: 16
  }
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Grow`,`AlignEnd`]}));b();export{v as AlignEnd,g as Basic,_ as Grow,y as __namedExportsOrder,h as default,b as n,p as t};