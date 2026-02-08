import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as n}from"./index-DwRpkF7n.js";const a=({variant:t="default",className:s="",children:r,...u})=>{const p=["wim-stats",`wim-stats--${t}`,s].filter(Boolean).join(" ");return e.jsx("div",{className:p,...u,children:r})},m=({className:t="",children:s,...r})=>e.jsx("div",{className:["wim-stats__label",t].filter(Boolean).join(" "),...r,children:s}),f=({className:t="",children:s,...r})=>e.jsx("div",{className:["wim-stats__value",t].filter(Boolean).join(" "),...r,children:s}),h=({className:t="",children:s,...r})=>e.jsx("div",{className:["wim-stats__description",t].filter(Boolean).join(" "),...r,children:s}),v=({direction:t="up",className:s="",children:r,...u})=>{const p=["wim-stats__trend",`wim-stats__trend--${t}`,s].filter(Boolean).join(" ");return e.jsxs("div",{className:p,...u,children:[e.jsxs("span",{className:"wim-stats__trend-icon",children:[t==="up"&&"↑",t==="down"&&"↓",t==="neutral"&&"→"]}),e.jsx("span",{className:"wim-stats__trend-value",children:r})]})};a.Label=m;a.Value=f;a.Description=h;a.Trend=v;a.propTypes={variant:n.oneOf(["default","outline","flat"]),className:n.string,children:n.node};m.propTypes={className:n.string,children:n.node};f.propTypes={className:n.string,children:n.node};h.propTypes={className:n.string,children:n.node};v.propTypes={direction:n.oneOf(["up","down","neutral"]),className:n.string,children:n.node};a.__docgenInfo={description:"`Stats` は統計情報やメトリクスを表示するためのコンポーネントです。",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Value",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Trend",docblock:null,modifiers:["static"],params:[{name:`{\r
    direction = "up",\r
    className = "",\r
    children,\r
    ...props\r
}: StatsTrendProps`,optional:!1,type:{name:"intersection",raw:`React.ComponentPropsWithoutRef<"div"> & {\r
    direction?: "up" | "down" | "neutral";\r
}`,elements:[{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}]},{name:"signature",type:"object",raw:`{\r
    direction?: "up" | "down" | "neutral";\r
}`,signature:{properties:[{key:"direction",value:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}],required:!1}}]}}],alias:"StatsTrendProps"}}],returns:null}],displayName:"Stats",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline" | "flat"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"flat"'}]},description:"バリアント",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"outline"',computed:!1},{value:'"flat"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"StatsLabel",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"StatsValue",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"StatsDescription",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"StatsTrend",props:{direction:{required:!1,tsType:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"up"',computed:!1},type:{name:"enum",value:[{value:'"up"',computed:!1},{value:'"down"',computed:!1},{value:'"neutral"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const S={title:"Component/Data Display/Stats",component:a,parameters:{layout:"centered"},tags:[]},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{children:"Total Users"}),e.jsx(a.Value,{children:"1,234"}),e.jsx(a.Description,{children:"+12.5% from last month"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{children:"Revenue"}),e.jsx(a.Value,{children:"$45,231.89"}),e.jsx(a.Trend,{direction:"up",children:"+20.1%"})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{children:"Active Alerts"}),e.jsx(a.Value,{children:"12"}),e.jsx(a.Trend,{direction:"down",children:"-5%"})]})}},d={args:{variant:"outline",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{children:"Page Views"}),e.jsx(a.Value,{children:"12,456"}),e.jsx(a.Trend,{direction:"neutral",children:"0%"})]})}},c={args:{variant:"flat",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{children:"Avg. Session Time"}),e.jsx(a.Value,{children:"2m 34s"}),e.jsx(a.Description,{children:"Sessions over 5 minutes"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Total Users</Stats.Label>\r
                <Stats.Value>1,234</Stats.Value>\r
                <Stats.Description>+12.5% from last month</Stats.Description>\r
            </>
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Revenue</Stats.Label>\r
                <Stats.Value>$45,231.89</Stats.Value>\r
                <Stats.Trend direction="up">+20.1%</Stats.Trend>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Stats.Label>Active Alerts</Stats.Label>\r
                <Stats.Value>12</Stats.Value>\r
                <Stats.Trend direction="down">-5%</Stats.Trend>\r
            </>
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: <>\r
                <Stats.Label>Page Views</Stats.Label>\r
                <Stats.Value>12,456</Stats.Value>\r
                <Stats.Trend direction="neutral">0%</Stats.Trend>\r
            </>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "flat",
    children: <>\r
                <Stats.Label>Avg. Session Time</Stats.Label>\r
                <Stats.Value>2m 34s</Stats.Value>\r
                <Stats.Description>Sessions over 5 minutes</Stats.Description>\r
            </>
  }
}`,...c.parameters?.docs?.source}}};const g=["Default","WithTrend","NegativeTrend","Outline","Flat"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Flat:c,NegativeTrend:i,Outline:d,WithTrend:o,__namedExportsOrder:g,default:S},Symbol.toStringTag,{value:"Module"}));export{l as D,c as F,d as O,R as S,o as W};
