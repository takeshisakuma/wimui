import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-DMgQDpBx.js";import{c as j}from"./index-MafWY-Pw.js";import{I as R}from"./Icon-WCf84-EP.js";const u=({value:e,defaultValue:y=0,count:g=5,allowHalf:v=!1,disabled:n=!1,size:h="medium",onChange:S,className:T,...D})=>{const x=e!==void 0,[z,w]=V.useState(y),[C,_]=V.useState(null),b=C!==null?C:x?e:z,q=(a,t)=>{if(n)return;let s=a+1;if(v){const o=t.currentTarget.getBoundingClientRect();t.clientX-o.left<=o.width/2&&(s-=.5)}_(s)},I=()=>{n||_(null)},M=(a,t)=>{if(n)return;let s=a+1;if(v){const o=t.currentTarget.getBoundingClientRect();t.clientX-o.left<=o.width/2&&(s-=.5)}x||w(s),S?.(s)},N=a=>{const t=a+1;let s=b>=t,o=!s&&b>=t-.5;return r.jsxs("div",{className:j("wim-rating__star",s&&"wim-rating__star--full",o&&"wim-rating__star--half"),onMouseMove:l=>q(a,l),onClick:l=>M(a,l),role:"button","aria-label":`${a+1} Stars`,tabIndex:n?-1:0,onKeyDown:l=>{!n&&(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),x||w(a+1),S?.(a+1))},children:[r.jsx("div",{className:"wim-rating__star-background",children:r.jsx(R,{name:"StarIcon",size:h})}),r.jsx("div",{className:"wim-rating__star-foreground",children:r.jsx(R,{name:"StarIcon",size:h})})]},a)},E=Array.from({length:g},(a,t)=>N(t));return r.jsx("div",{className:j("wim-rating",`wim-rating--${h}`,n&&"wim-rating--disabled",T),onMouseLeave:I,...D,children:E})};u.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const H={title:"Component/Data Display/Rating",component:u,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},i={args:{defaultValue:3}},c={args:{defaultValue:2.5,allowHalf:!0}},m={args:{defaultValue:7,count:10}},d={render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(u,{...e,size:"small",defaultValue:3}),r.jsx(u,{...e,size:"medium",defaultValue:3}),r.jsx(u,{...e,size:"large",defaultValue:3})]})},f={args:{defaultValue:4,disabled:!0}},p={render:e=>{const[y,g]=V.useState(e.value??3);V.useEffect(()=>{g(e.value??3)},[e.value]);const v=n=>{g(n),e.onChange?.(n)};return r.jsx(u,{...e,value:y,onChange:v})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
            <Rating {...args} size="small" defaultValue={3} />\r
            <Rating {...args} size="medium" defaultValue={3} />\r
            <Rating {...args} size="large" defaultValue={3} />\r
        </div>
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const k=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],$=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:c,Controlled:p,CustomCount:m,Default:i,Disabled:f,Sizes:d,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{c as A,f as D,$ as R,d as S};
