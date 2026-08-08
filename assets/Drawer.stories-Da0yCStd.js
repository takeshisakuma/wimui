"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./Drawer-D82zjOkV.js";import{t as v}from"./Button-d-SlSJ4S.js";var y=e({Bottom:()=>E,Controlled:()=>D,Default:()=>C,Left:()=>w,Top:()=>T,WithoutSlide:()=>O,__namedExportsOrder:()=>k,default:()=>S}),b,x,S,C,w,T,E,D,O,k,A=t((()=>{r(),b=n(r(),1),s(),a(),l(),x=o(),S={title:`Components/Overlays/Drawer`,component:p,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`right`,`bottom`,`left`],description:`The side where the drawer appears.`},open:{control:`boolean`,description:`Controlled open state of the drawer.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},slideIn:{control:`boolean`,description:`Whether the drawer should slide in when opening.`},slideOut:{control:`boolean`,description:`Whether the drawer should slide out when closing.`}}},C={args:{side:`right`},render:function(e){let{t}=i(c);return(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(d,{asChild:!0,children:(0,x.jsx)(v,{variant:`solid`,children:t(`story.drawer_open_right`)})}),(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_title`)}),(0,x.jsx)(f,{children:t(`story.drawer_desc`)})]}),(0,x.jsxs)(`div`,{style:{padding:`20px`},children:[(0,x.jsx)(`p`,{children:t(`story.drawer_body1`)}),(0,x.jsx)(`p`,{children:t(`story.drawer_body2`)})]}),(0,x.jsxs)(u,{children:[(0,x.jsx)(_,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,x.jsx)(v,{variant:`solid`,children:t(`story.drawer_confirm`)})]})]})]})}},w={args:{side:`left`},render:function(e){let{t}=i(c);return(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(d,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.drawer_open_left`)})}),(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_left_title`)}),(0,x.jsx)(f,{children:t(`story.drawer_left_desc`)})]}),(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`p`,{children:t(`story.drawer_left_body`)})}),(0,x.jsx)(u,{children:(0,x.jsx)(_,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},T={args:{side:`top`},render:function(e){let{t}=i(c);return(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(d,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.drawer_open_top`)})}),(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_top_title`)}),(0,x.jsx)(f,{children:t(`story.drawer_top_desc`)})]}),(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`p`,{children:t(`story.drawer_top_body`)})}),(0,x.jsx)(u,{children:(0,x.jsx)(_,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},E={args:{side:`bottom`},render:function(e){let{t}=i(c);return(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(d,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.drawer_open_bottom`)})}),(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_bottom_title`)}),(0,x.jsx)(f,{children:t(`story.drawer_bottom_desc`)})]}),(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`p`,{children:t(`story.drawer_bottom_body`)})}),(0,x.jsx)(u,{children:(0,x.jsx)(_,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},D={render:function(e){let{t}=i(c),[n,r]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,x.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,n?`Open`:`Closed`]}),(0,x.jsx)(v,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,x.jsx)(p,{open:n,onOpenChange:r,children:(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_controlled_title`)}),(0,x.jsx)(f,{children:t(`story.dialog_controlled_desc`)})]}),(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`p`,{children:t(`story.dialog_controlled_body`)})}),(0,x.jsxs)(u,{children:[(0,x.jsx)(v,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,x.jsx)(v,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},O={args:{side:`right`,slideIn:!1,slideOut:!1},render:function(e){let{t}=i(c);return(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(d,{asChild:!0,children:(0,x.jsx)(v,{variant:`solid`,children:t(`story.drawer_open_no_slide`)})}),(0,x.jsxs)(h,{side:e.side,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{children:t(`story.drawer_no_slide_title`)}),(0,x.jsx)(f,{children:t(`story.drawer_no_slide_desc`)})]}),(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`p`,{children:t(`story.drawer_no_slide_body`)})}),(0,x.jsx)(u,{children:(0,x.jsx)(_,{asChild:!0,children:(0,x.jsx)(v,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <Button variant="solid">{t("story.drawer_confirm")}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <Button variant="solid" onClick={() => setOpen(true)}>{t("story.dialog_state_open")}</Button>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent side={args.side}>
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
              <Button variant="solid" onClick={() => setOpen(false)}>{t("story.dialog_state_close")}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Left`,`Top`,`Bottom`,`Controlled`,`WithoutSlide`]}));A();export{E as Bottom,D as Controlled,C as Default,w as Left,T as Top,O as WithoutSlide,k as __namedExportsOrder,S as default,A as n,y as t};