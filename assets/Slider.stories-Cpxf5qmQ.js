import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DUo8Bj02.js";import{c as $}from"./index-CI1dtVTQ.js";import{L as x}from"./Label-LWwmYpB8.js";import{u as w}from"./useTranslation-C2tw1dPV.js";const u=({value:a,defaultValue:s=0,min:e=0,max:c=100,step:f=1,disabled:i=!1,onChange:S,onAfterChange:D,className:I,name:X,label:V,id:A,...B})=>{const d=a!==void 0,[j,M]=o.useState(s),m=d?a:j,k=o.useRef(null),L=o.useRef(!1),O=o.useId(),R=`wim-slider-label-${A||O}`,T=o.useCallback((n,r,l)=>Math.max(r,Math.min(n,l)),[]),E=o.useCallback(n=>{const r=Math.round((n-e)/f);return T(e+r*f,e,c)},[T,e,c,f]),C=o.useCallback(n=>{if(!k.current)return e;const r=k.current.getBoundingClientRect(),l=T((n-r.left)/r.width,0,1),z=e+l*(c-e);return E(z)},[E,T,c,e]),q=n=>{if(i)return;L.current=!0;const r="touches"in n?n.touches[0].clientX:n.clientX,l=C(r);d||M(l),S?.(l),n.preventDefault()},b=o.useCallback(n=>{if(!L.current||i)return;const r="touches"in n?n.touches[0].clientX:n.clientX,l=C(r);d||M(l),S?.(l)},[i,d,S,C]),g=o.useCallback(()=>{L.current&&(L.current=!1,D?.(d?a:j))},[d,a,j,D]);o.useEffect(()=>(document.addEventListener("mousemove",b),document.addEventListener("mouseup",g),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",g),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",g)}),[b,g]);const P=n=>{if(i)return;let r=m;if(n.key==="ArrowLeft"||n.key==="ArrowDown")r=Math.max(e,m-f);else if(n.key==="ArrowRight"||n.key==="ArrowUp")r=Math.min(c,m+f);else if(n.key==="Home")r=e;else if(n.key==="End")r=c;else return;d||M(r),S?.(r),n.preventDefault()},N=(m-e)/(c-e)*100,{"aria-label":G,"aria-labelledby":K,...U}=B;return t.jsxs("div",{className:$("wim-slider-container",I),children:[V&&t.jsx("span",{id:R,className:"wim-label",style:{display:"block",marginBottom:"8px"},children:V}),t.jsxs("div",{className:$("wim-slider",i&&"wim-slider--disabled"),onMouseDown:q,onTouchStart:q,...U,children:[t.jsxs("div",{className:"wim-slider__track-container",ref:k,children:[t.jsx("div",{className:"wim-slider__track",style:{width:`${N}%`}}),t.jsx("div",{className:"wim-slider__thumb",style:{left:`${N}%`},role:"slider","aria-valuemin":e,"aria-valuemax":c,"aria-valuenow":m,"aria-disabled":i,"aria-labelledby":V?R:K,"aria-label":V?void 0:G,tabIndex:i?-1:0,onKeyDown:P})]}),t.jsx("input",{type:"hidden",name:X,value:m})]})]})};u.__docgenInfo={description:"ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"最小値",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大値",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"ステップ値",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"ドラッグ終了時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},name:{required:!1,tsType:{name:"string"},description:"名前の属性"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},id:{required:!1,tsType:{name:"string"},description:"カスタムID"}}};const H={title:"Components/Pickers & Sliders/Slider",component:u,argTypes:{onChange:{action:"changed"},onAfterChange:{action:"afterChanged"}}},v={render:function(s){const{t:e}=w(["docs","common","components"]);return t.jsx(x,{label:e("story_slider_default"),children:t.jsx(u,{...s})})},args:{defaultValue:50}},y={render:function(s){const{t:e}=w(["docs","common","components"]);return t.jsx(x,{label:e("story_slider_disabled"),children:t.jsx(u,{...s,disabled:!0})})},args:{defaultValue:30}},_={render:function(s){const{t:e}=w(["docs","common","components"]);return t.jsx(x,{label:e("story_slider_minmax"),children:t.jsx(u,{...s})})},args:{min:-50,max:50,defaultValue:0}},h={render:function(s){const{t:e}=w(["docs","common","components"]);return t.jsx(x,{label:e("story_slider_step"),children:t.jsx(u,{...s})})},args:{min:0,max:100,step:10,defaultValue:20}},p=()=>{const{t:a}=w(["docs","common","components"]),[s,e]=o.useState(25);return t.jsx(x,{label:`${a("story_slider_default")} (${a("story_dialog_curr_state")}: ${s})`,children:t.jsx(u,{value:s,onChange:e})})};p.__docgenInfo={description:"",methods:[],displayName:"Controlled"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "common", "components"]);
  const [val, setVal] = useState(25);
  return <Label label={\`\${t("story_slider_default")} (\${t("story_dialog_curr_state")}: \${val})\`}>\r
      <Slider value={val} onChange={setVal} />\r
    </Label>;
}`,...p.parameters?.docs?.source}}};const F=["Default","Disabled","MinMax","Step","Controlled"],ne=Object.freeze(Object.defineProperty({__proto__:null,Controlled:p,Default:v,Disabled:y,MinMax:_,Step:h,__namedExportsOrder:F,default:H},Symbol.toStringTag,{value:"Module"}));export{p as C,y as D,_ as M,ne as S,h as a};
