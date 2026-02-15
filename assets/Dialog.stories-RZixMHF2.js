import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as D}from"./iframe-DqzrRnqv.js";import{r as q}from"./index-BvGcitOq.js";import{c as d}from"./index-CSkLIaOp.js";import{F as E}from"./FocusTrap-DQNFfZZq.js";import{B as s}from"./Button-DaxNljQK.js";import{I as R}from"./Input-Dy1BVuyd.js";import{L as O}from"./Label-CrjcDAeg.js";const k=l.createContext(void 0),y=()=>{const a=l.useContext(k);if(!a)throw new Error("useDialog must be used within a Dialog provider");return a},h=({children:a,open:r,defaultOpen:o=!1,onOpenChange:n})=>{const[i,c]=l.useState(o),p=r!==void 0,t=p?r:i,u=l.useId(),I=l.useId(),_=l.useCallback(w=>{p||c(w),n?.(w)},[p,n]);return e.jsx(k.Provider,{value:{open:t,onOpenChange:_,titleId:u,descriptionId:I},children:a})},v=({children:a,asChild:r,className:o})=>{const{onOpenChange:n}=y(),i=()=>{n(!0)};return r&&D.isValidElement(a)?D.cloneElement(a,{onClick:c=>{a.props.onClick?.(c),i()},className:d(o,a.props.className)}):e.jsx("button",{className:d("wim-dialog-trigger",o),onClick:i,children:a})},N=({children:a,className:r,asChild:o})=>{const{onOpenChange:n}=y(),i=()=>{n(!1)};return o&&D.isValidElement(a)?D.cloneElement(a,{onClick:c=>{a.props.onClick?.(c),i()},className:d(r,a.props.className)}):e.jsx("button",{type:"button",className:d("wim-dialog-close-button",r),onClick:i,"aria-label":"Close dialog",children:a})},T=({children:a,className:r})=>{const{open:o,onOpenChange:n,titleId:i,descriptionId:c}=y(),p=l.useRef(null);return l.useEffect(()=>{const t=u=>{u.key==="Escape"&&o&&(u.preventDefault(),u.stopPropagation(),n(!1))};return o&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[o,n]),l.useEffect(()=>{if(o){const t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=t}}},[o]),o?q.createPortal(e.jsx("div",{className:"wim-dialog-overlay","aria-hidden":"true",onClick:t=>{t.target===t.currentTarget&&n(!1)},children:e.jsx(E,{active:o,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsx("div",{ref:p,role:"dialog","aria-modal":"true","aria-labelledby":i,"aria-describedby":c,className:d("wim-dialog-content",r),children:a})})}),document.body):null},C=({children:a,className:r})=>e.jsx("div",{className:d("wim-dialog-header",r),children:a}),x=({children:a,className:r})=>e.jsx("div",{className:d("wim-dialog-footer",r),children:a}),b=({children:a,className:r})=>{const{titleId:o}=y();return e.jsx("h2",{id:o,className:d("wim-dialog-title",r),children:a})},j=({children:a,className:r})=>{const{descriptionId:o}=y();return e.jsx("p",{id:o,className:d("wim-dialog-description",r),children:a})};h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Component/Overlays/Dialog",component:h,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},m={render:a=>e.jsxs(h,{...a,children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{priority:"primary",label:"Open Dialog","aria-label":!1})}),e.jsxs(T,{children:[e.jsxs(C,{children:[e.jsx(b,{children:"Edit Profile"}),e.jsx(j,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",padding:"1rem 0"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"name",label:"Name"}),e.jsx(R,{id:"name",defaultValue:"Pedro Duarte",fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(O,{htmlFor:"username",label:"Username"}),e.jsx(R,{id:"username",defaultValue:"@peduarte",fullWidth:!0})]})]}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Save changes","aria-label":!1})]})]})]})},g={render:()=>e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Open Uncontrolled","aria-label":!1})}),e.jsxs(T,{children:[e.jsxs(C,{children:[e.jsx(b,{children:"Uncontrolled Dialog"}),e.jsx(j,{children:"This dialog manages its own state."})]}),e.jsx("p",{children:"You can close me with logic or the close button."}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(s,{priority:"primary",label:"Confirm Action",onClick:()=>alert("Confirmed!"),"aria-label":!1})]})]})]})},f={render:()=>{const[a,r]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",a?"Open":"Closed"]}),e.jsx(s,{priority:"primary",label:"Open via State",onClick:()=>r(!0),"aria-label":!1}),e.jsx(h,{open:a,onOpenChange:r,children:e.jsxs(T,{children:[e.jsxs(C,{children:[e.jsx(b,{children:"Controlled Dialog"}),e.jsx(j,{children:"This dialog is controlled by external state."})]}),e.jsx("p",{children:"Click outside or escape to close, creating a callback to setOpen(false)."}),e.jsxs(x,{children:[e.jsx(s,{priority:"secondary",label:"Cancel",onClick:()=>r(!1),"aria-label":!1}),e.jsx(s,{priority:"primary",label:"Close via State",onClick:()=>r(!1),"aria-label":!1})]})]})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const F=["Default","Uncontrolled","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:f,Default:m,Uncontrolled:g,__namedExportsOrder:F,default:S},Symbol.toStringTag,{value:"Module"}));export{f as C,A as D,g as U,m as a};
