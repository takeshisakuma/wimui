"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{n as s,t as c}from"./charts-Dg5J96mY.js";var l=e({Default:()=>p,FlatPeriod:()=>h,TemperatureRange:()=>m,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/CandlestickChart`,component:s},f=[{name:`Mon`,open:182.4,high:186.9,low:181.2,close:185.7},{name:`Tue`,open:185.7,high:188.1,low:184,close:184.6},{name:`Wed`,open:184.6,high:185.2,low:178.3,close:179.1},{name:`Thu`,open:179.1,high:183.4,low:178.8,close:182.9},{name:`Fri`,open:182.9,high:190.6,low:182.5,close:189.8}],p={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.candlestick_title_price`),data:f})}},m={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.candlestick_title_temperature`),height:340,data:[{name:t(`story.candlestick_day_mon`),open:14.2,high:21.8,low:12.9,close:19.4},{name:t(`story.candlestick_day_tue`),open:19.4,high:23.1,low:16,close:17.2},{name:t(`story.candlestick_day_wed`),open:17.2,high:18.4,low:11.6,close:12.1},{name:t(`story.candlestick_day_thu`),open:12.1,high:16.9,low:11.8,close:16.3},{name:t(`story.candlestick_day_fri`),open:16.3,high:24.5,low:16.1,close:24}]})}},h={render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,"aria-label":t(`story.candlestick_title_price`),height:260,data:[{name:`Mon`,open:182.4,high:186.9,low:181.2,close:185.7},{name:`Tue`,open:185.7,high:186.2,low:184.9,close:185.7},{name:`Wed`,open:185.7,high:188,low:183.1,close:183.9}]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CandlestickChart {...args} title={t("story.candlestick_title_price")} data={WEEK} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CandlestickChart {...args} title={t("story.candlestick_title_temperature")} height={340} data={[{
      name: t("story.candlestick_day_mon"),
      open: 14.2,
      high: 21.8,
      low: 12.9,
      close: 19.4
    }, {
      name: t("story.candlestick_day_tue"),
      open: 19.4,
      high: 23.1,
      low: 16.0,
      close: 17.2
    }, {
      name: t("story.candlestick_day_wed"),
      open: 17.2,
      high: 18.4,
      low: 11.6,
      close: 12.1
    }, {
      name: t("story.candlestick_day_thu"),
      open: 12.1,
      high: 16.9,
      low: 11.8,
      close: 16.3
    }, {
      name: t("story.candlestick_day_fri"),
      open: 16.3,
      high: 24.5,
      low: 16.1,
      close: 24.0
    }]} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`相場以外の四本値。**1 期間に 4 つの数がある**データなら同じ形で読める ──
ここは 1 日の気温（始値＝朝・終値＝夜・高値と安値がその日の幅）。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CandlestickChart {...args} aria-label={t("story.candlestick_title_price")} height={260} data={[{
      name: "Mon",
      open: 182.4,
      high: 186.9,
      low: 181.2,
      close: 185.7
    }, {
      name: "Tue",
      open: 185.7,
      high: 186.2,
      low: 184.9,
      close: 185.7
    }, {
      name: "Wed",
      open: 185.7,
      high: 188.0,
      low: 183.1,
      close: 183.9
    }]} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`動かなかった期間（始値＝終値）。実体が潰れても線として残る ──
何も描かないと「その期間のデータが無い」ように読まれる。`,...h.parameters?.docs?.description}}},g=[`Default`,`TemperatureRange`,`FlatPeriod`]}));_();export{p as Default,h as FlatPeriod,m as TemperatureRange,g as __namedExportsOrder,d as default,_ as n,l as t};