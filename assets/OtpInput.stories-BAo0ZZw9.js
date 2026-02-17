import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-Dqp4-85g.js";import{c as b}from"./index-CVPgLxny.js";const V=({length:a=6,value:n="",onChange:w,disabled:y=!1,error:D=!1,className:S})=>{const[o,p]=v.useState(Array(a).fill("")),[T,_]=v.useState(n),l=v.useRef([]);if(n!==T){_(n);const t=n.split("").slice(0,a),e=Array(a).fill("").map((r,s)=>t[s]||"");p(e)}const h=t=>{const e=t.join("");w&&w(e)},j=(t,e)=>{const s=t.target.value.slice(-1),i=[...o];i[e]=s,p(i),h(i),s&&e<a-1&&l.current[e+1]?.focus()},I=(t,e)=>{if(t.key==="Backspace"){if(!o[e]&&e>0){const r=[...o];r[e-1]="",p(r),h(r),l.current[e-1]?.focus()}else if(o[e]){const r=[...o];r[e]="",p(r),h(r)}}else t.key==="ArrowLeft"&&e>0?(t.preventDefault(),l.current[e-1]?.focus()):t.key==="ArrowRight"&&e<a-1&&(t.preventDefault(),l.current[e+1]?.focus())},O=t=>{t.preventDefault();const r=t.clipboardData.getData("text").slice(0,a).split(""),s=[...o];r.forEach((E,C)=>{C<a&&(s[C]=E)}),p(s),h(s);const i=Math.min(r.length,a-1);l.current[i]?.focus()};return u.jsx("div",{className:b("wim-otp-input-container",y&&"wim-otp-input-container--disabled",S),children:Array.from({length:a}).map((t,e)=>u.jsx("input",{ref:r=>{l.current[e]=r},className:b("wim-otp-input",D&&"wim-otp-input--error",y&&"wim-otp-input--disabled"),type:"text",maxLength:1,value:o[e],onChange:r=>j(r,e),onKeyDown:r=>I(r,e),onPaste:O,disabled:y,"aria-label":`Digit ${e+1}`},e))})};V.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Component/Form Inputs/OtpInput",component:V,argTypes:{onChange:{action:"changed"}}},m={args:{length:4}},d={args:{length:6}},f={args:{length:4,disabled:!0,value:"1234"}},g={args:{length:6,error:!0,value:"123456"}},c=()=>{const[a,n]=v.useState("");return u.jsxs("div",{children:[u.jsx(V,{value:a,onChange:n,length:6}),u.jsxs("p",{style:{marginTop:"1rem"},children:["Current Value: ",a]}),u.jsx("button",{onClick:()=>n(""),style:{marginTop:"0.5rem"},children:"Clear"})]})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
