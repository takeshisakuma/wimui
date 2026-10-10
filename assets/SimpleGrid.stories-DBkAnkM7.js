"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./SimpleGrid-Du8DkF1O.js";import{n as u,r as d,t as f}from"./DemoCell-9PKAo_JV.js";var p=t({FixedColumns:()=>g,ResponsiveAuto:()=>_,ResponsiveBreakpoints:()=>v,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),d(),m=s(),h={title:`Components/Layout/SimpleGrid`,component:l,tags:[],argTypes:{cols:{control:`object`},spacing:{control:`text`},minChildWidth:{control:`text`}}},g={render:function(e){let{t}=r(o);return(0,m.jsx)(l,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:3,spacing:`md`}},_={render:function(e){let{t}=r(o);return(0,m.jsx)(l,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_min_width`)},n))})},args:{minChildWidth:200,spacing:16}},v={render:function(e){let{t}=r(o);return(0,m.jsx)(l,{...e,children:Array.from({length:8},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}},y=[`FixedColumns`,`ResponsiveAuto`,`ResponsiveBreakpoints`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SimpleGrid {...args}>
        {Array.from({
        length: 5
      }, (_, i) => <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_item", String(i + 1))}
          </DemoCell>)}
      </SimpleGrid>;
  },
  args: {
    cols: 3,
    spacing: "md"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SimpleGrid {...args}>
        {Array.from({
        length: 5
      }, (_, i) => <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_min_width")}
          </DemoCell>)}
      </SimpleGrid>;
  },
  args: {
    minChildWidth: 200,
    spacing: 16
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SimpleGrid {...args}>
        {Array.from({
        length: 8
      }, (_, i) => <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_item", String(i + 1))}
          </DemoCell>)}
      </SimpleGrid>;
  },
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    spacing: 16
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as a,p as i,_ as n,v as r,g as t};