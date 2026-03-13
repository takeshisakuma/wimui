import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as b,r as g}from"./iframe-R-8edTSa.js";import{c as h}from"./index-BMiqMCWS.js";import{F as j}from"./FeedbackIcon-BvX-e3pZ.js";import{F as R}from"./FeedbackCloseButton-CUF3IGQq.js";import{u as e}from"./useTranslation-BsF8P6HZ.js";const i=({id:n,title:o,description:s,icon:c,status:r,onClose:m,closable:y=!0,className:v})=>{const{t:f}=e(),[w,x]=b.useState(!0);if(!w)return null;const N=()=>{x(!1),m&&m(n)},T={success:"positive",error:"destructive",warning:"caution",info:"informative"};return t.jsx("div",{className:h("wim-notification",r&&`wim-notification--${r}`,v),role:"alert",children:t.jsxs("div",{className:"wim-notification-content",children:[(c||r)&&t.jsx("div",{className:"wim-notification-icon",children:t.jsx(j,{status:r,icon:c,size:"medium",color:r?T[r]:void 0})}),t.jsxs("div",{className:"wim-notification-message-container",children:[t.jsx("div",{className:"wim-notification-title",children:typeof o=="string"?f(o):o}),s&&t.jsx("div",{className:"wim-notification-description",children:typeof s=="string"?f(s):s})]}),t.jsx(R,{onClose:y?N:void 0,className:"wim-notification-close",size:"small"})]})})};g.createContext(void 0);i.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"The unique identifier of notification"},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The status of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const S={title:"Components/Alerts & Notifications/Notification",component:i,tags:[],argTypes:{onClose:{action:"closed"}}},a={render:function(o){const{t:s}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(i,{...o,title:o.title||s("story_notification_title"),description:o.description||s("story_notification_desc")})}},d={render:function(o){const{t:s}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(i,{...o,title:o.title||s("story_notification_success_title"),description:o.description||s("story_notification_success_desc")})},args:{status:"success"}},l={render:function(o){const{t:s}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(i,{...o,title:o.title||s("story_notification_warning_title"),description:o.description||s("story_notification_warning_desc")})},args:{status:"warning"}},_={render:function(o){const{t:s}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(i,{...o,title:o.title||s("story_notification_error_title"),description:o.description||s("story_notification_error_desc")})},args:{status:"error"}},u={render:function(o){const{t:s}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(i,{...o,title:o.title||s("story_notification_info_title"),description:o.description||s("story_notification_info_desc")})},args:{status:"info"}},p={render:function(){const[o,s]=g.useState(!1),{t:c}=e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsxs("div",{style:{padding:"24px"},children:[t.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>s(!0),children:c("story_notification_show")}),o&&t.jsx("div",{style:{marginTop:"24px"},children:t.jsx(i,{status:"success",title:c("story_notification_success_title"),description:c("story_notification_triggered_desc"),onClose:()=>s(!1)})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_title")} description={args.description || t("story_notification_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_success_title")} description={args.description || t("story_notification_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_warning_title")} description={args.description || t("story_notification_warning_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...l.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_error_title")} description={args.description || t("story_notification_error_desc")} />;
  },
  args: {
    status: "error"
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_info_title")} description={args.description || t("story_notification_info_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "24px"
    }}>\r
        <button className="wim-button wim-button--primary" onClick={() => setVisible(true)}>\r
          {t("story_notification_show")}\r
        </button>\r
        {visible && <div style={{
        marginTop: "24px"
      }}>\r
            <Notification status="success" title={t("story_notification_success_title")} description={t("story_notification_triggered_desc")} onClose={() => setVisible(false)} />\r
          </div>}\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const C=["Default","Success","Warning","ErrorStatus","Info","Trigger"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ErrorStatus:_,Info:u,Success:d,Trigger:p,Warning:l,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,_ as E,u as I,W as N,d as S,l as W};
