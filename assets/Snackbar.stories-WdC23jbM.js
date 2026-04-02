import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as o}from"./iframe-Dh8ZUv-I.js";import{B as R}from"./Button-CDhpu8wV.js";import{c as N}from"./index-DnwyEzdG.js";import{F as G}from"./FeedbackIcon-Cfg7Pb8K.js";import{F as J}from"./FeedbackCloseButton-Po9H47Hm.js";import{u as i}from"./useTranslation-CdCoNx2v.js";const a=({message:r,open:e=!1,intent:n="default",position:_="bottom-center",autoHideDuration:l=5e3,showCloseButton:M=!1,actionLabel:w,onAction:A,onClose:S,className:P})=>{const[B,k]=t.useState(!1),[I,T]=t.useState(!1),[q,O]=t.useState(e);e!==q&&(O(e),e?T(!0):k(!1)),t.useEffect(()=>{if(e){const c=setTimeout(()=>k(!0),10);return()=>clearTimeout(c)}else{const c=setTimeout(()=>T(!1),300);return()=>clearTimeout(c)}},[e]);const y=t.useCallback(()=>{k(!1),setTimeout(()=>{S&&S()},300)},[S]),[h,W]=t.useState(l),[D,x]=t.useState(()=>Date.now()),[E,L]=t.useState(!1);t.useEffect(()=>{if(e&&l>0&&!E){const c=setTimeout(()=>{y()},h);return x(Date.now()),()=>clearTimeout(c)}},[e,l,y,E,h]);const C=()=>{if(l>0){L(!0);const c=Date.now()-D;W($=>Math.max(0,$-c))}},j=()=>{l>0&&(x(Date.now()),L(!1))},V=()=>{A&&A()};if(!I&&!e)return null;const F=n==="error"||n==="warning"?"alert":"status",z=n==="error"||n==="warning"?"assertive":"polite";return s.jsx("div",{className:N("wim-snackbar-wrapper",`wim-snackbar-wrapper--${_}`),children:s.jsxs("div",{className:N("wim-snackbar",`wim-snackbar--${n}`,B&&"wim-snackbar--visible",P),role:F,"aria-live":z,onMouseEnter:C,onMouseLeave:j,onFocus:C,onBlur:j,children:[s.jsxs("div",{className:"wim-snackbar__content",children:[n!=="default"&&s.jsx("div",{className:"wim-snackbar__icon",children:s.jsx(G,{intent:n,size:"sm"})}),s.jsx("span",{className:"wim-snackbar__message",children:r})]}),s.jsxs("div",{className:"wim-snackbar__actions",children:[w&&s.jsx(R,{variant:"ghost",size:"sm",onClick:V,className:"wim-snackbar__action-button",label:w}),s.jsx(J,{onClose:M?y:void 0,className:"wim-snackbar__close-button",size:"sm"})]})]})})};t.createContext(void 0);a.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},intent:{required:!1,tsType:{name:"union",raw:'WimIntent | "default"',elements:[{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},{name:"literal",value:'"default"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const K={title:"Components/Alerts & Notifications/Snackbar",component:a,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{intent:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},u={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_message")})},args:{open:!0,intent:"default",position:"bottom-center"}},m={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_deleted"),actionLabel:e.actionLabel||n("story.snackbar_undo"),onAction:()=>alert(n("story.snackbar_undo_clicked"))})},args:{open:!0}},d={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},p={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_saved")})},args:{open:!0,intent:"success"}},f={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_failed")})},args:{open:!0,intent:"error"}},g={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_storage_full")})},args:{open:!0,intent:"warning"}},b={render:function(e){const{t:n}=i(o);return s.jsx(a,{...e,message:e.message||n("story.snackbar_update_available")})},args:{open:!0,intent:"info"}},v={render:function(){const{t:e}=i(o),[n,_]=t.useState(!1);return s.jsxs("div",{style:{padding:"40px"},children:[s.jsx(R,{onClick:()=>_(!0),label:e("story.snackbar_show"),variant:"filled"}),s.jsx(a,{message:e("story.snackbar_interactive"),open:n,onClose:()=>_(!1),actionLabel:e("story.snackbar_retry"),showCloseButton:!0})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_message")} />;
  },
  args: {
    open: true,
    intent: "default",
    position: "bottom-center"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    intent: "success"
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
    intent: "error"
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
    intent: "warning"
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
    intent: "info"
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Q=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:u,ErrorStatus:f,Info:b,InteractiveDemo:v,Success:p,Warning:g,WithAction:m,WithCloseButton:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{f as E,b as I,se as S,g as W,p as a};
