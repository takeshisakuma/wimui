"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{It as c,Vn as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Icon-DKSRBrcV.js";var f=e({Colors:()=>g,Default:()=>h,Inline:()=>v,Pulse:()=>_,Sizes:()=>y,WithIcons:()=>b,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x,S=t((()=>{o(),n(),i(),u(),p=a(),m={title:`Components/Data Indicators/Indicator`,component:l,argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`]}}},h={args:{children:(0,p.jsx)(c,{initials:`JD`}),color:`primary`,position:`bottom-right`}},g={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`20px`},children:[(0,p.jsx)(l,{...e,color:`primary`,children:(0,p.jsx)(c,{initials:`P`})}),(0,p.jsx)(l,{...e,color:`success`,children:(0,p.jsx)(c,{initials:`S`})}),(0,p.jsx)(l,{...e,color:`warning`,children:(0,p.jsx)(c,{initials:`W`})}),(0,p.jsx)(l,{...e,color:`danger`,children:(0,p.jsx)(c,{initials:`E`})}),(0,p.jsx)(l,{...e,color:`neutral`,children:(0,p.jsx)(c,{initials:`N`})})]})},_={args:{children:(0,p.jsx)(c,{initials:`AL`}),color:`success`,pulse:!0,position:`bottom-right`}},v={render:function(e){let{t}=r(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(l,{...e,color:`success`,inline:!0}),(0,p.jsx)(`span`,{children:t(`story.indicator_online`)})]})}},y={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`},children:[(0,p.jsx)(l,{...e,size:`sm`,inline:!0}),(0,p.jsx)(l,{...e,size:`md`,inline:!0}),(0,p.jsx)(l,{...e,size:`lg`,inline:!0})]})},b={render:e=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:`20px`},children:(0,p.jsx)(l,{...e,color:`danger`,children:(0,p.jsx)(`div`,{style:{padding:`8px`,background:`var(--wim-color-surface-variant)`,borderRadius:`8px`},children:(0,p.jsx)(d,{name:`BellIcon`})})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "primary",
    position: "bottom-right"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <Indicator {...args} color="primary">
        <Avatar initials="P" />
      </Indicator>
      <Indicator {...args} color="success">
        <Avatar initials="S" />
      </Indicator>
      <Indicator {...args} color="warning">
        <Avatar initials="W" />
      </Indicator>
      <Indicator {...args} color="danger">
        <Avatar initials="E" />
      </Indicator>
      <Indicator {...args} color="neutral">
        <Avatar initials="N" />
      </Indicator>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <Indicator {...args} color="success" inline />
        <span>{t("story.indicator_online")}</span>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>
      <Indicator {...args} size="sm" inline />
      <Indicator {...args} size="md" inline />
      <Indicator {...args} size="lg" inline />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <Indicator {...args} color="danger">
        <div style={{
        padding: "8px",
        background: "var(--wim-color-surface-variant)",
        borderRadius: "8px"
      }}>
          <Icon name="BellIcon" />
        </div>
      </Indicator>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Colors`,`Pulse`,`Inline`,`Sizes`,`WithIcons`]}));S();export{g as Colors,h as Default,v as Inline,_ as Pulse,y as Sizes,b as WithIcons,x as __namedExportsOrder,m as default,S as n,f as t};