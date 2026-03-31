import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as L}from"./iframe-BIyQwIaN.js";import{c as z}from"./index-6KFIEf95.js";import{u as ne}from"./slider-utils-ZxCnuAzH.js";import{F as te,L as x}from"./FieldTemplate-D-5Jhqy1.js";import{u as f}from"./useTranslation-C6_B5Ynz.js";const d=({value:l,defaultValue:s=0,min:r=0,max:c=100,step:A=1,disabled:i=!1,onChange:w,onAfterChange:k,className:F,name:O,label:T,error:G,required:K,layout:U="vertical",id:H,"aria-label":B,"aria-labelledby":J,...Q})=>{const{t:W}=f("common"),V=l!==void 0,[Y,N]=t.useState(s),o=V?l:Y,R=t.useRef(null),E=t.useRef(null),j=t.useRef(null),C=t.useRef(null),p=t.useRef(!1),M=t.useRef(o),Z=t.useId(),$=H||Z,I=`wim-slider-label-${$}`,ee=`wim-slider-error-${$}`,{calculateValue:q}=ne(r,c,A),D=t.useCallback(e=>(e-r)/(c-r)*100,[r,c]),b=t.useCallback(e=>{const a=D(e);j.current&&(j.current.style.width=`${a}%`),E.current&&(E.current.style.left=`${a}%`,E.current.setAttribute("aria-valuenow",String(e))),C.current&&(C.current.value=String(e))},[D]);t.useEffect(()=>{p.current||b(o)},[o,b]);const P=e=>{if(i)return;p.current=!0;const a="touches"in e?e.touches[0].clientX:e.clientX,u=q(a,R.current);M.current=u,b(u),w?.(u),e.preventDefault()},v=t.useCallback(e=>{if(!p.current||i)return;const a="touches"in e?e.touches[0].clientX:e.clientX,u=q(a,R.current);M.current=u,b(u),w?.(u)},[i,q,w,b]),y=t.useCallback(()=>{if(p.current){p.current=!1;const e=M.current;V||N(e),k?.(e)}},[V,k]);t.useEffect(()=>(document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",y),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y)}),[v,y]);const re=e=>{if(i)return;let a=o;if(e.key==="ArrowLeft"||e.key==="ArrowDown")a=Math.max(r,o-A);else if(e.key==="ArrowRight"||e.key==="ArrowUp")a=Math.min(c,o+A);else if(e.key==="Home")a=r;else if(e.key==="End")a=c;else return;V||N(a),w?.(a),e.preventDefault()},X=D(o);return n.jsx(te,{label:T?W(T):void 0,error:G,required:K,layout:U,labelId:I,errorId:ee,className:z("wim-slider-container",F),children:n.jsxs("div",{role:"presentation",className:z("wim-slider",i&&"wim-slider--disabled"),onMouseDown:P,onTouchStart:P,...Q,children:[n.jsxs("div",{className:"wim-slider__track-container",ref:R,children:[n.jsx("div",{ref:j,className:"wim-slider__track",style:{width:`${X}%`}}),n.jsx("div",{ref:E,className:"wim-slider__thumb",style:{left:`${X}%`},role:"slider","aria-valuemin":r,"aria-valuemax":c,"aria-valuenow":o,"aria-disabled":i,"aria-labelledby":T?I:J,"aria-label":T?void 0:B,tabIndex:i?-1:0,onKeyDown:re})]}),n.jsx("input",{ref:C,type:"hidden",name:O,value:o})]})})};d.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Components/Pickers & Sliders/Slider",component:d,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},g={render:function(s){const{t:r}=f(L);return n.jsx(x,{label:r("story.slider_default"),children:n.jsx(d,{...s})})},args:{defaultValue:50}},S={render:function(s){const{t:r}=f(L);return n.jsx(x,{label:r("story.slider_disabled"),children:n.jsx(d,{...s})})},args:{defaultValue:30,disabled:!0}},h={render:function(s){const{t:r}=f(L);return n.jsx(x,{label:r("story.slider_minmax"),children:n.jsx(d,{...s})})},args:{min:-50,max:50,defaultValue:0}},_={render:function(s){const{t:r}=f(L);return n.jsx(x,{label:r("story.slider_step"),children:n.jsx(d,{...s})})},args:{min:0,max:100,step:10,defaultValue:20}},m=()=>{const{t:l}=f(L),[s,r]=t.useState(25);return n.jsx(x,{label:`${l("story.slider_default")} (${l("story.dialog_curr_state")}: ${s})`,children:n.jsx(d,{value:s,onChange:r})})};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.slider_default")}>
        <Slider {...args} />
      </Label>;
  },
  args: {
    defaultValue: 50
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.slider_disabled")}>
        <Slider {...args} />
      </Label>;
  },
  args: {
    defaultValue: 30,
    disabled: true
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.slider_minmax")}>
        <Slider {...args} />
      </Label>;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.slider_step")}>
        <Slider {...args} />
      </Label>;
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
  return <Label label={\`\${t("story.slider_default")} (\${t("story.dialog_curr_state")}: \${val})\`}>
      <Slider value={val} onChange={setVal} />
    </Label>;
}`,...m.parameters?.docs?.source}}};const se=["Default","Disabled","MinMax","Step","Controlled"],me=Object.freeze(Object.defineProperty({__proto__:null,Controlled:m,Default:g,Disabled:S,MinMax:h,Step:_,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{m as C,g as D,h as M,me as S,S as a,_ as b};
