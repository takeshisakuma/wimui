import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as o,a as d}from"./helpers-BWeM4P5g.js";import{a as p,P as f,h as g,e as h,T as y,L as v}from"./viz-BRLp5-ay.js";import"./utils-02Y0UBtw.js";const l=({data:r,height:c=300,width:m="100%",title:n,donut:s=!1})=>e.jsxs("div",{style:{width:m,height:"auto"},children:[n&&e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:n}),e.jsx("div",{style:{height:c},children:e.jsx(p,{width:"100%",height:"100%",children:e.jsxs(f,{children:[e.jsx(g,{data:r,cx:"50%",cy:"50%",labelLine:!1,innerRadius:s?"60%":0,outerRadius:"80%",paddingAngle:s?5:0,dataKey:"value",children:r.map((x,i)=>e.jsx(h,{fill:o[i%o.length],stroke:"none"},`cell-${i}`))}),e.jsx(y,{contentStyle:d.tooltip.contentStyle}),e.jsx(v,{verticalAlign:"bottom",height:36})]})})})]});l.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; value: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}],raw:"{ name: string; value: number }[]"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},donut:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"Component/Media & Viz/PieChart",component:l,tags:["autodocs"]},u=[{name:"Direct",value:400},{name:"Social",value:300},{name:"Referral",value:300},{name:"Organic",value:200}],a={args:{title:"Traffic Sources",data:u}},t={args:{title:"Traffic Sources (Donut)",data:u,donut:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Traffic Sources",
    data
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Traffic Sources (Donut)",
    data,
    donut: true
  }
}`,...t.parameters?.docs?.source}}};const R=["Default","Donut"];export{a as Default,t as Donut,R as __namedExportsOrder,b as default};
