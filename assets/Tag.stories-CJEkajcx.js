import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as u}from"./IndicatorBase-CAvIC9LN.js";import{I as _}from"./Icon-CccJ-EGP.js";import{u as l}from"./useTranslation-DD4zKDMJ.js";const o=({children:a,icon:s,...n})=>e.jsx(u,{prefixClass:"wim-tag",icon:s,...n,children:a});o.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const m={title:"Components/Data Indicators/Tag",component:o,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},r={render:function(s){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(o,{...s,children:n("story_tag_content")})},args:{status:"primary",variant:"solid",size:"medium"}},t={render:function(s){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(o,{...s,variant:"solid",children:n("story_tag_solid")}),e.jsx(o,{...s,variant:"outline",children:n("story_tag_outline")}),e.jsx(o,{...s,variant:"subtle",children:n("story_tag_subtle")})]})}},c={render:function(s){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(o,{...s,status:"primary",children:n("story_tag_primary")}),e.jsx(o,{...s,status:"secondary",children:n("story_tag_secondary")}),e.jsx(o,{...s,status:"success",children:n("story_tag_success")}),e.jsx(o,{...s,status:"warning",children:n("story_tag_warning")}),e.jsx(o,{...s,status:"error",children:n("story_tag_error")}),e.jsx(o,{...s,status:"neutral",children:n("story_tag_neutral")})]})}},i={render:function(s){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(o,{...s,size:"small",children:n("story_tag_small")}),e.jsx(o,{...s,size:"medium",children:n("story_tag_medium")})]})}},d={render:function(s){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(o,{...s,icon:e.jsx(_,{name:"CircleIcon",size:"small"}),children:n("story_tag_with_icon")})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Tag {...args}>{t("story_tag_content")}</Tag>;
  },
  args: {
    status: "primary",
    variant: "solid",
    size: "medium"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>\r
        {t("story_tag_with_icon")}\r
      </Tag>;
  }
}`,...d.parameters?.docs?.source}}};const p=["Default","Variants","Colors","Sizes","WithIcon"],x=Object.freeze(Object.defineProperty({__proto__:null,Colors:c,Default:r,Sizes:i,Variants:t,WithIcon:d,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{c as C,r as D,i as S,x as T,t as V,d as W};
