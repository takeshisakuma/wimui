import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v,R as f,A as w}from"./iframe-Bi63tkQv.js";import{c as h}from"./index-BAeKNy2L.js";import{A as b}from"./Avatar-DWykEmzJ.js";import{u as T}from"./useTranslation-D6_oF364.js";const g=f.createContext({isOpen:!1,open:()=>{},close:()=>{}}),y=({children:n,className:l,openDelay:d=700,closeDelay:c=300,isOpen:p,onOpenChange:t})=>{const[i,r]=v.useState(!1),o=p!==void 0,x=o?p:i,s=v.useRef(null),a=v.useRef(null),j=()=>{a.current&&(window.clearTimeout(a.current),a.current=null),!x&&(s.current&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{o||r(!0),t?.(!0),s.current=null},d))},H=()=>{s.current&&(window.clearTimeout(s.current),s.current=null),x&&(a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{o||r(!1),t?.(!1),a.current=null},c))};return v.useEffect(()=>()=>{s.current&&window.clearTimeout(s.current),a.current&&window.clearTimeout(a.current)},[]),e.jsx(g.Provider,{value:{isOpen:x,open:j,close:H},children:e.jsx("div",{className:h("wim-hover-card",l),children:n})})},C=({children:n,className:l,asChild:d})=>{const{open:c,close:p}=f.useContext(g),t=()=>c(),i=()=>p();return d&&f.isValidElement(n)?f.cloneElement(n,{onMouseEnter:r=>{n.props.onMouseEnter?.(r),t()},onMouseLeave:r=>{n.props.onMouseLeave?.(r),i()},onFocus:r=>{n.props.onFocus?.(r),t()},onBlur:r=>{n.props.onBlur?.(r),i()},className:h(l,n.props.className)}):e.jsx("div",{className:h("wim-hover-card-trigger",l),onMouseEnter:t,onMouseLeave:i,onFocus:t,onBlur:i,tabIndex:0,children:n})},_=({children:n,className:l,align:d="center",side:c="bottom",sideOffset:p=8,...t})=>{const{isOpen:i,open:r,close:o}=f.useContext(g);return i?e.jsx("div",{className:h("wim-hover-card-content",`wim-hover-card-content--align-${d}`,`wim-hover-card-content--${c}`,l),onMouseEnter:r,onMouseLeave:o,...t,children:n}):null};y.__docgenInfo={description:"",methods:[],displayName:"HoverCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},openDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing the hover card in ms.",defaultValue:{value:"700",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding the hover card in ms.",defaultValue:{value:"300",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"If provided, controls the open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."}}};C.__docgenInfo={description:"",methods:[],displayName:"HoverCardTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const S={title:"Components/Overlays/HoverCard",component:y},u={render:()=>{const{t:n}=T(w);return e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"600px"},children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx("a",{href:"/",style:{borderRadius:"50%",display:"inline-block",cursor:"pointer"},children:e.jsx(b,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller"})})}),e.jsx(_,{side:"bottom",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(b,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller",size:"large"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px"},children:"Sarah Miller"}),e.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"@sarah_m"})]}),e.jsx("div",{style:{fontSize:"14px"},children:n("story_hovercard_bio")}),e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"12px",color:"var(--text-secondary)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--text-primary)"},children:"452"})," ",n("story_hovercard_following")]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--text-primary)"},children:"2.8k"})," ",n("story_hovercard_followers")]})]})]})})]})})}},m={render:()=>{const{t:n}=T(w);return e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",minHeight:"200px"},children:e.jsxs(y,{openDelay:0,closeDelay:0,children:[e.jsx(C,{children:n("story_hovercard_hover_me")}),e.jsx(_,{children:n("story_hovercard_instant_desc")})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" size="large" />
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
                color: "var(--text-secondary)",
                fontSize: "14px"
              }}>
                  @sarah_m
                </div>
              </div>
              <div style={{
              fontSize: "14px"
            }}>
                {t("story_hovercard_bio")}
              </div>
              <div style={{
              display: "flex",
              gap: "16px",
              fontSize: "12px",
              color: "var(--text-secondary)"
            }}>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--text-primary)"
                }}>
                    452
                  </span>{" "}
                  {t("story_hovercard_following")}
                </div>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--text-primary)"
                }}>
                    2.8k
                  </span>{" "}
                  {t("story_hovercard_followers")}
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
          <HoverCardTrigger>{t("story_hovercard_hover_me")}</HoverCardTrigger>
          <HoverCardContent>{t("story_hovercard_instant_desc")}</HoverCardContent>
        </HoverCard>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const M=["Default","Instant"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Instant:m,__namedExportsOrder:M,default:S},Symbol.toStringTag,{value:"Module"}));export{u as D,O as H};
