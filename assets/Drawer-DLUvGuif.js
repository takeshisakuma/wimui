"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,r as o,t as s}from"./dist-DOTMK4FX.js";import{n as c,t as l}from"./OverlayBase-BRn0qDzz.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{u=`_overlay_7q8th_3`,d=`_hideOverlay_7q8th_13`,f=`_content_7q8th_17`,p=`_top_7q8th_31`,m=`_right_7q8th_38`,h=`_bottom_7q8th_45`,g=`_left_7q8th_52`,_=`_header_7q8th_59`,v=`_title_7q8th_68`,y=`_description_7q8th_74`,b=`_body_7q8th_82`,x=`_footer_7q8th_88`,S={overlay:u,hideOverlay:d,content:f,top:p,right:m,bottom:h,left:g,header:_,title:v,description:y,body:b,footer:x}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{w=e(n(),1),T=e(i(),1),o(),c(),C(),E=r(),D=(0,w.createContext)(void 0),O=()=>{let e=(0,w.useContext)(D);if(!e)throw Error(`useDrawer must be used within a Drawer provider`);return e},k=({children:e,open:t,onOpenChange:n,defaultOpen:r=!1,side:i=`right`,slideIn:a=!0,slideOut:o=!0})=>{let[s,c]=(0,w.useState)(r),l=t!==void 0,u=l?t:s,d=e=>{l||c(e),n?.(e)},f=`wim-drawer-${(0,w.useId)()}`,p=`${f}-title`,m=`${f}-description`;return(0,E.jsx)(D.Provider,{value:{titleId:p,descriptionId:m,open:u,onOpenChange:d,side:i,slideIn:a,slideOut:o},children:e})},A=({children:e,className:t,onClick:n,asChild:r,...i})=>{let{onOpenChange:o}=O();return(0,E.jsx)(s,{type:`button`,className:t,onClick:e=>{n?.(e),o(!0)},...i,children:(0,E.jsx)(a,{children:e})})},j=({children:e,className:t,onClick:n,asChild:r,...i})=>{let{onOpenChange:o}=O();return(0,E.jsx)(s,{type:`button`,className:t,onClick:e=>{n?.(e),o(!1)},"data-testid":`drawer-close`,...i,children:(0,E.jsx)(a,{children:e})})},M=({children:e,className:t,asChild:n=!1,open:r,onOpenChange:i,side:o,slideIn:c,slideOut:u,showOverlay:d=!0,...f})=>{let{open:p,onOpenChange:m,titleId:h,descriptionId:g,side:_,slideIn:v,slideOut:y}=O(),b=r===void 0?p:r,x=i===void 0?m:i,C=o??_,w=c??v,D=u??y,k=n?s:`div`;return(0,E.jsx)(l,{...f,open:b,onOpenChange:x,overlayClassName:(0,T.default)(S.overlay,!d&&S.hideOverlay),contentClassName:(0,T.default)(`wim-drawer`,S.content,S[C],t),transitionProps:{preset:`slide-${C}`,enterPreset:w?void 0:`none`,leavePreset:D?void 0:`none`},role:f.role??`dialog`,"aria-labelledby":f[`aria-labelledby`]??h,"aria-describedby":[f[`aria-describedby`],g].filter(Boolean).join(` `),"data-side":C,children:(0,E.jsx)(k,{"data-testid":`drawer-content`,"data-side":C,children:(0,E.jsx)(`div`,{children:(0,E.jsx)(a,{children:e})})})})},N=({children:e,className:t,...n})=>(0,E.jsx)(`div`,{className:(0,T.default)(S.header,t),"data-testid":`drawer-header`,...n,children:e}),P=({children:e,className:t,...n})=>(0,E.jsx)(`div`,{className:(0,T.default)(S.body,t),"data-testid":`drawer-body`,...n,children:e}),F=({children:e,className:t,...n})=>(0,E.jsx)(`div`,{className:(0,T.default)(S.footer,t),"data-testid":`drawer-footer`,...n,children:e}),I=({children:e,className:t,...n})=>{let{titleId:r}=O();return(0,E.jsx)(`h2`,{id:r,className:(0,T.default)(S.title,t),"data-testid":`drawer-title`,...n,children:e})},L=({children:e,className:t,...n})=>{let{descriptionId:r}=O();return(0,E.jsx)(`p`,{id:r,className:(0,T.default)(S.description,t),"data-testid":`drawer-description`,...n,children:e})},R=e=>(0,E.jsx)(k,{...e}),R.displayName=`Drawer`,R.Trigger=A,R.Content=M,R.Header=N,R.Footer=F,R.Title=I,R.Description=L,R.Close=j,A.__docgenInfo={description:"Drawer を開く呼び出し口。\n\n`asChild` は必須。**素の `<button>` を返す道は塞いである** ── そちらには当てる\n装いが無く（空の規則を参照していた）、ブラウザ既定のボタン枠がそのまま出ていた。\n装いを与える案は採らなかった: 実利用はすべて `asChild` で、`Slot` が\n`className` を相手の要素へ合流させるため、こちらの装いが相手のボタンと競合する。\n呼び出し側が `<Button>` なり自前の要素なりを渡す。（T121）",methods:[],displayName:`DrawerTrigger`,props:{asChild:{required:!0,tsType:{name:`literal`,value:`true`},description:`中身の要素へ委譲する。必須（理由は下のコメント）。`}}},j.__docgenInfo={description:"Drawer を閉じる要素。\n\n`asChild` は必須。**素の `<button>` を返す道は塞いである** ── そちらには当てる\n装いが無く（空の規則を参照していた）、ブラウザ既定のボタン枠がそのまま出ていた。\n装いを与える案は採らなかった: 実利用はすべて `asChild` で、`Slot` が\n`className` を相手の要素へ合流させるため、こちらの装いが相手のボタンと競合する。\n呼び出し側が `<Button>` なり自前の要素なりを渡す。（T121）",methods:[],displayName:`DrawerClose`,props:{asChild:{required:!0,tsType:{name:`literal`,value:`true`},description:`中身の要素へ委譲する。必須（理由は下のコメント）。`}}},M.__docgenInfo={description:``,methods:[],displayName:`DrawerContent`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},side:{required:!1,tsType:{name:`union`,raw:`"left" | "right" | "top" | "bottom"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``},slideIn:{required:!1,tsType:{name:`boolean`},description:``},slideOut:{required:!1,tsType:{name:`boolean`},description:``},showOverlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Partial`]},N.__docgenInfo={description:``,methods:[],displayName:`DrawerHeader`},P.__docgenInfo={description:'本文。**`DrawerHeader` / `DrawerFooter` には padding があるのに、中身には無かった。**\nそのため置いたものが縁に貼り付き、呼び出し側は `<div style={{ padding: "20px" }}>` へ\n逃げるしかなかった ── **Drawer 自身のストーリー 6 本がまさにそれをしていた**\n（DESIGN.md が禁じる px 直書き。「足りなければコンポーネント側に prop / トークンを\n追加する」と書かれている当のケース）。7 枚目の合成画面のレビューで表に出た。',methods:[],displayName:`DrawerBody`},F.__docgenInfo={description:``,methods:[],displayName:`DrawerFooter`},I.__docgenInfo={description:``,methods:[],displayName:`DrawerTitle`},L.__docgenInfo={description:``,methods:[],displayName:`DrawerDescription`},R.__docgenInfo={description:``,methods:[{name:`Trigger`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  onClick,
  // 受け取るだけで渡さない。**\`...props\` に混ぜると Slot が子へ転送してしまう** ──
  // 子の \`<Button>\` も \`asChild\` を持つので、テキストの子で React.Children.only が落ちる。
  asChild: _asChild,
  ...props
}: DrawerTriggerProps`,optional:!1,type:{name:`DrawerTriggerProps`,alias:`DrawerTriggerProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  asChild = false,
  open: propsOpen,
  onOpenChange: propsOnOpenChange,
  side: sideProp,
  slideIn: slideInProp,
  slideOut: slideOutProp,
  showOverlay = true,
  ...props
}: DrawerContentProps`,optional:!1,type:{name:`DrawerContentProps`,alias:`DrawerContentProps`}}],returns:null},{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>`,optional:!1,type:{name:`ReactHTMLAttributes`,raw:`React.HTMLAttributes<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}],alias:`React.HTMLAttributes`}}],returns:null},{name:`Footer`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>`,optional:!1,type:{name:`ReactHTMLAttributes`,raw:`React.HTMLAttributes<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}],alias:`React.HTMLAttributes`}}],returns:null},{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>`,optional:!1,type:{name:`ReactHTMLAttributes`,raw:`React.HTMLAttributes<HTMLHeadingElement>`,elements:[{name:`HTMLHeadingElement`}],alias:`React.HTMLAttributes`}}],returns:null},{name:`Description`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>`,optional:!1,type:{name:`ReactHTMLAttributes`,raw:`React.HTMLAttributes<HTMLParagraphElement>`,elements:[{name:`HTMLParagraphElement`}],alias:`React.HTMLAttributes`}}],returns:null},{name:`Close`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  onClick,
  // 受け取るだけで渡さない。**\`...props\` に混ぜると Slot が子へ転送してしまう** ──
  // 子の \`<Button>\` も \`asChild\` を持つので、テキストの子で React.Children.only が落ちる。
  asChild: _asChild,
  ...props
}: DrawerCloseProps`,optional:!1,type:{name:`DrawerCloseProps`,alias:`DrawerCloseProps`}}],returns:null}],displayName:`Drawer`}})))()}export{L as a,I as c,M as i,A as l,j as n,F as o,R as r,N as s,P as t,z as u};