"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-wf1-Tomv.js";import{_i as c,t as l}from"./src--JUR9phw.js";import{n as u,r as d,t as f}from"./DemoCell-DRdxHCcZ.js";var p=e({FixedColumns:()=>g,ResponsiveAuto:()=>_,ResponsiveBreakpoints:()=>v,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{n(),r(),i(),l(),d(),m=o(),h={title:`Components/Layout/SimpleGrid`,component:c,tags:[],argTypes:{cols:{control:`object`},spacing:{control:`text`},minChildWidth:{control:`text`}}},g={render:function(e){let{t}=a(s);return(0,m.jsx)(c,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:3,spacing:`md`}},_={render:function(e){let{t}=a(s);return(0,m.jsx)(c,{...e,children:Array.from({length:5},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_min_width`)},n))})},args:{minChildWidth:200,spacing:16}},v={render:function(e){let{t}=a(s);return(0,m.jsx)(c,{...e,children:Array.from({length:8},(e,n)=>(0,m.jsx)(f,{intent:u(n),children:t(`story.grid_item`,String(n+1))},n))})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}},y=[`FixedColumns`,`ResponsiveAuto`,`ResponsiveBreakpoints`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}}));b();export{g as FixedColumns,_ as ResponsiveAuto,v as ResponsiveBreakpoints,y as __namedExportsOrder,h as default,b as n,p as t};