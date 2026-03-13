import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-B4b1QYqI.js";import{c as w}from"./index-Dz-H0ba_.js";import{T as N}from"./Transition-C3FMgdDB.js";import{F as C}from"./FeedbackIcon-rQNJM-uz.js";import{F as q}from"./FeedbackCloseButton-C3gTf7SE.js";import{u as i}from"./useTranslation-R4wwOoyb.js";import{B as h}from"./Button-dW8UAzVq.js";const a=({id:e,title:s,description:o,variant:d="info",duration:l=3e3,isVisible:c=!0,onClose:r,className:_})=>{const{t:f}=i(),[T,S]=n.useState(!0),x=n.useCallback(()=>{S(!1),r&&r(e)},[r,e]);return n.useEffect(()=>{if(c&&l>0&&T){const R=setTimeout(()=>{x()},l+300);return()=>clearTimeout(R)}},[c,l,e,r,T,x]),t.jsxs(N,{show:c&&T,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:w("wim-toast",`wim-toast--${d}`,_),role:"status","aria-live":"polite",children:[t.jsx("div",{className:"wim-toast__icon",children:t.jsx(C,{status:d,size:"small"})}),t.jsxs("div",{className:"wim-toast__content",children:[s&&t.jsx("h5",{className:"wim-toast__title",children:s}),o&&t.jsx("p",{className:"wim-toast__description",children:o})]}),t.jsx(q,{onClose:r?x:void 0,id:e,className:"wim-toast__close-button",size:"medium"})]})},b=n.createContext(void 0),j=({children:e,position:s="top-right"})=>{const[o,d]=n.useState([]),l=n.useCallback(r=>{const _=Math.random().toString(36).substr(2,9);d(f=>[...f,{...r,id:_}])},[]),c=n.useCallback(r=>{d(_=>_.filter(f=>f.id!==r))},[]);return t.jsxs(b.Provider,{value:{show:l,remove:c},children:[e,t.jsx("div",{className:w("wim-toast-container",`wim-toast-container--${s}`),children:o.map(r=>t.jsx(a,{...r,onClose:()=>c(r.id)},r.id))})]})},I=()=>{const e=n.useContext(b);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};a.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const k={title:"Components/Alerts & Notifications/Toast",component:a,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},u={render:function(s){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_saved_title"),description:s.description||o("story_toast_saved_desc")})},args:{variant:"success"}},p={render:function(s){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_success_title"),description:s.description||o("story_toast_success_desc")})},args:{variant:"success"}},m={render:function(s){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_update_title"),description:s.description||o("story_toast_update_desc")})},args:{variant:"info"}},y={render:function(s){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_connection_title"),description:s.description||o("story_toast_connection_desc")})},args:{variant:"warning"}},g={render:function(s){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(a,{...s,title:s.title||o("story_toast_upload_failed_title"),description:s.description||o("story_toast_upload_failed_desc")})},args:{variant:"error"}},E=()=>{const{show:e}=I(),{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[t.jsx(h,{priority:"primary",label:s("story_toast_show_success"),onClick:()=>e({title:s("story_toast_success_title"),description:s("story_toast_success_desc"),variant:"success"})}),t.jsx(h,{priority:"secondary",label:s("story_toast_show_error"),onClick:()=>e({title:s("story_notification_error_title"),description:s("story_notification_error_desc"),variant:"error"})}),t.jsx(h,{priority:"tertiary",label:s("story_toast_show_5s"),onClick:()=>e({title:s("story_toast_system_notif"),description:s("story_toast_5s_desc"),variant:"info",duration:5e3})})]})},v={render:()=>t.jsx(j,{position:"bottom-right",children:t.jsx(E,{})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_saved_title")} description={args.description || t("story_toast_saved_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_success_title")} description={args.description || t("story_toast_success_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_update_title")} description={args.description || t("story_toast_update_desc")} />;
  },
  args: {
    variant: "info"
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_connection_title")} description={args.description || t("story_toast_connection_desc")} />;
  },
  args: {
    variant: "warning"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_upload_failed_title")} description={args.description || t("story_toast_upload_failed_desc")} />;
  },
  args: {
    variant: "error"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">\r
      <ToastTrigger />\r
    </ToastProvider>
}`,...v.parameters?.docs?.source}}};const P=["Default","Success","Info","Warning","ErrorStatus","Interactive"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:u,ErrorStatus:g,Info:m,Interactive:v,Success:p,Warning:y,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{u as D,g as E,v as I,p as S,$ as T,y as W,m as a};
