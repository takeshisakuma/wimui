import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as y}from"./iframe-D-r_Glek.js";import{r as O}from"./index-CzewCmxi.js";import{c}from"./index-DVzrmet9.js";import{F as k}from"./FocusTrap-CDZHcixC.js";import{B as s}from"./Button-CT9qJqUo.js";import{I as _}from"./Input-wpx98EHp.js";import{L as q}from"./Label-BjrDuX3d.js";const N=d.createContext(void 0),x=()=>{const o=d.useContext(N);if(!o)throw new Error("useDialog must be used within a Dialog provider");return o},u=({children:o,open:r,defaultOpen:t=!1,onOpenChange:i})=>{const[n,a]=d.useState(t),l=r!==void 0,w=l?r:n,R=d.useCallback(T=>{l||a(T),i?.(T)},[l,i]);return e.jsx(N.Provider,{value:{open:w,onOpenChange:R},children:o})},j=({children:o,asChild:r,className:t})=>{const{onOpenChange:i}=x(),n=a=>{i(!0)};return r&&y.isValidElement(o)?y.cloneElement(o,{onClick:a=>{o.props.onClick?.(a),n()},className:c(t,o.props.className)}):e.jsx("button",{className:c("wim-dialog-trigger",t),onClick:n,children:o})},b=({children:o,className:r,asChild:t})=>{const{onOpenChange:i}=x(),n=()=>{i(!1)};return t&&y.isValidElement(o)?y.cloneElement(o,{onClick:a=>{o.props.onClick?.(a),n()},className:c(r,o.props.className)}):e.jsx("button",{type:"button",className:c("wim-dialog-close-button",r),onClick:n,children:o})},v=({children:o,className:r})=>{const{open:t,onOpenChange:i}=x(),n=d.useRef(null);return d.useEffect(()=>{const a=l=>{l.key==="Escape"&&t&&(l.preventDefault(),l.stopPropagation(),i(!1))};return t&&document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t,i]),d.useEffect(()=>{if(t){const a=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}}},[t]),t?O.createPortal(e.jsx("div",{className:"wim-dialog-overlay",onClick:a=>{a.target===a.currentTarget&&i(!1)},children:e.jsx(k,{active:t,autoFocus:!0,className:"wim-dialog-focus-trap-wrapper",children:e.jsx("div",{ref:n,role:"dialog","aria-modal":"true",className:c("wim-dialog-content",r),onClick:a=>a.stopPropagation(),children:o})})}),document.body):null},h=({children:o,className:r})=>e.jsx("div",{className:c("wim-dialog-header",r),children:o}),f=({children:o,className:r})=>e.jsx("div",{className:c("wim-dialog-footer",r),children:o}),D=({children:o,className:r})=>e.jsx("h2",{className:c("wim-dialog-title",r),children:o}),C=({children:o,className:r})=>e.jsx("p",{className:c("wim-dialog-description",r),children:o});u.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DialogDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Component/Overlays/Dialog",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the dialog."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},p={render:o=>e.jsxs(u,{...o,children:[e.jsx(j,{asChild:!0,children:e.jsx(s,{priority:"primary",label:"Open Dialog"})}),e.jsxs(v,{children:[e.jsxs(h,{children:[e.jsx(D,{children:"Edit Profile"}),e.jsx(C,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsx("div",{style:{display:"grid",gap:"1rem",padding:"1rem 0"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr",alignItems:"center",gap:"1rem"},children:[e.jsx(q,{htmlFor:"name",style:{textAlign:"right"},label:"Name"}),e.jsx(_,{id:"name",defaultValue:"Pedro Duarte"})]})}),e.jsxs(f,{children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel"})}),e.jsx(s,{priority:"primary",label:"Save changes"})]})]})]})},g={render:()=>e.jsxs(u,{children:[e.jsx(j,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Open Uncontrolled"})}),e.jsxs(v,{children:[e.jsxs(h,{children:[e.jsx(D,{children:"Uncontrolled Dialog"}),e.jsx(C,{children:"This dialog manages its own state."})]}),e.jsx("p",{children:"You can close me with logic or the close button."}),e.jsxs(f,{children:[e.jsx(b,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:"Cancel"})}),e.jsx(s,{priority:"primary",label:"Confirm Action",onClick:()=>alert("Confirmed!")})]})]})]})},m={render:()=>{const[o,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",o?"Open":"Closed"]}),e.jsx(s,{priority:"primary",label:"Open via State",onClick:()=>r(!0)}),e.jsx(u,{open:o,onOpenChange:r,children:e.jsxs(v,{children:[e.jsxs(h,{children:[e.jsx(D,{children:"Controlled Dialog"}),e.jsx(C,{children:"This dialog is controlled by external state."})]}),e.jsx("p",{children:"Click outside or escape to close, creating a callback to setOpen(false)."}),e.jsxs(f,{children:[e.jsx(s,{priority:"secondary",label:"Cancel",onClick:()=>r(!1)}),e.jsx(s,{role:"destructive",priority:"primary",label:"Close via State",onClick:()=>r(!1)})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
            <DialogTrigger asChild>\r
                <Button priority="primary" label="Open Dialog" />\r
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
        gap: "1rem",
        padding: "1rem 0"
      }}>\r
                    <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          alignItems: "center",
          gap: "1rem"
        }}>\r
                        <Label htmlFor="name" style={{
            textAlign: "right"
          }} label="Name" />\r
                        <Input id="name" defaultValue="Pedro Duarte" />\r
                    </div>\r
                </div>\r
                <DialogFooter>\r
                    <DialogClose asChild>\r
                        <Button priority="secondary" label="Cancel" />\r
                    </DialogClose>\r
                    <Button priority="primary" label="Save changes" />\r
                </DialogFooter>\r
            </DialogContent>\r
        </Dialog>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
            <DialogTrigger asChild>\r
                <Button priority="secondary" label="Open Uncontrolled" />\r
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
                        <Button priority="secondary" label="Cancel" />\r
                    </DialogClose>\r
                    <Button priority="primary" label="Confirm Action" onClick={() => alert('Confirmed!')} />\r
                </DialogFooter>\r
            </DialogContent>\r
        </Dialog>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>\r
                <p>Current state: {open ? "Open" : "Closed"}</p>\r
                <Button priority="primary" label="Open via State" onClick={() => setOpen(true)} />\r
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
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} />\r
                            <Button role="destructive" priority="primary" label="Close via State" onClick={() => setOpen(false)} />\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const S=["Default","Uncontrolled","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:m,Default:p,Uncontrolled:g,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{m as C,A as D,g as U,p as a};
