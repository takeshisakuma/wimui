import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-DtwnyzFc.js";import{c as h}from"./index-DWTvJvSx.js";import{T as R}from"./Transition-DKhb8UaF.js";import{F as N}from"./FeedbackIcon-Y6IT9rPR.js";import{F as C}from"./FeedbackCloseButton-CdwkLoZ2.js";import{B as x}from"./Button-CE01zq8d.js";import{u as d}from"./useTranslation-BJQcmf5i.js";const a=({id:e,title:s,description:o,variant:l="info",duration:_=3e3,isVisible:c=!0,onClose:r,className:u})=>{const[i,j]=n.useState(!0),T=n.useCallback(()=>{j(!1),r&&r(e)},[r,e]);return n.useEffect(()=>{if(c&&_>0&&i){const S=setTimeout(()=>{T()},_+300);return()=>clearTimeout(S)}},[c,_,e,r,i,T]),t.jsxs(R,{show:c&&i,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:h("wim-toast",`wim-toast--${l}`,u),role:"status","aria-live":"polite",children:[t.jsx("div",{className:"wim-toast__icon",children:t.jsx(N,{status:l,size:"small"})}),t.jsxs("div",{className:"wim-toast__content",children:[s&&t.jsx("h5",{className:"wim-toast__title",children:s}),o&&t.jsx("p",{className:"wim-toast__description",children:o})]}),t.jsx(C,{onClose:r?T:void 0,id:e,className:"wim-toast__close-button",size:"medium"})]})},w=n.createContext(void 0),b=({children:e,position:s="top-right"})=>{const[o,l]=n.useState([]),_=n.useCallback(r=>{const u=Math.random().toString(36).substr(2,9);l(i=>[...i,{...r,id:u}])},[]),c=n.useCallback(r=>{l(u=>u.filter(i=>i.id!==r))},[]);return t.jsxs(w.Provider,{value:{show:_,remove:c},children:[e,t.jsx("div",{className:h("wim-toast-container",`wim-toast-container--${s}`),children:o.map(r=>t.jsx(a,{...r,onClose:()=>c(r.id)},r.id))})]})},q=()=>{const e=n.useContext(w);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};a.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const I={title:"Components/Alerts & Notifications/Toast",component:a,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},p={render:function(s){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_saved_title"),description:s.description||o("story_toast_saved_desc")})},args:{variant:"success"}},m={render:function(s){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_success_title"),description:s.description||o("story_toast_success_desc")})},args:{variant:"success"}},y={render:function(s){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_update_title"),description:s.description||o("story_toast_update_desc")})},args:{variant:"info"}},g={render:function(s){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_connection_title"),description:s.description||o("story_toast_connection_desc")})},args:{variant:"warning"}},v={render:function(s){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_upload_failed_title"),description:s.description||o("story_toast_upload_failed_desc")})},args:{variant:"error"}},k=()=>{const{show:e}=q(),{t:s}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[t.jsx(x,{priority:"primary",label:s("story_toast_show_success"),onClick:()=>e({title:s("story_toast_success_title"),description:s("story_toast_success_desc"),variant:"success"})}),t.jsx(x,{priority:"secondary",label:s("story_toast_show_error"),onClick:()=>e({title:s("story_notification_error_title"),description:s("story_notification_error_desc"),variant:"error"})}),t.jsx(x,{priority:"tertiary",label:s("story_toast_show_5s"),onClick:()=>e({title:s("story_toast_system_notif"),description:s("story_toast_5s_desc"),variant:"info",duration:5e3})})]})},f={render:()=>t.jsx(b,{position:"bottom-right",children:t.jsx(k,{})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_saved_title")} description={args.description || t("story_toast_saved_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_success_title")} description={args.description || t("story_toast_success_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_update_title")} description={args.description || t("story_toast_update_desc")} />;
  },
  args: {
    variant: "info"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_connection_title")} description={args.description || t("story_toast_connection_desc")} />;
  },
  args: {
    variant: "warning"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_upload_failed_title")} description={args.description || t("story_toast_upload_failed_desc")} />;
  },
  args: {
    variant: "error"
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">\r
      <ToastTrigger />\r
    </ToastProvider>
}`,...f.parameters?.docs?.source}}};const E=["Default","Success","Info","Warning","ErrorStatus","Interactive"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:p,ErrorStatus:v,Info:y,Interactive:f,Success:m,Warning:g,__namedExportsOrder:E,default:I},Symbol.toStringTag,{value:"Module"}));export{p as D,v as E,f as I,m as S,M as T,g as W,y as a};
