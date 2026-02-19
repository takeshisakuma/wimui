import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./index-C6pZpGhD.js";import{I as s}from"./Icon-DsjUDsBf.js";import{u as h}from"./useTranslation-tkWx2UiV.js";import{B as r}from"./Button-jMYCL3-N.js";const j=({status:u})=>{switch(u){case"success":return e.jsx(s,{name:"CheckIcon",color:"positive",size:"large"});case"error":return e.jsx(s,{name:"CircleIcon",color:"destructive",size:"large"});case"warning":return e.jsx(s,{name:"CircleIcon",color:"caution",size:"large"});case"info":return e.jsx(s,{name:"CircleIcon",color:"informative",size:"large"});case"404":case"403":case"500":return e.jsx(s,{name:"CircleIcon",color:"secondary",size:"large"});default:return null}},b=({status:u="info",title:m,subTitle:p,extra:d,icon:x,className:f,children:y})=>{const{t:g}=h();return e.jsxs("div",{className:S("wim-result",`wim-result--${u}`,f),children:[e.jsx("div",{className:"wim-result-icon",children:x||e.jsx(j,{status:u})}),m&&e.jsx("div",{className:"wim-result-title",children:typeof m=="string"?g(m):m}),p&&e.jsx("div",{className:"wim-result-subtitle",children:typeof p=="string"?g(p):p}),d&&e.jsx("div",{className:"wim-result-extra",children:d}),y&&e.jsx("div",{className:"wim-result-content",children:y})]})};b.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "info" | "warning" | "404" | "403" | "500"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},subTitle:{required:!1,tsType:{name:"ReactNode"},description:"The subTitle"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const v={title:"Component/Alerts & Notifications/Result",component:b,tags:[]},a={args:{status:"success",title:"Successfully Purchased Cloud Server ECS!",subTitle:"Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait patiently.",extra:[e.jsx(r,{priority:"primary",label:"Go Console"},"console"),e.jsx(r,{label:"Buy Again"},"buy")]}},t={args:{title:"Your operation has been executed",extra:e.jsx(r,{priority:"primary",label:"Go Console"})}},o={args:{status:"warning",title:"There are some problems with your operation.",extra:e.jsx(r,{priority:"primary",label:"Go Console"})}},i={args:{status:"error",title:"Submission Failed",subTitle:"Please check and modify the following information before resubmitting.",extra:[e.jsx(r,{priority:"primary",label:"Go Console"},"console"),e.jsx(r,{label:"Buy Again"},"buy")]}},n={args:{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:e.jsx(r,{priority:"primary",label:"Back Home"})}},l={args:{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:e.jsx(r,{priority:"primary",label:"Back Home"})}},c={args:{status:"500",title:"500",subTitle:"Sorry, something went wrong.",extra:e.jsx(r,{priority:"primary",label:"Back Home"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    title: "Successfully Purchased Cloud Server ECS!",
    subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait patiently.",
    extra: [<Button priority="primary" key="console" label="Go Console" />, <Button key="buy" label="Buy Again" />]
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Your operation has been executed",
    extra: <Button priority="primary" label="Go Console" />
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning",
    title: "There are some problems with your operation.",
    extra: <Button priority="primary" label="Go Console" />
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    title: "Submission Failed",
    subTitle: "Please check and modify the following information before resubmitting.",
    extra: [<Button priority="primary" key="console" label="Go Console" />, <Button key="buy" label="Buy Again" />]
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: <Button priority="primary" label="Back Home" />
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
    extra: <Button priority="primary" label="Back Home" />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: "500",
    title: "500",
    subTitle: "Sorry, something went wrong.",
    extra: <Button priority="primary" label="Back Home" />
  }
}`,...c.parameters?.docs?.source}}};const w=["Success","Info","Warning","Error","Status404","Status403","Status500"],I=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:t,Status403:l,Status404:n,Status500:c,Success:a,Warning:o,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{i as E,t as I,I as R,a as S,o as W,n as a,l as b,c};
