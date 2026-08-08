"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{a as l,r as u}from"./FieldTemplate-C0nkiaIz.js";import{t as d}from"./Input-Bi6gYF1O.js";var f=e({Clearable:()=>_,CustomWidth:()=>w,Danger:()=>b,Default:()=>h,Disabled:()=>x,FullWidth:()=>S,Ghost:()=>y,Outline:()=>v,SearchIndicator:()=>C,SelectLike:()=>g,__namedExportsOrder:()=>T,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{n(),o(),i(),c(),p=a(),m={title:`Components/Basic Inputs/Input`,component:d,parameters:{layout:`centered`},args:{width:`md`,fullWidth:!1,disabled:!1},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`ghost`]},intent:{control:`select`,options:[`default`,`danger`]},disabled:{control:`boolean`},leftIcon:{control:`select`,options:[`SearchIcon`]},rightIcon:{control:`select`,options:[`ChevronDownIcon`]},leftIconColor:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`,`info`,`disabled`]},rightIconColor:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`,`info`,`disabled`]},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]},fullWidth:{control:`boolean`}}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_name`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_name`)})})}},g={render:function(e){let{t}=r(s),n=()=>alert(`Dropdown or Modal would open here!`);return(0,p.jsx)(l,{label:t(`story.input_label_dept`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_dept`),onClick:n,onRightIconClick:e=>{e.stopPropagation(),n()},readOnly:!0,style:{cursor:`pointer`}})})},args:{rightIcon:`ChevronDownIcon`}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_keyword`),children:(0,p.jsx)(d,{...e,allowClear:!0,placeholder:t(`story.input_placeholder_keyword`),defaultValue:t(`story.input_value_keyword`)})})}},v={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_company`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_company`)})})},args:{variant:`outline`}},y={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_remarks`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_remarks`)})})},args:{variant:`ghost`}},b={render:function(e){let{t}=r(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(l,{label:t(`story.input_label_email`),required:!0,children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_email`),defaultValue:`invalid-email@`})}),(0,p.jsx)(u,{content:t(`story.input_error_email`)})]})},args:{intent:`danger`}},x={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_userid`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_userid`)})})},args:{disabled:!0}},S={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_contact`),style:{width:`100%`},children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_contact`)})})},args:{fullWidth:!0},parameters:{layout:`padded`}},C={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{label:t(`story.input_label_search`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.input_placeholder_search`)})})},args:{leftIcon:`SearchIcon`}},w={render:function(e){let{t}=r(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,width:`100%`,maxWidth:`800px`},children:[(0,p.jsx)(l,{label:t(`story.input_width_xs`),children:(0,p.jsx)(d,{...e,width:`xs`,placeholder:`000`})}),(0,p.jsx)(l,{label:t(`story.input_width_sm`),children:(0,p.jsx)(d,{...e,width:`sm`,placeholder:`000-0000`})}),(0,p.jsx)(l,{label:t(`story.input_width_md`),children:(0,p.jsx)(d,{...e,width:`md`,placeholder:t(`story.input_placeholder_name`)})}),(0,p.jsx)(l,{label:t(`story.input_width_lg`),children:(0,p.jsx)(d,{...e,width:`lg`,placeholder:t(`story.input_placeholder_company`)})}),(0,p.jsx)(l,{label:t(`story.input_width_custom`),children:(0,p.jsx)(d,{...e,width:`8ch`,placeholder:`12345678`})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_name")}>
        <Input {...args} placeholder={t("story.input_placeholder_name")} />
      </Label>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return <Label label={t("story.input_label_dept")}>
        <Input {...args} placeholder={t("story.input_placeholder_dept")} onClick={handleClick} onRightIconClick={(e: React.MouseEvent) => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_keyword")}>
        <Input {...args} allowClear placeholder={t("story.input_placeholder_keyword")} defaultValue={t("story.input_value_keyword")} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_company")}>
        <Input {...args} placeholder={t("story.input_placeholder_company")} />
      </Label>;
  },
  args: {
    variant: "outline"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_remarks")}>
        <Input {...args} placeholder={t("story.input_placeholder_remarks")} />
      </Label>;
  },
  args: {
    variant: "ghost"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Label label={t("story.input_label_email")} required>
          <Input {...args} placeholder={t("story.input_placeholder_email")} defaultValue="invalid-email@" />
        </Label>
        <FieldError content={t("story.input_error_email")} />
      </div>;
  },
  args: {
    intent: "danger"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_userid")}>
        <Input {...args} placeholder={t("story.input_placeholder_userid")} />
      </Label>;
  },
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_contact")} style={{
      width: "100%"
    }}>
        <Input {...args} placeholder={t("story.input_placeholder_contact")} />
      </Label>;
  },
  args: {
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_search")}>
        <Input {...args} placeholder={t("story.input_placeholder_search")} />
      </Label>;
  },
  args: {
    leftIcon: "SearchIcon"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "100%",
      maxWidth: "800px"
    }}>
        <Label label={t("story.input_width_xs")}>
          <Input {...args} width="xs" placeholder="000" />
        </Label>
        <Label label={t("story.input_width_sm")}>
          <Input {...args} width="sm" placeholder="000-0000" />
        </Label>
        <Label label={t("story.input_width_md")}>
          <Input {...args} width="md" placeholder={t("story.input_placeholder_name")} />
        </Label>
        <Label label={t("story.input_width_lg")}>
          <Input {...args} width="lg" placeholder={t("story.input_placeholder_company")} />
        </Label>
        <Label label={t("story.input_width_custom")}>
          <Input {...args} width="8ch" placeholder="12345678" />
        </Label>
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`SelectLike`,`Clearable`,`Outline`,`Ghost`,`Danger`,`Disabled`,`FullWidth`,`SearchIndicator`,`CustomWidth`]}));E();export{_ as Clearable,w as CustomWidth,b as Danger,h as Default,x as Disabled,S as FullWidth,y as Ghost,v as Outline,C as SearchIndicator,g as SelectLike,T as __namedExportsOrder,m as default,E as n,f as t};