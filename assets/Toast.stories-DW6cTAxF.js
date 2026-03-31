import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,A as l}from"./iframe-BaVSnw9L.js";import{c as S}from"./index-C9_oYSQB.js";import{T as E}from"./Transition-C2Aryywc.js";import{F as N}from"./FeedbackIcon-IFKMbxlt.js";import{F as C}from"./FeedbackCloseButton-rZ3lbZOD.js";import{B as h}from"./Button-D_Dv3d3e.js";import{u as d}from"./useTranslation-CI9f0OZA.js";const n=({id:r,title:t,description:s,status:u="info",duration:p=3e3,isVisible:c=!0,onClose:o,className:m})=>{const[i,j]=a.useState(!0),x=a.useCallback(()=>{j(!1),o&&o(r)},[o,r]);return a.useEffect(()=>{if(c&&p>0&&i){const A=setTimeout(()=>{x()},p+300);return()=>clearTimeout(A)}},[c,p,r,o,i,x]),e.jsxs(E,{show:c&&i,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:S("wim-toast",`wim-toast--${u}`,m),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:e.jsx(N,{status:u,size:"sm"})}),e.jsxs("div",{className:"wim-toast__content",children:[t&&e.jsx("h5",{className:"wim-toast__title",children:t}),s&&e.jsx("p",{className:"wim-toast__description",children:s})]}),e.jsx(C,{onClose:o?x:void 0,id:r,className:"wim-toast__close-button",size:"md"})]})},w=a.createContext(void 0),b=({children:r,position:t="top-right"})=>{const[s,u]=a.useState([]),p=a.useCallback(o=>{const m=Math.random().toString(36).substr(2,9);u(i=>[...i,{...o,id:m}])},[]),c=a.useCallback(o=>{u(m=>m.filter(i=>i.id!==o))},[]);return e.jsxs(w.Provider,{value:{show:p,remove:c},children:[r,e.jsx("div",{className:S("wim-toast-container",`wim-toast-container--${t}`),children:s.map(o=>e.jsx(n,{...o,onClose:()=>c(o.id)},o.id))})]})},R=()=>{const r=a.useContext(w);if(!r)throw new Error("useToast must be used within a ToastProvider");return r};n.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const P={title:"Components/Alerts & Notifications/Toast",component:n,tags:["!autodocs"],argTypes:{status:{control:"select",options:["info","success","warning","error"]}}},_={render:function(t){const{t:s}=d(l);return e.jsx(n,{...t,title:t.title||s("story.toast_saved_title"),description:t.description||s("story.toast_saved_desc")})},args:{status:"success"}},f={render:function(t){const{t:s}=d(l);return e.jsx(n,{...t,title:t.title||s("story.toast_success_title"),description:t.description||s("story.toast_success_desc")})},args:{status:"success"}},g={render:function(t){const{t:s}=d(l);return e.jsx(n,{...t,title:t.title||s("story.toast_update_title"),description:t.description||s("story.toast_update_desc")})},args:{status:"info"}},y={render:function(t){const{t:s}=d(l);return e.jsx(n,{...t,title:t.title||s("story.toast_connection_title"),description:t.description||s("story.toast_connection_desc")})},args:{status:"warning"}},v={render:function(t){const{t:s}=d(l);return e.jsx(n,{...t,title:t.title||s("story.toast_upload_failed_title"),description:t.description||s("story.toast_upload_failed_desc")})},args:{status:"error"}},L=()=>{const{show:r}=R(),{t}=d(l);return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(h,{variant:"filled",label:t("story.toast_show_success"),onClick:()=>r({title:t("story.toast_success_title"),description:t("story.toast_success_desc"),status:"success"})}),e.jsx(h,{variant:"outlined",label:t("story.toast_show_error"),onClick:()=>r({title:t("story.notification_error_title"),description:t("story.notification_error_desc"),status:"error"})}),e.jsx(h,{variant:"ghost",label:t("story.toast_show_5s"),onClick:()=>r({title:t("story.toast_system_notif"),description:t("story.toast_5s_desc"),status:"info",duration:5e3})})]})},T={render:()=>e.jsx(b,{position:"bottom-right",children:e.jsx(L,{})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_saved_title")} description={args.description || t("story.toast_saved_desc")} />;
  },
  args: {
    status: "success"
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_success_title")} description={args.description || t("story.toast_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_update_title")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_connection_title")} description={args.description || t("story.toast_connection_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_upload_failed_title")} description={args.description || t("story.toast_upload_failed_desc")} />;
  },
  args: {
    status: "error"
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
}`,...T.parameters?.docs?.source}}};const q=["Default","Success","Info","Warning","ErrorStatus","Interactive"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:_,ErrorStatus:v,Info:g,Interactive:T,Success:f,Warning:y,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{v as E,f as S,O as T,y as W};
