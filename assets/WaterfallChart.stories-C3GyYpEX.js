"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{o as s,t as c}from"./charts-Dg5J96mY.js";var l=e({Default:()=>f,GoesNegative:()=>m,WithSubtotal:()=>p,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/WaterfallChart`,component:s},f={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.waterfall_title_revenue`),data:[{name:t(`story.waterfall_step_revenue`),value:1840,total:!1},{name:t(`story.waterfall_step_cogs`),value:-620},{name:t(`story.waterfall_step_salaries`),value:-540},{name:t(`story.waterfall_step_marketing`),value:-180},{name:t(`story.waterfall_step_other`),value:-95},{name:t(`story.waterfall_step_profit`),value:0,total:!0}]})}},p={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.waterfall_title_headcount`),height:340,data:[{name:t(`story.waterfall_step_opening`),value:128},{name:t(`story.waterfall_step_hired`),value:21},{name:t(`story.waterfall_step_left`),value:-9},{name:t(`story.waterfall_step_midyear`),value:0,total:!0},{name:t(`story.waterfall_step_transferred`),value:6},{name:t(`story.waterfall_step_ended`),value:-4},{name:t(`story.waterfall_step_closing`),value:0,total:!0}]})}},m={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,"aria-label":t(`story.waterfall_title_cash`),height:280,data:[{name:t(`story.waterfall_step_opening`),value:240},{name:t(`story.waterfall_step_refunds`),value:-410},{name:t(`story.waterfall_step_topup`),value:120},{name:t(`story.waterfall_step_closing`),value:0,total:!0}]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <WaterfallChart {...args} title={t("story.waterfall_title_revenue")} data={[{
      name: t("story.waterfall_step_revenue"),
      value: 1840,
      total: false
    }, {
      name: t("story.waterfall_step_cogs"),
      value: -620
    }, {
      name: t("story.waterfall_step_salaries"),
      value: -540
    }, {
      name: t("story.waterfall_step_marketing"),
      value: -180
    }, {
      name: t("story.waterfall_step_other"),
      value: -95
    }, {
      name: t("story.waterfall_step_profit"),
      value: 0,
      total: true
    }]} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <WaterfallChart {...args} title={t("story.waterfall_title_headcount")} height={340} data={[{
      name: t("story.waterfall_step_opening"),
      value: 128
    }, {
      name: t("story.waterfall_step_hired"),
      value: 21
    }, {
      name: t("story.waterfall_step_left"),
      value: -9
    }, {
      name: t("story.waterfall_step_midyear"),
      value: 0,
      total: true
    }, {
      name: t("story.waterfall_step_transferred"),
      value: 6
    }, {
      name: t("story.waterfall_step_ended"),
      value: -4
    }, {
      name: t("story.waterfall_step_closing"),
      value: 0,
      total: true
    }]} />;
  }
}`,...p.parameters?.docs?.source},description:{story:"途中で小計を挟む形。**`total` の段は running total まで引く**ので、\nそこまでの積み上げが 1 本で読める。",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <WaterfallChart {...args} aria-label={t("story.waterfall_title_cash")} height={280} data={[{
      name: t("story.waterfall_step_opening"),
      value: 240
    }, {
      name: t("story.waterfall_step_refunds"),
      value: -410
    }, {
      name: t("story.waterfall_step_topup"),
      value: 120
    }, {
      name: t("story.waterfall_step_closing"),
      value: 0,
      total: true
    }]} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`合計が下に振れる場合。running total が 0 を割っても、棒は 0 をまたいで
正しい向きに描かれる。`,...m.parameters?.docs?.description}}},h=[`Default`,`WithSubtotal`,`GoesNegative`]}));g();export{f as Default,m as GoesNegative,p as WithSubtotal,h as __namedExportsOrder,d as default,g as n,l as t};