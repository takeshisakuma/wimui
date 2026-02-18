import{j as a}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Chip-BPO6FL8n.js";import{I as p}from"./Icon-CoEWLwf6.js";import{A as d}from"./Avatar-DVjZo1F-.js";const m={title:"Component/Selection Controls/Chip",component:c,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},r={args:{label:"Chip Content"}},o={args:{label:"Clickable Chip",onClick:e=>console.log("Chip clicked",e)}},s={args:{label:"Deletable Chip",onDelete:e=>console.log("Chip deleted",e)}},l={args:{label:"Jane Doe",avatar:a.jsx(d,{initials:"JD",size:"sm"})}},t={args:{label:"Settings",icon:a.jsx(p,{name:"CircleIcon",size:"small"})}},n={args:{label:"Selected Chip",selected:!0,onClick:()=>{}}},i={render:e=>a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx(c,{...e,label:"Solid",variant:"solid",onClick:()=>{}}),a.jsx(c,{...e,label:"Outline",variant:"outline",onClick:()=>{}}),a.jsx(c,{...e,label:"Selected",variant:"outline",selected:!0,onClick:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Chip Content"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clickable Chip",
    onClick: (e: React.MouseEvent) => console.log("Chip clicked", e)
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Deletable Chip",
    onDelete: (e: React.MouseEvent) => console.log("Chip deleted", e)
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const C=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],S=Object.freeze(Object.defineProperty({__proto__:null,Clickable:o,Default:r,Deletable:s,Selected:n,Variants:i,WithAvatar:l,WithIcon:t,__namedExportsOrder:C,default:m},Symbol.toStringTag,{value:"Module"}));export{S as C,r as D,n as S,i as V,l as W,o as a,s as b};
