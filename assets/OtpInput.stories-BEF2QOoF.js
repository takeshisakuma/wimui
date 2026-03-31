import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as b,R as z,A as F}from"./iframe-C9jI6wk5.js";import{c as C}from"./index-BdaCrWBW.js";import{F as $}from"./FieldTemplate-DNPW3Y-H.js";import{u as D}from"./useTranslation-f2Ze7WA6.js";const S=({length:r=6,value:o="",onChange:u,disabled:w=!1,error:y,required:j,label:T,layout:A,className:E})=>{const{t:q}=D(["components"]),[l,p]=b.useState(Array(r).fill("")),[O,L]=b.useState(o),c=b.useRef([]),_=`wim-otp-input-${z.useId()}`,N=T?`${_}-label`:void 0,I=y?`${_}-error`:void 0;if(o!==O){L(o);const a=o.split("").slice(0,r),e=Array(r).fill("").map((t,s)=>a[s]||"");p(e)}const h=a=>{const e=a.join("");u&&u(e)},P=(a,e)=>{const s=a.target.value.slice(-1),d=[...l];d[e]=s,p(d),h(d),s&&e<r-1&&c.current[e+1]?.focus()},k=(a,e)=>{if(a.key==="Backspace"){if(!l[e]&&e>0){const t=[...l];t[e-1]="",p(t),h(t),c.current[e-1]?.focus()}else if(l[e]){const t=[...l];t[e]="",p(t),h(t)}}else a.key==="ArrowLeft"&&e>0?(a.preventDefault(),c.current[e-1]?.focus()):a.key==="ArrowRight"&&e<r-1&&(a.preventDefault(),c.current[e+1]?.focus())},R=a=>{a.preventDefault();const t=a.clipboardData.getData("text").slice(0,r).split(""),s=[...l];t.forEach((M,V)=>{V<r&&(s[V]=M)}),p(s),h(s);const d=Math.min(t.length,r-1);c.current[d]?.focus()};return n.jsx($,{label:T,error:y,required:j,layout:A,labelId:N,errorId:I,className:E,children:n.jsx("div",{className:"wim-otp-input-wrapper",children:n.jsx("div",{className:C("wim-otp-input-container",w&&"wim-otp-input-container--disabled"),children:Array.from({length:r}).map((a,e)=>n.jsx("input",{id:e===0?_:void 0,ref:t=>{c.current[e]=t},className:C("wim-otp-input",y&&"wim-otp-input--error",w&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:l[e],onChange:t=>P(t,e),onKeyDown:t=>k(t,e),onPaste:R,disabled:w,"aria-label":q("otp.digit",{index:e+1}),"aria-invalid":!!y,"aria-describedby":I},e))})})})};S.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Basic Inputs/OtpInput",component:S,args:{disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"changed"}}},m={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:"Invalid code",value:"123456"}},i=()=>{const{t:r}=D(F),[o,u]=b.useState("");return n.jsxs("div",{children:[n.jsx(S,{value:o,onChange:u,length:6}),n.jsxs("p",{style:{marginTop:"1rem"},children:[r("story.otp_current_value"),": ",o]}),n.jsx("button",{onClick:()=>u(""),style:{marginTop:"0.5rem"},children:r("story.otp_clear")})]})};i.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: "Invalid code",
    value: "123456"
  }
}`,...v.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [value, setValue] = useState("");
  return <div>
      <OtpInput value={value} onChange={setValue} length={6} />
      <p style={{
      marginTop: "1rem"
    }}>
        {t("story.otp_current_value")}: {value}
      </p>
      <button onClick={() => setValue("")} style={{
      marginTop: "0.5rem"
    }}>
        {t("story.otp_clear")}
      </button>
    </div>;
}`,...i.parameters?.docs?.source}}};const B=["Default","Length6","Disabled","ErrorStatus","Controlled"],W=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:m,Disabled:g,ErrorStatus:v,Length6:f,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{m as D,v as E,f as L,W as O,g as a};
