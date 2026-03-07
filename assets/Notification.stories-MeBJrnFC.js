import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as v,r as T}from"./iframe-O5ZI-u7T.js";import{c as x}from"./index-DwL0CKxr.js";import{I as s}from"./Icon-olUqQMEw.js";import{u as S}from"./useTranslation-2PVo7Ynq.js";const p=({title:u,description:i,icon:t,type:d,onClose:f,closable:h=!0,className:y})=>{const{t:m}=S(),[b,w]=v.useState(!0);if(!b)return null;const N=()=>{w(!1),f&&f()},g=()=>{if(t)return t;if(!d)return null;switch(d){case"success":return e.jsx(s,{name:"CheckIcon",color:"positive",size:"medium"});case"error":return e.jsx(s,{name:"CircleIcon",color:"destructive",size:"medium"});case"warning":return e.jsx(s,{name:"CircleIcon",color:"caution",size:"medium"});case"info":return e.jsx(s,{name:"CircleIcon",color:"informative",size:"medium"});default:return null}};return e.jsx("div",{className:x("wim-notification",d&&`wim-notification--${d}`,y),role:"alert",children:e.jsxs("div",{className:"wim-notification-content",children:[g()&&e.jsx("div",{className:"wim-notification-icon",children:g()}),e.jsxs("div",{className:"wim-notification-message-container",children:[e.jsx("div",{className:"wim-notification-title",children:typeof u=="string"?m(u):u}),i&&e.jsx("div",{className:"wim-notification-description",children:typeof i=="string"?m(i):i})]}),h&&e.jsx("button",{type:"button",onClick:N,className:"wim-notification-close","aria-label":m("a11y_close"),children:e.jsx(s,{name:"CloseIcon",size:"small"})})]})})};p.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of notification"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of notification"},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon of notification"},type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"The type of notification"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when notification is closed"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const j={title:"Components/Alerts & Notifications/Notification",component:p,tags:[],argTypes:{onClose:{action:"closed"}}},n={args:{title:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."}},o={args:{type:"success",title:"Success Notification",description:"Your changes have been saved successfully."}},r={args:{type:"warning",title:"Warning Notification",description:"Please be careful with this action."}},a={args:{type:"error",title:"Error Notification",description:"Something went wrong while processing your request."}},c={args:{type:"info",title:"Info Notification",description:"New updates are available for your application."}},l={render:function(){const[i,t]=T.useState(!1);return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("button",{className:"wim-button wim-button--primary",onClick:()=>t(!0),children:"Show Notification"}),i&&e.jsx("div",{style:{marginTop:"24px"},children:e.jsx(p,{type:"success",title:"Success!",description:"This notification was triggered by a button click.",onClose:()=>t(!1)})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Notification Title",
    description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success Notification",
    description: "Your changes have been saved successfully."
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Warning Notification",
    description: "Please be careful with this action."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error Notification",
    description: "Something went wrong while processing your request."
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Info Notification",
    description: "New updates are available for your application."
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [visible, setVisible] = useState(false);
    return <div style={{
      padding: "24px"
    }}>\r
        <button className="wim-button wim-button--primary" onClick={() => setVisible(true)}>\r
          Show Notification\r
        </button>\r
        {visible && <div style={{
        marginTop: "24px"
      }}>\r
            <Notification type="success" title="Success!" description="This notification was triggered by a button click." onClose={() => setVisible(false)} />\r
          </div>}\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const I=["Default","Success","Warning","ErrorStatus","Info","Trigger"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ErrorStatus:a,Info:c,Success:o,Trigger:l,Warning:r,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{n as D,a as E,c as I,k as N,o as S,r as W};
