import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x,A as l}from"./iframe-9NEVSgmA.js";import{c as z}from"./index-D0BZ6LJb.js";import{I as R}from"./Icon-l26DkRUR.js";import{u as c}from"./useTranslation-7ChDnO1a.js";const n=({iconName:t="CircleIcon",variant:a="default",shape:o="circle",size:s="md",label:i,shrink:w=!1,position:j="bottom-right",description:S,badge:_,backTop:r=!1,visibilityHeight:N=400,className:A,style:T,onClick:E,"aria-label":k,...q})=>{const[B,L]=x.useState(()=>r?typeof window<"u"?(window.pageYOffset||document.documentElement.scrollTop)>N:!1:!0),C=x.useCallback(()=>{if(r){const I=window.pageYOffset||document.documentElement.scrollTop;L(I>N)}},[r,N]);x.useEffect(()=>{if(r)return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[r,C]);const F=I=>{r&&window.scrollTo({top:0,behavior:"smooth"}),E?.(I)};return!B&&r?null:e.jsxs("button",{type:"button",className:z("wim-float-button",`wim-float-button--${a}`,`wim-float-button--${o}`,`wim-float-button--${s}`,`wim-float-button--${j}`,!!i&&"wim-float-button--extended",!!w&&"wim-float-button--shrink",A),style:T,onClick:F,title:typeof S=="string"?S:void 0,"aria-label":k||(typeof i=="string"?i:t),...q,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(R,{name:r?"ChevronDownIcon":t,size:s,className:z(r&&"wim-float-button__icon--backtop")}),i&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:i})}),_&&e.jsx("span",{className:z(_===!0?"wim-float-button__badge--dot":"wim-float-button__badge"),children:typeof _=="number"?_:""})]}),S&&e.jsx("span",{className:"wim-float-button__description",children:S})]})};n.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:`| "CircleIcon"
| "SquareIcon"
| "LoadingIcon"
| "ExternalLinkIcon"
| "ArrowUpIcon"
| string`,elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the button",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text for extended FAB"},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"
| "bottom-left"
| "bottom-center"
| "top-right"
| "top-left"
| "static"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description for tooltip"},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)"},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"}}};const P={title:"Components/Navigation Utilities/FloatButton",component:n,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},m={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"md",position:"static"}},d={render:function(a){const{t:o}=c(l);return e.jsx(n,{...a,label:o("story.floatbutton_send")})},args:{iconName:"CircleIcon",variant:"primary",size:"md",position:"static",shrink:!1}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{iconName:"CircleIcon",size:"sm",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",size:"md",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",size:"lg",variant:"primary",position:"static"})]})},p={render:()=>{const{t}=c(l);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(n,{iconName:"CircleIcon",label:t("story.floatbutton_small"),size:"sm",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",label:t("story.floatbutton_medium"),size:"md",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",label:t("story.floatbutton_large"),size:"lg",variant:"primary",position:"static"})]})}},f={render:function(a){const{t:o}=c(l);return e.jsx(V,{...a,label:o("story.floatbutton_shrink")})},args:{iconName:"CircleIcon",variant:"primary",size:"md",position:"static",shrink:!1}},h={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"md",position:"static"}},y={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"md",position:"static"}},g={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"md",position:"static"}},b={parameters:{layout:"fullscreen"},render:t=>{const{t:a}=c(l);return e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:a("story.floatbutton_look_bottom")}),e.jsx(n,{...t,iconName:"ChevronUpIcon",variant:"primary",shape:"circle",size:"md",position:"bottom-right",description:a("story.floatbutton_click_me")})]})}},v={parameters:{layout:"fullscreen"},render:t=>{const{t:a}=c(l);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:a("story.floatbutton_scroll_top_desc")}),e.jsx(n,{...t,backTop:!0,visibilityHeight:100,variant:"primary",size:"md"})]})}},V=t=>{const[a,o]=x.useState(!1),s=x.useRef(null),{t:i}=c(l),w=()=>{o(!0),s.current&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{o(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"100%",maxWidth:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:w,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:i("story.floatbutton_scroll_inside")})})}),e.jsx(n,{...t,shrink:a,style:{position:"absolute",bottom:"20px",right:"20px",...t.style}})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story.floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <FloatButton iconName="CircleIcon" size="sm" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="md" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="lg" variant="primary" position="static" />
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-start"
    }}>
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_small")} size="sm" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_medium")} size="md" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_large")} size="lg" variant="primary" position="static" />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AutoShrinkDemo {...args} label={t("story.floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "md",
    position: "static"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "md",
    position: "static"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "150vh",
      padding: "20px"
    }}>
        <p>{t("story.floatbutton_look_bottom")}</p>
        <FloatButton {...args} iconName="ChevronUpIcon" variant="primary" shape="circle" size="md" position="bottom-right" description={t("story.floatbutton_click_me")} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.floatbutton_scroll_top_desc")}</p>
        <FloatButton {...args} backTop visibilityHeight={100} variant="primary" size="md" />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const D=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],Y=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:f,BackTop:v,Basic:m,Extended:d,ExtendedSizes:p,FixedPosition:b,Primary:h,Sizes:u,Square:y,WithBadge:g,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{f as A,m as B,d as E,Y as F,h as P,u as S,g as W,p as a,y as b,b as c,v as d};
