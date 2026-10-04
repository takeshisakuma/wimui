"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./BottomSheet-BXgnI0SE.js";var b=t({Default:()=>C,SingleAction:()=>w,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),y(),c(),x=s(),S={title:`Components/Overlays/BottomSheet`,component:g,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`,description:`Controlled open state of the bottom sheet.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`}}},C={render:e=>{let{t}=r(o);return(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(p,{asChild:!0,children:(0,x.jsx)(l,{variant:`solid`,children:t(`story.bottomsheet_open`)})}),(0,x.jsxs)(f,{children:[(0,x.jsxs)(_,{children:[(0,x.jsx)(d,{children:t(`story.bottomsheet_title`)}),(0,x.jsx)(u,{children:t(`story.bottomsheet_desc`)})]}),(0,x.jsx)(v,{children:(0,x.jsxs)(`div`,{className:`space-y-4`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,x.jsx)(`p`,{children:t(`story.bottomsheet_body`)}),(0,x.jsx)(`div`,{style:{padding:`1rem`,backgroundColor:`var(--wim-color-surface-variant)`,borderRadius:`0.5rem`},children:(0,x.jsx)(`p`,{style:{fontSize:`0.875rem`},children:t(`story.bottomsheet_hint`)})}),Array.from({length:10}).map((e,n)=>(0,x.jsxs)(`p`,{children:[t(`story.bottomsheet_scroll_item`),` `,n+1]},n))]})}),(0,x.jsxs)(h,{children:[(0,x.jsx)(m,{asChild:!0,children:(0,x.jsx)(l,{variant:`outline`,children:t(`story.bottomsheet_cancel`)})}),(0,x.jsx)(l,{variant:`solid`,children:t(`story.bottomsheet_action`)})]})]})]})}},w={render:e=>{let{t}=r(o);return(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(p,{asChild:!0,children:(0,x.jsx)(l,{variant:`outline`,children:t(`story.bottomsheet_quick_actions`)})}),(0,x.jsxs)(f,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(d,{children:t(`story.bottomsheet_select_option`)})}),(0,x.jsx)(v,{children:(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`},children:(0,x.jsx)(`span`,{children:t(`story.bottomsheet_share`)})}),(0,x.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`},children:(0,x.jsx)(`span`,{children:t(`story.bottomsheet_favorite`)})}),(0,x.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`,color:`var(--wim-color-danger)`},children:(0,x.jsx)(`span`,{children:t(`story.bottomsheet_delete`)})})]})})]})]})}},T=[`Default`,`SingleAction`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="solid">{t("story.bottomsheet_open")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_title")}</BottomSheetTitle>
            <BottomSheetDescription>
              {t("story.bottomsheet_desc")}
            </BottomSheetDescription>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div className="space-y-4" style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
              <p>{t("story.bottomsheet_body")}</p>
              <div style={{
              padding: "1rem",
              backgroundColor: "var(--wim-color-surface-variant)",
              borderRadius: "0.5rem"
            }}>
                <p style={{
                fontSize: "0.875rem"
              }}>
                  {t("story.bottomsheet_hint")}
                </p>
              </div>
              {Array.from({
              length: 10
            }).map((_, i) => <p key={i}>
                  {t("story.bottomsheet_scroll_item")} {i + 1}
                </p>)}
            </div>
          </BottomSheetBody>
          <BottomSheetFooter>
            <BottomSheetClose asChild>
              <Button variant="outline">{t("story.bottomsheet_cancel")}</Button>
            </BottomSheetClose>
            <Button variant="solid">{t("story.bottomsheet_action")}</Button>
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="outline">{t("story.bottomsheet_quick_actions")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_select_option")}</BottomSheetTitle>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>
                <span>{t("story.bottomsheet_share")}</span>
              </button>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem"
            }}>
                <span>{t("story.bottomsheet_favorite")}</span>
              </button>
              <button style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              borderRadius: "0.375rem",
              color: "var(--wim-color-danger)"
            }}>
                <span>{t("story.bottomsheet_delete")}</span>
              </button>
            </div>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheet>;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{E as n,b as t};