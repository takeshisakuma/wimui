"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-MNZnjzfn.js";import{n as a,t as o}from"./i18nConstants-Dz9WmqoW.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Stack-SbfzwNKR.js";import{n as u,t as d}from"./Title-DOWsdfWR.js";import{n as f,t as p}from"./BarChart-Djt8e68S.js";import{n as m,t as h}from"./LineChart-qxnppAGP.js";import{n as g,t as _}from"./PieChart-C8ozDFB9.js";var v=t({Dashboard:()=>S,__namedExportsOrder:()=>C,default:()=>b}),y,b,x,S,C;function w(){return(w=e((()=>{n(),c(),u(),f(),m(),g(),i(),a(),y=s(),b={title:`Components/Visualization/Charts`},x=[{name:`Jan`,sales:4e3,profit:2400},{name:`Feb`,sales:3e3,profit:1398},{name:`Mar`,sales:2e3,profit:9800}],S={render:function(){let{t:e}=r(o);return(0,y.jsxs)(l,{gap:`lg`,children:[(0,y.jsx)(d,{tag:`h3`,size:`lg`,children:e(`story.charts_overview_title`)}),(0,y.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`20px`},children:[(0,y.jsx)(p,{title:e(`story.charts_sales_by_month`),data:x,xAxisKey:`name`,keys:[`sales`]}),(0,y.jsx)(h,{title:e(`story.charts_profit_trend`),data:x,xAxisKey:`name`,keys:[`profit`]}),(0,y.jsx)(_,{title:e(`story.charts_market_share`),data:x.map(e=>({name:e.name,value:e.sales}))})]})]})}},C=[`Dashboard`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{S as n,w as r,v as t};