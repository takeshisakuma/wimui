"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-BlSd2eBr.js";import{n as u,t as d}from"./FieldError-C91ndX2s.js";import{n as f,t as p}from"./Input-Cx7cDmF1.js";var m=t({Clearable:()=>y,CustomWidth:()=>E,Danger:()=>S,Default:()=>_,Disabled:()=>C,FullWidth:()=>w,Ghost:()=>x,Outline:()=>b,SearchIndicator:()=>T,SelectLike:()=>v,__namedExportsOrder:()=>D,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),a(),u(),f(),c(),h=s(),g={title:`Components/Basic Inputs/Input`,component:p,parameters:{layout:`centered`},args:{width:`md`,fullWidth:!1,disabled:!1},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`ghost`]},intent:{control:`select`,options:[`default`,`danger`]},disabled:{control:`boolean`},leftIcon:{control:`select`,options:[`SearchIcon`]},rightIcon:{control:`select`,options:[`ChevronDownIcon`]},leftIconColor:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`,`info`,`disabled`]},rightIconColor:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`,`info`,`disabled`]},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]},fullWidth:{control:`boolean`}}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_name`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_name`)})})}},v={render:function(e){let{t}=r(o),n=()=>alert(`Dropdown or Modal would open here!`);return(0,h.jsx)(l,{label:t(`story.input_label_dept`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_dept`),onClick:n,onRightIconClick:e=>{e.stopPropagation(),n()},readOnly:!0,style:{cursor:`pointer`}})})},args:{rightIcon:`ChevronDownIcon`}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_keyword`),children:(0,h.jsx)(p,{...e,allowClear:!0,placeholder:t(`story.input_placeholder_keyword`),defaultValue:t(`story.input_value_keyword`)})})}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_company`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_company`)})})},args:{variant:`outline`}},x={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_remarks`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_remarks`)})})},args:{variant:`ghost`}},S={render:function(e){let{t}=r(o);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{label:t(`story.input_label_email`),required:!0,children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_email`),defaultValue:`invalid-email@`})}),(0,h.jsx)(d,{content:t(`story.input_error_email`)})]})},args:{intent:`danger`}},C={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_userid`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_userid`)})})},args:{disabled:!0}},w={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_contact`),style:{width:`100%`},children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_contact`)})})},args:{fullWidth:!0},parameters:{layout:`padded`}},T={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.input_label_search`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.input_placeholder_search`)})})},args:{leftIcon:`SearchIcon`}},E={render:function(e){let{t}=r(o);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,width:`100%`,maxWidth:`800px`},children:[(0,h.jsx)(l,{label:t(`story.input_width_xs`),children:(0,h.jsx)(p,{...e,width:`xs`,placeholder:`000`})}),(0,h.jsx)(l,{label:t(`story.input_width_sm`),children:(0,h.jsx)(p,{...e,width:`sm`,placeholder:`000-0000`})}),(0,h.jsx)(l,{label:t(`story.input_width_md`),children:(0,h.jsx)(p,{...e,width:`md`,placeholder:t(`story.input_placeholder_name`)})}),(0,h.jsx)(l,{label:t(`story.input_width_lg`),children:(0,h.jsx)(p,{...e,width:`lg`,placeholder:t(`story.input_placeholder_company`)})}),(0,h.jsx)(l,{label:t(`story.input_width_custom`),children:(0,h.jsx)(p,{...e,width:`8ch`,placeholder:`12345678`})})]})}},D=[`Default`,`SelectLike`,`Clearable`,`Outline`,`Ghost`,`Danger`,`Disabled`,`FullWidth`,`SearchIndicator`,`CustomWidth`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_name")}>
        <Input {...args} placeholder={t("story.input_placeholder_name")} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.input_label_keyword")}>
        <Input {...args} allowClear placeholder={t("story.input_placeholder_keyword")} defaultValue={t("story.input_value_keyword")} />
      </Label>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}export{w as a,b as c,C as i,T as l,E as n,x as o,S as r,m as s,y as t,O as u};