import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-C05UZAs2.js";import{P as l}from"./index-BDBDHiMS.js";import{I as _}from"./Icon-DS6-snKS.js";const o=({value:e,defaultValue:b=0,count:v=5,allowHalf:V=!1,disabled:s=!1,size:h="medium",onChange:j,className:T="",...R})=>{const x=e!==void 0,[z,D]=y.useState(b),[C,w]=y.useState(null),S=C!==null?C:x?e:z,q=(t,r)=>{if(s)return;let n=t+1;if(V){const u=r.currentTarget.getBoundingClientRect();r.clientX-u.left<=u.width/2&&(n-=.5)}w(n)},H=()=>{s||w(null)},M=(t,r)=>{if(s)return;let n=t+1;if(V){const u=r.currentTarget.getBoundingClientRect();r.clientX-u.left<=u.width/2&&(n-=.5)}x||D(n),j?.(n)},N=t=>{const r=t+1;let n=S>=r,u=!n&&S>=r-.5;return a.jsxs("div",{className:`wim-rating__star ${n?"wim-rating__star--full":""} ${u?"wim-rating__star--half":""}`,onMouseMove:i=>q(t,i),onClick:i=>M(t,i),children:[a.jsx("div",{className:"wim-rating__star-background",children:a.jsx(_,{name:"StarIcon",size:h})}),a.jsx("div",{className:"wim-rating__star-foreground",children:a.jsx(_,{name:"StarIcon",size:h})})]},t)},I=Array.from({length:v},(t,r)=>N(r));return a.jsx("div",{className:`wim-rating wim-rating--${h} ${s?"wim-rating--disabled":""} ${T}`,onMouseLeave:H,...R,children:I})};o.propTypes={value:l.number,defaultValue:l.number,count:l.number,allowHalf:l.bool,disabled:l.bool,size:l.oneOf(["small","medium","large"]),onChange:l.func,className:l.string};o.__docgenInfo={description:"ユーザーが評価を入力するためのレーティングコンポーネント。",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"現在の値",type:{name:"number"}},defaultValue:{required:!1,tsType:{name:"number"},description:"デフォルトの値（非制御時）",defaultValue:{value:"0",computed:!1},type:{name:"number"}},count:{required:!1,tsType:{name:"number"},description:"星の総数",defaultValue:{value:"5",computed:!1},type:{name:"number"}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"ハーフスターを許可するかどうか",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ（読み取り専用）",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"サイズ",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"値変更時のコールバック",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const E={title:"Component/Data Display/Rating",component:o,parameters:{layout:"centered"},argTypes:{value:{control:"number"},count:{control:"number"},size:{control:"select",options:["small","medium","large"]}}},m={args:{defaultValue:3}},c={args:{defaultValue:2.5,allowHalf:!0}},d={args:{defaultValue:7,count:10}},p={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(o,{...e,size:"small",defaultValue:3}),a.jsx(o,{...e,size:"medium",defaultValue:3}),a.jsx(o,{...e,size:"large",defaultValue:3})]})},f={args:{defaultValue:4,disabled:!0}},g={render:e=>{const[b,v]=y.useState(e.value??3);y.useEffect(()=>{v(e.value??3)},[e.value]);const V=s=>{v(s),e.onChange?.(s)};return a.jsx(o,{...e,value:b,onChange:V})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
            <Rating {...args} size="small" defaultValue={3} />\r
            <Rating {...args} size="medium" defaultValue={3} />\r
            <Rating {...args} size="large" defaultValue={3} />\r
        </div>
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const $=["Default","AllowHalf","CustomCount","Sizes","Disabled","Controlled"],L=Object.freeze(Object.defineProperty({__proto__:null,AllowHalf:c,Controlled:g,CustomCount:d,Default:m,Disabled:f,Sizes:p,__namedExportsOrder:$,default:E},Symbol.toStringTag,{value:"Module"}));export{c as A,f as D,L as R,p as S};
