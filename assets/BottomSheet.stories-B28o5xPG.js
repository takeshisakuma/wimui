import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as h}from"./iframe-BisTGuVC.js";import{c as r}from"./index-Ckw0h7AD.js";import{O as w}from"./OverlayBase-qE63CvHa.js";import{B as m}from"./Button-DcecViuG.js";import{u as x}from"./useTranslation-BH3LN071.js";const N=p.createContext(void 0),y=()=>{const o=p.useContext(N);if(!o)throw new Error("useBottomSheet must be used within a BottomSheet provider");return o},u=({children:o,open:t,defaultOpen:s=!1,onOpenChange:n})=>{const[a,i]=p.useState(s),d=t!==void 0,T=d?t:a,v=p.useCallback(S=>{d||i(S),n?.(S)},[d,n]);return e.jsx(N.Provider,{value:{open:T,onOpenChange:v},children:o})},b=({children:o,asChild:t,className:s})=>{const{onOpenChange:n}=y(),a=()=>{n(!0)};return t&&h.isValidElement(o)?h.cloneElement(o,{onClick:i=>{o.props.onClick?.(i),a()},className:r(s,o.props.className)}):e.jsx("button",{className:r("wim-bottom-sheet-trigger",s),onClick:a,children:o})},R=({children:o,className:t,asChild:s})=>{const{onOpenChange:n}=y(),a=()=>{n(!1)};return s&&h.isValidElement(o)?h.cloneElement(o,{onClick:i=>{o.props.onClick?.(i),a()},className:r(t,o.props.className)}):e.jsx("button",{type:"button",className:r("wim-bottom-sheet-close-button",t),onClick:a,children:o})},f=({children:o,className:t})=>{const{open:s,onOpenChange:n}=y(),a={enter:"slide-bottom-enter",enterFrom:"slide-bottom-enter-from",enterTo:"slide-bottom-enter-to",leave:"slide-bottom-leave",leaveFrom:"slide-bottom-leave-from",leaveTo:"slide-bottom-leave-to"};return e.jsxs(w,{open:s,onOpenChange:n,overlayClassName:"wim-bottom-sheet-overlay",contentClassName:r("wim-bottom-sheet-content",t),transitionProps:a,children:[e.jsx("div",{className:"wim-bottom-sheet-handle"}),o]})},_=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-header",t),children:o}),j=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-footer",t),children:o}),g=({children:o,className:t})=>e.jsx("h2",{className:r("wim-bottom-sheet-title",t),children:o}),C=({children:o,className:t})=>e.jsx("p",{className:r("wim-bottom-sheet-description",t),children:o}),B=({children:o,className:t})=>e.jsx("div",{className:r("wim-bottom-sheet-body",t),children:o});u.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"BottomSheetClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"BottomSheetContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"BottomSheetHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"BottomSheetFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"BottomSheetDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"BottomSheetBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Overlays/BottomSheet",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the bottom sheet."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},l={render:o=>{const{t}=x(["docs","common","components"]);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{priority:"primary",label:t("story_bottomsheet_open"),"aria-label":!1})}),e.jsxs(f,{children:[e.jsxs(_,{children:[e.jsx(g,{children:t("story_bottomsheet_title")}),e.jsx(C,{children:t("story_bottomsheet_desc")})]}),e.jsx(B,{children:e.jsxs("div",{className:"space-y-4",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{children:t("story_bottomsheet_body")}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6",borderRadius:"0.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem"},children:t("story_bottomsheet_hint")})}),Array.from({length:10}).map((s,n)=>e.jsxs("p",{children:[t("story_bottomsheet_scroll_item")," ",n+1]},n))]})}),e.jsxs(j,{children:[e.jsx(R,{asChild:!0,children:e.jsx(m,{priority:"secondary",label:t("story_bottomsheet_cancel"),"aria-label":!1})}),e.jsx(m,{priority:"primary",label:t("story_bottomsheet_action"),"aria-label":!1})]})]})]})}},c={render:o=>{const{t}=x(["docs","common","components"]);return e.jsxs(u,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{priority:"secondary",label:t("story_bottomsheet_quick_actions"),"aria-label":!1})}),e.jsxs(f,{children:[e.jsx(_,{children:e.jsx(g,{children:t("story_bottomsheet_select_option")})}),e.jsx(B,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story_bottomsheet_share")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:t("story_bottomsheet_favorite")})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem",color:"#dc2626"},children:e.jsx("span",{children:t("story_bottomsheet_delete")})})]})})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const k=["Default","SingleAction"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:l,SingleAction:c,__namedExportsOrder:k,default:q},Symbol.toStringTag,{value:"Module"}));export{H as B,l as D,c as S};
