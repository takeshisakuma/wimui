import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-BisTGuVC.js";import{c as $}from"./index-Ckw0h7AD.js";import{u as Q}from"./slider-utils-CuW3iW1V.js";import{F as W,L as x}from"./FieldTemplate-DQGW8oml.js";import{u as m}from"./useTranslation-BH3LN071.js";const d=({value:t,defaultValue:a=0,min:e=0,max:p=100,step:V=1,disabled:l=!1,onChange:T,onAfterChange:M,className:I,name:N,label:w,error:X,required:A,layout:z="vertical",id:O,"aria-label":P,"aria-labelledby":F,...G})=>{const{t:K}=m("common"),i=t!==void 0,[L,j]=o.useState(a),c=i?t:L,q=o.useRef(null),S=o.useRef(!1),U=o.useId(),E=O||U,R=`wim-slider-label-${E}`,H=`wim-slider-error-${E}`,{calculateValue:D}=Q(e,p,V),k=r=>{if(l)return;S.current=!0;const s="touches"in r?r.touches[0].clientX:r.clientX,b=D(s,q.current);i||j(b),T?.(b),r.preventDefault()},f=o.useCallback(r=>{if(!S.current||l)return;const s="touches"in r?r.touches[0].clientX:r.clientX,b=D(s,q.current);i||j(b),T?.(b)},[l,i,T,D]),v=o.useCallback(()=>{S.current&&(S.current=!1,M?.(i?t:L))},[i,t,L,M]);o.useEffect(()=>(document.addEventListener("mousemove",f),document.addEventListener("mouseup",v),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",v),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",v)}),[f,v]);const B=r=>{if(l)return;let s=c;if(r.key==="ArrowLeft"||r.key==="ArrowDown")s=Math.max(e,c-V);else if(r.key==="ArrowRight"||r.key==="ArrowUp")s=Math.min(p,c+V);else if(r.key==="Home")s=e;else if(r.key==="End")s=p;else return;i||j(s),T?.(s),r.preventDefault()},C=(c-e)/(p-e)*100,J=G;return n.jsx(W,{label:w?K(w):void 0,error:X,required:A,layout:z,labelId:R,errorId:H,className:$("wim-slider-container",I),children:n.jsxs("div",{className:$("wim-slider",l&&"wim-slider--disabled"),onMouseDown:k,onTouchStart:k,...J,children:[n.jsxs("div",{className:"wim-slider__track-container",ref:q,children:[n.jsx("div",{className:"wim-slider__track",style:{width:`${C}%`}}),n.jsx("div",{className:"wim-slider__thumb",style:{left:`${C}%`},role:"slider","aria-valuemin":e,"aria-valuemax":p,"aria-valuenow":c,"aria-disabled":l,"aria-labelledby":w?R:F,"aria-label":w?void 0:P,tabIndex:l?-1:0,onKeyDown:B})]}),n.jsx("input",{type:"hidden",name:N,value:c})]})})};d.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"Components/Pickers & Sliders/Slider",component:d,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},y={render:function(a){const{t:e}=m(["docs","common","components"]);return n.jsx(x,{label:e("story_slider_default"),children:n.jsx(d,{...a})})},args:{defaultValue:50}},g={render:function(a){const{t:e}=m(["docs","common","components"]);return n.jsx(x,{label:e("story_slider_disabled"),children:n.jsx(d,{...a,disabled:!0})})},args:{defaultValue:30}},_={render:function(a){const{t:e}=m(["docs","common","components"]);return n.jsx(x,{label:e("story_slider_minmax"),children:n.jsx(d,{...a})})},args:{min:-50,max:50,defaultValue:0}},h={render:function(a){const{t:e}=m(["docs","common","components"]);return n.jsx(x,{label:e("story_slider_step"),children:n.jsx(d,{...a})})},args:{min:0,max:100,step:10,defaultValue:20}},u=()=>{const{t}=m(["docs","common","components"]),[a,e]=o.useState(25);return n.jsx(x,{label:`${t("story_slider_default")} (${t("story_dialog_curr_state")}: ${a})`,children:n.jsx(d,{value:a,onChange:e})})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_slider_minmax")}>\r
        <Slider {...args} />\r
      </Label>;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "common", "components"]);
  const [val, setVal] = useState(25);
  return <Label label={\`\${t("story_slider_default")} (\${t("story_dialog_curr_state")}: \${val})\`}>\r
      <Slider value={val} onChange={setVal} />\r
    </Label>;
}`,...u.parameters?.docs?.source}}};const Z=["Default","Disabled","MinMax","Step","Controlled"],oe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:y,Disabled:g,MinMax:_,Step:h,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as C,g as D,_ as M,oe as S,h as a};
