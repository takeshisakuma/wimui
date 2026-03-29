import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as m}from"./IndicatorBase-BF8WkHeg.js";import{I as g}from"./Icon-DG-VY8Tp.js";import{A as u}from"./iframe-DD-5vQ8N.js";import{u as d}from"./useTranslation-BGm1MMYI.js";const r=({children:t,icon:e,...n})=>a.jsx(m,{prefixClass:"wim-tag",icon:e,...n,children:t});r.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:r,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"radio",options:["small","medium","large"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},s={render:function(e){const{t:n}=d(u);return a.jsx(r,{...e,children:n("story_tag_content")})},args:{status:"primary",variant:"solid",size:"medium"}},o={render:function(e){const{t:n}=d(u);return a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx(r,{...e,variant:"solid",children:n("story_tag_solid")}),a.jsx(r,{...e,variant:"outline",children:n("story_tag_outline")}),a.jsx(r,{...e,variant:"subtle",children:n("story_tag_subtle")})]})}},i={render:function(e){const{t:n}=d(u);return a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[a.jsx(r,{...e,status:"primary",children:n("story_tag_primary")}),a.jsx(r,{...e,status:"secondary",children:n("story_tag_secondary")}),a.jsx(r,{...e,status:"success",children:n("story_tag_success")}),a.jsx(r,{...e,status:"warning",children:n("story_tag_warning")}),a.jsx(r,{...e,status:"error",children:n("story_tag_error")}),a.jsx(r,{...e,status:"neutral",children:n("story_tag_neutral")}),a.jsx(r,{...e,status:"info",children:n("story_tag_info")})]})}},l={render:function(e){const{t:n}=d(u);return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(r,{...e,size:"small",children:n("story_tag_small")}),a.jsx(r,{...e,size:"medium",children:n("story_tag_medium")})]})}},c={render:function(e){const{t:n}=d(u);return a.jsx(r,{...e,icon:a.jsx(g,{name:"CircleIcon",size:"small"}),children:n("story_tag_with_icon")})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <Tag {...args} status="info">
          {t("story_tag_info")}
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
}`,...c.parameters?.docs?.source}}};const _=["Default","Variants","Colors","Sizes","WithIcon"],h=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:s,Sizes:l,Variants:o,WithIcon:c,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,s as D,l as S,h as T,o as V,c as W};
