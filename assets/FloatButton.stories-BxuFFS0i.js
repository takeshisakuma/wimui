import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-DkKouYTS.js";import{P as a}from"./index-0gwFuz90.js";import{I as V}from"./Icon-DR9Ol5M1.js";import{u as O}from"./useTranslation-BxY74sFT.js";const t=({iconName:r="CircleIcon",variant:w="default",shape:y="circle",size:o="medium",label:n,shrink:j=!1,position:C="bottom-right",description:b,badge:x,backTop:i=!1,visibilityHeight:z=400,className:k,style:q,onClick:T,"aria-label":B,..._})=>{const{t:I}=O(),[F,E]=v.useState(!i),S=v.useCallback(()=>{if(i){const N=window.pageYOffset||document.documentElement.scrollTop;E(N>z)}},[i,z]);v.useEffect(()=>{if(i)return window.addEventListener("scroll",S),S(),()=>window.removeEventListener("scroll",S)},[i,S]);const L=N=>{i&&window.scrollTo({top:0,behavior:"smooth"}),T?.(N)};if(!F&&i)return null;const P={small:"sm",medium:"md",large:"lg"},A=["wim-float-button",`wim-float-button--${w}`,`wim-float-button--${y}`,`wim-float-button--${P[o]}`,`wim-float-button--${C}`,n?"wim-float-button--extended":"",j?"wim-float-button--shrink":"",k].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:A,style:q,onClick:L,title:b?I(b):void 0,"aria-label":B||(n?I(n):r),..._,children:[e.jsxs("span",{className:"wim-float-button__inner",children:[e.jsx(V,{name:i?"ChevronDownIcon":r,size:o,className:i?"wim-float-button__icon--backtop":""}),n&&e.jsx("span",{className:"wim-float-button__label-wrapper",children:e.jsx("span",{className:"wim-float-button__label",children:I(n)})}),x&&e.jsx("span",{className:x===!0?"wim-float-button__badge--dot":"wim-float-button__badge",children:typeof x=="number"?x:""})]}),b&&e.jsx("span",{className:"wim-float-button__description",children:I(b)})]})};t.propTypes={iconName:a.string,variant:a.oneOf(["default","primary"]),shape:a.oneOf(["circle","square"]),size:a.oneOf(["small","medium","large"]),label:a.string,shrink:a.bool,position:a.oneOf(["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]),description:a.string,badge:a.oneOfType([a.number,a.bool]),backTop:a.bool,visibilityHeight:a.number,className:a.string,style:a.object,"aria-label":a.string};t.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1},type:{name:"string"}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1}]}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1},type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"square"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the button",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"Label text for extended FAB",type:{name:"string"}},shrink:{required:!1,tsType:{name:"boolean"},description:"Whether to shrink the extended FAB (hide label)",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"Position of the button",defaultValue:{value:'"bottom-right"',computed:!1},type:{name:"enum",value:[{value:'"bottom-right"',computed:!1},{value:'"bottom-left"',computed:!1},{value:'"bottom-center"',computed:!1},{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"static"',computed:!1}]}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip",type:{name:"string"}},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)",type:{name:"union",value:[{name:"number"},{name:"bool"}]}},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1},type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute",type:{name:"object"}},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility",type:{name:"string"}}}};const D={title:"Navigation/FloatButton",component:t,tags:[],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},variant:{control:"radio",options:["default","primary"]},shape:{control:"radio",options:["circle","square"]}}},s={args:{iconName:"CircleIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},l={args:{iconName:"CircleIcon",label:"送信する",variant:"primary",size:"medium",position:"static",shrink:!1}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{iconName:"CircleIcon",size:"small",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",size:"medium",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",size:"large",variant:"primary",position:"static"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{iconName:"CircleIcon",label:"Small",size:"small",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",label:"Medium",size:"medium",variant:"primary",position:"static"}),e.jsx(t,{iconName:"CircleIcon",label:"Large",size:"large",variant:"primary",position:"static"})]})},p={args:{iconName:"CircleIcon",label:"スクロールして縮小",variant:"primary",size:"medium",position:"static",shrink:!1},render:r=>e.jsx(M,{...r})},u={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle",size:"medium",position:"static"}},d={args:{iconName:"SquareIcon",variant:"default",shape:"square",size:"medium",position:"static"}},f={args:{iconName:"CircleIcon",badge:3,variant:"primary",size:"medium",position:"static"}},g={parameters:{layout:"fullscreen"},args:{iconName:"ExternalLinkIcon",variant:"primary",shape:"circle",size:"medium",position:"bottom-right",description:"Click me"},render:r=>e.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[e.jsx("p",{children:"Look at the bottom right of the screen."}),e.jsx(t,{...r})]})},h={parameters:{layout:"fullscreen"},args:{backTop:!0,visibilityHeight:100,variant:"primary",size:"medium"},render:r=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:'Scroll down to see the "Back to Top" button appear.'}),e.jsx(t,{...r})]})},M=r=>{const[w,y]=v.useState(!1),o=v.useRef(null),n=()=>{y(!0),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{y(!1)},1e3)};return e.jsxs("div",{style:{height:"300px",width:"400px",overflow:"hidden",border:"1px solid #ccc",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"100%",overflowY:"auto",padding:"20px"},onScroll:n,children:e.jsx("div",{style:{height:"1000px"},children:e.jsx("p",{children:"Please scroll inside this area"})})}),e.jsx(t,{...r,shrink:w,style:{position:"absolute",bottom:"20px",right:"20px",...r.style}})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "送信する",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
            <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />\r
            <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />\r
        </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "スクロールして縮小",
    variant: "primary",
    size: "medium",
    position: "static",
    shrink: false
  },
  render: args => <AutoShrinkDemo {...args} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "medium",
    position: "static"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "medium",
    position: "static"
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "medium",
    position: "static"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    iconName: "ExternalLinkIcon",
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <p>Scroll down to see the "Back to Top" button appear.</p>\r
            <FloatButton {...args} />\r
        </div>
}`,...h.parameters?.docs?.source}}};const R=["Basic","Extended","Sizes","ExtendedSizes","AutoShrink","Primary","Square","WithBadge","FixedPosition","BackTop"],G=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:p,BackTop:h,Basic:s,Extended:l,ExtendedSizes:m,FixedPosition:g,Primary:u,Sizes:c,Square:d,WithBadge:f,__namedExportsOrder:R,default:D},Symbol.toStringTag,{value:"Module"}));export{p as A,s as B,l as E,G as F,u as P,c as S,f as W,m as a,d as b,g as c,h as d};
