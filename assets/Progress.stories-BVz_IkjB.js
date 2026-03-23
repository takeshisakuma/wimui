import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-RI8tovNH.js";const s=({value:a=0,max:u=100,status:p="primary",size:m="medium",label:i,showValue:d=!1,indeterminate:o=!1,className:g,...v})=>{const c=Math.min(Math.max(a/u*100,0),100);return e.jsxs("div",{className:f("wim-progress",`wim-progress--${m==="small"?"sm":m==="large"?"lg":"md"}`,`wim-progress--${p}`,o&&"wim-progress--indeterminate",g),role:"progressbar","aria-valuenow":o?void 0:a,"aria-valuemin":0,"aria-valuemax":u,...v,children:[(i||d)&&e.jsxs("div",{className:"wim-progress__info",children:[i&&e.jsx("span",{className:"wim-progress__label",children:i}),d&&!o&&e.jsxs("span",{className:"wim-progress__value",children:[Math.round(c),"%"]})]}),e.jsx("div",{className:"wim-progress__track",children:e.jsx("div",{className:"wim-progress__bar",style:{width:o?"100%":`${c}%`}})})]})};s.__docgenInfo={description:"プログレスバーを表示するためのコンポーネント。",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const x={title:"Components/Loading States/Progress",component:s,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{value:50,label:"Processing...",showValue:!0},render:a=>e.jsx(s,{...a})},l={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(s,{...a,status:"primary",value:20,label:"Primary"}),e.jsx(s,{...a,status:"secondary",value:40,label:"Secondary"}),e.jsx(s,{...a,status:"success",value:60,label:"Success"}),e.jsx(s,{...a,status:"warning",value:80,label:"Warning"}),e.jsx(s,{...a,status:"error",value:90,label:"Error"}),e.jsx(s,{...a,status:"neutral",value:50,label:"Neutral"})]})},n={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(s,{...a,size:"small",value:50,label:"Small"}),e.jsx(s,{...a,size:"medium",value:50,label:"Medium"}),e.jsx(s,{...a,size:"large",value:50,label:"Large"})]})},t={args:{indeterminate:!0,label:"Uploading..."},render:a=>e.jsx(s,{...a})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: "Processing...",
    showValue: true
  },
  render: args => <Progress {...args} />
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>
      <Progress {...args} status="primary" value={20} label="Primary" />
      <Progress {...args} status="secondary" value={40} label="Secondary" />
      <Progress {...args} status="success" value={60} label="Success" />
      <Progress {...args} status="warning" value={80} label="Warning" />
      <Progress {...args} status="error" value={90} label="Error" />
      <Progress {...args} status="neutral" value={50} label="Neutral" />
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>
      <Progress {...args} size="small" value={50} label="Small" />
      <Progress {...args} size="medium" value={50} label="Medium" />
      <Progress {...args} size="large" value={50} label="Large" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Uploading..."
  },
  render: args => <Progress {...args} />
}`,...t.parameters?.docs?.source}}};const y=["Default","Colors","Sizes","Indeterminate"],j=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:r,Indeterminate:t,Sizes:n,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,r as D,t as I,j as P,n as S};
