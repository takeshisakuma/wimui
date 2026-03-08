import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-DQwmcauy.js";import{c as w}from"./index-Bk7p5LNu.js";import{I as q}from"./Icon-BSJg9_bB.js";import{u}from"./useTranslation-CZ9vchf1.js";import{L as m}from"./Label-CMMBwsEf.js";const l=({value:o,defaultValue:n=0,count:r=5,allowHalf:c=!1,disabled:s=!1,size:f="medium",onChange:V,className:A,label:j,...M})=>{const{t:N}=u("components"),C=o!==void 0,[E,H]=h.useState(n),[T,S]=h.useState(null),L=`wim-rating-label-${h.useId()}`,d=C?o:E,D=T!==null?T:d,B=(a,t)=>{if(s)return;let i=a+1;if(c){const R=t.currentTarget.getBoundingClientRect();t.clientX-R.left<=R.width/2&&(i-=.5)}S(i)},O=()=>{s||S(null)},I=a=>{s||(C||H(a),V?.(a))},K=a=>{if(s)return;let t=d;const i=c?.5:1;if(a.key==="ArrowRight"||a.key==="ArrowUp")t=Math.min(r,d+i);else if(a.key==="ArrowLeft"||a.key==="ArrowDown")t=Math.max(0,d-i);else if(a.key==="Home")t=0;else if(a.key==="End")t=r;else return;a.preventDefault(),I(t)},X=a=>{const t=a+1;let i=D>=t,R=!i&&D>=t-.5;return e.jsxs("div",{className:w("wim-rating__star",i&&"wim-rating__star--full",R&&"wim-rating__star--half"),onMouseMove:g=>B(a,g),onClick:g=>{const z=g.currentTarget.getBoundingClientRect(),F=g.clientX-z.left;let k=a+1;c&&F<=z.width/2&&(k-=.5),I(k)},role:"radio","aria-checked":d===t||c&&d===t-.5,"aria-label":N("rating_stars",{count:a+1}),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(q,{name:"StarIcon",size:f})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(q,{name:"StarIcon",size:f})})]},a)},$=Array.from({length:r},(a,t)=>X(t));return e.jsxs("div",{className:w("wim-rating-container",A),children:[j&&e.jsx("div",{id:L,className:"wim-label",style:{marginBottom:"4px"},children:j}),e.jsx("div",{className:w("wim-rating",`wim-rating--${f}`,s&&"wim-rating--disabled"),onMouseLeave:O,role:"radiogroup","aria-labelledby":j?L:void 0,"aria-disabled":s,tabIndex:s?-1:0,onKeyDown:K,...M,children:$})]})};l.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"}}};const P={title:"Components/Advanced Inputs/Rating",component:l,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},p={render:function(n){const{t:r}=u(["docs"]);return e.jsx(m,{label:r("story_rating_default"),children:e.jsx(l,{...n})})},args:{defaultValue:3}},b={render:function(n){const{t:r}=u(["docs"]);return e.jsx(m,{label:r("story_rating_half"),children:e.jsx(l,{...n})})},args:{defaultValue:2.5,allowHalf:!0}},y={render:function(n){const{t:r}=u(["docs"]);return e.jsx(m,{label:r("story_rating_custom"),children:e.jsx(l,{...n})})},args:{defaultValue:7,count:10}},v={render:function(n){const{t:r}=u(["docs","common","components"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(m,{label:r("story_rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...n,size:"small",defaultValue:3}),e.jsx(l,{...n,size:"medium",defaultValue:3}),e.jsx(l,{...n,size:"large",defaultValue:3})]})})})}},x={render:function(n){const{t:r}=u(["docs","common","components"]);return e.jsx(m,{label:r("story_rating_disabled"),children:e.jsx(l,{...n,disabled:!0})})},args:{defaultValue:4}},_={render:function(n){const{t:r}=u(["docs","common","components"]),[c,s]=h.useState(n.value??3);h.useEffect(()=>{s(n.value??3)},[n.value]);const f=V=>{s(V),n.onChange?.(V)};return e.jsx(m,{label:r("story_rating_controlled"),children:e.jsx(l,{...n,value:c,onChange:f})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const U=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],ne=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:b,Controlled:_,CustomCount:y,Default:p,Disabled:x,Sizes:v,__namedExportsOrder:U,default:P},Symbol.toStringTag,{value:"Module"}));export{b as A,x as D,ne as R,v as S};
