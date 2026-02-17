import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-CVYkroJl.js";import{I as k}from"./Icon-BeKR45dx.js";import{B as C}from"./Button-CtoyR0Qr.js";import{c as T}from"./index-BrgqE5mE.js";const h=({message:d,open:a=!1,variant:r="default",position:x="bottom-center",autoHideDuration:f=5e3,showCloseButton:_=!1,actionLabel:y,onAction:w,onClose:g,className:j})=>{const[I,b]=s.useState(!1),[N,S]=s.useState(!1),[E,O]=s.useState(a);a!==E&&(O(a),a?S(!0):b(!1)),s.useEffect(()=>{if(a){const t=setTimeout(()=>b(!0),10);return()=>clearTimeout(t)}else{const t=setTimeout(()=>S(!1),300);return()=>clearTimeout(t)}},[a]);const v=s.useCallback(()=>{b(!1),setTimeout(()=>{g&&g()},300)},[g]);s.useEffect(()=>{if(a&&f>0){const t=setTimeout(()=>{v()},f);return()=>clearTimeout(t)}},[a,f,v]);const q=()=>{w&&w()};return!N&&!a?null:e.jsx("div",{className:T("wim-snackbar-wrapper",`wim-snackbar-wrapper--${x}`),children:e.jsxs("div",{className:T("wim-snackbar",`wim-snackbar--${r}`,I&&"wim-snackbar--visible",j),role:"status","aria-live":"polite",children:[e.jsxs("div",{className:"wim-snackbar__content",children:[r!=="default"&&e.jsx("div",{className:"wim-snackbar__icon",children:e.jsx(k,{name:r==="success"?"CheckIcon":"CircleIcon",size:"small"})}),e.jsx("span",{className:"wim-snackbar__message",children:d})]}),e.jsxs("div",{className:"wim-snackbar__actions",children:[y&&e.jsx(C,{priority:"tertiary",size:"small",onClick:q,className:"wim-snackbar__action-button",label:y}),_&&e.jsx("button",{type:"button",className:"wim-snackbar__close-button",onClick:v,"aria-label":"Close",children:e.jsx(k,{name:"CloseIcon",size:"small"})})]})]})})};s.createContext(void 0);h.__docgenInfo={description:"ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"スナックバーに表示するメッセージ"},open:{required:!1,tsType:{name:"boolean"},description:"表示状態",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"表示するタイプ",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"\r
| "top-center"\r
| "top-right"\r
| "bottom-left"\r
| "bottom-center"\r
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"表示位置",defaultValue:{value:'"bottom-center"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。",defaultValue:{value:"5000",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"閉じるボタンを表示するかどうか",defaultValue:{value:"false",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"アクションボタンのラベル"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"アクションボタンがクリックされた時のコールバック"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"スナックバーが閉じられる時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"カスタムクラス名"}}};const B={title:"Component/Feedback/Snackbar",component:h,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},n={args:{message:"This is a snackbar message.",open:!0,variant:"default",position:"bottom-center"}},o={args:{message:"Successfully deleted the item.",open:!0,actionLabel:"UNDO",onAction:()=>alert("Undo clicked!")}},i={args:{message:"This message stays until you close it.",open:!0,showCloseButton:!0,autoHideDuration:0}},l={args:{message:"Data saved successfully!",open:!0,variant:"success"}},c={args:{message:"Failed to upload file.",open:!0,variant:"error"}},u={args:{message:"Your storage is almost full.",open:!0,variant:"warning"}},m={args:{message:"New update available.",open:!0,variant:"info"}},p={render:()=>{const[d,a]=s.useState(!1);return e.jsxs("div",{style:{padding:"40px"},children:[e.jsx(C,{onClick:()=>a(!0),label:"Show Snackbar",priority:"primary"}),e.jsx(h,{message:"Interactive Snackbar is here!",open:d,onClose:()=>a(!1),actionLabel:"RETRY",showCloseButton:!0})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a snackbar message.",
    open: true,
    variant: "default",
    position: "bottom-center"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Successfully deleted the item.",
    open: true,
    actionLabel: "UNDO",
    onAction: () => alert("Undo clicked!")
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This message stays until you close it.",
    open: true,
    showCloseButton: true,
    autoHideDuration: 0
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Data saved successfully!",
    open: true,
    variant: "success"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Failed to upload file.",
    open: true,
    variant: "error"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Your storage is almost full.",
    open: true,
    variant: "warning"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: "New update available.",
    open: true,
    variant: "info"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "40px"
    }}>\r
                <Button onClick={() => setOpen(true)} label="Show Snackbar" priority="primary" />\r
                <Snackbar message="Interactive Snackbar is here!" open={open} onClose={() => setOpen(false)} actionLabel="RETRY" showCloseButton />\r
            </div>;
  }
}`,...p.parameters?.docs?.source}}};const D=["Default","WithAction","WithCloseButton","Success","Error","Warning","Info","InteractiveDemo"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:c,Info:m,InteractiveDemo:p,Success:l,Warning:u,WithAction:o,WithCloseButton:i,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{n as D,c as E,m as I,L as S,o as W,i as a,l as b,u as c,p as d};
