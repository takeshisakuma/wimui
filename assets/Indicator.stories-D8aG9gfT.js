"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-B_89lpXW.js";import{n as u,t as d}from"./Indicator-DubjeLYE.js";import{n as f,t as p}from"./Avatar-C38mVE7B.js";var m=t({Colors:()=>v,Default:()=>_,Inline:()=>b,Pulse:()=>y,Sizes:()=>x,WithIcons:()=>S,__namedExportsOrder:()=>C,default:()=>g}),h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),n(),a(),f(),c(),u(),h=s(),g={title:`Components/Data Indicators/Indicator`,component:d,argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`]}}},_={args:{children:(0,h.jsx)(p,{initials:`JD`}),color:`primary`,position:`bottom-right`}},v={render:e=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`20px`},children:[(0,h.jsx)(d,{...e,color:`primary`,children:(0,h.jsx)(p,{initials:`P`})}),(0,h.jsx)(d,{...e,color:`success`,children:(0,h.jsx)(p,{initials:`S`})}),(0,h.jsx)(d,{...e,color:`warning`,children:(0,h.jsx)(p,{initials:`W`})}),(0,h.jsx)(d,{...e,color:`danger`,children:(0,h.jsx)(p,{initials:`E`})}),(0,h.jsx)(d,{...e,color:`neutral`,children:(0,h.jsx)(p,{initials:`N`})})]})},y={args:{children:(0,h.jsx)(p,{initials:`AL`}),color:`success`,pulse:!0,position:`bottom-right`}},b={render:function(e){let{t}=r(o);return(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,h.jsx)(d,{...e,color:`success`,inline:!0}),(0,h.jsx)(`span`,{children:t(`story.indicator_online`)})]})}},x={render:e=>(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`},children:[(0,h.jsx)(d,{...e,size:`sm`,inline:!0}),(0,h.jsx)(d,{...e,size:`md`,inline:!0}),(0,h.jsx)(d,{...e,size:`lg`,inline:!0})]})},S={render:e=>(0,h.jsx)(`div`,{style:{display:`flex`,gap:`20px`},children:(0,h.jsx)(d,{...e,color:`danger`,children:(0,h.jsx)(`div`,{style:{padding:`8px`,background:`var(--wim-color-surface-variant)`,borderRadius:`8px`},children:(0,h.jsx)(l,{name:`BellIcon`})})})})},C=[`Default`,`Colors`,`Pulse`,`Inline`,`Sizes`,`WithIcons`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "primary",
    position: "bottom-right"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>
      <Indicator {...args} size="sm" inline />
      <Indicator {...args} size="md" inline />
      <Indicator {...args} size="lg" inline />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{y as a,b as i,_ as n,x as o,m as r,w as s,v as t};