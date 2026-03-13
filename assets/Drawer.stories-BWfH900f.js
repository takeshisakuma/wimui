import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as h,b as t,c as a,d,e as i,f as c,g as m}from"./Drawer-DtNCYk7H.js";import{B as s}from"./Button-CXUQ5Vxr.js";import{r as j}from"./iframe-OlV4UgK7.js";import{u as l}from"./useTranslation-CLFZhCB5.js";const b={title:"Components/Overlays/Drawer",component:n,parameters:{layout:"centered"},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The side where the drawer appears."},open:{control:"boolean",description:"Controlled open state of the drawer."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."},slideIn:{control:"boolean",description:"Whether the drawer should slide in when opening."},slideOut:{control:"boolean",description:"Whether the drawer should slide out when closing."}}},p={args:{side:"right"},render:function(o){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...o,children:[r.jsx(h,{asChild:!0,children:r.jsx(s,{priority:"primary",label:e("story_drawer_open_right")})}),r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:e("story_drawer_title")}),r.jsx(i,{children:e("story_drawer_desc")})]}),r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("p",{children:e("story_drawer_body1")}),r.jsx("p",{children:e("story_drawer_body2")})]}),r.jsxs(c,{children:[r.jsx(m,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_dialog_cancel")})}),r.jsx(s,{priority:"primary",label:e("story_drawer_confirm")})]})]})]})}},y={args:{side:"left"},render:function(o){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...o,children:[r.jsx(h,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_drawer_open_left")})}),r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:e("story_drawer_left_title")}),r.jsx(i,{children:e("story_drawer_left_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_left_body")})}),r.jsx(c,{children:r.jsx(m,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},w={args:{side:"top"},render:function(o){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...o,children:[r.jsx(h,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_drawer_open_top")})}),r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:e("story_drawer_top_title")}),r.jsx(i,{children:e("story_drawer_top_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_top_body")})}),r.jsx(c,{children:r.jsx(m,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},u={args:{side:"bottom"},render:function(o){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...o,children:[r.jsx(h,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_drawer_open_bottom")})}),r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:e("story_drawer_bottom_title")}),r.jsx(i,{children:e("story_drawer_bottom_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_bottom_body")})}),r.jsx(c,{children:r.jsx(m,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}},g={render:function(){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[e,x]=j.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsxs("p",{children:[o("story_dialog_curr_state"),": ",e?"Open":"Closed"]}),r.jsx(s,{priority:"primary",label:o("story_dialog_state_open"),onClick:()=>x(!0)}),r.jsx(n,{open:e,onOpenChange:x,children:r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:o("story_drawer_controlled_title")}),r.jsx(i,{children:o("story_dialog_controlled_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:o("story_dialog_controlled_body")})}),r.jsxs(c,{children:[r.jsx(s,{priority:"secondary",label:o("story_dialog_cancel"),onClick:()=>x(!1)}),r.jsx(s,{priority:"primary",label:o("story_dialog_state_close"),onClick:()=>x(!1)})]})]})})]})}},D={args:{side:"right",slideIn:!1,slideOut:!1},render:function(o){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...o,children:[r.jsx(h,{asChild:!0,children:r.jsx(s,{priority:"primary",label:e("story_drawer_open_no_slide")})}),r.jsxs(t,{children:[r.jsxs(a,{children:[r.jsx(d,{children:e("story_drawer_no_slide_title")}),r.jsx(i,{children:e("story_drawer_no_slide_desc")})]}),r.jsx("div",{style:{padding:"20px"},children:r.jsx("p",{children:e("story_drawer_no_slide_body")})}),r.jsx(c,{children:r.jsx(m,{asChild:!0,children:r.jsx(s,{priority:"secondary",label:e("story_dialog_cancel")})})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right",
    slideIn: false,
    slideOut: false
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...D.parameters?.docs?.source}}};const C=["Default","Left","Top","Bottom","Controlled","WithoutSlide"],F=Object.freeze(Object.defineProperty({__proto__:null,Bottom:u,Controlled:g,Default:p,Left:y,Top:w,WithoutSlide:D,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{u as B,g as C,F as D,y as L,w as T,p as a};
