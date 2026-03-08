import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-S5ynd_Qu.js";import{u as t}from"./useTranslation-CQiqGYf8.js";import{I as T}from"./Icon-DAoDzlzz.js";const a=({children:s,color:e="primary",variant:n="solid",size:u="medium",icon:d,className:p,...g})=>{const{t:y}=t();return r.jsxs("span",{className:_("wim-tag",`wim-tag--${e}`,`wim-tag--${n}`,`wim-tag--${u==="small"?"sm":"md"}`,p),...g,children:[d&&r.jsx("span",{className:"wim-tag__icon",children:d}),r.jsx("span",{className:"wim-tag__content",children:typeof s=="string"?y(s):s})]})};a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキスト"},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"色",defaultValue:{value:'"primary"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const f={title:"Components/Data Indicators/Tag",component:a,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},o={render:function(e){const{t:n}=t(["docs","common","components"]);return r.jsx(a,{...e,children:n("story_tag_content")})},args:{color:"primary",variant:"solid",size:"medium"}},c={render:function(e){const{t:n}=t(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(a,{...e,variant:"solid",children:n("story_tag_solid")}),r.jsx(a,{...e,variant:"outline",children:n("story_tag_outline")}),r.jsx(a,{...e,variant:"subtle",children:n("story_tag_subtle")})]})}},i={render:function(e){const{t:n}=t(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[r.jsx(a,{...e,color:"primary",children:n("story_tag_primary")}),r.jsx(a,{...e,color:"secondary",children:n("story_tag_secondary")}),r.jsx(a,{...e,color:"success",children:n("story_tag_success")}),r.jsx(a,{...e,color:"warning",children:n("story_tag_warning")}),r.jsx(a,{...e,color:"error",children:n("story_tag_error")}),r.jsx(a,{...e,color:"neutral",children:n("story_tag_neutral")})]})}},l={render:function(e){const{t:n}=t(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(a,{...e,size:"small",children:n("story_tag_small")}),r.jsx(a,{...e,size:"medium",children:n("story_tag_medium")})]})}},m={render:function(e){const{t:n}=t(["docs","common","components"]);return r.jsx(a,{...e,icon:r.jsx(T,{name:"CircleIcon",size:"small"}),children:n("story_tag_with_icon")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tag {...args}>{t("story_tag_content")}</Tag>;
  },
  args: {
    color: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }}>\r
        <Tag {...args} color="primary">\r
          {t("story_tag_primary")}\r
        </Tag>\r
        <Tag {...args} color="secondary">\r
          {t("story_tag_secondary")}\r
        </Tag>\r
        <Tag {...args} color="success">\r
          {t("story_tag_success")}\r
        </Tag>\r
        <Tag {...args} color="warning">\r
          {t("story_tag_warning")}\r
        </Tag>\r
        <Tag {...args} color="error">\r
          {t("story_tag_error")}\r
        </Tag>\r
        <Tag {...args} color="neutral">\r
          {t("story_tag_neutral")}\r
        </Tag>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>\r
        {t("story_tag_with_icon")}\r
      </Tag>;
  }
}`,...m.parameters?.docs?.source}}};const x=["Default","Variants","Colors","Sizes","WithIcon"],R=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:o,Sizes:l,Variants:c,WithIcon:m,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{i as C,o as D,l as S,R as T,c as V,m as W};
