import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as T}from"./iframe-R-8edTSa.js";import{c as x}from"./index-BMiqMCWS.js";import{I as k}from"./Icon-QzvmdxNd.js";import{u as m}from"./useTranslation-BsF8P6HZ.js";const a=({target:t=()=>window,visibilityHeight:s=400,onClick:l,children:u,className:y,style:h})=>{const[g,v]=p.useState(!1),_=p.useCallback(o=>o===window||o instanceof Window?window.pageYOffset||document.documentElement.scrollTop:o instanceof Document?document.documentElement.scrollTop:o.scrollTop,[]),d=p.useCallback(()=>{const o=t();if(!o)return;const n=_(o);v(n>s)},[t,s,_]);p.useEffect(()=>{const o=t();if(o)return d(),o.addEventListener("scroll",d),()=>{o.removeEventListener("scroll",d)}},[t,d]);const f=o=>{const n=t();n&&(n===window||n instanceof Window?window.scrollTo({top:0,behavior:"smooth"}):n instanceof Document?document.documentElement.scrollTo({top:0,behavior:"smooth"}):n.scrollTo({top:0,behavior:"smooth"}),l?.(o))},b=e.jsx("div",{className:"wim-back-top__content",children:e.jsx(k,{name:"ChevronUpIcon",className:"wim-back-top__icon"})});return e.jsx("div",{className:x("wim-back-top",!g&&"wim-back-top--hidden",y),style:h,onClick:f,role:"button",tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&o.currentTarget.click()},children:u||b})};a.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | Document | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | Document | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"Document"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Scroll height after which the button becomes visible",defaultValue:{value:"400",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when clicked"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the button"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const w={title:"Components/Navigation Utilities/BackTop",component:a,parameters:{layout:"fullscreen"}},r={render:t=>{const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:s("story_backtop_scroll")}),e.jsx("p",{children:s("story_backtop_visible_400")}),e.jsx(a,{...t,visibilityHeight:400})]})}},i={render:t=>{const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:s("story_backtop_custom_scroll")}),e.jsx("p",{children:s("story_backtop_visible_200")}),e.jsx(a,{...t,visibilityHeight:200,children:e.jsx("div",{style:{height:40,width:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:"#108ee9",color:"#fff",fontSize:14},children:s("story_backtop_up")})})]})}},j=()=>{const[t,s]=T.useState(null),{t:l}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:l("story_backtop_target_msg")}),e.jsx("div",{ref:u=>s(u),style:{height:"300px",overflowY:"scroll",border:"1px solid #108ee9",padding:"20px",position:"relative"},children:e.jsxs("div",{style:{height:"1000px"},children:[e.jsx("p",{children:l("story_backtop_inside_box")}),e.jsx(a,{target:()=>t,visibilityHeight:100,style:{position:"absolute",right:20,bottom:20}})]})})]})},c={render:()=>e.jsx(j,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_backtop_scroll")}</p>\r
        <p>{t("story_backtop_visible_400")}</p>\r
        <BackTop {...args} visibilityHeight={400} />\r
      </div>;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_backtop_custom_scroll")}</p>\r
        <p>{t("story_backtop_visible_200")}</p>\r
        <BackTop {...args} visibilityHeight={200}>\r
          <div style={{
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
            {t("story_backtop_up")}\r
          </div>\r
        </BackTop>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...c.parameters?.docs?.source}}};const S=["Basic","CustomElement","SpecificTarget"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,CustomElement:i,SpecificTarget:c,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{M as B,i as C,c as S,r as a};
