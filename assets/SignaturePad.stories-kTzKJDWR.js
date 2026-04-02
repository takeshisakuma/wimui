import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as v}from"./iframe-DxE0GiY5.js";import{c as P}from"./index-D2yuEKMw.js";import{B as Y}from"./Button-QGSE8HgO.js";import{F as B,L as S}from"./FieldTemplate-gWdpItXk.js";import{u as w}from"./useTranslation-CHwI6HGF.js";const u=({width:i=400,height:s=200,penColor:o="#000000",penWidth:q=2,onChange:c,clearLabel:M="Clear",disabled:d=!1,className:D,style:I,label:b,error:_,required:V,layout:W="vertical",canvasAriaLabel:k="Signature canvas"})=>{const e=l.useRef(null),[y,T]=l.useState(!1),[x,R]=l.useState(!0),A=`wim-signature-pad-${l.useId()}`,E=b?`${A}-label`:void 0,$=_?`${A}-error`:void 0,j=n=>{if(!e.current)return null;const r=e.current.getBoundingClientRect();let t,C;if("touches"in n){if(n.touches.length===0)return null;t=n.touches[0].clientX,C=n.touches[0].clientY}else t=n.clientX,C=n.clientY;const U=r.width?e.current.width/r.width:1,X=r.height?e.current.height/r.height:1;return{x:(t-r.left)*U,y:(C-r.top)*X}},N=n=>{if(d)return;T(!0);const r=j(n);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.beginPath(),t.moveTo(r.x,r.y),t.strokeStyle=o,t.lineWidth=q,t.lineCap="round",t.lineJoin="round")},L=n=>{if(!y||d)return;const r=j(n);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.lineTo(r.x,r.y),t.stroke(),R(!1))},p=l.useCallback(()=>{y&&(T(!1),c&&e.current&&c(x?null:e.current.toDataURL()))},[y,c,x]),z=()=>{if(d||!e.current)return;const n=e.current.getContext("2d");n&&(n.clearRect(0,0,e.current.width,e.current.height),R(!0),c&&c(null))};return l.useEffect(()=>(window.addEventListener("mouseup",p),()=>window.removeEventListener("mouseup",p)),[y,p]),a.jsx(B,{label:b,error:_,required:V,layout:W,labelId:E,errorId:$,className:P("wim-signature-pad-container",D),children:a.jsxs("div",{className:P("wim-signature-pad",d&&"wim-signature-pad--disabled"),style:I,children:[a.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:i,maxWidth:"100%",aspectRatio:`${i} / ${s}`,height:"auto"},children:a.jsx("canvas",{ref:e,width:i,height:s,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:N,onMouseMove:L,onMouseUp:p,onMouseLeave:L,onTouchStart:N,onTouchMove:L,onTouchEnd:p,"aria-labelledby":b?E:void 0,role:"img","aria-label":b?void 0:k})}),a.jsx("div",{className:"wim-signature-pad__footer",children:a.jsx(Y,{variant:"outlined",size:"sm",onClick:z,disabled:d||x,children:M})})]})})};u.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom label for the clear button",defaultValue:{value:'"Clear"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},canvasAriaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for the canvas",defaultValue:{value:'"Signature canvas"',computed:!1}}}};const O={title:"Components/Advanced Inputs/SignaturePad",component:u,parameters:{layout:"centered"}},m={render:function(s){const{t:o}=w(v);return a.jsx(S,{label:o("story.signaturepad_default"),children:a.jsx(u,{...s})})},args:{width:400,height:200}},f={render:function(s){const{t:o}=w(v);return a.jsx(S,{label:o("story.signaturepad_colors"),children:a.jsx(u,{...s})})},args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},g={render:function(s){const{t:o}=w(v);return a.jsx(S,{label:o("story.signaturepad_disabled"),children:a.jsx(u,{...s,disabled:!0})})},args:{width:400,height:200}},h={render:function(s){const{t:o}=w(v);return a.jsx(S,{label:o("story.signaturepad_large"),children:a.jsx(u,{...s})})},args:{width:600,height:300}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const F=["Default","CustomColors","Disabled","Large"],te=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:f,Default:m,Disabled:g,Large:h,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{f as C,m as D,h as L,te as S,g as a};
