import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as o}from"./Input-D7gMXT4N.js";import{L as t}from"./Label-DAfkqEiJ.js";import{F as f}from"./FieldError-oPnx5mNM.js";import{u as a}from"./useTranslation-2PVo7Ynq.js";const g={title:"Components/Basic Inputs/Input",component:o,parameters:{layout:"centered"},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]}}},l={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_name"),children:r.jsx(o,{...n,placeholder:e("story_input_placeholder_name")})})}},c={render:function(n){const{t:e}=a(["docs","common","components"]),y=()=>alert("Dropdown or Modal would open here!");return r.jsx(t,{label:e("story_input_label_dept"),children:r.jsx(o,{...n,placeholder:e("story_input_placeholder_dept"),onClick:y,onRightIconClick:b=>{b.stopPropagation(),y()},readOnly:!0,style:{cursor:"pointer"}})})},args:{rightIcon:"ChevronDownIcon"}},d={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_keyword"),children:r.jsx(o,{...n,allowClear:!0,placeholder:e("story_input_placeholder_keyword"),defaultValue:e("story_input_value_keyword")})})}},i={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_company"),children:r.jsx(o,{...n,variant:"outline",placeholder:e("story_input_placeholder_company")})})}},p={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_remarks"),children:r.jsx(o,{...n,variant:"ghost",placeholder:e("story_input_placeholder_remarks")})})}},u={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(t,{label:e("story_input_label_email"),required:!0,children:r.jsx(o,{...n,state:"error",placeholder:e("story_input_placeholder_email"),defaultValue:"invalid-email@"})}),r.jsx(f,{content:e("story_input_error_email")})]})}},m={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_userid"),children:r.jsx(o,{...n,disabled:!0,placeholder:e("story_input_placeholder_userid")})})}},_={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_contact"),style:{width:"100%"},children:r.jsx(o,{...n,fullWidth:!0,placeholder:e("story_input_placeholder_contact")})})},parameters:{layout:"padded"}},h={render:function(n){const{t:e}=a(["docs","common","components"]);return r.jsx(t,{label:e("story_input_label_search"),children:r.jsx(o,{...n,leftIcon:"SearchIcon",placeholder:e("story_input_placeholder_search")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_name")}>\r
        <Input {...args} placeholder={t("story_input_placeholder_name")} />\r
      </Label>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_keyword")}>\r
        <Input {...args} allowClear placeholder={t("story_input_placeholder_keyword")} defaultValue={t("story_input_value_keyword")} />\r
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_company")}>\r
        <Input {...args} variant="outline" placeholder={t("story_input_placeholder_company")} />\r
      </Label>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_remarks")}>\r
        <Input {...args} variant="ghost" placeholder={t("story_input_placeholder_remarks")} />\r
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label label={t("story_input_label_email")} required>\r
          <Input {...args} state="error" placeholder={t("story_input_placeholder_email")} defaultValue="invalid-email@" />\r
        </Label>\r
        <FieldError content={t("story_input_error_email")} />\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_userid")}>\r
        <Input {...args} disabled={true} placeholder={t("story_input_placeholder_userid")} />\r
      </Label>;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_contact")} style={{
      width: "100%"
    }}>\r
        <Input {...args} fullWidth={true} placeholder={t("story_input_placeholder_contact")} />\r
      </Label>;
  },
  parameters: {
    layout: "padded"
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_search")}>\r
        <Input {...args} leftIcon="SearchIcon" placeholder={t("story_input_placeholder_search")} />\r
      </Label>;
  }
}`,...h.parameters?.docs?.source}}};const I=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator"],S=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,Default:l,Disabled:m,ErrorStatus:u,FullWidth:_,Ghost:p,Outline:i,SearchIndicator:h,SelectLike:c,__namedExportsOrder:I,default:g},Symbol.toStringTag,{value:"Module"}));export{d as C,l as D,u as E,_ as F,p as G,S as I,i as O,h as S,m as a};
