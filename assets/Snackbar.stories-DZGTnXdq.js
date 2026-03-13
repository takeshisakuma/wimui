import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-DtwnyzFc.js";import{B as q}from"./Button-CE01zq8d.js";import{c as N}from"./index-DWTvJvSx.js";import{F as $}from"./FeedbackIcon-Y6IT9rPR.js";import{F as G}from"./FeedbackCloseButton-CdwkLoZ2.js";import{u as r}from"./useTranslation-BJQcmf5i.js";const a=({message:t,open:s=!1,variant:e="default",position:y="bottom-center",autoHideDuration:i=5e3,showCloseButton:E=!1,actionLabel:S,onAction:w,onClose:b,className:I})=>{const[L,v]=n.useState(!1),[O,T]=n.useState(!1),[D,V]=n.useState(s);s!==D&&(V(s),s?T(!0):v(!1)),n.useEffect(()=>{if(s){const c=setTimeout(()=>v(!0),10);return()=>clearTimeout(c)}else{const c=setTimeout(()=>T(!1),300);return()=>clearTimeout(c)}},[s]);const k=n.useCallback(()=>{v(!1),setTimeout(()=>{b&&b()},300)},[b]),[h,W]=n.useState(i),[A,x]=n.useState(()=>Date.now()),[j,R]=n.useState(!1);n.useEffect(()=>{if(s&&i>0&&!j){const c=setTimeout(()=>{k()},h);return x(Date.now()),()=>clearTimeout(c)}},[s,i,k,j,h]);const C=()=>{if(i>0){R(!0);const c=Date.now()-A;W(P=>Math.max(0,P-c))}},B=()=>{i>0&&(x(Date.now()),R(!1))},M=()=>{w&&w()};if(!O&&!s)return null;const F=e==="error"||e==="warning"?"alert":"status",z=e==="error"||e==="warning"?"assertive":"polite";return o.jsx("div",{className:N("wim-snackbar-wrapper",`wim-snackbar-wrapper--${y}`),children:o.jsxs("div",{className:N("wim-snackbar",`wim-snackbar--${e}`,L&&"wim-snackbar--visible",I),role:F,"aria-live":z,onMouseEnter:C,onMouseLeave:B,onFocus:C,onBlur:B,children:[o.jsxs("div",{className:"wim-snackbar__content",children:[e!=="default"&&o.jsx("div",{className:"wim-snackbar__icon",children:o.jsx($,{status:e,size:"small"})}),o.jsx("span",{className:"wim-snackbar__message",children:t})]}),o.jsxs("div",{className:"wim-snackbar__actions",children:[S&&o.jsx(q,{priority:"tertiary",size:"small",onClick:M,className:"wim-snackbar__action-button",label:S}),o.jsx(G,{onClose:E?k:void 0,className:"wim-snackbar__close-button",size:"small"})]})]})})};n.createContext(void 0);a.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "default"\r
| "success"\r
| "warning"\r
| "error"\r
| "info"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"\r
| "top-center"\r
| "top-right"\r
| "bottom-left"\r
| "bottom-center"\r
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const J={title:"Components/Alerts & Notifications/Snackbar",component:a,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},d={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_message")})},args:{open:!0,variant:"default",position:"bottom-center"}},u={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_deleted"),actionLabel:s.actionLabel||e("story_snackbar_undo"),onAction:()=>alert(e("story_snackbar_undo_clicked"))})},args:{open:!0}},l={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_persistent")})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},m={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_saved")})},args:{open:!0,variant:"success"}},_={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_failed")})},args:{open:!0,variant:"error"}},p={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_storage_full")})},args:{open:!0,variant:"warning"}},g={render:function(s){const{t:e}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,message:s.message||e("story_snackbar_update_available")})},args:{open:!0,variant:"info"}},f={render:function(){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[e,y]=n.useState(!1);return o.jsxs("div",{style:{padding:"40px"},children:[o.jsx(q,{onClick:()=>y(!0),label:s("story_snackbar_show"),priority:"primary"}),o.jsx(a,{message:s("story_snackbar_interactive"),open:e,onClose:()=>y(!1),actionLabel:s("story_snackbar_retry"),showCloseButton:!0})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_message")} />;
  },
  args: {
    open: true,
    variant: "default",
    position: "bottom-center"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_deleted")} actionLabel={args.actionLabel || t("story_snackbar_undo")} onAction={() => alert(t("story_snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_persistent")} />;
  },
  args: {
    open: true,
    showCloseButton: true,
    autoHideDuration: 0
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_saved")} />;
  },
  args: {
    open: true,
    variant: "success"
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Snackbar {...args} message={args.message || t("story_snackbar_failed")} />;
  },
  args: {
    open: true,
    variant: "error"
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "40px"
    }}>\r
        <Button onClick={() => setOpen(true)} label={t("story_snackbar_show")} priority="primary" />\r
        <Snackbar message={t("story_snackbar_interactive")} open={open} onClose={() => setOpen(false)} actionLabel={t("story_snackbar_retry")} showCloseButton />\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const K=["Default","WithAction","WithCloseButton","Success","ErrorStatus","Warning","Info","InteractiveDemo"],es=Object.freeze(Object.defineProperty({__proto__:null,Default:d,ErrorStatus:_,Info:g,InteractiveDemo:f,Success:m,Warning:p,WithAction:u,WithCloseButton:l,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{d as D,_ as E,g as I,es as S,u as W,l as a,m as b,p as c,f as d};
