import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s,R as x}from"./iframe-Dc2Bkp14.js";import{c as d}from"./index-CrdPdL0-.js";import{P as E}from"./Portal-CoOEJHal.js";import{T as k}from"./Transition-DDOCA-6X.js";import{F as B}from"./FocusTrap-CQbp-Cpj.js";import{u as f}from"./useTranslation-DLjll_Fb.js";import{B as i}from"./Button-DW653PuT.js";import{I as O}from"./Input-Df9K8GoD.js";import{L as I}from"./Label-Dy02GHsf.js";const q=s.createContext(void 0),_=()=>{const r=s.useContext(q);if(!r)throw new Error("useDialog must be used within a Dialog provider");return r},h=({children:r,open:o,defaultOpen:a=!1,onOpenChange:n})=>{const[l,c]=s.useState(a),p=o!==void 0,D=p?o:l,t=s.useId(),m=s.useId(),F=s.useCallback(w=>{p||c(w),n?.(w)},[p,n]);return e.jsx(q.Provider,{value:{open:D,onOpenChange:F,titleId:t,descriptionId:m},children:r})},N=({children:r,asChild:o,className:a})=>{const{onOpenChange:n}=_(),l=()=>{n(!0)};return o&&x.isValidElement(r)?x.cloneElement(r,{onClick:c=>{r.props.onClick?.(c),l()},className:d(a,r.props.className)}):e.jsx("button",{className:d("wim-dialog-trigger",a),onClick:l,children:r})},R=({children:r,className:o,asChild:a})=>{const{t:n}=f(),{onOpenChange:l}=_(),c=()=>{l(!1)};return a&&x.isValidElement(r)?x.cloneElement(r,{onClick:p=>{r.props.onClick?.(p),c()},className:d(o,r.props.className)}):e.jsx("button",{type:"button",className:d("wim-dialog-close-button",o),onClick:c,"aria-label":n("a11y_close_dialog"),children:r})},b=({children:r,className:o})=>{const{t:a}=f(),{open:n,onOpenChange:l,titleId:c,descriptionId:p}=_(),D=s.useRef(null);return s.useEffect(()=>{const t=m=>{m.key==="Escape"&&n&&(m.preventDefault(),m.stopPropagation(),l(!1))};return n&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[n,l]),s.useEffect(()=>{if(n){const t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=t}}},[n]),e.jsx(E,{children:e.jsx(k,{show:n,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{className:"wim-dialog-overlay",onClick:t=>{t.target===t.currentTarget&&l(!1)},children:e.jsx(k,{show:n,enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to",children:e.jsx(B,{active:n,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsx("dialog",{ref:D,open:n,"aria-labelledby":c,"aria-describedby":p,className:d("wim-dialog-content",o),onClick:t=>t.stopPropagation(),children:r})})})})})})},C=({children:r,className:o})=>e.jsx("div",{className:d("wim-dialog-header",o),children:r}),j=({children:r,className:o})=>e.jsx("div",{className:d("wim-dialog-footer",o),children:r}),v=({children:r,className:o})=>{const{titleId:a}=_();return e.jsx("h2",{id:a,className:d("wim-dialog-title",o),children:r})},T=({children:r,className:o})=>{const{descriptionId:a}=_();return e.jsx("p",{id:a,className:d("wim-dialog-description",o),children:r})};h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Overlays/Dialog",component:h,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},g={render:function(o){const{t:a}=f(["docs","common","components"]);return e.jsxs(h,{...o,children:[e.jsx(N,{asChild:!0,children:e.jsx(i,{priority:"primary",label:a("story_dialog_open"),"aria-label":!1})}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(v,{children:a("story_dialog_edit_title")}),e.jsx(T,{children:a("story_dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(I,{htmlFor:"name",label:a("story_dialog_name")}),e.jsx(O,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(I,{htmlFor:"username",label:a("story_dialog_username")}),e.jsx(O,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(j,{children:[e.jsx(R,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:a("story_dialog_cancel"),"aria-label":!1})}),e.jsx(i,{priority:"primary",label:a("story_dialog_save"),"aria-label":!1})]})]})]})}},u={render:function(){const{t:o}=f(["docs","common","components"]);return e.jsxs(h,{children:[e.jsx(N,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:o("story_dialog_uncontrolled"),"aria-label":!1})}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(v,{children:o("story_dialog_uncontrolled_title")}),e.jsx(T,{children:o("story_dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story_dialog_uncontrolled_body")}),e.jsxs(j,{children:[e.jsx(R,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:o("story_dialog_cancel"),"aria-label":!1})}),e.jsx(i,{priority:"primary",label:o("story_dialog_confirm"),onClick:()=>alert(o("story_dialog_confirmed_msg")),"aria-label":!1})]})]})]})}},y={render:function(){const{t:o}=f(["docs","common","components"]),[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story_dialog_curr_state"),": ",a?"Open":"Closed"]}),e.jsx(i,{priority:"primary",label:o("story_dialog_state_open"),onClick:()=>n(!0),"aria-label":!1}),e.jsx(h,{open:a,onOpenChange:n,children:e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(v,{children:o("story_dialog_controlled_title")}),e.jsx(T,{children:o("story_dialog_controlled_desc")})]}),e.jsx("p",{children:o("story_dialog_controlled_body")}),e.jsxs(j,{children:[e.jsx(i,{priority:"secondary",label:o("story_dialog_cancel"),onClick:()=>n(!1),"aria-label":!1}),e.jsx(i,{priority:"primary",label:o("story_dialog_state_close"),onClick:()=>n(!1),"aria-label":!1})]})]})})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dialog {...args}>\r
        <DialogTrigger asChild>\r
          <Button priority="primary" label={t("story_dialog_open")} aria-label={false as any} />\r
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
              <Button priority="secondary" label={t("story_dialog_cancel")} aria-label={false as any} />\r
            </DialogClose>\r
            <Button priority="primary" label={t("story_dialog_save")} aria-label={false as any} />\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dialog>\r
        <DialogTrigger asChild>\r
          <Button priority="secondary" label={t("story_dialog_uncontrolled")} aria-label={false as any} />\r
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
              <Button priority="secondary" label={t("story_dialog_cancel")} aria-label={false as any} />\r
            </DialogClose>\r
            <Button priority="primary" label={t("story_dialog_confirm")} onClick={() => alert(t("story_dialog_confirmed_msg"))} aria-label={false as any} />\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>\r
        <p>\r
          {t("story_dialog_curr_state")}: {open ? "Open" : "Closed"}\r
        </p>\r
        <Button priority="primary" label={t("story_dialog_state_open")} onClick={() => setOpen(true)} aria-label={false as any} />\r
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
              <Button priority="secondary" label={t("story_dialog_cancel")} onClick={() => setOpen(false)} aria-label={false as any} />\r
              <Button priority="primary" label={t("story_dialog_state_close")} onClick={() => setOpen(false)} aria-label={false as any} />\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const H=["Default","Uncontrolled","Controlled"],J=Object.freeze(Object.defineProperty({__proto__:null,Controlled:y,Default:g,Uncontrolled:u,__namedExportsOrder:H,default:S},Symbol.toStringTag,{value:"Module"}));export{y as C,J as D,u as U,g as a};
