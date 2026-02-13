import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t,R as D}from"./iframe-B0YcjJ-F.js";import{r as q}from"./index-CjbqW0Wy.js";import{c}from"./index-DS2BaRx5.js";import{F as E}from"./FocusTrap-BuVRlKRc.js";import{I as S}from"./Icon-l_96L91h.js";import{B as s}from"./Button-CjdOfRRs.js";import{I as k}from"./Input-Dal9-n9t.js";import{L as O}from"./Label-C743uLwx.js";const I=t.createContext(void 0),y=()=>{const a=t.useContext(I);if(!a)throw new Error("useDialog must be used within a Dialog provider");return a},h=({children:a,open:r,defaultOpen:n=!1,onOpenChange:o})=>{const[l,d]=t.useState(n),p=r!==void 0,v=p?r:l,i=t.useId(),m=t.useId(),_=t.useCallback(R=>{p||d(R),o?.(R)},[p,o]);return e.jsx(I.Provider,{value:{open:v,onOpenChange:_,titleId:i,descriptionId:m},children:a})},N=({children:a,asChild:r,className:n})=>{const{onOpenChange:o}=y(),l=()=>{o(!0)};return r&&D.isValidElement(a)?D.cloneElement(a,{onClick:d=>{a.props.onClick?.(d),l()},className:c(n,a.props.className)}):e.jsx("button",{className:c("wim-dialog-trigger",n),onClick:l,children:a})},T=({children:a,className:r,asChild:n})=>{const{onOpenChange:o}=y(),l=()=>{o(!1)};return n&&D.isValidElement(a)?D.cloneElement(a,{onClick:d=>{a.props.onClick?.(d),l()},className:c(r,a.props.className)}):e.jsx("button",{type:"button",className:c("wim-dialog-close-button",r),onClick:l,"aria-label":"Close dialog",children:a})},w=({children:a,className:r,hideCloseButton:n=!1})=>{const{open:o,onOpenChange:l,titleId:d,descriptionId:p}=y(),v=t.useRef(null);return t.useEffect(()=>{const i=m=>{m.key==="Escape"&&o&&(m.preventDefault(),m.stopPropagation(),l(!1))};return o&&document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[o,l]),t.useEffect(()=>{if(o){const i=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[o]),o?q.createPortal(e.jsx("div",{className:"wim-dialog-overlay","aria-hidden":"true",onClick:i=>{i.target===i.currentTarget&&l(!1)},children:e.jsx(E,{active:o,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsxs("div",{ref:v,role:"dialog","aria-modal":"true","aria-labelledby":d,"aria-describedby":p,className:c("wim-dialog-content",r),onClick:i=>i.stopPropagation(),children:[a,!n&&e.jsx("button",{type:"button",className:"wim-dialog-close-icon-button",onClick:()=>l(!1),"aria-label":"Close",children:e.jsx(S,{name:"CloseIcon"})})]})})}),document.body):null},C=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-header",r),children:a}),b=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-footer",r),children:a}),x=({children:a,className:r})=>{const{titleId:n}=y();return e.jsx("h2",{id:n,className:c("wim-dialog-title",r),children:a})},j=({children:a,className:r})=>{const{descriptionId:n}=y();return e.jsx("p",{id:n,className:c("wim-dialog-description",r),children:a})};h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Component/Overlays/Dialog",component:h,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},u={render:a=>e.jsxs(h,{...a,children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"primary",label:"Open Dialog","aria-label":!1})}),e.jsxs(w,{children:[e.jsxs(C,{children:[e.jsx(x,{children:"Edit Profile"}),e.jsx(j,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"name",label:"Name"}),e.jsx(k,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"username",label:"Username"}),e.jsx(k,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(b,{children:[e.jsx(T,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Save changes","aria-label":!1})]})]})]})},g={render:()=>e.jsxs(h,{children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Open Uncontrolled","aria-label":!1})}),e.jsxs(w,{children:[e.jsxs(C,{children:[e.jsx(x,{children:"Uncontrolled Dialog"}),e.jsx(j,{children:"This dialog manages its own state."})]}),e.jsx("p",{children:"You can close me with logic or the close button."}),e.jsxs(b,{children:[e.jsx(T,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Confirm Action",onClick:()=>alert("Confirmed!"),"aria-label":!1})]})]})]})},f={render:()=>{const[a,r]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",a?"Open":"Closed"]}),e.jsx(s,{priority:"primary",label:"Open via State",onClick:()=>r(!0),"aria-label":!1}),e.jsx(h,{open:a,onOpenChange:r,children:e.jsxs(w,{children:[e.jsxs(C,{children:[e.jsx(x,{children:"Controlled Dialog"}),e.jsx(j,{children:"This dialog is controlled by external state."})]}),e.jsx("p",{children:"Click outside or escape to close, creating a callback to setOpen(false)."}),e.jsxs(b,{children:[e.jsx(s,{priority:"secondary",label:"Cancel",onClick:()=>r(!1),"aria-label":!1}),e.jsx(s,{priority:"primary",label:"Close via State",onClick:()=>r(!1),"aria-label":!1})]})]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                    <Button priority="primary" label="Confirm Action" onClick={() => alert('Confirmed!')} aria-label={false as any} />\r
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
                        <p>Click outside or escape to close, creating a callback to setOpen(false).</p>\r
                        <DialogFooter>\r
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} aria-label={false as any} />\r
                            <Button priority="primary" label="Close via State" onClick={() => setOpen(false)} aria-label={false as any} />\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
            </div>;
  }
}`,...f.parameters?.docs?.source}}};const B=["Default","Uncontrolled","Controlled"],z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:f,Default:u,Uncontrolled:g,__namedExportsOrder:B,default:F},Symbol.toStringTag,{value:"Module"}));export{f as C,z as D,g as U,u as a};
