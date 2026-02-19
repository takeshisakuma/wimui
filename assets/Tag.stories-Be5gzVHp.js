import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as T}from"./index-DCvovkc_.js";import{u as y}from"./useTranslation-B78TVrh7.js";import{I as x}from"./Icon-PvUFIQ0g.js";const r=({children:a,color:c="primary",variant:d="solid",size:m="medium",icon:t,className:u,...p})=>{const{t:g}=y();return e.jsxs("span",{className:T("wim-tag",`wim-tag--${c}`,`wim-tag--${d}`,`wim-tag--${m==="small"?"sm":"md"}`,u),...p,children:[t&&e.jsx("span",{className:"wim-tag__icon",children:t}),e.jsx("span",{className:"wim-tag__content",children:typeof a=="string"?g(a):a})]})};r.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキスト"},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"色",defaultValue:{value:'"primary"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const v={title:"Component/Data Indicators/Tag",component:r,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},s={args:{children:"Tag Content",color:"primary",variant:"solid",size:"medium"}},n={render:a=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{...a,variant:"solid",children:"Solid"}),e.jsx(r,{...a,variant:"outline",children:"Outline"}),e.jsx(r,{...a,variant:"subtle",children:"Subtle"})]})},l={render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(r,{...a,color:"primary",children:"Primary"}),e.jsx(r,{...a,color:"secondary",children:"Secondary"}),e.jsx(r,{...a,color:"success",children:"Success"}),e.jsx(r,{...a,color:"warning",children:"Warning"}),e.jsx(r,{...a,color:"error",children:"Error"}),e.jsx(r,{...a,color:"neutral",children:"Neutral"})]})},o={render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{...a,size:"small",children:"Small Tag"}),e.jsx(r,{...a,size:"medium",children:"Medium Tag"})]})},i={args:{children:"Tag with Icon",icon:e.jsx(x,{name:"CircleIcon",size:"small"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag Content",
    color: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
            <Tag {...args} variant="solid">Solid</Tag>\r
            <Tag {...args} variant="outline">Outline</Tag>\r
            <Tag {...args} variant="subtle">Subtle</Tag>\r
        </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  }}>\r
            <Tag {...args} color="primary">Primary</Tag>\r
            <Tag {...args} color="secondary">Secondary</Tag>\r
            <Tag {...args} color="success">Success</Tag>\r
            <Tag {...args} color="warning">Warning</Tag>\r
            <Tag {...args} color="error">Error</Tag>\r
            <Tag {...args} color="neutral">Neutral</Tag>\r
        </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}>\r
            <Tag {...args} size="small">Small Tag</Tag>\r
            <Tag {...args} size="medium">Medium Tag</Tag>\r
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag with Icon",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","Variants","Colors","Sizes","WithIcon"],z=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Sizes:o,Variants:n,WithIcon:i,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,o as S,z as T,n as V,i as W};
