import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as _,R as F}from"./iframe-SL2HqV3D.js";import{c as D}from"./index-30w8ikAG.js";import{F as $}from"./FieldTemplate-DewR4Q5O.js";import{u as C}from"./useTranslation-ZF4WB21B.js";const T=({length:a=6,value:n="",onChange:i,disabled:b=!1,error:y,required:j,label:V,layout:q,className:O})=>{const{t:E}=C(["components"]),[o,p]=_.useState(Array(a).fill("")),[k,N]=_.useState(n),c=_.useRef([]),w=`wim-otp-input-${F.useId()}`,R=V?`${w}-label`:void 0,I=y?`${w}-error`:void 0;if(n!==k){N(n);const r=n.split("").slice(0,a),e=Array(a).fill("").map((t,s)=>r[s]||"");p(e)}const h=r=>{const e=r.join("");i&&i(e)},A=(r,e)=>{const s=r.target.value.slice(-1),m=[...o];m[e]=s,p(m),h(m),s&&e<a-1&&c.current[e+1]?.focus()},L=(r,e)=>{if(r.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",p(t),h(t),c.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",p(t),h(t)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),c.current[e-1]?.focus()):r.key==="ArrowRight"&&e<a-1&&(r.preventDefault(),c.current[e+1]?.focus())},P=r=>{r.preventDefault();const t=r.clipboardData.getData("text").slice(0,a).split(""),s=[...o];t.forEach((z,S)=>{S<a&&(s[S]=z)}),p(s),h(s);const m=Math.min(t.length,a-1);c.current[m]?.focus()};return l.jsx($,{label:V,error:y,required:j,layout:q,labelId:R,errorId:I,className:O,children:l.jsx("div",{className:D("wim-otp-input-container",b&&"wim-otp-input-container--disabled"),children:Array.from({length:a}).map((r,e)=>l.jsx("input",{id:e===0?w:void 0,ref:t=>{c.current[e]=t},className:D("wim-otp-input",y&&"wim-otp-input--error",b&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>A(t,e),onKeyDown:t=>L(t,e),onPaste:P,disabled:b,"aria-label":E("otp_digit",{index:e+1}),"aria-invalid":!!y,"aria-describedby":I},e))})})};T.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Basic Inputs/OtpInput",component:T,argTypes:{onChange:{action:"changed"}}},d={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:!0,value:"123456"}},u=()=>{const{t:a}=C(["docs","common","components"]),[n,i]=_.useState("");return l.jsxs("div",{children:[l.jsx(T,{value:n,onChange:i,length:6}),l.jsxs("p",{style:{marginTop:"1rem"},children:[a("story_otp_current_value"),": ",n]}),l.jsx("button",{onClick:()=>i(""),style:{marginTop:"0.5rem"},children:a("story_otp_clear")})]})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    error: true,
    value: "123456"
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};const K=["Default","Length6","Disabled","ErrorStatus","Controlled"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:d,Disabled:g,ErrorStatus:v,Length6:f,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{d as D,v as E,f as L,U as O,g as a};
