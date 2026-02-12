import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-DQO96vlz.js";import{c as A}from"./index-CgtPBStF.js";const _=({value:l,defaultValue:S=0,min:a=0,max:n=100,step:m=1,disabled:s=!1,onChange:V,onAfterChange:D,className:j,name:q,...L})=>{const o=l!==void 0,[b,M]=u.useState(S),c=o?l:b,x=u.useRef(null),w=u.useRef(!1),T=(e,t,r)=>Math.max(t,Math.min(e,r)),N=e=>{const t=Math.round((e-a)/m);return T(a+t*m,a,n)},E=e=>{if(!x.current)return a;const t=x.current.getBoundingClientRect(),r=T((e-t.left)/t.width,0,1),X=a+r*(n-a);return N(X)},k=e=>{if(s)return;w.current=!0;const t="touches"in e?e.touches[0].clientX:e.clientX,r=E(t);o||M(r),V?.(r),e.preventDefault()},p=u.useCallback(e=>{if(!w.current||s)return;const t="touches"in e?e.touches[0].clientX:e.clientX,r=E(t);o||M(r),V?.(r)},[s,o,a,n,m,V]),f=u.useCallback(()=>{w.current&&(w.current=!1,D?.(o?l:b))},[o,l,b,D]);u.useEffect(()=>(document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",f),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f)}),[p,f]);const R=e=>{if(s)return;let t=c;if(e.key==="ArrowLeft"||e.key==="ArrowDown")t=Math.max(a,c-m);else if(e.key==="ArrowRight"||e.key==="ArrowUp")t=Math.min(n,c+m);else if(e.key==="Home")t=a;else if(e.key==="End")t=n;else return;o||M(t),V?.(t),e.preventDefault()},C=(c-a)/(n-a)*100;return i.jsxs("div",{className:A("wim-slider",s&&"wim-slider--disabled",j),onMouseDown:k,onTouchStart:k,...L,children:[i.jsxs("div",{className:"wim-slider__track-container",ref:x,children:[i.jsx("div",{className:"wim-slider__track",style:{width:`${C}%`}}),i.jsx("div",{className:"wim-slider__thumb",style:{left:`${C}%`},role:"slider","aria-valuemin":a,"aria-valuemax":n,"aria-valuenow":c,"aria-disabled":s,tabIndex:s?-1:0,onKeyDown:R})]}),i.jsx("input",{type:"hidden",name:q,value:c})]})};_.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"}}};const I={title:"Component/Pickers & Sliders/Slider",component:_,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},v={args:{defaultValue:50}},g={args:{defaultValue:30,disabled:!0}},h={args:{min:-50,max:50,defaultValue:0}},y={args:{min:0,max:100,step:10,defaultValue:20}},d=()=>{const[l,S]=u.useState(25);return i.jsx(_,{value:l,onChange:S})};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
