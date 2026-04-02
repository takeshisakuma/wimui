import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v,R as f,A as T}from"./iframe-D3vcI49J.js";import{c as h}from"./index-BONF4KIw.js";import{A as b}from"./Avatar-DBidtYij.js";import{u as j}from"./useTranslation-DPV0a7Ml.js";const g=f.createContext({isOpen:!1,open:()=>{},close:()=>{}}),y=({children:r,className:l,openDelay:c=700,closeDelay:d=300,isOpen:p,onOpenChange:t})=>{const[i,n]=v.useState(!1),o=p!==void 0,x=o?p:i,s=v.useRef(null),a=v.useRef(null),_=()=>{a.current&&(window.clearTimeout(a.current),a.current=null),!x&&(s.current&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{o||n(!0),t?.(!0),s.current=null},c))},H=()=>{s.current&&(window.clearTimeout(s.current),s.current=null),x&&(a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{o||n(!1),t?.(!1),a.current=null},d))};return v.useEffect(()=>()=>{s.current&&window.clearTimeout(s.current),a.current&&window.clearTimeout(a.current)},[]),e.jsx(g.Provider,{value:{isOpen:x,open:_,close:H},children:e.jsx("div",{className:h("wim-hover-card",l),children:r})})},C=({children:r,className:l,asChild:c})=>{const{open:d,close:p}=f.useContext(g),t=()=>d(),i=()=>p();return c&&f.isValidElement(r)?f.cloneElement(r,{onMouseEnter:n=>{r.props.onMouseEnter?.(n),t()},onMouseLeave:n=>{r.props.onMouseLeave?.(n),i()},onFocus:n=>{r.props.onFocus?.(n),t()},onBlur:n=>{r.props.onBlur?.(n),i()},className:h(l,r.props.className)}):e.jsx("div",{className:h("wim-hover-card-trigger",l),onMouseEnter:t,onMouseLeave:i,onFocus:t,onBlur:i,tabIndex:0,children:r})},w=({children:r,className:l,align:c="center",side:d="bottom",sideOffset:p=8,...t})=>{const{isOpen:i,open:n,close:o}=f.useContext(g);return i?e.jsx("div",{className:h("wim-hover-card-content",`wim-hover-card-content--align-${c}`,`wim-hover-card-content--${d}`,l),onMouseEnter:n,onMouseLeave:o,...t,children:r}):null};y.__docgenInfo={description:"",methods:[],displayName:"HoverCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},openDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing the hover card in ms.",defaultValue:{value:"700",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding the hover card in ms.",defaultValue:{value:"300",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"If provided, controls the open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."}}};C.__docgenInfo={description:"",methods:[],displayName:"HoverCardTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const S={title:"Components/Overlays/HoverCard",component:y},u={render:()=>{const{t:r}=j(T);return e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"600px"},children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx("a",{href:"/",style:{borderRadius:"50%",display:"inline-block",cursor:"pointer"},children:e.jsx(b,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller"})})}),e.jsx(w,{side:"bottom",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(b,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller",size:"lg"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px"},children:"Sarah Miller"}),e.jsx("div",{style:{color:"var(--wim-color-text-secondary)",fontSize:"14px"},children:"@sarah_m"})]}),e.jsx("div",{style:{fontSize:"14px"},children:r("story.hovercard_bio")}),e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--wim-color-text-primary)"},children:"452"})," ",r("story.hovercard_following")]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--wim-color-text-primary)"},children:"2.8k"})," ",r("story.hovercard_followers")]})]})]})})]})})}},m={render:()=>{const{t:r}=j(T);return e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",minHeight:"200px"},children:e.jsxs(y,{openDelay:0,closeDelay:0,children:[e.jsx(C,{children:r("story.hovercard_hover_me")}),e.jsx(w,{children:r("story.hovercard_instant_desc")})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "600px"
    }}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="/" style={{
            borderRadius: "50%",
            display: "inline-block",
            cursor: "pointer"
          }}>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="bottom">
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" size="lg" />
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}>
                <div style={{
                fontWeight: "bold",
                fontSize: "16px"
              }}>
                  Sarah Miller
                </div>
                <div style={{
                color: "var(--wim-color-text-secondary)",
                fontSize: "14px"
              }}>
                  @sarah_m
                </div>
              </div>
              <div style={{
              fontSize: "14px"
            }}>
                {t("story.hovercard_bio")}
              </div>
              <div style={{
              display: "flex",
              gap: "16px",
              fontSize: "12px",
              color: "var(--wim-color-text-secondary)"
            }}>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)"
                }}>
                    452
                  </span>{" "}
                  {t("story.hovercard_following")}
                </div>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)"
                }}>
                    2.8k
                  </span>{" "}
                  {t("story.hovercard_followers")}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      minHeight: "200px"
    }}>
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger>{t("story.hovercard_hover_me")}</HoverCardTrigger>
          <HoverCardContent>{t("story.hovercard_instant_desc")}</HoverCardContent>
        </HoverCard>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const M=["Default","Instant"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Instant:m,__namedExportsOrder:M,default:S},Symbol.toStringTag,{value:"Module"}));export{u as D,O as H};
