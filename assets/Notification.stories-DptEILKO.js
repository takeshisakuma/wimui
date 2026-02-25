import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as N}from"./index-CL3wGj0C.js";import{I as i}from"./Icon-fxQMr1Pf.js";import{u as w}from"./useTranslation-CAN8QPFs.js";const d=({title:l,description:a,icon:u,type:c,onClose:p,closable:h=!0,className:g})=>{const{t:m}=w(),f=()=>{if(u)return u;if(!c)return null;switch(c){case"success":return e.jsx(i,{name:"CheckIcon",color:"positive",size:"medium"});case"error":return e.jsx(i,{name:"CircleIcon",color:"destructive",size:"medium"});case"warning":return e.jsx(i,{name:"CircleIcon",color:"caution",size:"medium"});case"info":return e.jsx(i,{name:"CircleIcon",color:"informative",size:"medium"});default:return null}};return e.jsx("div",{className:N("wim-notification",c&&`wim-notification--${c}`,g),role:"alert",children:e.jsxs("div",{className:"wim-notification-content",children:[f()&&e.jsx("div",{className:"wim-notification-icon",children:f()}),e.jsxs("div",{className:"wim-notification-message-container",children:[e.jsx("div",{className:"wim-notification-title",children:typeof l=="string"?m(l):l}),a&&e.jsx("div",{className:"wim-notification-description",children:typeof a=="string"?m(a):a})]}),h&&e.jsx("button",{type:"button",onClick:p,className:"wim-notification-close","aria-label":"Close",children:e.jsx(i,{name:"CloseIcon",size:"small"})})]})})};d.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The type of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const y={title:"Components/Alerts & Notifications/Notification",component:d,tags:[],argTypes:{onClose:{action:"closed"}}},t={args:{title:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."}},o={args:{type:"success",title:"Success Notification",description:"Your changes have been saved successfully."}},n={args:{type:"warning",title:"Warning Notification",description:"Please be careful with this action."}},s={args:{type:"error",title:"Error Notification",description:"Something went wrong while processing your request."}},r={args:{type:"info",title:"Info Notification",description:"New updates are available for your application."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Notification Title",
    description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success Notification",
    description: "Your changes have been saved successfully."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Warning Notification",
    description: "Please be careful with this action."
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error Notification",
    description: "Something went wrong while processing your request."
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Info Notification",
    description: "New updates are available for your application."
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","Success","Warning","ErrorStatus","Info"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ErrorStatus:s,Info:r,Success:o,Warning:n,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,r as I,x as N,o as S,n as W};
