import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-BLtjAiBw.js";import{c as x}from"./index-DlDwX616.js";import{T as I}from"./Transition-BJRi8YQB.js";import{I as l}from"./Icon-DCQu28KW.js";import{u as q}from"./useTranslation-CIS57IFk.js";import{B as w}from"./Button-DFue9QvZ.js";const y=({id:t,title:g,description:h,variant:o="info",duration:n=3e3,isVisible:a=!0,onClose:s,className:i})=>{const{t:c}=q(),[T,_]=r.useState(!0);r.useEffect(()=>{if(a&&n>0&&T){const N=setTimeout(()=>{b()},n+300);return()=>clearTimeout(N)}},[a,n,t,s,T]);const b=()=>{_(!1),s&&s(t)},C=()=>{switch(o){case"success":return e.jsx(l,{name:"CheckIcon",size:"small"});case"error":return e.jsx(l,{name:"CircleIcon",size:"small"});case"warning":return e.jsx(l,{name:"CircleIcon",size:"small"});default:return e.jsx(l,{name:"CircleIcon",size:"small"})}};return e.jsxs(I,{show:a&&T,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:x("wim-toast",`wim-toast--${o}`,i),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:C()}),e.jsxs("div",{className:"wim-toast__content",children:[g&&e.jsx("h5",{className:"wim-toast__title",children:g}),h&&e.jsx("p",{className:"wim-toast__description",children:h})]}),e.jsx("button",{type:"button",className:"wim-toast__close-button",onClick:b,"aria-label":c("a11y_close"),children:e.jsx(l,{name:"CloseIcon"})})]})},S=r.createContext(void 0),j=({children:t,position:g="top-right"})=>{const[h,o]=r.useState([]),n=r.useCallback(s=>{const i=Math.random().toString(36).substr(2,9);o(c=>[...c,{...s,id:i}])},[]),a=r.useCallback(s=>{o(i=>i.filter(c=>c.id!==s))},[]);return e.jsxs(S.Provider,{value:{show:n,remove:a},children:[t,e.jsx("div",{className:x("wim-toast-container",`wim-toast-container--${g}`),children:h.map(s=>e.jsx(y,{...s,onClose:()=>a(s.id)},s.id))})]})},E=()=>{const t=r.useContext(S);if(!t)throw new Error("useToast must be used within a ToastProvider");return t};y.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const k={title:"Components/Alerts & Notifications/Toast",component:y,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},u={args:{title:"Successfully saved",description:"Your changes have been saved to the cloud.",variant:"success"}},d={args:{title:"Success",description:"The operation was completed successfully.",variant:"success"}},m={args:{title:"New update available",description:"A new version of the app is available. Please refresh.",variant:"info"}},p={args:{title:"Check your connection",description:"The internet connection seems unstable.",variant:"warning"}},f={args:{title:"Failed to upload",description:"There was an error while uploading your file.",variant:"error"}},P=()=>{const{show:t}=E();return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(w,{priority:"primary",label:"Show Success",onClick:()=>t({title:"Success!",description:"Action completed successfully.",variant:"success"})}),e.jsx(w,{priority:"secondary",label:"Show Error",onClick:()=>t({title:"Error!",description:"Something went wrong.",variant:"error"})}),e.jsx(w,{priority:"tertiary",label:"Show 5s Toast",onClick:()=>t({title:"System Notification",description:"This will disappear in 5 seconds.",variant:"info",duration:5e3})})]})},v={render:()=>e.jsx(j,{position:"bottom-right",children:e.jsx(P,{})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Successfully saved",
    description: "Your changes have been saved to the cloud.",
    variant: "success"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Success",
    description: "The operation was completed successfully.",
    variant: "success"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New update available",
    description: "A new version of the app is available. Please refresh.",
    variant: "info"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Check your connection",
    description: "The internet connection seems unstable.",
    variant: "warning"
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Failed to upload",
    description: "There was an error while uploading your file.",
    variant: "error"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">\r
      <ToastTrigger />\r
    </ToastProvider>
}`,...v.parameters?.docs?.source}}};const z=["Default","Success","Info","Warning","ErrorStatus","Interactive"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:u,ErrorStatus:f,Info:m,Interactive:v,Success:d,Warning:p,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{u as D,f as E,v as I,d as S,B as T,p as W,m as a};
