import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v,R as f}from"./iframe-8PFyu00w.js";import{c as h}from"./index-D8TpllMe.js";import{A as w}from"./Avatar-COpKi4uB.js";const g=f.createContext({isOpen:!1,open:()=>{},close:()=>{}}),x=({children:r,className:l,openDelay:d=700,closeDelay:c=300,isOpen:p,onOpenChange:t})=>{const[i,n]=v.useState(!1),o=p!==void 0,y=o?p:i,s=v.useRef(null),a=v.useRef(null),j=()=>{a.current&&(window.clearTimeout(a.current),a.current=null),!y&&(s.current&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{o||n(!0),t?.(!0),s.current=null},d))},T=()=>{s.current&&(window.clearTimeout(s.current),s.current=null),y&&(a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{o||n(!1),t?.(!1),a.current=null},c))};return v.useEffect(()=>()=>{s.current&&window.clearTimeout(s.current),a.current&&window.clearTimeout(a.current)},[]),e.jsx(g.Provider,{value:{isOpen:y,open:j,close:T},children:e.jsx("div",{className:h("wim-hover-card",l),children:r})})},C=({children:r,className:l,asChild:d})=>{const{open:c,close:p}=f.useContext(g),t=()=>c(),i=()=>p();return d&&f.isValidElement(r)?f.cloneElement(r,{onMouseEnter:n=>{r.props.onMouseEnter?.(n),t()},onMouseLeave:n=>{r.props.onMouseLeave?.(n),i()},onFocus:n=>{r.props.onFocus?.(n),t()},onBlur:n=>{r.props.onBlur?.(n),i()},className:h(l,r.props.className)}):e.jsx("div",{className:h("wim-hover-card-trigger",l),onMouseEnter:t,onMouseLeave:i,onFocus:t,onBlur:i,tabIndex:0,children:r})},b=({children:r,className:l,align:d="center",side:c="bottom",sideOffset:p=8,...t})=>{const{isOpen:i,open:n,close:o}=f.useContext(g);return i?e.jsx("div",{className:h("wim-hover-card-content",`wim-hover-card-content--align-${d}`,`wim-hover-card-content--${c}`,l),onMouseEnter:n,onMouseLeave:o,...t,children:r}):null};x.__docgenInfo={description:"",methods:[],displayName:"HoverCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},openDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing the hover card in ms.",defaultValue:{value:"700",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding the hover card in ms.",defaultValue:{value:"300",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"If provided, controls the open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."}}};C.__docgenInfo={description:"",methods:[],displayName:"HoverCardTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const H={title:"Component/Overlays/HoverCard",component:x},u={render:()=>e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"600px"},children:e.jsxs(x,{children:[e.jsx(C,{asChild:!0,children:e.jsx("a",{href:"/",style:{borderRadius:"50%",display:"inline-block",cursor:"pointer"},children:e.jsx(w,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller"})})}),e.jsx(b,{side:"bottom",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(w,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120",alt:"Sarah Miller",size:"lg"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px"},children:"Sarah Miller"}),e.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"@sarah_m"})]}),e.jsx("div",{style:{fontSize:"14px"},children:"Product Designer and Creative Director. Obsessed with detail and digital experiences."}),e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"12px",color:"var(--text-secondary)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--text-primary)"},children:"452"})," Following"]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",color:"var(--text-primary)"},children:"2.8k"})," Followers"]})]})]})})]})})},m={render:()=>e.jsx("div",{style:{padding:"100px",display:"flex",justifyContent:"center",minHeight:"200px"},children:e.jsxs(x,{openDelay:0,closeDelay:0,children:[e.jsx(C,{children:"Hover me (Instant)"}),e.jsx(b,{children:"This hover card appears and disappears immediately."})]})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "600px"
  }}>\r
            <HoverCard>\r
                <HoverCardTrigger asChild>\r
                    <a href="/" style={{
          borderRadius: "50%",
          display: "inline-block",
          cursor: "pointer"
        }}>\r
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" />\r
                    </a>\r
                </HoverCardTrigger>\r
                <HoverCardContent side="bottom">\r
                    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>\r
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" size="lg" />\r
                        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }}>\r
                            <div style={{
              fontWeight: "bold",
              fontSize: "16px"
            }}>Sarah Miller</div>\r
                            <div style={{
              color: "var(--text-secondary)",
              fontSize: "14px"
            }}>@sarah_m</div>\r
                        </div>\r
                        <div style={{
            fontSize: "14px"
          }}>\r
                            Product Designer and Creative Director. Obsessed with detail and digital experiences.\r
                        </div>\r
                        <div style={{
            display: "flex",
            gap: "16px",
            fontSize: "12px",
            color: "var(--text-secondary)"
          }}>\r
                            <div>\r
                                <span style={{
                fontWeight: "bold",
                color: "var(--text-primary)"
              }}>452</span> Following\r
                            </div>\r
                            <div>\r
                                <span style={{
                fontWeight: "bold",
                color: "var(--text-primary)"
              }}>2.8k</span> Followers\r
                            </div>\r
                        </div>\r
                    </div>\r
                </HoverCardContent>\r
            </HoverCard>\r
        </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "100px",
    display: "flex",
    justifyContent: "center",
    minHeight: "200px"
  }}>\r
            <HoverCard openDelay={0} closeDelay={0}>\r
                <HoverCardTrigger>\r
                    Hover me (Instant)\r
                </HoverCardTrigger>\r
                <HoverCardContent>\r
                    This hover card appears and disappears immediately.\r
                </HoverCardContent>\r
            </HoverCard>\r
        </div>
}`,...m.parameters?.docs?.source}}};const S=["Default","Instant"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Instant:m,__namedExportsOrder:S,default:H},Symbol.toStringTag,{value:"Module"}));export{u as D,O as H};
