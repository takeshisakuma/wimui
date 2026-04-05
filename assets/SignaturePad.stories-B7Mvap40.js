import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as w}from"./iframe-DKMOQHZ-.js";import{c as q}from"./index-CGUrc0iP.js";import{B as F}from"./Button-7reoHkqn.js";import{u as b}from"./useTranslation-CMEx9zdK.js";import{F as H,L as S}from"./FieldTemplate-Be00S5hE.js";const c=({width:i=400,height:s=200,penColor:o="#000000",penWidth:M=2,onChange:u,clearLabel:D,disabled:d=!1,className:I,style:W,label:y,error:C,required:k,layout:V="vertical",canvasAriaLabel:$})=>{const{t:T}=b("common"),z=D??T("button.clear"),U=$??T("a11y.signature_canvas"),e=l.useRef(null),[v,R]=l.useState(!1),[L,A]=l.useState(!0),E=`wim-signature-pad-${l.useId()}`,j=y?`${E}-label`:void 0,X=C?`${E}-error`:void 0,N=a=>{if(!e.current)return null;const r=e.current.getBoundingClientRect();let t,_;if("touches"in a){if(a.touches.length===0)return null;t=a.touches[0].clientX,_=a.touches[0].clientY}else t=a.clientX,_=a.clientY;const B=r.width?e.current.width/r.width:1,O=r.height?e.current.height/r.height:1;return{x:(t-r.left)*B,y:(_-r.top)*O}},P=a=>{if(d)return;R(!0);const r=N(a);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.beginPath(),t.moveTo(r.x,r.y),t.strokeStyle=o,t.lineWidth=M,t.lineCap="round",t.lineJoin="round")},x=a=>{if(!v||d)return;const r=N(a);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.lineTo(r.x,r.y),t.stroke(),A(!1))},p=l.useCallback(()=>{v&&(R(!1),u&&e.current&&u(L?null:e.current.toDataURL()))},[v,u,L]),Y=()=>{if(d||!e.current)return;const a=e.current.getContext("2d");a&&(a.clearRect(0,0,e.current.width,e.current.height),A(!0),u&&u(null))};return l.useEffect(()=>(window.addEventListener("mouseup",p),()=>window.removeEventListener("mouseup",p)),[v,p]),n.jsx(H,{label:y,error:C,required:k,layout:V,labelId:j,errorId:X,className:q("wim-signature-pad-container",I),children:n.jsxs("div",{className:q("wim-signature-pad",d&&"wim-signature-pad--disabled"),style:W,children:[n.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:i,maxWidth:"100%",aspectRatio:`${i} / ${s}`,height:"auto"},children:n.jsx("canvas",{ref:e,width:i,height:s,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:P,onMouseMove:x,onMouseUp:p,onMouseLeave:x,onTouchStart:P,onTouchMove:x,onTouchEnd:p,"aria-labelledby":y?j:void 0,role:"img","aria-label":y?void 0:U})}),n.jsx("div",{className:"wim-signature-pad__footer",children:n.jsx(F,{variant:"outline",size:"sm",onClick:Y,disabled:d||L,children:z})})]})})};c.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom label for the clear button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},canvasAriaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for the canvas"}}};const J={title:"Components/Advanced Inputs/SignaturePad",component:c,parameters:{layout:"centered"}},m={render:function(s){const{t:o}=b(w);return n.jsx(S,{label:o("story.signaturepad_default"),children:n.jsx(c,{...s})})},args:{width:400,height:200}},g={render:function(s){const{t:o}=b(w);return n.jsx(S,{label:o("story.signaturepad_colors"),children:n.jsx(c,{...s})})},args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},f={render:function(s){const{t:o}=b(w);return n.jsx(S,{label:o("story.signaturepad_disabled"),children:n.jsx(c,{...s,disabled:!0})})},args:{width:400,height:200}},h={render:function(s){const{t:o}=b(w);return n.jsx(S,{label:o("story.signaturepad_large"),children:n.jsx(c,{...s})})},args:{width:600,height:300}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_default")}>
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
    return <Label label={t("story.signaturepad_colors")}>
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
    return <Label label={t("story.signaturepad_disabled")}>
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
    return <Label label={t("story.signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 600,
    height: 300
  }
}`,...h.parameters?.docs?.source}}};const G=["Default","CustomColors","Disabled","Large"],ae=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:g,Default:m,Disabled:f,Large:h,__namedExportsOrder:G,default:J},Symbol.toStringTag,{value:"Module"}));export{g as C,m as D,h as L,ae as S,f as a};
