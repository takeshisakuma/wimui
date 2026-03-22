import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as o,A as x}from"./iframe-CbS9gB6V.js";import{c as H}from"./index-OGIV44ur.js";import{F as le}from"./FieldTemplate-ZaPMnHJW.js";import{u as f}from"./useTranslation-1pI0prKY.js";const se=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[e.jsx("path",{d:"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}),e.jsx("path",{d:"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"})]}),ie=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[e.jsx("line",{x1:"19",y1:"4",x2:"10",y2:"4"}),e.jsx("line",{x1:"14",y1:"20",x2:"5",y2:"20"}),e.jsx("line",{x1:"15",y1:"4",x2:"9",y2:"20"})]}),ce=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[e.jsx("path",{d:"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}),e.jsx("line",{x1:"4",y1:"21",x2:"20",y2:"21"})]}),de=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:[e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"})]}),ue=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),e.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),e.jsx("circle",{cx:"4",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),me=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("line",{x1:"10",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"10",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"10",y1:"18",x2:"21",y2:"18"}),e.jsx("text",{x:"1",y:"8",fontSize:"7",fill:"currentColor",stroke:"none",fontWeight:"bold",children:"1."}),e.jsx("text",{x:"1",y:"14",fontSize:"7",fill:"currentColor",stroke:"none",fontWeight:"bold",children:"2."}),e.jsx("text",{x:"1",y:"20",fontSize:"7",fill:"currentColor",stroke:"none",fontWeight:"bold",children:"3."})]}),pe=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),he=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.72"}),e.jsx("path",{d:"M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"5"}),e.jsx("line",{x1:"2",y1:"8",x2:"5",y2:"8"}),e.jsx("line",{x1:"16",y1:"19",x2:"16",y2:"22"}),e.jsx("line",{x1:"19",y1:"16",x2:"22",y2:"16"})]}),_e=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M20 20H7L3 16l10-10 7 7-3.5 3.5"}),e.jsx("line",{x1:"6",y1:"7",x2:"17",y2:"18"})]}),fe=["bold","italic","underline","strikethrough","separator","h1","h2","h3","separator","ul","ol","separator","link","unlink","separator","removeFormat"],u=({onClick:l,active:a,disabled:r,title:h,children:b})=>e.jsx("button",{type:"button",className:H("wim-rte__toolbar-btn",a&&"wim-rte__toolbar-btn--active"),onClick:l,disabled:r,title:h,"aria-label":h,"aria-pressed":a,tabIndex:-1,children:b}),p=({value:l,defaultValue:a="",onChange:r,placeholder:h,disabled:b,status:I="default",variant:D="outline",fullWidth:z=!1,minHeight:L=200,label:A,error:M,required:P,layout:U,className:O,id:G,toolbar:K=fe,"aria-label":W,"aria-labelledby":Y})=>{const{t:s}=f(),i=o.useRef(null),q=o.useRef(!1),y=o.useRef(l??a),[w,J]=o.useState(new Set),Q=o.useId(),E=G||`wim-rte-${Q}`,N=M?`${E}-error`:void 0,V=A?`${E}-label`:void 0,m=b||I==="disabled",F=m?"disabled":M?"error":I,$=o.useRef(l!==void 0?l:a);o.useEffect(()=>{i.current&&(i.current.innerHTML=$.current,y.current=$.current)},[]),o.useEffect(()=>{l!==void 0&&i.current&&i.current.innerHTML!==l&&(i.current.innerHTML=l,y.current=l)},[l]);const _=o.useCallback(()=>{const t=new Set;try{document.queryCommandState("bold")&&t.add("bold"),document.queryCommandState("italic")&&t.add("italic"),document.queryCommandState("underline")&&t.add("underline"),document.queryCommandState("strikeThrough")&&t.add("strikethrough"),document.queryCommandState("insertUnorderedList")&&t.add("ul"),document.queryCommandState("insertOrderedList")&&t.add("ol");const c=document.queryCommandValue("formatBlock").toLowerCase().replace(/^<|>$/g,"");c&&t.add(c)}catch{}J(t)},[]),d=o.useCallback((t,c)=>{if(m)return;i.current?.focus(),document.execCommand(t,!1,c),_();const n=i.current?.innerHTML??"";y.current=n,r?.(n)},[m,r,_]),X=o.useCallback(()=>{if(m)return;i.current?.focus();const t=window.getSelection();if(t&&t.isCollapsed&&i.current){const n=document.createRange();n.selectNodeContents(i.current),t.removeAllRanges(),t.addRange(n)}try{const n=document.queryCommandValue("formatBlock").toLowerCase().replace(/^<|>$/g,"");n&&!["p","div",""].includes(n)&&document.execCommand("formatBlock",!1,"p")}catch{}document.execCommand("removeFormat",!1,void 0),_();const c=i.current?.innerHTML??"";y.current=c,r?.(c)},[m,r,_]),Z=o.useCallback(()=>{if(m)return;i.current?.focus();const c=window.getSelection()?.toString()??"",n=window.prompt(s("a11y_rte_link_prompt"),c.startsWith("http")?c:"https://");n&&d("createLink",n)},[m,d,s]),B=o.useCallback(()=>{if(q.current)return;const t=i.current?.innerHTML??"";t!==y.current&&(y.current=t,r?.(t)),_()},[r,_]),ee=o.useCallback(()=>{_()},[_]),re=o.useCallback(()=>{_()},[_]),te=o.useCallback(()=>{q.current=!0},[]),ne=o.useCallback(()=>{q.current=!1,B()},[B]),ae=o.useCallback(t=>{t.preventDefault()},[]),oe=(t,c)=>{if(t==="separator")return e.jsx("span",{className:"wim-rte__toolbar-sep","aria-hidden":"true"},`sep-${c}`);const n={disabled:m,active:w.has(t)};switch(t){case"bold":return e.jsx(u,{...n,title:s("a11y_rte_bold"),onClick:()=>d("bold"),children:e.jsx(se,{})},"bold");case"italic":return e.jsx(u,{...n,title:s("a11y_rte_italic"),onClick:()=>d("italic"),children:e.jsx(ie,{})},"italic");case"underline":return e.jsx(u,{...n,title:s("a11y_rte_underline"),onClick:()=>d("underline"),children:e.jsx(ce,{})},"underline");case"strikethrough":return e.jsx(u,{...n,title:s("a11y_rte_strikethrough"),onClick:()=>d("strikeThrough"),children:e.jsx(de,{})},"strikethrough");case"h1":return e.jsx(u,{...n,active:w.has("h1"),title:s("a11y_rte_h1"),onClick:()=>d("formatBlock","h1"),children:e.jsx("span",{"aria-hidden":"true",children:"H1"})},"h1");case"h2":return e.jsx(u,{...n,active:w.has("h2"),title:s("a11y_rte_h2"),onClick:()=>d("formatBlock","h2"),children:e.jsx("span",{"aria-hidden":"true",children:"H2"})},"h2");case"h3":return e.jsx(u,{...n,active:w.has("h3"),title:s("a11y_rte_h3"),onClick:()=>d("formatBlock","h3"),children:e.jsx("span",{"aria-hidden":"true",children:"H3"})},"h3");case"ul":return e.jsx(u,{...n,title:s("a11y_rte_ul"),onClick:()=>d("insertUnorderedList"),children:e.jsx(ue,{})},"ul");case"ol":return e.jsx(u,{...n,title:s("a11y_rte_ol"),onClick:()=>d("insertOrderedList"),children:e.jsx(me,{})},"ol");case"link":return e.jsx(u,{...n,title:s("a11y_rte_link"),onClick:Z,children:e.jsx(pe,{})},"link");case"unlink":return e.jsx(u,{...n,title:s("a11y_rte_unlink"),onClick:()=>d("unlink"),children:e.jsx(he,{})},"unlink");case"removeFormat":return e.jsx(u,{...n,title:s("a11y_rte_remove_format"),onClick:X,children:e.jsx(_e,{})},"removeFormat");default:return null}};return e.jsx(le,{label:A,error:M,required:P,layout:U,labelId:V,errorId:N,className:O,children:e.jsxs("div",{className:H("wim-rte",`wim-rte--${F}`,`wim-rte--${D}`,z&&"wim-rte--full-width"),children:[e.jsx("div",{className:"wim-rte__toolbar",role:"toolbar","aria-label":s("a11y_rte_toolbar"),"aria-controls":E,onMouseDown:ae,children:K.map((t,c)=>oe(t,c))}),e.jsx("div",{ref:i,id:E,className:"wim-rte__content",contentEditable:!m,suppressContentEditableWarning:!0,role:"textbox","aria-multiline":!0,"aria-label":W?s(W):void 0,"aria-labelledby":Y??(A?V:void 0),"aria-invalid":F==="error","aria-describedby":N,"aria-disabled":m,"aria-placeholder":h?s(h):void 0,"data-placeholder":h?s(h):void 0,tabIndex:m?-1:0,style:{minHeight:typeof L=="number"?`${L}px`:L,outline:"none"},onInput:B,onKeyUp:ee,onMouseUp:re,onCompositionStart:te,onCompositionEnd:ne})]})})};p.displayName="RichTextEditor";p.__docgenInfo={description:"リッチテキスト入力を受け付けるWYSIWYGエディタコンポーネント。",methods:[],displayName:"RichTextEditor",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"200",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},toolbar:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| "bold"
| "italic"
| "underline"
| "strikethrough"
| "h1"
| "h2"
| "h3"
| "ul"
| "ol"
| "link"
| "unlink"
| "removeFormat"
| "separator"`,elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"italic"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"strikethrough"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"ul"'},{name:"literal",value:'"ol"'},{name:"literal",value:'"link"'},{name:"literal",value:'"unlink"'},{name:"literal",value:'"removeFormat"'},{name:"literal",value:'"separator"'}]}],raw:"RichTextEditorToolbarItem[]"},description:"",defaultValue:{value:`[
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "separator",
  "h1",
  "h2",
  "h3",
  "separator",
  "ul",
  "ol",
  "separator",
  "link",
  "unlink",
  "separator",
  "removeFormat",
]`,computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const xe={title:"Components/Basic Inputs/RichTextEditor",component:p,argTypes:{status:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}}}},v={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_content"),placeholder:r("story_rte_placeholder_default")})}},g={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_article"),defaultValue:`<h2>${r("story_rte_default_heading")}</h2><p>${r("story_rte_default_body")}</p>`})}},k={render:function(a){const{t:r}=f(x),[h,b]=o.useState(`<p>${r("story_rte_controlled_initial")}</p>`);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{...a,label:r("story_rte_label_content"),value:h,onChange:b}),e.jsxs("div",{children:[e.jsx("strong",{children:r("story_rte_output_label")}),e.jsx("pre",{style:{fontSize:"0.75rem",whiteSpace:"pre-wrap",wordBreak:"break-all",padding:"8px",background:"#f5f5f5",borderRadius:"4px"},children:h})]})]})}},j={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_content"),status:"error",error:r("story_rte_error_required"),placeholder:r("story_rte_placeholder_default")})}},C={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_content"),disabled:!0,defaultValue:`<p>${r("story_rte_disabled_content")}</p>`})}},T={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_note"),variant:"ghost",placeholder:r("story_rte_placeholder_default")})}},S={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_article"),fullWidth:!0,placeholder:r("story_rte_placeholder_default")})}},R={render:function(a){const{t:r}=f(x);return e.jsx(p,{...a,label:r("story_rte_label_comment"),toolbar:["bold","italic","underline","separator","link"],placeholder:r("story_rte_placeholder_comment")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_content")} placeholder={t("story_rte_placeholder_default")} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_article")} defaultValue={\`<h2>\${t("story_rte_default_heading")}</h2><p>\${t("story_rte_default_body")}</p>\`} />;
  }
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(\`<p>\${t("story_rte_controlled_initial")}</p>\`);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <RichTextEditor {...args} label={t("story_rte_label_content")} value={value} onChange={setValue} />
        <div>
          <strong>{t("story_rte_output_label")}</strong>
          <pre style={{
          fontSize: "0.75rem",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          padding: "8px",
          background: "#f5f5f5",
          borderRadius: "4px"
        }}>
            {value}
          </pre>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_content")} status="error" error={t("story_rte_error_required")} placeholder={t("story_rte_placeholder_default")} />;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_content")} disabled defaultValue={\`<p>\${t("story_rte_disabled_content")}</p>\`} />;
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_note")} variant="ghost" placeholder={t("story_rte_placeholder_default")} />;
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_article")} fullWidth placeholder={t("story_rte_placeholder_default")} />;
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story_rte_label_comment")} toolbar={["bold", "italic", "underline", "separator", "link"]} placeholder={t("story_rte_placeholder_comment")} />;
  }
}`,...R.parameters?.docs?.source}}};const ye=["Basic","WithDefaultValue","Controlled","ErrorStatus","Disabled","Ghost","FullWidth","MinimalToolbar"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:v,Controlled:k,Disabled:C,ErrorStatus:j,FullWidth:S,Ghost:T,MinimalToolbar:R,WithDefaultValue:g,__namedExportsOrder:ye,default:xe},Symbol.toStringTag,{value:"Module"}));export{v as B,k as C,C as D,j as E,S as F,T as G,R as M,Ce as R};
