"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{cr as n}from"./iframe-splidnB2.js";import{a as r,n as i,o as a,t as o}from"./SpeedDial-75iu1pCN.js";var s=e({ClickTrigger:()=>f,CustomIcons:()=>m,Default:()=>d,RightDirection:()=>p,__namedExportsOrder:()=>h,default:()=>l}),c,l,u,d,f,p,m,h,g=t((()=>{i(),a(),c=n(),l={title:`Components/Navigation Utilities/SpeedDial`,component:o,decorators:[e=>(0,c.jsx)(r,{align:`center`,justify:`center`,style:{minHeight:`300px`,width:`100%`},children:(0,c.jsx)(e,{})})]},u=[{icon:`CopyIcon`,label:`Copy`,onClick:()=>console.log(`Copy`)},{icon:`EditIcon`,label:`Edit`,onClick:()=>console.log(`Edit`)},{icon:`ShareIcon`,label:`Share`,onClick:()=>console.log(`Share`)},{icon:`TrashIcon`,label:`Delete`,onClick:()=>console.log(`Delete`)}],d={args:{actions:u,direction:`up`,trigger:`hover`}},f={args:{actions:u,direction:`up`,trigger:`click`}},p={args:{actions:u,direction:`right`,trigger:`hover`},decorators:[e=>(0,c.jsx)(r,{align:`center`,justify:`start`,style:{minHeight:`300px`,width:`100%`},children:(0,c.jsx)(e,{})})]},m={args:{actions:u,icon:`SettingsIcon`,activeIcon:`CheckIcon`,direction:`up`,trigger:`hover`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    actions,
    direction: "up",
    trigger: "hover"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    actions,
    direction: "up",
    trigger: "click"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    actions,
    direction: "right",
    trigger: "hover"
  },
  // T218: 右へ開くダイヤルは**先頭側に置くもの**。共通のデコレータ（中央寄せ）の
  // ままだと、390px でアクションが画面の外へ出てページが 134px 横スクロールする
  // （実測）。\`SpeedDial\` は配置を測らないので**フリップしない** ── 向きに見合う
  // 場所へ置くのは呼ぶ側の責任で、それを見せる形にする（\`direction\` の JSDoc）。
  decorators: [Story => <Flex align="center" justify="start" style={{
    minHeight: "300px",
    width: "100%"
  }}>
        <Story />
      </Flex>]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    actions,
    icon: "SettingsIcon",
    activeIcon: "CheckIcon",
    direction: "up",
    trigger: "hover"
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`ClickTrigger`,`RightDirection`,`CustomIcons`]}));g();export{f as ClickTrigger,m as CustomIcons,d as Default,p as RightDirection,h as __namedExportsOrder,l as default,g as n,s as t};