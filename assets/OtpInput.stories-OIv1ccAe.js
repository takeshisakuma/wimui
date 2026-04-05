import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as M,A as $}from"./iframe-DKMOQHZ-.js";import{c as C}from"./index-CGUrc0iP.js";import{F as z}from"./FieldTemplate-Be00S5hE.js";import{u as F}from"./useTranslation-CMEx9zdK.js";const _=({length:t=6,value:o="",onChange:u,disabled:w=!1,error:y,required:A,label:S,layout:D,className:j,labels:q={}})=>{const{digitAriaLabel:L=a=>`Digit ${a}`}=q,[l,p]=h.useState(Array(t).fill("")),[E,N]=h.useState(o),i=h.useRef([]),T=`wim-otp-input-${M.useId()}`,O=S?`${T}-label`:void 0,I=y?`${T}-error`:void 0;if(o!==E){N(o);const a=o.split("").slice(0,t),e=Array(t).fill("").map((r,s)=>a[s]||"");p(e)}const b=a=>{const e=a.join("");u&&u(e)},R=(a,e)=>{const s=a.target.value.slice(-1),d=[...l];d[e]=s,p(d),b(d),s&&e<t-1&&i.current[e+1]?.focus()},k=(a,e)=>{if(a.key==="Backspace"){if(!l[e]&&e>0){const r=[...l];r[e-1]="",p(r),b(r),i.current[e-1]?.focus()}else if(l[e]){const r=[...l];r[e]="",p(r),b(r)}}else a.key==="ArrowLeft"&&e>0?(a.preventDefault(),i.current[e-1]?.focus()):a.key==="ArrowRight"&&e<t-1&&(a.preventDefault(),i.current[e+1]?.focus())},x=a=>{a.preventDefault();const r=a.clipboardData.getData("text").slice(0,t).split(""),s=[...l];r.forEach((P,V)=>{V<t&&(s[V]=P)}),p(s),b(s);const d=Math.min(r.length,t-1);i.current[d]?.focus()};return n.jsx(z,{label:S,error:y,required:A,layout:D,labelId:O,errorId:I,className:j,children:n.jsx("div",{className:"wim-otp-input-wrapper",children:n.jsx("div",{className:C("wim-otp-input-container",w&&"wim-otp-input-container--disabled"),children:Array.from({length:t}).map((a,e)=>n.jsx("input",{id:e===0?T:void 0,ref:r=>{i.current[e]=r},className:C("wim-otp-input",y&&"wim-otp-input--error",w&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:l[e],onChange:r=>R(r,e),onKeyDown:r=>k(r,e),onPaste:x,disabled:w,"aria-label":L(e+1),"aria-invalid":!!y,"aria-describedby":I},e))})})})};_.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  digitAriaLabel?: (index: number) => string;
}`,signature:{properties:[{key:"digitAriaLabel",value:{name:"signature",type:"function",raw:"(index: number) => string",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"string"}},required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const B={title:"Components/Basic Inputs/OtpInput",component:_,args:{disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"changed"}}},m={args:{length:4}},g={args:{length:6}},f={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:"Invalid code",value:"123456"}},c=()=>{const{t}=F($),[o,u]=h.useState("");return n.jsxs("div",{children:[n.jsx(_,{value:o,onChange:u,length:6}),n.jsxs("p",{style:{marginTop:"1rem"},children:[t("story.otp_current_value"),": ",o]}),n.jsx("button",{onClick:()=>u(""),style:{marginTop:"0.5rem",color:"var(--wim-color-text-primary)",backgroundColor:"var(--wim-color-bg-component)",border:"1px solid var(--wim-color-border)"},children:t("story.otp_clear")})]})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
      marginTop: "0.5rem",
      color: "var(--wim-color-text-primary)",
      backgroundColor: "var(--wim-color-bg-component)",
      border: "1px solid var(--wim-color-border)"
    }}>
        {t("story.otp_clear")}
      </button>
    </div>;
}`,...c.parameters?.docs?.source}}};const K=["Default","Length6","Disabled","ErrorStatus","Controlled"],X=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:m,Disabled:f,ErrorStatus:v,Length6:g,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,v as E,g as L,X as O,f as a};
