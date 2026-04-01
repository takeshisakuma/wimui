import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,A as l}from"./iframe-Cm7axuZH.js";import{c as S}from"./index-DlTOaDQ8.js";import{T as E}from"./Transition-CmKr0OC5.js";import{F as N}from"./FeedbackIcon-CpOX-LhW.js";import{F as C}from"./FeedbackCloseButton-CI1vtd9a.js";import{B as h}from"./Button-BVq6229i.js";import{u as d}from"./useTranslation-NKv2iRzU.js";const a=({id:r,title:t,description:s,intent:u="info",duration:p=3e3,isVisible:c=!0,onClose:n,className:m})=>{const[i,j]=o.useState(!0),x=o.useCallback(()=>{j(!1),n&&n(r)},[n,r]);return o.useEffect(()=>{if(c&&p>0&&i){const A=setTimeout(()=>{x()},p+300);return()=>clearTimeout(A)}},[c,p,r,n,i,x]),e.jsxs(E,{show:c&&i,enter:"toast-enter",enterFrom:"toast-enter-from",enterTo:"toast-enter-to",leave:"toast-leave",leaveFrom:"toast-leave-from",leaveTo:"toast-leave-to",className:S("wim-toast",`wim-toast--${u}`,m),role:"status","aria-live":"polite",children:[e.jsx("div",{className:"wim-toast__icon",children:e.jsx(N,{intent:u,size:"sm"})}),e.jsxs("div",{className:"wim-toast__content",children:[t&&e.jsx("h5",{className:"wim-toast__title",children:t}),s&&e.jsx("p",{className:"wim-toast__description",children:s})]}),e.jsx(C,{onClose:n?x:void 0,id:r,className:"wim-toast__close-button",size:"md"})]})},w=o.createContext(void 0),b=({children:r,position:t="top-right"})=>{const[s,u]=o.useState([]),p=o.useCallback(n=>{const m=Math.random().toString(36).substr(2,9);u(i=>[...i,{...n,id:m}])},[]),c=o.useCallback(n=>{u(m=>m.filter(i=>i.id!==n))},[]);return e.jsxs(w.Provider,{value:{show:p,remove:c},children:[r,e.jsx("div",{className:S("wim-toast-container",`wim-toast-container--${t}`),children:s.map(n=>e.jsx(a,{...n,onClose:()=>c(n.id)},n.id))})]})},R=()=>{const r=o.useContext(w);if(!r)throw new Error("useToast must be used within a ToastProvider");return r};a.__docgenInfo={description:"ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。",methods:[],displayName:"Toast",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},intent:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "top-center"
| "bottom-right"
| "bottom-left"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const P={title:"Components/Alerts & Notifications/Toast",component:a,tags:["!autodocs"],argTypes:{intent:{control:"select",options:["info","success","warning","error"]}}},_={render:function(t){const{t:s}=d(l);return e.jsx(a,{...t,title:t.title||s("story.toast_saved_title"),description:t.description||s("story.toast_saved_desc")})},args:{intent:"success"}},f={render:function(t){const{t:s}=d(l);return e.jsx(a,{...t,title:t.title||s("story.toast_success_title"),description:t.description||s("story.toast_success_desc")})},args:{intent:"success"}},g={render:function(t){const{t:s}=d(l);return e.jsx(a,{...t,title:t.title||s("story.toast_update_title"),description:t.description||s("story.toast_update_desc")})},args:{intent:"info"}},v={render:function(t){const{t:s}=d(l);return e.jsx(a,{...t,title:t.title||s("story.toast_connection_title"),description:t.description||s("story.toast_connection_desc")})},args:{intent:"warning"}},y={render:function(t){const{t:s}=d(l);return e.jsx(a,{...t,title:t.title||s("story.toast_upload_failed_title"),description:t.description||s("story.toast_upload_failed_desc")})},args:{intent:"error"}},L=()=>{const{show:r}=R(),{t}=d(l);return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(h,{variant:"filled",label:t("story.toast_show_success"),onClick:()=>r({title:t("story.toast_success_title"),description:t("story.toast_success_desc"),intent:"success"})}),e.jsx(h,{variant:"outlined",label:t("story.toast_show_error"),onClick:()=>r({title:t("story.notification_error_title"),description:t("story.notification_error_desc"),intent:"error"})}),e.jsx(h,{variant:"ghost",label:t("story.toast_show_5s"),onClick:()=>r({title:t("story.toast_system_notif"),description:t("story.toast_5s_desc"),intent:"info",duration:5e3})})]})},T={render:()=>e.jsx(b,{position:"bottom-right",children:e.jsx(L,{})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_saved_title")} description={args.description || t("story.toast_saved_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_success_title")} description={args.description || t("story.toast_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_update_title")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_connection_title")} description={args.description || t("story.toast_connection_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_upload_failed_title")} description={args.description || t("story.toast_upload_failed_desc")} />;
  },
  args: {
    intent: "error"
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
}`,...T.parameters?.docs?.source}}};const q=["Default","Success","Info","Warning","ErrorStatus","Interactive"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:_,ErrorStatus:y,Info:g,Interactive:T,Success:f,Warning:v,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{y as E,f as S,O as T,v as W};
