import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as v,r as j}from"./iframe-DUo8Bj02.js";import{c as h}from"./index-CI1dtVTQ.js";import{I as c}from"./Icon-C5_8LwyI.js";import{u as r}from"./useTranslation-C2tw1dPV.js";const s=({title:o,description:t,icon:n,type:i,onClose:_,closable:y=!0,className:x})=>{const{t:f}=r(),[w,N]=v.useState(!0);if(!w)return null;const b=()=>{N(!1),_&&_()},g=()=>{if(n)return n;if(!i)return null;switch(i){case"success":return e.jsx(c,{name:"CheckIcon",color:"positive",size:"medium"});case"error":return e.jsx(c,{name:"CircleIcon",color:"destructive",size:"medium"});case"warning":return e.jsx(c,{name:"CircleIcon",color:"caution",size:"medium"});case"info":return e.jsx(c,{name:"CircleIcon",color:"informative",size:"medium"});default:return null}};return e.jsx("div",{className:h("wim-notification",i&&`wim-notification--${i}`,x),role:"alert",children:e.jsxs("div",{className:"wim-notification-content",children:[g()&&e.jsx("div",{className:"wim-notification-icon",children:g()}),e.jsxs("div",{className:"wim-notification-message-container",children:[e.jsx("div",{className:"wim-notification-title",children:typeof o=="string"?f(o):o}),t&&e.jsx("div",{className:"wim-notification-description",children:typeof t=="string"?f(t):t})]}),y&&e.jsx("button",{type:"button",onClick:b,className:"wim-notification-close","aria-label":f("a11y_close"),children:e.jsx(c,{name:"CloseIcon",size:"small"})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The type of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const T={title:"Components/Alerts & Notifications/Notification",component:s,tags:[],argTypes:{onClose:{action:"closed"}}},a={render:function(t){const{t:n}=r(["docs","common","components"]);return e.jsx(s,{...t,title:t.title||n("story_notification_title"),description:t.description||n("story_notification_desc")})}},l={render:function(t){const{t:n}=r(["docs","common","components"]);return e.jsx(s,{...t,title:t.title||n("story_notification_success_title"),description:t.description||n("story_notification_success_desc")})},args:{type:"success"}},d={render:function(t){const{t:n}=r(["docs","common","components"]);return e.jsx(s,{...t,title:t.title||n("story_notification_warning_title"),description:t.description||n("story_notification_warning_desc")})},args:{type:"warning"}},m={render:function(t){const{t:n}=r(["docs","common","components"]);return e.jsx(s,{...t,title:t.title||n("story_notification_error_title"),description:t.description||n("story_notification_error_desc")})},args:{type:"error"}},u={render:function(t){const{t:n}=r(["docs","common","components"]);return e.jsx(s,{...t,title:t.title||n("story_notification_info_title"),description:t.description||n("story_notification_info_desc")})},args:{type:"info"}},p={render:function(){const[t,n]=j.useState(!1),{t:i}=r(["docs","common","components"]);return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>n(!0),children:i("story_notification_show")}),t&&e.jsx("div",{style:{marginTop:"24px"},children:e.jsx(s,{type:"success",title:i("story_notification_success_title"),description:i("story_notification_triggered_desc"),onClose:()=>n(!1)})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_title")} description={args.description || t("story_notification_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_success_title")} description={args.description || t("story_notification_success_desc")} />;
  },
  args: {
    type: "success"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_warning_title")} description={args.description || t("story_notification_warning_desc")} />;
  },
  args: {
    type: "warning"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_error_title")} description={args.description || t("story_notification_error_desc")} />;
  },
  args: {
    type: "error"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Notification {...args} title={args.title || t("story_notification_info_title")} description={args.description || t("story_notification_info_desc")} />;
  },
  args: {
    type: "info"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <Notification type="success" title={t("story_notification_success_title")} description={t("story_notification_triggered_desc")} onClose={() => setVisible(false)} />\r
          </div>}\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","Success","Warning","ErrorStatus","Info","Trigger"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ErrorStatus:m,Info:u,Success:l,Trigger:p,Warning:d,__namedExportsOrder:R,default:T},Symbol.toStringTag,{value:"Module"}));export{a as D,m as E,u as I,z as N,l as S,d as W};
