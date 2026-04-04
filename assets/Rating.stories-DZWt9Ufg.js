import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,A as g}from"./iframe-CiRA90at.js";import{c as w}from"./index-CERe7Zud.js";import{I as F}from"./Icon-CQf8-Dej.js";import{F as se,L as p}from"./FieldTemplate-CQJ2hOgk.js";import{u as v}from"./useTranslation-BEAd_Ta8.js";const l=({value:c,defaultValue:a=0,count:t=5,allowHalf:f=!1,disabled:u=!1,readOnly:s=!1,size:y="md",onChange:B,className:K,label:T,error:E,required:D,layout:O="vertical",labels:X={},...U})=>{const{star:G=r=>`${r} star${r!==1?"s":""}`,readonly:J=(r,n)=>`Rating: ${r} out of ${n}`}=X,M=c!==void 0,[Q,W]=h.useState(a),[N,k]=h.useState(null),q=h.useId(),I=`wim-rating-label-${q}`,z=`wim-rating-error-${q}`,R=h.useRef([]),d=M?c:Q,P=N!==null?N:d,Y=(r,n)=>{if(u||s)return;let m=r+1;if(f){const o=n.currentTarget.getBoundingClientRect();n.clientX-o.left<=o.width/2&&(m-=.5)}k(m)},Z=()=>{u||s||k(null)},x=r=>{u||s||(M||W(r),B?.(r))},ee=(()=>{if(d===0)return 0;for(let r=0;r<t;r++){const n=r+1;if(d===n||f&&d===n-.5)return r}return 0})(),ne=(r,n)=>{if(u||s)return;const m=f?.5:1;if(n.key==="ArrowRight"||n.key==="ArrowUp"){n.preventDefault();const o=Math.min(t,d+m),b=Math.min(Math.ceil(o)-1,t-1);x(o),R.current[b]?.focus()}else if(n.key==="ArrowLeft"||n.key==="ArrowDown"){n.preventDefault();const o=Math.max(0,d-m),b=o===0?0:Math.ceil(o)-1;x(o),R.current[b]?.focus()}else n.key==="Home"?(n.preventDefault(),x(0),R.current[0]?.focus()):n.key==="End"&&(n.preventDefault(),x(t),R.current[t-1]?.focus())},ae=r=>{const n=r+1,m=P>=n,o=!m&&P>=n-.5,b=d===n||f&&d===n-.5;return e.jsxs("div",{ref:i=>{R.current[r]=i},className:w("wim-rating__star",m&&"wim-rating__star--full",o&&"wim-rating__star--half"),onMouseMove:i=>Y(r,i),onClick:i=>{const $=i.currentTarget.getBoundingClientRect(),te=i.clientX-$.left;let H=n;f&&te<=$.width/2&&(H-=.5),x(H)},onKeyDown:i=>{i.key==="Enter"||i.key===" "?(i.preventDefault(),x(n)):ne(r,i)},role:s?"presentation":"radio",tabIndex:u||s?-1:r===ee?0:-1,"aria-checked":s?void 0:b,"aria-label":s?void 0:G(r+1),children:[e.jsx("div",{className:"wim-rating__star-background",children:e.jsx(F,{name:"StarIcon",size:y})}),e.jsx("div",{className:"wim-rating__star-foreground",children:e.jsx(F,{name:"StarIcon",size:y})})]},r)},re=Array.from({length:t},(r,n)=>ae(n));return e.jsx(se,{label:T,error:E,required:D,layout:O,labelId:I,errorId:z,className:w("wim-rating-container",K),children:e.jsx("div",{className:w("wim-rating",`wim-rating--${y}`,u&&"wim-rating--disabled"),onMouseLeave:s?void 0:Z,role:s?"img":"radiogroup","aria-label":s?J(d,t):void 0,"aria-labelledby":!s&&T?I:void 0,"aria-disabled":!s&&u?!0:void 0,"aria-required":s?void 0:D,"aria-describedby":!s&&E?z:void 0,...U,children:re})})};l.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"読み取り専用フラグ（表示専用。disabledと異なりグレーアウトしない）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"サイズ",defaultValue:{value:'"md"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  star?: (count: number) => string;
  readonly?: (value: number, max: number) => string;
}`,signature:{properties:[{key:"star",value:{name:"signature",type:"function",raw:"(count: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"string"}},required:!1}},{key:"readonly",value:{name:"signature",type:"function",raw:"(value: number, max: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"max"}],return:{name:"string"}},required:!1}}]}},description:"Labels for internationalization",defaultValue:{value:"{}",computed:!1}}}};const le={title:"Components/Advanced Inputs/Rating",component:l,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"radio",options:["sm","md","lg"]}}},_={render:function(a){const{t}=v(g);return e.jsx(p,{label:t("story.rating_default"),children:e.jsx(l,{...a})})},args:{defaultValue:3}},V={render:function(a){const{t}=v(g);return e.jsx(p,{label:t("story.rating_half"),children:e.jsx(l,{...a})})},args:{defaultValue:2.5,allowHalf:!0}},j={render:function(a){const{t}=v(g);return e.jsx(p,{label:t("story.rating_custom"),children:e.jsx(l,{...a})})},args:{defaultValue:7,count:10}},A={render:function(a){const{t}=v(g);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(p,{label:t("story.rating_sizes"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...a,size:"sm",defaultValue:3}),e.jsx(l,{...a,size:"md",defaultValue:3}),e.jsx(l,{...a,size:"lg",defaultValue:3})]})})})}},L={render:function(a){const{t}=v(g);return e.jsx(p,{label:t("story.rating_disabled"),children:e.jsx(l,{...a,disabled:!0})})},args:{defaultValue:4}},S={render:function(a){const{t}=v(g);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(p,{label:t("story.rating_readonly"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{...a,value:5,readOnly:!0}),e.jsx(l,{...a,value:4,readOnly:!0}),e.jsx(l,{...a,value:3,readOnly:!0}),e.jsx(l,{...a,value:2,readOnly:!0}),e.jsx(l,{...a,value:1,readOnly:!0})]})})})}},C={render:function(a){const{t}=v(g),[f,u]=h.useState(a.value??3);h.useEffect(()=>{u(a.value??3)},[a.value]);const s=y=>{u(y),a.onChange?.(y)};return e.jsx(p,{label:t("story.rating_controlled"),children:e.jsx(l,{...a,value:f,onChange:s})})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_default")}>
        <Rating {...args} />
      </Label>;
  },
  args: {
    defaultValue: 3
  }
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_half")}>
        <Rating {...args} />
      </Label>;
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_custom")}>
        <Rating {...args} />
      </Label>;
  },
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Label label={t("story.rating_sizes")}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
            <Rating {...args} size="sm" defaultValue={3} />
            <Rating {...args} size="md" defaultValue={3} />
            <Rating {...args} size="lg" defaultValue={3} />
          </div>
        </Label>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_disabled")}>
        <Rating {...args} disabled />
      </Label>;
  },
  args: {
    defaultValue: 4
  }
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Label label={t("story.rating_readonly")}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
            <Rating {...args} value={5} readOnly />
            <Rating {...args} value={4} readOnly />
            <Rating {...args} value={3} readOnly />
            <Rating {...args} value={2} readOnly />
            <Rating {...args} value={1} readOnly />
          </div>
        </Label>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    return <Label label={t("story.rating_controlled")}>
        <Rating {...args} value={value} onChange={handleChange} />
      </Label>;
  }
}`,...C.parameters?.docs?.source}}};const oe=["Default","AllowHalf","CustomCount","Sizes","Disabled","ReadOnly","Controlled"],pe=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:V,Controlled:C,CustomCount:j,Default:_,Disabled:L,ReadOnly:S,Sizes:A,__namedExportsOrder:oe,default:le},Symbol.toStringTag,{value:"Module"}));export{V as A,_ as D,pe as R,A as S,L as a,S as b};
