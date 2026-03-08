import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as h}from"./iframe-c-ynOOH6.js";import{c as a}from"./index-CYDtE1TD.js";import{P as k}from"./Portal-ri_Vt4sN.js";import{T as S}from"./Transition-CaaMZL9C.js";import{F as q}from"./FocusTrap-DAntdDjr.js";import{B as p}from"./Button-BHht7yYi.js";import{u as N}from"./useTranslation-BS4yh-5V.js";const j=l.createContext(void 0),y=()=>{const o=l.useContext(j);if(!o)throw new Error("useBottomSheet must be used within a BottomSheet provider");return o},u=({children:o,open:t,defaultOpen:r=!1,onOpenChange:s})=>{const[i,n]=l.useState(r),d=t!==void 0,C=d?t:i,w=l.useCallback(B=>{d||n(B),s?.(B)},[d,s]);return e.jsx(j.Provider,{value:{open:C,onOpenChange:w},children:o})},b=({children:o,asChild:t,className:r})=>{const{onOpenChange:s}=y(),i=()=>{s(!0)};return t&&h.isValidElement(o)?h.cloneElement(o,{onClick:n=>{o.props.onClick?.(n),i()},className:a(r,o.props.className)}):e.jsx("button",{className:a("wim-bottom-sheet-trigger",r),onClick:i,children:o})},v=({children:o,className:t,asChild:r})=>{const{onOpenChange:s}=y(),i=()=>{s(!1)};return r&&h.isValidElement(o)?h.cloneElement(o,{onClick:n=>{o.props.onClick?.(n),i()},className:a(t,o.props.className)}):e.jsx("button",{type:"button",className:a("wim-bottom-sheet-close-button",t),onClick:i,children:o})},f=({children:o,className:t})=>{const{open:r,onOpenChange:s}=y(),i=l.useRef(null);return l.useEffect(()=>{const n=d=>{d.key==="Escape"&&r&&(d.preventDefault(),d.stopPropagation(),s(!1))};return r&&document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[r,s]),l.useEffect(()=>{if(r){const n=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=n}}},[r]),e.jsx(k,{children:e.jsx(S,{show:r,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{className:"wim-bottom-sheet-overlay",onClick:n=>{n.target===n.currentTarget&&s(!1)},children:e.jsx(S,{show:r,enter:"slide-bottom-enter",enterFrom:"slide-bottom-enter-from",enterTo:"slide-bottom-enter-to",leave:"slide-bottom-leave",leaveFrom:"slide-bottom-leave-from",leaveTo:"slide-bottom-leave-to",children:e.jsx(q,{active:r,autoFocus:!0,className:"wim-bottom-sheet-focus-trap-wrapper",children:e.jsxs("div",{ref:i,role:"dialog","aria-modal":"true",className:a("wim-bottom-sheet-content",t),onClick:n=>n.stopPropagation(),children:[e.jsx("div",{className:"wim-bottom-sheet-handle"}),o]})})})})})})},g=({children:o,className:t})=>e.jsx("div",{className:a("wim-bottom-sheet-header",t),children:o}),R=({children:o,className:t})=>e.jsx("div",{className:a("wim-bottom-sheet-footer",t),children:o}),_=({children:o,className:t})=>e.jsx("h2",{className:a("wim-bottom-sheet-title",t),children:o}),T=({children:o,className:t})=>e.jsx("p",{className:a("wim-bottom-sheet-description",t),children:o}),x=({children:o,className:t})=>e.jsx("div",{className:a("wim-bottom-sheet-body",t),children:o});u.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"BottomSheetClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"BottomSheetContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"BottomSheetHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"BottomSheetFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"BottomSheetDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"BottomSheetBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/Overlays/BottomSheet",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the bottom sheet."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},c={render:o=>{const{t}=N(["docs","common","components"]);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(p,{priority:"primary",label:t("story_bottomsheet_open"),"aria-label":!1})}),e.jsxs(f,{children:[e.jsxs(g,{children:[e.jsx(_,{children:t("story_bottomsheet_title")}),e.jsx(T,{children:t("story_bottomsheet_desc")})]}),e.jsx(x,{children:e.jsxs("div",{className:"space-y-4",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{children:t("story_bottomsheet_body")}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6",borderRadius:"0.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem"},children:t("story_bottomsheet_hint")})}),Array.from({length:10}).map((r,s)=>e.jsxs("p",{children:[t("story_bottomsheet_scroll_item")," ",s+1]},s))]})}),e.jsxs(R,{children:[e.jsx(v,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:t("story_bottomsheet_cancel"),"aria-label":!1})}),e.jsx(p,{priority:"primary",label:t("story_bottomsheet_action"),"aria-label":!1})]})]})]})}},m={render:o=>{const{t}=N(["docs","common","components"]);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:t("story_bottomsheet_quick_actions"),"aria-label":!1})}),e.jsxs(f,{children:[e.jsx(g,{children:e.jsx(_,{children:t("story_bottomsheet_select_option")})}),e.jsx(x,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story_bottomsheet_share")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story_bottomsheet_favorite")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem",color:"#dc2626"},children:e.jsx("span",{children:t("story_bottomsheet_delete")})})]})})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <BottomSheet {...args}>\r
        <BottomSheetTrigger asChild>\r
          <Button priority="primary" label={t("story_bottomsheet_open")} aria-label={false as any} />\r
        </BottomSheetTrigger>\r
        <BottomSheetContent>\r
          <BottomSheetHeader>\r
            <BottomSheetTitle>{t("story_bottomsheet_title")}</BottomSheetTitle>\r
            <BottomSheetDescription>\r
              {t("story_bottomsheet_desc")}\r
            </BottomSheetDescription>\r
          </BottomSheetHeader>\r
          <BottomSheetBody>\r
            <div className="space-y-4" style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>\r
              <p>{t("story_bottomsheet_body")}</p>\r
              <div style={{
              padding: "1rem",
              backgroundColor: "#f3f4f6",
              borderRadius: "0.5rem"
            }}>\r
                <p style={{
                fontSize: "0.875rem"
              }}>\r
                  {t("story_bottomsheet_hint")}\r
                </p>\r
              </div>\r
              {Array.from({
              length: 10
            }).map((_, i) => <p key={i}>\r
                  {t("story_bottomsheet_scroll_item")} {i + 1}\r
                </p>)}\r
            </div>\r
          </BottomSheetBody>\r
          <BottomSheetFooter>\r
            <BottomSheetClose asChild>\r
              <Button priority="secondary" label={t("story_bottomsheet_cancel")} aria-label={false as any} />\r
            </BottomSheetClose>\r
            <Button priority="primary" label={t("story_bottomsheet_action")} aria-label={false as any} />\r
          </BottomSheetFooter>\r
        </BottomSheetContent>\r
      </BottomSheet>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <BottomSheet {...args}>\r
        <BottomSheetTrigger asChild>\r
          <Button priority="secondary" label={t("story_bottomsheet_quick_actions")} aria-label={false as any} />\r
        </BottomSheetTrigger>\r
        <BottomSheetContent>\r
          <BottomSheetHeader>\r
            <BottomSheetTitle>{t("story_bottomsheet_select_option")}</BottomSheetTitle>\r
          </BottomSheetHeader>\r
          <BottomSheetBody>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>\r
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>\r
                <span>{t("story_bottomsheet_share")}</span>\r
              </button>\r
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>\r
                <span>{t("story_bottomsheet_favorite")}</span>\r
              </button>\r
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem",
              color: "#dc2626"
            }}>\r
                <span>{t("story_bottomsheet_delete")}</span>\r
              </button>\r
            </div>\r
          </BottomSheetBody>\r
        </BottomSheetContent>\r
      </BottomSheet>;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","SingleAction"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:c,SingleAction:m,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{L as B,c as D,m as S};
