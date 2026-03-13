import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-CKKDYfjM.js";import{c as T}from"./index-K_u7tV9x.js";import{I as M}from"./Icon-DuRhDIXo.js";import{F as W,L as p}from"./FieldTemplate-Sq91j-YR.js";import{u as d}from"./useTranslation-D80Uyf_x.js";const o=({value:i,defaultValue:n=0,count:r=5,allowHalf:u=!1,disabled:t=!1,size:g="medium",onChange:V,className:N,label:w,error:E,required:H,layout:F="vertical",...K})=>{const{t:C}=d("components"),S=i!==void 0,[O,$]=h.useState(n),[L,D]=h.useState(null),q=h.useId(),z=`wim-rating-label-${q}`,B=`wim-rating-error-${q}`,m=S?i:O,I=L!==null?L:m,X=(a,s)=>{if(t)return;let c=a+1;if(u){const R=s.currentTarget.getBoundingClientRect();s.clientX-R.left<=R.width/2&&(c-=.5)}D(c)},P=()=>{t||D(null)},j=a=>{t||(S||$(a),V?.(a))},U=a=>{if(t)return;let s=m;const c=u?.5:1;if(a.key==="ArrowRight"||a.key==="ArrowUp")s=Math.min(r,m+c);else if(a.key==="ArrowLeft"||a.key==="ArrowDown")s=Math.max(0,m-c);else if(a.key==="Home")s=0;else if(a.key==="End")s=r;else return;a.preventDefault(),j(s)},G=a=>{const s=a+1;let c=I>=s,R=!c&&I>=s-.5;return e.jsxs("div",{className:T("wim-rating__star",c&&"wim-rating__star--full",R&&"wim-rating__star--half"),onMouseMove:l=>X(a,l),onClick:l=>{const k=l.currentTarget.getBoundingClientRect(),Q=l.clientX-k.left;let A=a+1;u&&Q<=k.width/2&&(A-=.5),j(A)},onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),j(s))},role:"radio",tabIndex:-1,"aria-checked":m===s||u&&m===s-.5,"aria-label":C("rating_stars",{count:a+1}),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(M,{name:"StarIcon",size:g})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(M,{name:"StarIcon",size:g})})]},a)},J=Array.from({length:r},(a,s)=>G(s));return e.jsx(W,{label:w?C(w):void 0,error:E,required:H,layout:F,labelId:z,errorId:B,className:T("wim-rating-container",N),children:e.jsx("div",{className:T("wim-rating",`wim-rating--${g}`,t&&"wim-rating--disabled"),onMouseLeave:P,role:"radiogroup","aria-labelledby":w?z:void 0,"aria-disabled":t,tabIndex:t?-1:0,onKeyDown:U,...K,children:J})})};o.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const Y={title:"Components/Advanced Inputs/Rating",component:o,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},f={render:function(n){const{t:r}=d(["docs"]);return e.jsx(p,{label:r("story_rating_default"),children:e.jsx(o,{...n})})},args:{defaultValue:3}},_={render:function(n){const{t:r}=d(["docs"]);return e.jsx(p,{label:r("story_rating_half"),children:e.jsx(o,{...n})})},args:{defaultValue:2.5,allowHalf:!0}},y={render:function(n){const{t:r}=d(["docs"]);return e.jsx(p,{label:r("story_rating_custom"),children:e.jsx(o,{...n})})},args:{defaultValue:7,count:10}},v={render:function(n){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(p,{label:r("story_rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...n,size:"small",defaultValue:3}),e.jsx(o,{...n,size:"medium",defaultValue:3}),e.jsx(o,{...n,size:"large",defaultValue:3})]})})})}},b={render:function(n){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(p,{label:r("story_rating_disabled"),children:e.jsx(o,{...n,disabled:!0})})},args:{defaultValue:4}},x={render:function(n){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[u,t]=h.useState(n.value??3);h.useEffect(()=>{t(n.value??3)},[n.value]);const g=V=>{t(V),n.onChange?.(V)};return e.jsx(p,{label:r("story_rating_controlled"),children:e.jsx(o,{...n,value:u,onChange:g})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_rating_default")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 3
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_rating_half")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <Label label={t("story_rating_custom")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <Label label={t("story_rating_sizes")}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>\r
            <Rating {...args} size="small" defaultValue={3} />\r
            <Rating {...args} size="medium" defaultValue={3} />\r
            <Rating {...args} size="large" defaultValue={3} />\r
          </div>\r
        </Label>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_rating_disabled")}>\r
        <Rating {...args} disabled />\r
      </Label>;
  },
  args: {
    defaultValue: 4
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [value, setValue] = useState(args.value ?? 3);
    useEffect(() => {
      setValue(args.value ?? 3);
    }, [args.value]);
    const handleChange = (newVal: number) => {
      setValue(newVal);
      args.onChange?.(newVal);
    };
    return <Label label={t("story_rating_controlled")}>\r
        <Rating {...args} value={value} onChange={handleChange} />\r
      </Label>;
  }
}`,...x.parameters?.docs?.source}}};const Z=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],oe=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:_,Controlled:x,CustomCount:y,Default:f,Disabled:b,Sizes:v,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{_ as A,b as D,oe as R,v as S};
