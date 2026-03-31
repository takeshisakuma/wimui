import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as _,A as j}from"./iframe-BaVSnw9L.js";import{c as i}from"./index-C9_oYSQB.js";import{O as S}from"./OverlayBase-BRKb0e_T.js";import{u as f}from"./useTranslation-CI9f0OZA.js";import{B as l}from"./Button-D_Dv3d3e.js";import{I as w}from"./Input-BIpULaeD.js";import{L as O}from"./FieldTemplate-B6k27Zq4.js";const I=d.createContext(void 0),m=()=>{const n=d.useContext(I);if(!n)throw new Error("useDialog must be used within a Dialog provider");return n},y=({children:n,open:o,defaultOpen:t=!1,onOpenChange:a})=>{const[r,s]=d.useState(t),c=o!==void 0,T=c?o:r,q=d.useId(),E=d.useId(),k=d.useCallback(R=>{c||s(R),a?.(R)},[c,a]);return e.jsx(I.Provider,{value:{open:T,onOpenChange:k,titleId:q,descriptionId:E},children:n})},b=({children:n,asChild:o,className:t})=>{const{onOpenChange:a}=m(),r=()=>{a(!0)};return o&&_.isValidElement(n)?_.cloneElement(n,{onClick:s=>{n.props.onClick?.(s),r()},className:i(t,n.props.className)}):e.jsx("button",{className:i("wim-dialog-trigger",t),onClick:r,children:n})},N=({children:n,className:o,asChild:t})=>{const{t:a}=f(),{onOpenChange:r}=m(),s=()=>{r(!1)};return t&&_.isValidElement(n)?_.cloneElement(n,{onClick:c=>{n.props.onClick?.(c),s()},className:i(o,n.props.className)}):e.jsx("button",{type:"button",className:i("wim-dialog-close-button",o),onClick:s,"aria-label":a("a11y.close_dialog"),children:n})},D=({children:n,className:o})=>{const{open:t,onOpenChange:a,titleId:r,descriptionId:s}=m();return e.jsx(S,{open:t,onOpenChange:a,overlayClassName:"wim-dialog-overlay",contentClassName:i("wim-dialog-content",o),role:"dialog",transitionProps:{enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to"},children:e.jsx("div",{"aria-labelledby":r,"aria-describedby":s,className:"wim-dialog-content-inner",children:n})})},h=({children:n,className:o})=>e.jsx("div",{className:i("wim-dialog-header",o),children:n}),x=({children:n,className:o})=>e.jsx("div",{className:i("wim-dialog-footer",o),children:n}),C=({children:n,className:o})=>{const{titleId:t}=m();return e.jsx("h2",{id:t,className:i("wim-dialog-title",o),children:n})},v=({children:n,className:o})=>{const{descriptionId:t}=m();return e.jsx("p",{id:t,className:i("wim-dialog-description",o),children:n})};y.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Overlays/Dialog",component:y,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:function(o){const{t}=f(j);return e.jsxs(y,{...o,children:[e.jsx(b,{asChild:!0,children:e.jsx(l,{variant:"filled",label:t("story.dialog_open")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:t("story.dialog_edit_title")}),e.jsx(v,{children:t("story.dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"name",label:t("story.dialog_name")}),e.jsx(w,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"username",label:t("story.dialog_username")}),e.jsx(w,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"outlined",label:t("story.dialog_cancel")})}),e.jsx(l,{variant:"filled",label:t("story.dialog_save")})]})]})]})}},g={render:function(){const{t:o}=f(j);return e.jsxs(y,{children:[e.jsx(b,{asChild:!0,children:e.jsx(l,{variant:"outlined",label:o("story.dialog_uncontrolled")})}),e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story.dialog_uncontrolled_title")}),e.jsx(v,{children:o("story.dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story.dialog_uncontrolled_body")}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"outlined",label:o("story.dialog_cancel")})}),e.jsx(l,{variant:"filled",label:o("story.dialog_confirm"),onClick:()=>alert(o("story.dialog_confirmed_msg"))})]})]})]})}},u={render:function(){const{t:o}=f(j),[t,a]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story.dialog_curr_state"),": ",o(t?"story.dialog_open_state":"story.dialog_closed_state")]}),e.jsx(l,{variant:"filled",label:o("story.dialog_state_open"),onClick:()=>a(!0)}),e.jsx(y,{open:t,onOpenChange:a,children:e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(C,{children:o("story.dialog_controlled_title")}),e.jsx(v,{children:o("story.dialog_controlled_desc")})]}),e.jsx("p",{children:o("story.dialog_controlled_body")}),e.jsxs(x,{children:[e.jsx(l,{variant:"outlined",label:o("story.dialog_cancel"),onClick:()=>a(!1)}),e.jsx(l,{variant:"filled",label:o("story.dialog_state_close"),onClick:()=>a(!1)})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="filled" label={t("story.dialog_open")} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_edit_title")}</DialogTitle>
            <DialogDescription>{t("story.dialog_edit_desc")}</DialogDescription>
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
              <Label htmlFor="name" label={t("story.dialog_name")} />
              <Input id="name" defaultValue="Pedro Duarte" fullWidth />
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <Label htmlFor="username" label={t("story.dialog_username")} />
              <Input id="username" defaultValue="@peduarte" fullWidth />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DialogClose>
            <Button variant="filled" label={t("story.dialog_save")} />
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
          <Button variant="outlined" label={t("story.dialog_uncontrolled")} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_uncontrolled_title")}</DialogTitle>
            <DialogDescription>
              {t("story.dialog_uncontrolled_desc")}
            </DialogDescription>
          </DialogHeader>
          <p>{t("story.dialog_uncontrolled_body")}</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DialogClose>
            <Button variant="filled" label={t("story.dialog_confirm")} onClick={() => alert(t("story.dialog_confirmed_msg"))} />
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
          {t("story.dialog_curr_state")}: {open ? t("story.dialog_open_state") : t("story.dialog_closed_state")}
        </p>
        <Button variant="filled" label={t("story.dialog_state_open")} onClick={() => setOpen(true)} />

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story.dialog_controlled_title")}</DialogTitle>
              <DialogDescription>
                {t("story.dialog_controlled_desc")}
              </DialogDescription>
            </DialogHeader>
            <p>{t("story.dialog_controlled_body")}</p>
            <DialogFooter>
              <Button variant="outlined" label={t("story.dialog_cancel")} onClick={() => setOpen(false)} />
              <Button variant="filled" label={t("story.dialog_state_close")} onClick={() => setOpen(false)} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const A=["Default","Uncontrolled","Controlled"],z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:p,Uncontrolled:g,__namedExportsOrder:A,default:F},Symbol.toStringTag,{value:"Module"}));export{z as D};
