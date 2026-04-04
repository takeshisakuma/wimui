import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,A as h,R as w}from"./iframe-By123agS.js";import{c as S}from"./index-DhHn5T7W.js";import{I as E}from"./Icon-jzV_n-kg.js";import{u as m}from"./useTranslation-svuQDxOH.js";const c=({target:n=()=>window,visibilityHeight:o=400,onClick:l,children:u,className:f,style:y,"aria-label":g})=>{const{t:v}=m("common"),[T,x]=p.useState(!1),b=p.useCallback(t=>t===window||t instanceof Window?window.pageYOffset||document.documentElement.scrollTop:t instanceof Document?document.documentElement.scrollTop:t.scrollTop,[]),d=p.useCallback(()=>{const t=n();if(!t)return;const s=b(t);x(s>o)},[n,o,b]);p.useEffect(()=>{const t=n();if(t)return d(),t.addEventListener("scroll",d),()=>{t.removeEventListener("scroll",d)}},[n,d]);const _=t=>{const s=n();s&&(s===window||s instanceof Window?window.scrollTo({top:0,behavior:"smooth"}):s instanceof Document?document.documentElement.scrollTo({top:0,behavior:"smooth"}):s.scrollTo({top:0,behavior:"smooth"}),l?.(t))},k=e.jsx("div",{className:"wim-back-top__content",children:e.jsx(E,{name:"ChevronUpIcon",className:"wim-back-top__icon"})});return e.jsx("div",{className:S("wim-back-top",!T&&"wim-back-top--hidden",f),style:y,onClick:_,role:"button",tabIndex:0,"aria-label":g??v("a11y.back_to_top"),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&t.currentTarget.click()},children:u||k})};c.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | Document | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | Document | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"Document"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Scroll height after which the button becomes visible",defaultValue:{value:"400",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when clicked"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the button"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the button"}}};const j={title:"Components/Navigation Utilities/BackTop",component:c,parameters:{layout:"fullscreen"}},r={render:n=>{const{t:o}=m(h);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story.backtop_scroll")}),e.jsx("p",{children:o("story.backtop_visible_400")}),e.jsx(c,{...n,visibilityHeight:400})]})}},i={render:n=>{const{t:o}=m(h);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story.backtop_custom_scroll")}),e.jsx("p",{children:o("story.backtop_visible_200")}),e.jsx(c,{...n,visibilityHeight:200,children:e.jsx("div",{style:{height:40,width:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:"#108ee9",color:"#fff",fontSize:14},children:o("story.backtop_up")})})]})}},C=()=>{const[n,o]=w.useState(null),{t:l}=m(h);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:l("story.backtop_target_msg")}),e.jsx("div",{ref:u=>o(u),tabIndex:0,style:{height:"300px",overflowY:"scroll",border:"1px solid #108ee9",padding:"20px",position:"relative"},children:e.jsxs("div",{style:{height:"1000px"},children:[e.jsx("p",{children:l("story.backtop_inside_box")}),e.jsx(c,{target:()=>n,visibilityHeight:100,style:{position:"absolute",right:20,bottom:20}})]})})]})},a={render:()=>e.jsx(C,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_scroll")}</p>
        <p>{t("story.backtop_visible_400")}</p>
        <BackTop {...args} visibilityHeight={400} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_custom_scroll")}</p>
        <p>{t("story.backtop_visible_200")}</p>
        <BackTop {...args} visibilityHeight={200}>
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
        }}>
            {t("story.backtop_up")}
          </div>
        </BackTop>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...a.parameters?.docs?.source}}};const L=["Basic","CustomElement","SpecificTarget"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,CustomElement:i,SpecificTarget:a,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{B,i as C,a as S,r as a};
