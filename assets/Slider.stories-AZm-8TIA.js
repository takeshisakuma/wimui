import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-e7GXbi08.js";import{c as k}from"./index-CyTIjRcp.js";import{u as Q}from"./slider-utils-Cd4U4ai1.js";import{F as W,L as h}from"./FieldTemplate-4g41hbIC.js";import{u as m}from"./useTranslation-DW6bJnO1.js";import{A as L}from"./i18nConstants-BpHxieg5.js";const u=({value:t,defaultValue:a=0,min:e=0,max:p=100,step:E=1,disabled:o=!1,onChange:x,onAfterChange:q,className:$,name:I,label:T,error:P,required:X,layout:z="vertical",id:O,"aria-label":F,"aria-labelledby":G,...K})=>{const{t:U}=m("common"),i=t!==void 0,[V,A]=l.useState(a),d=i?t:V,j=l.useRef(null),w=l.useRef(!1),H=l.useId(),C=O||H,D=`wim-slider-label-${C}`,B=`wim-slider-error-${C}`,{calculateValue:M}=Q(e,p,E),N=r=>{if(o)return;w.current=!0;const s="touches"in r?r.touches[0].clientX:r.clientX,b=M(s,j.current);i||A(b),x?.(b),r.preventDefault()},f=l.useCallback(r=>{if(!w.current||o)return;const s="touches"in r?r.touches[0].clientX:r.clientX,b=M(s,j.current);i||A(b),x?.(b)},[o,i,x,M]),v=l.useCallback(()=>{w.current&&(w.current=!1,q?.(i?t:V))},[i,t,V,q]);l.useEffect(()=>(document.addEventListener("mousemove",f),document.addEventListener("mouseup",v),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",v),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",v)}),[f,v]);const J=r=>{if(o)return;let s=d;if(r.key==="ArrowLeft"||r.key==="ArrowDown")s=Math.max(e,d-E);else if(r.key==="ArrowRight"||r.key==="ArrowUp")s=Math.min(p,d+E);else if(r.key==="Home")s=e;else if(r.key==="End")s=p;else return;i||A(s),x?.(s),r.preventDefault()},R=(d-e)/(p-e)*100;return n.jsx(W,{label:T?U(T):void 0,error:P,required:X,layout:z,labelId:D,errorId:B,className:k("wim-slider-container",$),children:n.jsxs("div",{className:k("wim-slider",o&&"wim-slider--disabled"),onMouseDown:N,onTouchStart:N,...K,children:[n.jsxs("div",{className:"wim-slider__track-container",ref:j,children:[n.jsx("div",{className:"wim-slider__track",style:{width:`${R}%`}}),n.jsx("div",{className:"wim-slider__thumb",style:{left:`${R}%`},role:"slider","aria-valuemin":e,"aria-valuemax":p,"aria-valuenow":d,"aria-disabled":o,"aria-labelledby":T?D:G,"aria-label":T?void 0:F,tabIndex:o?-1:0,onKeyDown:J})]}),n.jsx("input",{type:"hidden",name:I,value:d})]})})};u.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"Components/Pickers & Sliders/Slider",component:u,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},y={render:function(a){const{t:e}=m(L);return n.jsx(h,{label:e("story_slider_default"),children:n.jsx(u,{...a})})},args:{defaultValue:50}},g={render:function(a){const{t:e}=m(L);return n.jsx(h,{label:e("story_slider_disabled"),children:n.jsx(u,{...a,disabled:!0})})},args:{defaultValue:30}},_={render:function(a){const{t:e}=m(L);return n.jsx(h,{label:e("story_slider_minmax"),children:n.jsx(u,{...a})})},args:{min:-50,max:50,defaultValue:0}},S={render:function(a){const{t:e}=m(L);return n.jsx(h,{label:e("story_slider_step"),children:n.jsx(u,{...a})})},args:{min:0,max:100,step:10,defaultValue:20}},c=()=>{const{t}=m(L),[a,e]=l.useState(25);return n.jsx(h,{label:`${t("story_slider_default")} (${t("story_dialog_curr_state")}: ${a})`,children:n.jsx(u,{value:a,onChange:e})})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_slider_default")}>\r
        <Slider {...args} />\r
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
    return <Label label={t("story_slider_disabled")}>\r
        <Slider {...args} disabled={true} />\r
      </Label>;
  },
  args: {
    defaultValue: 30
  }
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_slider_minmax")}>\r
        <Slider {...args} />\r
      </Label>;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_slider_step")}>\r
        <Slider {...args} />\r
      </Label>;
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20
  }
}`,...S.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return <Label label={\`\${t("story_slider_default")} (\${t("story_dialog_curr_state")}: \${val})\`}>\r
      <Slider value={val} onChange={setVal} />\r
    </Label>;
}`,...c.parameters?.docs?.source}}};const Z=["Default","Disabled","MinMax","Step","Controlled"],oe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:y,Disabled:g,MinMax:_,Step:S,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{c as C,y as D,_ as M,oe as S,g as a,S as b};
