"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ni as c,t as l}from"./src-CV0le6yM.js";import{n as u,r as d,t as f}from"./DemoCell-DdsJN3Va.js";var p=e({Basic:()=>g,CustomColumns:()=>_,Responsive:()=>v,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{n(),o(),i(),l(),d(),m=a(),h={title:`Components/Layout/Grid`,component:c,tags:[],argTypes:{cols:{control:`object`},rows:{control:`text`},gap:{control:`text`},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`stretch`]},flow:{control:`select`,options:[`row`,`column`,`dense`,`row dense`,`column dense`]}}},g={render:function(e){let{t}=r(s);return(0,m.jsxs)(c,{...e,children:[(0,m.jsx)(f,{intent:`primary`,children:t(`story.grid_item`,`1`)}),(0,m.jsx)(f,{intent:`success`,children:t(`story.grid_item`,`2`)}),(0,m.jsx)(f,{intent:`warning`,children:t(`story.grid_item`,`3`)}),(0,m.jsx)(f,{intent:`danger`,children:t(`story.grid_item`,`4`)}),(0,m.jsx)(f,{intent:`neutral`,children:t(`story.grid_item`,`5`)}),(0,m.jsx)(f,{intent:`info`,children:t(`story.grid_item`,`6`)})]})},args:{cols:3,gap:16}},_={render:function(e){return(0,m.jsxs)(c,{...e,children:[(0,m.jsx)(f,{intent:`primary`,children:`1fr`}),(0,m.jsx)(f,{intent:`success`,children:`2fr`}),(0,m.jsx)(f,{intent:`warning`,children:`1fr`})]})},args:{cols:`1fr 2fr 1fr`,gap:`1rem`}},v={render:function(e){let{t}=r(s),n=Array.from({length:8},(e,t)=>u(t));return(0,m.jsx)(c,{...e,children:n.map((e,n)=>(0,m.jsx)(f,{intent:e,children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:{base:1,sm:2,md:3,lg:4},gap:16}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Grid {...args}>
        <DemoCell intent="primary">{t("story.grid_item", "1")}</DemoCell>
        <DemoCell intent="success">{t("story.grid_item", "2")}</DemoCell>
        <DemoCell intent="warning">{t("story.grid_item", "3")}</DemoCell>
        <DemoCell intent="danger">{t("story.grid_item", "4")}</DemoCell>
        <DemoCell intent="neutral">{t("story.grid_item", "5")}</DemoCell>
        <DemoCell intent="info">{t("story.grid_item", "6")}</DemoCell>
      </Grid>;
  },
  args: {
    cols: 3,
    gap: 16
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Grid {...args}>
        <DemoCell intent="primary">1fr</DemoCell>
        <DemoCell intent="success">2fr</DemoCell>
        <DemoCell intent="warning">1fr</DemoCell>
      </Grid>;
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const intents: DemoCellIntent[] = Array.from({
      length: 8
    }, (_, i) => demoCellIntent(i));
    return <Grid {...args}>
        {intents.map((intent, i) => <DemoCell key={i} intent={intent}>{t("story.grid_item", String(i + 1))}</DemoCell>)}
      </Grid>;
  },
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    gap: 16
  }
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`CustomColumns`,`Responsive`]}));b();export{g as Basic,_ as CustomColumns,v as Responsive,y as __namedExportsOrder,h as default,b as n,p as t};