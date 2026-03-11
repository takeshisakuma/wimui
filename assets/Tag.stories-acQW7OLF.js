import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./IndicatorBase-DuJNUMBj.js";import{I as u}from"./Icon-LsAuz8T1.js";import{u as m}from"./useTranslation-ZF4WB21B.js";const s=({children:a,icon:r,...e})=>n.jsx(d,{prefixClass:"wim-tag",icon:r,...e,children:a});s.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:s,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},t={render:function(r){const{t:e}=m(["docs","common","components"]);return n.jsx(s,{...r,children:e("story_tag_content")})},args:{status:"primary",variant:"solid",size:"medium"}},o={render:function(r){const{t:e}=m(["docs","common","components"]);return n.jsxs("div",{style:{display:"flex",gap:"10px"},children:[n.jsx(s,{...r,variant:"solid",children:e("story_tag_solid")}),n.jsx(s,{...r,variant:"outline",children:e("story_tag_outline")}),n.jsx(s,{...r,variant:"subtle",children:e("story_tag_subtle")})]})}},i={render:function(r){const{t:e}=m(["docs","common","components"]);return n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[n.jsx(s,{...r,status:"primary",children:e("story_tag_primary")}),n.jsx(s,{...r,status:"secondary",children:e("story_tag_secondary")}),n.jsx(s,{...r,status:"success",children:e("story_tag_success")}),n.jsx(s,{...r,status:"warning",children:e("story_tag_warning")}),n.jsx(s,{...r,status:"error",children:e("story_tag_error")}),n.jsx(s,{...r,status:"neutral",children:e("story_tag_neutral")})]})}},c={render:function(r){const{t:e}=m(["docs","common","components"]);return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(s,{...r,size:"small",children:e("story_tag_small")}),n.jsx(s,{...r,size:"medium",children:e("story_tag_medium")})]})}},l={render:function(r){const{t:e}=m(["docs","common","components"]);return n.jsx(s,{...r,icon:n.jsx(u,{name:"CircleIcon",size:"small"}),children:e("story_tag_with_icon")})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>\r
        {t("story_tag_with_icon")}\r
      </Tag>;
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Variants","Colors","Sizes","WithIcon"],f=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:t,Sizes:c,Variants:o,WithIcon:l,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,c as S,f as T,o as V,l as W};
