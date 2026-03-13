import{j as c}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as F}from"./iframe-CKKDYfjM.js";import{c as D}from"./index-K_u7tV9x.js";import{F as $}from"./FieldTemplate-Sq91j-YR.js";import{u as C}from"./useTranslation-D80Uyf_x.js";const T=({length:a=6,value:n="",onChange:u,disabled:b=!1,error:y,required:j,label:I,layout:q,className:O})=>{const{t:E}=C(["components"]),[o,p]=h.useState(Array(a).fill("")),[k,N]=h.useState(n),l=h.useRef([]),w=`wim-otp-input-${F.useId()}`,R=I?`${w}-label`:void 0,V=y?`${w}-error`:void 0;if(n!==k){N(n);const s=n.split("").slice(0,a),e=Array(a).fill("").map((t,r)=>s[r]||"");p(e)}const _=s=>{const e=s.join("");u&&u(e)},A=(s,e)=>{const r=s.target.value.slice(-1),d=[...o];d[e]=r,p(d),_(d),r&&e<a-1&&l.current[e+1]?.focus()},L=(s,e)=>{if(s.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",p(t),_(t),l.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",p(t),_(t)}}else s.key==="ArrowLeft"&&e>0?(s.preventDefault(),l.current[e-1]?.focus()):s.key==="ArrowRight"&&e<a-1&&(s.preventDefault(),l.current[e+1]?.focus())},P=s=>{s.preventDefault();const t=s.clipboardData.getData("text").slice(0,a).split(""),r=[...o];t.forEach((z,S)=>{S<a&&(r[S]=z)}),p(r),_(r);const d=Math.min(t.length,a-1);l.current[d]?.focus()};return c.jsx($,{label:I,error:y,required:j,layout:q,labelId:R,errorId:V,className:O,children:c.jsx("div",{className:D("wim-otp-input-container",b&&"wim-otp-input-container--disabled"),children:Array.from({length:a}).map((s,e)=>c.jsx("input",{id:e===0?w:void 0,ref:t=>{l.current[e]=t},className:D("wim-otp-input",y&&"wim-otp-input--error",b&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>A(t,e),onKeyDown:t=>L(t,e),onPaste:P,disabled:b,"aria-label":E("otp_digit",{index:e+1}),"aria-invalid":!!y,"aria-describedby":V},e))})})};T.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Basic Inputs/OtpInput",component:T,argTypes:{onChange:{action:"changed"}}},m={args:{length:4}},g={args:{length:6}},f={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:"Invalid code",value:"123456"}},i=()=>{const{t:a}=C(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[n,u]=h.useState("");return c.jsxs("div",{children:[c.jsx(T,{value:n,onChange:u,length:6}),c.jsxs("p",{style:{marginTop:"1rem"},children:[a("story_otp_current_value"),": ",n]}),c.jsx("button",{onClick:()=>u(""),style:{marginTop:"0.5rem"},children:a("story_otp_clear")})]})};i.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: "Invalid code",
    value: "123456"
  }
}`,...v.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};const K=["Default","Length6","Disabled","ErrorStatus","Controlled"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:m,Disabled:f,ErrorStatus:v,Length6:g,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,v as E,g as L,U as O,f as a};
