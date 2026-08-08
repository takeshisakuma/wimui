"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-DiXuc7DI.js";import{t as i}from"./classnames-DyhsJ24V.js";import{n as a,r as o,t as s}from"./dist-DqbEDyc4.js";import{n as c,t as l}from"./OverlayBase-sxLFlH_3.js";var u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{u=`_overlay_lxc14_3`,d=`_hideOverlay_lxc14_13`,f=`_content_lxc14_17`,p=`_top_lxc14_31`,m=`_right_lxc14_38`,h=`_bottom_lxc14_45`,g=`_left_lxc14_52`,_=`_header_lxc14_59`,v=`_title_lxc14_66`,y=`_description_lxc14_72`,b=`_footer_lxc14_78`,x={overlay:u,hideOverlay:d,content:f,top:p,right:m,bottom:h,left:g,header:_,title:v,description:y,footer:b}})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{C=t(n(),1),w=t(i(),1),o(),c(),S(),T=r(),E=(0,C.createContext)(void 0),D=()=>{let e=(0,C.useContext)(E);if(!e)throw Error(`useDrawer must be used within a Drawer provider`);return e},O=({children:e,open:t,onOpenChange:n,defaultOpen:r=!1,side:i=`right`,slideIn:a=!0,slideOut:o=!0})=>{let[s,c]=(0,C.useState)(r),l=t!==void 0,u=l?t:s,d=e=>{l||c(e),n?.(e)},f=`wim-drawer-${(0,C.useId)()}`,p=`${f}-title`,m=`${f}-description`;return(0,T.jsx)(E.Provider,{value:{titleId:p,descriptionId:m,open:u,onOpenChange:d,side:i,slideIn:a,slideOut:o},children:e})},k=({children:e,className:t,onClick:n,asChild:r=!1,...i})=>{let{onOpenChange:o}=D();return(0,T.jsx)(r?s:`button`,{type:`button`,className:(0,w.default)(x.trigger,t),onClick:e=>{n?.(e),o(!0)},...i,children:(0,T.jsx)(a,{children:e})})},A=({children:e,className:t,onClick:n,asChild:r=!1,...i})=>{let{onOpenChange:o}=D();return(0,T.jsx)(r?s:`button`,{type:`button`,className:(0,w.default)(x.closeButton,t),onClick:e=>{n?.(e),o(!1)},"data-testid":`drawer-close`,...i,children:(0,T.jsx)(a,{children:e})})},j=({children:e,className:t,asChild:n=!1,open:r,onOpenChange:i,side:o,slideIn:c,slideOut:u,showOverlay:d=!0,...f})=>{let{open:p,onOpenChange:m,titleId:h,descriptionId:g,side:_,slideIn:v,slideOut:y}=D(),b=r===void 0?p:r,S=i===void 0?m:i,C=o??_,E=c??v,O=u??y,k=n?s:`div`;return(0,T.jsx)(l,{...f,open:b,onOpenChange:S,overlayClassName:(0,w.default)(x.overlay,!d&&x.hideOverlay),contentClassName:(0,w.default)(`wim-drawer`,x.content,x[C],t),transitionProps:{preset:`slide-${C}`,enterPreset:E?void 0:`none`,leavePreset:O?void 0:`none`},role:`dialog`,"aria-labelledby":h,"aria-describedby":g,"data-side":C,children:(0,T.jsx)(k,{"data-testid":`drawer-content`,"data-side":C,children:(0,T.jsx)(`div`,{children:(0,T.jsx)(a,{children:e})})})})},M=({children:e,className:t,...n})=>(0,T.jsx)(`div`,{className:(0,w.default)(x.header,t),"data-testid":`drawer-header`,...n,children:e}),N=({children:e,className:t,...n})=>(0,T.jsx)(`div`,{className:(0,w.default)(x.footer,t),"data-testid":`drawer-footer`,...n,children:e}),P=({children:e,className:t,...n})=>{let{titleId:r}=D();return(0,T.jsx)(`h2`,{id:r,className:(0,w.default)(x.title,t),"data-testid":`drawer-title`,...n,children:e})},F=({children:e,className:t,...n})=>{let{descriptionId:r}=D();return(0,T.jsx)(`p`,{id:r,className:(0,w.default)(x.description,t),"data-testid":`drawer-description`,...n,children:e})},I=e=>(0,T.jsx)(O,{...e}),I.displayName=`Drawer`,I.Trigger=k,I.Content=j,I.Header=M,I.Footer=N,I.Title=P,I.Description=F,I.Close=A,k.__docgenInfo={description:``,methods:[],displayName:`DrawerTrigger`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},A.__docgenInfo={description:``,methods:[],displayName:`DrawerClose`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},j.__docgenInfo={description:``,methods:[],displayName:`DrawerContent`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},side:{required:!1,tsType:{name:`union`,raw:`"left" | "right" | "top" | "bottom"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``},slideIn:{required:!1,tsType:{name:`boolean`},description:``},slideOut:{required:!1,tsType:{name:`boolean`},description:``},showOverlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Partial`]},M.__docgenInfo={description:``,methods:[],displayName:`DrawerHeader`},N.__docgenInfo={description:``,methods:[],displayName:`DrawerFooter`},P.__docgenInfo={description:``,methods:[],displayName:`DrawerTitle`},F.__docgenInfo={description:``,methods:[],displayName:`DrawerDescription`},I.__docgenInfo={description:``,methods:[{name:`Trigger`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  onClick,
  asChild = false,
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
  asChild = false,
  ...props
}: DrawerCloseProps`,optional:!1,type:{name:`DrawerCloseProps`,alias:`DrawerCloseProps`}}],returns:null}],displayName:`Drawer`}}));export{N as a,k as c,F as i,L as l,I as n,M as o,j as r,P as s,A as t};