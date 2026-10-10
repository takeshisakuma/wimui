"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,r as o,t as s}from"./dist-DOTMK4FX.js";import{n as c,t as l}from"./OverlayBase-BRn0qDzz.js";var u,d,f,p,m,h,g;function _(){return(_=t((()=>{u=`_overlay_1qtin_3`,d=`_content_1qtin_14`,f=`_header_1qtin_33`,p=`_title_1qtin_40`,m=`_description_1qtin_46`,h=`_footer_1qtin_52`,g={overlay:u,content:d,header:f,title:p,description:m,footer:h}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{v=e(n(),1),y=e(i(),1),o(),c(),_(),b=r(),x=(0,v.createContext)(void 0),S=()=>{let e=(0,v.useContext)(x);if(!e)throw Error(`Dialog sub-components must be used within Dialog`);return e},C=({children:e,open:t,onOpenChange:n,defaultOpen:r=!1,role:i=`dialog`,closeOnOverlayClick:a=i!==`alertdialog`})=>{let[o,s]=(0,v.useState)(r),c=t!==void 0,l=c?t:o,u=e=>{c||s(e),n?.(e)},d=`wim-dialog-${(0,v.useId)()}`,f=`${d}-title`,p=`${d}-description`;return(0,b.jsx)(x.Provider,{value:{titleId:f,descriptionId:p,open:l,onOpenChange:u,closeOnOverlayClick:a,role:i},children:e})},C.displayName=`Dialog`,w=({children:e,className:t,onClick:n,asChild:r=!1,...i})=>{let{onOpenChange:o}=S();return(0,b.jsx)(r?s:`button`,{type:`button`,className:t,onClick:e=>{n?.(e),o(!0)},...i,children:(0,b.jsx)(a,{children:e})})},w.displayName=`Dialog.Trigger`,T=({children:e,className:t,onClick:n,asChild:r=!1,...i})=>{let{onOpenChange:o}=S();return(0,b.jsx)(r?s:`button`,{type:`button`,className:t,onClick:e=>{n?.(e),o(!1)},...i,children:(0,b.jsx)(a,{children:e})})},T.displayName=`Dialog.Close`,E=({children:e,className:t,asChild:n=!1,open:r,onOpenChange:i,role:o,...c})=>{let{open:u,onOpenChange:d,titleId:f,descriptionId:p,closeOnOverlayClick:m,role:h}=S(),_=r===void 0?u:r,v=i===void 0?d:i,x=n?s:`div`;return(0,b.jsx)(l,{...c,open:_,onOpenChange:v,closeOnOverlayClick:m,overlayClassName:g.overlay,role:o??h,"aria-labelledby":c[`aria-labelledby`]??f,"aria-describedby":[c[`aria-describedby`],p].filter(Boolean).join(` `),children:(0,b.jsx)(x,{className:(0,y.default)(`wim-dialog`,g.content,t),children:(0,b.jsx)(a,{children:e})})})},E.displayName=`Dialog.Content`,D=({children:e,className:t,...n})=>(0,b.jsx)(`div`,{className:(0,y.default)(g.header,t),"data-testid":`dialog-header`,...n,children:e}),D.displayName=`Dialog.Header`,O=({children:e,className:t,layout:n,...r})=>(0,b.jsx)(`div`,{className:(0,y.default)(g.footer,t),"data-layout":n,"data-testid":`dialog-footer`,...r,children:e}),O.displayName=`Dialog.Footer`,k=({children:e,className:t,...n})=>{let{titleId:r}=S();return(0,b.jsx)(`h2`,{id:r,className:(0,y.default)(g.title,t),"data-testid":`dialog-title`,...n,children:e})},k.displayName=`Dialog.Title`,A=({children:e,className:t,...n})=>{let{descriptionId:r}=S();return(0,b.jsx)(`p`,{id:r,className:(0,y.default)(g.description,t),"data-testid":`dialog-description`,...n,children:e})},A.displayName=`Dialog.Description`,j=e=>(0,b.jsx)(C,{...e}),j.displayName=`Dialog`,j.Trigger=w,j.Content=E,j.Close=T,j.Header=D,j.Footer=O,j.Title=k,j.Description=A,w.__docgenInfo={description:``,methods:[],displayName:`Dialog.Trigger`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},T.__docgenInfo={description:``,methods:[],displayName:`Dialog.Close`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},E.__docgenInfo={description:``,methods:[],displayName:`Dialog.Content`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Partial`]},D.__docgenInfo={description:``,methods:[],displayName:`Dialog.Header`},O.__docgenInfo={description:``,methods:[],displayName:`Dialog.Footer`,props:{layout:{required:!1,tsType:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}]},description:`The layout of the footer.
- "row" (default): Buttons are side-by-side.
- "column": Buttons are stacked (standard mobile behavior).`}}},k.__docgenInfo={description:``,methods:[],displayName:`Dialog.Title`},A.__docgenInfo={description:``,methods:[],displayName:`Dialog.Description`},j.__docgenInfo={description:``,methods:[{name:`Trigger`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DialogTriggerProps`,optional:!1,type:{name:`DialogTriggerProps`,alias:`DialogTriggerProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  asChild = false,
  open: propsOpen,
  onOpenChange: propsOnOpenChange,
  role: propsRole,
  ...props
}: DialogContentProps`,optional:!1,type:{name:`DialogContentProps`,alias:`DialogContentProps`}}],returns:null},{name:`Close`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DialogCloseProps`,optional:!1,type:{name:`DialogCloseProps`,alias:`DialogCloseProps`}}],returns:null},{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"div">`,elements:[{name:`literal`,value:`"div"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null},{name:`Footer`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  layout,
  ...props
}: DialogFooterProps`,optional:!1,type:{name:`DialogFooterProps`,alias:`DialogFooterProps`}}],returns:null},{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"h2">`,elements:[{name:`literal`,value:`"h2"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null},{name:`Description`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"p">`,elements:[{name:`literal`,value:`"p"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null}],displayName:`Dialog`}})))()}export{O as a,w as c,A as i,M as l,j as n,D as o,E as r,k as s,T as t};