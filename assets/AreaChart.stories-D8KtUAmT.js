import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,a as t}from"./helpers-BWeM4P5g.js";import{a as h,A as v,C as k,X as A,Y as j,T,L as C,b as S}from"./viz-BRLp5-ay.js";import"./utils-02Y0UBtw.js";const c=({data:p,keys:i,xAxisKey:u,stacked:y=!1,height:f=300,width:x="100%",title:d,smooth:g=!0})=>e.jsxs("div",{style:{width:x,height:"auto"},children:[d&&e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:d}),e.jsx("div",{style:{height:f},children:e.jsx(h,{width:"100%",height:"100%",children:e.jsxs(v,{data:p,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx("defs",{children:i.map((a,o)=>{const l=s[o%s.length];return e.jsxs("linearGradient",{id:`grad-${a}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:l,stopOpacity:.3}),e.jsx("stop",{offset:"95%",stopColor:l,stopOpacity:0})]},`grad-${a}`)})}),e.jsx(k,{...t.grid,vertical:!1}),e.jsx(A,{dataKey:u,...t.axis,tickLine:!1,axisLine:!1}),e.jsx(j,{...t.axis,tickLine:!1,axisLine:!1}),e.jsx(T,{contentStyle:t.tooltip.contentStyle}),e.jsx(C,{verticalAlign:"top",height:36}),i.map((a,o)=>e.jsx(S,{type:g?"monotone":"linear",dataKey:a,stroke:s[o%s.length],fillOpacity:1,fill:`url(#grad-${a})`,stackId:y?"stack":void 0},a))]})})})]});c.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},keys:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},xAxisKey:{required:!0,tsType:{name:"string"},description:""},stacked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const O={title:"Component/Media & Viz/AreaChart",component:c,tags:["autodocs"]},m=[{name:"Week 1",value:100,secondary:50},{name:"Week 2",value:300,secondary:250},{name:"Week 3",value:200,secondary:150},{name:"Week 4",value:450,secondary:300},{name:"Week 5",value:400,secondary:350}],r={args:{title:"Performance Trends",data:m,xAxisKey:"name",keys:["value","secondary"]}},n={args:{title:"Stacked Performance",data:m,xAxisKey:"name",keys:["value","secondary"],stacked:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Performance Trends",
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Stacked Performance",
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"],
    stacked: true
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","Stacked"];export{r as Default,n as Stacked,_ as __namedExportsOrder,O as default};
