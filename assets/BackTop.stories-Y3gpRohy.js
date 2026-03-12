import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r,R as T}from"./iframe-BisTGuVC.js";import{c as x}from"./index-Ckw0h7AD.js";import{I as w}from"./Icon-mnVo4eg5.js";import{u}from"./useTranslation-BH3LN071.js";const l=({target:n=()=>window,visibilityHeight:o=400,onClick:d,children:m,className:f,style:b})=>{const[g,v]=r.useState(!1);r.useRef(null);const h=r.useCallback(t=>t===window||t instanceof Window?window.pageYOffset||document.documentElement.scrollTop:t instanceof Document?document.documentElement.scrollTop:t.scrollTop,[]),p=r.useCallback(()=>{const t=n();if(!t)return;const s=h(t);v(s>o)},[n,o,h]);r.useEffect(()=>{const t=n();if(t)return p(),t.addEventListener("scroll",p),()=>{t.removeEventListener("scroll",p)}},[n,p]);const y=t=>{const s=n();s&&(s===window||s instanceof Window?window.scrollTo({top:0,behavior:"smooth"}):s instanceof Document?document.documentElement.scrollTo({top:0,behavior:"smooth"}):s.scrollTo({top:0,behavior:"smooth"}),d?.(t))},_=e.jsx("div",{className:"wim-back-top__content",children:e.jsx(w,{name:"ChevronUpIcon",className:"wim-back-top__icon"})});return e.jsx("div",{className:x("wim-back-top",!g&&"wim-back-top--hidden",f),style:b,onClick:y,children:m||_})};l.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | Document | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | Document | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"Document"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Scroll height after which the button becomes visible",defaultValue:{value:"400",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when clicked"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the button"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const k={title:"Components/Navigation Utilities/BackTop",component:l,parameters:{layout:"fullscreen"}},i={render:n=>{const{t:o}=u(["docs","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story_backtop_scroll")}),e.jsx("p",{children:o("story_backtop_visible_400")}),e.jsx(l,{...n,visibilityHeight:400})]})}},c={render:n=>{const{t:o}=u(["docs","common","components"]);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story_backtop_custom_scroll")}),e.jsx("p",{children:o("story_backtop_visible_200")}),e.jsx(l,{...n,visibilityHeight:200,children:e.jsx("div",{style:{height:40,width:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:"#108ee9",color:"#fff",fontSize:14},children:o("story_backtop_up")})})]})}},j=()=>{const[n,o]=T.useState(null),{t:d}=u(["docs","common","components"]);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:d("story_backtop_target_msg")}),e.jsx("div",{ref:m=>o(m),style:{height:"300px",overflowY:"scroll",border:"1px solid #108ee9",padding:"20px",position:"relative"},children:e.jsxs("div",{style:{height:"1000px"},children:[e.jsx("p",{children:d("story_backtop_inside_box")}),e.jsx(l,{target:()=>n,visibilityHeight:100,style:{position:"absolute",right:20,bottom:20}})]})})]})},a={render:()=>e.jsx(j,{})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_backtop_scroll")}</p>\r
        <p>{t("story_backtop_visible_400")}</p>\r
        <BackTop {...args} visibilityHeight={400} />\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...a.parameters?.docs?.source}}};const S=["Basic","CustomElement","SpecificTarget"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,CustomElement:c,SpecificTarget:a,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{M as B,c as C,a as S,i as a};
