import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Stats-DcmejUY-.js";const l={title:"Component/Data Structures/Stats",component:r,parameters:{layout:"centered"},tags:[]},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Label,{children:"Total Users"}),e.jsx(r.Value,{children:"1,234"}),e.jsx(r.Description,{children:"+12.5% from last month"})]})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Label,{children:"Revenue"}),e.jsx(r.Value,{children:"$45,231.89"}),e.jsx(r.Trend,{direction:"up",children:"+20.1%"})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Label,{children:"Active Alerts"}),e.jsx(r.Value,{children:"12"}),e.jsx(r.Trend,{direction:"down",children:"-5%"})]})}},n={args:{variant:"outline",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Label,{children:"Page Views"}),e.jsx(r.Value,{children:"12,456"}),e.jsx(r.Trend,{direction:"neutral",children:"0%"})]})}},i={args:{variant:"flat",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Label,{children:"Avg. Session Time"}),e.jsx(r.Value,{children:"2m 34s"}),e.jsx(r.Description,{children:"Sessions over 5 minutes"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Total Users</Stats.Label>\r
                <Stats.Value>1,234</Stats.Value>\r
                <Stats.Description>+12.5% from last month</Stats.Description>\r
            </>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Revenue</Stats.Label>\r
                <Stats.Value>$45,231.89</Stats.Value>\r
                <Stats.Trend direction="up">+20.1%</Stats.Trend>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Active Alerts</Stats.Label>\r
                <Stats.Value>12</Stats.Value>\r
                <Stats.Trend direction="down">-5%</Stats.Trend>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: <>\r
                <Stats.Label>Page Views</Stats.Label>\r
                <Stats.Value>12,456</Stats.Value>\r
                <Stats.Trend direction="neutral">0%</Stats.Trend>\r
            </>
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "flat",
    children: <>\r
                <Stats.Label>Avg. Session Time</Stats.Label>\r
                <Stats.Value>2m 34s</Stats.Value>\r
                <Stats.Description>Sessions over 5 minutes</Stats.Description>\r
            </>
  }
}`,...i.parameters?.docs?.source}}};const o=["Default","WithTrend","NegativeTrend","Outline","Flat"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Flat:i,NegativeTrend:s,Outline:n,WithTrend:a,__namedExportsOrder:o,default:l},Symbol.toStringTag,{value:"Module"}));export{t as D,i as F,n as O,u as S,a as W};
