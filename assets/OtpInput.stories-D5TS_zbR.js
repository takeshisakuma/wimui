import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as b,R as M,A as $}from"./iframe-BJM4gxzT.js";import{c as A}from"./index-DYSFET0B.js";import{F as z}from"./FieldTemplate-DqYc206z.js";import{u as F}from"./useTranslation-lqMBbyXx.js";const _=({length:r=6,value:o="",onChange:c,disabled:w=!1,error:y,required:C,label:S,layout:D,className:j,labels:q={}})=>{const{digitAriaLabel:L=t=>`Digit ${t}`}=q,[l,p]=b.useState(Array(r).fill("")),[E,N]=b.useState(o),i=b.useRef([]),T=`wim-otp-input-${M.useId()}`,O=S?`${T}-label`:void 0,I=y?`${T}-error`:void 0;if(o!==E){N(o);const t=o.split("").slice(0,r),e=Array(r).fill("").map((a,s)=>t[s]||"");p(e)}const h=t=>{const e=t.join("");c&&c(e)},R=(t,e)=>{const s=t.target.value.slice(-1),d=[...l];d[e]=s,p(d),h(d),s&&e<r-1&&i.current[e+1]?.focus()},k=(t,e)=>{if(t.key==="Backspace"){if(!l[e]&&e>0){const a=[...l];a[e-1]="",p(a),h(a),i.current[e-1]?.focus()}else if(l[e]){const a=[...l];a[e]="",p(a),h(a)}}else t.key==="ArrowLeft"&&e>0?(t.preventDefault(),i.current[e-1]?.focus()):t.key==="ArrowRight"&&e<r-1&&(t.preventDefault(),i.current[e+1]?.focus())},P=t=>{t.preventDefault();const a=t.clipboardData.getData("text").slice(0,r).split(""),s=[...l];a.forEach((x,V)=>{V<r&&(s[V]=x)}),p(s),h(s);const d=Math.min(a.length,r-1);i.current[d]?.focus()};return n.jsx(z,{label:S,error:y,required:C,layout:D,labelId:O,errorId:I,className:j,children:n.jsx("div",{className:"wim-otp-input-wrapper",children:n.jsx("div",{className:A("wim-otp-input-container",w&&"wim-otp-input-container--disabled"),children:Array.from({length:r}).map((t,e)=>n.jsx("input",{id:e===0?T:void 0,ref:a=>{i.current[e]=a},className:A("wim-otp-input",y&&"wim-otp-input--error",w&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:l[e],onChange:a=>R(a,e),onKeyDown:a=>k(a,e),onPaste:P,disabled:w,"aria-label":L(e+1),"aria-invalid":!!y,"aria-describedby":I},e))})})})};_.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  digitAriaLabel?: (index: number) => string;
}`,signature:{properties:[{key:"digitAriaLabel",value:{name:"signature",type:"function",raw:"(index: number) => string",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"string"}},required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const B={title:"Components/Basic Inputs/OtpInput",component:_,args:{disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"changed"}}},m={args:{length:4}},g={args:{length:6}},f={args:{length:4,disabled:!0,value:"1234"}},v={args:{length:6,error:"Invalid code",value:"123456"}},u=()=>{const{t:r}=F($),[o,c]=b.useState("");return n.jsxs("div",{children:[n.jsx(_,{value:o,onChange:c,length:6}),n.jsxs("p",{style:{marginTop:"1rem"},children:[r("story.otp_current_value"),": ",o]}),n.jsx("button",{onClick:()=>c(""),style:{marginTop:"0.5rem"},children:r("story.otp_clear")})]})};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const K=["Default","Length6","Disabled","ErrorStatus","Controlled"],X=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:m,Disabled:f,ErrorStatus:v,Length6:g,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,v as E,g as L,X as O,f as a};
