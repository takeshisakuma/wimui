import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-D-2TzvPc.js";import{c as I}from"./index-YuTxaPzC.js";import{B}from"./Button-rBumGM_U.js";import{F as O,L as _}from"./FieldTemplate-Cwt9YIa5.js";import{u as b}from"./useTranslation-DD4zKDMJ.js";const c=({width:i=400,height:s=200,penColor:o="#000000",penWidth:E=2,onChange:d,clearLabel:N,disabled:u=!1,className:W,style:k,label:y,error:T,required:M,layout:V="vertical"})=>{const{t:C}=b(["components"]),e=l.useRef(null),[w,L]=l.useState(!1),[v,j]=l.useState(!0),R=`wim-signature-pad-${l.useId()}`,q=y?`${R}-label`:void 0,$=T?`${R}-error`:void 0,z=N??C("signature_clear"),P=a=>{if(!e.current)return null;const t=e.current.getBoundingClientRect();let r,S;if("touches"in a){if(a.touches.length===0)return null;r=a.touches[0].clientX,S=a.touches[0].clientY}else r=a.clientX,S=a.clientY;const X=t.width?e.current.width/t.width:1,Y=t.height?e.current.height/t.height:1;return{x:(r-t.left)*X,y:(S-t.top)*Y}},D=a=>{if(u)return;L(!0);const t=P(a);if(!t||!e.current)return;const r=e.current.getContext("2d");r&&(r.beginPath(),r.moveTo(t.x,t.y),r.strokeStyle=o,r.lineWidth=E,r.lineCap="round",r.lineJoin="round")},x=a=>{if(!w||u)return;const t=P(a);if(!t||!e.current)return;const r=e.current.getContext("2d");r&&(r.lineTo(t.x,t.y),r.stroke(),j(!1))},p=l.useCallback(()=>{w&&(L(!1),d&&e.current&&d(v?null:e.current.toDataURL()))},[w,d,v]),U=()=>{if(u||!e.current)return;const a=e.current.getContext("2d");a&&(a.clearRect(0,0,e.current.width,e.current.height),j(!0),d&&d(null))};return l.useEffect(()=>(window.addEventListener("mouseup",p),()=>window.removeEventListener("mouseup",p)),[w,p]),n.jsx(O,{label:y,error:T,required:M,layout:V,labelId:q,errorId:$,className:I("wim-signature-pad-container",W),children:n.jsxs("div",{className:I("wim-signature-pad",u&&"wim-signature-pad--disabled"),style:k,children:[n.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:i,maxWidth:"100%",aspectRatio:`${i} / ${s}`,height:"auto"},children:n.jsx("canvas",{ref:e,width:i,height:s,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:D,onMouseMove:x,onMouseUp:p,onMouseLeave:x,onTouchStart:D,onTouchMove:x,onTouchEnd:p,"aria-labelledby":y?q:void 0,role:"img","aria-label":y?void 0:C("signature_canvas_label")})}),n.jsx("div",{className:"wim-signature-pad__footer",children:n.jsx(B,{priority:"secondary",size:"small",onClick:U,disabled:u||v,children:z})})]})})};c.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the clear button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const F={title:"Components/Advanced Inputs/SignaturePad",component:c,parameters:{layout:"centered"}},m={render:function(s){const{t:o}=b(["docs"]);return n.jsx(_,{label:o("story_signaturepad_default"),children:n.jsx(c,{...s})})},args:{width:400,height:200}},g={render:function(s){const{t:o}=b(["docs"]);return n.jsx(_,{label:o("story_signaturepad_colors"),children:n.jsx(c,{...s})})},args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},f={render:function(s){const{t:o}=b(["docs"]);return n.jsx(_,{label:o("story_signaturepad_disabled"),children:n.jsx(c,{...s,disabled:!0})})},args:{width:400,height:200}},h={render:function(s){const{t:o}=b(["docs"]);return n.jsx(_,{label:o("story_signaturepad_large"),children:n.jsx(c,{...s})})},args:{width:600,height:300}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_signaturepad_default")}>\r
        <SignaturePad {...args} />\r
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_signaturepad_colors")}>\r
        <SignaturePad {...args} />\r
      </Label>;
  },
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_signaturepad_disabled")}>\r
        <SignaturePad {...args} disabled={true} />\r
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_signaturepad_large")}>\r
        <SignaturePad {...args} />\r
      </Label>;
  },
  args: {
    width: 600,
    height: 300
  }
}`,...h.parameters?.docs?.source}}};const A=["Default","CustomColors","Disabled","Large"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:g,Default:m,Disabled:f,Large:h,__namedExportsOrder:A,default:F},Symbol.toStringTag,{value:"Module"}));export{g as C,m as D,h as L,re as S,f as a};
