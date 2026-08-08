"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{l}from"./QueryBuilder-BvfWrLHb.js";var u=e({DecimalAndNegative:()=>_,Default:()=>p,NumericMode:()=>m,ShowSpinButton:()=>g,TextMode:()=>h,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Basic Inputs/NumberInput`,component:l,tags:[]},p={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,label:t(`story.numberinput_label`),placeholder:t(`story.numberinput_placeholder`)})}},m={args:{mode:`number`,hideSpinButton:!0,label:`Quantity`}},h={args:{mode:`text`,placeholder:`XXXX-XXXX-XXXX-XXXX`},render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,label:t(`story.numberinput_label_id`)})}},g={args:{mode:`number`,hideSpinButton:!1},render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,label:t(`story.numberinput_label_standard`)})}},_={args:{mode:`number`,allowDecimal:!0,allowNegative:!0,placeholder:`-123.45`},render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,label:t(`story.numberinput_label_decimal`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} label={t("story.numberinput_label")} placeholder={t("story.numberinput_placeholder")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: true,
    label: "Quantity"
  }
}`,...m.parameters?.docs?.source},description:{story:`数量の入力など、数値の増減が必要な場合（デフォルト）`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "text",
    placeholder: "XXXX-XXXX-XXXX-XXXX"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} label={t("story.numberinput_label_id")} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`クレジットカード番号やIDなど、「記号としての数字」を入力する場合`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: false
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} label={t("story.numberinput_label_standard")} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`ブラウザ標準のスピンボタンを表示したい場合`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    allowDecimal: true,
    allowNegative: true,
    placeholder: "-123.45"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} label={t("story.numberinput_label_decimal")} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`小数点や負の数を許可する場合`,..._.parameters?.docs?.description}}},v=[`Default`,`NumericMode`,`TextMode`,`ShowSpinButton`,`DecimalAndNegative`]}));y();export{_ as DecimalAndNegative,p as Default,m as NumericMode,g as ShowSpinButton,h as TextMode,v as __namedExportsOrder,f as default,y as n,u as t};