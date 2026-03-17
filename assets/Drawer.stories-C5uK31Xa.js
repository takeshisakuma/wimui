import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as x,b as s,c as a,d as i,e as d,f as l,g as j}from"./Drawer-DUQ870nd.js";import{B as t}from"./Button-CnfPWFk8.js";import{r as C}from"./iframe-GBSzVr-0.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as _}from"./useTranslation-1pCDZai4.js";const b={title:"Components/Overlays/Drawer",component:o,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."},slideIn:{control:"boolean",description:"Whether the drawer should slide in when opening."},slideOut:{control:"boolean",description:"Whether the drawer should slide out when closing."}}},y={args:{side:"right"},render:function(n){const{t:e}=_(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{priority:"primary",label:e("story_drawer_open_right")})}),r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:e("story_drawer_title")}),r.jsx(d,{children:e("story_drawer_desc")})]}),r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("p",{children:e("story_drawer_body1")}),r.jsx("p",{children:e("story_drawer_body2")})]}),r.jsxs(l,{children:[r.jsx(j,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_dialog_cancel")})}),r.jsx(t,{priority:"primary",label:e("story_drawer_confirm")})]})]})]})}},w={args:{side:"left"},render:function(n){const{t:e}=_(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_drawer_open_left")})}),r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:e("story_drawer_left_title")}),r.jsx(d,{children:e("story_drawer_left_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_left_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},D={args:{side:"top"},render:function(n){const{t:e}=_(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_drawer_open_top")})}),r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:e("story_drawer_top_title")}),r.jsx(d,{children:e("story_drawer_top_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_top_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},h={args:{side:"bottom"},render:function(n){const{t:e}=_(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_drawer_open_bottom")})}),r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:e("story_drawer_bottom_title")}),r.jsx(d,{children:e("story_drawer_bottom_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_bottom_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},g={render:function(){const{t:n}=_(c),[e,m]=C.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsxs("p",{children:[n("story_dialog_curr_state"),": ",e?"Open":"Closed"]}),r.jsx(t,{priority:"primary",label:n("story_dialog_state_open"),onClick:()=>m(!0)}),r.jsx(o,{open:e,onOpenChange:m,children:r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:n("story_drawer_controlled_title")}),r.jsx(d,{children:n("story_dialog_controlled_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:n("story_dialog_controlled_body")})}),r.jsxs(l,{children:[r.jsx(t,{priority:"secondary",label:n("story_dialog_cancel"),onClick:()=>m(!1)}),r.jsx(t,{priority:"primary",label:n("story_dialog_state_close"),onClick:()=>m(!1)})]})]})})]})}},u={args:{side:"right",slideIn:!1,slideOut:!1},render:function(n){const{t:e}=_(c);return r.jsxs(o,{...n,children:[r.jsx(x,{asChild:!0,children:r.jsx(t,{priority:"primary",label:e("story_drawer_open_no_slide")})}),r.jsxs(s,{children:[r.jsxs(a,{children:[r.jsx(i,{children:e("story_drawer_no_slide_title")}),r.jsx(d,{children:e("story_drawer_no_slide_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_no_slide_body")})}),r.jsx(l,{children:r.jsx(j,{asChild:!0,children:r.jsx(t,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>\r
        <DrawerTrigger asChild>\r
          <Button priority="primary" label={t("story_drawer_open_right")} />\r
        </DrawerTrigger>\r
        <DrawerContent>\r
          <DrawerHeader>\r
            <DrawerTitle>{t("story_drawer_title")}</DrawerTitle>\r
            <DrawerDescription>{t("story_drawer_desc")}</DrawerDescription>\r
          </DrawerHeader>\r
          <div style={{
          padding: "20px"
        }}>\r
            <p>{t("story_drawer_body1")}</p>\r
            <p>{t("story_drawer_body2")}</p>\r
          </div>\r
          <DrawerFooter>\r
            <DrawerClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DrawerClose>\r
            <Button priority="primary" label={t("story_drawer_confirm")} />\r
          </DrawerFooter>\r
        </DrawerContent>\r
      </Drawer>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>\r
        <DrawerTrigger asChild>\r
          <Button priority="secondary" label={t("story_drawer_open_left")} />\r
        </DrawerTrigger>\r
        <DrawerContent>\r
          <DrawerHeader>\r
            <DrawerTitle>{t("story_drawer_left_title")}</DrawerTitle>\r
            <DrawerDescription>{t("story_drawer_left_desc")}</DrawerDescription>\r
          </DrawerHeader>\r
          <div style={{
          padding: "20px"
        }}>\r
            <p>{t("story_drawer_left_body")}</p>\r
          </div>\r
          <DrawerFooter>\r
            <DrawerClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DrawerClose>\r
          </DrawerFooter>\r
        </DrawerContent>\r
      </Drawer>;
  }
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>\r
        <DrawerTrigger asChild>\r
          <Button priority="secondary" label={t("story_drawer_open_top")} />\r
        </DrawerTrigger>\r
        <DrawerContent>\r
          <DrawerHeader>\r
            <DrawerTitle>{t("story_drawer_top_title")}</DrawerTitle>\r
            <DrawerDescription>{t("story_drawer_top_desc")}</DrawerDescription>\r
          </DrawerHeader>\r
          <div style={{
          padding: "20px"
        }}>\r
            <p>{t("story_drawer_top_body")}</p>\r
          </div>\r
          <DrawerFooter>\r
            <DrawerClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DrawerClose>\r
          </DrawerFooter>\r
        </DrawerContent>\r
      </Drawer>;
  }
}`,...D.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>\r
        <DrawerTrigger asChild>\r
          <Button priority="secondary" label={t("story_drawer_open_bottom")} />\r
        </DrawerTrigger>\r
        <DrawerContent>\r
          <DrawerHeader>\r
            <DrawerTitle>{t("story_drawer_bottom_title")}</DrawerTitle>\r
            <DrawerDescription>\r
              {t("story_drawer_bottom_desc")}\r
            </DrawerDescription>\r
          </DrawerHeader>\r
          <div style={{
          padding: "20px"
        }}>\r
            <p>{t("story_drawer_bottom_body")}</p>\r
          </div>\r
          <DrawerFooter>\r
            <DrawerClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DrawerClose>\r
          </DrawerFooter>\r
        </DrawerContent>\r
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
    }}>\r
        <p>\r
          {t("story_dialog_curr_state")}: {open ? "Open" : "Closed"}\r
        </p>\r
        <Button priority="primary" label={t("story_dialog_state_open")} onClick={() => setOpen(true)} />\r
\r
        <Drawer open={open} onOpenChange={setOpen}>\r
          <DrawerContent>\r
            <DrawerHeader>\r
              <DrawerTitle>{t("story_drawer_controlled_title")}</DrawerTitle>\r
              <DrawerDescription>\r
                {t("story_dialog_controlled_desc")}\r
              </DrawerDescription>\r
            </DrawerHeader>\r
            <div style={{
            padding: "20px"
          }}>\r
              <p>{t("story_dialog_controlled_body")}</p>\r
            </div>\r
            <DrawerFooter>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} onClick={() => setOpen(false)} />\r
              <Button priority="primary" label={t("story_dialog_state_close")} onClick={() => setOpen(false)} />\r
            </DrawerFooter>\r
          </DrawerContent>\r
        </Drawer>\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right",
    slideIn: false,
    slideOut: false
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>\r
        <DrawerTrigger asChild>\r
          <Button priority="primary" label={t("story_drawer_open_no_slide")} />\r
        </DrawerTrigger>\r
        <DrawerContent>\r
          <DrawerHeader>\r
            <DrawerTitle>{t("story_drawer_no_slide_title")}</DrawerTitle>\r
            <DrawerDescription>\r
              {t("story_drawer_no_slide_desc")}\r
            </DrawerDescription>\r
          </DrawerHeader>\r
          <div style={{
          padding: "20px"
        }}>\r
            <p>{t("story_drawer_no_slide_body")}</p>\r
          </div>\r
          <DrawerFooter>\r
            <DrawerClose asChild>\r
              <Button priority="secondary" label={t("story_dialog_cancel")} />\r
            </DrawerClose>\r
          </DrawerFooter>\r
        </DrawerContent>\r
      </Drawer>;
  }
}`,...u.parameters?.docs?.source}}};const f=["Default","Left","Top","Bottom","Controlled","WithoutSlide"],E=Object.freeze(Object.defineProperty({__proto__:null,Bottom:h,Controlled:g,Default:y,Left:w,Top:D,WithoutSlide:u,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{h as B,E as D,w as L,D as T};
