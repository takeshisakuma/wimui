"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./OverlayBase-BRn0qDzz.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{s=`_overlay_1w489_4`,c=`_overlayShow_1w489_1`,l=`_content_1w489_15`,u=`_handle_1w489_52`,d=`_header_1w489_60`,f=`_title_1w489_66`,p=`_description_1w489_72`,m=`_body_1w489_78`,h=`_footer_1w489_83`,g={overlay:s,overlayShow:c,content:l,handle:u,header:d,title:f,description:p,body:m,footer:h}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{v=e(n(),1),y=e(i(),1),a(),_(),b=r(),x=(0,v.createContext)(void 0),S=()=>{let e=(0,v.useContext)(x);if(!e)throw Error(`useBottomSheet must be used within a BottomSheet provider`);return e},C=({children:e,open:t,defaultOpen:n=!1,onOpenChange:r})=>{let[i,a]=(0,v.useState)(n),o=t!==void 0,s=o?t:i,c=(0,v.useCallback)(e=>{o||a(e),r?.(e)},[o,r]),l=(0,v.useId)(),u=`wim-bottom-sheet-${l}-title`,d=`wim-bottom-sheet-${l}-description`;return(0,b.jsx)(x.Provider,{value:{titleId:u,descriptionId:d,open:s,onOpenChange:c},children:e})},w=({children:e,asChild:t,className:n})=>{let{onOpenChange:r}=S(),i=()=>{r(!0)};return t&&v.isValidElement(e)?v.cloneElement(e,{onClick:t=>{e.props.onClick?.(t),i()},className:(0,y.default)(n,e.props.className)}):(0,b.jsx)(`button`,{className:n,onClick:i,children:e})},T=({children:e,className:t,asChild:n})=>{let{onOpenChange:r}=S(),i=()=>{r(!1)};return n&&v.isValidElement(e)?v.cloneElement(e,{onClick:t=>{e.props.onClick?.(t),i()},className:(0,y.default)(t,e.props.className)}):(0,b.jsx)(`button`,{type:`button`,className:t,onClick:i,children:e})},E=({children:e,className:t})=>{let{open:n,onOpenChange:r,titleId:i,descriptionId:a}=S();return(0,b.jsxs)(o,{open:n,onOpenChange:r,overlayClassName:g.overlay,contentClassName:(0,y.default)(`wim-bottom-sheet`,g.content,t),transitionProps:{preset:`slide-bottom`},"aria-labelledby":i,"aria-describedby":a,children:[(0,b.jsx)(`div`,{className:g.handle}),e]})},D=({children:e,className:t})=>(0,b.jsx)(`div`,{className:(0,y.default)(g.header,t),"data-testid":`bottom-sheet-header`,children:e}),O=({children:e,className:t})=>(0,b.jsx)(`div`,{className:(0,y.default)(g.footer,t),"data-testid":`bottom-sheet-footer`,children:e}),k=({children:e,className:t})=>{let{titleId:n}=S();return(0,b.jsx)(`h2`,{id:n,className:(0,y.default)(g.title,t),"data-testid":`bottom-sheet-title`,children:e})},A=({children:e,className:t})=>{let{descriptionId:n}=S();return(0,b.jsx)(`p`,{id:n,className:(0,y.default)(g.description,t),"data-testid":`bottom-sheet-description`,children:e})},j=({children:e,className:t})=>(0,b.jsx)(`div`,{className:(0,y.default)(g.body,t),"data-testid":`bottom-sheet-body`,children:e}),M=e=>(0,b.jsx)(C,{...e}),M.displayName=`BottomSheet`,M.Trigger=w,M.Content=E,M.Header=D,M.Footer=O,M.Title=k,M.Description=A,M.Body=j,M.Close=T,w.__docgenInfo={description:``,methods:[],displayName:`BottomSheetTrigger`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},asChild:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},T.__docgenInfo={description:``,methods:[],displayName:`BottomSheetClose`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},asChild:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},E.__docgenInfo={description:``,methods:[],displayName:`BottomSheetContent`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},D.__docgenInfo={description:``,methods:[],displayName:`BottomSheetHeader`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},O.__docgenInfo={description:``,methods:[],displayName:`BottomSheetFooter`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},k.__docgenInfo={description:``,methods:[],displayName:`BottomSheetTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},A.__docgenInfo={description:``,methods:[],displayName:`BottomSheetDescription`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},j.__docgenInfo={description:``,methods:[],displayName:`BottomSheetBody`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},M.__docgenInfo={description:``,methods:[{name:`Trigger`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  asChild,
  className,
}: BottomSheetTriggerProps`,optional:!1,type:{name:`BottomSheetTriggerProps`,alias:`BottomSheetTriggerProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: BottomSheetContentProps`,optional:!1,type:{name:`BottomSheetContentProps`,alias:`BottomSheetContentProps`}}],returns:null},{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
  children: React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Footer`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
  children: React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
  children: React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Description`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
  children: React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Body`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
  children: React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Close`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  asChild,
}: BottomSheetCloseProps`,optional:!1,type:{name:`BottomSheetCloseProps`,alias:`BottomSheetCloseProps`}}],returns:null}],displayName:`BottomSheet`}})))()}export{A as a,k as c,E as i,w as l,T as n,O as o,M as r,D as s,j as t,N as u};