import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-BisTGuVC.js";import{c as T}from"./index-Ckw0h7AD.js";import{I as M}from"./Icon-mnVo4eg5.js";import{F as W,L as f}from"./FieldTemplate-DQGW8oml.js";import{u as c}from"./useTranslation-BH3LN071.js";const l=({value:i,defaultValue:n=0,count:t=5,allowHalf:d=!1,disabled:s=!1,size:p="medium",onChange:V,className:N,label:w,error:E,required:H,layout:F="vertical",...K})=>{const{t:C}=c("components"),S=i!==void 0,[O,$]=h.useState(n),[L,D]=h.useState(null),q=h.useId(),z=`wim-rating-label-${q}`,B=`wim-rating-error-${q}`,m=S?i:O,I=L!==null?L:m,X=(a,r)=>{if(s)return;let u=a+1;if(d){const R=r.currentTarget.getBoundingClientRect();r.clientX-R.left<=R.width/2&&(u-=.5)}D(u)},P=()=>{s||D(null)},j=a=>{s||(S||$(a),V?.(a))},U=a=>{if(s)return;let r=m;const u=d?.5:1;if(a.key==="ArrowRight"||a.key==="ArrowUp")r=Math.min(t,m+u);else if(a.key==="ArrowLeft"||a.key==="ArrowDown")r=Math.max(0,m-u);else if(a.key==="Home")r=0;else if(a.key==="End")r=t;else return;a.preventDefault(),j(r)},G=a=>{const r=a+1;let u=I>=r,R=!u&&I>=r-.5;return e.jsxs("div",{className:T("wim-rating__star",u&&"wim-rating__star--full",R&&"wim-rating__star--half"),onMouseMove:o=>X(a,o),onClick:o=>{const k=o.currentTarget.getBoundingClientRect(),Q=o.clientX-k.left;let A=a+1;d&&Q<=k.width/2&&(A-=.5),j(A)},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),j(r))},role:"radio",tabIndex:-1,"aria-checked":m===r||d&&m===r-.5,"aria-label":C("rating_stars",{count:a+1}),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(M,{name:"StarIcon",size:p})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(M,{name:"StarIcon",size:p})})]},a)},J=Array.from({length:t},(a,r)=>G(r));return e.jsx(W,{label:w?C(w):void 0,error:E,required:H,layout:F,labelId:z,errorId:B,className:T("wim-rating-container",N),children:e.jsx("div",{className:T("wim-rating",`wim-rating--${p}`,s&&"wim-rating--disabled"),onMouseLeave:P,role:"radiogroup","aria-labelledby":w?z:void 0,"aria-disabled":s,tabIndex:s?-1:0,onKeyDown:U,...K,children:J})})};l.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const Y={title:"Components/Advanced Inputs/Rating",component:l,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},g={render:function(n){const{t}=c(["docs"]);return e.jsx(f,{label:t("story_rating_default"),children:e.jsx(l,{...n})})},args:{defaultValue:3}},v={render:function(n){const{t}=c(["docs"]);return e.jsx(f,{label:t("story_rating_half"),children:e.jsx(l,{...n})})},args:{defaultValue:2.5,allowHalf:!0}},y={render:function(n){const{t}=c(["docs"]);return e.jsx(f,{label:t("story_rating_custom"),children:e.jsx(l,{...n})})},args:{defaultValue:7,count:10}},b={render:function(n){const{t}=c(["docs","common","components"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(f,{label:t("story_rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...n,size:"small",defaultValue:3}),e.jsx(l,{...n,size:"medium",defaultValue:3}),e.jsx(l,{...n,size:"large",defaultValue:3})]})})})}},_={render:function(n){const{t}=c(["docs","common","components"]);return e.jsx(f,{label:t("story_rating_disabled"),children:e.jsx(l,{...n,disabled:!0})})},args:{defaultValue:4}},x={render:function(n){const{t}=c(["docs","common","components"]),[d,s]=h.useState(n.value??3);h.useEffect(()=>{s(n.value??3)},[n.value]);const p=V=>{s(V),n.onChange?.(V)};return e.jsx(f,{label:t("story_rating_controlled"),children:e.jsx(l,{...n,value:d,onChange:p})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_rating_disabled")}>\r
        <Rating {...args} disabled />\r
      </Label>;
  },
  args: {
    defaultValue: 4
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};const Z=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],le=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:v,Controlled:x,CustomCount:y,Default:g,Disabled:_,Sizes:b,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{v as A,_ as D,le as R,b as S};
