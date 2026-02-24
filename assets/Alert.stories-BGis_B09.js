import{A as i}from"./Alert-DiKkIJTp.js";const c={title:"Components/Alerts & Notifications/Alert",component:i,tags:[],argTypes:{onClose:{action:"closed"}}},e={args:{variant:"info",title:"Information",description:"This is an informative message for the user."}},t={args:{variant:"success",title:"Success",description:"Your action has been completed successfully."}},s={args:{variant:"warning",title:"Warning",description:"Please be careful with this action."}},r={args:{variant:"error",title:"Error",description:"Something went wrong. Please try again later."}},a={args:{variant:"info",description:"This alert only has a description and no title."}},n={args:{variant:"success",title:"Dismissible Alert",description:"You can close this alert by clicking the button on the right.",onClose:()=>console.log("Alert closed")}},o={args:{variant:"info",title:"Update Available",description:"A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informative message for the user."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your action has been completed successfully."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please be careful with this action."
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again later."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    description: "This alert only has a description and no title."
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Dismissible Alert",
    description: "You can close this alert by clicking the button on the right.",
    onClose: () => console.log("Alert closed")
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Update Available",
    description: "A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};const l=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],u=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:r,Info:e,LongContent:o,Success:t,Warning:s,WithCloseButton:n,WithoutTitle:a,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{u as A,r as E,e as I,t as S,s as W,a,n as b};
