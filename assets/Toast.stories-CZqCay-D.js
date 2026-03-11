import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-SL2HqV3D.js";import{c as w}from"./index-30w8ikAG.js";import{T as N}from"./Transition-DVzvZ3NQ.js";import{F as C}from"./FeedbackIcon-B6IHT8oS.js";import{F as q}from"./FeedbackCloseButton-DN74YLwz.js";import{u as i}from"./useTranslation-ZF4WB21B.js";import{B as x}from"./Button-DhroN8PM.js";const n=({id:o,title:t,description:s,variant:l="info",duration:d=3e3,isVisible:c=!0,onClose:r,className:m})=>{const{t:y}=i(),[T,S]=a.useState(!0);a.useEffect(()=>{if(c&&d>0&&T){const R=setTimeout(()=>{h()},d+300);return()=>clearTimeout(R)}},[c,d,o,r,T]);const h=()=>{S(!1),r&&r(o)};return e.jsxs(N,{show:c&&T,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:w("wim-toast",`wim-toast--${l}`,m),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:e.jsx(C,{variant:l,size:"small"})}),e.jsxs("div",{className:"wim-toast__content",children:[t&&e.jsx("h5",{className:"wim-toast__title",children:t}),s&&e.jsx("p",{className:"wim-toast__description",children:s})]}),e.jsx(q,{onClose:r?h:void 0,id:o,className:"wim-toast__close-button",size:"medium"})]})},j=a.createContext(void 0),b=({children:o,position:t="top-right"})=>{const[s,l]=a.useState([]),d=a.useCallback(r=>{const m=Math.random().toString(36).substr(2,9);l(y=>[...y,{...r,id:m}])},[]),c=a.useCallback(r=>{l(m=>m.filter(y=>y.id!==r))},[]);return e.jsxs(j.Provider,{value:{show:d,remove:c},children:[o,e.jsx("div",{className:w("wim-toast-container",`wim-toast-container--${t}`),children:s.map(r=>e.jsx(n,{...r,onClose:()=>c(r.id)},r.id))})]})},I=()=>{const o=a.useContext(j);if(!o)throw new Error("useToast must be used within a ToastProvider");return o};n.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const E={title:"Components/Alerts & Notifications/Toast",component:n,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},u={render:function(t){const{t:s}=i(["docs","common","components"]);return e.jsx(n,{...t,title:t.title||s("story_toast_saved_title"),description:t.description||s("story_toast_saved_desc")})},args:{variant:"success"}},p={render:function(t){const{t:s}=i(["docs","common","components"]);return e.jsx(n,{...t,title:t.title||s("story_toast_success_title"),description:t.description||s("story_toast_success_desc")})},args:{variant:"success"}},_={render:function(t){const{t:s}=i(["docs","common","components"]);return e.jsx(n,{...t,title:t.title||s("story_toast_update_title"),description:t.description||s("story_toast_update_desc")})},args:{variant:"info"}},f={render:function(t){const{t:s}=i(["docs","common","components"]);return e.jsx(n,{...t,title:t.title||s("story_toast_connection_title"),description:t.description||s("story_toast_connection_desc")})},args:{variant:"warning"}},g={render:function(t){const{t:s}=i(["docs","common","components"]);return e.jsx(n,{...t,title:t.title||s("story_toast_upload_failed_title"),description:t.description||s("story_toast_upload_failed_desc")})},args:{variant:"error"}},k=()=>{const{show:o}=I(),{t}=i(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(x,{priority:"primary",label:t("story_toast_show_success"),onClick:()=>o({title:t("story_toast_success_title"),description:t("story_toast_success_desc"),variant:"success"})}),e.jsx(x,{priority:"secondary",label:t("story_toast_show_error"),onClick:()=>o({title:t("story_notification_error_title"),description:t("story_notification_error_desc"),variant:"error"})}),e.jsx(x,{priority:"tertiary",label:t("story_toast_show_5s"),onClick:()=>o({title:t("story_toast_system_notif"),description:t("story_toast_5s_desc"),variant:"info",duration:5e3})})]})},v={render:()=>e.jsx(b,{position:"bottom-right",children:e.jsx(k,{})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_saved_title")} description={args.description || t("story_toast_saved_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_success_title")} description={args.description || t("story_toast_success_desc")} />;
  },
  args: {
    variant: "success"
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_update_title")} description={args.description || t("story_toast_update_desc")} />;
  },
  args: {
    variant: "info"
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_connection_title")} description={args.description || t("story_toast_connection_desc")} />;
  },
  args: {
    variant: "warning"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Toast {...args} title={args.title || t("story_toast_upload_failed_title")} description={args.description || t("story_toast_upload_failed_desc")} />;
  },
  args: {
    variant: "error"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">\r
      <ToastTrigger />\r
    </ToastProvider>
}`,...v.parameters?.docs?.source}}};const P=["Default","Success","Info","Warning","ErrorStatus","Interactive"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:u,ErrorStatus:g,Info:_,Interactive:v,Success:p,Warning:f,__namedExportsOrder:P,default:E},Symbol.toStringTag,{value:"Module"}));export{u as D,g as E,v as I,p as S,$ as T,f as W,_ as a};
