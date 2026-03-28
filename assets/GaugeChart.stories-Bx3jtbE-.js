import{j as e}from"./jsx-runtime-u17CrQMm.js";import{n as h,C as v}from"./helpers-C-rO3QYU.js";import{P as x,a as y}from"./PieChart-BF-6WNZX.js";import{C as l}from"./tooltipContext-CKVRfm9M.js";const u=({value:r,min:s=0,max:n=100,height:d=200,width:m="100%",title:o,label:c,color:p})=>{const i=Math.max(s,Math.min(n,r)),f=[{value:i-s},{value:n-i}],g=p||v[0];return e.jsxs("div",{style:{width:m,textAlign:"center"},children:[o&&e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:o}),e.jsxs("div",{style:{height:d,position:"relative"},children:[e.jsx(h,{width:"100%",height:"100%",children:e.jsx(x,{children:e.jsxs(y,{data:f,cx:"50%",cy:"80%",startAngle:180,endAngle:0,innerRadius:"60%",outerRadius:"80%",paddingAngle:0,dataKey:"value",stroke:"none",isAnimationActive:!0,children:[e.jsx(l,{fill:g}),e.jsx(l,{fill:"#f0f0f0"})]})})}),e.jsx("div",{style:{position:"absolute",bottom:"20%",left:"50%",transform:"translateX(-50%)",fontSize:"24px",fontWeight:"bold",color:"#333"},children:c||r})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"GaugeChart",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Components/Visualization/GaugeChart",component:u},t={args:{title:"System Load",value:75,label:"75%"}},a={args:{title:"Critical Level",value:92,label:"DANGER",color:"#ff4d4f"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "System Load",
    value: 75,
    label: "75%"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Critical Level",
    value: 92,
    label: "DANGER",
    color: "#ff4d4f"
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","CustomColor"],_=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:a,Default:t,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as G};
