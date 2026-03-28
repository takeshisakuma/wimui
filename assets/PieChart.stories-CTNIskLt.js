import{P as t}from"./PieChart-BKWBOb_H.js";const o={title:"Components/Visualization/PieChart",component:t},r=[{name:"Direct",value:400},{name:"Social",value:300},{name:"Referral",value:300},{name:"Organic",value:200}],e={args:{title:"Traffic Sources",data:r}},a={args:{title:"Traffic Sources (Donut)",data:r,donut:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Traffic Sources",
    data
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Traffic Sources (Donut)",
    data,
    donut: true
  }
}`,...a.parameters?.docs?.source}}};const n=["Default","Donut"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Donut:a,__namedExportsOrder:n,default:o},Symbol.toStringTag,{value:"Module"}));export{c as P};
