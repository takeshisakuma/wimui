import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./index-BufBIhLZ.js";import{u as x}from"./useTranslation-BjT7I1yF.js";import{I as h}from"./Icon-CR2U3mau.js";const r=({children:a,color:m="primary",variant:d="solid",size:u="medium",icon:c,className:p="",...g})=>{const{t:y}=x(),v=`wim-tag--${m}`,f=`wim-tag--${d}`,T=`wim-tag--${u==="small"?"sm":"md"}`;return e.jsxs("span",{className:["wim-tag",v,f,T,p].filter(Boolean).join(" "),...g,children:[c&&e.jsx("span",{className:"wim-tag__icon",children:c}),e.jsx("span",{className:"wim-tag__content",children:typeof a=="string"?y(a):a})]})};r.propTypes={children:s.node,color:s.oneOf(["primary","secondary","success","warning","error","neutral"]),variant:s.oneOf(["solid","outline","subtle"]),size:s.oneOf(["small","medium"]),icon:s.node,className:s.string};r.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキスト",type:{name:"node"}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"色",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"neutral"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント",defaultValue:{value:'"solid"',computed:!1},type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outline"',computed:!1},{value:'"subtle"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1}]}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン",type:{name:"node"}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const j={title:"Component/Data Display/Tag",component:r,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},n={args:{children:"Tag Content",color:"primary",variant:"solid",size:"medium"}},l={render:a=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{...a,variant:"solid",children:"Solid"}),e.jsx(r,{...a,variant:"outline",children:"Outline"}),e.jsx(r,{...a,variant:"subtle",children:"Subtle"})]})},o={render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(r,{...a,color:"primary",children:"Primary"}),e.jsx(r,{...a,color:"secondary",children:"Secondary"}),e.jsx(r,{...a,color:"success",children:"Success"}),e.jsx(r,{...a,color:"warning",children:"Warning"}),e.jsx(r,{...a,color:"error",children:"Error"}),e.jsx(r,{...a,color:"neutral",children:"Neutral"})]})},t={render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{...a,size:"small",children:"Small Tag"}),e.jsx(r,{...a,size:"medium",children:"Medium Tag"})]})},i={args:{children:"Tag with Icon",icon:e.jsx(h,{name:"CircleIcon",size:"small"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag Content",
    color: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
            <Tag {...args} variant="solid">Solid</Tag>\r
            <Tag {...args} variant="outline">Outline</Tag>\r
            <Tag {...args} variant="subtle">Subtle</Tag>\r
        </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}>\r
            <Tag {...args} size="small">Small Tag</Tag>\r
            <Tag {...args} size="medium">Medium Tag</Tag>\r
        </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag with Icon",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...i.parameters?.docs?.source}}};const w=["Default","Variants","Colors","Sizes","WithIcon"],I=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:n,Sizes:t,Variants:l,WithIcon:i,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{o as C,n as D,t as S,I as T,l as V,i as W};
