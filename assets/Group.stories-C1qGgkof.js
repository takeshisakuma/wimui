"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Group-DVFOQHnC.js";import{n as u,t as d}from"./Button-DrO46Brn.js";import{r as f,t as p}from"./DemoCell-BNI7hFXS.js";var m=t({AlignEnd:()=>y,Basic:()=>_,Grow:()=>v,__namedExportsOrder:()=>b,default:()=>g}),h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),u(),c(),f(),h=s(),g={title:`Components/Layout/Group`,component:l,tags:[],argTypes:{align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`]},gap:{control:`text`},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},grow:{control:`boolean`}}},_={render:function(e){let{t}=r(o);return(0,h.jsxs)(l,{...e,children:[(0,h.jsx)(d,{variant:`solid`,children:t(`story.group_first`,`First`)}),(0,h.jsx)(d,{variant:`outline`,children:t(`story.group_second`,`Second`)}),(0,h.jsx)(d,{variant:`ghost`,children:t(`story.group_third`,`Third`)})]})},args:{gap:16}},v={render:function(e){let{t}=r(o);return(0,h.jsxs)(l,{...e,children:[(0,h.jsx)(d,{variant:`solid`,children:t(`story.group_first`,`First`)}),(0,h.jsx)(d,{variant:`outline`,children:t(`story.group_second`,`Second`)})]})},args:{grow:!0,gap:16}},y={args:{align:`end`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{intent:`primary`,p:0,w:40,h:40}),(0,h.jsx)(p,{intent:`success`,p:0,w:40,h:80}),(0,h.jsx)(p,{intent:`danger`,p:0,w:40,h:60})]}),gap:16}},b=[`Basic`,`Grow`,`AlignEnd`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end",
    children: <>
        <DemoCell intent="primary" p={0} w={40} h={40} />
        <DemoCell intent="success" p={0} w={40} h={80} />
        <DemoCell intent="danger" p={0} w={40} h={60} />
      </>,
    gap: 16
  }
}`,...y.parameters?.docs?.source}}}})))()}export{x as a,v as i,_ as n,m as r,y as t};