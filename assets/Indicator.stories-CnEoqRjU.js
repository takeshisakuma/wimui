import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./index-DGzbpm6y.js";import{A as s}from"./Avatar-DeXejhXQ.js";const a=({children:r,color:u="primary",size:d="medium",position:g="top-right",pulse:x=!1,inline:p=!1,className:f})=>e.jsxs("span",{className:m("wim-indicator",p&&"wim-indicator--inline",f),children:[r,e.jsx("span",{className:m("wim-indicator__dot",`wim-indicator__dot--${u}`,`wim-indicator__dot--${d==="small"?"sm":d==="large"?"lg":"md"}`,!p&&`wim-indicator__dot--${g}`,x&&"wim-indicator__dot--pulse")})]});a.__docgenInfo={description:"要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。",methods:[],displayName:"Indicator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "error" | "warning" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Component/Data Display/Indicator",component:a,argTypes:{color:{control:"select",options:["primary","success","error","warning","neutral"]},size:{control:"select",options:["small","medium","large"]},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]}}},n={args:{children:e.jsx(s,{initials:"JD"}),color:"success",position:"bottom-right"}},i={render:r=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(a,{...r,color:"primary",children:e.jsx(s,{initials:"P"})}),e.jsx(a,{...r,color:"success",children:e.jsx(s,{initials:"S"})}),e.jsx(a,{...r,color:"warning",children:e.jsx(s,{initials:"W"})}),e.jsx(a,{...r,color:"error",children:e.jsx(s,{initials:"E"})}),e.jsx(a,{...r,color:"neutral",children:e.jsx(s,{initials:"N"})})]})},t={args:{children:e.jsx(s,{initials:"AL"}),color:"success",pulse:!0,position:"bottom-right"}},o={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{...r,color:"success",inline:!0}),e.jsx("span",{children:"Online"})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx(a,{...r,size:"small",inline:!0}),e.jsx(a,{...r,size:"medium",inline:!0}),e.jsx(a,{...r,size:"large",inline:!0})]})},c={render:r=>e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsx(a,{...r,color:"error",children:e.jsx("div",{style:{padding:"8px",background:"#f0f0f0",borderRadius:"8px"},children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>\r
            <Indicator {...args} color="primary">\r
                <Avatar initials="P" />\r
            </Indicator>\r
            <Indicator {...args} color="success">\r
                <Avatar initials="S" />\r
            </Indicator>\r
            <Indicator {...args} color="warning">\r
                <Avatar initials="W" />\r
            </Indicator>\r
            <Indicator {...args} color="error">\r
                <Avatar initials="E" />\r
            </Indicator>\r
            <Indicator {...args} color="neutral">\r
                <Avatar initials="N" />\r
            </Indicator>\r
        </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
            <Indicator {...args} color="success" inline />\r
            <span>Online</span>\r
        </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>\r
            <Indicator {...args} size="small" inline />\r
            <Indicator {...args} size="medium" inline />\r
            <Indicator {...args} size="large" inline />\r
        </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>\r
            <Indicator {...args} color="error">\r
                <div style={{
        padding: "8px",
        background: "#f0f0f0",
        borderRadius: "8px"
      }}>\r
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />\r
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />\r
                    </svg>\r
                </div>\r
            </Indicator>\r
        </div>
}`,...c.parameters?.docs?.source}}};const v=["Default","Colors","Pulse","Inline","Sizes","WithIcons"],w=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:n,Inline:o,Pulse:t,Sizes:l,WithIcons:c,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,w as I,t as P,l as S,o as a};
