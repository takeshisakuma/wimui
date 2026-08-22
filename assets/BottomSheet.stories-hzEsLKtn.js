"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{G as c,H as l,J as u,K as d,U as f,W as p,X as m,Y as h,q as g,t as _}from"./src-Ssuy8lr7.js";import{t as v}from"./Button-Dps1MPAd.js";var y=e({Default:()=>S,SingleAction:()=>C,__namedExportsOrder:()=>w,default:()=>x}),b,x,S,C,w,T=t((()=>{n(),o(),i(),_(),b=a(),x={title:`Components/Overlays/BottomSheet`,component:p,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`,description:`Controlled open state of the bottom sheet.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`}}},S={render:e=>{let{t}=r(s);return(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(m,{asChild:!0,children:(0,b.jsx)(v,{variant:`solid`,children:t(`story.bottomsheet_open`)})}),(0,b.jsxs)(c,{children:[(0,b.jsxs)(u,{children:[(0,b.jsx)(h,{children:t(`story.bottomsheet_title`)}),(0,b.jsx)(d,{children:t(`story.bottomsheet_desc`)})]}),(0,b.jsx)(l,{children:(0,b.jsxs)(`div`,{className:`space-y-4`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsx)(`p`,{children:t(`story.bottomsheet_body`)}),(0,b.jsx)(`div`,{style:{padding:`1rem`,backgroundColor:`var(--wim-color-surface-variant)`,borderRadius:`0.5rem`},children:(0,b.jsx)(`p`,{style:{fontSize:`0.875rem`},children:t(`story.bottomsheet_hint`)})}),Array.from({length:10}).map((e,n)=>(0,b.jsxs)(`p`,{children:[t(`story.bottomsheet_scroll_item`),` `,n+1]},n))]})}),(0,b.jsxs)(g,{children:[(0,b.jsx)(f,{asChild:!0,children:(0,b.jsx)(v,{variant:`outline`,children:t(`story.bottomsheet_cancel`)})}),(0,b.jsx)(v,{variant:`solid`,children:t(`story.bottomsheet_action`)})]})]})]})}},C={render:e=>{let{t}=r(s);return(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(m,{asChild:!0,children:(0,b.jsx)(v,{variant:`outline`,children:t(`story.bottomsheet_quick_actions`)})}),(0,b.jsxs)(c,{children:[(0,b.jsx)(u,{children:(0,b.jsx)(h,{children:t(`story.bottomsheet_select_option`)})}),(0,b.jsx)(l,{children:(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,b.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`},children:(0,b.jsx)(`span`,{children:t(`story.bottomsheet_share`)})}),(0,b.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`},children:(0,b.jsx)(`span`,{children:t(`story.bottomsheet_favorite`)})}),(0,b.jsx)(`button`,{style:{width:`100%`,textAlign:`left`,padding:`0.75rem`,border:`none`,background:`none`,cursor:`pointer`,borderRadius:`0.375rem`,color:`var(--wim-color-danger)`},children:(0,b.jsx)(`span`,{children:t(`story.bottomsheet_delete`)})})]})})]})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`SingleAction`]}));T();export{S as Default,C as SingleAction,w as __namedExportsOrder,x as default,T as n,y as t};