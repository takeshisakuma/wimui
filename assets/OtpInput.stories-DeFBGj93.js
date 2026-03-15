import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as _,R as z}from"./iframe-Dqv4ZIoz.js";import{c as C}from"./index-COgXasq6.js";import{F}from"./FieldTemplate-ChInm0BR.js";import{u as D}from"./useTranslation-7X4DMM5t.js";import{A as $}from"./i18nConstants-BpHxieg5.js";const S=({length:a=6,value:n="",onChange:u,disabled:b=!1,error:y,required:j,label:T,layout:A,className:E})=>{const{t:q}=D(["components"]),[o,p]=_.useState(Array(a).fill("")),[O,L]=_.useState(n),c=_.useRef([]),w=`wim-otp-input-${z.useId()}`,N=T?`${w}-label`:void 0,I=y?`${w}-error`:void 0;if(n!==O){L(n);const r=n.split("").slice(0,a),e=Array(a).fill("").map((t,s)=>r[s]||"");p(e)}const h=r=>{const e=r.join("");u&&u(e)},P=(r,e)=>{const s=r.target.value.slice(-1),d=[...o];d[e]=s,p(d),h(d),s&&e<a-1&&c.current[e+1]?.focus()},k=(r,e)=>{if(r.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",p(t),h(t),c.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",p(t),h(t)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),c.current[e-1]?.focus()):r.key==="ArrowRight"&&e<a-1&&(r.preventDefault(),c.current[e+1]?.focus())},R=r=>{r.preventDefault();const t=r.clipboardData.getData("text").slice(0,a).split(""),s=[...o];t.forEach((M,V)=>{V<a&&(s[V]=M)}),p(s),h(s);const d=Math.min(t.length,a-1);c.current[d]?.focus()};return l.jsx(F,{label:T,error:y,required:j,layout:A,labelId:N,errorId:I,className:E,children:l.jsx("div",{className:C("wim-otp-input-container",b&&"wim-otp-input-container--disabled"),children:Array.from({length:a}).map((r,e)=>l.jsx("input",{id:e===0?w:void 0,ref:t=>{c.current[e]=t},className:C("wim-otp-input",y&&"wim-otp-input--error",b&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>P(t,e),onKeyDown:t=>k(t,e),onPaste:R,disabled:b,"aria-label":q("otp_digit",{index:e+1}),"aria-invalid":!!y,"aria-describedby":I},e))})})};S.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Basic Inputs/OtpInput",component:S,argTypes:{onChange:{action:"changed"}}},m={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:"Invalid code",value:"123456"}},i=()=>{const{t:a}=D($),[n,u]=_.useState("");return l.jsxs("div",{children:[l.jsx(S,{value:n,onChange:u,length:6}),l.jsxs("p",{style:{marginTop:"1rem"},children:[a("story_otp_current_value"),": ",n]}),l.jsx("button",{onClick:()=>u(""),style:{marginTop:"0.5rem"},children:a("story_otp_clear")})]})};i.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  return <div>\r
      <OtpInput value={value} onChange={setValue} length={6} />\r
      <p style={{
      marginTop: "1rem"
    }}>\r
        {t("story_otp_current_value")}: {value}\r
      </p>\r
      <button onClick={() => setValue("")} style={{
      marginTop: "0.5rem"
    }}>\r
        {t("story_otp_clear")}\r
      </button>\r
    </div>;
}`,...i.parameters?.docs?.source}}};const K=["Default","Length6","Disabled","ErrorStatus","Controlled"],X=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:m,Disabled:g,ErrorStatus:v,Length6:f,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,v as E,f as L,X as O,g as a};
