import{j as a}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./AvatarGroup-BCCDEIoP.js";import{A as e}from"./Avatar-ejQtbBn4.js";const u={title:"Component/Data Display/AvatarGroup",component:t,parameters:{layout:"centered"}},o=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],n={render:i=>a.jsx(t,{...i,children:o.map((r,s)=>a.jsx(e,{src:r.src,initials:r.initials},s))})},c={args:{max:3},render:i=>a.jsx(t,{...i,children:o.map((r,s)=>a.jsx(e,{src:r.src,initials:r.initials},s))})},l={render:i=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(t,{...i,size:"sm",children:o.map((r,s)=>a.jsx(e,{initials:r.initials,color:"primary"},s))}),a.jsx(t,{...i,size:"md",children:o.map((r,s)=>a.jsx(e,{initials:r.initials,color:"secondary"},s))}),a.jsx(t,{...i,size:"lg",children:o.map((r,s)=>a.jsx(e,{initials:r.initials,color:"neutral"},s))})]})},p={args:{max:2,total:10},render:i=>a.jsx(t,{...i,children:o.slice(0,2).map((r,s)=>a.jsx(e,{src:r.src,initials:r.initials},s))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
            <AvatarGroup {...args} size="sm">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="primary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup {...args} size="md">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="secondary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup {...args} size="lg">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="neutral" />)}\r
            </AvatarGroup>\r
        </div>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>\r
            {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...p.parameters?.docs?.source}}};const m=["Default","MaxDisplayed","Sizes","TotalCount"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MaxDisplayed:c,Sizes:l,TotalCount:p,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{v as A,c as M,l as S,p as T};
