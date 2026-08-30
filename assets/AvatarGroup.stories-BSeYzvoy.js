"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{cr as n}from"./iframe-splidnB2.js";import{It as r,Pt as i,t as a}from"./src-CV0le6yM.js";import{n as o,t as s}from"./avatar_1-DjxHreQB.js";import{n as c,t as l}from"./avatar_2-HSXvAPTt.js";var u,d=t((()=>{u=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%20width='120'%20height='120'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23A8C99A'/%3e%3cstop%20offset='100%25'%20stop-color='%23CFE3C6'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='120'%20height='120'%20fill='url(%23bg)'/%3e%3ccircle%20cx='60'%20cy='46'%20r='21'%20fill='%233F6B32'%20fill-opacity='0.92'/%3e%3cpath%20d='M60%2072c-19%200-34%2012-38%2029a60%2060%200%200%200%2076%200c-4-17-19-29-38-29z'%20fill='%233F6B32'%20fill-opacity='0.92'/%3e%3c/svg%3e`})),f,p=t((()=>{f=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%20width='120'%20height='120'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23C7B3DE'/%3e%3cstop%20offset='100%25'%20stop-color='%23E0D5EF'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='120'%20height='120'%20fill='url(%23bg)'/%3e%3ccircle%20cx='60'%20cy='46'%20r='21'%20fill='%235B4380'%20fill-opacity='0.92'/%3e%3cpath%20d='M60%2072c-19%200-34%2012-38%2029a60%2060%200%200%200%2076%200c-4-17-19-29-38-29z'%20fill='%235B4380'%20fill-opacity='0.92'/%3e%3c/svg%3e`})),m=e({Default:()=>v,MaxDisplayed:()=>y,Sizes:()=>b,TotalCount:()=>x,__namedExportsOrder:()=>S,default:()=>g}),h,g,_,v,y,b,x,S,C=t((()=>{a(),o(),c(),d(),p(),h=n(),g={title:`Components/Data Indicators/AvatarGroup`,component:i,parameters:{layout:`centered`}},_=[{src:s,initials:`JD`},{src:l,initials:`SA`},{src:u,initials:`ML`},{src:f,initials:`BW`}],v={render:e=>(0,h.jsx)(i,{...e,children:_.map((e,t)=>(0,h.jsx)(r,{src:e.src,initials:e.initials},t))})},y={args:{max:3},render:e=>(0,h.jsx)(i,{...e,children:_.map((e,t)=>(0,h.jsx)(r,{src:e.src,initials:e.initials},t))})},b={render:e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,h.jsx)(i,{...e,size:`sm`,children:_.map((e,t)=>(0,h.jsx)(r,{initials:e.initials,intent:`primary`},t))}),(0,h.jsx)(i,{...e,size:`md`,children:_.map((e,t)=>(0,h.jsx)(r,{initials:e.initials,intent:`neutral`},t))}),(0,h.jsx)(i,{...e,size:`lg`,children:_.map((e,t)=>(0,h.jsx)(r,{initials:e.initials,intent:`neutral`},t))})]})},x={args:{max:2,total:10},render:e=>(0,h.jsx)(i,{...e,children:_.slice(0,2).map((e,t)=>(0,h.jsx)(r,{src:e.src,initials:e.initials},t))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>
      {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>
      {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}
    </AvatarGroup>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`MaxDisplayed`,`Sizes`,`TotalCount`]}));C();export{v as Default,y as MaxDisplayed,b as Sizes,x as TotalCount,S as __namedExportsOrder,g as default,C as n,m as t};