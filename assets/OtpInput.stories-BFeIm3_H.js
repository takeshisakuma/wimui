import{j as c}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-DEBOWsqM.js";import{c as b}from"./index-x98TZOX1.js";import{u as k}from"./useTranslation-C_sUcuQ0.js";const V=({length:a=6,value:n="",onChange:p,disabled:_=!1,error:D=!1,className:S})=>{const[o,i]=h.useState(Array(a).fill("")),[T,C]=h.useState(n),l=h.useRef([]);if(n!==T){C(n);const r=n.split("").slice(0,a),e=Array(a).fill("").map((t,s)=>r[s]||"");i(e)}const y=r=>{const e=r.join("");p&&p(e)},j=(r,e)=>{const s=r.target.value.slice(-1),m=[...o];m[e]=s,i(m),y(m),s&&e<a-1&&l.current[e+1]?.focus()},I=(r,e)=>{if(r.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",i(t),y(t),l.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",i(t),y(t)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),l.current[e-1]?.focus()):r.key==="ArrowRight"&&e<a-1&&(r.preventDefault(),l.current[e+1]?.focus())},O=r=>{r.preventDefault();const t=r.clipboardData.getData("text").slice(0,a).split(""),s=[...o];t.forEach((E,w)=>{w<a&&(s[w]=E)}),i(s),y(s);const m=Math.min(t.length,a-1);l.current[m]?.focus()};return c.jsx("div",{className:b("wim-otp-input-container",_&&"wim-otp-input-container--disabled",S),children:Array.from({length:a}).map((r,e)=>c.jsx("input",{ref:t=>{l.current[e]=t},className:b("wim-otp-input",D&&"wim-otp-input--error",_&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>j(t,e),onKeyDown:t=>I(t,e),onPaste:O,disabled:_,"aria-label":`Digit ${e+1}`},e))})};V.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Basic Inputs/OtpInput",component:V,argTypes:{onChange:{action:"changed"}}},d={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:!0,value:"123456"}},u=()=>{const{t:a}=k(["docs","common","components"]),[n,p]=h.useState("");return c.jsxs("div",{children:[c.jsx(V,{value:n,onChange:p,length:6}),c.jsxs("p",{style:{marginTop:"1rem"},children:[a("story_otp_current_value"),": ",n]}),c.jsx("button",{onClick:()=>p(""),style:{marginTop:"0.5rem"},children:a("story_otp_clear")})]})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const N=["Default","Length6","Disabled","ErrorStatus","Controlled"],B=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:d,Disabled:g,ErrorStatus:v,Length6:f,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{d as D,v as E,f as L,B as O,g as a};
