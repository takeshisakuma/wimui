import{L as t}from"./LineChart-Ib3X75la.js";const r={title:"Components/Visualization/LineChart",component:t},a=[{name:"Mon",users:1500,active:800},{name:"Tue",users:2300,active:1200},{name:"Wed",users:1800,active:1100},{name:"Thu",users:3200,active:1900},{name:"Fri",users:2900,active:2100},{name:"Sat",users:4100,active:2800},{name:"Sun",users:3800,active:2500}],e={args:{title:"Daily Users",data:a,xAxisKey:"name",keys:["users","active"]}},s={args:{title:"Daily Users (Smooth)",data:a,xAxisKey:"name",keys:["users","active"],smooth:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Daily Users",
    data,
    xAxisKey: "name",
    keys: ["users", "active"]
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Daily Users (Smooth)",
    data,
    xAxisKey: "name",
    keys: ["users", "active"],
    smooth: true
  }
}`,...s.parameters?.docs?.source}}};const o=["Default","Smooth"],i=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Smooth:s,__namedExportsOrder:o,default:r},Symbol.toStringTag,{value:"Module"}));export{i as L};
