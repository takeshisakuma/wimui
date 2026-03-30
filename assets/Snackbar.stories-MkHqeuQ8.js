import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as a,A as o}from"./iframe-BCt2Cqzi.js";import{B as R}from"./Button-BYZRdEHu.js";import{c as N}from"./index-D0GPwUjE.js";import{F as G}from"./FeedbackIcon-BZT6Q2Fm.js";import{F as J}from"./FeedbackCloseButton-DGAIxSmH.js";import{u as c}from"./useTranslation-iqmbh8MZ.js";const n=({message:r,open:e=!1,status:s="default",position:S="bottom-center",autoHideDuration:u=5e3,showCloseButton:M=!1,actionLabel:w,onAction:A,onClose:k,className:P})=>{const[B,v]=a.useState(!1),[q,T]=a.useState(!1),[I,O]=a.useState(e);e!==I&&(O(e),e?T(!0):v(!1)),a.useEffect(()=>{if(e){const i=setTimeout(()=>v(!0),10);return()=>clearTimeout(i)}else{const i=setTimeout(()=>T(!1),300);return()=>clearTimeout(i)}},[e]);const y=a.useCallback(()=>{v(!1),setTimeout(()=>{k&&k()},300)},[k]),[h,D]=a.useState(u),[V,x]=a.useState(()=>Date.now()),[E,L]=a.useState(!1);a.useEffect(()=>{if(e&&u>0&&!E){const i=setTimeout(()=>{y()},h);return x(Date.now()),()=>clearTimeout(i)}},[e,u,y,E,h]);const C=()=>{if(u>0){L(!0);const i=Date.now()-V;D($=>Math.max(0,$-i))}},j=()=>{u>0&&(x(Date.now()),L(!1))},W=()=>{A&&A()};if(!q&&!e)return null;const F=s==="error"||s==="warning"?"alert":"status",z=s==="error"||s==="warning"?"assertive":"polite";return t.jsx("div",{className:N("wim-snackbar-wrapper",`wim-snackbar-wrapper--${S}`),children:t.jsxs("div",{className:N("wim-snackbar",`wim-snackbar--${s}`,B&&"wim-snackbar--visible",P),role:F,"aria-live":z,onMouseEnter:C,onMouseLeave:j,onFocus:C,onBlur:j,children:[t.jsxs("div",{className:"wim-snackbar__content",children:[s!=="default"&&t.jsx("div",{className:"wim-snackbar__icon",children:t.jsx(G,{status:s,size:"sm"})}),t.jsx("span",{className:"wim-snackbar__message",children:r})]}),t.jsxs("div",{className:"wim-snackbar__actions",children:[w&&t.jsx(R,{variant:"ghost",size:"sm",onClick:W,className:"wim-snackbar__action-button",label:w}),t.jsx(J,{onClose:M?y:void 0,className:"wim-snackbar__close-button",size:"sm"})]})]})})};a.createContext(void 0);n.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'FeedbackStatus | "default"',elements:[{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},{name:"literal",value:'"default"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const K={title:"Components/Alerts & Notifications/Snackbar",component:n,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{status:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},l={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_message")})},args:{open:!0,status:"default",position:"bottom-center"}},m={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_deleted"),actionLabel:e.actionLabel||s("story.snackbar_undo"),onAction:()=>alert(s("story.snackbar_undo_clicked"))})},args:{open:!0}},d={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},p={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_saved")})},args:{open:!0,status:"success"}},f={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_failed")})},args:{open:!0,status:"error"}},g={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_storage_full")})},args:{open:!0,status:"warning"}},b={render:function(e){const{t:s}=c(o);return t.jsx(n,{...e,message:e.message||s("story.snackbar_update_available")})},args:{open:!0,status:"info"}},_={render:function(){const{t:e}=c(o),[s,S]=a.useState(!1);return t.jsxs("div",{style:{padding:"40px"},children:[t.jsx(R,{onClick:()=>S(!0),label:e("story.snackbar_show"),variant:"filled"}),t.jsx(n,{message:e("story.snackbar_interactive"),open:s,onClose:()=>S(!1),actionLabel:e("story.snackbar_retry"),showCloseButton:!0})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_message")} />;
  },
  args: {
    open: true,
    status: "default",
    position: "bottom-center"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_deleted")} actionLabel={args.actionLabel || t("story.snackbar_undo")} onAction={() => alert(t("story.snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_persistent")} />;
  },
  args: {
    open: true,
    showCloseButton: true,
    autoHideDuration: 0
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_saved")} />;
  },
  args: {
    open: true,
    status: "success"
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_failed")} />;
  },
  args: {
    open: true,
    status: "error"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_storage_full")} />;
  },
  args: {
    open: true,
    status: "warning"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_update_available")} />;
  },
  args: {
    open: true,
    status: "info"
  }
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "40px"
    }}>
        <Button onClick={() => setOpen(true)} label={t("story.snackbar_show")} variant="filled" />
        <Snackbar message={t("story.snackbar_interactive")} open={open} onClose={() => setOpen(false)} actionLabel={t("story.snackbar_retry")} showCloseButton />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const Q=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ErrorStatus:f,Info:b,InteractiveDemo:_,Success:p,Warning:g,WithAction:m,WithCloseButton:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{f as E,b as I,te as S,g as W,p as a};
