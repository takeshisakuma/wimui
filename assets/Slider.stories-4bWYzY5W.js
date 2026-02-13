import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-Dkx9lEgu.js";import{c as A}from"./index-BzKEtpRa.js";const C=({value:l,defaultValue:S=0,min:t=0,max:n=100,step:m=1,disabled:o=!1,onChange:V,onAfterChange:D,className:q,name:L,...N})=>{const u=l!==void 0,[M,_]=r.useState(S),c=u?l:M,k=r.useRef(null),b=r.useRef(!1),w=r.useCallback((e,a,s)=>Math.max(a,Math.min(e,s)),[]),T=r.useCallback(e=>{const a=Math.round((e-t)/m);return w(t+a*m,t,n)},[w,t,n,m]),x=r.useCallback(e=>{if(!k.current)return t;const a=k.current.getBoundingClientRect(),s=w((e-a.left)/a.width,0,1),X=t+s*(n-t);return T(X)},[T,w,n,t]),E=e=>{if(o)return;b.current=!0;const a="touches"in e?e.touches[0].clientX:e.clientX,s=x(a);u||_(s),V?.(s),e.preventDefault()},p=r.useCallback(e=>{if(!b.current||o)return;const a="touches"in e?e.touches[0].clientX:e.clientX,s=x(a);u||_(s),V?.(s)},[o,u,V,x]),f=r.useCallback(()=>{b.current&&(b.current=!1,D?.(u?l:M))},[u,l,M,D]);r.useEffect(()=>(document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",f),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f)}),[p,f]);const R=e=>{if(o)return;let a=c;if(e.key==="ArrowLeft"||e.key==="ArrowDown")a=Math.max(t,c-m);else if(e.key==="ArrowRight"||e.key==="ArrowUp")a=Math.min(n,c+m);else if(e.key==="Home")a=t;else if(e.key==="End")a=n;else return;u||_(a),V?.(a),e.preventDefault()},j=(c-t)/(n-t)*100;return i.jsxs("div",{className:A("wim-slider",o&&"wim-slider--disabled",q),onMouseDown:E,onTouchStart:E,...N,children:[i.jsxs("div",{className:"wim-slider__track-container",ref:k,children:[i.jsx("div",{className:"wim-slider__track",style:{width:`${j}%`}}),i.jsx("div",{className:"wim-slider__thumb",style:{left:`${j}%`},role:"slider","aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":c,"aria-disabled":o,tabIndex:o?-1:0,onKeyDown:R})]}),i.jsx("input",{type:"hidden",name:L,value:c})]})};C.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"}}};const I={title:"Component/Pickers & Sliders/Slider",component:C,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},v={args:{defaultValue:50}},g={args:{defaultValue:30,disabled:!0}},h={args:{min:-50,max:50,defaultValue:0}},y={args:{min:0,max:100,step:10,defaultValue:20}},d=()=>{const[l,S]=r.useState(25);return i.jsx(C,{value:l,onChange:S})};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20
  }
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState(25);
  return <Slider value={val} onChange={setVal} />;
}`,...d.parameters?.docs?.source}}};const O=["Default","Disabled","MinMax","Step","Controlled"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:d,Default:v,Disabled:g,MinMax:h,Step:y,__namedExportsOrder:O,default:I},Symbol.toStringTag,{value:"Module"}));export{d as C,g as D,h as M,U as S,y as a};
