import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Dgvn1YDu.js";import{c as P}from"./index-CZyd2_qg.js";import{B as W}from"./Button-BLjuKSaO.js";const b=({width:m=400,height:w=200,penColor:T="#000000",penWidth:_=2,onChange:l,clearLabel:D="Clear",disabled:a=!1,className:j,style:q})=>{const e=p.useRef(null),[h,y]=p.useState(!1),[C,S]=p.useState(!0),v=s=>{if(!e.current)return null;const r=e.current.getBoundingClientRect();let t,g;if("touches"in s){if(s.touches.length===0)return null;t=s.touches[0].clientX,g=s.touches[0].clientY}else t=s.clientX,g=s.clientY;const R=r.width?e.current.width/r.width:1,L=r.height?e.current.height/r.height:1;return{x:(t-r.left)*R,y:(g-r.top)*L}},x=s=>{if(a)return;y(!0);const r=v(s);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.beginPath(),t.moveTo(r.x,r.y),t.strokeStyle=T,t.lineWidth=_,t.lineCap="round",t.lineJoin="round")},f=s=>{if(!h||a)return;const r=v(s);if(!r||!e.current)return;const t=e.current.getContext("2d");t&&(t.lineTo(r.x,r.y),t.stroke(),S(!1))},d=()=>{h&&(y(!1),l&&e.current&&l(C?null:e.current.toDataURL()))},E=()=>{if(a||!e.current)return;const s=e.current.getContext("2d");s&&(s.clearRect(0,0,e.current.width,e.current.height),S(!0),l&&l(null))};return p.useEffect(()=>(window.addEventListener("mouseup",d),()=>window.removeEventListener("mouseup",d)),[h]),n.jsxs("div",{className:P("wim-signature-pad",a&&"wim-signature-pad--disabled",j),style:q,children:[n.jsx("div",{className:"wim-signature-pad__canvas-container",style:{width:m,maxWidth:"100%",aspectRatio:`${m} / ${w}`,height:"auto"},children:n.jsx("canvas",{ref:e,width:m,height:w,className:"wim-signature-pad__canvas",style:{width:"100%",height:"100%",display:"block"},onMouseDown:x,onMouseMove:f,onMouseUp:d,onMouseLeave:f,onTouchStart:x,onTouchMove:f,onTouchEnd:d})}),n.jsx("div",{className:"wim-signature-pad__footer",children:n.jsx(W,{priority:"secondary",size:"small",onClick:E,disabled:a||C,children:D})})]})};b.__docgenInfo={description:"マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。",methods:[],displayName:"SignaturePad",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the canvas",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the canvas",defaultValue:{value:"200",computed:!1}},penColor:{required:!1,tsType:{name:"string"},description:"Color of the pen",defaultValue:{value:'"#000000"',computed:!1}},penWidth:{required:!1,tsType:{name:"number"},description:"Width of the pen stroke",defaultValue:{value:"2",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"dataUrl"}],return:{name:"void"}}},description:"Callback when signature changes or is cleared"},clearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the clear button",defaultValue:{value:'"Clear"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const M={title:"Components/Advanced Inputs/SignaturePad",component:b,parameters:{layout:"centered"}},o={args:{width:400,height:200}},i={args:{penColor:"#ff4d4f",penWidth:4,width:400,height:200}},c={args:{disabled:!0,width:400,height:200}},u={args:{width:600,height:300}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    width: 400,
    height: 200
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    width: 600,
    height: 300
  }
}`,...u.parameters?.docs?.source}}};const N=["Default","CustomColors","Disabled","Large"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:i,Default:o,Disabled:c,Large:u,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{i as C,o as D,u as L,X as S,c as a};
