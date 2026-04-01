import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as g}from"./IndicatorBase-BMmII2NW.js";import{I as m}from"./Icon-DuncFQFu.js";import{A as d}from"./iframe-00CRNq2O.js";import{u}from"./useTranslation-BYdSjFhs.js";const a=({children:t,icon:e,...n})=>r.jsx(g,{prefixClass:"wim-tag",icon:e,...n,children:t});a.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},status:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:a,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},s={render:function(e){const{t:n}=u(d);return r.jsx(a,{...e,children:n("story.tag_content")})},args:{status:"primary",variant:"solid",size:"md"}},o={render:function(e){const{t:n}=u(d);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(a,{...e,variant:"solid",children:n("story.tag_solid")}),r.jsx(a,{...e,variant:"outline",children:n("story.tag_outline")}),r.jsx(a,{...e,variant:"subtle",children:n("story.tag_subtle")})]})}},i={render:function(e){const{t:n}=u(d);return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[r.jsx(a,{...e,status:"primary",children:n("story.tag_primary")}),r.jsx(a,{...e,status:"secondary",children:n("story.tag_secondary")}),r.jsx(a,{...e,status:"success",children:n("story.tag_success")}),r.jsx(a,{...e,status:"warning",children:n("story.tag_warning")}),r.jsx(a,{...e,status:"error",children:n("story.tag_error")}),r.jsx(a,{...e,status:"neutral",children:n("story.tag_neutral")}),r.jsx(a,{...e,status:"info",children:n("story.tag_info")})]})}},l={render:function(e){const{t:n}=u(d);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(a,{...e,size:"sm",children:n("story.tag_small")}),r.jsx(a,{...e,size:"md",children:n("story.tag_medium")})]})}},c={render:function(e){const{t:n}=u(d);return r.jsx(a,{...e,icon:r.jsx(m,{name:"CircleIcon",size:"sm"}),children:n("story.tag_with_icon")})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("story.tag_content")}</Tag>;
  },
  args: {
    status: "primary",
    variant: "solid",
    size: "md"
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
          {t("story.tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("story.tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("story.tag_subtle")}
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
          {t("story.tag_primary")}
        </Tag>
        <Tag {...args} status="secondary">
          {t("story.tag_secondary")}
        </Tag>
        <Tag {...args} status="success">
          {t("story.tag_success")}
        </Tag>
        <Tag {...args} status="warning">
          {t("story.tag_warning")}
        </Tag>
        <Tag {...args} status="error">
          {t("story.tag_error")}
        </Tag>
        <Tag {...args} status="neutral">
          {t("story.tag_neutral")}
        </Tag>
        <Tag {...args} status="info">
          {t("story.tag_info")}
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
        <Tag {...args} size="sm">
          {t("story.tag_small")}
        </Tag>
        <Tag {...args} size="md">
          {t("story.tag_medium")}
        </Tag>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("story.tag_with_icon")}
      </Tag>;
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","Variants","Colors","Sizes","WithIcon"],h=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:s,Sizes:l,Variants:o,WithIcon:c,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,s as D,l as S,h as T,o as V,c as W};
