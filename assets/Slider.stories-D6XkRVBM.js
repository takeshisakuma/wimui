import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as h}from"./iframe-By123agS.js";import{c as X}from"./index-DhHn5T7W.js";import{u as ee}from"./slider-utils-9qVD308I.js";import{F as re}from"./FieldTemplate-Cc8ARqCK.js";import{u as w}from"./useTranslation-svuQDxOH.js";const d=({value:l,defaultValue:a=0,min:r=0,max:c=100,step:A=1,disabled:i=!1,onChange:T,onAfterChange:D,className:z,name:F,label:R,error:O,required:G,layout:K="vertical",id:U,"aria-label":H,"aria-labelledby":B,...J})=>{const V=l!==void 0,[Q,j]=t.useState(a),o=V?l:Q,x=t.useRef(null),E=t.useRef(null),L=t.useRef(null),C=t.useRef(null),f=t.useRef(!1),M=t.useRef(o),W=t.useId(),k=U||W,$=`wim-slider-label-${k}`,Y=`wim-slider-error-${k}`,{calculateValue:q}=ee(r,c,A),N=t.useCallback(e=>(e-r)/(c-r)*100,[r,c]),p=t.useCallback(e=>{const n=N(e);L.current&&(L.current.style.width=`${n}%`),E.current&&(E.current.style.left=`${n}%`,E.current.setAttribute("aria-valuenow",String(e))),C.current&&(C.current.value=String(e))},[N]);t.useEffect(()=>{f.current||p(o)},[o,p]);const I=e=>{if(i)return;f.current=!0;const n="touches"in e?e.touches[0].clientX:e.clientX,u=q(n,x.current);M.current=u,p(u),T?.(u),e.preventDefault()},v=t.useCallback(e=>{if(!f.current||i)return;const n="touches"in e?e.touches[0].clientX:e.clientX,u=q(n,x.current);M.current=u,p(u),T?.(u)},[i,q,T,p]),y=t.useCallback(()=>{if(f.current){f.current=!1;const e=M.current;V||j(e),D?.(e)}},[V,D]);t.useEffect(()=>(document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",y),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y)}),[v,y]);const Z=e=>{if(i)return;let n=o;if(e.key==="ArrowLeft"||e.key==="ArrowDown")n=Math.max(r,o-A);else if(e.key==="ArrowRight"||e.key==="ArrowUp")n=Math.min(c,o+A);else if(e.key==="Home")n=r;else if(e.key==="End")n=c;else return;V||j(n),T?.(n),e.preventDefault()},P=N(o);return s.jsx(re,{label:R,error:O,required:G,layout:K,labelId:$,errorId:Y,className:X("wim-slider-container",z),children:s.jsxs("div",{role:"presentation",className:X("wim-slider",i&&"wim-slider--disabled"),onMouseDown:I,onTouchStart:I,...J,children:[s.jsxs("div",{className:"wim-slider__track-container",ref:x,children:[s.jsx("div",{ref:L,className:"wim-slider__track",style:{width:`${P}%`}}),s.jsx("div",{ref:E,className:"wim-slider__thumb",style:{left:`${P}%`},role:"slider","aria-valuemin":r,"aria-valuemax":c,"aria-valuenow":o,"aria-disabled":i,"aria-labelledby":R?$:B,"aria-label":R?void 0:H,tabIndex:i?-1:0,onKeyDown:Z})]}),s.jsx("input",{ref:C,type:"hidden",name:F,value:o})]})})};d.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/Pickers & Sliders/Slider",component:d,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},g={render:function(a){const{t:r}=w(h);return s.jsx(d,{...a,label:r("story.slider_default")})},args:{defaultValue:50}},b={render:function(a){const{t:r}=w(h);return s.jsx(d,{...a,label:r("story.slider_disabled")})},args:{defaultValue:30,disabled:!0}},S={render:function(a){const{t:r}=w(h);return s.jsx(d,{...a,label:r("story.slider_minmax")})},args:{min:-50,max:50,defaultValue:0}},_={render:function(a){const{t:r}=w(h);return s.jsx(d,{...a,label:r("story.slider_step")})},args:{min:0,max:100,step:10,defaultValue:20}},m=()=>{const{t:l}=w(h),[a,r]=t.useState(25);return s.jsx(d,{label:`${l("story.slider_default")} (${l("story.dialog_curr_state")}: ${a})`,value:a,onChange:r})};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_default")} />;
  },
  args: {
    defaultValue: 50
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_disabled")} />;
  },
  args: {
    defaultValue: 30,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_minmax")} />;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_step")} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return <Slider label={\`\${t("story.slider_default")} (\${t("story.dialog_curr_state")}: \${val})\`} value={val} onChange={setVal} />;
}`,...m.parameters?.docs?.source}}};const ne=["Default","Disabled","MinMax","Step","Controlled"],de=Object.freeze(Object.defineProperty({__proto__:null,Controlled:m,Default:g,Disabled:b,MinMax:S,Step:_,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{m as C,g as D,S as M,de as S,b as a,_ as b};
