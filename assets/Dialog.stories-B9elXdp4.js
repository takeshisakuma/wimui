import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as y}from"./iframe-B1TToC6s.js";import{c as a}from"./index-EwYXZEMZ.js";import{O as F}from"./OverlayBase-mwXBwcIa.js";import{u as f}from"./useTranslation-CHJ-TYb-.js";import{B as s}from"./Button-D41HbHwN.js";import{I as R}from"./Input-GX6cw92R.js";import{L as w}from"./FieldTemplate-SwTDQt6n.js";const O=d.createContext(void 0),u=()=>{const r=d.useContext(O);if(!r)throw new Error("useDialog must be used within a Dialog provider");return r},m=({children:r,open:o,defaultOpen:n=!1,onOpenChange:t})=>{const[i,l]=d.useState(n),c=o!==void 0,N=c?o:i,I=d.useId(),q=d.useId(),k=d.useCallback(T=>{c||l(T),t?.(T)},[c,t]);return e.jsx(O.Provider,{value:{open:N,onOpenChange:k,titleId:I,descriptionId:q},children:r})},v=({children:r,asChild:o,className:n})=>{const{onOpenChange:t}=u(),i=()=>{t(!0)};return o&&y.isValidElement(r)?y.cloneElement(r,{onClick:l=>{r.props.onClick?.(l),i()},className:a(n,r.props.className)}):e.jsx("button",{className:a("wim-dialog-trigger",n),onClick:i,children:r})},b=({children:r,className:o,asChild:n})=>{const{t}=f(),{onOpenChange:i}=u(),l=()=>{i(!1)};return n&&y.isValidElement(r)?y.cloneElement(r,{onClick:c=>{r.props.onClick?.(c),l()},className:a(o,r.props.className)}):e.jsx("button",{type:"button",className:a("wim-dialog-close-button",o),onClick:l,"aria-label":t("a11y_close_dialog"),children:r})},D=({children:r,className:o})=>{const{open:n,onOpenChange:t,titleId:i,descriptionId:l}=u();return e.jsx(F,{open:n,onOpenChange:t,overlayClassName:"wim-dialog-overlay",contentClassName:a("wim-dialog-content",o),role:"dialog",transitionProps:{enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to"},children:e.jsx("div",{"aria-labelledby":i,"aria-describedby":l,className:"wim-dialog-content-inner",children:r})})},h=({children:r,className:o})=>e.jsx("div",{className:a("wim-dialog-header",o),children:r}),x=({children:r,className:o})=>e.jsx("div",{className:a("wim-dialog-footer",o),children:r}),C=({children:r,className:o})=>{const{titleId:n}=u();return e.jsx("h2",{id:n,className:a("wim-dialog-title",o),children:r})},j=({children:r,className:o})=>{const{descriptionId:n}=u();return e.jsx("p",{id:n,className:a("wim-dialog-description",o),children:r})};m.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Overlays/Dialog",component:m,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:function(o){const{t:n}=f(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(m,{...o,children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{priority:"primary",label:n("story_dialog_open")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:n("story_dialog_edit_title")}),e.jsx(j,{children:n("story_dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(w,{htmlFor:"name",label:n("story_dialog_name")}),e.jsx(R,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(w,{htmlFor:"username",label:n("story_dialog_username")}),e.jsx(R,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(x,{children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:n("story_dialog_cancel")})}),e.jsx(s,{priority:"primary",label:n("story_dialog_save")})]})]})]})}},g={render:function(){const{t:o}=f(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(m,{children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:o("story_dialog_uncontrolled")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_uncontrolled_title")}),e.jsx(j,{children:o("story_dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story_dialog_uncontrolled_body")}),e.jsxs(x,{children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:o("story_dialog_cancel")})}),e.jsx(s,{priority:"primary",label:o("story_dialog_confirm"),onClick:()=>alert(o("story_dialog_confirmed_msg"))})]})]})]})}},_={render:function(){const{t:o}=f(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[n,t]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story_dialog_curr_state"),": ",o(n?"story_dialog_open_state":"story_dialog_closed_state")]}),e.jsx(s,{priority:"primary",label:o("story_dialog_state_open"),onClick:()=>t(!0)}),e.jsx(m,{open:n,onOpenChange:t,children:e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_controlled_title")}),e.jsx(j,{children:o("story_dialog_controlled_desc")})]}),e.jsx("p",{children:o("story_dialog_controlled_body")}),e.jsxs(x,{children:[e.jsx(s,{priority:"secondary",label:o("story_dialog_cancel"),onClick:()=>t(!1)}),e.jsx(s,{priority:"primary",label:o("story_dialog_state_close"),onClick:()=>t(!1)})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dialog {...args}>\r
        <DialogTrigger asChild>\r
          <Button priority="primary" label={t("story_dialog_open")} />\r
        </DialogTrigger>\r
        <DialogContent>\r
          <DialogHeader>\r
            <DialogTitle>{t("story_dialog_edit_title")}</DialogTitle>\r
            <DialogDescription>{t("story_dialog_edit_desc")}</DialogDescription>\r
          </DialogHeader>\r
          <div style={{
          display: "grid",
          gap: "1.5rem",
          padding: "1rem 0"
        }}>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>\r
              <Label htmlFor="name" label={t("story_dialog_name")} />\r
              <Input id="name" defaultValue="Pedro Duarte" fullWidth />\r
            </div>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>\r
              <Label htmlFor="username" label={t("story_dialog_username")} />\r
              <Input id="username" defaultValue="@peduarte" fullWidth />\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DialogClose>\r
            <Button priority="primary" label={t("story_dialog_save")} />\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dialog>\r
        <DialogTrigger asChild>\r
          <Button priority="secondary" label={t("story_dialog_uncontrolled")} />\r
        </DialogTrigger>\r
        <DialogContent>\r
          <DialogHeader>\r
            <DialogTitle>{t("story_dialog_uncontrolled_title")}</DialogTitle>\r
            <DialogDescription>\r
              {t("story_dialog_uncontrolled_desc")}\r
            </DialogDescription>\r
          </DialogHeader>\r
          <p>{t("story_dialog_uncontrolled_body")}</p>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DialogClose>\r
            <Button priority="primary" label={t("story_dialog_confirm")} onClick={() => alert(t("story_dialog_confirmed_msg"))} />\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>;
  }
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>\r
        <p>\r
          {t("story_dialog_curr_state")}: {open ? t("story_dialog_open_state") : t("story_dialog_closed_state")}\r
        </p>\r
        <Button priority="primary" label={t("story_dialog_state_open")} onClick={() => setOpen(true)} />\r
\r
        <Dialog open={open} onOpenChange={setOpen}>\r
          <DialogContent>\r
            <DialogHeader>\r
              <DialogTitle>{t("story_dialog_controlled_title")}</DialogTitle>\r
              <DialogDescription>\r
                {t("story_dialog_controlled_desc")}\r
              </DialogDescription>\r
            </DialogHeader>\r
            <p>{t("story_dialog_controlled_body")}</p>\r
            <DialogFooter>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} onClick={() => setOpen(false)} />\r
              <Button priority="primary" label={t("story_dialog_state_close")} onClick={() => setOpen(false)} />\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const E=["Default","Uncontrolled","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:_,Default:p,Uncontrolled:g,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{_ as C,A as D,g as U,p as a};
