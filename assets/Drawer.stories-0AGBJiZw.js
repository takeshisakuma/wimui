import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as x,b as d,c as p,d as c,e as D,f as w,g}from"./Drawer-BjBfdf4d.js";import{B as e}from"./Button-CgAvDf1B.js";import{r as m}from"./iframe-BMhI-kZV.js";const C={title:"Component/Overlays/Drawer",component:a,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},t={args:{side:"right"},render:n=>r.jsxs(a,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"primary",label:"Open Drawer (Right)"})}),r.jsxs(d,{children:[r.jsxs(p,{children:[r.jsx(c,{children:"Drawer Title"}),r.jsx(D,{children:"This is a description of the drawer content."})]}),r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("p",{children:"This is the main content area of the drawer."}),r.jsx("p",{children:"You can put any React components here."})]}),r.jsxs(w,{children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})}),r.jsx(e,{priority:"primary",label:"Confirm"})]})]})]})},s={args:{side:"left"},render:n=>r.jsxs(a,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Left)"})}),r.jsxs(d,{children:[r.jsxs(p,{children:[r.jsx(c,{children:"Left Drawer"}),r.jsx(D,{children:"Sliding in from the left side."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Navigation menus often go here."})}),r.jsx(w,{children:r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},o={args:{side:"top"},render:n=>r.jsxs(a,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Top)"})}),r.jsxs(d,{children:[r.jsxs(p,{children:[r.jsx(c,{children:"Top Drawer"}),r.jsx(D,{children:"Sliding in from the top."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Useful for notifications or global search."})}),r.jsx(w,{children:r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},i={args:{side:"bottom"},render:n=>r.jsxs(a,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Bottom)"})}),r.jsxs(d,{children:[r.jsxs(p,{children:[r.jsx(c,{children:"Bottom Drawer"}),r.jsx(D,{children:"Sliding in from the bottom."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Often used for mobile menus or settings."})}),r.jsx(w,{children:r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},l={render:()=>{const[n,h]=m.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsxs("p",{children:["Current state: ",n?"Open":"Closed"]}),r.jsx(e,{priority:"primary",label:"Open via State",onClick:()=>h(!0)}),r.jsx(a,{open:n,onOpenChange:h,children:r.jsxs(d,{children:[r.jsxs(p,{children:[r.jsx(c,{children:"Controlled Drawer"}),r.jsx(D,{children:"This drawer is controlled by external state."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Click outside or escape to close."})}),r.jsxs(w,{children:[r.jsx(e,{priority:"secondary",label:"Cancel",onClick:()=>h(!1)}),r.jsx(e,{priority:"primary",label:"Close via State",onClick:()=>h(!1)})]})]})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const u=["Default","Left","Top","Bottom","Controlled"],T=Object.freeze(Object.defineProperty({__proto__:null,Bottom:i,Controlled:l,Default:t,Left:s,Top:o,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{i as B,l as C,T as D,s as L,o as T,t as a};
