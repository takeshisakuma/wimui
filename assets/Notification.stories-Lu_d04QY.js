import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as b,r as y,A as c}from"./iframe-tWK6G2pl.js";import{c as A}from"./index-noBToutl.js";import{F as h}from"./FeedbackIcon-sWnnbGTn.js";import{F as j}from"./FeedbackCloseButton-BwJVTeD0.js";import{u as o}from"./useTranslation-C9hYRQzo.js";const n=({id:s,title:t,description:e,icon:r,status:a,onClose:_,closable:N=!0,className:S})=>{const{t:g}=o(),[v,w]=b.useState(!0);if(!v)return null;const x=()=>{w(!1),_&&_(s)},T={success:"positive",error:"destructive",warning:"caution",info:"informative"};return i.jsx("div",{className:A("wim-notification",a&&`wim-notification--${a}`,S),role:"alert",children:i.jsxs("div",{className:"wim-notification-content",children:[(r||a)&&i.jsx("div",{className:"wim-notification-icon",children:i.jsx(h,{status:a,icon:r,size:"medium",color:a?T[a]:void 0})}),i.jsxs("div",{className:"wim-notification-message-container",children:[i.jsx("div",{className:"wim-notification-title",children:typeof t=="string"?g(t):t}),e&&i.jsx("div",{className:"wim-notification-description",children:typeof e=="string"?g(e):e})]}),i.jsx(j,{onClose:N?x:void 0,className:"wim-notification-close",size:"small"})]})})};y.createContext(void 0);n.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"The unique identifier of notification"},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The status of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const E={title:"Components/Alerts & Notifications/Notification",component:n,tags:[],argTypes:{onClose:{action:"closed"}}},d={render:function(t){const{t:e}=o(c);return i.jsx(n,{...t,title:t.title||e("story_notification_title"),description:t.description||e("story_notification_desc")})}},l={render:function(t){const{t:e}=o(c);return i.jsx(n,{...t,title:t.title||e("story_notification_success_title"),description:t.description||e("story_notification_success_desc")})},args:{status:"success"}},u={render:function(t){const{t:e}=o(c);return i.jsx(n,{...t,title:t.title||e("story_notification_warning_title"),description:t.description||e("story_notification_warning_desc")})},args:{status:"warning"}},f={render:function(t){const{t:e}=o(c);return i.jsx(n,{...t,title:t.title||e("story_notification_error_title"),description:t.description||e("story_notification_error_desc")})},args:{status:"error"}},p={render:function(t){const{t:e}=o(c);return i.jsx(n,{...t,title:t.title||e("story_notification_info_title"),description:t.description||e("story_notification_info_desc")})},args:{status:"info"}},m={render:function(){const[t,e]=y.useState(!1),{t:r}=o(c);return i.jsxs("div",{style:{padding:"24px"},children:[i.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>e(!0),children:r("story_notification_show")}),t&&i.jsx("div",{style:{marginTop:"24px"},children:i.jsx(n,{status:"success",title:r("story_notification_success_title"),description:r("story_notification_triggered_desc"),onClose:()=>e(!1)})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story_notification_title")} description={args.description || t("story_notification_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story_notification_success_title")} description={args.description || t("story_notification_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story_notification_warning_title")} description={args.description || t("story_notification_warning_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story_notification_error_title")} description={args.description || t("story_notification_error_desc")} />;
  },
  args: {
    status: "error"
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story_notification_info_title")} description={args.description || t("story_notification_info_desc")} />;
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
          {t("story_notification_show")}
        </button>
        {visible && <div style={{
        marginTop: "24px"
      }}>
            <Notification status="success" title={t("story_notification_success_title")} description={t("story_notification_triggered_desc")} onClose={() => setVisible(false)} />
          </div>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const C=["Default","Success","Warning","ErrorStatus","Info","Trigger"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:d,ErrorStatus:f,Info:p,Success:l,Trigger:m,Warning:u,__namedExportsOrder:C,default:E},Symbol.toStringTag,{value:"Module"}));export{f as E,p as I,I as N,l as S,u as W};
