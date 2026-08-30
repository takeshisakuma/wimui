"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./Stack-z584y6QE.js";import{t as u}from"./Title-DgBJgLRP.js";import{O as d,g as f,t as p,v as m}from"./charts-Dg5J96mY.js";var h=e({Dashboard:()=>y,__namedExportsOrder:()=>b,default:()=>_}),g,_,v,y,b,x=t((()=>{n(),c(),p(),o(),i(),g=a(),_={title:`Components/Visualization/Charts`},v=[{name:`Jan`,sales:4e3,profit:2400},{name:`Feb`,sales:3e3,profit:1398},{name:`Mar`,sales:2e3,profit:9800}],y={render:function(){let{t:e}=r(s);return(0,g.jsxs)(l,{gap:`lg`,children:[(0,g.jsx)(u,{tag:`h3`,size:`lg`,children:e(`story.charts_overview_title`)}),(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`20px`},children:[(0,g.jsx)(d,{title:e(`story.charts_sales_by_month`),data:v,xAxisKey:`name`,keys:[`sales`]}),(0,g.jsx)(m,{title:e(`story.charts_profit_trend`),data:v,xAxisKey:`name`,keys:[`profit`]}),(0,g.jsx)(f,{title:e(`story.charts_market_share`),data:v.map(e=>({name:e.name,value:e.sales}))})]})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="lg">
      <Title tag="h3" size="lg">{t("story.charts_overview_title")}</Title>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <BarChart title={t("story.charts_sales_by_month")} data={data} xAxisKey="name" keys={["sales"]} />
        <LineChart title={t("story.charts_profit_trend")} data={data} xAxisKey="name" keys={["profit"]} />
        <PieChart title={t("story.charts_market_share")} data={data.map(d => ({
          name: d.name,
          value: d.sales
        }))} />
      </div>
    </Stack>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Dashboard`]}));x();export{y as Dashboard,b as __namedExportsOrder,_ as default,x as n,h as t};