import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as S}from"./iframe-Pu0u3y-C.js";import{c as N}from"./index-d02HVfUr.js";import{B}from"./Button-Dvtex6wN.js";import{F as O,L as w}from"./FieldTemplate-D-oxfMa-.js";import{u as b}from"./useTranslation-BwuRHsYM.js";const u=({width:i=400,height:s=200,penColor:o="#000000",penWidth:M=2,onChange:c,clearLabel:D,disabled:d=!1,className:I,style:W,label:y,error:C,required:k,layout:V="vertical"})=>{const{t:T}=b(["components"]),e=l.useRef(null),[_,E]=l.useState(!1),[v,j]=l.useState(!0),A=`wim-signature-pad-${l.useId()}`,P=y?`${A}-label`:void 0,$=C?`${A}-error`:void 0,z=D??T("signature_clear"),R=a=>{if(!e.current)return null;const r=e.current.getBoundingClientRect();let t,L;if("touches"in a){if(a.touches.length===0)return null;t=a.touches[0].clientX,L=a.touches[0].clientY}else t=a.clientX,L=a.clientY;const X=r.width?e.current.width/r.width:1,Y=r.height?e.current.height/r.height:1;return{x:(t-r.left)*X,y:(L-r.top)*Y}},q=a=>{if(d)return;E(!0);const r=R(a);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.beginPath(),t.moveTo(r.x,r.y),t.strokeStyle=o,t.lineWidth=M,t.lineCap="round",t.lineJoin="round")},x=a=>{if(!_||d)return;const r=R(a);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.lineTo(r.x,r.y),t.stroke(),j(!1))},p=l.useCallback(()=>{_&&(E(!1),c&&e.current&&c(v?null:e.current.toDataURL()))},[_,c,v]),U=()=>{if(d||!e.current)return;const a=e.current.getContext("2d");a&&(a.clearRect(0,0,e.current.width,e.current.height),j(!0),c&&c(null))};return l.useEffect(()=>(window.addEventListener("mouseup",p),()=>window.removeEventListener("mouseup",p)),[_,p]),n.jsx(O,{label:y,error:C,required:k,layout:V,labelId:P,errorId:$,className:N("wim-signature-pad-container",I),children:n.jsxs("div",{className:N("wim-signature-pad",d&&"wim-signature-pad--disabled"),style:W,children:[n.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:i,maxWidth:"100%",aspectRatio:`${i} / ${s}`,height:"auto"},children:n.jsx("canvas",{ref:e,width:i,height:s,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:q,onMouseMove:x,onMouseUp:p,onMouseLeave:x,onTouchStart:q,onTouchMove:x,onTouchEnd:p,"aria-labelledby":y?P:void 0,role:"img","aria-label":y?void 0:T("signature_canvas_label")})}),n.jsx("div",{className:"wim-signature-pad__footer",children:n.jsx(B,{priority:"secondary",size:"small",onClick:U,disabled:d||v,children:z})})]})})};u.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the clear button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const F={title:"Components/Advanced Inputs/SignaturePad",component:u,parameters:{layout:"centered"}},m={render:function(s){const{t:o}=b(S);return n.jsx(w,{label:o("story_signaturepad_default"),children:n.jsx(u,{...s})})},args:{width:400,height:200}},g={render:function(s){const{t:o}=b(S);return n.jsx(w,{label:o("story_signaturepad_colors"),children:n.jsx(u,{...s})})},args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},f={render:function(s){const{t:o}=b(S);return n.jsx(w,{label:o("story_signaturepad_disabled"),children:n.jsx(u,{...s,disabled:!0})})},args:{width:400,height:200}},h={render:function(s){const{t:o}=b(S);return n.jsx(w,{label:o("story_signaturepad_large"),children:n.jsx(u,{...s})})},args:{width:600,height:300}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_signaturepad_default")}>
        <SignaturePad {...args} />
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
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_signaturepad_colors")}>
        <SignaturePad {...args} />
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
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_signaturepad_disabled")}>
        <SignaturePad {...args} disabled={true} />
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
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 600,
    height: 300
  }
}`,...h.parameters?.docs?.source}}};const H=["Default","CustomColors","Disabled","Large"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:g,Default:m,Disabled:f,Large:h,__namedExportsOrder:H,default:F},Symbol.toStringTag,{value:"Module"}));export{g as C,m as D,h as L,re as S,f as a};
