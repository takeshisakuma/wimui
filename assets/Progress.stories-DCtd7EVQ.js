import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./index-BFGcS2dx.js";const a=({value:r=0,max:c=100,color:p="primary",size:g="md",label:u,showValue:m=!1,indeterminate:i=!1,className:v="",...f})=>{const d=Math.min(Math.max(r/c*100,0),100),y=`wim-progress--${p}`,b=`wim-progress--${g}`,x=i?"wim-progress--indeterminate":"";return e.jsxs("div",{className:["wim-progress",b,y,x,v].filter(Boolean).join(" "),role:"progressbar","aria-valuenow":i?void 0:r,"aria-valuemin":0,"aria-valuemax":c,...f,children:[(u||m)&&e.jsxs("div",{className:"wim-progress__info",children:[u&&e.jsx("span",{className:"wim-progress__label",children:u}),m&&!i&&e.jsxs("span",{className:"wim-progress__value",children:[Math.round(d),"%"]})]}),e.jsx("div",{className:"wim-progress__track",children:e.jsx("div",{className:"wim-progress__bar",style:{width:i?"100%":`${d}%`}})})]})};a.propTypes={value:s.number,max:s.number,color:s.oneOf(["primary","secondary","success","warning","error","neutral"]),size:s.oneOf(["sm","md","lg"]),label:s.string,showValue:s.bool,indeterminate:s.bool,className:s.string};a.__docgenInfo={description:"プログレスバーを表示するためのコンポーネント。",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"現在の進捗値。",defaultValue:{value:"0",computed:!1},type:{name:"number"}},max:{required:!1,tsType:{name:"number"},description:"最大値。",defaultValue:{value:"100",computed:!1},type:{name:"number"}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"プログレスバーの色。",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"neutral"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"プログレスバーのサイズ。",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"表示するラベル。",type:{name:"string"}},showValue:{required:!1,tsType:{name:"boolean"},description:"進捗率（%）を表示するかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"不確定状態（アニメーション）にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const w={title:"Component/Feedback/Progress",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},size:{control:"select",options:["sm","md","lg"]}}},l={args:{value:50,label:"Processing...",showValue:!0},render:r=>e.jsx(a,{...r})},o={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,color:"primary",value:20,label:"Primary"}),e.jsx(a,{...r,color:"secondary",value:40,label:"Secondary"}),e.jsx(a,{...r,color:"success",value:60,label:"Success"}),e.jsx(a,{...r,color:"warning",value:80,label:"Warning"}),e.jsx(a,{...r,color:"error",value:90,label:"Error"}),e.jsx(a,{...r,color:"neutral",value:50,label:"Neutral"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,size:"sm",value:50,label:"Small"}),e.jsx(a,{...r,size:"md",value:50,label:"Medium"}),e.jsx(a,{...r,size:"lg",value:50,label:"Large"})]})},t={args:{indeterminate:!0,label:"Uploading..."},render:r=>e.jsx(a,{...r})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: "Processing...",
    showValue: true
  },
  render: args => <Progress {...args} />
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>\r
            <Progress {...args} color="primary" value={20} label="Primary" />\r
            <Progress {...args} color="secondary" value={40} label="Secondary" />\r
            <Progress {...args} color="success" value={60} label="Success" />\r
            <Progress {...args} color="warning" value={80} label="Warning" />\r
            <Progress {...args} color="error" value={90} label="Error" />\r
            <Progress {...args} color="neutral" value={50} label="Neutral" />\r
        </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>\r
            <Progress {...args} size="sm" value={50} label="Small" />\r
            <Progress {...args} size="md" value={50} label="Medium" />\r
            <Progress {...args} size="lg" value={50} label="Large" />\r
        </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Uploading..."
  },
  render: args => <Progress {...args} />
}`,...t.parameters?.docs?.source}}};const j=["Default","Colors","Sizes","Indeterminate"],_=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:l,Indeterminate:t,Sizes:n,__namedExportsOrder:j,default:w},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,t as I,_ as P,n as S};
