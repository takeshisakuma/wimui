import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-e7GXbi08.js";import{c as A}from"./index-CyTIjRcp.js";import{B as v}from"./Button-PV4JonB2.js";import{A as S}from"./i18nConstants-BpHxieg5.js";import{u as b}from"./useTranslation-DW6bJnO1.js";const h=({offsetTop:i,offsetBottom:n,onChange:w,target:f=()=>window,children:E,className:R,style:T})=>{const[x,j]=o.useState({isAffixed:!1}),g=o.useRef(null),N=o.useRef(null),a=o.useRef(null),_=o.useRef(!1),y=o.useCallback(()=>{if(!g.current)return;const r=f();if(!r)return;const e=g.current.getBoundingClientRect(),c=r===window||r instanceof Window?{top:0,bottom:window.innerHeight}:r.getBoundingClientRect();let s=!1,m,p;i!==void 0?e.top<c.top+i&&(s=!0,m={position:"fixed",top:c.top+i,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}):n!==void 0&&e.bottom>c.bottom-n&&(s=!0,m={position:"fixed",bottom:window.innerHeight-c.bottom+n,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}),s!==_.current&&(_.current=s,w?.(s)),j(u=>u.isAffixed===s&&JSON.stringify(u.affixStyle)===JSON.stringify(m)&&JSON.stringify(u.placeholderStyle)===JSON.stringify(p)?u:{isAffixed:s,affixStyle:m,placeholderStyle:p})},[i,n,f,w]);return o.useEffect(()=>{const r=f();if(!r)return;const e=()=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(y)};return r.addEventListener("scroll",e),window.addEventListener("resize",e),y(),()=>{r.removeEventListener("scroll",e),window.removeEventListener("resize",e),a.current&&window.cancelAnimationFrame(a.current)}},[f,y]),t.jsx("div",{ref:g,style:{...x.placeholderStyle,...T},className:A(R),children:t.jsx("div",{ref:N,className:A(x.isAffixed&&"wim-affix--affixed"),style:x.affixStyle,children:E})})};h.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)"},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const L={title:"Components/Navigation Utilities/Affix",component:h,tags:[],parameters:{layout:"fullscreen"}},l={render:i=>{const{t:n}=b(S);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_top")}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(h,{...i,offsetTop:20,children:t.jsx(v,{label:n("story_affix_top"),size:"medium"})})})]})}},d={render:i=>{const{t:n}=b(S);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom")}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom_2","Scroll down here...")}),t.jsx(h,{...i,offsetBottom:20,children:t.jsx(v,{label:n("story_affix_bottom"),size:"medium"})}),t.jsx("p",{children:n("story_affix_more")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...d.parameters?.docs?.source}}};const O=["Basic","OffsetBottom"],H=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,OffsetBottom:d,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{H as A,l as B,d as O};
