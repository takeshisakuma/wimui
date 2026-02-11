import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as f}from"./iframe-BSv3CQ2B.js";import{r as _}from"./index-CUDJJ2Dz.js";import{c}from"./index-D6IVOHGh.js";import{F as q}from"./FocusTrap-ECVL8tNL.js";import{B as s}from"./Button-3HkaewL4.js";import{I as T}from"./Input-wRnerCfd.js";import{L as w}from"./Label-CjmUsCSn.js";const R=d.createContext(void 0),x=()=>{const a=d.useContext(R);if(!a)throw new Error("useDialog must be used within a Dialog provider");return a},u=({children:a,open:r,defaultOpen:l=!1,onOpenChange:t})=>{const[i,o]=d.useState(l),n=r!==void 0,O=n?r:i,k=d.useCallback(N=>{n||o(N),t?.(N)},[n,t]);return e.jsx(R.Provider,{value:{open:O,onOpenChange:k},children:a})},b=({children:a,asChild:r,className:l})=>{const{onOpenChange:t}=x(),i=o=>{t(!0)};return r&&f.isValidElement(a)?f.cloneElement(a,{onClick:o=>{a.props.onClick?.(o),i()},className:c(l,a.props.className)}):e.jsx("button",{className:c("wim-dialog-trigger",l),onClick:i,children:a})},j=({children:a,className:r,asChild:l})=>{const{onOpenChange:t}=x(),i=()=>{t(!1)};return l&&f.isValidElement(a)?f.cloneElement(a,{onClick:o=>{a.props.onClick?.(o),i()},className:c(r,a.props.className)}):e.jsx("button",{type:"button",className:c("wim-dialog-close-button",r),onClick:i,children:a})},v=({children:a,className:r})=>{const{open:l,onOpenChange:t}=x(),i=d.useRef(null);return d.useEffect(()=>{const o=n=>{n.key==="Escape"&&l&&(n.preventDefault(),n.stopPropagation(),t(!1))};return l&&document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[l,t]),d.useEffect(()=>{if(l){const o=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=o}}},[l]),l?_.createPortal(e.jsx("div",{className:"wim-dialog-overlay",onClick:o=>{o.target===o.currentTarget&&t(!1)},children:e.jsx(q,{active:l,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsx("div",{ref:i,role:"dialog","aria-modal":"true",className:c("wim-dialog-content",r),onClick:o=>o.stopPropagation(),children:a})})}),document.body):null},y=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-header",r),children:a}),h=({children:a,className:r})=>e.jsx("div",{className:c("wim-dialog-footer",r),children:a}),D=({children:a,className:r})=>e.jsx("h2",{className:c("wim-dialog-title",r),children:a}),C=({children:a,className:r})=>e.jsx("p",{className:c("wim-dialog-description",r),children:a});u.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Component/Overlays/Dialog",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:a=>e.jsxs(u,{...a,children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"primary",label:"Open Dialog","aria-label":!1})}),e.jsxs(v,{children:[e.jsxs(y,{children:[e.jsx(D,{children:"Edit Profile"}),e.jsx(C,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(w,{htmlFor:"name",label:"Name"}),e.jsx(T,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(w,{htmlFor:"username",label:"Username"}),e.jsx(T,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(h,{children:[e.jsx(j,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Save changes","aria-label":!1})]})]})]})},m={render:()=>e.jsxs(u,{children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Open Uncontrolled","aria-label":!1})}),e.jsxs(v,{children:[e.jsxs(y,{children:[e.jsx(D,{children:"Uncontrolled Dialog"}),e.jsx(C,{children:"This dialog manages its own state."})]}),e.jsx("p",{children:"You can close me with logic or the close button."}),e.jsxs(h,{children:[e.jsx(j,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Confirm Action",onClick:()=>alert("Confirmed!"),"aria-label":!1})]})]})]})},g={render:()=>{const[a,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",a?"Open":"Closed"]}),e.jsx(s,{priority:"primary",label:"Open via State",onClick:()=>r(!0),"aria-label":!1}),e.jsx(u,{open:a,onOpenChange:r,children:e.jsxs(v,{children:[e.jsxs(y,{children:[e.jsx(D,{children:"Controlled Dialog"}),e.jsx(C,{children:"This dialog is controlled by external state."})]}),e.jsx("p",{children:"Click outside or escape to close, creating a callback to setOpen(false)."}),e.jsxs(h,{children:[e.jsx(s,{priority:"secondary",label:"Cancel",onClick:()=>r(!1),"aria-label":!1}),e.jsx(s,{role:"destructive",priority:"primary",label:"Close via State",onClick:()=>r(!1),"aria-label":!1})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
            <DialogTrigger asChild>\r
                <Button priority="primary" label="Open Dialog" aria-label={false as any} />\r
            </DialogTrigger>\r
            <DialogContent>\r
                <DialogHeader>\r
                    <DialogTitle>Edit Profile</DialogTitle>\r
                    <DialogDescription>\r
                        Make changes to your profile here. Click save when you're done.\r
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                            <Button role="destructive" priority="primary" label="Close via State" onClick={() => setOpen(false)} aria-label={false as any} />\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
            </div>;
  }
}`,...g.parameters?.docs?.source}}};const S=["Default","Uncontrolled","Controlled"],W=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:p,Uncontrolled:m,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{g as C,W as D,m as U,p as a};
