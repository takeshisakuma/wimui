import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as _,A as b}from"./iframe-B7RtKuM4.js";import{c as i}from"./index-BgucfEWj.js";import{O as S}from"./OverlayBase-Drtxkj5e.js";import{u as f}from"./useTranslation-BRrcRHvL.js";import{B as a}from"./Button-Bo9crcFn.js";import{I as w}from"./Input-6R59oZOP.js";import{L as O}from"./FieldTemplate-Dy-pQOzT.js";const I=d.createContext(void 0),m=()=>{const t=d.useContext(I);if(!t)throw new Error("useDialog must be used within a Dialog provider");return t},y=({children:t,open:o,defaultOpen:n=!1,onOpenChange:r})=>{const[l,s]=d.useState(n),c=o!==void 0,T=c?o:l,q=d.useId(),E=d.useId(),k=d.useCallback(R=>{c||s(R),r?.(R)},[c,r]);return e.jsx(I.Provider,{value:{open:T,onOpenChange:k,titleId:q,descriptionId:E},children:t})},N=({children:t,asChild:o,className:n})=>{const{onOpenChange:r}=m(),l=()=>{r(!0)};return o&&_.isValidElement(t)?_.cloneElement(t,{onClick:s=>{t.props.onClick?.(s),l()},className:i(n,t.props.className)}):e.jsx("button",{className:i("wim-dialog-trigger",n),onClick:l,children:t})},v=({children:t,className:o,asChild:n})=>{const{t:r}=f(),{onOpenChange:l}=m(),s=()=>{l(!1)};return n&&_.isValidElement(t)?_.cloneElement(t,{onClick:c=>{t.props.onClick?.(c),s()},className:i(o,t.props.className)}):e.jsx("button",{type:"button",className:i("wim-dialog-close-button",o),onClick:s,"aria-label":r("a11y_close_dialog"),children:t})},D=({children:t,className:o})=>{const{open:n,onOpenChange:r,titleId:l,descriptionId:s}=m();return e.jsx(S,{open:n,onOpenChange:r,overlayClassName:"wim-dialog-overlay",contentClassName:i("wim-dialog-content",o),role:"dialog",transitionProps:{enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to"},children:e.jsx("div",{"aria-labelledby":l,"aria-describedby":s,className:"wim-dialog-content-inner",children:t})})},h=({children:t,className:o})=>e.jsx("div",{className:i("wim-dialog-header",o),children:t}),x=({children:t,className:o})=>e.jsx("div",{className:i("wim-dialog-footer",o),children:t}),C=({children:t,className:o})=>{const{titleId:n}=m();return e.jsx("h2",{id:n,className:i("wim-dialog-title",o),children:t})},j=({children:t,className:o})=>{const{descriptionId:n}=m();return e.jsx("p",{id:n,className:i("wim-dialog-description",o),children:t})};y.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Overlays/Dialog",component:y,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:function(o){const{t:n}=f(b);return e.jsxs(y,{...o,children:[e.jsx(N,{asChild:!0,children:e.jsx(a,{priority:"primary",label:n("story_dialog_open")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:n("story_dialog_edit_title")}),e.jsx(j,{children:n("story_dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"name",label:n("story_dialog_name")}),e.jsx(w,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"username",label:n("story_dialog_username")}),e.jsx(w,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:n("story_dialog_cancel")})}),e.jsx(a,{priority:"primary",label:n("story_dialog_save")})]})]})]})}},g={render:function(){const{t:o}=f(b);return e.jsxs(y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:o("story_dialog_uncontrolled")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_uncontrolled_title")}),e.jsx(j,{children:o("story_dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story_dialog_uncontrolled_body")}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(a,{priority:"secondary",label:o("story_dialog_cancel")})}),e.jsx(a,{priority:"primary",label:o("story_dialog_confirm"),onClick:()=>alert(o("story_dialog_confirmed_msg"))})]})]})]})}},u={render:function(){const{t:o}=f(b),[n,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story_dialog_curr_state"),": ",o(n?"story_dialog_open_state":"story_dialog_closed_state")]}),e.jsx(a,{priority:"primary",label:o("story_dialog_state_open"),onClick:()=>r(!0)}),e.jsx(y,{open:n,onOpenChange:r,children:e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story_dialog_controlled_title")}),e.jsx(j,{children:o("story_dialog_controlled_desc")})]}),e.jsx("p",{children:o("story_dialog_controlled_body")}),e.jsxs(x,{children:[e.jsx(a,{priority:"secondary",label:o("story_dialog_cancel"),onClick:()=>r(!1)}),e.jsx(a,{priority:"primary",label:o("story_dialog_state_close"),onClick:()=>r(!1)})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button priority="primary" label={t("story_dialog_open")} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story_dialog_edit_title")}</DialogTitle>
            <DialogDescription>{t("story_dialog_edit_desc")}</DialogDescription>
          </DialogHeader>
          <div style={{
          display: "grid",
          gap: "1.5rem",
          padding: "1rem 0"
        }}>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <Label htmlFor="name" label={t("story_dialog_name")} />
              <Input id="name" defaultValue="Pedro Duarte" fullWidth />
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <Label htmlFor="username" label={t("story_dialog_username")} />
              <Input id="username" defaultValue="@peduarte" fullWidth />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button priority="secondary" label={t("story_dialog_cancel")} />
            </DialogClose>
            <Button priority="primary" label={t("story_dialog_save")} />
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog>
        <DialogTrigger asChild>
          <Button priority="secondary" label={t("story_dialog_uncontrolled")} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story_dialog_uncontrolled_title")}</DialogTitle>
            <DialogDescription>
              {t("story_dialog_uncontrolled_desc")}
            </DialogDescription>
          </DialogHeader>
          <p>{t("story_dialog_uncontrolled_body")}</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button priority="secondary" label={t("story_dialog_cancel")} />
            </DialogClose>
            <Button priority="primary" label={t("story_dialog_confirm")} onClick={() => alert(t("story_dialog_confirmed_msg"))} />
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    }}>
        <p>
          {t("story_dialog_curr_state")}: {open ? t("story_dialog_open_state") : t("story_dialog_closed_state")}
        </p>
        <Button priority="primary" label={t("story_dialog_state_open")} onClick={() => setOpen(true)} />

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story_dialog_controlled_title")}</DialogTitle>
              <DialogDescription>
                {t("story_dialog_controlled_desc")}
              </DialogDescription>
            </DialogHeader>
            <p>{t("story_dialog_controlled_body")}</p>
            <DialogFooter>
              <Button priority="secondary" label={t("story_dialog_cancel")} onClick={() => setOpen(false)} />
              <Button priority="primary" label={t("story_dialog_state_close")} onClick={() => setOpen(false)} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const A=["Default","Uncontrolled","Controlled"],z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:p,Uncontrolled:g,__namedExportsOrder:A,default:F},Symbol.toStringTag,{value:"Module"}));export{z as D};
