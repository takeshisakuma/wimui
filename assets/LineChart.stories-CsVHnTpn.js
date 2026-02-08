import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as s,C as n}from"./helpers-BWeM4P5g.js";import{a as y,f,C as g,X as v,Y as T,T as j,L as A,g as C}from"./viz-BRLp5-ay.js";import"./utils-02Y0UBtw.js";const o=({data:l,keys:d,xAxisKey:c,height:u=300,width:p="100%",title:r,smooth:h=!1})=>e.jsxs("div",{style:{width:p,height:"auto"},children:[r&&e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:r}),e.jsx("div",{style:{height:u},children:e.jsx(y,{width:"100%",height:"100%",children:e.jsxs(f,{data:l,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx(g,{...s.grid,vertical:!1}),e.jsx(v,{dataKey:c,...s.axis,tickLine:!1,axisLine:!1}),e.jsx(T,{...s.axis,tickLine:!1,axisLine:!1}),e.jsx(j,{contentStyle:s.tooltip.contentStyle}),e.jsx(A,{verticalAlign:"top",height:36}),d.map((i,x)=>e.jsx(C,{type:h?"monotone":"linear",dataKey:i,stroke:n[x%n.length],strokeWidth:2,dot:{r:4,strokeWidth:2,fill:"#fff"},activeDot:{r:6}},i))]})})})]});o.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},keys:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},xAxisKey:{required:!0,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D={title:"Component/Media & Viz/LineChart",component:o,tags:["autodocs"]},m=[{name:"Mon",users:1500,active:800},{name:"Tue",users:2300,active:1200},{name:"Wed",users:1800,active:1100},{name:"Thu",users:3200,active:1900},{name:"Fri",users:2900,active:2100},{name:"Sat",users:4100,active:2800},{name:"Sun",users:3800,active:2500}],t={args:{title:"Daily Users",data:m,xAxisKey:"name",keys:["users","active"]}},a={args:{title:"Daily Users (Smooth)",data:m,xAxisKey:"name",keys:["users","active"],smooth:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Daily Users",
    data,
    xAxisKey: "name",
    keys: ["users", "active"]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Daily Users (Smooth)",
    data,
    xAxisKey: "name",
    keys: ["users", "active"],
    smooth: true
  }
}`,...a.parameters?.docs?.source}}};const K=["Default","Smooth"];export{t as Default,a as Smooth,K as __namedExportsOrder,D as default};
