import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-fP2t0KdX.js";import{c as y}from"./index-D2M7vYEz.js";import{T as _}from"./Transition-BF6BRguJ.js";import{I as l}from"./Icon-BF9QZky0.js";import{B as T}from"./Button-DXg-VtQz.js";const w=({id:r,title:g,description:h,variant:o="info",duration:n=3e3,isVisible:s=!0,onClose:t,className:i})=>{a.useEffect(()=>{if(s&&n>0){const j=setTimeout(()=>{t&&t(r)},n+300);return()=>clearTimeout(j)}},[s,n,r,t]);const c=()=>{t&&t(r)},S=()=>{switch(o){case"success":return e.jsx(l,{name:"CheckIcon",size:"small"});case"error":return e.jsx(l,{name:"CircleIcon",size:"small"});case"warning":return e.jsx(l,{name:"CircleIcon",size:"small"});default:return e.jsx(l,{name:"CircleIcon",size:"small"})}};return e.jsxs(_,{show:s,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:y("wim-toast",`wim-toast--${o}`,i),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:S()}),e.jsxs("div",{className:"wim-toast__content",children:[g&&e.jsx("h5",{className:"wim-toast__title",children:g}),h&&e.jsx("p",{className:"wim-toast__description",children:h})]}),e.jsx("button",{type:"button",className:"wim-toast__close",onClick:c,"aria-label":"Close",children:e.jsx(l,{name:"CloseIcon"})})]})},x=a.createContext(void 0),b=({children:r,position:g="top-right"})=>{const[h,o]=a.useState([]),n=a.useCallback(t=>{const i=Math.random().toString(36).substr(2,9);o(c=>[...c,{...t,id:i}])},[]),s=a.useCallback(t=>{o(i=>i.filter(c=>c.id!==t))},[]);return e.jsxs(x.Provider,{value:{show:n,remove:s},children:[r,e.jsx("div",{className:y("wim-toast-container",`wim-toast-container--${g}`),children:h.map(t=>e.jsx(w,{...t,onClose:()=>s(t.id)},t.id))})]})},C=()=>{const r=a.useContext(x);if(!r)throw new Error("useToast must be used within a ToastProvider");return r};w.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const N={title:"Component/Alerts & Notifications/Toast",component:w,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},u={args:{title:"Successfully saved",description:"Your changes have been saved to the cloud.",variant:"success"}},d={args:{title:"Success",description:"The operation was completed successfully.",variant:"success"}},m={args:{title:"New update available",description:"A new version of the app is available. Please refresh.",variant:"info"}},p={args:{title:"Check your connection",description:"The internet connection seems unstable.",variant:"warning"}},f={args:{title:"Failed to upload",description:"There was an error while uploading your file.",variant:"error"}},I=()=>{const{show:r}=C();return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(T,{priority:"primary",label:"Show Success",onClick:()=>r({title:"Success!",description:"Action completed successfully.",variant:"success"})}),e.jsx(T,{priority:"secondary",label:"Show Error",onClick:()=>r({title:"Error!",description:"Something went wrong.",variant:"error"})}),e.jsx(T,{priority:"tertiary",label:"Show 5s Toast",onClick:()=>r({title:"System Notification",description:"This will disappear in 5 seconds.",variant:"info",duration:5e3})})]})},v={render:()=>e.jsx(b,{position:"bottom-right",children:e.jsx(I,{})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const E=["Default","Success","Info","Warning","Error","Interactive"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Error:f,Info:m,Interactive:v,Success:d,Warning:p,__namedExportsOrder:E,default:N},Symbol.toStringTag,{value:"Module"}));export{u as D,f as E,v as I,d as S,F as T,p as W,m as a};
