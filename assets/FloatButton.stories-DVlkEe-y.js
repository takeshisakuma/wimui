import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-C53Tyytv.js";import{c as C}from"./index-pqrI1YvK.js";import{I as A}from"./Icon-1ltWpx9T.js";import{u as V}from"./useTranslation-Bm69zA3k.js";const t=({iconName:a="CircleIcon",variant:w="default",shape:v="circle",size:i="medium",label:n,shrink:z=!1,position:j="bottom-right",description:y,badge:b,backTop:r=!1,visibilityHeight:S=400,className:q,style:T,onClick:k,"aria-label":B,..._})=>{const{t:x}=V(),[F,E]=g.useState(()=>r?typeof window<"u"?(window.pageYOffset||document.documentElement.scrollTop)>S:!1:!0),N=g.useCallback(()=>{if(r){const I=window.pageYOffset||document.documentElement.scrollTop;E(I>S)}},[r,S]);g.useEffect(()=>{if(r)return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[r,N]);const L=I=>{r&&window.scrollTo({top:0,behavior:"smooth"}),k?.(I)};return!F&&r?null:e.jsxs("button",{type:"button",className:C("wim-float-button",`wim-float-button--${w}`,`wim-float-button--${v}`,`wim-float-button--${i==="small"?"sm":i==="large"?"lg":"md"}`,`wim-float-button--${j}`,n&&"wim-float-button--extended",z&&"wim-float-button--shrink",q),style:T,onClick:L,title:y?x(y):void 0,"aria-label":B||(n?x(n):a),..._,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(A,{name:r?"ChevronDownIcon":a,size:i,className:C(r&&"wim-float-button__icon--backtop")}),n&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:x(n)})}),b&&e.jsx("span",{className:C(b===!0?"wim-float-button__badge--dot":"wim-float-button__badge"),children:typeof b=="number"?b:""})]}),y&&e.jsx("span",{className:"wim-float-button__description",children:x(y)})]})};t.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the button",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for extended FAB"},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip"},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)"},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"}}};const P={title:"Component/Navigation Utilities/FloatButton",component:t,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},o={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},s={args:{iconName:"CircleIcon",label:"送信する",variant:"primary",size:"medium",position:"static",shrink:!1}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{iconName:"CircleIcon",size:"small",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",size:"medium",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",size:"large",variant:"primary",position:"static"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{iconName:"CircleIcon",label:"Small",size:"small",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",label:"Medium",size:"medium",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",label:"Large",size:"large",variant:"primary",position:"static"})]})},m={args:{iconName:"CircleIcon",label:"スクロールして縮小",variant:"primary",size:"medium",position:"static",shrink:!1},render:a=>e.jsx(D,{...a})},p={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},u={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"medium",position:"static"}},d={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"medium",position:"static"}},f={parameters:{layout:"fullscreen"},args:{iconName:"ChevronUpIcon",variant:"primary",shape:"circle",size:"medium",position:"bottom-right",description:"Click me"},render:a=>e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:"Look at the bottom right of the screen."}),e.jsx(t,{...a})]})},h={parameters:{layout:"fullscreen"},args:{backTop:!0,visibilityHeight:100,variant:"primary",size:"medium"},render:a=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:'Scroll down to see the "Back to Top" button appear.'}),e.jsx(t,{...a})]})},D=a=>{const[w,v]=g.useState(!1),i=g.useRef(null),n=()=>{v(!0),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{v(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"100%",maxWidth:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:n,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:"Please scroll inside this area"})})}),e.jsx(t,{...a,shrink:w,style:{position:"absolute",bottom:"20px",right:"20px",...a.style}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "送信する",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
            <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />\r
        </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "flex-start"
  }}>\r
            <FloatButton iconName="CircleIcon" label="Small" size="small" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" label="Medium" size="medium" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" label="Large" size="large" variant="primary" position="static" />\r
        </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "スクロールして縮小",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  },
  render: args => <AutoShrinkDemo {...args} />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "medium",
    position: "static"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "medium",
    position: "static"
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    iconName: "ChevronUpIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "bottom-right",
    description: "Click me"
  },
  render: args => <div style={{
    height: "150vh",
    padding: "20px"
  }}>\r
            <p>Look at the bottom right of the screen.</p>\r
            <FloatButton {...args} />\r
        </div>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    backTop: true,
    visibilityHeight: 100,
    variant: "primary",
    size: "medium"
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to see the &quot;Back to Top&quot; button appear.</p>\r
            <FloatButton {...args} />\r
        </div>
}`,...h.parameters?.docs?.source}}};const O=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],Y=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:m,BackTop:h,Basic:o,Extended:s,ExtendedSizes:c,FixedPosition:f,Primary:p,Sizes:l,Square:u,WithBadge:d,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));export{m as A,o as B,s as E,Y as F,p as P,l as S,d as W,c as a,u as b,f as c,h as d};
