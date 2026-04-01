import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as x,b as o,c as s,d as l,e as d,f as i,g as j}from"./Drawer-BIFoAAUJ.js";import{B as t}from"./Button-WhULyPrs.js";import{r as f,A as c}from"./iframe-BJM4gxzT.js";import{u as p}from"./useTranslation-lqMBbyXx.js";const m={title:"Components/Overlays/Drawer",component:a,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."},slideIn:{control:"boolean",description:"Whether the drawer should slide in when opening."},slideOut:{control:"boolean",description:"Whether the drawer should slide out when closing."}}},_={args:{side:"right"},render:function(n){const{t:r}=p(c);return e.jsxs(a,{...n,children:[e.jsx(x,{asChild:!0,children:e.jsx(t,{variant:"filled",label:r("story.drawer_open_right")})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:r("story.drawer_title")}),e.jsx(d,{children:r("story.drawer_desc")})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:r("story.drawer_body1")}),e.jsx("p",{children:r("story.drawer_body2")})]}),e.jsxs(i,{children:[e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.dialog_cancel")})}),e.jsx(t,{variant:"filled",label:r("story.drawer_confirm")})]})]})]})}},D={args:{side:"left"},render:function(n){const{t:r}=p(c);return e.jsxs(a,{...n,children:[e.jsx(x,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.drawer_open_left")})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:r("story.drawer_left_title")}),e.jsx(d,{children:r("story.drawer_left_desc")})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:r("story.drawer_left_body")})}),e.jsx(i,{children:e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.dialog_cancel")})})})]})]})}},u={args:{side:"top"},render:function(n){const{t:r}=p(c);return e.jsxs(a,{...n,children:[e.jsx(x,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.drawer_open_top")})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:r("story.drawer_top_title")}),e.jsx(d,{children:r("story.drawer_top_desc")})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:r("story.drawer_top_body")})}),e.jsx(i,{children:e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.dialog_cancel")})})})]})]})}},h={args:{side:"bottom"},render:function(n){const{t:r}=p(c);return e.jsxs(a,{...n,children:[e.jsx(x,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.drawer_open_bottom")})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:r("story.drawer_bottom_title")}),e.jsx(d,{children:r("story.drawer_bottom_desc")})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:r("story.drawer_bottom_body")})}),e.jsx(i,{children:e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.dialog_cancel")})})})]})]})}},g={render:function(){const{t:n}=p(c),[r,C]=f.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("p",{children:[n("story.dialog_curr_state"),": ",r?"Open":"Closed"]}),e.jsx(t,{variant:"filled",label:n("story.dialog_state_open"),onClick:()=>C(!0)}),e.jsx(a,{open:r,onOpenChange:C,children:e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:n("story.drawer_controlled_title")}),e.jsx(d,{children:n("story.dialog_controlled_desc")})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:n("story.dialog_controlled_body")})}),e.jsxs(i,{children:[e.jsx(t,{variant:"outlined",label:n("story.dialog_cancel"),onClick:()=>C(!1)}),e.jsx(t,{variant:"filled",label:n("story.dialog_state_close"),onClick:()=>C(!1)})]})]})})]})}},y={args:{side:"right",slideIn:!1,slideOut:!1},render:function(n){const{t:r}=p(c);return e.jsxs(a,{...n,children:[e.jsx(x,{asChild:!0,children:e.jsx(t,{variant:"filled",label:r("story.drawer_open_no_slide")})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:r("story.drawer_no_slide_title")}),e.jsx(d,{children:r("story.drawer_no_slide_desc")})]}),e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:r("story.drawer_no_slide_body")})}),e.jsx(i,{children:e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"outlined",label:r("story.dialog_cancel")})})})]})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="filled" label={t("story.drawer_open_right")} />
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
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DrawerClose>
            <Button variant="filled" label={t("story.drawer_confirm")} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined" label={t("story.drawer_open_left")} />
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
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...D.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined" label={t("story.drawer_open_top")} />
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
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined" label={t("story.drawer_open_bottom")} />
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
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        <Button variant="filled" label={t("story.dialog_state_open")} onClick={() => setOpen(true)} />

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
              <Button variant="outlined" label={t("story.dialog_cancel")} onClick={() => setOpen(false)} />
              <Button variant="filled" label={t("story.dialog_state_close")} onClick={() => setOpen(false)} />
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
          <Button variant="filled" label={t("story.drawer_open_no_slide")} />
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
              <Button variant="outlined" label={t("story.dialog_cancel")} />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...y.parameters?.docs?.source}}};const b=["Default","Left","Top","Bottom","Controlled","WithoutSlide"],B=Object.freeze(Object.defineProperty({__proto__:null,Bottom:h,Controlled:g,Default:_,Left:D,Top:u,WithoutSlide:y,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{h as B,B as D,D as L,u as T};
