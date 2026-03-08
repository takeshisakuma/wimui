import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as o}from"./Input-CexK4HfL.js";import{L as t}from"./Label-CMMBwsEf.js";import{F as g}from"./FieldError-BVHj7AXI.js";import{u as l}from"./useTranslation-CZ9vchf1.js";const f={title:"Components/Basic Inputs/Input",component:o,parameters:{layout:"centered"},args:{width:"md",fullWidth:!1},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},width:{control:"select",options:["xs","sm","md","lg","xl","100%","200px","10ch"]},fullWidth:{control:"boolean"}}},s={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_name"),children:e.jsx(o,{...n,placeholder:r("story_input_placeholder_name")})})}},c={render:function(n){const{t:r}=l(["docs","common","components"]),y=()=>alert("Dropdown or Modal would open here!");return e.jsx(t,{label:r("story_input_label_dept"),children:e.jsx(o,{...n,placeholder:r("story_input_placeholder_dept"),onClick:y,onRightIconClick:x=>{x.stopPropagation(),y()},readOnly:!0,style:{cursor:"pointer"}})})},args:{rightIcon:"ChevronDownIcon"}},d={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_keyword"),children:e.jsx(o,{...n,allowClear:!0,placeholder:r("story_input_placeholder_keyword"),defaultValue:r("story_input_value_keyword")})})}},i={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_company"),children:e.jsx(o,{...n,variant:"outline",placeholder:r("story_input_placeholder_company")})})}},p={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_remarks"),children:e.jsx(o,{...n,variant:"ghost",placeholder:r("story_input_placeholder_remarks")})})}},u={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{label:r("story_input_label_email"),required:!0,children:e.jsx(o,{...n,state:"error",placeholder:r("story_input_placeholder_email"),defaultValue:"invalid-email@"})}),e.jsx(g,{content:r("story_input_error_email")})]})}},m={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_userid"),children:e.jsx(o,{...n,disabled:!0,placeholder:r("story_input_placeholder_userid")})})}},_={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_contact"),style:{width:"100%"},children:e.jsx(o,{...n,fullWidth:!0,placeholder:r("story_input_placeholder_contact")})})},parameters:{layout:"padded"}},h={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(t,{label:r("story_input_label_search"),children:e.jsx(o,{...n,leftIcon:"SearchIcon",placeholder:r("story_input_placeholder_search")})})}},b={render:function(n){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%",maxWidth:"800px"},children:[e.jsx(t,{label:"XS (80px - Secure Code)",children:e.jsx(o,{...n,width:"xs",placeholder:"000"})}),e.jsx(t,{label:"SM (160px - Zip Code)",children:e.jsx(o,{...n,width:"sm",placeholder:"000-0000"})}),e.jsx(t,{label:"MD (320px - Name)",children:e.jsx(o,{...n,width:"md",placeholder:"John Doe"})}),e.jsx(t,{label:"LG (480px - Company)",children:e.jsx(o,{...n,width:"lg",placeholder:"Antigravity Inc."})}),e.jsx(t,{label:"Custom (8ch - Always 8 chars)",children:e.jsx(o,{...n,width:"8ch",placeholder:"12345678"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_input_label_name")}>\r
        <Input {...args} placeholder={t("story_input_placeholder_name")} />\r
      </Label>;
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const I=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator","CustomWidth"],v=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomWidth:b,Default:s,Disabled:m,ErrorStatus:u,FullWidth:_,Ghost:p,Outline:i,SearchIndicator:h,SelectLike:c,__namedExportsOrder:I,default:f},Symbol.toStringTag,{value:"Module"}));export{b as C,s as D,u as E,_ as F,p as G,v as I,i as O,h as S,m as a,d as b};
