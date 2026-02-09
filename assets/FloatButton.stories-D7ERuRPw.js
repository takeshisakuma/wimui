import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-D3fuJ8Ev.js";import{P as e}from"./index-UmQnWAZl.js";import{I as T}from"./Icon-BNuL5lZA.js";import{u as _}from"./useTranslation-DLl3H20K.js";const c=({iconName:r="CircleIcon",variant:v="default",shape:b="circle",description:u,badge:m,backTop:t=!1,visibilityHeight:g=400,className:y,style:w,onClick:I,...x})=>{const{t:h}=_(),[S,q]=f.useState(!t),p=f.useCallback(()=>{if(t){const d=window.pageYOffset||document.documentElement.scrollTop;q(d>g)}},[t,g]);f.useEffect(()=>{if(t)return window.addEventListener("scroll",p),p(),()=>window.removeEventListener("scroll",p)},[t,p]);const N=d=>{t&&window.scrollTo({top:0,behavior:"smooth"}),I?.(d)};if(!S&&t)return null;const j=["wim-float-button",`wim-float-button--${v}`,`wim-float-button--${b}`,y].filter(Boolean).join(" ");return a.jsxs("button",{type:"button",className:j,style:w,onClick:N,title:u?h(u):void 0,...x,children:[a.jsxs("div",{className:"wim-float-button__inner",children:[a.jsx(T,{name:t?"ChevronDownIcon":r,size:"medium",className:t?"wim-float-button__icon--backtop":""}),m&&a.jsx("span",{className:m===!0?"wim-float-button__badge--dot":"wim-float-button__badge",children:typeof m=="number"?m:""})]}),u&&a.jsx("span",{className:"wim-float-button__description",children:h(u)})]})};c.propTypes={iconName:e.string,variant:e.oneOf(["default","primary"]),shape:e.oneOf(["circle","square"]),description:e.string,badge:e.oneOfType([e.number,e.bool]),backTop:e.bool,visibilityHeight:e.number,className:e.string,style:e.object};c.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'},{name:"literal",value:'"ArrowUpIcon"'},{name:"string"}]},description:"Icon name from the library",defaultValue:{value:'"CircleIcon"',computed:!1},type:{name:"string"}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"Variant of the button",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1}]}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Shape of the button",defaultValue:{value:'"circle"',computed:!1},type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"square"',computed:!1}]}},description:{required:!1,tsType:{name:"string"},description:"Description for tooltip",type:{name:"string"}},badge:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Badge content (number or dot)",type:{name:"union",value:[{name:"number"},{name:"bool"}]}},backTop:{required:!1,tsType:{name:"boolean"},description:"If true, the button will scroll to the top of the page when clicked",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Visibility threshold for backTop (in pixels)",defaultValue:{value:"400",computed:!1},type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute",type:{name:"object"}}}};const B={title:"Navigation/FloatButton",component:c,tags:[],parameters:{layout:"fullscreen"}},n={args:{iconName:"ExternalLinkIcon",variant:"default",shape:"circle",description:"Click me"},render:r=>a.jsxs("div",{style:{height:"150vh",padding:"20px"},children:[a.jsx("p",{children:"Look at the bottom right of the screen."}),a.jsx(c,{...r})]})},o={args:{iconName:"LoadingIcon",variant:"primary",shape:"circle"}},s={args:{iconName:"SquareIcon",variant:"default",shape:"square"}},i={args:{iconName:"CircleIcon",badge:3}},l={args:{backTop:!0,visibilityHeight:100},render:r=>a.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[a.jsx("p",{children:'Scroll down to see the "Back to Top" button appear.'}),a.jsx(c,{...r})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "ExternalLinkIcon",
    variant: "default",
    shape: "circle",
    description: "Click me"
  },
  render: args => <div style={{
    height: "150vh",
    padding: "20px"
  }}>\r
            <p>Look at the bottom right of the screen.</p>\r
            <FloatButton {...args} />\r
        </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    backTop: true,
    visibilityHeight: 100
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to see the "Back to Top" button appear.</p>\r
            <FloatButton {...args} />\r
        </div>
}`,...l.parameters?.docs?.source}}};const k=["Basic","Primary","Square","WithBadge","BackTop"],F=Object.freeze(Object.defineProperty({__proto__:null,BackTop:l,Basic:n,Primary:o,Square:s,WithBadge:i,__namedExportsOrder:k,default:B},Symbol.toStringTag,{value:"Module"}));export{n as B,F,o as P,s as S,i as W,l as a};
