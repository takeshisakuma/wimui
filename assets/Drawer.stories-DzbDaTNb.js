"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-MNZnjzfn.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./Drawer-CX6n-QN2.js";import{n as y,t as b}from"./Button-CjAatOxn.js";var x=n({Bottom:()=>k,Controlled:()=>A,Default:()=>T,Left:()=>D,Open:()=>E,Top:()=>O,WithoutSlide:()=>j,__namedExportsOrder:()=>M,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{S=e(r(),1),a(),o(),y(),v(),C=c(),w={title:`Components/Overlays/Drawer`,component:h,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`right`,`bottom`,`left`],description:`The side where the drawer appears.`},open:{control:`boolean`,description:`Controlled open state of the drawer.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},slideIn:{control:`boolean`,description:`Whether the drawer should slide in when opening.`},slideOut:{control:`boolean`,description:`Whether the drawer should slide out when closing.`}}},T={args:{side:`right`},render:function(e){let{t}=i(s);return(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(b,{variant:`solid`,children:t(`story.drawer_open_right`)})}),(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_title`)}),(0,C.jsx)(l,{children:t(`story.drawer_desc`)})]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(`p`,{children:t(`story.drawer_body1`)}),(0,C.jsx)(`p`,{children:t(`story.drawer_body2`)})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(p,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,C.jsx)(b,{variant:`solid`,children:t(`story.drawer_confirm`)})]})]})]})}},E={...T,args:{side:`right`,defaultOpen:!0}},D={args:{side:`left`},render:function(e){let{t}=i(s);return(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.drawer_open_left`)})}),(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_left_title`)}),(0,C.jsx)(l,{children:t(`story.drawer_left_desc`)})]}),(0,C.jsx)(_,{children:(0,C.jsx)(`p`,{children:t(`story.drawer_left_body`)})}),(0,C.jsx)(m,{children:(0,C.jsx)(p,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},O={args:{side:`top`},render:function(e){let{t}=i(s);return(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.drawer_open_top`)})}),(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_top_title`)}),(0,C.jsx)(l,{children:t(`story.drawer_top_desc`)})]}),(0,C.jsx)(_,{children:(0,C.jsx)(`p`,{children:t(`story.drawer_top_body`)})}),(0,C.jsx)(m,{children:(0,C.jsx)(p,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},k={args:{side:`bottom`},render:function(e){let{t}=i(s);return(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.drawer_open_bottom`)})}),(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_bottom_title`)}),(0,C.jsx)(l,{children:t(`story.drawer_bottom_desc`)})]}),(0,C.jsx)(_,{children:(0,C.jsx)(`p`,{children:t(`story.drawer_bottom_body`)})}),(0,C.jsx)(m,{children:(0,C.jsx)(p,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},A={render:function(e){let{t}=i(s),[n,r]=(0,S.useState)(!1);return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,C.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,n?`Open`:`Closed`]}),(0,C.jsx)(b,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,C.jsx)(h,{open:n,onOpenChange:r,children:(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_controlled_title`)}),(0,C.jsx)(l,{children:t(`story.dialog_controlled_desc`)})]}),(0,C.jsx)(_,{children:(0,C.jsx)(`p`,{children:t(`story.dialog_controlled_body`)})}),(0,C.jsxs)(m,{children:[(0,C.jsx)(b,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,C.jsx)(b,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},j={args:{side:`right`,slideIn:!1,slideOut:!1},render:function(e){let{t}=i(s);return(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(b,{variant:`solid`,children:t(`story.drawer_open_no_slide`)})}),(0,C.jsxs)(d,{side:e.side,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:t(`story.drawer_no_slide_title`)}),(0,C.jsx)(l,{children:t(`story.drawer_no_slide_desc`)})]}),(0,C.jsx)(_,{children:(0,C.jsx)(`p`,{children:t(`story.drawer_no_slide_body`)})}),(0,C.jsx)(m,{children:(0,C.jsx)(p,{asChild:!0,children:(0,C.jsx)(b,{variant:`outline`,children:t(`story.dialog_cancel`)})})})]})]})}},M=[`Default`,`Open`,`Left`,`Top`,`Bottom`,`Controlled`,`WithoutSlide`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    side: "right",
    defaultOpen: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}})))()}export{N as a,O as i,x as n,D as r,k as t};