import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-Ca_Ym0hA.js";const a=({value:r=0,max:c=100,color:d="primary",size:p="md",label:t,showValue:u=!1,indeterminate:i=!1,className:g,...v})=>{const m=Math.min(Math.max(r/c*100,0),100);return e.jsxs("div",{className:f("wim-progress",`wim-progress--${p}`,`wim-progress--${d}`,i&&"wim-progress--indeterminate",g),role:"progressbar","aria-valuenow":i?void 0:r,"aria-valuemin":0,"aria-valuemax":c,...v,children:[(t||u)&&e.jsxs("div",{className:"wim-progress__info",children:[t&&e.jsx("span",{className:"wim-progress__label",children:t}),u&&!i&&e.jsxs("span",{className:"wim-progress__value",children:[Math.round(m),"%"]})]}),e.jsx("div",{className:"wim-progress__track",children:e.jsx("div",{className:"wim-progress__bar",style:{width:i?"100%":`${m}%`}})})]})};a.__docgenInfo={description:"プログレスバーを表示するためのコンポーネント。",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const x={title:"Component/Loading States/Progress",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},size:{control:"select",options:["sm","md","lg"]}}},s={args:{value:50,label:"Processing...",showValue:!0},render:r=>e.jsx(a,{...r})},l={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,color:"primary",value:20,label:"Primary"}),e.jsx(a,{...r,color:"secondary",value:40,label:"Secondary"}),e.jsx(a,{...r,color:"success",value:60,label:"Success"}),e.jsx(a,{...r,color:"warning",value:80,label:"Warning"}),e.jsx(a,{...r,color:"error",value:90,label:"Error"}),e.jsx(a,{...r,color:"neutral",value:50,label:"Neutral"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(a,{...r,size:"sm",value:50,label:"Small"}),e.jsx(a,{...r,size:"md",value:50,label:"Medium"}),e.jsx(a,{...r,size:"lg",value:50,label:"Large"})]})},n={args:{indeterminate:!0,label:"Uploading..."},render:r=>e.jsx(a,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }}>\r
            <Progress {...args} color="primary" value={20} label="Primary" />\r
            <Progress {...args} color="secondary" value={40} label="Secondary" />\r
            <Progress {...args} color="success" value={60} label="Success" />\r
            <Progress {...args} color="warning" value={80} label="Warning" />\r
            <Progress {...args} color="error" value={90} label="Error" />\r
            <Progress {...args} color="neutral" value={50} label="Neutral" />\r
        </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Uploading..."
  },
  render: args => <Progress {...args} />
}`,...n.parameters?.docs?.source}}};const y=["Default","Colors","Sizes","Indeterminate"],j=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Indeterminate:n,Sizes:o,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,n as I,j as P,o as S};
