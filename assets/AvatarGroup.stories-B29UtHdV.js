import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-DQO96vlz.js";import{c as f}from"./index-CgtPBStF.js";import{A as i}from"./Avatar-J1yz0p1s.js";const t=({children:e,max:r,size:s,total:h,className:y})=>{const u=d.Children.toArray(e),A=h||u.length,v=r?u.slice(0,r):u,g=A-v.length;return a.jsxs("div",{className:f("wim-avatar-group",y),children:[v.map((m,j)=>{if(d.isValidElement(m)&&m.type===i){const x=m;return d.cloneElement(x,{size:s||x.props.size,key:j})}return m}),g>0&&a.jsxs("span",{className:f("wim-avatar-group__excess",`wim-avatar-group__excess--${s||"md"}`),children:["+",g]})]})};t.__docgenInfo={description:"複数のアバターを束ねて表示するためのコンポーネント。",methods:[],displayName:"AvatarGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},max:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},total:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Component/Data Display/AvatarGroup",component:t,parameters:{layout:"centered"}},n=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],o={render:e=>a.jsx(t,{...e,children:n.map((r,s)=>a.jsx(i,{src:r.src,initials:r.initials},s))})},l={args:{max:3},render:e=>a.jsx(t,{...e,children:n.map((r,s)=>a.jsx(i,{src:r.src,initials:r.initials},s))})},c={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(t,{...e,size:"sm",children:n.map((r,s)=>a.jsx(i,{initials:r.initials,color:"primary"},s))}),a.jsx(t,{...e,size:"md",children:n.map((r,s)=>a.jsx(i,{initials:r.initials,color:"secondary"},s))}),a.jsx(t,{...e,size:"lg",children:n.map((r,s)=>a.jsx(i,{initials:r.initials,color:"neutral"},s))})]})},p={args:{max:2,total:10},render:e=>a.jsx(t,{...e,children:n.slice(0,2).map((r,s)=>a.jsx(i,{src:r.src,initials:r.initials},s))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>\r
            {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...p.parameters?.docs?.source}}};const S=["Default","MaxDisplayed","Sizes","TotalCount"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MaxDisplayed:l,Sizes:c,TotalCount:p,__namedExportsOrder:S,default:G},Symbol.toStringTag,{value:"Module"}));export{D as A,l as M,c as S,p as T};
