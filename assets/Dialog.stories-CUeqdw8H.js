import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as _}from"./iframe-BROZIFWR.js";import{c as i}from"./index-CcYSKHnQ.js";import{O as S}from"./OverlayBase-CSrGIqAf.js";import{u as f}from"./useTranslation-BRvuTCUW.js";import{B as a}from"./Button-KHyiNVbB.js";import{I as w}from"./Input-CYEzB4Wg.js";import{L as O}from"./FieldTemplate-CZqFJEkw.js";import{A as b}from"./i18nConstants-BpHxieg5.js";const I=d.createContext(void 0),u=()=>{const r=d.useContext(I);if(!r)throw new Error("useDialog must be used within a Dialog provider");return r},y=({children:r,open:o,defaultOpen:t=!1,onOpenChange:n})=>{const[l,s]=d.useState(t),c=o!==void 0,T=c?o:l,q=d.useId(),E=d.useId(),k=d.useCallback(R=>{c||s(R),n?.(R)},[c,n]);return e.jsx(I.Provider,{value:{open:T,onOpenChange:k,titleId:q,descriptionId:E},children:r})},N=({children:r,asChild:o,className:t})=>{const{onOpenChange:n}=u(),l=()=>{n(!0)};return o&&_.isValidElement(r)?_.cloneElement(r,{onClick:s=>{r.props.onClick?.(s),l()},className:i(t,r.props.className)}):e.jsx("button",{className:i("wim-dialog-trigger",t),onClick:l,children:r})},v=({children:r,className:o,asChild:t})=>{const{t:n}=f(),{onOpenChange:l}=u(),s=()=>{l(!1)};return t&&_.isValidElement(r)?_.cloneElement(r,{onClick:c=>{r.props.onClick?.(c),s()},className:i(o,r.props.className)}):e.jsx("button",{type:"button",className:i("wim-dialog-close-button",o),onClick:s,"aria-label":n("a11y_close_dialog"),children:r})},D=({children:r,className:o})=>{const{open:t,onOpenChange:n,titleId:l,descriptionId:s}=u();return e.jsx(S,{open:t,onOpenChange:n,overlayClassName:"wim-dialog-overlay",contentClassName:i("wim-dialog-content",o),role:"dialog",transitionProps:{enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to"},children:e.jsx("div",{"aria-labelledby":l,"aria-describedby":s,className:"wim-dialog-content-inner",children:r})})},h=({children:r,className:o})=>e.jsx("div",{className:i("wim-dialog-header",o),children:r}),x=({children:r,className:o})=>e.jsx("div",{className:i("wim-dialog-footer",o),children:r}),C=({children:r,className:o})=>{const{titleId:t}=u();return e.jsx("h2",{id:t,className:i("wim-dialog-title",o),children:r})},j=({children:r,className:o})=>{const{descriptionId:t}=u();return e.jsx("p",{id:t,className:i("wim-dialog-description",o),children:r})};y.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Overlays/Dialog",component:y,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:function(o){const{t}=f(b);return e.jsxs(y,{...o,children:[e.jsx(N,{asChild:!0,children:e.jsx(a,{priority:"primary",label:t("story_dialog_open")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:t("story_dialog_edit_title")}),e.jsx(j,{children:t("story_dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"name",label:t("story_dialog_name")}),e.jsx(w,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"username",label:t("story_dialog_username")}),e.jsx(w,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:t("story_dialog_cancel")})}),e.jsx(a,{priority:"primary",label:t("story_dialog_save")})]})]})]})}},g={render:function(){const{t:o}=f(b);return e.jsxs(y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:o("story_dialog_uncontrolled")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_uncontrolled_title")}),e.jsx(j,{children:o("story_dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story_dialog_uncontrolled_body")}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:o("story_dialog_cancel")})}),e.jsx(a,{priority:"primary",label:o("story_dialog_confirm"),onClick:()=>alert(o("story_dialog_confirmed_msg"))})]})]})]})}},m={render:function(){const{t:o}=f(b),[t,n]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story_dialog_curr_state"),": ",o(t?"story_dialog_open_state":"story_dialog_closed_state")]}),e.jsx(a,{priority:"primary",label:o("story_dialog_state_open"),onClick:()=>n(!0)}),e.jsx(y,{open:t,onOpenChange:n,children:e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_controlled_title")}),e.jsx(j,{children:o("story_dialog_controlled_desc")})]}),e.jsx("p",{children:o("story_dialog_controlled_body")}),e.jsxs(x,{children:[e.jsx(a,{priority:"secondary",label:o("story_dialog_cancel"),onClick:()=>n(!1)}),e.jsx(a,{priority:"primary",label:o("story_dialog_state_close"),onClick:()=>n(!1)})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...m.parameters?.docs?.source}}};const A=["Default","Uncontrolled","Controlled"],G=Object.freeze(Object.defineProperty({__proto__:null,Controlled:m,Default:p,Uncontrolled:g,__namedExportsOrder:A,default:F},Symbol.toStringTag,{value:"Module"}));export{G as D};
