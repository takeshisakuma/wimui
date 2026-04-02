import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-BONF4KIw.js";const a=({value:r=0,max:u=100,intent:c="primary",size:p="md",label:o,showValue:d=!1,indeterminate:i=!1,className:g,...v})=>{const m=Math.min(Math.max(r/u*100,0),100);return e.jsxs("div",{className:f("wim-progress",`wim-progress--${p}`,`wim-progress--${c}`,i&&"wim-progress--indeterminate",g),role:"progressbar","aria-valuenow":i?void 0:r,"aria-valuemin":0,"aria-valuemax":u,...v,children:[(o||d)&&e.jsxs("div",{className:"wim-progress__info",children:[o&&e.jsx("span",{className:"wim-progress__label",children:o}),d&&!i&&e.jsxs("span",{className:"wim-progress__value",children:[Math.round(m),"%"]})]}),e.jsx("div",{className:"wim-progress__track",children:e.jsx("div",{className:"wim-progress__bar",style:{width:i?"100%":`${m}%`}})})]})};a.__docgenInfo={description:"プログレスバーを表示するためのコンポーネント。",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},intent:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const x={title:"Components/Loading States/Progress",component:a,tags:[],argTypes:{intent:{control:"select",options:["primary","secondary","success","warning","error","neutral","info"]},size:{control:"radio",options:["sm","md","lg"]}}},s={args:{value:50,label:"Processing...",showValue:!0},render:r=>e.jsx(a,{...r})},l={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,intent:"primary",value:20,label:"Primary"}),e.jsx(a,{...r,intent:"secondary",value:40,label:"Secondary"}),e.jsx(a,{...r,intent:"success",value:60,label:"Success"}),e.jsx(a,{...r,intent:"warning",value:80,label:"Warning"}),e.jsx(a,{...r,intent:"error",value:90,label:"Error"}),e.jsx(a,{...r,intent:"neutral",value:50,label:"Neutral"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,size:"sm",value:50,label:"Small"}),e.jsx(a,{...r,size:"md",value:50,label:"Medium"}),e.jsx(a,{...r,size:"lg",value:50,label:"Large"})]})},t={args:{indeterminate:!0,label:"Uploading..."},render:r=>e.jsx(a,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: "Processing...",
    showValue: true
  },
  render: args => <Progress {...args} />
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>
      <Progress {...args} intent="primary" value={20} label="Primary" />
      <Progress {...args} intent="secondary" value={40} label="Secondary" />
      <Progress {...args} intent="success" value={60} label="Success" />
      <Progress {...args} intent="warning" value={80} label="Warning" />
      <Progress {...args} intent="error" value={90} label="Error" />
      <Progress {...args} intent="neutral" value={50} label="Neutral" />
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%"
  }}>
      <Progress {...args} size="sm" value={50} label="Small" />
      <Progress {...args} size="md" value={50} label="Medium" />
      <Progress {...args} size="lg" value={50} label="Large" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Uploading..."
  },
  render: args => <Progress {...args} />
}`,...t.parameters?.docs?.source}}};const y=["Default","Colors","Sizes","Indeterminate"],j=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Indeterminate:t,Sizes:n,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,t as I,j as P,n as S};
