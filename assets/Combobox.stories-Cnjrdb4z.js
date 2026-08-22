"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Yr as c,t as l}from"./src-Ssuy8lr7.js";var u=e({Default:()=>m,Disabled:()=>g,WithIcon:()=>h,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Selection Controls/Combobox`,component:c,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},showSearchIcon:{control:`boolean`}}},p=()=>{let{t:e}=r(s);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_blueberry`),value:`blueberry`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:e(`story.fruit_grape`),value:`grape`},{label:e(`story.fruit_kiwi`),value:`kiwi`},{label:e(`story.fruit_lemon`),value:`lemon`},{label:e(`story.fruit_mango`),value:`mango`},{label:e(`story.fruit_orange`),value:`orange`},{label:e(`story.fruit_peach`),value:`peach`},{label:e(`story.fruit_pear`),value:`pear`},{label:e(`story.fruit_pineapple`),value:`pineapple`},{label:e(`story.fruit_strawberry`),value:`strawberry`},{label:e(`story.fruit_watermelon`),value:`watermelon`}]},m={render:function(e){let{t}=r(s),n=p(),i={noResults:t(`form:combobox.no_results`)};return(0,d.jsx)(c,{...e,label:t(`story.combobox_label`),options:n,placeholder:t(`story.combobox_placeholder`),labels:i})}},h={...m,args:{showSearchIcon:!0}},g={...m,args:{disabled:!0,defaultValue:`apple`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleOptions = useSampleOptions();
    const labels = {
      noResults: t("form:combobox.no_results")
    };
    return <Combobox {...args} label={t("story.combobox_label")} options={sampleOptions} placeholder={t("story.combobox_placeholder")} labels={labels} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    showSearchIcon: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    disabled: true,
    defaultValue: "apple"
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithIcon`,`Disabled`]}));v();export{m as Default,g as Disabled,h as WithIcon,_ as __namedExportsOrder,f as default,v as n,u as t};