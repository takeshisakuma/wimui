import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as t}from"./Input-CJiKxRYT.js";import{L as a}from"./FieldTemplate-BYgWsXah.js";import{F as f}from"./FieldError-BxzApOwn.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u as s}from"./useTranslation-BxKydHqK.js";const L={title:"Components/Basic Inputs/Input",component:t,parameters:{layout:"centered"},args:{width:"md",fullWidth:!1},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},width:{control:"select",options:["xs","sm","md","lg","xl","100%","200px","10ch"]},fullWidth:{control:"boolean"}}},c={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_name"),children:e.jsx(t,{...n,placeholder:r("story_input_placeholder_name")})})}},i={render:function(n){const{t:r}=s(l),x=()=>alert("Dropdown or Modal would open here!");return e.jsx(a,{label:r("story_input_label_dept"),children:e.jsx(t,{...n,placeholder:r("story_input_placeholder_dept"),onClick:x,onRightIconClick:g=>{g.stopPropagation(),x()},readOnly:!0,style:{cursor:"pointer"}})})},args:{rightIcon:"ChevronDownIcon"}},d={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_keyword"),children:e.jsx(t,{...n,allowClear:!0,placeholder:r("story_input_placeholder_keyword"),defaultValue:r("story_input_value_keyword")})})}},p={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_company"),children:e.jsx(t,{...n,variant:"outline",placeholder:r("story_input_placeholder_company")})})}},u={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_remarks"),children:e.jsx(t,{...n,variant:"ghost",placeholder:r("story_input_placeholder_remarks")})})}},_={render:function(n){const{t:r}=s(l);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{label:r("story_input_label_email"),required:!0,children:e.jsx(t,{...n,status:"error",placeholder:r("story_input_placeholder_email"),defaultValue:"invalid-email@"})}),e.jsx(f,{content:r("story_input_error_email")})]})}},h={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_userid"),children:e.jsx(t,{...n,disabled:!0,placeholder:r("story_input_placeholder_userid")})})}},m={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_contact"),style:{width:"100%"},children:e.jsx(t,{...n,fullWidth:!0,placeholder:r("story_input_placeholder_contact")})})},parameters:{layout:"padded"}},b={render:function(n){const{t:r}=s(l);return e.jsx(a,{label:r("story_input_label_search"),children:e.jsx(t,{...n,leftIcon:"SearchIcon",placeholder:r("story_input_placeholder_search")})})}},y={render:function(n){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%",maxWidth:"800px"},children:[e.jsx(a,{label:"XS (80px - Secure Code)",children:e.jsx(t,{...n,width:"xs",placeholder:"000"})}),e.jsx(a,{label:"SM (160px - Zip Code)",children:e.jsx(t,{...n,width:"sm",placeholder:"000-0000"})}),e.jsx(a,{label:"MD (320px - Name)",children:e.jsx(t,{...n,width:"md",placeholder:"John Doe"})}),e.jsx(a,{label:"LG (480px - Company)",children:e.jsx(t,{...n,width:"lg",placeholder:"Antigravity Inc."})}),e.jsx(a,{label:"Custom (8ch - Always 8 chars)",children:e.jsx(t,{...n,width:"8ch",placeholder:"12345678"})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_name")}>\r
        <Input {...args} placeholder={t("story_input_placeholder_name")} />\r
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_keyword")}>\r
        <Input {...args} allowClear placeholder={t("story_input_placeholder_keyword")} defaultValue={t("story_input_value_keyword")} />\r
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_company")}>\r
        <Input {...args} variant="outline" placeholder={t("story_input_placeholder_company")} />\r
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_remarks")}>\r
        <Input {...args} variant="ghost" placeholder={t("story_input_placeholder_remarks")} />\r
      </Label>;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_userid")}>\r
        <Input {...args} disabled={true} placeholder={t("story_input_placeholder_userid")} />\r
      </Label>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_contact")} style={{
      width: "100%"
    }}>\r
        <Input {...args} fullWidth={true} placeholder={t("story_input_placeholder_contact")} />\r
      </Label>;
  },
  parameters: {
    layout: "padded"
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_search")}>\r
        <Input {...args} leftIcon="SearchIcon" placeholder={t("story_input_placeholder_search")} />\r
      </Label>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const S=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator","CustomWidth"],E=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomWidth:y,Default:c,Disabled:h,ErrorStatus:_,FullWidth:m,Ghost:u,Outline:p,SearchIndicator:b,SelectLike:i,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{y as C,c as D,_ as E,m as F,u as G,E as I,p as O,b as S,h as a,d as b};
