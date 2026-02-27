import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as T}from"./index-DMtA5yeu.js";import{u as y}from"./useTranslation-BOpmJKCh.js";import{I as x}from"./Icon-DPGT72ZZ.js";const a=({children:r,color:c="primary",variant:d="solid",size:m="medium",icon:t,className:u,...p})=>{const{t:g}=y();return e.jsxs("span",{className:T("wim-tag",`wim-tag--${c}`,`wim-tag--${d}`,`wim-tag--${m==="small"?"sm":"md"}`,u),...p,children:[t&&e.jsx("span",{className:"wim-tag__icon",children:t}),e.jsx("span",{className:"wim-tag__content",children:typeof r=="string"?g(r):r})]})};a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキスト"},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"色",defaultValue:{value:'"primary"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const v={title:"Components/Data Indicators/Tag",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},n={args:{children:"Tag Content",color:"primary",variant:"solid",size:"medium"}},s={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{...r,variant:"solid",children:"Solid"}),e.jsx(a,{...r,variant:"outline",children:"Outline"}),e.jsx(a,{...r,variant:"subtle",children:"Subtle"})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(a,{...r,color:"primary",children:"Primary"}),e.jsx(a,{...r,color:"secondary",children:"Secondary"}),e.jsx(a,{...r,color:"success",children:"Success"}),e.jsx(a,{...r,color:"warning",children:"Warning"}),e.jsx(a,{...r,color:"error",children:"Error"}),e.jsx(a,{...r,color:"neutral",children:"Neutral"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(a,{...r,size:"small",children:"Small Tag"}),e.jsx(a,{...r,size:"medium",children:"Medium Tag"})]})},i={args:{children:"Tag with Icon",icon:e.jsx(x,{name:"CircleIcon",size:"small"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag Content",
    color: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
      <Tag {...args} variant="solid">\r
        Solid\r
      </Tag>\r
      <Tag {...args} variant="outline">\r
        Outline\r
      </Tag>\r
      <Tag {...args} variant="subtle">\r
        Subtle\r
      </Tag>\r
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  }}>\r
      <Tag {...args} color="primary">\r
        Primary\r
      </Tag>\r
      <Tag {...args} color="secondary">\r
        Secondary\r
      </Tag>\r
      <Tag {...args} color="success">\r
        Success\r
      </Tag>\r
      <Tag {...args} color="warning">\r
        Warning\r
      </Tag>\r
      <Tag {...args} color="error">\r
        Error\r
      </Tag>\r
      <Tag {...args} color="neutral">\r
        Neutral\r
      </Tag>\r
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}>\r
      <Tag {...args} size="small">\r
        Small Tag\r
      </Tag>\r
      <Tag {...args} size="medium">\r
        Medium Tag\r
      </Tag>\r
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag with Icon",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","Variants","Colors","Sizes","WithIcon"],z=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:n,Sizes:o,Variants:s,WithIcon:i,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{l as C,n as D,o as S,z as T,s as V,i as W};
