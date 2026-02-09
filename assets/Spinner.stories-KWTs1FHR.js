import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./index-C6Hyae_i.js";const a=({size:r="md",color:c="primary",label:i,labelPosition:m="right",className:p="",...u})=>{const d=`wim-spinner--${r}`,g=`wim-spinner--${c}`,f=i?`wim-spinner--with-label-${m}`:"";return e.jsxs("div",{className:["wim-spinner-container",f,p].filter(Boolean).join(" "),role:"status","aria-live":"polite",...u,children:[e.jsxs("svg",{className:["wim-spinner",d,g].filter(Boolean).join(" "),viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{className:"wim-spinner__track",cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"4"}),e.jsx("circle",{className:"wim-spinner__head",cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"126",strokeDashoffset:"100"})]}),i&&e.jsx("span",{className:"wim-spinner__label",children:i})]})};a.propTypes={size:s.oneOf(["sm","md","lg","xl"]),color:s.oneOf(["primary","secondary","success","warning","error","neutral","currentColor"]),label:s.string,labelPosition:s.oneOf(["right","bottom"]),className:s.string};a.__docgenInfo={description:"読み込み中であることを示すための回転するインジケーター。",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"スピナーのサイズ。",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"スピナーの色。",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"neutral"',computed:!1},{value:'"currentColor"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"表示するラベル。",type:{name:"string"}},labelPosition:{required:!1,tsType:{name:"union",raw:'"right" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'}]},description:"ラベルの表示位置。",defaultValue:{value:'"right"',computed:!1},type:{name:"enum",value:[{value:'"right"',computed:!1},{value:'"bottom"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const x={title:"Component/Feedback/Spinner",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]},labelPosition:{control:"radio",options:["right","bottom"]}}},n={args:{label:"Loading..."},render:r=>e.jsx(a,{...r})},l={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{...r,color:"primary"}),e.jsx(a,{...r,color:"secondary"}),e.jsx(a,{...r,color:"success"}),e.jsx(a,{...r,color:"warning"}),e.jsx(a,{...r,color:"error"}),e.jsx(a,{...r,color:"neutral"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{...r,size:"sm"}),e.jsx(a,{...r,size:"md"}),e.jsx(a,{...r,size:"lg"}),e.jsx(a,{...r,size:"xl"})]})},t={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(a,{...r,label:"Loading right...",labelPosition:"right"}),e.jsx(a,{...r,label:"Loading bottom...",labelPosition:"bottom"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading..."
  },
  render: args => <Spinner {...args} />
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
            <Spinner {...args} label="Loading right..." labelPosition="right" />\r
            <Spinner {...args} label="Loading bottom..." labelPosition="bottom" />\r
        </div>
}`,...t.parameters?.docs?.source}}};const v=["Default","Colors","Sizes","WithLabel"],h=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:n,Sizes:o,WithLabel:t,__namedExportsOrder:v,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,n as D,h as S,t as W,o as a};
