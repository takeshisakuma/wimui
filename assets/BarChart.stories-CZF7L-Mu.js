import{B as t}from"./BarChart-CPWf6HHN.js";const r={title:"Components/Visualization/BarChart",component:t},s=[{name:"Jan",sales:4e3,profit:2400},{name:"Feb",sales:3e3,profit:1398},{name:"Mar",sales:2e3,profit:9800},{name:"Apr",sales:2780,profit:3908},{name:"May",sales:1890,profit:4800},{name:"Jun",sales:2390,profit:3800}],e={args:{title:"Monthly Sales",data:s,xAxisKey:"name",keys:["sales","profit"]}},a={args:{title:"Monthly Sales (Stacked)",data:s,xAxisKey:"name",keys:["sales","profit"],stacked:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Sales",
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"]
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Sales (Stacked)",
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"],
    stacked: true
  }
}`,...a.parameters?.docs?.source}}};const o=["Default","Stacked"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Stacked:a,__namedExportsOrder:o,default:r},Symbol.toStringTag,{value:"Module"}));export{l as B,a as S};
