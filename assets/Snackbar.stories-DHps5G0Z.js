import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as a,A as o}from"./iframe-qE21WwsJ.js";import{B as R}from"./Button-BvUytLEH.js";import{c as N}from"./index-BHxLpz1N.js";import{F as G}from"./FeedbackIcon-hLQ47Qw9.js";import{F as J}from"./FeedbackCloseButton-Dp8yBiYZ.js";import{u as i}from"./useTranslation-BGUEs77q.js";const n=({message:t,open:e=!1,variant:s="default",position:S="bottom-center",autoHideDuration:u=5e3,showCloseButton:M=!1,actionLabel:w,onAction:A,onClose:k,className:P})=>{const[B,v]=a.useState(!1),[q,T]=a.useState(!1),[I,O]=a.useState(e);e!==I&&(O(e),e?T(!0):v(!1)),a.useEffect(()=>{if(e){const c=setTimeout(()=>v(!0),10);return()=>clearTimeout(c)}else{const c=setTimeout(()=>T(!1),300);return()=>clearTimeout(c)}},[e]);const y=a.useCallback(()=>{v(!1),setTimeout(()=>{k&&k()},300)},[k]),[h,D]=a.useState(u),[V,x]=a.useState(()=>Date.now()),[E,L]=a.useState(!1);a.useEffect(()=>{if(e&&u>0&&!E){const c=setTimeout(()=>{y()},h);return x(Date.now()),()=>clearTimeout(c)}},[e,u,y,E,h]);const C=()=>{if(u>0){L(!0);const c=Date.now()-V;D($=>Math.max(0,$-c))}},j=()=>{u>0&&(x(Date.now()),L(!1))},W=()=>{A&&A()};if(!q&&!e)return null;const F=s==="error"||s==="warning"?"alert":"status",z=s==="error"||s==="warning"?"assertive":"polite";return r.jsx("div",{className:N("wim-snackbar-wrapper",`wim-snackbar-wrapper--${S}`),children:r.jsxs("div",{className:N("wim-snackbar",`wim-snackbar--${s}`,B&&"wim-snackbar--visible",P),role:F,"aria-live":z,onMouseEnter:C,onMouseLeave:j,onFocus:C,onBlur:j,children:[r.jsxs("div",{className:"wim-snackbar__content",children:[s!=="default"&&r.jsx("div",{className:"wim-snackbar__icon",children:r.jsx(G,{status:s,size:"small"})}),r.jsx("span",{className:"wim-snackbar__message",children:t})]}),r.jsxs("div",{className:"wim-snackbar__actions",children:[w&&r.jsx(R,{priority:"tertiary",size:"small",onClick:W,className:"wim-snackbar__action-button",label:w}),r.jsx(J,{onClose:M?y:void 0,className:"wim-snackbar__close-button",size:"small"})]})]})})};a.createContext(void 0);n.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const K={title:"Components/Alerts & Notifications/Snackbar",component:n,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},l={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_message")})},args:{open:!0,variant:"default",position:"bottom-center"}},m={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_deleted"),actionLabel:e.actionLabel||s("story_snackbar_undo"),onAction:()=>alert(s("story_snackbar_undo_clicked"))})},args:{open:!0}},d={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},p={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_saved")})},args:{open:!0,variant:"success"}},g={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_failed")})},args:{open:!0,variant:"error"}},f={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_storage_full")})},args:{open:!0,variant:"warning"}},b={render:function(e){const{t:s}=i(o);return r.jsx(n,{...e,message:e.message||s("story_snackbar_update_available")})},args:{open:!0,variant:"info"}},_={render:function(){const{t:e}=i(o),[s,S]=a.useState(!1);return r.jsxs("div",{style:{padding:"40px"},children:[r.jsx(R,{onClick:()=>S(!0),label:e("story_snackbar_show"),priority:"primary"}),r.jsx(n,{message:e("story_snackbar_interactive"),open:s,onClose:()=>S(!1),actionLabel:e("story_snackbar_retry"),showCloseButton:!0})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_message")} />;
  },
  args: {
    open: true,
    variant: "default",
    position: "bottom-center"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_deleted")} actionLabel={args.actionLabel || t("story_snackbar_undo")} onAction={() => alert(t("story_snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_persistent")} />;
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
    return <Snackbar {...args} message={args.message || t("story_snackbar_saved")} />;
  },
  args: {
    open: true,
    variant: "success"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_failed")} />;
  },
  args: {
    open: true,
    variant: "error"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_storage_full")} />;
  },
  args: {
    open: true,
    variant: "warning"
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story_snackbar_update_available")} />;
  },
  args: {
    open: true,
    variant: "info"
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
        <Button onClick={() => setOpen(true)} label={t("story_snackbar_show")} priority="primary" />
        <Snackbar message={t("story_snackbar_interactive")} open={open} onClose={() => setOpen(false)} actionLabel={t("story_snackbar_retry")} showCloseButton />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const Q=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ErrorStatus:g,Info:b,InteractiveDemo:_,Success:p,Warning:f,WithAction:m,WithCloseButton:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{g as E,b as I,re as S,f as W,p as a};
