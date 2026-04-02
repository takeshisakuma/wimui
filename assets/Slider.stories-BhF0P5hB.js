import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as _}from"./iframe-DKmwcFSw.js";import{c as z}from"./index-DF_nXgT0.js";import{u as re}from"./slider-utils-B_YRSJDj.js";import{F as ne,L}from"./FieldTemplate-0Pi98aGO.js";import{u as w}from"./useTranslation-cHJIwR7k.js";const d=({value:l,defaultValue:s=0,min:r=0,max:c=100,step:E=1,disabled:i=!1,onChange:x,onAfterChange:D,className:F,name:O,label:A,error:G,required:K,layout:U="vertical",id:H,"aria-label":B,"aria-labelledby":J,...Q})=>{const T=l!==void 0,[W,k]=t.useState(s),o=T?l:W,R=t.useRef(null),V=t.useRef(null),j=t.useRef(null),C=t.useRef(null),f=t.useRef(!1),M=t.useRef(o),Y=t.useId(),$=H||Y,I=`wim-slider-label-${$}`,Z=`wim-slider-error-${$}`,{calculateValue:q}=re(r,c,E),N=t.useCallback(e=>(e-r)/(c-r)*100,[r,c]),p=t.useCallback(e=>{const a=N(e);j.current&&(j.current.style.width=`${a}%`),V.current&&(V.current.style.left=`${a}%`,V.current.setAttribute("aria-valuenow",String(e))),C.current&&(C.current.value=String(e))},[N]);t.useEffect(()=>{f.current||p(o)},[o,p]);const P=e=>{if(i)return;f.current=!0;const a="touches"in e?e.touches[0].clientX:e.clientX,u=q(a,R.current);M.current=u,p(u),x?.(u),e.preventDefault()},b=t.useCallback(e=>{if(!f.current||i)return;const a="touches"in e?e.touches[0].clientX:e.clientX,u=q(a,R.current);M.current=u,p(u),x?.(u)},[i,q,x,p]),v=t.useCallback(()=>{if(f.current){f.current=!1;const e=M.current;T||k(e),D?.(e)}},[T,D]);t.useEffect(()=>(document.addEventListener("mousemove",b),document.addEventListener("mouseup",v),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",v),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",v)}),[b,v]);const ee=e=>{if(i)return;let a=o;if(e.key==="ArrowLeft"||e.key==="ArrowDown")a=Math.max(r,o-E);else if(e.key==="ArrowRight"||e.key==="ArrowUp")a=Math.min(c,o+E);else if(e.key==="Home")a=r;else if(e.key==="End")a=c;else return;T||k(a),x?.(a),e.preventDefault()},X=N(o);return n.jsx(ne,{label:A,error:G,required:K,layout:U,labelId:I,errorId:Z,className:z("wim-slider-container",F),children:n.jsxs("div",{role:"presentation",className:z("wim-slider",i&&"wim-slider--disabled"),onMouseDown:P,onTouchStart:P,...Q,children:[n.jsxs("div",{className:"wim-slider__track-container",ref:R,children:[n.jsx("div",{ref:j,className:"wim-slider__track",style:{width:`${X}%`}}),n.jsx("div",{ref:V,className:"wim-slider__thumb",style:{left:`${X}%`},role:"slider","aria-valuemin":r,"aria-valuemax":c,"aria-valuenow":o,"aria-disabled":i,"aria-labelledby":A?I:J,"aria-label":A?void 0:B,tabIndex:i?-1:0,onKeyDown:ee})]}),n.jsx("input",{ref:C,type:"hidden",name:O,value:o})]})})};d.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/Pickers & Sliders/Slider",component:d,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},y={render:function(s){const{t:r}=w(_);return n.jsx(L,{label:r("story.slider_default"),children:n.jsx(d,{...s})})},args:{defaultValue:50}},g={render:function(s){const{t:r}=w(_);return n.jsx(L,{label:r("story.slider_disabled"),children:n.jsx(d,{...s})})},args:{defaultValue:30,disabled:!0}},S={render:function(s){const{t:r}=w(_);return n.jsx(L,{label:r("story.slider_minmax"),children:n.jsx(d,{...s})})},args:{min:-50,max:50,defaultValue:0}},h={render:function(s){const{t:r}=w(_);return n.jsx(L,{label:r("story.slider_step"),children:n.jsx(d,{...s})})},args:{min:0,max:100,step:10,defaultValue:20}},m=()=>{const{t:l}=w(_),[s,r]=t.useState(25);return n.jsx(L,{label:`${l("story.slider_default")} (${l("story.dialog_curr_state")}: ${s})`,children:n.jsx(d,{value:s,onChange:r})})};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return <Label label={\`\${t("story.slider_default")} (\${t("story.dialog_curr_state")}: \${val})\`}>
      <Slider value={val} onChange={setVal} />
    </Label>;
}`,...m.parameters?.docs?.source}}};const ae=["Default","Disabled","MinMax","Step","Controlled"],ce=Object.freeze(Object.defineProperty({__proto__:null,Controlled:m,Default:y,Disabled:g,MinMax:S,Step:h,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{m as C,y as D,S as M,ce as S,g as a,h as b};
