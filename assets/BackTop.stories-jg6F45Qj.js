import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as x}from"./iframe-DC3HBgeO.js";import{c as k}from"./index-Cpe1KNws.js";import{I as w}from"./Icon-Bl8N_3yh.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as h}from"./useTranslation-rn74mnfg.js";const c=({target:n=()=>window,visibilityHeight:o=400,onClick:l,children:m,className:b,style:g})=>{const[y,v]=p.useState(!1),f=p.useCallback(t=>t===window||t instanceof Window?window.pageYOffset||document.documentElement.scrollTop:t instanceof Document?document.documentElement.scrollTop:t.scrollTop,[]),d=p.useCallback(()=>{const t=n();if(!t)return;const r=f(t);v(r>o)},[n,o,f]);p.useEffect(()=>{const t=n();if(t)return d(),t.addEventListener("scroll",d),()=>{t.removeEventListener("scroll",d)}},[n,d]);const _=t=>{const r=n();r&&(r===window||r instanceof Window?window.scrollTo({top:0,behavior:"smooth"}):r instanceof Document?document.documentElement.scrollTo({top:0,behavior:"smooth"}):r.scrollTo({top:0,behavior:"smooth"}),l?.(t))},T=e.jsx("div",{className:"wim-back-top__content",children:e.jsx(w,{name:"ChevronUpIcon",className:"wim-back-top__icon"})});return e.jsx("div",{className:k("wim-back-top",!y&&"wim-back-top--hidden",b),style:g,onClick:_,role:"button",tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&t.currentTarget.click()},children:m||T})};c.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | Document | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | Document | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"Document"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},visibilityHeight:{required:!1,tsType:{name:"number"},description:"Scroll height after which the button becomes visible",defaultValue:{value:"400",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when clicked"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the button"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const S={title:"Components/Navigation Utilities/BackTop",component:c,parameters:{layout:"fullscreen"}},s={render:n=>{const{t:o}=h(u);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story_backtop_scroll")}),e.jsx("p",{children:o("story_backtop_visible_400")}),e.jsx(c,{...n,visibilityHeight:400})]})}},i={render:n=>{const{t:o}=h(u);return e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("p",{children:o("story_backtop_custom_scroll")}),e.jsx("p",{children:o("story_backtop_visible_200")}),e.jsx(c,{...n,visibilityHeight:200,children:e.jsx("div",{style:{height:40,width:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:"#108ee9",color:"#fff",fontSize:14},children:o("story_backtop_up")})})]})}},E=()=>{const[n,o]=x.useState(null),{t:l}=h(u);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:l("story_backtop_target_msg")}),e.jsx("div",{ref:m=>o(m),style:{height:"300px",overflowY:"scroll",border:"1px solid #108ee9",padding:"20px",position:"relative"},children:e.jsxs("div",{style:{height:"1000px"},children:[e.jsx("p",{children:l("story_backtop_inside_box")}),e.jsx(c,{target:()=>n,visibilityHeight:100,style:{position:"absolute",right:20,bottom:20}})]})})]})},a={render:()=>e.jsx(E,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_backtop_scroll")}</p>\r
        <p>{t("story_backtop_visible_400")}</p>\r
        <BackTop {...args} visibilityHeight={400} />\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...a.parameters?.docs?.source}}};const j=["Basic","CustomElement","SpecificTarget"],H=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,CustomElement:i,SpecificTarget:a,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{H as B,i as C,a as S,s as a};
