import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-BLtjAiBw.js";import{c as v}from"./index-DlDwX616.js";import{B as b}from"./Button-DFue9QvZ.js";import{u as S}from"./useTranslation-CIS57IFk.js";const h=({offsetTop:i,offsetBottom:n,onChange:w,target:f=()=>window,children:A,className:R,style:T})=>{const[x,j]=s.useState({isAffixed:!1}),g=s.useRef(null),E=s.useRef(null),a=s.useRef(null),_=s.useRef(!1),y=s.useCallback(()=>{if(!g.current)return;const r=f();if(!r)return;const e=g.current.getBoundingClientRect(),c=r===window||r instanceof Window?{top:0,bottom:window.innerHeight}:r.getBoundingClientRect();let o=!1,m,p;i!==void 0?e.top<c.top+i&&(o=!0,m={position:"fixed",top:c.top+i,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}):n!==void 0&&e.bottom>c.bottom-n&&(o=!0,m={position:"fixed",bottom:window.innerHeight-c.bottom+n,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}),o!==_.current&&(_.current=o,w?.(o)),j(u=>u.isAffixed===o&&JSON.stringify(u.affixStyle)===JSON.stringify(m)&&JSON.stringify(u.placeholderStyle)===JSON.stringify(p)?u:{isAffixed:o,affixStyle:m,placeholderStyle:p})},[i,n,f,w]);return s.useEffect(()=>{const r=f();if(!r)return;const e=()=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(y)};return r.addEventListener("scroll",e),window.addEventListener("resize",e),y(),()=>{r.removeEventListener("scroll",e),window.removeEventListener("resize",e),a.current&&window.cancelAnimationFrame(a.current)}},[f,y]),t.jsx("div",{ref:g,style:{...x.placeholderStyle,...T},className:v(R),children:t.jsx("div",{ref:E,className:v(x.isAffixed&&"wim-affix--affixed"),style:x.affixStyle,children:A})})};h.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)"},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const N={title:"Components/Navigation Utilities/Affix",component:h,tags:[],parameters:{layout:"fullscreen"}},l={render:i=>{const{t:n}=S(["docs","common","components"]);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_top")}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(h,{...i,offsetTop:20,children:t.jsx(b,{label:n("story_affix_top"),size:"medium"})})})]})}},d={render:i=>{const{t:n}=S(["docs","common","components"]);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom")}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom_2","Scroll down here...")}),t.jsx(h,{...i,offsetBottom:20,children:t.jsx(b,{label:n("story_affix_bottom"),size:"medium"})}),t.jsx("p",{children:n("story_affix_more")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_affix_scroll_top")}</p>\r
        <div style={{
        marginTop: "100px"
      }}>\r
          <Affix {...args} offsetTop={20}>\r
            <Button label={t("story_affix_top")} size="medium" />\r
          </Affix>\r
        </div>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <p>{t("story_affix_scroll_bottom")}</p>\r
        <div style={{
        marginTop: "120vh"
      }}>\r
          <p>{t("story_affix_scroll_bottom_2", "Scroll down here...")}</p>\r
          <Affix {...args} offsetBottom={20}>\r
            <Button label={t("story_affix_bottom")} size="medium" />\r
          </Affix>\r
          <p>{t("story_affix_more")}</p>\r
        </div>\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const O=["Basic","OffsetBottom"],H=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,OffsetBottom:d,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{H as A,l as B,d as O};
