import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as v}from"./iframe-DPh0DCaW.js";import{r as B}from"./index-BfOyW5Jg.js";import{c as l}from"./index-LY_QLllZ.js";import{F as _}from"./FocusTrap-CLf2sPB1.js";import{B as o}from"./Button-CUW1CX5w.js";const O=d.createContext(void 0),N=()=>{const r=d.useContext(O);if(!r)throw new Error("useDrawer must be used within a Drawer provider");return r},m=({children:r,open:n,defaultOpen:t=!1,onOpenChange:s,side:i="right"})=>{const[c,a]=d.useState(t),p=n!==void 0,S=p?n:c,k=d.useCallback(R=>{p||a(R),s?.(R)},[p,s]);return e.jsx(O.Provider,{value:{open:S,onOpenChange:k,side:i},children:r})},j=({children:r,asChild:n,className:t})=>{const{onOpenChange:s}=N(),i=()=>{s(!0)};return n&&v.isValidElement(r)?v.cloneElement(r,{onClick:c=>{r.props.onClick?.(c),i()},className:l(t,r.props.className)}):e.jsx("button",{className:l("wim-drawer-trigger",t),onClick:i,children:r})},T=({children:r,className:n,asChild:t})=>{const{onOpenChange:s}=N(),i=()=>{s(!1)};return t&&v.isValidElement(r)?v.cloneElement(r,{onClick:c=>{r.props.onClick?.(c),i()},className:l(n,r.props.className)}):e.jsx("button",{type:"button",className:l("wim-drawer-close-button",n),onClick:i,children:r})},b=({children:r,className:n})=>{const{open:t,onOpenChange:s,side:i}=N(),c=d.useRef(null);return d.useEffect(()=>{const a=p=>{p.key==="Escape"&&t&&(p.preventDefault(),p.stopPropagation(),s(!1))};return t&&document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t,s]),d.useEffect(()=>{if(t){const a=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}}},[t]),t?B.createPortal(e.jsx("div",{className:"wim-drawer-overlay",onClick:a=>{a.target===a.currentTarget&&s(!1)},children:e.jsx(_,{active:t,autoFocus:!0,className:"wim-drawer-focus-trap-wrapper",children:e.jsx("div",{ref:c,role:"dialog","aria-modal":"true",className:l("wim-drawer-content",`wim-drawer-content--${i}`,n),onClick:a=>a.stopPropagation(),children:r})})}),document.body):null},w=({children:r,className:n})=>e.jsx("div",{className:l("wim-drawer-header",n),children:r}),u=({children:r,className:n})=>e.jsx("div",{className:l("wim-drawer-footer",n),children:r}),h=({children:r,className:n})=>e.jsx("h2",{className:l("wim-drawer-title",n),children:r}),D=({children:r,className:n})=>e.jsx("p",{className:l("wim-drawer-description",n),children:r});m.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DrawerClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Component/Overlays/Drawer",component:m,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},g={args:{side:"right"},render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{priority:"primary",label:"Open Drawer (Right)"})}),e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(h,{children:"Drawer Title"}),e.jsx(D,{children:"This is a description of the drawer content."})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:"This is the main content area of the drawer."}),e.jsx("p",{children:"You can put any React components here."})]}),e.jsxs(u,{children:[e.jsx(T,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Close"})}),e.jsx(o,{priority:"primary",label:"Confirm"})]})]})]})},f={args:{side:"left"},render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Open Drawer (Left)"})}),e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(h,{children:"Left Drawer"}),e.jsx(D,{children:"Sliding in from the left side."})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Navigation menus often go here."})}),e.jsx(u,{children:e.jsx(T,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Close"})})})]})]})},y={args:{side:"top"},render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Open Drawer (Top)"})}),e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(h,{children:"Top Drawer"}),e.jsx(D,{children:"Sliding in from the top."})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Useful for notifications or global search."})}),e.jsx(u,{children:e.jsx(T,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Close"})})})]})]})},x={args:{side:"bottom"},render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Open Drawer (Bottom)"})}),e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(h,{children:"Bottom Drawer"}),e.jsx(D,{children:"Sliding in from the bottom."})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Often used for mobile menus or settings."})}),e.jsx(u,{children:e.jsx(T,{asChild:!0,children:e.jsx(o,{priority:"secondary",label:"Close"})})})]})]})},C={render:()=>{const[r,n]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:["Current state: ",r?"Open":"Closed"]}),e.jsx(o,{priority:"primary",label:"Open via State",onClick:()=>n(!0)}),e.jsx(m,{open:r,onOpenChange:n,children:e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(h,{children:"Controlled Drawer"}),e.jsx(D,{children:"This drawer is controlled by external state."})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Click outside or escape to close."})}),e.jsxs(u,{children:[e.jsx(o,{priority:"secondary",label:"Cancel",onClick:()=>n(!1)}),e.jsx(o,{priority:"primary",label:"Close via State",onClick:()=>n(!1)})]})]})})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: args => <Drawer {...args}>\r
            <DrawerTrigger asChild>\r
                <Button priority="primary" label="Open Drawer (Right)" />\r
            </DrawerTrigger>\r
            <DrawerContent>\r
                <DrawerHeader>\r
                    <DrawerTitle>Drawer Title</DrawerTitle>\r
                    <DrawerDescription>\r
                        This is a description of the drawer content.\r
                    </DrawerDescription>\r
                </DrawerHeader>\r
                <div style={{
        padding: "20px"
      }}>\r
                    <p>This is the main content area of the drawer.</p>\r
                    <p>You can put any React components here.</p>\r
                </div>\r
                <DrawerFooter>\r
                    <DrawerClose asChild>\r
                        <Button priority="secondary" label="Close" />\r
                    </DrawerClose>\r
                    <Button priority="primary" label="Confirm" />\r
                </DrawerFooter>\r
            </DrawerContent>\r
        </Drawer>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  },
  render: args => <Drawer {...args}>\r
            <DrawerTrigger asChild>\r
                <Button priority="secondary" label="Open Drawer (Left)" />\r
            </DrawerTrigger>\r
            <DrawerContent>\r
                <DrawerHeader>\r
                    <DrawerTitle>Left Drawer</DrawerTitle>\r
                    <DrawerDescription>\r
                        Sliding in from the left side.\r
                    </DrawerDescription>\r
                </DrawerHeader>\r
                <div style={{
        padding: "20px"
      }}>\r
                    <p>Navigation menus often go here.</p>\r
                </div>\r
                <DrawerFooter>\r
                    <DrawerClose asChild>\r
                        <Button priority="secondary" label="Close" />\r
                    </DrawerClose>\r
                </DrawerFooter>\r
            </DrawerContent>\r
        </Drawer>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top"
  },
  render: args => <Drawer {...args}>\r
            <DrawerTrigger asChild>\r
                <Button priority="secondary" label="Open Drawer (Top)" />\r
            </DrawerTrigger>\r
            <DrawerContent>\r
                <DrawerHeader>\r
                    <DrawerTitle>Top Drawer</DrawerTitle>\r
                    <DrawerDescription>\r
                        Sliding in from the top.\r
                    </DrawerDescription>\r
                </DrawerHeader>\r
                <div style={{
        padding: "20px"
      }}>\r
                    <p>Useful for notifications or global search.</p>\r
                </div>\r
                <DrawerFooter>\r
                    <DrawerClose asChild>\r
                        <Button priority="secondary" label="Close" />\r
                    </DrawerClose>\r
                </DrawerFooter>\r
            </DrawerContent>\r
        </Drawer>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: args => <Drawer {...args}>\r
            <DrawerTrigger asChild>\r
                <Button priority="secondary" label="Open Drawer (Bottom)" />\r
            </DrawerTrigger>\r
            <DrawerContent>\r
                <DrawerHeader>\r
                    <DrawerTitle>Bottom Drawer</DrawerTitle>\r
                    <DrawerDescription>\r
                        Sliding in from the bottom.\r
                    </DrawerDescription>\r
                </DrawerHeader>\r
                <div style={{
        padding: "20px"
      }}>\r
                    <p>Often used for mobile menus or settings.</p>\r
                </div>\r
                <DrawerFooter>\r
                    <DrawerClose asChild>\r
                        <Button priority="secondary" label="Close" />\r
                    </DrawerClose>\r
                </DrawerFooter>\r
            </DrawerContent>\r
        </Drawer>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
                <Drawer open={open} onOpenChange={setOpen}>\r
                    <DrawerContent>\r
                        <DrawerHeader>\r
                            <DrawerTitle>Controlled Drawer</DrawerTitle>\r
                            <DrawerDescription>\r
                                This drawer is controlled by external state.\r
                            </DrawerDescription>\r
                        </DrawerHeader>\r
                        <div style={{
            padding: "20px"
          }}>\r
                            <p>Click outside or escape to close.</p>\r
                        </div>\r
                        <DrawerFooter>\r
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} />\r
                            <Button priority="primary" label="Close via State" onClick={() => setOpen(false)} />\r
                        </DrawerFooter>\r
                    </DrawerContent>\r
                </Drawer>\r
            </div>;
  }
}`,...C.parameters?.docs?.source}}};const E=["Default","Left","Top","Bottom","Controlled"],U=Object.freeze(Object.defineProperty({__proto__:null,Bottom:x,Controlled:C,Default:g,Left:f,Top:y,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{x as B,C,U as D,f as L,y as T,g as a};
