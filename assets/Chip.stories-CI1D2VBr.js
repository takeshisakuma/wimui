import{j as a}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Chip-C3Ms6cv_.js";import{I as p}from"./Icon-1C9HyGOH.js";import{A as d}from"./Avatar-RZX_guQD.js";const m={title:"Component/Data Display/Chip",component:c,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},r={args:{label:"Chip Content"}},s={args:{label:"Clickable Chip",onClick:e=>console.log("Chip clicked",e)}},o={args:{label:"Deletable Chip",onDelete:e=>console.log("Chip deleted",e)}},l={args:{label:"Jane Doe",avatar:a.jsx(d,{initials:"JD",size:"sm"})}},t={args:{label:"Settings",icon:a.jsx(p,{name:"CircleIcon",size:"small"})}},n={args:{label:"Selected Chip",selected:!0,onClick:()=>{}}},i={render:e=>a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx(c,{...e,label:"Solid",variant:"solid",onClick:()=>{}}),a.jsx(c,{...e,label:"Outline",variant:"outline",onClick:()=>{}}),a.jsx(c,{...e,label:"Selected",variant:"outline",selected:!0,onClick:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Chip Content"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clickable Chip",
    onClick: (e: React.MouseEvent) => console.log("Chip clicked", e)
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Deletable Chip",
    onDelete: (e: React.MouseEvent) => console.log("Chip deleted", e)
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Jane Doe",
    avatar: <Avatar initials="JD" size="sm" />
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Settings",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Selected Chip",
    selected: true,
    onClick: () => {}
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
            <Chip {...args} label="Solid" variant="solid" onClick={() => {}} />\r
            <Chip {...args} label="Outline" variant="outline" onClick={() => {}} />\r
            <Chip {...args} label="Selected" variant="outline" selected onClick={() => {}} />\r
        </div>
}`,...i.parameters?.docs?.source}}};const u=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],S=Object.freeze(Object.defineProperty({__proto__:null,Clickable:s,Default:r,Deletable:o,Selected:n,Variants:i,WithAvatar:l,WithIcon:t,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{S as C,r as D,n as S,i as V,l as W,s as a,o as b};
