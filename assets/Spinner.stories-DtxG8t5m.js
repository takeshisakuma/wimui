import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as t}from"./index-EE99T2iv.js";const n=({size:r="md",color:c="primary",label:i,labelPosition:m="right",className:p,...d})=>e.jsxs("div",{className:t("wim-spinner-container",i&&`wim-spinner--with-label-${m}`,p),role:"status","aria-live":"polite",...d,children:[e.jsxs("svg",{className:t("wim-spinner",`wim-spinner--${r}`,`wim-spinner--${c}`),viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{className:"wim-spinner__track",cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"4"}),e.jsx("circle",{className:"wim-spinner__head",cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"126",strokeDashoffset:"100"})]}),i&&e.jsx("span",{className:"wim-spinner__label",children:i})]});n.__docgenInfo={description:"読み込み中であることを示すための回転するインジケーター。",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"right" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};const u={title:"Component/Feedback/Spinner",component:n,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]},labelPosition:{control:"radio",options:["right","bottom"]}}},s={args:{label:"Loading..."},render:r=>e.jsx(n,{...r})},a={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{...r,color:"primary"}),e.jsx(n,{...r,color:"secondary"}),e.jsx(n,{...r,color:"success"}),e.jsx(n,{...r,color:"warning"}),e.jsx(n,{...r,color:"error"}),e.jsx(n,{...r,color:"neutral"})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{...r,size:"sm"}),e.jsx(n,{...r,size:"md"}),e.jsx(n,{...r,size:"lg"}),e.jsx(n,{...r,size:"xl"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(n,{...r,label:"Loading right...",labelPosition:"right"}),e.jsx(n,{...r,label:"Loading bottom...",labelPosition:"bottom"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading..."
  },
  render: args => <Spinner {...args} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
            <Spinner {...args} color="primary" />\r
            <Spinner {...args} color="secondary" />\r
            <Spinner {...args} color="success" />\r
            <Spinner {...args} color="warning" />\r
            <Spinner {...args} color="error" />\r
            <Spinner {...args} color="neutral" />\r
        </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
            <Spinner {...args} size="sm" />\r
            <Spinner {...args} size="md" />\r
            <Spinner {...args} size="lg" />\r
            <Spinner {...args} size="xl" />\r
        </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
            <Spinner {...args} label="Loading right..." labelPosition="right" />\r
            <Spinner {...args} label="Loading bottom..." labelPosition="bottom" />\r
        </div>
}`,...o.parameters?.docs?.source}}};const g=["Default","Colors","Sizes","WithLabel"],v=Object.freeze(Object.defineProperty({__proto__:null,Colors:a,Default:s,Sizes:l,WithLabel:o,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{a as C,s as D,v as S,o as W,l as a};
