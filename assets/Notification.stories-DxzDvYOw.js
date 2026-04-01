import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as T,r as g,A as a}from"./iframe-C6uXs91S.js";import{c as b}from"./index-H3n4JP4B.js";import{F as A}from"./FeedbackIcon-ErU-0aCE.js";import{F as h}from"./FeedbackCloseButton-C6P_v68t.js";import{u as c}from"./useTranslation-C0kP2ZiX.js";const n=({id:s,title:t,description:e,icon:o,status:r,onClose:_,closable:y=!0,className:N})=>{const[S,v]=T.useState(!0);if(!S)return null;const w=()=>{v(!1),_&&_(s)},x={success:"positive",error:"destructive",warning:"caution",info:"informative"};return i.jsx("div",{className:b("wim-notification",r&&`wim-notification--${r}`,N),role:"alert",children:i.jsxs("div",{className:"wim-notification-content",children:[(o||r)&&i.jsx("div",{className:"wim-notification-icon",children:i.jsx(A,{status:r,icon:o,size:"md",color:r?x[r]:void 0})}),i.jsxs("div",{className:"wim-notification-message-container",children:[i.jsx("div",{className:"wim-notification-title",children:t}),e&&i.jsx("div",{className:"wim-notification-description",children:e})]}),i.jsx(h,{onClose:y?w:void 0,className:"wim-notification-close",size:"sm"})]})})};g.createContext(void 0);n.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"The unique identifier of notification"},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"The status of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const j={title:"Components/Alerts & Notifications/Notification",component:n,tags:[],argTypes:{onClose:{action:"closed"}}},d={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_title"),description:t.description||e("story.notification_desc")})}},l={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_success_title"),description:t.description||e("story.notification_success_desc")})},args:{status:"success"}},u={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_warning_title"),description:t.description||e("story.notification_warning_desc")})},args:{status:"warning"}},f={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_error_title"),description:t.description||e("story.notification_error_desc")})},args:{status:"error"}},p={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_info_title"),description:t.description||e("story.notification_info_desc")})},args:{status:"info"}},m={render:function(){const[t,e]=g.useState(!1),{t:o}=c(a);return i.jsxs("div",{style:{padding:"24px"},children:[i.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>e(!0),children:o("story.notification_show")}),t&&i.jsx("div",{style:{marginTop:"24px"},children:i.jsx(n,{status:"success",title:o("story.notification_success_title"),description:o("story.notification_triggered_desc"),onClose:()=>e(!1)})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_title")} description={args.description || t("story.notification_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_success_title")} description={args.description || t("story.notification_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_warning_title")} description={args.description || t("story.notification_warning_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_error_desc")} />;
  },
  args: {
    status: "error"
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_info_title")} description={args.description || t("story.notification_info_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "24px"
    }}>
        <button className="wim-button wim-button--primary" onClick={() => setVisible(true)}>
          {t("story.notification_show")}
        </button>
        {visible && <div style={{
        marginTop: "24px"
      }}>
            <Notification status="success" title={t("story.notification_success_title")} description={t("story.notification_triggered_desc")} onClose={() => setVisible(false)} />
          </div>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Success","Warning","ErrorStatus","Info","Trigger"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:d,ErrorStatus:f,Info:p,Success:l,Trigger:m,Warning:u,__namedExportsOrder:E,default:j},Symbol.toStringTag,{value:"Module"}));export{f as E,p as I,V as N,l as S,u as W};
