import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a,C as o}from"./helpers-BWeM4P5g.js";import{a as y,B as h,C as g,X as k,Y as S,T as j,L as A,c as C}from"./viz-BRLp5-ay.js";import"./utils-02Y0UBtw.js";const l=({data:m,keys:p,xAxisKey:c,stacked:r=!1,height:u=300,width:f="100%",title:n})=>e.jsxs("div",{style:{width:f,height:"auto"},children:[n&&e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:n}),e.jsx("div",{style:{height:u},children:e.jsx(y,{width:"100%",height:"100%",children:e.jsxs(h,{data:m,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx(g,{...a.grid,vertical:!1}),e.jsx(k,{dataKey:c,...a.axis,tickLine:!1,axisLine:!1}),e.jsx(S,{...a.axis,tickLine:!1,axisLine:!1}),e.jsx(j,{contentStyle:a.tooltip.contentStyle,cursor:{fill:"rgba(0,0,0,0.05)"}}),e.jsx(A,{verticalAlign:"top",height:36}),p.map((i,x)=>e.jsx(C,{dataKey:i,fill:o[x%o.length],stackId:r?"stack":void 0,radius:r?0:[4,4,0,0]},i))]})})})]});l.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},keys:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},xAxisKey:{required:!0,tsType:{name:"string"},description:""},stacked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Component/Media & Viz/BarChart",component:l,tags:["autodocs"]},d=[{name:"Jan",sales:4e3,profit:2400},{name:"Feb",sales:3e3,profit:1398},{name:"Mar",sales:2e3,profit:9800},{name:"Apr",sales:2780,profit:3908},{name:"May",sales:1890,profit:4800},{name:"Jun",sales:2390,profit:3800}],s={args:{title:"Monthly Sales",data:d,xAxisKey:"name",keys:["sales","profit"]}},t={args:{title:"Monthly Sales (Stacked)",data:d,xAxisKey:"name",keys:["sales","profit"],stacked:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Sales",
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"]
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Sales (Stacked)",
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"],
    stacked: true
  }
}`,...t.parameters?.docs?.source}}};const B=["Default","Stacked"];export{s as Default,t as Stacked,B as __namedExportsOrder,q as default};
