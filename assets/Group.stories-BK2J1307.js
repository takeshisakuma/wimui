import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-CX-nbmQ1.js";import{P as r}from"./index-C9UxkZsF.js";import{F as h}from"./Flex-YfArIeOi.js";import{B as l}from"./Button-Ct4LNsBe.js";const i=s.forwardRef(({align:u="center",justify:c="start",gap:d=16,wrap:m="wrap",grow:g=!1,children:p,className:f,...y},v)=>{const w=g?s.Children.map(p,o=>{if(s.isValidElement(o)){const b={flexGrow:1,...o.props.style};return s.cloneElement(o,{style:b})}return o}):p;return e.jsx(h,{ref:v,align:u,justify:c,gap:d,wrap:m,className:["wim-group",f].filter(Boolean).join(" "),...y,children:w})});i.displayName="Group";i.propTypes={align:r.oneOf(["start","center","end","stretch","baseline"]),justify:r.oneOf(["start","center","end","between","around","evenly"]),gap:r.oneOfType([r.number,r.string]),wrap:r.oneOf(["nowrap","wrap","wrap-reverse"]),grow:r.bool};i.__docgenInfo={description:"Group component for horizontal layouts with spacing.",methods:[],displayName:"Group",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch" | "baseline"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'}]},description:"Vertical alignment",defaultValue:{value:'"center"',computed:!1},type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"stretch"',computed:!1},{value:'"baseline"',computed:!1}]}},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"evenly"'}]},description:"Horizontal alignment",defaultValue:{value:'"start"',computed:!1},type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between elements",defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]}},wrap:{required:!1,tsType:{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse"',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'}]},description:"Whether to wrap children",defaultValue:{value:'"wrap"',computed:!1},type:{name:"enum",value:[{value:'"nowrap"',computed:!1},{value:'"wrap"',computed:!1},{value:'"wrap-reverse"',computed:!1}]}},grow:{required:!1,tsType:{name:"boolean"},description:"Whether items should grow to fill available space",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const x={title:"Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"First",priority:"primary"}),e.jsx(l,{label:"Second",priority:"secondary"}),e.jsx(l,{label:"Third",priority:"tertiary"})]}),gap:16}},t={args:{grow:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"First",priority:"primary"}),e.jsx(l,{label:"Second",priority:"secondary"})]}),gap:16}},n={args:{align:"end",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),e.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),e.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
                <Button label="Third" priority="tertiary" />\r
            </>,
    gap: 16
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    grow: true,
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
            </>,
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const j=["Basic","Grow","AlignEnd"],_=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:n,Basic:a,Grow:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{n as A,a as B,_ as G,t as a};
