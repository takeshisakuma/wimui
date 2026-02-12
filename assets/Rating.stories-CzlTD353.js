import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-DQO96vlz.js";import{c as w}from"./index-CgtPBStF.js";import{I as b}from"./Icon-Bt2n61hp.js";const o=({value:e,defaultValue:h=0,count:g=5,allowHalf:v=!1,disabled:n=!1,size:x="medium",onChange:j,className:R,...T})=>{const y=e!==void 0,[z,D]=V.useState(h),[C,S]=V.useState(null),_=C!==null?C:y?e:z,q=(t,r)=>{if(n)return;let s=t+1;if(v){const l=r.currentTarget.getBoundingClientRect();r.clientX-l.left<=l.width/2&&(s-=.5)}S(s)},M=()=>{n||S(null)},N=(t,r)=>{if(n)return;let s=t+1;if(v){const l=r.currentTarget.getBoundingClientRect();r.clientX-l.left<=l.width/2&&(s-=.5)}y||D(s),j?.(s)},H=t=>{const r=t+1;let s=_>=r,l=!s&&_>=r-.5;return a.jsxs("div",{className:w("wim-rating__star",s&&"wim-rating__star--full",l&&"wim-rating__star--half"),onMouseMove:u=>q(t,u),onClick:u=>N(t,u),children:[a.jsx("div",{className:"wim-rating__star-background",children:a.jsx(b,{name:"StarIcon",size:x})}),a.jsx("div",{className:"wim-rating__star-foreground",children:a.jsx(b,{name:"StarIcon",size:x})})]},t)},I=Array.from({length:g},(t,r)=>H(r));return a.jsx("div",{className:w("wim-rating",`wim-rating--${x}`,n&&"wim-rating--disabled",R),onMouseLeave:M,...T,children:I})};o.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値"},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const E={title:"Component/Data Display/Rating",component:o,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},i={args:{defaultValue:3}},c={args:{defaultValue:2.5,allowHalf:!0}},d={args:{defaultValue:7,count:10}},m={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(o,{...e,size:"small",defaultValue:3}),a.jsx(o,{...e,size:"medium",defaultValue:3}),a.jsx(o,{...e,size:"large",defaultValue:3})]})},f={args:{defaultValue:4,disabled:!0}},p={render:e=>{const[h,g]=V.useState(e.value??3);V.useEffect(()=>{g(e.value??3)},[e.value]);const v=n=>{g(n),e.onChange?.(n)};return a.jsx(o,{...e,value:h,onChange:v})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
            <Rating {...args} size="small" defaultValue={3} />\r
            <Rating {...args} size="medium" defaultValue={3} />\r
            <Rating {...args} size="large" defaultValue={3} />\r
        </div>
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const A=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],F=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:c,Controlled:p,CustomCount:d,Default:i,Disabled:f,Sizes:m,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{c as A,f as D,F as R,m as S};
