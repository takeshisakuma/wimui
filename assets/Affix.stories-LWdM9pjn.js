import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o,A as v}from"./iframe-BCt2Cqzi.js";import{c as _}from"./index-D0GPwUjE.js";import{B as S}from"./Button-BYZRdEHu.js";import{u as b}from"./useTranslation-iqmbh8MZ.js";const h=({offsetTop:i,offsetBottom:n,onChange:w,target:f=()=>window,children:E,className:R,style:T})=>{const[x,j]=o.useState({isAffixed:!1}),g=o.useRef(null),N=o.useRef(null),a=o.useRef(null),A=o.useRef(!1),y=o.useCallback(()=>{if(!g.current)return;const r=f();if(!r)return;const e=g.current.getBoundingClientRect(),c=r===window||r instanceof Window?{top:0,bottom:window.innerHeight}:r.getBoundingClientRect();let s=!1,m,p;i!==void 0?e.top<c.top+i&&(s=!0,m={position:"fixed",top:c.top+i,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}):n!==void 0&&e.bottom>c.bottom-n&&(s=!0,m={position:"fixed",bottom:window.innerHeight-c.bottom+n,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}),s!==A.current&&(A.current=s,w?.(s)),j(u=>u.isAffixed===s&&JSON.stringify(u.affixStyle)===JSON.stringify(m)&&JSON.stringify(u.placeholderStyle)===JSON.stringify(p)?u:{isAffixed:s,affixStyle:m,placeholderStyle:p})},[i,n,f,w]);return o.useEffect(()=>{const r=f();if(!r)return;const e=()=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(y)};return r.addEventListener("scroll",e),window.addEventListener("resize",e),y(),()=>{r.removeEventListener("scroll",e),window.removeEventListener("resize",e),a.current&&window.cancelAnimationFrame(a.current)}},[f,y]),t.jsx("div",{ref:g,style:{...x.placeholderStyle,...T},className:_(R),children:t.jsx("div",{ref:N,className:_(x.isAffixed&&"wim-affix--affixed"),style:x.affixStyle,children:E})})};h.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)"},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const L={title:"Components/Navigation Utilities/Affix",component:h,tags:[],parameters:{layout:"fullscreen"}},l={render:i=>{const{t:n}=b(v);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story.affix_scroll_top")}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(h,{...i,offsetTop:20,children:t.jsx(S,{label:n("story.affix_top"),size:"md"})})})]})}},d={render:i=>{const{t:n}=b(v);return t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:n("story.affix_scroll_bottom")}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:n("story.affix_scroll_bottom_2","Scroll down here...")}),t.jsx(h,{...i,offsetBottom:20,children:t.jsx(S,{label:n("story.affix_bottom"),size:"md"})}),t.jsx("p",{children:n("story.affix_more")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.affix_scroll_top")}</p>
        <div style={{
        marginTop: "100px"
      }}>
          <Affix {...args} offsetTop={20}>
            <Button label={t("story.affix_top")} size="md" />
          </Affix>
        </div>
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
    }}>
        <p>{t("story.affix_scroll_bottom")}</p>
        <div style={{
        marginTop: "120vh"
      }}>
          <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
          <Affix {...args} offsetBottom={20}>
            <Button label={t("story.affix_bottom")} size="md" />
          </Affix>
          <p>{t("story.affix_more")}</p>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const O=["Basic","OffsetBottom"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,OffsetBottom:d,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{M as A,l as B,d as O};
