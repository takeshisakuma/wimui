import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./AvatarGroup-DyogoQd6.js";import{A as e}from"./Avatar-Bs6h9-pu.js";const u={title:"Components/Data Indicators/AvatarGroup",component:t,parameters:{layout:"centered"}},n=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],o={render:i=>r.jsx(t,{...i,children:n.map((a,s)=>r.jsx(e,{src:a.src,initials:a.initials},s))})},p={args:{max:3},render:i=>r.jsx(t,{...i,children:n.map((a,s)=>r.jsx(e,{src:a.src,initials:a.initials},s))})},c={render:i=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(t,{...i,size:"small",children:n.map((a,s)=>r.jsx(e,{initials:a.initials,status:"primary"},s))}),r.jsx(t,{...i,size:"medium",children:n.map((a,s)=>r.jsx(e,{initials:a.initials,status:"secondary"},s))}),r.jsx(t,{...i,size:"large",children:n.map((a,s)=>r.jsx(e,{initials:a.initials,status:"neutral"},s))})]})},l={args:{max:2,total:10},render:i=>r.jsx(t,{...i,children:n.slice(0,2).map((a,s)=>r.jsx(e,{src:a.src,initials:a.initials},s))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
    </AvatarGroup>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>\r
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
    </AvatarGroup>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <AvatarGroup {...args} size="small">\r
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="primary" />)}\r
      </AvatarGroup>\r
      <AvatarGroup {...args} size="medium">\r
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="secondary" />)}\r
      </AvatarGroup>\r
      <AvatarGroup {...args} size="large">\r
        {users.map((u, i) => <Avatar key={i} initials={u.initials} status="neutral" />)}\r
      </AvatarGroup>\r
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>\r
      {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
    </AvatarGroup>
}`,...l.parameters?.docs?.source}}};const m=["Default","MaxDisplayed","Sizes","TotalCount"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MaxDisplayed:p,Sizes:c,TotalCount:l,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{v as A,p as M,c as S,l as T};
