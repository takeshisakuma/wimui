import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as h,A as _}from"./iframe-DKmwcFSw.js";import{c as r}from"./index-DF_nXgT0.js";import{O as q}from"./OverlayBase-DyVA-nbi.js";import{B as m}from"./Button-BKQogAGJ.js";import{u as N}from"./useTranslation-cHJIwR7k.js";const v=p.createContext(void 0),y=()=>{const o=p.useContext(v);if(!o)throw new Error("useBottomSheet must be used within a BottomSheet provider");return o},u=({children:o,open:t,defaultOpen:s=!1,onOpenChange:n})=>{const[a,i]=p.useState(s),d=t!==void 0,T=d?t:a,w=p.useCallback(x=>{d||i(x),n?.(x)},[d,n]);return e.jsx(v.Provider,{value:{open:T,onOpenChange:w},children:o})},b=({children:o,asChild:t,className:s})=>{const{onOpenChange:n}=y(),a=()=>{n(!0)};return t&&h.isValidElement(o)?h.cloneElement(o,{onClick:i=>{o.props.onClick?.(i),a()},className:r(s,o.props.className)}):e.jsx("button",{className:r("wim-bottom-sheet-trigger",s),onClick:a,children:o})},C=({children:o,className:t,asChild:s})=>{const{onOpenChange:n}=y(),a=()=>{n(!1)};return s&&h.isValidElement(o)?h.cloneElement(o,{onClick:i=>{o.props.onClick?.(i),a()},className:r(t,o.props.className)}):e.jsx("button",{type:"button",className:r("wim-bottom-sheet-close-button",t),onClick:a,children:o})},g=({children:o,className:t})=>{const{open:s,onOpenChange:n}=y(),a={enter:"slide-bottom-enter",enterFrom:"slide-bottom-enter-from",enterTo:"slide-bottom-enter-to",leave:"slide-bottom-leave",leaveFrom:"slide-bottom-leave-from",leaveTo:"slide-bottom-leave-to"};return e.jsxs(q,{open:s,onOpenChange:n,overlayClassName:"wim-bottom-sheet-overlay",contentClassName:r("wim-bottom-sheet-content",t),transitionProps:a,children:[e.jsx("div",{className:"wim-bottom-sheet-handle"}),o]})},f=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-header",t),children:o}),R=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-footer",t),children:o}),B=({children:o,className:t})=>e.jsx("h2",{className:r("wim-bottom-sheet-title",t),children:o}),j=({children:o,className:t})=>e.jsx("p",{className:r("wim-bottom-sheet-description",t),children:o}),S=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-body",t),children:o});u.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"BottomSheetClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"BottomSheetContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"BottomSheetHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"BottomSheetFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"BottomSheetDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"BottomSheetBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Components/Overlays/BottomSheet",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the bottom sheet."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},c={render:o=>{const{t}=N(_);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"filled",children:t("story.bottomsheet_open")})}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(B,{children:t("story.bottomsheet_title")}),e.jsx(j,{children:t("story.bottomsheet_desc")})]}),e.jsx(S,{children:e.jsxs("div",{className:"space-y-4",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{children:t("story.bottomsheet_body")}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--wim-color-surface-variant)",borderRadius:"0.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem"},children:t("story.bottomsheet_hint")})}),Array.from({length:10}).map((s,n)=>e.jsxs("p",{children:[t("story.bottomsheet_scroll_item")," ",n+1]},n))]})}),e.jsxs(R,{children:[e.jsx(C,{asChild:!0,children:e.jsx(m,{variant:"outlined",children:t("story.bottomsheet_cancel")})}),e.jsx(m,{variant:"filled",children:t("story.bottomsheet_action")})]})]})]})}},l={render:o=>{const{t}=N(_);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"outlined",children:t("story.bottomsheet_quick_actions")})}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(B,{children:t("story.bottomsheet_select_option")})}),e.jsx(S,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story.bottomsheet_share")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story.bottomsheet_favorite")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem",color:"var(--wim-color-destructive)"},children:e.jsx("span",{children:t("story.bottomsheet_delete")})})]})})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="filled">{t("story.bottomsheet_open")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_title")}</BottomSheetTitle>
            <BottomSheetDescription>
              {t("story.bottomsheet_desc")}
            </BottomSheetDescription>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div className="space-y-4" style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
              <p>{t("story.bottomsheet_body")}</p>
              <div style={{
              padding: "1rem",
              backgroundColor: "var(--wim-color-surface-variant)",
              borderRadius: "0.5rem"
            }}>
                <p style={{
                fontSize: "0.875rem"
              }}>
                  {t("story.bottomsheet_hint")}
                </p>
              </div>
              {Array.from({
              length: 10
            }).map((_, i) => <p key={i}>
                  {t("story.bottomsheet_scroll_item")} {i + 1}
                </p>)}
            </div>
          </BottomSheetBody>
          <BottomSheetFooter>
            <BottomSheetClose asChild>
              <Button variant="outlined">{t("story.bottomsheet_cancel")}</Button>
            </BottomSheetClose>
            <Button variant="filled">{t("story.bottomsheet_action")}</Button>
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="outlined">{t("story.bottomsheet_quick_actions")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_select_option")}</BottomSheetTitle>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>
                <span>{t("story.bottomsheet_share")}</span>
              </button>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>
                <span>{t("story.bottomsheet_favorite")}</span>
              </button>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem",
              color: "var(--wim-color-destructive)"
            }}>
                <span>{t("story.bottomsheet_delete")}</span>
              </button>
            </div>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheet>;
  }
}`,...l.parameters?.docs?.source}}};const A=["Default","SingleAction"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:c,SingleAction:l,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{L as B};
