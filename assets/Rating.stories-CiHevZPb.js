import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-BZaCnPHr.js";import{c as b}from"./index-BhXy3CKJ.js";import{I as k}from"./Icon-BA_VydvM.js";const i=({value:t,defaultValue:y=0,count:l=5,allowHalf:o=!1,disabled:n=!1,size:x="medium",onChange:q,className:z,label:w,...A})=>{const C=t!==void 0,[M,N]=V.useState(y),[S,_]=V.useState(null),j=`wim-rating-label-${V.useId()}`,u=C?t:M,R=S!==null?S:u,E=(e,a)=>{if(n)return;let s=e+1;if(o){const h=a.currentTarget.getBoundingClientRect();a.clientX-h.left<=h.width/2&&(s-=.5)}_(s)},H=()=>{n||_(null)},T=e=>{n||(C||N(e),q?.(e))},B=e=>{if(n)return;let a=u;const s=o?.5:1;if(e.key==="ArrowRight"||e.key==="ArrowUp")a=Math.min(l,u+s);else if(e.key==="ArrowLeft"||e.key==="ArrowDown")a=Math.max(0,u-s);else if(e.key==="Home")a=0;else if(e.key==="End")a=l;else return;e.preventDefault(),T(a)},L=e=>{const a=e+1;let s=R>=a,h=!s&&R>=a-.5;return r.jsxs("div",{className:b("wim-rating__star",s&&"wim-rating__star--full",h&&"wim-rating__star--half"),onMouseMove:c=>E(e,c),onClick:c=>{const I=c.currentTarget.getBoundingClientRect(),$=c.clientX-I.left;let D=e+1;o&&$<=I.width/2&&(D-=.5),T(D)},role:"radio","aria-checked":u===a||o&&u===a-.5,"aria-label":`${e+1} Stars`,children:[r.jsx("div",{className:"wim-rating__star-background",children:r.jsx(k,{name:"StarIcon",size:x})}),r.jsx("div",{className:"wim-rating__star-foreground",children:r.jsx(k,{name:"StarIcon",size:x})})]},e)},O=Array.from({length:l},(e,a)=>L(a));return r.jsxs("div",{className:b("wim-rating-container",z),children:[w&&r.jsx("div",{id:j,className:"wim-label",style:{marginBottom:"4px"},children:w}),r.jsx("div",{className:b("wim-rating",`wim-rating--${x}`,n&&"wim-rating--disabled"),onMouseLeave:H,role:"radiogroup","aria-labelledby":w?j:void 0,"aria-disabled":n,tabIndex:n?-1:0,onKeyDown:B,...A,children:O})]})};i.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"}}};const K={title:"Component/Advanced Inputs/Rating",component:i,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},d={args:{defaultValue:3}},m={args:{defaultValue:2.5,allowHalf:!0}},p={args:{defaultValue:7,count:10}},f={render:t=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(i,{...t,size:"small",defaultValue:3}),r.jsx(i,{...t,size:"medium",defaultValue:3}),r.jsx(i,{...t,size:"large",defaultValue:3})]})},g={args:{defaultValue:4,disabled:!0}},v={render:t=>{const[y,l]=V.useState(t.value??3);V.useEffect(()=>{l(t.value??3)},[t.value]);const o=n=>{l(n),t.onChange?.(n)};return r.jsx(i,{...t,value:y,onChange:o})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
            <Rating {...args} size="small" defaultValue={3} />\r
            <Rating {...args} size="medium" defaultValue={3} />\r
            <Rating {...args} size="large" defaultValue={3} />\r
        </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 3);
    useEffect(() => {
      setValue(args.value ?? 3);
    }, [args.value]);
    const handleChange = (newVal: number) => {
      setValue(newVal);
      args.onChange?.(newVal);
    };
    return <Rating {...args} value={value} onChange={handleChange} />;
  }
}`,...v.parameters?.docs?.source}}};const X=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],Q=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:m,Controlled:v,CustomCount:p,Default:d,Disabled:g,Sizes:f,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{m as A,g as D,Q as R,f as S};
