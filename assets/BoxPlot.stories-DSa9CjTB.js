"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{i as s,t as c}from"./charts-Dg5J96mY.js";var l=e({Default:()=>f,OrdersOfMagnitude:()=>m,SingleValueGroup:()=>h,SkewedDistributions:()=>p,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/BoxPlot`,component:s},f={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.boxplot_title_latency`),data:[{name:`/search`,min:41,q1:78,median:112,q3:189,max:402},{name:`/checkout`,min:96,q1:134,median:168,q3:214,max:318},{name:`/profile`,min:28,q1:39,median:47,q3:58,max:91},{name:`/upload`,min:120,q1:198,median:264,q3:372,max:548}]})}},p={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.boxplot_title_salary`),height:340,data:[{name:t(`story.boxplot_group_support`),min:32,q1:38,median:41,q3:46,max:58},{name:t(`story.boxplot_group_engineering`),min:58,q1:74,median:86,q3:118,max:210},{name:t(`story.boxplot_group_sales`),min:40,q1:49,median:55,q3:92,max:240}]})}},m={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.boxplot_title_latency`),height:300,data:[{name:`/search`,min:41,q1:78,median:112,q3:189,max:402},{name:`/checkout`,min:96,q1:134,median:168,q3:214,max:318},{name:`/profile`,min:28,q1:39,median:47,q3:58,max:91},{name:`/upload`,min:210,q1:388,median:604,q3:1120,max:2380}]})}},h={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,"aria-label":t(`story.boxplot_title_latency`),height:260,data:[{name:`/search`,min:41,q1:78,median:112,q3:189,max:402},{name:`/status`,min:12,q1:12,median:12,q3:12,max:12},{name:`/profile`,min:28,q1:39,median:47,q3:58,max:91}]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BoxPlot {...args} title={t("story.boxplot_title_latency")} data={[{
      name: "/search",
      min: 41,
      q1: 78,
      median: 112,
      q3: 189,
      max: 402
    }, {
      name: "/checkout",
      min: 96,
      q1: 134,
      median: 168,
      q3: 214,
      max: 318
    }, {
      name: "/profile",
      min: 28,
      q1: 39,
      median: 47,
      q3: 58,
      max: 91
    }, {
      name: "/upload",
      min: 120,
      q1: 198,
      median: 264,
      q3: 372,
      max: 548
    }]} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BoxPlot {...args} title={t("story.boxplot_title_salary")} height={340} data={[{
      name: t("story.boxplot_group_support"),
      min: 32,
      q1: 38,
      median: 41,
      q3: 46,
      max: 58
    }, {
      name: t("story.boxplot_group_engineering"),
      min: 58,
      q1: 74,
      median: 86,
      q3: 118,
      max: 210
    }, {
      name: t("story.boxplot_group_sales"),
      min: 40,
      q1: 49,
      median: 55,
      q3: 92,
      max: 240
    }]} />;
  }
}`,...p.parameters?.docs?.source},description:{story:`中央値が箱の真ん中に無いとき。**平均だけを棒で見ていると同じに見える群**が、
ここでは形で分かれる。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BoxPlot {...args} title={t("story.boxplot_title_latency")} height={300} data={[{
      name: "/search",
      min: 41,
      q1: 78,
      median: 112,
      q3: 189,
      max: 402
    }, {
      name: "/checkout",
      min: 96,
      q1: 134,
      median: 168,
      q3: 214,
      max: 318
    }, {
      name: "/profile",
      min: 28,
      q1: 39,
      median: 47,
      q3: 58,
      max: 91
    }, {
      name: "/upload",
      min: 210,
      q1: 388,
      median: 604,
      q3: 1120,
      max: 2380
    }]} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`群どうしで桁が違うとき。**1 つだけ桁の大きい群があると、他は線に潰れる** ──
図の限界であって欠陥ではないので、そのまま見せる（対数軸は持っていない）。
表には 5 つの数がそのまま出るので、潰れた群の値はそこで読める。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BoxPlot {...args} aria-label={t("story.boxplot_title_latency")} height={260} data={[{
      name: "/search",
      min: 41,
      q1: 78,
      median: 112,
      q3: 189,
      max: 402
    }, {
      name: "/status",
      min: 12,
      q1: 12,
      median: 12,
      q3: 12,
      max: 12
    }, {
      name: "/profile",
      min: 28,
      q1: 39,
      median: 47,
      q3: 58,
      max: 91
    }]} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`値が 1 つしか無い群（四分位範囲が 0）。箱が潰れても線として残る ──
何も描かないと「その群が無い」ように読まれる。`,...h.parameters?.docs?.description}}},g=[`Default`,`SkewedDistributions`,`OrdersOfMagnitude`,`SingleValueGroup`]}));_();export{f as Default,m as OrdersOfMagnitude,h as SingleValueGroup,p as SkewedDistributions,g as __namedExportsOrder,d as default,_ as n,l as t};