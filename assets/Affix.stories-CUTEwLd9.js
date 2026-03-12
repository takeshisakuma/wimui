import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-CxkJglxX.js";import{c as v}from"./index-DuEzwbhC.js";import{B as b}from"./Button-CFQDuGiZ.js";import{u as S}from"./useTranslation-0fSK9VPD.js";const h=({offsetTop:o,offsetBottom:n,onChange:g,target:l=()=>window,children:A,className:R,style:T})=>{const[_,j]=r.useState({isAffixed:!1}),x=r.useRef(null),E=r.useRef(null),a=r.useRef(null),w=r.useRef(!1),y=r.useCallback(()=>{if(!x.current)return;const s=l();if(!s)return;const e=x.current.getBoundingClientRect(),f=s===window||s instanceof Window?{top:0,bottom:window.innerHeight}:s.getBoundingClientRect();let i=!1,m,u;o!==void 0?e.top<f.top+o&&(i=!0,m={position:"fixed",top:f.top+o,width:e.width,height:e.height,zIndex:1e3},u={width:e.width,height:e.height}):n!==void 0&&e.bottom>f.bottom-n&&(i=!0,m={position:"fixed",bottom:window.innerHeight-f.bottom+n,width:e.width,height:e.height,zIndex:1e3},u={width:e.width,height:e.height}),i!==w.current&&(w.current=i,g?.(i)),j(p=>p.isAffixed===i&&JSON.stringify(p.affixStyle)===JSON.stringify(m)&&JSON.stringify(p.placeholderStyle)===JSON.stringify(u)?p:{isAffixed:i,affixStyle:m,placeholderStyle:u})},[o,n,l,g]);return r.useEffect(()=>{const s=l();if(!s)return;const e=()=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(y)};return s.addEventListener("scroll",e),window.addEventListener("resize",e),y(),()=>{s.removeEventListener("scroll",e),window.removeEventListener("resize",e),a.current&&window.cancelAnimationFrame(a.current)}},[l,y]),t.jsx("div",{ref:x,style:{..._.placeholderStyle,...T},className:v(R),children:t.jsx("div",{ref:E,className:v(_.isAffixed&&"wim-affix--affixed"),style:_.affixStyle,children:A})})};h.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)"},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const N={title:"Components/Navigation Utilities/Affix",component:h,tags:[],parameters:{layout:"fullscreen"}},d={render:o=>{const{t:n}=S(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_top")}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(h,{...o,offsetTop:20,children:t.jsx(b,{label:n("story_affix_top"),size:"medium"})})})]})}},c={render:o=>{const{t:n}=S(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom")}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:n("story_affix_scroll_bottom_2","Scroll down here...")}),t.jsx(h,{...o,offsetBottom:20,children:t.jsx(b,{label:n("story_affix_bottom"),size:"medium"})}),t.jsx("p",{children:n("story_affix_more")})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};const O=["Basic","OffsetBottom"],H=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,OffsetBottom:c,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{H as A,d as B,c as O};
