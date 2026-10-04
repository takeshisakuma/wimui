"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Avatar-C38mVE7B.js";import{n as a,t as o}from"./AvatarGroup-CWbcEplL.js";import{n as s,t as c}from"./avatar_1-CKjoO8cS.js";import{n as l,t as u}from"./avatar_2-CYWjuDWh.js";var d;function f(){return(f=e((()=>{d=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%20width='120'%20height='120'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23A8C99A'/%3e%3cstop%20offset='100%25'%20stop-color='%23CFE3C6'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='120'%20height='120'%20fill='url(%23bg)'/%3e%3ccircle%20cx='60'%20cy='46'%20r='21'%20fill='%233F6B32'%20fill-opacity='0.92'/%3e%3cpath%20d='M60%2072c-19%200-34%2012-38%2029a60%2060%200%200%200%2076%200c-4-17-19-29-38-29z'%20fill='%233F6B32'%20fill-opacity='0.92'/%3e%3c/svg%3e`})))()}var p;function m(){return(m=e((()=>{p=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%20width='120'%20height='120'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23C7B3DE'/%3e%3cstop%20offset='100%25'%20stop-color='%23E0D5EF'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='120'%20height='120'%20fill='url(%23bg)'/%3e%3ccircle%20cx='60'%20cy='46'%20r='21'%20fill='%235B4380'%20fill-opacity='0.92'/%3e%3cpath%20d='M60%2072c-19%200-34%2012-38%2029a60%2060%200%200%200%2076%200c-4-17-19-29-38-29z'%20fill='%235B4380'%20fill-opacity='0.92'/%3e%3c/svg%3e`})))()}var h=t({Default:()=>y,MaxDisplayed:()=>b,Sizes:()=>x,TotalCount:()=>S,__namedExportsOrder:()=>C,default:()=>_}),g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),a(),s(),l(),f(),m(),g=n(),_={title:`Components/Data Indicators/AvatarGroup`,component:o,parameters:{layout:`centered`}},v=[{src:c,initials:`JD`},{src:u,initials:`SA`},{src:d,initials:`ML`},{src:p,initials:`BW`}],y={render:e=>(0,g.jsx)(o,{...e,children:v.map((e,t)=>(0,g.jsx)(i,{src:e.src,initials:e.initials},t))})},b={args:{max:3},render:e=>(0,g.jsx)(o,{...e,children:v.map((e,t)=>(0,g.jsx)(i,{src:e.src,initials:e.initials},t))})},x={render:e=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,g.jsx)(o,{...e,size:`sm`,children:v.map((e,t)=>(0,g.jsx)(i,{initials:e.initials,intent:`primary`},t))}),(0,g.jsx)(o,{...e,size:`md`,children:v.map((e,t)=>(0,g.jsx)(i,{initials:e.initials,intent:`neutral`},t))}),(0,g.jsx)(o,{...e,size:`lg`,children:v.map((e,t)=>(0,g.jsx)(i,{initials:e.initials,intent:`neutral`},t))})]})},S={args:{max:2,total:10},render:e=>(0,g.jsx)(o,{...e,children:v.slice(0,2).map((e,t)=>(0,g.jsx)(i,{src:e.src,initials:e.initials},t))})},C=[`Default`,`MaxDisplayed`,`Sizes`,`TotalCount`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <AvatarGroup {...args} size="sm">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} intent="primary" />)}
      </AvatarGroup>
      <AvatarGroup {...args} size="md">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} intent="neutral" />)}
      </AvatarGroup>
      <AvatarGroup {...args} size="lg">
        {users.map((u, i) => <Avatar key={i} initials={u.initials} intent="neutral" />)}
      </AvatarGroup>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>
      {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...S.parameters?.docs?.source}}}})))()}export{w as a,S as i,b as n,x as r,h as t};