import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-SL2HqV3D.js";import{B as q}from"./Button-DhroN8PM.js";import{c as N}from"./index-30w8ikAG.js";import{F as $}from"./FeedbackIcon-B6IHT8oS.js";import{F as G}from"./FeedbackCloseButton-DN74YLwz.js";import{u as o}from"./useTranslation-ZF4WB21B.js";const r=({message:a,open:e=!1,variant:s="default",position:_="bottom-center",autoHideDuration:i=5e3,showCloseButton:E=!1,actionLabel:S,onAction:w,onClose:k,className:I})=>{const{t:Q}=o(),[L,v]=t.useState(!1),[O,T]=t.useState(!1),[D,V]=t.useState(e);e!==D&&(V(e),e?T(!0):v(!1)),t.useEffect(()=>{if(e){const c=setTimeout(()=>v(!0),10);return()=>clearTimeout(c)}else{const c=setTimeout(()=>T(!1),300);return()=>clearTimeout(c)}},[e]);const y=t.useCallback(()=>{v(!1),setTimeout(()=>{k&&k()},300)},[k]),[h,W]=t.useState(i),[A,x]=t.useState(Date.now()),[j,R]=t.useState(!1);t.useEffect(()=>{if(e&&i>0&&!j){const c=setTimeout(()=>{y()},h);return x(Date.now()),()=>clearTimeout(c)}},[e,i,y,j,h]);const C=()=>{if(i>0){R(!0);const c=Date.now()-A;W(P=>Math.max(0,P-c))}},B=()=>{i>0&&(x(Date.now()),R(!1))},M=()=>{w&&w()};if(!O&&!e)return null;const F=s==="error"||s==="warning"?"alert":"status",z=s==="error"||s==="warning"?"assertive":"polite";return n.jsx("div",{className:N("wim-snackbar-wrapper",`wim-snackbar-wrapper--${_}`),children:n.jsxs("div",{className:N("wim-snackbar",`wim-snackbar--${s}`,L&&"wim-snackbar--visible",I),role:F,"aria-live":z,onMouseEnter:C,onMouseLeave:B,onFocus:C,onBlur:B,children:[n.jsxs("div",{className:"wim-snackbar__content",children:[s!=="default"&&n.jsx("div",{className:"wim-snackbar__icon",children:n.jsx($,{status:s,size:"small"})}),n.jsx("span",{className:"wim-snackbar__message",children:a})]}),n.jsxs("div",{className:"wim-snackbar__actions",children:[S&&n.jsx(q,{priority:"tertiary",size:"small",onClick:M,className:"wim-snackbar__action-button",label:S}),n.jsx(G,{onClose:E?y:void 0,className:"wim-snackbar__close-button",size:"small"})]})]})})};t.createContext(void 0);r.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const J={title:"Components/Alerts & Notifications/Snackbar",component:r,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},m={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_message")})},args:{open:!0,variant:"default",position:"bottom-center"}},u={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_deleted"),actionLabel:e.actionLabel||s("story_snackbar_undo"),onAction:()=>alert(s("story_snackbar_undo_clicked"))})},args:{open:!0}},l={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},d={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_saved")})},args:{open:!0,variant:"success"}},p={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_failed")})},args:{open:!0,variant:"error"}},g={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_storage_full")})},args:{open:!0,variant:"warning"}},f={render:function(e){const{t:s}=o(["docs","common","components"]);return n.jsx(r,{...e,message:e.message||s("story_snackbar_update_available")})},args:{open:!0,variant:"info"}},b={render:function(){const{t:e}=o(["docs","common","components"]),[s,_]=t.useState(!1);return n.jsxs("div",{style:{padding:"40px"},children:[n.jsx(q,{onClick:()=>_(!0),label:e("story_snackbar_show"),priority:"primary"}),n.jsx(r,{message:e("story_snackbar_interactive"),open:s,onClose:()=>_(!1),actionLabel:e("story_snackbar_retry"),showCloseButton:!0})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_deleted")} actionLabel={args.actionLabel || t("story_snackbar_undo")} onAction={() => alert(t("story_snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const K=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:m,ErrorStatus:p,Info:f,InteractiveDemo:b,Success:d,Warning:g,WithAction:u,WithCloseButton:l,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{m as D,p as E,f as I,ne as S,u as W,l as a,d as b,g as c,b as d};
