import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as x,b as a,c as s,d as i,e as d,f as l,g as j}from"./Drawer-C8Pm5lra.js";import{B as t}from"./Button-C2cseuPH.js";import{r as f,A as c}from"./iframe-2AhiBTnk.js";import{u as p}from"./useTranslation-1ObP60Ir.js";const m={title:"Components/Overlays/Drawer",component:o,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."},slideIn:{control:"boolean",description:"Whether the drawer should slide in when opening."},slideOut:{control:"boolean",description:"Whether the drawer should slide out when closing."}}},_={args:{side:"right"},render:function(n){const{t:e}=p(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{variant:"filled",children:e("story.drawer_open_right")})}),r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:e("story.drawer_title")}),r.jsx(d,{children:e("story.drawer_desc")})]}),r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("p",{children:e("story.drawer_body1")}),r.jsx("p",{children:e("story.drawer_body2")})]}),r.jsxs(l,{children:[r.jsx(j,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.dialog_cancel")})}),r.jsx(t,{variant:"filled",children:e("story.drawer_confirm")})]})]})]})}},u={args:{side:"left"},render:function(n){const{t:e}=p(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.drawer_open_left")})}),r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:e("story.drawer_left_title")}),r.jsx(d,{children:e("story.drawer_left_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story.drawer_left_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.dialog_cancel")})})})]})]})}},h={args:{side:"top"},render:function(n){const{t:e}=p(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.drawer_open_top")})}),r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:e("story.drawer_top_title")}),r.jsx(d,{children:e("story.drawer_top_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story.drawer_top_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.dialog_cancel")})})})]})]})}},D={args:{side:"bottom"},render:function(n){const{t:e}=p(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.drawer_open_bottom")})}),r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:e("story.drawer_bottom_title")}),r.jsx(d,{children:e("story.drawer_bottom_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story.drawer_bottom_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.dialog_cancel")})})})]})]})}},g={render:function(){const{t:n}=p(c),[e,C]=f.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsxs("p",{children:[n("story.dialog_curr_state"),": ",e?"Open":"Closed"]}),r.jsx(t,{variant:"filled",onClick:()=>C(!0),children:n("story.dialog_state_open")}),r.jsx(o,{open:e,onOpenChange:C,children:r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:n("story.drawer_controlled_title")}),r.jsx(d,{children:n("story.dialog_controlled_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:n("story.dialog_controlled_body")})}),r.jsxs(l,{children:[r.jsx(t,{variant:"outline",onClick:()=>C(!1),children:n("story.dialog_cancel")}),r.jsx(t,{variant:"filled",onClick:()=>C(!1),children:n("story.dialog_state_close")})]})]})})]})}},y={args:{side:"right",slideIn:!1,slideOut:!1},render:function(n){const{t:e}=p(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{variant:"filled",children:e("story.drawer_open_no_slide")})}),r.jsxs(a,{children:[r.jsxs(s,{children:[r.jsx(i,{children:e("story.drawer_no_slide_title")}),r.jsx(d,{children:e("story.drawer_no_slide_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story.drawer_no_slide_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{variant:"outline",children:e("story.dialog_cancel")})})})]})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="filled">{t("story.drawer_open_right")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{
          padding: "20px"
        }}>
            <p>{t("story.drawer_body1")}</p>
            <p>{t("story.drawer_body2")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
            <Button variant="filled">{t("story.drawer_confirm")}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">{t("story.drawer_open_left")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_left_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_left_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{
          padding: "20px"
        }}>
            <p>{t("story.drawer_left_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">{t("story.drawer_open_top")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_top_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_top_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{
          padding: "20px"
        }}>
            <p>{t("story.drawer_top_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">{t("story.drawer_open_bottom")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_bottom_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_bottom_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <div style={{
          padding: "20px"
        }}>
            <p>{t("story.drawer_bottom_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          {t("story.dialog_curr_state")}: {open ? "Open" : "Closed"}
        </p>
        <Button variant="filled" onClick={() => setOpen(true)}>{t("story.dialog_state_open")}</Button>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t("story.drawer_controlled_title")}</DrawerTitle>
              <DrawerDescription>
                {t("story.dialog_controlled_desc")}
              </DrawerDescription>
            </DrawerHeader>
            <div style={{
            padding: "20px"
          }}>
              <p>{t("story.dialog_controlled_body")}</p>
            </div>
            <DrawerFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>{t("story.dialog_cancel")}</Button>
              <Button variant="filled" onClick={() => setOpen(false)}>{t("story.dialog_state_close")}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right",
    slideIn: false,
    slideOut: false
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="filled">{t("story.drawer_open_no_slide")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_no_slide_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_no_slide_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <div style={{
          padding: "20px"
        }}>
            <p>{t("story.drawer_no_slide_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...y.parameters?.docs?.source}}};const v=["Default","Left","Top","Bottom","Controlled","WithoutSlide"],O=Object.freeze(Object.defineProperty({__proto__:null,Bottom:D,Controlled:g,Default:_,Left:u,Top:h,WithoutSlide:y,__namedExportsOrder:v,default:m},Symbol.toStringTag,{value:"Module"}));export{D as B,O as D,u as L,h as T};
