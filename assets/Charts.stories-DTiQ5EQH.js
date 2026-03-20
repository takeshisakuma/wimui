import{j as a}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./BarChart-BNoIf4WD.js";import{L as i}from"./LineChart-DdOnFalv.js";import{P as o}from"./PieChart-CoXcOJEr.js";import{S as n}from"./Stack-CNputxjH.js";import{H as l}from"./Heading-C38SOJKq.js";const m={title:"Components/Visualization/Charts"},t=[{name:"Jan",sales:4e3,profit:2400},{name:"Feb",sales:3e3,profit:1398},{name:"Mar",sales:2e3,profit:9800}],e={render:()=>a.jsxs(n,{spacing:"large",children:[a.jsx(l,{tag:"h3",size:"lg",children:"Visualization Suite Overview"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px"},children:[a.jsx(s,{title:"Sales by Month",data:t,xAxisKey:"name",keys:["sales"]}),a.jsx(i,{title:"Profit Trend",data:t,xAxisKey:"name",keys:["profit"]}),a.jsx(o,{title:"Market Share",data:t.map(r=>({name:r.name,value:r.sales}))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing="large">\r
      <Heading tag="h3" size="lg">Visualization Suite Overview</Heading>\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }}>\r
        <BarChart title="Sales by Month" data={data} xAxisKey="name" keys={["sales"]} />\r
        <LineChart title="Profit Trend" data={data} xAxisKey="name" keys={["profit"]} />\r
        <PieChart title="Market Share" data={data.map(d => ({
        name: d.name,
        value: d.sales
      }))} />\r
      </div>\r
    </Stack>
}`,...e.parameters?.docs?.source}}};const d=["Dashboard"],u=Object.freeze(Object.defineProperty({__proto__:null,Dashboard:e,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{u as C,e as D};
