import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-Dq24M1Fk.js";import{c as b}from"./index-Dq8OH074.js";const V=({length:r=6,value:n="",onChange:w,disabled:y=!1,error:D=!1,className:S})=>{const[o,p]=v.useState(Array(r).fill("")),[T,_]=v.useState(n),l=v.useRef([]);if(n!==T){_(n);const a=n.split("").slice(0,r),e=Array(r).fill("").map((t,s)=>a[s]||"");p(e)}const h=a=>{const e=a.join("");w&&w(e)},j=(a,e)=>{const s=a.target.value.slice(-1),i=[...o];i[e]=s,p(i),h(i),s&&e<r-1&&l.current[e+1]?.focus()},I=(a,e)=>{if(a.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",p(t),h(t),l.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",p(t),h(t)}}else a.key==="ArrowLeft"&&e>0?(a.preventDefault(),l.current[e-1]?.focus()):a.key==="ArrowRight"&&e<r-1&&(a.preventDefault(),l.current[e+1]?.focus())},O=a=>{a.preventDefault();const t=a.clipboardData.getData("text").slice(0,r).split(""),s=[...o];t.forEach((E,C)=>{C<r&&(s[C]=E)}),p(s),h(s);const i=Math.min(t.length,r-1);l.current[i]?.focus()};return u.jsx("div",{className:b("wim-otp-input-container",y&&"wim-otp-input-container--disabled",S),children:Array.from({length:r}).map((a,e)=>u.jsx("input",{ref:t=>{l.current[e]=t},className:b("wim-otp-input",D&&"wim-otp-input--error",y&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:t=>j(t,e),onKeyDown:t=>I(t,e),onPaste:O,disabled:y,"aria-label":`Digit ${e+1}`},e))})};V.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Component/Basic Inputs/OtpInput",component:V,argTypes:{onChange:{action:"changed"}}},m={args:{length:4}},d={args:{length:6}},f={args:{length:4,disabled:!0,value:"1234"}},g={args:{length:6,error:!0,value:"123456"}},c=()=>{const[r,n]=v.useState("");return u.jsxs("div",{children:[u.jsx(V,{value:r,onChange:n,length:6}),u.jsxs("p",{style:{marginTop:"1rem"},children:["Current Value: ",r]}),u.jsx("button",{onClick:()=>n(""),style:{marginTop:"0.5rem"},children:"Clear"})]})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: "123456"
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <div>\r
            <OtpInput value={value} onChange={setValue} length={6} />\r
            <p style={{
      marginTop: "1rem"
    }}>Current Value: {value}</p>\r
            <button onClick={() => setValue("")} style={{
      marginTop: "0.5rem"
    }}>Clear</button>\r
        </div>;
}`,...c.parameters?.docs?.source}}};const q=["Default","Length6","Disabled","Error","Controlled"],P=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:m,Disabled:f,Error:g,Length6:d,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{m as D,g as E,d as L,P as O,f as a};
