import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r,R as T}from"./iframe-B_YxL-rH.js";import{c as x}from"./index-CYA5KVAI.js";import{I as y}from"./Icon-DI_UkkIm.js";const l=({target:n=()=>window,visibilityHeight:c=400,onClick:p,children:u,className:h,style:f})=>{const[g,b]=r.useState(!1);r.useRef(null);const m=r.useCallback(t=>t===window||t instanceof Window?window.pageYOffset||document.documentElement.scrollTop:t instanceof Document?document.documentElement.scrollTop:t.scrollTop,[]),d=r.useCallback(()=>{const t=n();if(!t)return;const o=m(t);b(o>c)},[n,c,m]);r.useEffect(()=>{const t=n();if(t)return d(),t.addEventListener("scroll",d),()=>{t.removeEventListener("scroll",d)}},[n,d]);const v=t=>{const o=n();o&&(o===window||o instanceof Window?window.scrollTo({top:0,behavior:"smooth"}):o instanceof Document?document.documentElement.scrollTo({top:0,behavior:"smooth"}):o.scrollTo({top:0,behavior:"smooth"}),p?.(t))},w=e.jsx("div",{className:"wim-back-top__content",children:e.jsx(y,{name:"ChevronUpIcon",className:"wim-back-top__icon"})});return e.jsx("div",{className:x("wim-back-top",!g&&"wim-back-top--hidden",h),style:f,onClick:v,children:u||w})};l.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | Document | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | Document | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"Document"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Scroll height after which the button becomes visible",defaultValue:{value:"400",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when clicked"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the button"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const S={title:"Component/Navigation Utilities/BackTop",component:l,parameters:{layout:"fullscreen"}},i={args:{visibilityHeight:400},render:n=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:"Scroll down to see the BackTop button appear."}),e.jsx("p",{children:"The button will become visible after scrolling 400px."}),e.jsx(l,{...n})]})},s={args:{visibilityHeight:200,children:e.jsx("div",{style:{height:40,width:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:"#108ee9",color:"#fff",fontSize:14},children:"UP"})},render:n=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:"Scroll down to see the custom BackTop button appear."}),e.jsx("p",{children:"The button will become visible after scrolling 200px."}),e.jsx(l,{...n})]})},j=()=>{const[n,c]=T.useState(null);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:"Scrolling is limited to the blue box below."}),e.jsx("div",{ref:p=>c(p),style:{height:"300px",overflowY:"scroll",border:"1px solid #108ee9",padding:"20px",position:"relative"},children:e.jsxs("div",{style:{height:"1000px"},children:[e.jsx("p",{children:"Scroll inside this box..."}),e.jsx(l,{target:()=>n,visibilityHeight:100,style:{position:"absolute",right:20,bottom:20}})]})})]})},a={render:()=>e.jsx(j,{})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 400
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to see the BackTop button appear.</p>\r
            <p>The button will become visible after scrolling 400px.</p>\r
            <BackTop {...args} />\r
        </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 200,
    children: <div style={{
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      backgroundColor: "#108ee9",
      color: "#fff",
      fontSize: 14
    }}>\r
                UP\r
            </div>
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to see the custom BackTop button appear.</p>\r
            <p>The button will become visible after scrolling 200px.</p>\r
            <BackTop {...args} />\r
        </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...a.parameters?.docs?.source}}};const k=["Basic","CustomElement","SpecificTarget"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,CustomElement:s,SpecificTarget:a,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as B,s as C,a as S,i as a};
