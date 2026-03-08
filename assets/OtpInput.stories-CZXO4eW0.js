import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-c-ynOOH6.js";import{c as b}from"./index-CYDtE1TD.js";import{u as S}from"./useTranslation-BS4yh-5V.js";const V=({length:s=6,value:n="",onChange:p,disabled:_=!1,error:T=!1,className:D})=>{const{t:C}=S(["components"]),[o,i]=h.useState(Array(s).fill("")),[j,I]=h.useState(n),c=h.useRef([]);if(n!==j){I(n);const r=n.split("").slice(0,s),e=Array(s).fill("").map((t,a)=>r[a]||"");i(e)}const y=r=>{const e=r.join("");p&&p(e)},O=(r,e)=>{const a=r.target.value.slice(-1),m=[...o];m[e]=a,i(m),y(m),a&&e<s-1&&c.current[e+1]?.focus()},E=(r,e)=>{if(r.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",i(t),y(t),c.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",i(t),y(t)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),c.current[e-1]?.focus()):r.key==="ArrowRight"&&e<s-1&&(r.preventDefault(),c.current[e+1]?.focus())},k=r=>{r.preventDefault();const t=r.clipboardData.getData("text").slice(0,s).split(""),a=[...o];t.forEach((q,w)=>{w<s&&(a[w]=q)}),i(a),y(a);const m=Math.min(t.length,s-1);c.current[m]?.focus()};return l.jsx("div",{className:b("wim-otp-input-container",_&&"wim-otp-input-container--disabled",D),children:Array.from({length:s}).map((r,e)=>l.jsx("input",{ref:t=>{c.current[e]=t},className:b("wim-otp-input",T&&"wim-otp-input--error",_&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>O(t,e),onKeyDown:t=>E(t,e),onPaste:k,disabled:_,"aria-label":C("otp_digit",{index:e+1})},e))})};V.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Basic Inputs/OtpInput",component:V,argTypes:{onChange:{action:"changed"}}},d={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:!0,value:"123456"}},u=()=>{const{t:s}=S(["docs","common","components"]),[n,p]=h.useState("");return l.jsxs("div",{children:[l.jsx(V,{value:n,onChange:p,length:6}),l.jsxs("p",{style:{marginTop:"1rem"},children:[s("story_otp_current_value"),": ",n]}),l.jsx("button",{onClick:()=>p(""),style:{marginTop:"0.5rem"},children:s("story_otp_clear")})]})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const A=["Default","Length6","Disabled","ErrorStatus","Controlled"],K=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:d,Disabled:g,ErrorStatus:v,Length6:f,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{d as D,v as E,f as L,K as O,g as a};
