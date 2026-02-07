import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-Crv0YLlY.js";import{P as n}from"./index-BvaeNIBZ.js";import{I}from"./Icon-CAn7HOZQ.js";import{u as k}from"./useTranslation-DOFYQsOx.js";const c=({size:t="medium",label:a,shrink:m=!1,iconName:o,position:p="static","aria-label":f,className:g,...h})=>{const{t:u}=k(),b=`wim-fab--${{small:"sm",medium:"md",large:"lg"}[t]}`,v=`wim-fab--${p}`,x=a?"wim-fab--extended":"",y=m?"wim-fab--shrink":"";return e.jsx("button",{type:"button",className:["wim-fab",b,v,x,y,g].filter(Boolean).join(" "),"aria-label":f||(a?u(a):o),...h,children:e.jsxs("span",{className:"wim-fab__inner",children:[e.jsx(I,{name:o,size:t}),a&&e.jsx("span",{className:"wim-fab__label-wrapper",children:e.jsx("span",{className:"wim-fab__label",children:u(a)})})]})})};c.propTypes={size:n.oneOf(["small","medium","large"]),label:n.string,shrink:n.bool,iconName:n.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]).isRequired,position:n.oneOf(["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]),"aria-label":n.string};c.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},shrink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},iconName:{required:!0,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}]},description:"",type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalLinkIcon"',computed:!1}]}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"",defaultValue:{value:'"static"',computed:!1},type:{name:"enum",value:[{value:'"bottom-right"',computed:!1},{value:'"bottom-left"',computed:!1},{value:'"bottom-center"',computed:!1},{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"static"',computed:!1}]}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const w={title:"Component/General/Fab",component:c,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},iconName:{control:"select",options:["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]},shrink:{control:"boolean"}}},r={args:{iconName:"CircleIcon",label:"",position:"static"}},s={args:{iconName:"CircleIcon",label:"送信する",position:"static",shrink:!1}},i={args:{iconName:"CircleIcon",label:"スクロールして縮小",position:"static",shrink:!1},render:t=>e.jsx(S,{...t})},l={parameters:{layout:"fullscreen"},args:{iconName:"CircleIcon",position:"bottom-right"},render:t=>e.jsxs("div",{style:{height:"300px",width:"100%",position:"relative"},children:[e.jsx("p",{style:{padding:"20px"},children:"スクロール可能な背景の例..."}),e.jsx(c,{...t})]})},S=t=>{const[a,m]=d.useState(!1),o=d.useRef(null),p=()=>{m(!0),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{m(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:p,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:"Please scroll inside this area"})})}),e.jsx(c,{...t,shrink:a,style:{position:"absolute",zIndex:10,...t.position==="static"||!t.position?{bottom:"20px",right:"20px"}:{},...t.style}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "",
    position: "static"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "送信する",
    position: "static",
    shrink: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "スクロールして縮小",
    position: "static",
    shrink: false
  },
  render: args => <AutoShrinkDemo {...args} />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    iconName: "CircleIcon",
    position: "bottom-right"
  },
  render: args => <div style={{
    height: "300px",
    width: "100%",
    position: "relative"
  }}>\r
            <p style={{
      padding: "20px"
    }}>スクロール可能な背景の例...</p>\r
            <Fab {...args} />\r
        </div>
}`,...l.parameters?.docs?.source}}};const j=["Primary","Extended","AutoShrink","FixedPosition"],L=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:i,Extended:s,FixedPosition:l,Primary:r,__namedExportsOrder:j,default:w},Symbol.toStringTag,{value:"Module"}));export{s as E,L as F,r as P};
