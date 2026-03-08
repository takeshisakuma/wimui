import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-DUo8Bj02.js";import{c as C}from"./index-CI1dtVTQ.js";import{I as L}from"./Icon-C5_8LwyI.js";import{u as l}from"./useTranslation-C2tw1dPV.js";const a=({iconName:t="CircleIcon",variant:n="default",shape:r="circle",size:i="medium",label:s,shrink:S=!1,position:j="bottom-right",description:x,badge:_,backTop:o=!1,visibilityHeight:N=400,className:T,style:k,onClick:q,"aria-label":B,...F})=>{const{t:I}=l(),[E,A]=v.useState(()=>o?typeof window<"u"?(window.pageYOffset||document.documentElement.scrollTop)>N:!1:!0),z=v.useCallback(()=>{if(o){const w=window.pageYOffset||document.documentElement.scrollTop;A(w>N)}},[o,N]);v.useEffect(()=>{if(o)return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[o,z]);const V=w=>{o&&window.scrollTo({top:0,behavior:"smooth"}),q?.(w)};return!E&&o?null:e.jsxs("button",{type:"button",className:C("wim-float-button",`wim-float-button--${n}`,`wim-float-button--${r}`,`wim-float-button--${i==="small"?"sm":i==="large"?"lg":"md"}`,`wim-float-button--${j}`,s&&"wim-float-button--extended",S&&"wim-float-button--shrink",T),style:k,onClick:V,title:x?I(x):void 0,"aria-label":B||(s?I(s):t),...F,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(L,{name:o?"ChevronDownIcon":t,size:i,className:C(o&&"wim-float-button__icon--backtop")}),s&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:I(s)})}),_&&e.jsx("span",{className:C(_===!0?"wim-float-button__badge--dot":"wim-float-button__badge"),children:typeof _=="number"?_:""})]}),x&&e.jsx("span",{className:"wim-float-button__description",children:I(x)})]})};a.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:`| "CircleIcon"
| "SquareIcon"
| "LoadingIcon"
| "ExternalLinkIcon"
| "ArrowUpIcon"
| string`,elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the button",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for extended FAB"},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"
| "bottom-left"
| "bottom-center"
| "top-right"
| "top-left"
| "static"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip"},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)"},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"}}};const P={title:"Components/Navigation Utilities/FloatButton",component:a,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},c={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},m={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(a,{...n,label:r("story_floatbutton_send")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{iconName:"CircleIcon",size:"small",variant:"primary",position:"static"}),e.jsx(a,{iconName:"CircleIcon",size:"medium",variant:"primary",position:"static"}),e.jsx(a,{iconName:"CircleIcon",size:"large",variant:"primary",position:"static"})]})},d={render:()=>{const{t}=l(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(a,{iconName:"CircleIcon",label:t("story_floatbutton_small"),size:"small",variant:"primary",position:"static"}),e.jsx(a,{iconName:"CircleIcon",label:t("story_floatbutton_medium"),size:"medium",variant:"primary",position:"static"}),e.jsx(a,{iconName:"CircleIcon",label:t("story_floatbutton_large"),size:"large",variant:"primary",position:"static"})]})}},p={render:function(n){const{t:r}=l(["docs","common","components"]);return e.jsx(R,{...n,label:r("story_floatbutton_shrink")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},f={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},h={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"medium",position:"static"}},y={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"medium",position:"static"}},g={parameters:{layout:"fullscreen"},render:t=>{const{t:n}=l(["docs","common","components"]);return e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:n("story_floatbutton_look_bottom")}),e.jsx(a,{...t,iconName:"ChevronUpIcon",variant:"primary",shape:"circle",size:"medium",position:"bottom-right",description:n("story_floatbutton_click_me")})]})}},b={parameters:{layout:"fullscreen"},render:t=>{const{t:n}=l(["docs","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:n("story_floatbutton_scroll_top_desc")}),e.jsx(a,{...t,backTop:!0,visibilityHeight:100,variant:"primary",size:"medium"})]})}},R=t=>{const[n,r]=v.useState(!1),i=v.useRef(null),{t:s}=l(["docs","common","components"]),S=()=>{r(!0),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{r(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"100%",maxWidth:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:S,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:s("story_floatbutton_scroll_inside")})})}),e.jsx(a,{...t,shrink:n,style:{position:"absolute",bottom:"20px",right:"20px",...t.style}})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FloatButton {...args} label={t("story_floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />\r
      <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />\r
      <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />\r
    </div>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-start"
    }}>\r
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_small")} size="small" variant="primary" position="static" />\r
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_medium")} size="medium" variant="primary" position="static" />\r
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_large")} size="large" variant="primary" position="static" />\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <AutoShrinkDemo {...args} label={t("story_floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "medium",
    position: "static"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "medium",
    position: "static"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "150vh",
      padding: "20px"
    }}>\r
        <p>{t("story_floatbutton_look_bottom")}</p>\r
        <FloatButton {...args} iconName="ChevronUpIcon" variant="primary" shape="circle" size="medium" position="bottom-right" description={t("story_floatbutton_click_me")} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_floatbutton_scroll_top_desc")}</p>\r
        <FloatButton {...args} backTop visibilityHeight={100} variant="primary" size="medium" />\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const D=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],H=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:p,BackTop:b,Basic:c,Extended:m,ExtendedSizes:d,FixedPosition:g,Primary:f,Sizes:u,Square:h,WithBadge:y,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{p as A,c as B,m as E,H as F,f as P,u as S,y as W,d as a,h as b,g as c,b as d};
