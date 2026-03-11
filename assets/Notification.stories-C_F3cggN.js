import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as b,r as g}from"./iframe-SL2HqV3D.js";import{c as h}from"./index-30w8ikAG.js";import{F as j}from"./FeedbackIcon-B6IHT8oS.js";import{F as R}from"./FeedbackCloseButton-DN74YLwz.js";import{u as s}from"./useTranslation-ZF4WB21B.js";const o=({id:i,title:t,description:e,icon:r,status:c,onClose:p,closable:y=!0,className:v})=>{const{t:_}=s(),[w,x]=b.useState(!0);if(!w)return null;const N=()=>{x(!1),p&&p(i)},T={success:"positive",error:"destructive",warning:"caution",info:"informative"};return n.jsx("div",{className:h("wim-notification",c&&`wim-notification--${c}`,v),role:"alert",children:n.jsxs("div",{className:"wim-notification-content",children:[(r||c)&&n.jsx("div",{className:"wim-notification-icon",children:n.jsx(j,{status:c,icon:r,size:"medium",color:c?T[c]:void 0})}),n.jsxs("div",{className:"wim-notification-message-container",children:[n.jsx("div",{className:"wim-notification-title",children:typeof t=="string"?_(t):t}),e&&n.jsx("div",{className:"wim-notification-description",children:typeof e=="string"?_(e):e})]}),n.jsx(R,{onClose:y?N:void 0,className:"wim-notification-close",size:"small"})]})})};g.createContext(void 0);o.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"The unique identifier of notification"},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The status of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const S={title:"Components/Alerts & Notifications/Notification",component:o,tags:[],argTypes:{onClose:{action:"closed"}}},a={render:function(t){const{t:e}=s(["docs","common","components"]);return n.jsx(o,{...t,title:t.title||e("story_notification_title"),description:t.description||e("story_notification_desc")})}},d={render:function(t){const{t:e}=s(["docs","common","components"]);return n.jsx(o,{...t,title:t.title||e("story_notification_success_title"),description:t.description||e("story_notification_success_desc")})},args:{status:"success"}},l={render:function(t){const{t:e}=s(["docs","common","components"]);return n.jsx(o,{...t,title:t.title||e("story_notification_warning_title"),description:t.description||e("story_notification_warning_desc")})},args:{status:"warning"}},m={render:function(t){const{t:e}=s(["docs","common","components"]);return n.jsx(o,{...t,title:t.title||e("story_notification_error_title"),description:t.description||e("story_notification_error_desc")})},args:{status:"error"}},u={render:function(t){const{t:e}=s(["docs","common","components"]);return n.jsx(o,{...t,title:t.title||e("story_notification_info_title"),description:t.description||e("story_notification_info_desc")})},args:{status:"info"}},f={render:function(){const[t,e]=g.useState(!1),{t:r}=s(["docs","common","components"]);return n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>e(!0),children:r("story_notification_show")}),t&&n.jsx("div",{style:{marginTop:"24px"},children:n.jsx(o,{status:"success",title:r("story_notification_success_title"),description:r("story_notification_triggered_desc"),onClose:()=>e(!1)})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_title")} description={args.description || t("story_notification_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_success_title")} description={args.description || t("story_notification_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_warning_title")} description={args.description || t("story_notification_warning_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_error_title")} description={args.description || t("story_notification_error_desc")} />;
  },
  args: {
    status: "error"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_info_title")} description={args.description || t("story_notification_info_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...f.parameters?.docs?.source}}};const C=["Default","Success","Warning","ErrorStatus","Info","Trigger"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ErrorStatus:m,Info:u,Success:d,Trigger:f,Warning:l,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,m as E,u as I,W as N,d as S,l as W};
