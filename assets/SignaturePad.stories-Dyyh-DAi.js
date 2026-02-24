import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-uSE7GweJ.js";import{c as L}from"./index-2r2kfcGX.js";import{B as P}from"./Button-DuXBwRfT.js";const b=({width:h=400,height:w=200,penColor:T="#000000",penWidth:_=2,onChange:l,clearLabel:D="Clear",disabled:a=!1,className:j,style:q})=>{const t=p.useRef(null),[m,y]=p.useState(!1),[C,S]=p.useState(!0),v=r=>{if(!t.current)return null;const s=t.current.getBoundingClientRect();let e,g;if("touches"in r){if(r.touches.length===0)return null;e=r.touches[0].clientX,g=r.touches[0].clientY}else e=r.clientX,g=r.clientY;return{x:e-s.left,y:g-s.top}},x=r=>{if(a)return;y(!0);const s=v(r);if(!s||!t.current)return;const e=t.current.getContext("2d");e&&(e.beginPath(),e.moveTo(s.x,s.y),e.strokeStyle=T,e.lineWidth=_,e.lineCap="round",e.lineJoin="round")},f=r=>{if(!m||a)return;const s=v(r);if(!s||!t.current)return;const e=t.current.getContext("2d");e&&(e.lineTo(s.x,s.y),e.stroke(),S(!1))},d=()=>{m&&(y(!1),l&&t.current&&l(C?null:t.current.toDataURL()))},E=()=>{if(a||!t.current)return;const r=t.current.getContext("2d");r&&(r.clearRect(0,0,t.current.width,t.current.height),S(!0),l&&l(null))};return p.useEffect(()=>(window.addEventListener("mouseup",d),()=>window.removeEventListener("mouseup",d)),[m]),n.jsxs("div",{className:L("wim-signature-pad",a&&"wim-signature-pad--disabled",j),style:q,children:[n.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:h,height:w},children:n.jsx("canvas",{ref:t,width:h,height:w,className:"wim-signature-pad__canvas",onMouseDown:x,onMouseMove:f,onMouseUp:d,onMouseLeave:f,onTouchStart:x,onTouchMove:f,onTouchEnd:d})}),n.jsx("div",{className:"wim-signature-pad__footer",children:n.jsx(P,{priority:"secondary",size:"small",onClick:E,disabled:a||C,children:D})})]})};b.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the clear button",defaultValue:{value:'"Clear"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const R={title:"Components/Advanced Inputs/SignaturePad",component:b,parameters:{layout:"centered"}},o={args:{width:400,height:200}},i={args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},u={args:{disabled:!0,width:400,height:200}},c={args:{width:600,height:300}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 200
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    width: 400,
    height: 200
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    width: 600,
    height: 300
  }
}`,...c.parameters?.docs?.source}}};const M=["Default","CustomColors","Disabled","Large"],I=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:i,Default:o,Disabled:u,Large:c,__namedExportsOrder:M,default:R},Symbol.toStringTag,{value:"Module"}));export{i as C,o as D,c as L,I as S,u as a};
