import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as r}from"./index-B2M8XZ3m.js";import{u as x}from"./useTranslation-FOduwzAJ.js";import{I as h}from"./Icon-DO9WYNRt.js";const a=({children:i,color:m="primary",variant:d="solid",size:u="medium",icon:c,className:p="",...g})=>{const{t:y}=x(),v=`wim-tag--${m}`,f=`wim-tag--${d}`,T=`wim-tag--${u==="small"?"sm":"md"}`;return e.jsxs("span",{className:["wim-tag",v,f,T,p].filter(Boolean).join(" "),...g,children:[c&&e.jsx("span",{className:"wim-tag__icon",children:c}),e.jsx("span",{className:"wim-tag__content",children:typeof i=="string"?y(i):i})]})};a.propTypes={children:r.node,color:r.oneOf(["primary","secondary","success","warning","error","neutral"]),variant:r.oneOf(["solid","outline","subtle"]),size:r.oneOf(["small","medium"]),icon:r.node,className:r.string};a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキスト",type:{name:"node"}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"色",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"neutral"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント",defaultValue:{value:'"solid"',computed:!1},type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outline"',computed:!1},{value:'"subtle"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1}]}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン",type:{name:"node"}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const j={title:"Component/Data Display/Tag",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},s={args:{children:"Tag Content",color:"primary",variant:"solid",size:"medium"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{variant:"solid",children:"Solid"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"subtle",children:"Subtle"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(a,{color:"primary",children:"Primary"}),e.jsx(a,{color:"secondary",children:"Secondary"}),e.jsx(a,{color:"success",children:"Success"}),e.jsx(a,{color:"warning",children:"Warning"}),e.jsx(a,{color:"error",children:"Error"}),e.jsx(a,{color:"neutral",children:"Neutral"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(a,{size:"small",children:"Small Tag"}),e.jsx(a,{size:"medium",children:"Medium Tag"})]})},t={args:{children:"Tag with Icon",icon:e.jsx(h,{name:"CircleIcon",size:"small"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag Content",
    color: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
            <Tag variant="solid">Solid</Tag>\r
            <Tag variant="outline">Outline</Tag>\r
            <Tag variant="subtle">Subtle</Tag>\r
        </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  }}>\r
            <Tag color="primary">Primary</Tag>\r
            <Tag color="secondary">Secondary</Tag>\r
            <Tag color="success">Success</Tag>\r
            <Tag color="warning">Warning</Tag>\r
            <Tag color="error">Error</Tag>\r
            <Tag color="neutral">Neutral</Tag>\r
        </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}>\r
            <Tag size="small">Small Tag</Tag>\r
            <Tag size="medium">Medium Tag</Tag>\r
        </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Tag with Icon",
    icon: <Icon name="CircleIcon" size="small" />
  }
}`,...t.parameters?.docs?.source}}};const w=["Default","Variants","Colors","Sizes","WithIcon"],I=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Sizes:o,Variants:n,WithIcon:t,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,o as S,I as T,n as V,t as W};
