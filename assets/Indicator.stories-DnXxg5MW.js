import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./index-B3WcxRjv.js";import{A as n}from"./Avatar-BaXR0rcW.js";const a=({children:r,color:m="primary",size:u="medium",position:g="top-right",pulse:f=!1,inline:p=!1,className:v=""})=>{const h={small:"sm",medium:"md",large:"lg"},x=["wim-indicator__dot",`wim-indicator__dot--${m}`,`wim-indicator__dot--${h[u]}`,p?"":`wim-indicator__dot--${g}`,f?"wim-indicator__dot--pulse":""].filter(Boolean).join(" "),y=["wim-indicator",p?"wim-indicator--inline":"",v].filter(Boolean).join(" ");return e.jsxs("span",{className:y,children:[r,e.jsx("span",{className:x})]})};a.propTypes={children:s.node,color:s.oneOf(["primary","success","error","warning","neutral"]),size:s.oneOf(["small","medium","large"]),position:s.oneOf(["top-right","top-left","bottom-right","bottom-left"]),pulse:s.bool,inline:s.bool,className:s.string};a.__docgenInfo={description:"要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。",methods:[],displayName:"Indicator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"包む要素（inlineがfalseの場合）",type:{name:"node"}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "error" | "warning" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"neutral"'}]},description:"インジケーターの色",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"success"',computed:!1},{value:'"error"',computed:!1},{value:'"warning"',computed:!1},{value:'"neutral"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"インジケーターのサイズ",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"配置場所（childrenがある場合のみ有効）",defaultValue:{value:'"top-right"',computed:!1},type:{name:"enum",value:[{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"bottom-right"',computed:!1},{value:'"bottom-left"',computed:!1}]}},pulse:{required:!1,tsType:{name:"boolean"},description:"パルスアニメーションを有効にするか",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},inline:{required:!1,tsType:{name:"boolean"},description:"単体（ドットのみ）で表示するか",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const j={title:"Component/Data Display/Indicator",component:a,argTypes:{color:{control:"select",options:["primary","success","error","warning","neutral"]},size:{control:"select",options:["small","medium","large"]},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]}}},t={args:{children:e.jsx(n,{initials:"JD"}),color:"success",position:"bottom-right"}},i={render:r=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(a,{...r,color:"primary",children:e.jsx(n,{initials:"P"})}),e.jsx(a,{...r,color:"success",children:e.jsx(n,{initials:"S"})}),e.jsx(a,{...r,color:"warning",children:e.jsx(n,{initials:"W"})}),e.jsx(a,{...r,color:"error",children:e.jsx(n,{initials:"E"})}),e.jsx(a,{...r,color:"neutral",children:e.jsx(n,{initials:"N"})})]})},o={args:{children:e.jsx(n,{initials:"AL"}),color:"success",pulse:!0,position:"bottom-right"}},l={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{...r,color:"success",inline:!0}),e.jsx("span",{children:"Online"})]})},c={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx(a,{...r,size:"small",inline:!0}),e.jsx(a,{...r,size:"medium",inline:!0}),e.jsx(a,{...r,size:"large",inline:!0})]})},d={render:r=>e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsx(a,{...r,color:"error",children:e.jsx("div",{style:{padding:"8px",background:"#f0f0f0",borderRadius:"8px"},children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
            <Indicator {...args} color="success" inline />\r
            <span>Online</span>\r
        </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>\r
            <Indicator {...args} size="small" inline />\r
            <Indicator {...args} size="medium" inline />\r
            <Indicator {...args} size="large" inline />\r
        </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const I=["Default","Colors","Pulse","Inline","Sizes","WithIcons"],S=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:t,Inline:l,Pulse:o,Sizes:c,WithIcons:d,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,S as I,o as P,c as S,l as a};
