import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-C05UZAs2.js";import{I as l}from"./Icon-DS6-snKS.js";import{B as y}from"./Button-lUX33Q_k.js";const b=({id:s,title:g,description:h,variant:o="info",duration:n=3e3,isVisible:a=!0,onClose:t,className:i=""})=>{const[c,T]=r.useState(!1);r.useEffect(()=>{if(a){const w=setTimeout(()=>T(!0),10);return()=>clearTimeout(w)}else T(!1)},[a]),r.useEffect(()=>{if(a&&n>0){const w=setTimeout(()=>{T(!1),setTimeout(()=>{t&&t(s)},300)},n);return()=>clearTimeout(w)}},[a,n,s,t]);const j=()=>{T(!1),setTimeout(()=>{t&&t(s)},300)},_=()=>{switch(o){case"success":return e.jsx(l,{name:"CheckIcon",size:"small"});case"error":return e.jsx(l,{name:"CircleIcon",size:"small"});case"warning":return e.jsx(l,{name:"CircleIcon",size:"small"});default:return e.jsx(l,{name:"CircleIcon",size:"small"})}};return e.jsxs("div",{className:["wim-toast",`wim-toast--${o}`,c?"wim-toast--visible":"",i].filter(Boolean).join(" "),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:_()}),e.jsxs("div",{className:"wim-toast__content",children:[g&&e.jsx("h5",{className:"wim-toast__title",children:g}),h&&e.jsx("p",{className:"wim-toast__description",children:h})]}),e.jsx("button",{type:"button",className:"wim-toast__close",onClick:j,"aria-label":"Close",children:e.jsx(l,{name:"CloseIcon"})})]})},x=r.createContext(void 0),S=({children:s,position:g="top-right"})=>{const[h,o]=r.useState([]),n=r.useCallback(t=>{const i=Math.random().toString(36).substr(2,9);o(c=>[...c,{...t,id:i}])},[]),a=r.useCallback(t=>{o(i=>i.filter(c=>c.id!==t))},[]);return e.jsxs(x.Provider,{value:{show:n,remove:a},children:[s,e.jsx("div",{className:`wim-toast-container wim-toast-container--${g}`,children:h.map(t=>e.jsx(b,{...t,onClose:()=>a(t.id)},t.id))})]})},C=()=>{const s=r.useContext(x);if(!s)throw new Error("useToast must be used within a ToastProvider");return s};b.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};S.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const I={title:"Component/Feedback/Toast",component:b,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},u={args:{title:"Successfully saved",description:"Your changes have been saved to the cloud.",variant:"success"}},d={args:{title:"Success",description:"The operation was completed successfully.",variant:"success"}},m={args:{title:"New update available",description:"A new version of the app is available. Please refresh.",variant:"info"}},p={args:{title:"Check your connection",description:"The internet connection seems unstable.",variant:"warning"}},f={args:{title:"Failed to upload",description:"There was an error while uploading your file.",variant:"error"}},N=()=>{const{show:s}=C();return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(y,{priority:"primary",label:"Show Success",onClick:()=>s({title:"Success!",description:"Action completed successfully.",variant:"success"})}),e.jsx(y,{priority:"secondary",label:"Show Error",onClick:()=>s({title:"Error!",description:"Something went wrong.",variant:"error"})}),e.jsx(y,{priority:"tertiary",label:"Show 5s Toast",onClick:()=>s({title:"System Notification",description:"This will disappear in 5 seconds.",variant:"info",duration:5e3})})]})},v={render:()=>e.jsx(S,{position:"bottom-right",children:e.jsx(N,{})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const E=["Default","Success","Info","Warning","Error","Interactive"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Error:f,Info:m,Interactive:v,Success:d,Warning:p,__namedExportsOrder:E,default:I},Symbol.toStringTag,{value:"Module"}));export{u as D,f as E,v as I,d as S,R as T,p as W,m as a};
