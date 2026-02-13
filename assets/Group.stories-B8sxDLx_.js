import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as o}from"./iframe-BRQWL27F.js";import{c as b}from"./index-DWoaxWMs.js";import{F as v}from"./Flex-CABQotg8.js";import{B as n}from"./Button-CRTzFfQx.js";const s=o.forwardRef(({align:p="center",justify:c="start",gap:d=16,wrap:u="wrap",grow:m=!1,children:i,className:g,...y},h)=>{const w=m?o.Children.map(i,l=>{if(o.isValidElement(l)){const f={flexGrow:1,...l.props.style};return o.cloneElement(l,{style:f})}return l}):i;return e.jsx(v,{ref:h,align:p,justify:c,gap:d,wrap:u,className:b("wim-group",g),...y,children:w})});s.displayName="Group";s.__docgenInfo={description:"Group component for horizontal layouts with spacing.",methods:[],displayName:"Group",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch" | "baseline"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'}]},description:"Vertical alignment",defaultValue:{value:'"center"',computed:!1}},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"evenly"'}]},description:"Horizontal alignment",defaultValue:{value:'"start"',computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between elements",defaultValue:{value:"16",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse"',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'}]},description:"Whether to wrap children",defaultValue:{value:'"wrap"',computed:!1}},grow:{required:!1,tsType:{name:"boolean"},description:"Whether items should grow to fill available space",defaultValue:{value:"false",computed:!1}}}};const x={title:"Component/Layout/Group",component:s,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"First",priority:"primary"}),e.jsx(n,{label:"Second",priority:"secondary"}),e.jsx(n,{label:"Third",priority:"tertiary"})]}),gap:16}},a={args:{grow:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"First",priority:"primary"}),e.jsx(n,{label:"Second",priority:"secondary"})]}),gap:16}},t={args:{align:"end",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),e.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),e.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
                <Button label="Third" priority="tertiary" />\r
            </>,
    gap: 16
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    grow: true,
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
            </>,
    gap: 16
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end",
    children: <>\r
                <div style={{
        height: "40px",
        width: "40px",
        backgroundColor: "#3b82f6"
      }} />\r
                <div style={{
        height: "80px",
        width: "40px",
        backgroundColor: "#10b981"
      }} />\r
                <div style={{
        height: "60px",
        width: "40px",
        backgroundColor: "#ef4444"
      }} />\r
            </>,
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};const j=["Basic","Grow","AlignEnd"],C=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:t,Basic:r,Grow:a,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{t as A,r as B,C as G,a};
