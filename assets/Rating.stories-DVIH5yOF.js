import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./iframe-CzzNuQsS.js";import{c as E}from"./index-DcUaXI3T.js";import{I as B}from"./Icon-DHd-2rK_.js";import{F as ae,L as g}from"./FieldTemplate-B9j8EmGe.js";import{u as f}from"./useTranslation-CcD7M1NG.js";import{A as v}from"./i18nConstants-BpHxieg5.js";const l=({value:c,defaultValue:n=0,count:a=5,allowHalf:p=!1,disabled:u=!1,readOnly:s=!1,size:x="medium",onChange:K,className:O,label:w,error:D,required:M,layout:X="vertical",...U})=>{const{t:T}=f("components"),I=c!==void 0,[G,J]=_.useState(n),[N,k]=_.useState(null),q=_.useId(),z=`wim-rating-label-${q}`,P=`wim-rating-error-${q}`,h=_.useRef([]),d=I?c:G,H=N!==null?N:d,Q=(t,r)=>{if(u||s)return;let m=t+1;if(p){const o=r.currentTarget.getBoundingClientRect();r.clientX-o.left<=o.width/2&&(m-=.5)}k(m)},W=()=>{u||s||k(null)},y=t=>{u||s||(I||J(t),K?.(t))},Y=(()=>{if(d===0)return 0;for(let t=0;t<a;t++){const r=t+1;if(d===r||p&&d===r-.5)return t}return 0})(),Z=(t,r)=>{if(u||s)return;const m=p?.5:1;if(r.key==="ArrowRight"||r.key==="ArrowUp"){r.preventDefault();const o=Math.min(a,d+m),b=Math.min(Math.ceil(o)-1,a-1);y(o),h.current[b]?.focus()}else if(r.key==="ArrowLeft"||r.key==="ArrowDown"){r.preventDefault();const o=Math.max(0,d-m),b=o===0?0:Math.ceil(o)-1;y(o),h.current[b]?.focus()}else r.key==="Home"?(r.preventDefault(),y(0),h.current[0]?.focus()):r.key==="End"&&(r.preventDefault(),y(a),h.current[a-1]?.focus())},ee=t=>{const r=t+1,m=H>=r,o=!m&&H>=r-.5,b=d===r||p&&d===r-.5;return e.jsxs("div",{ref:i=>{h.current[t]=i},className:E("wim-rating__star",m&&"wim-rating__star--full",o&&"wim-rating__star--half"),onMouseMove:i=>Q(t,i),onClick:i=>{const F=i.currentTarget.getBoundingClientRect(),re=i.clientX-F.left;let $=r;p&&re<=F.width/2&&($-=.5),y($)},onKeyDown:i=>{i.key==="Enter"||i.key===" "?(i.preventDefault(),y(r)):Z(t,i)},role:s?"presentation":"radio",tabIndex:u||s?-1:t===Y?0:-1,"aria-checked":s?void 0:b,"aria-label":s?void 0:T("rating_stars",{count:t+1}),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(B,{name:"StarIcon",size:x})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(B,{name:"StarIcon",size:x})})]},t)},ne=Array.from({length:a},(t,r)=>ee(r));return e.jsx(ae,{label:w?T(w):void 0,error:D,required:M,layout:X,labelId:z,errorId:P,className:E("wim-rating-container",O),children:e.jsx("div",{className:E("wim-rating",`wim-rating--${x}`,u&&"wim-rating--disabled"),onMouseLeave:s?void 0:W,role:s?"img":"radiogroup","aria-label":s?T("rating_readonly_label",{count:d,max:a}):void 0,"aria-labelledby":!s&&w?z:void 0,"aria-disabled":!s&&u?!0:void 0,"aria-required":s?void 0:M,"aria-describedby":!s&&D?P:void 0,...U,children:ne})})};l.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"読み取り専用フラグ（表示専用。disabledと異なりグレーアウトしない）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const te={title:"Components/Advanced Inputs/Rating",component:l,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},R={render:function(n){const{t:a}=f(v);return e.jsx(g,{label:a("story_rating_default"),children:e.jsx(l,{...n})})},args:{defaultValue:3}},V={render:function(n){const{t:a}=f(v);return e.jsx(g,{label:a("story_rating_half"),children:e.jsx(l,{...n})})},args:{defaultValue:2.5,allowHalf:!0}},A={render:function(n){const{t:a}=f(v);return e.jsx(g,{label:a("story_rating_custom"),children:e.jsx(l,{...n})})},args:{defaultValue:7,count:10}},S={render:function(n){const{t:a}=f(v);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(g,{label:a("story_rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...n,size:"small",defaultValue:3}),e.jsx(l,{...n,size:"medium",defaultValue:3}),e.jsx(l,{...n,size:"large",defaultValue:3})]})})})}},j={render:function(n){const{t:a}=f(v);return e.jsx(g,{label:a("story_rating_disabled"),children:e.jsx(l,{...n,disabled:!0})})},args:{defaultValue:4}},L={render:function(n){const{t:a}=f(v);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(g,{label:a("story_rating_readonly"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{...n,value:5,readOnly:!0}),e.jsx(l,{...n,value:4,readOnly:!0}),e.jsx(l,{...n,value:3,readOnly:!0}),e.jsx(l,{...n,value:2,readOnly:!0}),e.jsx(l,{...n,value:1,readOnly:!0})]})})})}},C={render:function(n){const{t:a}=f(v),[p,u]=_.useState(n.value??3);_.useEffect(()=>{u(n.value??3)},[n.value]);const s=x=>{u(x),n.onChange?.(x)};return e.jsx(g,{label:a("story_rating_controlled"),children:e.jsx(l,{...n,value:p,onChange:s})})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <Label label={t("story_rating_readonly")}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>\r
            <Rating {...args} value={5} readOnly />\r
            <Rating {...args} value={4} readOnly />\r
            <Rating {...args} value={3} readOnly />\r
            <Rating {...args} value={2} readOnly />\r
            <Rating {...args} value={1} readOnly />\r
          </div>\r
        </Label>\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const se=["Default","AllowHalf","CustomCount","Sizes","Disabled","ReadOnly","Controlled"],pe=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:V,Controlled:C,CustomCount:A,Default:R,Disabled:j,ReadOnly:L,Sizes:S,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{V as A,R as D,pe as R,S,j as a,L as b};
