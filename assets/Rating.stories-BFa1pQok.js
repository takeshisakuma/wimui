import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-83F82oTe.js";import{c as w}from"./index-zfnUGBBN.js";import{I}from"./Icon-C3VpYLWw.js";import{F as Y,L as f}from"./FieldTemplate-bjn7C47B.js";import{u as c}from"./useTranslation-CgRV5_0i.js";import{A as g}from"./i18nConstants-BpHxieg5.js";const l=({value:i,defaultValue:n=0,count:t=5,allowHalf:d=!1,disabled:s=!1,size:p="medium",onChange:S,className:k,label:L,error:P,required:H,layout:F="vertical",...K})=>{const{t:j}=c("components"),C=i!==void 0,[O,$]=V.useState(n),[T,E]=V.useState(null),M=V.useId(),D=`wim-rating-label-${M}`,B=`wim-rating-error-${M}`,m=C?i:O,N=T!==null?T:m,X=(a,r)=>{if(s)return;let u=a+1;if(d){const A=r.currentTarget.getBoundingClientRect();r.clientX-A.left<=A.width/2&&(u-=.5)}E(u)},U=()=>{s||E(null)},R=a=>{s||(C||$(a),S?.(a))},G=a=>{if(s)return;let r=m;const u=d?.5:1;if(a.key==="ArrowRight"||a.key==="ArrowUp")r=Math.min(t,m+u);else if(a.key==="ArrowLeft"||a.key==="ArrowDown")r=Math.max(0,m-u);else if(a.key==="Home")r=0;else if(a.key==="End")r=t;else return;a.preventDefault(),R(r)},J=a=>{const r=a+1;let u=N>=r,A=!u&&N>=r-.5;return e.jsxs("div",{className:w("wim-rating__star",u&&"wim-rating__star--full",A&&"wim-rating__star--half"),onMouseMove:o=>X(a,o),onClick:o=>{const q=o.currentTarget.getBoundingClientRect(),W=o.clientX-q.left;let z=a+1;d&&W<=q.width/2&&(z-=.5),R(z)},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),R(r))},role:"radio",tabIndex:-1,"aria-checked":m===r||d&&m===r-.5,"aria-label":j("rating_stars",{count:a+1}),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(I,{name:"StarIcon",size:p})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(I,{name:"StarIcon",size:p})})]},a)},Q=Array.from({length:t},(a,r)=>J(r));return e.jsx(Y,{label:L?j(L):void 0,error:P,required:H,layout:F,labelId:D,errorId:B,className:w("wim-rating-container",k),children:e.jsx("div",{className:w("wim-rating",`wim-rating--${p}`,s&&"wim-rating--disabled"),onMouseLeave:U,role:"radiogroup","aria-labelledby":L?D:void 0,"aria-disabled":s,tabIndex:s?-1:0,onKeyDown:G,...K,children:Q})})};l.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const Z={title:"Components/Advanced Inputs/Rating",component:l,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},v={render:function(n){const{t}=c(g);return e.jsx(f,{label:t("story_rating_default"),children:e.jsx(l,{...n})})},args:{defaultValue:3}},y={render:function(n){const{t}=c(g);return e.jsx(f,{label:t("story_rating_half"),children:e.jsx(l,{...n})})},args:{defaultValue:2.5,allowHalf:!0}},_={render:function(n){const{t}=c(g);return e.jsx(f,{label:t("story_rating_custom"),children:e.jsx(l,{...n})})},args:{defaultValue:7,count:10}},b={render:function(n){const{t}=c(g);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(f,{label:t("story_rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...n,size:"small",defaultValue:3}),e.jsx(l,{...n,size:"medium",defaultValue:3}),e.jsx(l,{...n,size:"large",defaultValue:3})]})})})}},x={render:function(n){const{t}=c(g);return e.jsx(f,{label:t("story_rating_disabled"),children:e.jsx(l,{...n,disabled:!0})})},args:{defaultValue:4}},h={render:function(n){const{t}=c(g),[d,s]=V.useState(n.value??3);V.useEffect(()=>{s(n.value??3)},[n.value]);const p=S=>{s(S),n.onChange?.(S)};return e.jsx(f,{label:t("story_rating_controlled"),children:e.jsx(l,{...n,value:d,onChange:p})})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_rating_default")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 3
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_rating_half")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_rating_custom")}>\r
        <Rating {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: 7,
    count: 10
  }
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_rating_disabled")}>\r
        <Rating {...args} disabled />\r
      </Label>;
  },
  args: {
    defaultValue: 4
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...h.parameters?.docs?.source}}};const ee=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],ie=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:y,Controlled:h,CustomCount:_,Default:v,Disabled:x,Sizes:b,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{y as A,x as D,ie as R,b as S};
