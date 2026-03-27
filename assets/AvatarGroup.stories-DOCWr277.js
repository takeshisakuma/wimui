import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./AvatarGroup-DCqfZlxe.js";import{A as e}from"./Avatar-Bzx2fLY0.js";const u={title:"Components/Data Indicators/AvatarGroup",component:t,parameters:{layout:"centered"}},n=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],o={render:i=>s.jsx(t,{...i,children:n.map((a,r)=>s.jsx(e,{src:a.src,initials:a.initials},r))})},p={args:{max:3},render:i=>s.jsx(t,{...i,children:n.map((a,r)=>s.jsx(e,{src:a.src,initials:a.initials},r))})},c={render:i=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s.jsx(t,{...i,size:"small",children:n.map((a,r)=>s.jsx(e,{initials:a.initials,status:"primary"},r))}),s.jsx(t,{...i,size:"medium",children:n.map((a,r)=>s.jsx(e,{initials:a.initials,status:"secondary"},r))}),s.jsx(t,{...i,size:"large",children:n.map((a,r)=>s.jsx(e,{initials:a.initials,status:"neutral"},r))})]})},l={args:{max:2,total:10},render:i=>s.jsx(t,{...i,children:n.slice(0,2).map((a,r)=>s.jsx(e,{src:a.src,initials:a.initials},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <AvatarGroup {...args} size="small">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="primary" />)}
      </AvatarGroup>
      <AvatarGroup {...args} size="medium">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="secondary" />)}
      </AvatarGroup>
      <AvatarGroup {...args} size="large">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="neutral" />)}
      </AvatarGroup>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>
      {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...l.parameters?.docs?.source}}};const m=["Default","MaxDisplayed","Sizes","TotalCount"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MaxDisplayed:p,Sizes:c,TotalCount:l,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{v as A,p as M,c as S,l as T};
