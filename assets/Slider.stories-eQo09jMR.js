import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-DYlShzji.js";import{c as $}from"./index-Cm_IZiCA.js";import{u as Q}from"./slider-utils-CpR3X4Nx.js";import{F as W,L as x}from"./FieldTemplate-Cf1XI41D.js";import{u as m}from"./useTranslation-DygSvNPf.js";const c=({value:r,defaultValue:n=0,min:e=0,max:p=100,step:V=1,disabled:d=!1,onChange:T,onAfterChange:M,className:I,name:N,label:w,error:X,required:A,layout:z="vertical",id:O,"aria-label":P,"aria-labelledby":F,...G})=>{const{t:K}=m("common"),i=r!==void 0,[L,j]=t.useState(n),l=i?r:L,q=t.useRef(null),S=t.useRef(!1),U=t.useId(),E=O||U,R=`wim-slider-label-${E}`,H=`wim-slider-error-${E}`,{calculateValue:D}=Q(e,p,V),k=s=>{if(d)return;S.current=!0;const a="touches"in s?s.touches[0].clientX:s.clientX,y=D(a,q.current);i||j(y),T?.(y),s.preventDefault()},_=t.useCallback(s=>{if(!S.current||d)return;const a="touches"in s?s.touches[0].clientX:s.clientX,y=D(a,q.current);i||j(y),T?.(y)},[d,i,T,D]),f=t.useCallback(()=>{S.current&&(S.current=!1,M?.(i?r:L))},[i,r,L,M]);t.useEffect(()=>(document.addEventListener("mousemove",_),document.addEventListener("mouseup",f),document.addEventListener("touchmove",_,{passive:!1}),document.addEventListener("touchend",f),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",f)}),[_,f]);const B=s=>{if(d)return;let a=l;if(s.key==="ArrowLeft"||s.key==="ArrowDown")a=Math.max(e,l-V);else if(s.key==="ArrowRight"||s.key==="ArrowUp")a=Math.min(p,l+V);else if(s.key==="Home")a=e;else if(s.key==="End")a=p;else return;i||j(a),T?.(a),s.preventDefault()},C=(l-e)/(p-e)*100,J=G;return o.jsx(W,{label:w?K(w):void 0,error:X,required:A,layout:z,labelId:R,errorId:H,className:$("wim-slider-container",I),children:o.jsxs("div",{className:$("wim-slider",d&&"wim-slider--disabled"),onMouseDown:k,onTouchStart:k,...J,children:[o.jsxs("div",{className:"wim-slider__track-container",ref:q,children:[o.jsx("div",{className:"wim-slider__track",style:{width:`${C}%`}}),o.jsx("div",{className:"wim-slider__thumb",style:{left:`${C}%`},role:"slider","aria-valuemin":e,"aria-valuemax":p,"aria-valuenow":l,"aria-disabled":d,"aria-labelledby":w?R:F,"aria-label":w?void 0:P,tabIndex:d?-1:0,onKeyDown:B})]}),o.jsx("input",{type:"hidden",name:N,value:l})]})})};c.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"カスタムID"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"Components/Pickers & Sliders/Slider",component:c,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},v={render:function(n){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(x,{label:e("story_slider_default"),children:o.jsx(c,{...n})})},args:{defaultValue:50}},g={render:function(n){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(x,{label:e("story_slider_disabled"),children:o.jsx(c,{...n,disabled:!0})})},args:{defaultValue:30}},b={render:function(n){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(x,{label:e("story_slider_minmax"),children:o.jsx(c,{...n})})},args:{min:-50,max:50,defaultValue:0}},h={render:function(n){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(x,{label:e("story_slider_step"),children:o.jsx(c,{...n})})},args:{min:0,max:100,step:10,defaultValue:20}},u=()=>{const{t:r}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[n,e]=t.useState(25);return o.jsx(x,{label:`${r("story_slider_default")} (${r("story_dialog_curr_state")}: ${n})`,children:o.jsx(c,{value:n,onChange:e})})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_slider_default")}>\r
        <Slider {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 50
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_slider_disabled")}>\r
        <Slider {...args} disabled={true} />\r
      </Label>;
  },
  args: {
    defaultValue: 30
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_slider_minmax")}>\r
        <Slider {...args} />\r
      </Label>;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
  } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  const [val, setVal] = useState(25);
  return <Label label={\`\${t("story_slider_default")} (\${t("story_dialog_curr_state")}: \${val})\`}>\r
      <Slider value={val} onChange={setVal} />\r
    </Label>;
}`,...u.parameters?.docs?.source}}};const Z=["Default","Disabled","MinMax","Step","Controlled"],te=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:v,Disabled:g,MinMax:b,Step:h,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as C,g as D,b as M,te as S,h as a};
