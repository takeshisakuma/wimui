import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as m}from"./IndicatorBase-Djp92BVn.js";import{I as g}from"./Icon-DBjc-Qgx.js";import{A as u}from"./iframe-D0D_YrNH.js";import{u as d}from"./useTranslation--fMTB-_A.js";const a=({children:s,icon:e,...n})=>r.jsx(m,{prefixClass:"wim-tag",icon:e,...n,children:s});a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:a,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},t={render:function(e){const{t:n}=d(u);return r.jsx(a,{...e,children:n("story_tag_content")})},args:{status:"primary",variant:"solid",size:"medium"}},o={render:function(e){const{t:n}=d(u);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(a,{...e,variant:"solid",children:n("story_tag_solid")}),r.jsx(a,{...e,variant:"outline",children:n("story_tag_outline")}),r.jsx(a,{...e,variant:"subtle",children:n("story_tag_subtle")})]})}},i={render:function(e){const{t:n}=d(u);return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[r.jsx(a,{...e,status:"primary",children:n("story_tag_primary")}),r.jsx(a,{...e,status:"secondary",children:n("story_tag_secondary")}),r.jsx(a,{...e,status:"success",children:n("story_tag_success")}),r.jsx(a,{...e,status:"warning",children:n("story_tag_warning")}),r.jsx(a,{...e,status:"error",children:n("story_tag_error")}),r.jsx(a,{...e,status:"neutral",children:n("story_tag_neutral")})]})}},l={render:function(e){const{t:n}=d(u);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(a,{...e,size:"small",children:n("story_tag_small")}),r.jsx(a,{...e,size:"medium",children:n("story_tag_medium")})]})}},c={render:function(e){const{t:n}=d(u);return r.jsx(a,{...e,icon:r.jsx(g,{name:"CircleIcon",size:"small"}),children:n("story_tag_with_icon")})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    }}>
        <Tag {...args} variant="solid">
          {t("story_tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("story_tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("story_tag_subtle")}
        </Tag>
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
    }}>
        <Tag {...args} status="primary">
          {t("story_tag_primary")}
        </Tag>
        <Tag {...args} status="secondary">
          {t("story_tag_secondary")}
        </Tag>
        <Tag {...args} status="success">
          {t("story_tag_success")}
        </Tag>
        <Tag {...args} status="warning">
          {t("story_tag_warning")}
        </Tag>
        <Tag {...args} status="error">
          {t("story_tag_error")}
        </Tag>
        <Tag {...args} status="neutral">
          {t("story_tag_neutral")}
        </Tag>
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
    }}>
        <Tag {...args} size="small">
          {t("story_tag_small")}
        </Tag>
        <Tag {...args} size="medium">
          {t("story_tag_medium")}
        </Tag>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>
        {t("story_tag_with_icon")}
      </Tag>;
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","Variants","Colors","Sizes","WithIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:t,Sizes:l,Variants:o,WithIcon:c,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,l as S,S as T,o as V,c as W};
