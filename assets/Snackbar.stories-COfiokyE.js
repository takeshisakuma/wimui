import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DUo8Bj02.js";import{I as x}from"./Icon-C5_8LwyI.js";import{B as j}from"./Button-rFGJ_NsL.js";import{c as T}from"./index-CI1dtVTQ.js";import{u as a}from"./useTranslation-C2tw1dPV.js";const r=({message:t,open:e=!1,variant:n="default",position:b="bottom-center",autoHideDuration:_=5e3,showCloseButton:C=!1,actionLabel:S,onAction:w,onClose:k,className:R})=>{const{t:I}=a(),[N,y]=o.useState(!1),[q,h]=o.useState(!1),[B,O]=o.useState(e);e!==B&&(O(e),e?h(!0):y(!1)),o.useEffect(()=>{if(e){const c=setTimeout(()=>y(!0),10);return()=>clearTimeout(c)}else{const c=setTimeout(()=>h(!1),300);return()=>clearTimeout(c)}},[e]);const v=o.useCallback(()=>{y(!1),setTimeout(()=>{k&&k()},300)},[k]);o.useEffect(()=>{if(e&&_>0){const c=setTimeout(()=>{v()},_);return()=>clearTimeout(c)}},[e,_,v]);const E=()=>{w&&w()};return!q&&!e?null:s.jsx("div",{className:T("wim-snackbar-wrapper",`wim-snackbar-wrapper--${b}`),children:s.jsxs("div",{className:T("wim-snackbar",`wim-snackbar--${n}`,N&&"wim-snackbar--visible",R),role:"status","aria-live":"polite",children:[s.jsxs("div",{className:"wim-snackbar__content",children:[n!=="default"&&s.jsx("div",{className:"wim-snackbar__icon",children:s.jsx(x,{name:n==="success"?"CheckIcon":"CircleIcon",size:"small"})}),s.jsx("span",{className:"wim-snackbar__message",children:t})]}),s.jsxs("div",{className:"wim-snackbar__actions",children:[S&&s.jsx(j,{priority:"tertiary",size:"small",onClick:E,className:"wim-snackbar__action-button",label:S}),C&&s.jsx("button",{type:"button",className:"wim-snackbar__close-button",onClick:v,"aria-label":I("a11y_close"),children:s.jsx(x,{name:"CloseIcon",size:"small"})})]})]})})};o.createContext(void 0);r.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const V={title:"Components/Alerts & Notifications/Snackbar",component:r,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},i={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_message")})},args:{open:!0,variant:"default",position:"bottom-center"}},m={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_deleted"),actionLabel:e.actionLabel||n("story_snackbar_undo"),onAction:()=>alert(n("story_snackbar_undo_clicked"))})},args:{open:!0}},l={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},u={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_saved")})},args:{open:!0,variant:"success"}},d={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_failed")})},args:{open:!0,variant:"error"}},p={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_storage_full")})},args:{open:!0,variant:"warning"}},g={render:function(e){const{t:n}=a(["docs","common","components"]);return s.jsx(r,{...e,message:e.message||n("story_snackbar_update_available")})},args:{open:!0,variant:"info"}},f={render:function(){const{t:e}=a(["docs","common","components"]),[n,b]=o.useState(!1);return s.jsxs("div",{style:{padding:"40px"},children:[s.jsx(j,{onClick:()=>b(!0),label:e("story_snackbar_show"),priority:"primary"}),s.jsx(r,{message:e("story_snackbar_interactive"),open:n,onClose:()=>b(!1),actionLabel:e("story_snackbar_retry"),showCloseButton:!0})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_message")} />;
  },
  args: {
    open: true,
    variant: "default",
    position: "bottom-center"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_deleted")} actionLabel={args.actionLabel || t("story_snackbar_undo")} onAction={() => alert(t("story_snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_persistent")} />;
  },
  args: {
    open: true,
    showCloseButton: true,
    autoHideDuration: 0
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_saved")} />;
  },
  args: {
    open: true,
    variant: "success"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_failed")} />;
  },
  args: {
    open: true,
    variant: "error"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_storage_full")} />;
  },
  args: {
    open: true,
    variant: "warning"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_update_available")} />;
  },
  args: {
    open: true,
    variant: "info"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "40px"
    }}>\r
        <Button onClick={() => setOpen(true)} label={t("story_snackbar_show")} priority="primary" />\r
        <Snackbar message={t("story_snackbar_interactive")} open={open} onClose={() => setOpen(false)} actionLabel={t("story_snackbar_retry")} showCloseButton />\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const W=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ErrorStatus:d,Info:g,InteractiveDemo:f,Success:u,Warning:p,WithAction:m,WithCloseButton:l,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{i as D,d as E,g as I,H as S,m as W,l as a,u as b,p as c,f as d};
