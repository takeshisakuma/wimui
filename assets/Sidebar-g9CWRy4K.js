"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{a=`_overlay_d6yh8_4`,o=`_root_d6yh8_11`,s=`_fixed_d6yh8_19`,c=`_collapsed_d6yh8_26`,l=`_itemText_d6yh8_29`,u=`_header_d6yh8_35`,d=`_footer_d6yh8_36`,f=`_item_d6yh8_29`,p=`_itemIcon_d6yh8_43`,m=`_bordered_d6yh8_46`,h=`_responsive_d6yh8_50`,g=`_container_d6yh8_61`,_=`_content_d6yh8_70`,v=`_active_d6yh8_90`,y=`_disabled_d6yh8_95`,b={overlay:a,root:o,fixed:s,collapsed:c,itemText:l,header:u,footer:d,item:f,itemIcon:p,bordered:m,responsive:h,"mobile-open":`_mobile-open_d6yh8_57`,container:g,content:_,active:v,disabled:y}})))()}var S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{S=e(n(),1),C=e(i(),1),x(),w=r(),T=S.forwardRef(({className:e,children:t,fixed:n,collapsed:r,width:i=260,bordered:a=!0,responsive:o=!0,mobileOpen:s,onOverlayClick:c,...l},u)=>{let d={"--wim-sidebar-width":typeof i==`number`?`${i}px`:i};return(0,w.jsxs)(w.Fragment,{children:[o&&s&&(0,w.jsx)(`div`,{className:b.overlay,onClick:c,"aria-hidden":`true`}),(0,w.jsx)(`aside`,{ref:u,style:d,className:(0,C.default)(`wim-sidebar`,b.root,n&&b.fixed,r&&b.collapsed,a&&b.bordered,o&&b.responsive,s&&b[`mobile-open`],e),"data-collapsed":r,...l,children:(0,w.jsx)(`div`,{className:b.container,children:t})})]})}),T.displayName=`Sidebar`,E=S.forwardRef(({className:e,children:t,...n},r)=>(0,w.jsx)(`div`,{ref:r,className:(0,C.default)(b.header,e),...n,children:t})),E.displayName=`Sidebar.Header`,D=S.forwardRef(({className:e,children:t,...n},r)=>(0,w.jsx)(`div`,{ref:r,className:(0,C.default)(b.content,e),...n,children:t})),D.displayName=`Sidebar.Content`,O=S.forwardRef(({className:e,children:t,...n},r)=>(0,w.jsx)(`div`,{ref:r,className:(0,C.default)(b.footer,e),...n,children:t})),O.displayName=`Sidebar.Footer`,k=S.forwardRef(({className:e,children:t,active:n,disabled:r,icon:i,...a},o)=>(0,w.jsxs)(`div`,{ref:o,className:(0,C.default)(b.item,n&&b.active,r&&b.disabled,e),...a,children:[i&&(0,w.jsx)(`span`,{className:b.itemIcon,children:i}),(0,w.jsx)(`span`,{className:b.itemText,children:t})]})),k.displayName=`Sidebar.Item`,A=T,A.Header=E,A.Content=D,A.Footer=O,A.Item=k,E.__docgenInfo={description:``,methods:[],displayName:`Sidebar.Header`},D.__docgenInfo={description:``,methods:[],displayName:`Sidebar.Content`},O.__docgenInfo={description:``,methods:[],displayName:`Sidebar.Footer`},k.__docgenInfo={description:``,methods:[],displayName:`Sidebar.Item`,props:{active:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},T.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{fixed:{required:!1,tsType:{name:`boolean`},description:`Fixed position`},collapsed:{required:!1,tsType:{name:`boolean`},description:`Collapsed state`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width when expanded`,defaultValue:{value:`260`,computed:!1}},bordered:{required:!1,tsType:{name:`boolean`},description:`Border at the right`,defaultValue:{value:`true`,computed:!1}},responsive:{required:!1,tsType:{name:`boolean`},description:`Below the \`md\` breakpoint, move the sidebar off-canvas so it stops taking
width from the content. Defaults to \`true\`.

**It does not bring a way back on screen.** Off-canvas means
\`left: -{width}\` until \`mobileOpen\` is true, and nothing in this component
flips that — so on a phone the sidebar and everything in it become
unreachable unless you wire a trigger yourself. Measured at 390px: the rail
sits at \`x = -260\` with no control anywhere on the page (T60).

Pair it with \`mobileOpen\` and a \`HamburgerMenu\`, the way the AppShell story
does:

\`\`\`tsx
const [open, setOpen] = useState(false);

<HamburgerMenu visibleBelow="md" open={open} onOpenChange={setOpen} />
<Sidebar mobileOpen={open} onOverlayClick={() => setOpen(false)}>…</Sidebar>
\`\`\`

\`visibleBelow="md"\` keeps the control out of the way at widths where the
rail is already on screen. The trigger lives outside this component on
purpose: it usually belongs in the header, and a built-in one would sit in
the wrong place or duplicate the one you already have.

Set \`responsive={false}\` to keep the sidebar in flow at every width.`,defaultValue:{value:`true`,computed:!1}},mobileOpen:{required:!1,tsType:{name:`boolean`},description:"Mobile drawer open state. Required for the rail to be reachable below `md` — see `responsive`."},onOverlayClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when overlay is clicked`}}}})))()}export{j as n,A as t};