import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as m}from"./IndicatorBase-DGQK4i9G.js";import{I as g}from"./Icon-MOwUJT5R.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as d}from"./useTranslation-BxKydHqK.js";const a=({children:s,icon:r,...e})=>n.jsx(m,{prefixClass:"wim-tag",icon:r,...e,children:s});a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:a,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},t={render:function(r){const{t:e}=d(u);return n.jsx(a,{...r,children:e("story_tag_content")})},args:{status:"primary",variant:"solid",size:"medium"}},o={render:function(r){const{t:e}=d(u);return n.jsxs("div",{style:{display:"flex",gap:"10px"},children:[n.jsx(a,{...r,variant:"solid",children:e("story_tag_solid")}),n.jsx(a,{...r,variant:"outline",children:e("story_tag_outline")}),n.jsx(a,{...r,variant:"subtle",children:e("story_tag_subtle")})]})}},i={render:function(r){const{t:e}=d(u);return n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[n.jsx(a,{...r,status:"primary",children:e("story_tag_primary")}),n.jsx(a,{...r,status:"secondary",children:e("story_tag_secondary")}),n.jsx(a,{...r,status:"success",children:e("story_tag_success")}),n.jsx(a,{...r,status:"warning",children:e("story_tag_warning")}),n.jsx(a,{...r,status:"error",children:e("story_tag_error")}),n.jsx(a,{...r,status:"neutral",children:e("story_tag_neutral")})]})}},l={render:function(r){const{t:e}=d(u);return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(a,{...r,size:"small",children:e("story_tag_small")}),n.jsx(a,{...r,size:"medium",children:e("story_tag_medium")})]})}},c={render:function(r){const{t:e}=d(u);return n.jsx(a,{...r,icon:n.jsx(g,{name:"CircleIcon",size:"small"}),children:e("story_tag_with_icon")})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("story_tag_content")}</Tag>;
  },
  args: {
    status: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>\r
        <Tag {...args} variant="solid">\r
          {t("story_tag_solid")}\r
        </Tag>\r
        <Tag {...args} variant="outline">\r
          {t("story_tag_outline")}\r
        </Tag>\r
        <Tag {...args} variant="subtle">\r
          {t("story_tag_subtle")}\r
        </Tag>\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }}>\r
        <Tag {...args} status="primary">\r
          {t("story_tag_primary")}\r
        </Tag>\r
        <Tag {...args} status="secondary">\r
          {t("story_tag_secondary")}\r
        </Tag>\r
        <Tag {...args} status="success">\r
          {t("story_tag_success")}\r
        </Tag>\r
        <Tag {...args} status="warning">\r
          {t("story_tag_warning")}\r
        </Tag>\r
        <Tag {...args} status="error">\r
          {t("story_tag_error")}\r
        </Tag>\r
        <Tag {...args} status="neutral">\r
          {t("story_tag_neutral")}\r
        </Tag>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>\r
        <Tag {...args} size="small">\r
          {t("story_tag_small")}\r
        </Tag>\r
        <Tag {...args} size="medium">\r
          {t("story_tag_medium")}\r
        </Tag>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>\r
        {t("story_tag_with_icon")}\r
      </Tag>;
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","Variants","Colors","Sizes","WithIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:t,Sizes:l,Variants:o,WithIcon:c,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,l as S,S as T,o as V,c as W};
