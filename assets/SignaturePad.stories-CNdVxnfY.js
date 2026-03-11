import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-SL2HqV3D.js";import{c as k}from"./index-30w8ikAG.js";import{B as I}from"./Button-DhroN8PM.js";import{u as g}from"./useTranslation-ZF4WB21B.js";import{L as y}from"./Label-BbZVH_Iw.js";const c=({width:i=400,height:a=200,penColor:o="#000000",penWidth:j=2,onChange:f,clearLabel:R,disabled:l=!1,className:P,style:D})=>{const{t:q}=g(["components"]),e=b.useRef(null),[w,S]=b.useState(!1),[C,v]=b.useState(!0),E=R??q("signature_clear"),T=n=>{if(!e.current)return null;const r=e.current.getBoundingClientRect();let t,x;if("touches"in n){if(n.touches.length===0)return null;t=n.touches[0].clientX,x=n.touches[0].clientY}else t=n.clientX,x=n.clientY;const M=r.width?e.current.width/r.width:1,N=r.height?e.current.height/r.height:1;return{x:(t-r.left)*M,y:(x-r.top)*N}},L=n=>{if(l)return;S(!0);const r=T(n);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.beginPath(),t.moveTo(r.x,r.y),t.strokeStyle=o,t.lineWidth=j,t.lineCap="round",t.lineJoin="round")},_=n=>{if(!w||l)return;const r=T(n);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.lineTo(r.x,r.y),t.stroke(),v(!1))},h=()=>{w&&(S(!1),f&&e.current&&f(C?null:e.current.toDataURL()))},W=()=>{if(l||!e.current)return;const n=e.current.getContext("2d");n&&(n.clearRect(0,0,e.current.width,e.current.height),v(!0),f&&f(null))};return b.useEffect(()=>(window.addEventListener("mouseup",h),()=>window.removeEventListener("mouseup",h)),[w]),s.jsxs("div",{className:k("wim-signature-pad",l&&"wim-signature-pad--disabled",P),style:D,children:[s.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:i,maxWidth:"100%",aspectRatio:`${i} / ${a}`,height:"auto"},children:s.jsx("canvas",{ref:e,width:i,height:a,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:L,onMouseMove:_,onMouseUp:h,onMouseLeave:_,onTouchStart:L,onTouchMove:_,onTouchEnd:h})}),s.jsx("div",{className:"wim-signature-pad__footer",children:s.jsx(I,{priority:"secondary",size:"small",onClick:W,disabled:l||C,children:E})})]})};c.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the clear button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const V={title:"Components/Advanced Inputs/SignaturePad",component:c,parameters:{layout:"centered"}},u={render:function(a){const{t:o}=g(["docs"]);return s.jsx(y,{label:o("story_signaturepad_default"),children:s.jsx(c,{...a})})},args:{width:400,height:200}},d={render:function(a){const{t:o}=g(["docs"]);return s.jsx(y,{label:o("story_signaturepad_colors"),children:s.jsx(c,{...a})})},args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},p={render:function(a){const{t:o}=g(["docs"]);return s.jsx(y,{label:o("story_signaturepad_disabled"),children:s.jsx(c,{...a,disabled:!0})})},args:{width:400,height:200}},m={render:function(a){const{t:o}=g(["docs"]);return s.jsx(y,{label:o("story_signaturepad_large"),children:s.jsx(c,{...a})})},args:{width:600,height:300}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const U=["Default","CustomColors","Disabled","Large"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:d,Default:u,Disabled:p,Large:m,__namedExportsOrder:U,default:V},Symbol.toStringTag,{value:"Module"}));export{d as C,u as D,m as L,A as S,p as a};
