import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-CxkJglxX.js";import{c as C}from"./index-DuEzwbhC.js";import{I as L}from"./Icon-CgqnfbzT.js";import{u as c}from"./useTranslation-0fSK9VPD.js";const s=({iconName:o="CircleIcon",variant:t="default",shape:n="circle",size:r="medium",label:i,shrink:S=!1,position:j="bottom-right",description:b,badge:x,backTop:a=!1,visibilityHeight:N=400,className:T,style:k,onClick:q,"aria-label":B,...F})=>{const{t:I}=c(),[E,A]=h.useState(()=>a?typeof window<"u"?(window.pageYOffset||document.documentElement.scrollTop)>N:!1:!0),z=h.useCallback(()=>{if(a){const w=window.pageYOffset||document.documentElement.scrollTop;A(w>N)}},[a,N]);h.useEffect(()=>{if(a)return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[a,z]);const V=w=>{a&&window.scrollTo({top:0,behavior:"smooth"}),q?.(w)};return!E&&a?null:e.jsxs("button",{type:"button",className:C("wim-float-button",`wim-float-button--${t}`,`wim-float-button--${n}`,`wim-float-button--${r==="small"?"sm":r==="large"?"lg":"md"}`,`wim-float-button--${j}`,i&&"wim-float-button--extended",S&&"wim-float-button--shrink",T),style:k,onClick:V,title:b?I(b):void 0,"aria-label":B||(i?I(i):o),...F,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(L,{name:a?"ChevronDownIcon":o,size:r,className:C(a&&"wim-float-button__icon--backtop")}),i&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:I(i)})}),x&&e.jsx("span",{className:C(x===!0?"wim-float-button__badge--dot":"wim-float-button__badge"),children:typeof x=="number"?x:""})]}),b&&e.jsx("span",{className:"wim-float-button__description",children:I(b)})]})};s.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:`| "CircleIcon"\r
| "SquareIcon"\r
| "LoadingIcon"\r
| "ExternalLinkIcon"\r
| "ArrowUpIcon"\r
| string`,elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the button",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for extended FAB"},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"\r
| "bottom-left"\r
| "bottom-center"\r
| "top-right"\r
| "top-left"\r
| "static"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip"},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)"},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"}}};const P={title:"Components/Navigation Utilities/FloatButton",component:s,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},l={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},d={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...t,label:n("story_floatbutton_send")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{iconName:"CircleIcon",size:"small",variant:"primary",position:"static"}),e.jsx(s,{iconName:"CircleIcon",size:"medium",variant:"primary",position:"static"}),e.jsx(s,{iconName:"CircleIcon",size:"large",variant:"primary",position:"static"})]})},u={render:()=>{const{t:o}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(s,{iconName:"CircleIcon",label:o("story_floatbutton_small"),size:"small",variant:"primary",position:"static"}),e.jsx(s,{iconName:"CircleIcon",label:o("story_floatbutton_medium"),size:"medium",variant:"primary",position:"static"}),e.jsx(s,{iconName:"CircleIcon",label:o("story_floatbutton_large"),size:"large",variant:"primary",position:"static"})]})}},p={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(R,{...t,label:n("story_floatbutton_shrink")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},_={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},f={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"medium",position:"static"}},y={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"medium",position:"static"}},g={parameters:{layout:"fullscreen"},render:o=>{const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:t("story_floatbutton_look_bottom")}),e.jsx(s,{...o,iconName:"ChevronUpIcon",variant:"primary",shape:"circle",size:"medium",position:"bottom-right",description:t("story_floatbutton_click_me")})]})}},v={parameters:{layout:"fullscreen"},render:o=>{const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:t("story_floatbutton_scroll_top_desc")}),e.jsx(s,{...o,backTop:!0,visibilityHeight:100,variant:"primary",size:"medium"})]})}},R=o=>{const[t,n]=h.useState(!1),r=h.useRef(null),{t:i}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),S=()=>{n(!0),r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{n(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"100%",maxWidth:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:S,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:i("story_floatbutton_scroll_inside")})})}),e.jsx(s,{...o,shrink:t,style:{position:"absolute",bottom:"20px",right:"20px",...o.style}})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <FloatButton {...args} label={t("story_floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />\r
      <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />\r
      <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />\r
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AutoShrinkDemo {...args} label={t("story_floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "medium",
    position: "static"
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "150vh",
      padding: "20px"
    }}>\r
        <p>{t("story_floatbutton_look_bottom")}</p>\r
        <FloatButton {...args} iconName="ChevronUpIcon" variant="primary" shape="circle" size="medium" position="bottom-right" description={t("story_floatbutton_click_me")} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_floatbutton_scroll_top_desc")}</p>\r
        <FloatButton {...args} backTop visibilityHeight={100} variant="primary" size="medium" />\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const D=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],H=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:p,BackTop:v,Basic:l,Extended:d,ExtendedSizes:u,FixedPosition:g,Primary:_,Sizes:m,Square:f,WithBadge:y,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{p as A,l as B,d as E,H as F,_ as P,m as S,y as W,u as a,f as b,g as c,v as d};
