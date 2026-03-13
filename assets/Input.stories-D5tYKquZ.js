import{j as o}from"./jsx-runtime-u17CrQMm.js";import{I as n}from"./Input-C1xmoDuE.js";import{L as r}from"./FieldTemplate-Cwt9YIa5.js";import{F as v}from"./FieldError-eno_Posb.js";import{u as a}from"./useTranslation-DD4zKDMJ.js";const x={title:"Components/Basic Inputs/Input",component:n,parameters:{layout:"centered"},args:{width:"md",fullWidth:!1},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},width:{control:"select",options:["xs","sm","md","lg","xl","100%","200px","10ch"]},fullWidth:{control:"boolean"}}},c={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_name"),children:o.jsx(n,{...s,placeholder:e("story_input_placeholder_name")})})}},l={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),g=()=>alert("Dropdown or Modal would open here!");return o.jsx(r,{label:e("story_input_label_dept"),children:o.jsx(n,{...s,placeholder:e("story_input_placeholder_dept"),onClick:g,onRightIconClick:b=>{b.stopPropagation(),g()},readOnly:!0,style:{cursor:"pointer"}})})},args:{rightIcon:"ChevronDownIcon"}},d={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_keyword"),children:o.jsx(n,{...s,allowClear:!0,placeholder:e("story_input_placeholder_keyword"),defaultValue:e("story_input_value_keyword")})})}},i={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_company"),children:o.jsx(n,{...s,variant:"outline",placeholder:e("story_input_placeholder_company")})})}},p={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_remarks"),children:o.jsx(n,{...s,variant:"ghost",placeholder:e("story_input_placeholder_remarks")})})}},_={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(r,{label:e("story_input_label_email"),required:!0,children:o.jsx(n,{...s,status:"error",placeholder:e("story_input_placeholder_email"),defaultValue:"invalid-email@"})}),o.jsx(v,{content:e("story_input_error_email")})]})}},u={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_userid"),children:o.jsx(n,{...s,disabled:!0,placeholder:e("story_input_placeholder_userid")})})}},m={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_contact"),style:{width:"100%"},children:o.jsx(n,{...s,fullWidth:!0,placeholder:e("story_input_placeholder_contact")})})},parameters:{layout:"padded"}},y={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{label:e("story_input_label_search"),children:o.jsx(n,{...s,leftIcon:"SearchIcon",placeholder:e("story_input_placeholder_search")})})}},h={render:function(s){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%",maxWidth:"800px"},children:[o.jsx(r,{label:"XS (80px - Secure Code)",children:o.jsx(n,{...s,width:"xs",placeholder:"000"})}),o.jsx(r,{label:"SM (160px - Zip Code)",children:o.jsx(n,{...s,width:"sm",placeholder:"000-0000"})}),o.jsx(r,{label:"MD (320px - Name)",children:o.jsx(n,{...s,width:"md",placeholder:"John Doe"})}),o.jsx(r,{label:"LG (480px - Company)",children:o.jsx(n,{...s,width:"lg",placeholder:"Antigravity Inc."})}),o.jsx(r,{label:"Custom (8ch - Always 8 chars)",children:o.jsx(n,{...s,width:"8ch",placeholder:"12345678"})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_name")}>\r
        <Input {...args} placeholder={t("story_input_placeholder_name")} />\r
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return <Label label={t("story_input_label_dept")}>\r
        <Input {...args} placeholder={t("story_input_placeholder_dept")} onClick={handleClick} onRightIconClick={(e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent duplicate alert
        handleClick();
      }} readOnly={true} style={{
        cursor: "pointer"
      }} />\r
      </Label>;
  },
  args: {
    rightIcon: "ChevronDownIcon"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_keyword")}>\r
        <Input {...args} allowClear placeholder={t("story_input_placeholder_keyword")} defaultValue={t("story_input_value_keyword")} />\r
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_company")}>\r
        <Input {...args} variant="outline" placeholder={t("story_input_placeholder_company")} />\r
      </Label>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_remarks")}>\r
        <Input {...args} variant="ghost" placeholder={t("story_input_placeholder_remarks")} />\r
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label label={t("story_input_label_email")} required>\r
          <Input {...args} status="error" placeholder={t("story_input_placeholder_email")} defaultValue="invalid-email@" />\r
        </Label>\r
        <FieldError content={t("story_input_error_email")} />\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_userid")}>\r
        <Input {...args} disabled={true} placeholder={t("story_input_placeholder_userid")} />\r
      </Label>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_contact")} style={{
      width: "100%"
    }}>\r
        <Input {...args} fullWidth={true} placeholder={t("story_input_placeholder_contact")} />\r
      </Label>;
  },
  parameters: {
    layout: "padded"
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_input_label_search")}>\r
        <Input {...args} leftIcon="SearchIcon" placeholder={t("story_input_placeholder_search")} />\r
      </Label>;
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "100%",
      maxWidth: "800px"
    }}>\r
        <Label label="XS (80px - Secure Code)">\r
          <Input {...args} width="xs" placeholder="000" />\r
        </Label>\r
        <Label label="SM (160px - Zip Code)">\r
          <Input {...args} width="sm" placeholder="000-0000" />\r
        </Label>\r
        <Label label="MD (320px - Name)">\r
          <Input {...args} width="md" placeholder="John Doe" />\r
        </Label>\r
        <Label label="LG (480px - Company)">\r
          <Input {...args} width="lg" placeholder="Antigravity Inc." />\r
        </Label>\r
        <Label label="Custom (8ch - Always 8 chars)">\r
          <Input {...args} width="8ch" placeholder="12345678" />\r
        </Label>\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const f=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator","CustomWidth"],S=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomWidth:h,Default:c,Disabled:u,ErrorStatus:_,FullWidth:m,Ghost:p,Outline:i,SearchIndicator:y,SelectLike:l,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{h as C,c as D,_ as E,m as F,p as G,S as I,i as O,y as S,u as a,d as b};
