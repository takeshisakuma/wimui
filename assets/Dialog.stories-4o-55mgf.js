import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i,R as C}from"./iframe-B1hu6V6h.js";import{c}from"./index-DgjD000u.js";import{P as E}from"./Portal-CSd3lG_c.js";import{T as k}from"./Transition-D0A9VrFQ.js";import{F as S}from"./FocusTrap-E-F7Iu7q.js";import{u as I}from"./useTranslation-CA51KGSw.js";import{B as s}from"./Button-DRhr5Ltp.js";import{I as O}from"./Input-DEicrxLX.js";import{L as _}from"./Label-DFJppo05.js";const q=i.createContext(void 0),y=()=>{const a=i.useContext(q);if(!a)throw new Error("useDialog must be used within a Dialog provider");return a},h=({children:a,open:r,defaultOpen:n=!1,onOpenChange:o})=>{const[t,d]=i.useState(n),p=r!==void 0,D=p?r:t,l=i.useId(),m=i.useId(),F=i.useCallback(R=>{p||d(R),o?.(R)},[p,o]);return e.jsx(q.Provider,{value:{open:D,onOpenChange:F,titleId:l,descriptionId:m},children:a})},N=({children:a,asChild:r,className:n})=>{const{onOpenChange:o}=y(),t=()=>{o(!0)};return r&&C.isValidElement(a)?C.cloneElement(a,{onClick:d=>{a.props.onClick?.(d),t()},className:c(n,a.props.className)}):e.jsx("button",{className:c("wim-dialog-trigger",n),onClick:t,children:a})},w=({children:a,className:r,asChild:n})=>{const{t:o}=I(),{onOpenChange:t}=y(),d=()=>{t(!1)};return n&&C.isValidElement(a)?C.cloneElement(a,{onClick:p=>{a.props.onClick?.(p),d()},className:c(r,a.props.className)}):e.jsx("button",{type:"button",className:c("wim-dialog-close-button",r),onClick:d,"aria-label":o("a11y_close_dialog"),children:a})},x=({children:a,className:r})=>{const{t:n}=I(),{open:o,onOpenChange:t,titleId:d,descriptionId:p}=y(),D=i.useRef(null);return i.useEffect(()=>{const l=m=>{m.key==="Escape"&&o&&(m.preventDefault(),m.stopPropagation(),t(!1))};return o&&document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[o,t]),i.useEffect(()=>{if(o){const l=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=l}}},[o]),e.jsx(E,{children:e.jsx(k,{show:o,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{className:"wim-dialog-overlay",onClick:l=>{l.target===l.currentTarget&&t(!1)},children:e.jsx(k,{show:o,enter:"scale-enter",enterFrom:"scale-enter-from",enterTo:"scale-enter-to",leave:"scale-leave",leaveFrom:"scale-leave-from",leaveTo:"scale-leave-to",children:e.jsx(S,{active:o,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsx("dialog",{ref:D,open:o,"aria-labelledby":d,"aria-describedby":p,className:c("wim-dialog-content",r),onClick:l=>l.stopPropagation(),children:a})})})})})})},b=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-header",r),children:a}),v=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-footer",r),children:a}),j=({children:a,className:r})=>{const{titleId:n}=y();return e.jsx("h2",{id:n,className:c("wim-dialog-title",r),children:a})},T=({children:a,className:r})=>{const{descriptionId:n}=y();return e.jsx("p",{id:n,className:c("wim-dialog-description",r),children:a})};h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:"Called when the dialog is closed via Escape key or overlay click."}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Overlays/Dialog",component:h,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},u={render:a=>e.jsxs(h,{...a,children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"primary",label:"Open Dialog","aria-label":!1})}),e.jsxs(x,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"Edit Profile"}),e.jsx(T,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(_,{htmlFor:"name",label:"Name"}),e.jsx(O,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(_,{htmlFor:"username",label:"Username"}),e.jsx(O,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(v,{children:[e.jsx(w,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Save changes","aria-label":!1})]})]})]})},g={render:()=>e.jsxs(h,{children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Open Uncontrolled","aria-label":!1})}),e.jsxs(x,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"Uncontrolled Dialog"}),e.jsx(T,{children:"This dialog manages its own state."})]}),e.jsx("p",{children:"You can close me with logic or the close button."}),e.jsxs(v,{children:[e.jsx(w,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Confirm Action",onClick:()=>alert("Confirmed!"),"aria-label":!1})]})]})]})},f={render:()=>{const[a,r]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",a?"Open":"Closed"]}),e.jsx(s,{priority:"primary",label:"Open via State",onClick:()=>r(!0),"aria-label":!1}),e.jsx(h,{open:a,onOpenChange:r,children:e.jsxs(x,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"Controlled Dialog"}),e.jsx(T,{children:"This dialog is controlled by external state."})]}),e.jsx("p",{children:"Click outside or escape to close, creating a callback to setOpen(false)."}),e.jsxs(v,{children:[e.jsx(s,{priority:"secondary",label:"Cancel",onClick:()=>r(!1),"aria-label":!1}),e.jsx(s,{priority:"primary",label:"Close via State",onClick:()=>r(!1),"aria-label":!1})]})]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
      <DialogTrigger asChild>\r
        <Button priority="primary" label="Open Dialog" aria-label={false as any} />\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Edit Profile</DialogTitle>\r
          <DialogDescription>\r
            Make changes to your profile here. Click save when you&apos;re done.\r
          </DialogDescription>\r
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
            <Label htmlFor="name" label="Name" />\r
            <Input id="name" defaultValue="Pedro Duarte" fullWidth />\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>\r
            <Label htmlFor="username" label="Username" />\r
            <Input id="username" defaultValue="@peduarte" fullWidth />\r
          </div>\r
        </div>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button priority="secondary" label="Cancel" aria-label={false as any} />\r
          </DialogClose>\r
          <Button priority="primary" label="Save changes" aria-label={false as any} />\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button priority="secondary" label="Open Uncontrolled" aria-label={false as any} />\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Uncontrolled Dialog</DialogTitle>\r
          <DialogDescription>\r
            This dialog manages its own state.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <p>You can close me with logic or the close button.</p>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button priority="secondary" label="Cancel" aria-label={false as any} />\r
          </DialogClose>\r
          <Button priority="primary" label="Confirm Action" onClick={() => alert("Confirmed!")} aria-label={false as any} />\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>\r
        <p>Current state: {open ? "Open" : "Closed"}</p>\r
        <Button priority="primary" label="Open via State" onClick={() => setOpen(true)} aria-label={false as any} />\r
\r
        <Dialog open={open} onOpenChange={setOpen}>\r
          <DialogContent>\r
            <DialogHeader>\r
              <DialogTitle>Controlled Dialog</DialogTitle>\r
              <DialogDescription>\r
                This dialog is controlled by external state.\r
              </DialogDescription>\r
            </DialogHeader>\r
            <p>\r
              Click outside or escape to close, creating a callback to\r
              setOpen(false).\r
            </p>\r
            <DialogFooter>\r
              <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} aria-label={false as any} />\r
              <Button priority="primary" label="Close via State" onClick={() => setOpen(false)} aria-label={false as any} />\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const P=["Default","Uncontrolled","Controlled"],G=Object.freeze(Object.defineProperty({__proto__:null,Controlled:f,Default:u,Uncontrolled:g,__namedExportsOrder:P,default:B},Symbol.toStringTag,{value:"Module"}));export{f as C,G as D,g as U,u as a};
