import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as i}from"./Chip-BB3VqbsX.js";import{I as p}from"./Icon-Ct3azGo-.js";import{A as d}from"./Avatar-U0EP_PwC.js";const m={title:"Component/Data Display/Chip",component:i,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},a={args:{label:"Chip Content"}},r={args:{label:"Clickable Chip",onClick:c=>console.log("Chip clicked",c)}},o={args:{label:"Deletable Chip",onDelete:c=>console.log("Chip deleted",c)}},s={args:{label:"Jane Doe",avatar:e.jsx(d,{initials:"JD",size:"sm"})}},l={args:{label:"Settings",icon:e.jsx(p,{name:"CircleIcon",size:"small"})}},t={args:{label:"Selected Chip",selected:!0,onClick:()=>{}}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(i,{label:"Solid",variant:"solid",onClick:()=>{}}),e.jsx(i,{label:"Outline",variant:"outline",onClick:()=>{}}),e.jsx(i,{label:"Selected",variant:"outline",selected:!0,onClick:()=>{}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Chip Content"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clickable Chip",
    onClick: (e: React.MouseEvent) => console.log("Chip clicked", e)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Deletable Chip",
    onDelete: (e: React.MouseEvent) => console.log("Chip deleted", e)
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Jane Doe",
    avatar: <Avatar initials="JD" size="sm" />
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Settings",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Selected Chip",
    selected: true,
    onClick: () => {}
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
            <Chip label="Solid" variant="solid" onClick={() => {}} />\r
            <Chip label="Outline" variant="outline" onClick={() => {}} />\r
            <Chip label="Selected" variant="outline" selected onClick={() => {}} />\r
        </div>
}`,...n.parameters?.docs?.source}}};const u=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],S=Object.freeze(Object.defineProperty({__proto__:null,Clickable:r,Default:a,Deletable:o,Selected:t,Variants:n,WithAvatar:s,WithIcon:l,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{S as C,a as D,t as S,n as V,s as W,r as a,o as b};
