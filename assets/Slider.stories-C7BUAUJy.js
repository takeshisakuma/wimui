import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-SL2HqV3D.js";import{c as C}from"./index-30w8ikAG.js";import{u as U}from"./slider-utils-CkeCQaLC.js";import{u as m}from"./useTranslation-ZF4WB21B.js";import{L as x}from"./Label-BbZVH_Iw.js";const c=({value:t,defaultValue:s=0,min:n=0,max:p=100,step:L=1,disabled:l=!1,onChange:S,onAfterChange:k,className:N,name:$,label:w,id:I,...X})=>{const{t:A}=m("common"),i=t!==void 0,[j,T]=o.useState(s),d=i?t:j,D=o.useRef(null),V=o.useRef(!1),O=o.useId(),E=`wim-slider-label-${I||O}`,{calculateValue:M}=U(n,p,L),R=r=>{if(l)return;V.current=!0;const a="touches"in r?r.touches[0].clientX:r.clientX,g=M(a,D.current);i||T(g),S?.(g),r.preventDefault()},f=o.useCallback(r=>{if(!V.current||l)return;const a="touches"in r?r.touches[0].clientX:r.clientX,g=M(a,D.current);i||T(g),S?.(g)},[l,i,S,M]),b=o.useCallback(()=>{V.current&&(V.current=!1,k?.(i?t:j))},[i,t,j,k]);o.useEffect(()=>(document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",b),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",b)}),[f,b]);const P=r=>{if(l)return;let a=d;if(r.key==="ArrowLeft"||r.key==="ArrowDown")a=Math.max(n,d-L);else if(r.key==="ArrowRight"||r.key==="ArrowUp")a=Math.min(p,d+L);else if(r.key==="Home")a=n;else if(r.key==="End")a=p;else return;i||T(a),S?.(a),r.preventDefault()},q=(d-n)/(p-n)*100,{"aria-label":B,"aria-labelledby":G,...K}=X;return e.jsxs("div",{className:C("wim-slider-container",N),children:[w&&e.jsx("span",{id:E,className:"wim-label",style:{display:"block",marginBottom:"8px"},children:A(w)}),e.jsxs("div",{className:C("wim-slider",l&&"wim-slider--disabled"),onMouseDown:R,onTouchStart:R,...K,children:[e.jsxs("div",{className:"wim-slider__track-container",ref:D,children:[e.jsx("div",{className:"wim-slider__track",style:{width:`${q}%`}}),e.jsx("div",{className:"wim-slider__thumb",style:{left:`${q}%`},role:"slider","aria-valuemin":n,"aria-valuemax":p,"aria-valuenow":d,"aria-disabled":l,"aria-labelledby":w?E:G,"aria-label":w?void 0:B,tabIndex:l?-1:0,onKeyDown:P})]}),e.jsx("input",{type:"hidden",name:$,value:d})]})]})};c.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},id:{required:!1,tsType:{name:"string"},description:"カスタムID"}}};const z={title:"Components/Pickers & Sliders/Slider",component:c,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},v={render:function(s){const{t:n}=m(["docs","common","components"]);return e.jsx(x,{label:n("story_slider_default"),children:e.jsx(c,{...s})})},args:{defaultValue:50}},y={render:function(s){const{t:n}=m(["docs","common","components"]);return e.jsx(x,{label:n("story_slider_disabled"),children:e.jsx(c,{...s,disabled:!0})})},args:{defaultValue:30}},_={render:function(s){const{t:n}=m(["docs","common","components"]);return e.jsx(x,{label:n("story_slider_minmax"),children:e.jsx(c,{...s})})},args:{min:-50,max:50,defaultValue:0}},h={render:function(s){const{t:n}=m(["docs","common","components"]);return e.jsx(x,{label:n("story_slider_step"),children:e.jsx(c,{...s})})},args:{min:0,max:100,step:10,defaultValue:20}},u=()=>{const{t}=m(["docs","common","components"]),[s,n]=o.useState(25);return e.jsx(x,{label:`${t("story_slider_default")} (${t("story_dialog_curr_state")}: ${s})`,children:e.jsx(c,{value:s,onChange:n})})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const H=["Default","Disabled","MinMax","Step","Controlled"],ne=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:v,Disabled:y,MinMax:_,Step:h,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{u as C,y as D,_ as M,ne as S,h as a};
