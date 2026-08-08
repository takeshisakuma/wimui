"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c,ui as l}from"./src-BE5jBQ9L.js";import{n as u,r as d,t as f}from"./DemoCell-BGw1L_9W.js";var p=e({FixedColumns:()=>g,ResponsiveAuto:()=>_,ResponsiveBreakpoints:()=>v,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{n(),o(),i(),c(),d(),m=a(),h={title:`Components/Layout/SimpleGrid`,component:l,tags:[],argTypes:{cols:{control:`object`},spacing:{control:`text`},minChildWidth:{control:`text`}}},g={render:function(e){let{t}=r(s);return(0,m.jsx)(l,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:3,spacing:`md`}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(l,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_min_width`)},n))})},args:{minChildWidth:200,spacing:16}},v={render:function(e){let{t}=r(s);return(0,m.jsx)(l,{...e,children:Array.from({length:8},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`FixedColumns`,`ResponsiveAuto`,`ResponsiveBreakpoints`]}));b();export{g as FixedColumns,_ as ResponsiveAuto,v as ResponsiveBreakpoints,y as __namedExportsOrder,h as default,b as n,p as t};