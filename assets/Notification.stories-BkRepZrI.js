import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as T,r as g,A as a}from"./iframe-9NEVSgmA.js";import{c as b}from"./index-D0BZ6LJb.js";import{F as A}from"./FeedbackIcon-mogIs0Dg.js";import{F as h}from"./FeedbackCloseButton-CCojkHlh.js";import{u as c}from"./useTranslation-7ChDnO1a.js";const n=({id:s,title:t,description:e,icon:r,intent:o,onClose:_,closable:y=!0,className:v})=>{const[N,S]=T.useState(!0);if(!N)return null;const w=()=>{S(!1),_&&_(s)},x={success:"positive",error:"destructive",warning:"caution",info:"informative"};return i.jsx("div",{className:b("wim-notification",o&&`wim-notification--${o}`,v),role:"alert",children:i.jsxs("div",{className:"wim-notification-content",children:[(r||o)&&i.jsx("div",{className:"wim-notification-icon",children:i.jsx(A,{intent:o,icon:r,size:"md",color:o?x[o]:void 0})}),i.jsxs("div",{className:"wim-notification-message-container",children:[i.jsx("div",{className:"wim-notification-title",children:t}),e&&i.jsx("div",{className:"wim-notification-description",children:e})]}),i.jsx(h,{onClose:y?w:void 0,className:"wim-notification-close",size:"sm"})]})})};g.createContext(void 0);n.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"The unique identifier of notification"},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},intent:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"The status of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const j={title:"Components/Alerts & Notifications/Notification",component:n,tags:[],argTypes:{onClose:{action:"closed"}}},l={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_title"),description:t.description||e("story.notification_desc")})}},d={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_success_title"),description:t.description||e("story.notification_success_desc")})},args:{intent:"success"}},u={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_warning_title"),description:t.description||e("story.notification_warning_desc")})},args:{intent:"warning"}},f={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_error_title"),description:t.description||e("story.notification_error_desc")})},args:{intent:"error"}},p={render:function(t){const{t:e}=c(a);return i.jsx(n,{...t,title:t.title||e("story.notification_info_title"),description:t.description||e("story.notification_info_desc")})},args:{intent:"info"}},m={render:function(){const[t,e]=g.useState(!1),{t:r}=c(a);return i.jsxs("div",{style:{padding:"24px"},children:[i.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>e(!0),children:r("story.notification_show")}),t&&i.jsx("div",{style:{marginTop:"24px"},children:i.jsx(n,{intent:"success",title:r("story.notification_success_title"),description:r("story.notification_triggered_desc"),onClose:()=>e(!1)})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_title")} description={args.description || t("story.notification_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_success_title")} description={args.description || t("story.notification_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_warning_title")} description={args.description || t("story.notification_warning_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_error_desc")} />;
  },
  args: {
    intent: "error"
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_info_title")} description={args.description || t("story.notification_info_desc")} />;
  },
  args: {
    intent: "info"
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
            <Notification intent="success" title={t("story.notification_success_title")} description={t("story.notification_triggered_desc")} onClose={() => setVisible(false)} />
          </div>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Success","Warning","ErrorStatus","Info","Trigger"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ErrorStatus:f,Info:p,Success:d,Trigger:m,Warning:u,__namedExportsOrder:E,default:j},Symbol.toStringTag,{value:"Module"}));export{f as E,p as I,V as N,d as S,u as W};
