"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-splidnB2.js";import{t as i,zn as a}from"./src-CV0le6yM.js";var o=e({Colors:()=>d,Default:()=>l,Sizes:()=>f,Variants:()=>u,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p,m=t((()=>{n(),i(),s=r(),c={title:`Components/Loading States/Loader`,component:a,tags:[],argTypes:{variant:{control:`select`,options:[`bars`,`dots`,`pulse`]},color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},l={args:{variant:`bars`,color:`primary`,size:`md`},render:e=>(0,s.jsx)(a,{...e})},u={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`48px`,alignItems:`center`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,s.jsx)(a,{...e,variant:`bars`}),(0,s.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:`bars`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,s.jsx)(a,{...e,variant:`dots`}),(0,s.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:`dots`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,s.jsx)(a,{...e,variant:`pulse`}),(0,s.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:`pulse`})]})]})},d={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,s.jsx)(a,{...e,color:`primary`}),(0,s.jsx)(a,{...e,color:`secondary`}),(0,s.jsx)(a,{...e,color:`success`}),(0,s.jsx)(a,{...e,color:`warning`}),(0,s.jsx)(a,{...e,color:`danger`}),(0,s.jsx)(a,{...e,color:`neutral`})]})},f={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,s.jsx)(a,{...e,variant:`bars`,size:`sm`}),(0,s.jsx)(a,{...e,variant:`bars`,size:`md`}),(0,s.jsx)(a,{...e,variant:`bars`,size:`lg`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,s.jsx)(a,{...e,variant:`dots`,size:`sm`}),(0,s.jsx)(a,{...e,variant:`dots`,size:`md`}),(0,s.jsx)(a,{...e,variant:`dots`,size:`lg`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`,height:`48px`},children:[(0,s.jsx)(a,{...e,variant:`pulse`,size:`sm`}),(0,s.jsx)(a,{...e,variant:`pulse`,size:`md`}),(0,s.jsx)(a,{...e,variant:`pulse`,size:`lg`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bars",
    color: "primary",
    size: "md"
  },
  render: args => <Loader {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "48px",
    alignItems: "center"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="bars" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>bars</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="dots" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>dots</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="pulse" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>pulse</span>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Loader {...args} color="primary" />
      <Loader {...args} color="secondary" />
      <Loader {...args} color="success" />
      <Loader {...args} color="warning" />
      <Loader {...args} color="danger" />
      <Loader {...args} color="neutral" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="bars" size="sm" />
        <Loader {...args} variant="bars" size="md" />
        <Loader {...args} variant="bars" size="lg" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="dots" size="sm" />
        <Loader {...args} variant="dots" size="md" />
        <Loader {...args} variant="dots" size="lg" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>
        <Loader {...args} variant="pulse" size="sm" />
        <Loader {...args} variant="pulse" size="md" />
        <Loader {...args} variant="pulse" size="lg" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Variants`,`Colors`,`Sizes`]}));m();export{d as Colors,l as Default,f as Sizes,u as Variants,p as __namedExportsOrder,c as default,m as n,o as t};