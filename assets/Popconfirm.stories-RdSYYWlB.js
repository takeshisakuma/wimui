import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as T,a as b,b as g,c}from"./Popover-C8Ly5GWG.js";import{B as s}from"./Button-B8Rfgshy.js";import{I as v}from"./Icon-CAqJuTp2.js";import{u as j}from"./useTranslation-DnruiwAh.js";const d=({title:a,description:i,onConfirm:p,onCancel:u,okText:m="OK",cancelText:f="Cancel",okType:h="primary",children:n,icon:y,disabled:x=!1})=>{const{t:l}=j();return x?e.jsx(e.Fragment,{children:n}):e.jsxs(T,{children:[e.jsx(b,{asChild:!0,children:n}),e.jsx(g,{className:"wim-popconfirm-content",children:e.jsxs("div",{className:"wim-popconfirm-inner",children:[e.jsxs("div",{className:"wim-popconfirm-message",children:[e.jsx("span",{className:"wim-popconfirm-icon",children:y||e.jsx(v,{name:"CircleIcon",color:"caution",size:"small"})}),e.jsx("div",{className:"wim-popconfirm-title",children:typeof a=="string"?l(a):a})]}),i&&e.jsx("div",{className:"wim-popconfirm-description",children:typeof i=="string"?l(i):i}),e.jsxs("div",{className:"wim-popconfirm-actions",children:[e.jsx(c,{asChild:!0,children:e.jsx(s,{size:"small",label:f,onClick:u,priority:"tertiary"})}),e.jsx(c,{asChild:!0,children:e.jsx(s,{size:"small",label:m,onClick:p,priority:"primary",role:h})})]})]})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the confirmation box"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the confirmation box"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the confirm button"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the cancel button"},okText:{required:!1,tsType:{name:"string"},description:"Text of the confirm button",defaultValue:{value:'"OK"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"Text of the cancel button",defaultValue:{value:'"Cancel"',computed:!1}},okType:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"Color role of the confirm button",defaultValue:{value:'"primary"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The target element which the Popconfirm will be attached to"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Customize the icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to show the popconfirm",defaultValue:{value:"false",computed:!1}}}};const k={title:"Component/Feedback/Popconfirm",component:d,tags:[],argTypes:{onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},t={args:{title:"Are you sure you want to delete this task?",children:e.jsx(s,{priority:"primary",role:"destructive",label:"Delete"}),okText:"Yes",cancelText:"No",okType:"destructive"}},r={args:{title:"Delete the task",description:"Are you sure to delete this task? This action cannot be undone.",children:e.jsx(s,{label:"Delete with Description"}),okText:"Yes",cancelText:"No"}},o={args:{title:"Are you sure?",children:e.jsx(s,{label:"Disabled Popconfirm"}),disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Are you sure you want to delete this task?",
    children: <Button priority="primary" role="destructive" label="Delete" />,
    okText: "Yes",
    cancelText: "No",
    okType: "destructive"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Delete the task",
    description: "Are you sure to delete this task? This action cannot be undone.",
    children: <Button label="Delete with Description" />,
    okText: "Yes",
    cancelText: "No"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Are you sure?",
    children: <Button label="Disabled Popconfirm" />,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","WithDescription","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:o,WithDescription:r,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{t as D,_ as P,r as W,o as a};
