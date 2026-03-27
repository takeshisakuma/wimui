import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as t}from"./Input-C0zTMgmd.js";import{L as a}from"./FieldTemplate-P7FN0ymT.js";import{F as g}from"./FieldError-CRDZ3YVx.js";import{A as o}from"./iframe-Dy1bRiAG.js";import{u as s}from"./useTranslation-bjPpwDUm.js";const L={title:"Components/Basic Inputs/Input",component:t,parameters:{layout:"centered"},args:{width:"md",fullWidth:!1,disabled:!1},argTypes:{disabled:{control:"boolean"},leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},width:{control:"select",options:["xs","sm","md","lg","xl","100%","200px","10ch"]},fullWidth:{control:"boolean"}}},c={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_name"),children:e.jsx(t,{...n,placeholder:r("story_input_placeholder_name")})})}},i={render:function(n){const{t:r}=s(o),x=()=>alert("Dropdown or Modal would open here!");return e.jsx(a,{label:r("story_input_label_dept"),children:e.jsx(t,{...n,placeholder:r("story_input_placeholder_dept"),onClick:x,onRightIconClick:f=>{f.stopPropagation(),x()},readOnly:!0,style:{cursor:"pointer"}})})},args:{rightIcon:"ChevronDownIcon"}},d={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_keyword"),children:e.jsx(t,{...n,allowClear:!0,placeholder:r("story_input_placeholder_keyword"),defaultValue:r("story_input_value_keyword")})})}},p={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_company"),children:e.jsx(t,{...n,variant:"outline",placeholder:r("story_input_placeholder_company")})})}},u={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_remarks"),children:e.jsx(t,{...n,variant:"ghost",placeholder:r("story_input_placeholder_remarks")})})}},_={render:function(n){const{t:r}=s(o);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{label:r("story_input_label_email"),required:!0,children:e.jsx(t,{...n,status:"error",placeholder:r("story_input_placeholder_email"),defaultValue:"invalid-email@"})}),e.jsx(g,{content:r("story_input_error_email")})]})}},h={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_userid"),children:e.jsx(t,{...n,disabled:!0,placeholder:r("story_input_placeholder_userid")})})}},m={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_contact"),style:{width:"100%"},children:e.jsx(t,{...n,fullWidth:!0,placeholder:r("story_input_placeholder_contact")})})},parameters:{layout:"padded"}},b={render:function(n){const{t:r}=s(o);return e.jsx(a,{label:r("story_input_label_search"),children:e.jsx(t,{...n,leftIcon:"SearchIcon",placeholder:r("story_input_placeholder_search")})})}},y={render:function(n){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%",maxWidth:"800px"},children:[e.jsx(a,{label:"XS (80px - Secure Code)",children:e.jsx(t,{...n,width:"xs",placeholder:"000"})}),e.jsx(a,{label:"SM (160px - Zip Code)",children:e.jsx(t,{...n,width:"sm",placeholder:"000-0000"})}),e.jsx(a,{label:"MD (320px - Name)",children:e.jsx(t,{...n,width:"md",placeholder:"John Doe"})}),e.jsx(a,{label:"LG (480px - Company)",children:e.jsx(t,{...n,width:"lg",placeholder:"Antigravity Inc."})}),e.jsx(a,{label:"Custom (8ch - Always 8 chars)",children:e.jsx(t,{...n,width:"8ch",placeholder:"12345678"})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_name")}>
        <Input {...args} placeholder={t("story_input_placeholder_name")} />
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return <Label label={t("story_input_label_dept")}>
        <Input {...args} placeholder={t("story_input_placeholder_dept")} onClick={handleClick} onRightIconClick={(e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent duplicate alert
        handleClick();
      }} readOnly={true} style={{
        cursor: "pointer"
      }} />
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
    return <Label label={t("story_input_label_keyword")}>
        <Input {...args} allowClear placeholder={t("story_input_placeholder_keyword")} defaultValue={t("story_input_value_keyword")} />
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_company")}>
        <Input {...args} variant="outline" placeholder={t("story_input_placeholder_company")} />
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_remarks")}>
        <Input {...args} variant="ghost" placeholder={t("story_input_placeholder_remarks")} />
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
    }}>
        <Label label={t("story_input_label_email")} required>
          <Input {...args} status="error" placeholder={t("story_input_placeholder_email")} defaultValue="invalid-email@" />
        </Label>
        <FieldError content={t("story_input_error_email")} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_userid")}>
        <Input {...args} disabled={true} placeholder={t("story_input_placeholder_userid")} />
      </Label>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_input_label_contact")} style={{
      width: "100%"
    }}>
        <Input {...args} fullWidth={true} placeholder={t("story_input_placeholder_contact")} />
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
    return <Label label={t("story_input_label_search")}>
        <Input {...args} leftIcon="SearchIcon" placeholder={t("story_input_placeholder_search")} />
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
    }}>
        <Label label="XS (80px - Secure Code)">
          <Input {...args} width="xs" placeholder="000" />
        </Label>
        <Label label="SM (160px - Zip Code)">
          <Input {...args} width="sm" placeholder="000-0000" />
        </Label>
        <Label label="MD (320px - Name)">
          <Input {...args} width="md" placeholder="John Doe" />
        </Label>
        <Label label="LG (480px - Company)">
          <Input {...args} width="lg" placeholder="Antigravity Inc." />
        </Label>
        <Label label="Custom (8ch - Always 8 chars)">
          <Input {...args} width="8ch" placeholder="12345678" />
        </Label>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const S=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator","CustomWidth"],E=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomWidth:y,Default:c,Disabled:h,ErrorStatus:_,FullWidth:m,Ghost:u,Outline:p,SearchIndicator:b,SelectLike:i,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{y as C,c as D,_ as E,m as F,u as G,E as I,p as O,b as S,h as a,d as b};
