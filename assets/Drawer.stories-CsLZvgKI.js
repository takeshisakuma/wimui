import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as g,b as s,c as t,d as i,e as o,f as l,g as x}from"./Drawer-C59EVvYy.js";import{B as e}from"./Button-BqlAiZZA.js";import{r as y}from"./iframe-BsQs8kZI.js";const m={title:"Component/Overlays/Drawer",component:a,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."},slideIn:{control:"boolean",description:"Whether the drawer should slide in when opening."},slideOut:{control:"boolean",description:"Whether the drawer should slide out when closing."}}},d={args:{side:"right"},render:n=>r.jsxs(a,{...n,children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"primary",label:"Open Drawer (Right)"})}),r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"Drawer Title"}),r.jsx(o,{children:"This is a description of the drawer content."})]}),r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("p",{children:"This is the main content area of the drawer."}),r.jsx("p",{children:"You can put any React components here."})]}),r.jsxs(l,{children:[r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})}),r.jsx(e,{priority:"primary",label:"Confirm"})]})]})]})},p={args:{side:"left"},render:n=>r.jsxs(a,{...n,children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Left)"})}),r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"Left Drawer"}),r.jsx(o,{children:"Sliding in from the left side."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Navigation menus often go here."})}),r.jsx(l,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},c={args:{side:"top"},render:n=>r.jsxs(a,{...n,children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Top)"})}),r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"Top Drawer"}),r.jsx(o,{children:"Sliding in from the top."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Useful for notifications or global search."})}),r.jsx(l,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},h={args:{side:"bottom"},render:n=>r.jsxs(a,{...n,children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Open Drawer (Bottom)"})}),r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"Bottom Drawer"}),r.jsx(o,{children:"Sliding in from the bottom."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Often used for mobile menus or settings."})}),r.jsx(l,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})},w={render:()=>{const[n,u]=y.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsxs("p",{children:["Current state: ",n?"Open":"Closed"]}),r.jsx(e,{priority:"primary",label:"Open via State",onClick:()=>u(!0)}),r.jsx(a,{open:n,onOpenChange:u,children:r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"Controlled Drawer"}),r.jsx(o,{children:"This drawer is controlled by external state."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"Click outside or escape to close."})}),r.jsxs(l,{children:[r.jsx(e,{priority:"secondary",label:"Cancel",onClick:()=>u(!1)}),r.jsx(e,{priority:"primary",label:"Close via State",onClick:()=>u(!1)})]})]})})]})}},D={args:{side:"right",slideIn:!1,slideOut:!1},render:n=>r.jsxs(a,{...n,children:[r.jsx(g,{asChild:!0,children:r.jsx(e,{priority:"primary",label:"Open Drawer (No Slide)"})}),r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(i,{children:"No Slide Drawer"}),r.jsx(o,{children:"This drawer fades without sliding."})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:"The slideIn and slideOut options are set to false, so the drawer only fades in and out along with the overlay."})}),r.jsx(l,{children:r.jsx(x,{asChild:!0,children:r.jsx(e,{priority:"secondary",label:"Close"})})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right",
    slideIn: false,
    slideOut: false
  },
  render: args => <Drawer {...args}>\r
            <DrawerTrigger asChild>\r
                <Button priority="primary" label="Open Drawer (No Slide)" />\r
            </DrawerTrigger>\r
            <DrawerContent>\r
                <DrawerHeader>\r
                    <DrawerTitle>No Slide Drawer</DrawerTitle>\r
                    <DrawerDescription>\r
                        This drawer fades without sliding.\r
                    </DrawerDescription>\r
                </DrawerHeader>\r
                <div style={{
        padding: "20px"
      }}>\r
                    <p>The slideIn and slideOut options are set to false, so the drawer only fades in and out along with the overlay.</p>\r
                </div>\r
                <DrawerFooter>\r
                    <DrawerClose asChild>\r
                        <Button priority="secondary" label="Close" />\r
                    </DrawerClose>\r
                </DrawerFooter>\r
            </DrawerContent>\r
        </Drawer>
}`,...D.parameters?.docs?.source}}};const C=["Default","Left","Top","Bottom","Controlled","WithoutSlide"],O=Object.freeze(Object.defineProperty({__proto__:null,Bottom:h,Controlled:w,Default:d,Left:p,Top:c,WithoutSlide:D,__namedExportsOrder:C,default:m},Symbol.toStringTag,{value:"Module"}));export{h as B,w as C,O as D,p as L,c as T,d as a};
