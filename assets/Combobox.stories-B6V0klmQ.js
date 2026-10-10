"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Combobox-fAtQ7UHq.js";import{n as u,t as d}from"./playOpen-BfHmRBb6.js";var f=t({Default:()=>g,Disabled:()=>v,Open:()=>y,WithIcon:()=>_,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),c(),d(),p=s(),m={title:`Components/Selection Controls/Combobox`,component:l,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},showSearchIcon:{control:`boolean`}}},h=()=>{let{t:e}=r(o);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_blueberry`),value:`blueberry`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:e(`story.fruit_grape`),value:`grape`},{label:e(`story.fruit_kiwi`),value:`kiwi`},{label:e(`story.fruit_lemon`),value:`lemon`},{label:e(`story.fruit_mango`),value:`mango`},{label:e(`story.fruit_orange`),value:`orange`},{label:e(`story.fruit_peach`),value:`peach`},{label:e(`story.fruit_pear`),value:`pear`},{label:e(`story.fruit_pineapple`),value:`pineapple`},{label:e(`story.fruit_strawberry`),value:`strawberry`},{label:e(`story.fruit_watermelon`),value:`watermelon`}]},g={render:function(e){let{t}=r(o),n=h(),i={noResults:t(`form:combobox.no_results`)};return(0,p.jsx)(l,{...e,label:t(`story.combobox_label`),options:n,placeholder:t(`story.combobox_placeholder`),labels:i})}},_={...g,args:{showSearchIcon:!0}},v={...g,args:{disabled:!0,defaultValue:`apple`}},y={...g,play:u},b=[`Default`,`WithIcon`,`Disabled`,`Open`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    showSearchIcon: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    disabled: true,
    defaultValue: "apple"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...y.parameters?.docs?.source}}}})))()}export{x as n,f as t};