"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{t as l}from"./src-CV0le6yM.js";import{a as u,c as d,d as f,i as p,l as m,o as h,r as g,s as _,u as v}from"./ArtifactsOverlay-68W3l2ie.js";import{t as y}from"./Button-vRcm9ObM.js";var b=e({Bottom:()=>D,Controlled:()=>O,Default:()=>w,Left:()=>T,Top:()=>E,WithoutSlide:()=>k,__namedExportsOrder:()=>A,default:()=>C}),x,S,C,w,T,E,D,O,k,A,j=t((()=>{r(),x=n(r(),1),s(),a(),l(),S=o(),C={title:`Components/Overlays/Drawer`,component:u,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`right`,`bottom`,`left`],description:`The side where the drawer appears.`},open:{control:`boolean`,description:`Controlled open state of the drawer.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},slideIn:{control:`boolean`,description:`Whether the drawer should slide in when opening.`},slideOut:{control:`boolean`,description:`Whether the drawer should slide out when closing.`}}},w={args:{side:`right`},render:function(e){let{t}=i(c);return(0,S.jsxs)(u,{...e,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsx)(y,{variant:`solid`,children:t(`story.drawer_open_right`)})}),(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_title`)}),(0,S.jsx)(_,{children:t(`story.drawer_desc`)})]}),(0,S.jsxs)(g,{children:[(0,S.jsx)(`p`,{children:t(`story.drawer_body1`)}),(0,S.jsx)(`p`,{children:t(`story.drawer_body2`)})]}),(0,S.jsxs)(d,{children:[(0,S.jsx)(p,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,S.jsx)(y,{variant:`solid`,children:t(`story.drawer_confirm`)})]})]})]})}},T={args:{side:`left`},render:function(e){let{t}=i(c);return(0,S.jsxs)(u,{...e,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.drawer_open_left`)})}),(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_left_title`)}),(0,S.jsx)(_,{children:t(`story.drawer_left_desc`)})]}),(0,S.jsx)(g,{children:(0,S.jsx)(`p`,{children:t(`story.drawer_left_body`)})}),(0,S.jsx)(d,{children:(0,S.jsx)(p,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},E={args:{side:`top`},render:function(e){let{t}=i(c);return(0,S.jsxs)(u,{...e,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.drawer_open_top`)})}),(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_top_title`)}),(0,S.jsx)(_,{children:t(`story.drawer_top_desc`)})]}),(0,S.jsx)(g,{children:(0,S.jsx)(`p`,{children:t(`story.drawer_top_body`)})}),(0,S.jsx)(d,{children:(0,S.jsx)(p,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},D={args:{side:`bottom`},render:function(e){let{t}=i(c);return(0,S.jsxs)(u,{...e,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.drawer_open_bottom`)})}),(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_bottom_title`)}),(0,S.jsx)(_,{children:t(`story.drawer_bottom_desc`)})]}),(0,S.jsx)(g,{children:(0,S.jsx)(`p`,{children:t(`story.drawer_bottom_body`)})}),(0,S.jsx)(d,{children:(0,S.jsx)(p,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},O={render:function(e){let{t}=i(c),[n,r]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,S.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,n?`Open`:`Closed`]}),(0,S.jsx)(y,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,S.jsx)(u,{open:n,onOpenChange:r,children:(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_controlled_title`)}),(0,S.jsx)(_,{children:t(`story.dialog_controlled_desc`)})]}),(0,S.jsx)(g,{children:(0,S.jsx)(`p`,{children:t(`story.dialog_controlled_body`)})}),(0,S.jsxs)(d,{children:[(0,S.jsx)(y,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,S.jsx)(y,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},k={args:{side:`right`,slideIn:!1,slideOut:!1},render:function(e){let{t}=i(c);return(0,S.jsxs)(u,{...e,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsx)(y,{variant:`solid`,children:t(`story.drawer_open_no_slide`)})}),(0,S.jsxs)(h,{side:e.side,children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{children:t(`story.drawer_no_slide_title`)}),(0,S.jsx)(_,{children:t(`story.drawer_no_slide_desc`)})]}),(0,S.jsx)(g,{children:(0,S.jsx)(`p`,{children:t(`story.drawer_no_slide_body`)})}),(0,S.jsx)(d,{children:(0,S.jsx)(p,{asChild:!0,children:(0,S.jsx)(y,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="solid">{t("story.drawer_open_right")}</Button>
        </DrawerTrigger>
        <DrawerContent side={args.side}>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_desc")}</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>{t("story.drawer_body1")}</p>
            <p>{t("story.drawer_body2")}</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
            <Button variant="solid">{t("story.drawer_confirm")}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        <DrawerContent side={args.side}>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_left_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_left_desc")}</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>{t("story.drawer_left_body")}</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
        <DrawerContent side={args.side}>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_top_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_top_desc")}</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>{t("story.drawer_top_body")}</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <DrawerContent side={args.side}>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_bottom_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_bottom_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>{t("story.drawer_bottom_body")}</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
        <Button variant="solid" onClick={() => setOpen(true)}>
          {t("story.dialog_state_open")}
        </Button>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent side={args.side}>
            <DrawerHeader>
              <DrawerTitle>{t("story.drawer_controlled_title")}</DrawerTitle>
              <DrawerDescription>
                {t("story.dialog_controlled_desc")}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p>{t("story.dialog_controlled_body")}</p>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                {t("story.dialog_cancel")}
              </Button>
              <Button variant="solid" onClick={() => setOpen(false)}>
                {t("story.dialog_state_close")}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          <Button variant="solid">{t("story.drawer_open_no_slide")}</Button>
        </DrawerTrigger>
        <DrawerContent side={args.side}>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_no_slide_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_no_slide_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>{t("story.drawer_no_slide_body")}</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Left`,`Top`,`Bottom`,`Controlled`,`WithoutSlide`]}));j();export{D as Bottom,O as Controlled,w as Default,T as Left,E as Top,k as WithoutSlide,A as __namedExportsOrder,C as default,j as n,b as t};