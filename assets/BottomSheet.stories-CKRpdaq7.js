import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as h}from"./iframe-NVrUTb6N.js";import{c as a}from"./index-JlUUufzG.js";import{P as _}from"./Portal-HSbLFnsB.js";import{T as N}from"./Transition-Dld8eq_Z.js";import{F as k}from"./FocusTrap-CZZZQ5sS.js";import{B as p}from"./Button-B2XAbF_j.js";const j=d.createContext(void 0),f=()=>{const t=d.useContext(j);if(!t)throw new Error("useBottomSheet must be used within a BottomSheet provider");return t},u=({children:t,open:o,defaultOpen:n=!1,onOpenChange:s})=>{const[i,r]=d.useState(n),l=o!==void 0,C=l?o:i,w=d.useCallback(B=>{l||r(B),s?.(B)},[l,s]);return e.jsx(j.Provider,{value:{open:C,onOpenChange:w},children:t})},y=({children:t,asChild:o,className:n})=>{const{onOpenChange:s}=f(),i=()=>{s(!0)};return o&&h.isValidElement(t)?h.cloneElement(t,{onClick:r=>{t.props.onClick?.(r),i()},className:a(n,t.props.className)}):e.jsx("button",{className:a("wim-bottom-sheet-trigger",n),onClick:i,children:t})},T=({children:t,className:o,asChild:n})=>{const{onOpenChange:s}=f(),i=()=>{s(!1)};return n&&h.isValidElement(t)?h.cloneElement(t,{onClick:r=>{t.props.onClick?.(r),i()},className:a(o,t.props.className)}):e.jsx("button",{type:"button",className:a("wim-bottom-sheet-close-button",o),onClick:i,children:t})},b=({children:t,className:o})=>{const{open:n,onOpenChange:s}=f(),i=d.useRef(null);return d.useEffect(()=>{const r=l=>{l.key==="Escape"&&n&&(l.preventDefault(),l.stopPropagation(),s(!1))};return n&&document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[n,s]),d.useEffect(()=>{if(n){const r=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=r}}},[n]),e.jsx(_,{children:e.jsx(N,{show:n,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{className:"wim-bottom-sheet-overlay",onClick:r=>{r.target===r.currentTarget&&s(!1)},children:e.jsx(N,{show:n,enter:"slide-bottom-enter",enterFrom:"slide-bottom-enter-from",enterTo:"slide-bottom-enter-to",leave:"slide-bottom-leave",leaveFrom:"slide-bottom-leave-from",leaveTo:"slide-bottom-leave-to",children:e.jsx(k,{active:n,autoFocus:!0,className:"wim-bottom-sheet-focus-trap-wrapper",children:e.jsxs("div",{ref:i,role:"dialog","aria-modal":"true",className:a("wim-bottom-sheet-content",o),onClick:r=>r.stopPropagation(),children:[e.jsx("div",{className:"wim-bottom-sheet-handle"}),t]})})})})})})},g=({children:t,className:o})=>e.jsx("div",{className:a("wim-bottom-sheet-header",o),children:t}),v=({children:t,className:o})=>e.jsx("div",{className:a("wim-bottom-sheet-footer",o),children:t}),S=({children:t,className:o})=>e.jsx("h2",{className:a("wim-bottom-sheet-title",o),children:t}),R=({children:t,className:o})=>e.jsx("p",{className:a("wim-bottom-sheet-description",o),children:t}),x=({children:t,className:o})=>e.jsx("div",{className:a("wim-bottom-sheet-body",o),children:t});u.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"BottomSheetClose",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"BottomSheetContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"BottomSheetHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"BottomSheetFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"BottomSheetTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"BottomSheetDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"BottomSheetBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Component/Overlays/BottomSheet",component:u,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controlled open state of the bottom sheet."},defaultOpen:{control:"boolean",description:"Default open state when uncontrolled."},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes."}}},c={render:t=>e.jsxs(u,{...t,children:[e.jsx(y,{asChild:!0,children:e.jsx(p,{priority:"primary",label:"Open Bottom Sheet","aria-label":!1})}),e.jsxs(b,{children:[e.jsxs(g,{children:[e.jsx(S,{children:"Bottom Sheet Title"}),e.jsx(R,{children:"This is a description for the bottom sheet content."})]}),e.jsx(x,{children:e.jsxs("div",{className:"space-y-4",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{children:"This is the main content area of the bottom sheet."}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6",borderRadius:"0.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem"},children:"You can put any content here, and it will scroll if it exceeds the maximum height."})}),Array.from({length:10}).map((o,n)=>e.jsxs("p",{children:["Scrollable item ",n+1]},n))]})}),e.jsxs(v,{children:[e.jsx(T,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:"Cancel","aria-label":!1})}),e.jsx(p,{priority:"primary",label:"Action","aria-label":!1})]})]})]})},m={render:t=>e.jsxs(u,{...t,children:[e.jsx(y,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:"Quick Actions","aria-label":!1})}),e.jsxs(b,{children:[e.jsx(g,{children:e.jsx(S,{children:"Select an Option"})}),e.jsx(x,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:"Share"})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem"},children:e.jsx("span",{children:"Add to favorites"})}),e.jsx("button",{style:{width:"100%",textAlign:"left",padding:"0.75rem",border:"none",background:"none",cursor:"pointer",borderRadius:"0.375rem",color:"#dc2626"},children:e.jsx("span",{children:"Delete"})})]})})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <BottomSheet {...args}>\r
            <BottomSheetTrigger asChild>\r
                <Button priority="primary" label="Open Bottom Sheet" aria-label={false as any} />\r
            </BottomSheetTrigger>\r
            <BottomSheetContent>\r
                <BottomSheetHeader>\r
                    <BottomSheetTitle>Bottom Sheet Title</BottomSheetTitle>\r
                    <BottomSheetDescription>\r
                        This is a description for the bottom sheet content.\r
                    </BottomSheetDescription>\r
                </BottomSheetHeader>\r
                <BottomSheetBody>\r
                    <div className="space-y-4" style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>\r
                        <p>This is the main content area of the bottom sheet.</p>\r
                        <div style={{
            padding: "1rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.5rem"
          }}>\r
                            <p style={{
              fontSize: "0.875rem"
            }}>You can put any content here, and it will scroll if it exceeds the maximum height.</p>\r
                        </div>\r
                        {Array.from({
            length: 10
          }).map((_, i) => <p key={i}>Scrollable item {i + 1}</p>)}\r
                    </div>\r
                </BottomSheetBody>\r
                <BottomSheetFooter>\r
                    <BottomSheetClose asChild>\r
                        <Button priority="secondary" label="Cancel" aria-label={false as any} />\r
                    </BottomSheetClose>\r
                    <Button priority="primary" label="Action" aria-label={false as any} />\r
                </BottomSheetFooter>\r
            </BottomSheetContent>\r
        </BottomSheet>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <BottomSheet {...args}>\r
            <BottomSheetTrigger asChild>\r
                <Button priority="secondary" label="Quick Actions" aria-label={false as any} />\r
            </BottomSheetTrigger>\r
            <BottomSheetContent>\r
                <BottomSheetHeader>\r
                    <BottomSheetTitle>Select an Option</BottomSheetTitle>\r
                </BottomSheetHeader>\r
                <BottomSheetBody>\r
                    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>\r
                        <button style={{
            width: "100%",
            textAlign: "left",
            padding: "0.75rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            borderRadius: "0.375rem"
          }}>\r
                            <span>Share</span>\r
                        </button>\r
                        <button style={{
            width: "100%",
            textAlign: "left",
            padding: "0.75rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            borderRadius: "0.375rem"
          }}>\r
                            <span>Add to favorites</span>\r
                        </button>\r
                        <button style={{
            width: "100%",
            textAlign: "left",
            padding: "0.75rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            borderRadius: "0.375rem",
            color: "#dc2626"
          }}>\r
                            <span>Delete</span>\r
                        </button>\r
                    </div>\r
                </BottomSheetBody>\r
            </BottomSheetContent>\r
        </BottomSheet>
}`,...m.parameters?.docs?.source}}};const O=["Default","SingleAction"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:c,SingleAction:m,__namedExportsOrder:O,default:q},Symbol.toStringTag,{value:"Module"}));export{z as B,c as D,m as S};
