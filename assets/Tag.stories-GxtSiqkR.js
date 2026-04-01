import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as g}from"./IndicatorBase-DNVqipx-.js";import{I as m}from"./Icon-CCssd2AI.js";import{A as d}from"./iframe-BCX1a7Lk.js";import{u}from"./useTranslation-C4U93Ik6.js";const t=({children:a,icon:n,...e})=>r.jsx(g,{prefixClass:"wim-tag",icon:n,...e,children:a});t.__docgenInfo={description:"カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するコンテンツ"},intent:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"ステータス"},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'}]},description:"バリアント"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"サイズ"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アイコン"}}};const p={title:"Components/Data Indicators/Tag",component:t,tags:[],argTypes:{intent:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:"select",options:["solid","outline","subtle"]},size:{control:"radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:"Data Display/Tag Component"}}}},s={render:function(n){const{t:e}=u(d);return r.jsx(t,{...n,children:e("story.tag_content")})},args:{intent:"primary",variant:"solid",size:"md"}},i={render:function(n){const{t:e}=u(d);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(t,{...n,variant:"solid",children:e("story.tag_solid")}),r.jsx(t,{...n,variant:"outline",children:e("story.tag_outline")}),r.jsx(t,{...n,variant:"subtle",children:e("story.tag_subtle")})]})}},o={render:function(n){const{t:e}=u(d);return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[r.jsx(t,{...n,intent:"primary",children:e("story.tag_primary")}),r.jsx(t,{...n,intent:"secondary",children:e("story.tag_secondary")}),r.jsx(t,{...n,intent:"success",children:e("story.tag_success")}),r.jsx(t,{...n,intent:"warning",children:e("story.tag_warning")}),r.jsx(t,{...n,intent:"error",children:e("story.tag_error")}),r.jsx(t,{...n,intent:"neutral",children:e("story.tag_neutral")}),r.jsx(t,{...n,intent:"info",children:e("story.tag_info")})]})}},l={render:function(n){const{t:e}=u(d);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(t,{...n,size:"sm",children:e("story.tag_small")}),r.jsx(t,{...n,size:"md",children:e("story.tag_medium")})]})}},c={render:function(n){const{t:e}=u(d);return r.jsx(t,{...n,icon:r.jsx(m,{name:"CircleIcon",size:"sm"}),children:e("story.tag_with_icon")})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("story.tag_content")}</Tag>;
  },
  args: {
    intent: "primary",
    variant: "solid",
    size: "md"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }}>
        <Tag {...args} intent="primary">
          {t("story.tag_primary")}
        </Tag>
        <Tag {...args} intent="secondary">
          {t("story.tag_secondary")}
        </Tag>
        <Tag {...args} intent="success">
          {t("story.tag_success")}
        </Tag>
        <Tag {...args} intent="warning">
          {t("story.tag_warning")}
        </Tag>
        <Tag {...args} intent="error">
          {t("story.tag_error")}
        </Tag>
        <Tag {...args} intent="neutral">
          {t("story.tag_neutral")}
        </Tag>
        <Tag {...args} intent="info">
          {t("story.tag_info")}
        </Tag>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const y=["Default","Variants","Colors","Sizes","WithIcon"],h=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:s,Sizes:l,Variants:i,WithIcon:c,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,l as S,h as T,i as V,c as W};
