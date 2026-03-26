import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x,A as c}from"./iframe-qE21WwsJ.js";import{c as j}from"./index-BHxLpz1N.js";import{I as V}from"./Icon-DUdlvRZG.js";import{u as l}from"./useTranslation-BGUEs77q.js";const n=({iconName:t="CircleIcon",variant:a="default",shape:o="circle",size:i="medium",label:s,shrink:N=!1,position:A="bottom-right",description:_,badge:S,backTop:r=!1,visibilityHeight:C=400,className:T,style:E,onClick:k,"aria-label":q,...B})=>{const{t:I}=l(),[L,F]=x.useState(()=>r?typeof window<"u"?(window.pageYOffset||document.documentElement.scrollTop)>C:!1:!0),z=x.useCallback(()=>{if(r){const w=window.pageYOffset||document.documentElement.scrollTop;F(w>C)}},[r,C]);x.useEffect(()=>{if(r)return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[r,z]);const P=w=>{r&&window.scrollTo({top:0,behavior:"smooth"}),k?.(w)};return!L&&r?null:e.jsxs("button",{type:"button",className:j("wim-float-button",`wim-float-button--${a}`,`wim-float-button--${o}`,`wim-float-button--${i==="small"?"sm":i==="large"?"lg":"md"}`,`wim-float-button--${A}`,s&&"wim-float-button--extended",N&&"wim-float-button--shrink",T),style:E,onClick:P,title:_?I(_):void 0,"aria-label":q||(s?I(s):t),...B,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(V,{name:r?"ChevronDownIcon":t,size:i,className:j(r&&"wim-float-button__icon--backtop")}),s&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:I(s)})}),S&&e.jsx("span",{className:j(S===!0?"wim-float-button__badge--dot":"wim-float-button__badge"),children:typeof S=="number"?S:""})]}),_&&e.jsx("span",{className:"wim-float-button__description",children:I(_)})]})};n.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:`| "CircleIcon"
| "SquareIcon"
| "LoadingIcon"
| "ExternalLinkIcon"
| "ArrowUpIcon"
| string`,elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the button",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for extended FAB"},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"
| "bottom-left"
| "bottom-center"
| "top-right"
| "top-left"
| "static"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip"},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)"},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"}}};const R={title:"Components/Navigation Utilities/FloatButton",component:n,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},m={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},u={render:function(a){const{t:o}=l(c);return e.jsx(n,{...a,label:o("story_floatbutton_send")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{iconName:"CircleIcon",size:"small",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",size:"medium",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",size:"large",variant:"primary",position:"static"})]})},p={render:()=>{const{t}=l(c);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(n,{iconName:"CircleIcon",label:t("story_floatbutton_small"),size:"small",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",label:t("story_floatbutton_medium"),size:"medium",variant:"primary",position:"static"}),e.jsx(n,{iconName:"CircleIcon",label:t("story_floatbutton_large"),size:"large",variant:"primary",position:"static"})]})}},f={render:function(a){const{t:o}=l(c);return e.jsx(D,{...a,label:o("story_floatbutton_shrink")})},args:{iconName:"CircleIcon",variant:"primary",size:"medium",position:"static",shrink:!1}},h={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},y={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"medium",position:"static"}},g={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"medium",position:"static"}},b={parameters:{layout:"fullscreen"},render:t=>{const{t:a}=l(c);return e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:a("story_floatbutton_look_bottom")}),e.jsx(n,{...t,iconName:"ChevronUpIcon",variant:"primary",shape:"circle",size:"medium",position:"bottom-right",description:a("story_floatbutton_click_me")})]})}},v={parameters:{layout:"fullscreen"},render:t=>{const{t:a}=l(c);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:a("story_floatbutton_scroll_top_desc")}),e.jsx(n,{...t,backTop:!0,visibilityHeight:100,variant:"primary",size:"medium"})]})}},D=t=>{const[a,o]=x.useState(!1),i=x.useRef(null),{t:s}=l(c),N=()=>{o(!0),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{o(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"100%",maxWidth:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:N,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:s("story_floatbutton_scroll_inside")})})}),e.jsx(n,{...t,shrink:a,style:{position:"absolute",bottom:"20px",right:"20px",...t.style}})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story_floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_small")} size="small" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_medium")} size="medium" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story_floatbutton_large")} size="large" variant="primary" position="static" />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AutoShrinkDemo {...args} label={t("story_floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "medium",
    position: "static"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "medium",
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
        <p>{t("story_floatbutton_look_bottom")}</p>
        <FloatButton {...args} iconName="ChevronUpIcon" variant="primary" shape="circle" size="medium" position="bottom-right" description={t("story_floatbutton_click_me")} />
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
        <p>{t("story_floatbutton_scroll_top_desc")}</p>
        <FloatButton {...args} backTop visibilityHeight={100} variant="primary" size="medium" />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const M=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],H=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:f,BackTop:v,Basic:m,Extended:u,ExtendedSizes:p,FixedPosition:b,Primary:h,Sizes:d,Square:y,WithBadge:g,__namedExportsOrder:M,default:R},Symbol.toStringTag,{value:"Module"}));export{f as A,m as B,u as E,H as F,h as P,d as S,g as W,p as a,y as b,b as c,v as d};
