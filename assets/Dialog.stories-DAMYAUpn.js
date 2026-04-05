import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as h,A as T}from"./iframe-DKMOQHZ-.js";import{c as r}from"./index-CGUrc0iP.js";import{O as k}from"./OverlayBase-Dmby3t1T.js";import{u as f}from"./useTranslation-CMEx9zdK.js";import{B as i}from"./Button-7reoHkqn.js";import{I as q}from"./Input-C3NuueFS.js";import{L as I}from"./FieldTemplate-Be00S5hE.js";const B=d.createContext(void 0),m=()=>{const n=d.useContext(B);if(!n)throw new Error("useDialog must be used within a Dialog provider");return n},y=({children:n,open:o,defaultOpen:t=!1,onOpenChange:a})=>{const[s,l]=d.useState(t),c=o!==void 0,_=c?o:s,N=d.useId(),w=d.useId(),E=d.useCallback(O=>{c||l(O),a?.(O)},[c,a]);return e.jsx(B.Provider,{value:{open:_,onOpenChange:E,titleId:N,descriptionId:w},children:n})},R=({children:n,asChild:o,className:t})=>{const{onOpenChange:a}=m(),s=()=>{a(!0)};return o&&h.isValidElement(n)?h.cloneElement(n,{onClick:l=>{n.props.onClick?.(l),s()},className:r(t,n.props.className)}):e.jsx("button",{className:r("wim-dialog-trigger",t),onClick:s,children:n})},b=({children:n,className:o,asChild:t,ariaLabel:a})=>{const{t:s}=f("common"),l=a??s("a11y.close"),{onOpenChange:c}=m(),_=()=>{c(!1)};return t&&h.isValidElement(n)?h.cloneElement(n,{onClick:N=>{n.props.onClick?.(N),_()},className:r(o,n.props.className)}):e.jsx("button",{type:"button",className:r("wim-dialog-close-button",o),onClick:_,"aria-label":l,children:n})},D=({children:n,className:o})=>{const{open:t,onOpenChange:a,titleId:s,descriptionId:l}=m();return e.jsx(k,{open:t,onOpenChange:a,overlayClassName:"wim-dialog-overlay",contentClassName:r("wim-dialog-content",o),role:"dialog",transitionProps:{enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to"},children:e.jsx("div",{"aria-labelledby":s,"aria-describedby":l,className:"wim-dialog-content-inner",children:n})})},x=({children:n,className:o})=>e.jsx("div",{className:r("wim-dialog-header",o),children:n}),C=({children:n,className:o})=>e.jsx("div",{className:r("wim-dialog-footer",o),children:n}),v=({children:n,className:o})=>{const{titleId:t}=m();return e.jsx("h2",{id:t,className:r("wim-dialog-title",o),children:n})},j=({children:n,className:o})=>{const{descriptionId:t}=m();return e.jsx("p",{id:t,className:r("wim-dialog-description",o),children:n})};y.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Overlays/Dialog",component:y,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:function(o){const{t}=f(T);return e.jsxs(y,{...o,children:[e.jsx(R,{asChild:!0,children:e.jsx(i,{variant:"solid",children:t("story.dialog_open")})}),e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx(v,{children:t("story.dialog_edit_title")}),e.jsx(j,{children:t("story.dialog_edit_desc")})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(I,{htmlFor:"name",label:t("story.dialog_name")}),e.jsx(q,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(I,{htmlFor:"username",label:t("story.dialog_username")}),e.jsx(q,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(C,{children:[e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:"outline",children:t("story.dialog_cancel")})}),e.jsx(i,{variant:"solid",children:t("story.dialog_save")})]})]})]})}},g={render:function(){const{t:o}=f(T);return e.jsxs(y,{children:[e.jsx(R,{asChild:!0,children:e.jsx(i,{variant:"outline",children:o("story.dialog_uncontrolled")})}),e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx(v,{children:o("story.dialog_uncontrolled_title")}),e.jsx(j,{children:o("story.dialog_uncontrolled_desc")})]}),e.jsx("p",{children:o("story.dialog_uncontrolled_body")}),e.jsxs(C,{children:[e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:"outline",children:o("story.dialog_cancel")})}),e.jsx(i,{variant:"solid",onClick:()=>alert(o("story.dialog_confirmed_msg")),children:o("story.dialog_confirm")})]})]})]})}},u={render:function(){const{t:o}=f(T),[t,a]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[o("story.dialog_curr_state"),": ",o(t?"story.dialog_open_state":"story.dialog_closed_state")]}),e.jsx(i,{variant:"solid",onClick:()=>a(!0),children:o("story.dialog_state_open")}),e.jsx(y,{open:t,onOpenChange:a,children:e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx(v,{children:o("story.dialog_controlled_title")}),e.jsx(j,{children:o("story.dialog_controlled_desc")})]}),e.jsx("p",{children:o("story.dialog_controlled_body")}),e.jsxs(C,{children:[e.jsx(i,{variant:"outline",onClick:()=>a(!1),children:o("story.dialog_cancel")}),e.jsx(i,{variant:"solid",onClick:()=>a(!1),children:o("story.dialog_state_close")})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_open")}</Button>
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
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid">{t("story.dialog_save")}</Button>
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
          <Button variant="outline">{t("story.dialog_uncontrolled")}</Button>
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
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid" onClick={() => alert(t("story.dialog_confirmed_msg"))}>{t("story.dialog_confirm")}</Button>
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
        <Button variant="solid" onClick={() => setOpen(true)}>{t("story.dialog_state_open")}</Button>

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
              <Button variant="outline" onClick={() => setOpen(false)}>{t("story.dialog_cancel")}</Button>
              <Button variant="solid" onClick={() => setOpen(false)}>{t("story.dialog_state_close")}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const A=["Default","Uncontrolled","Controlled"],z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:p,Uncontrolled:g,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{z as D};
