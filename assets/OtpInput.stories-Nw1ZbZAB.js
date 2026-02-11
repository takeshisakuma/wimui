import{j as c}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-hbRdK1HV.js";import{P as u}from"./index-DI8fBNh8.js";const b=({length:r=6,value:n="",onChange:C,disabled:V=!1,error:D=!1,className:T=""})=>{const[o,i]=v.useState(Array(r).fill("")),[j,S]=v.useState(n),l=v.useRef([]);if(n!==j){S(n);const a=n.split("").slice(0,r),e=Array(r).fill("").map((t,s)=>a[s]||"");i(e)}const h=a=>{const e=a.join("");C&&C(e)},_=(a,e)=>{const s=a.target.value.slice(-1),m=[...o];m[e]=s,i(m),h(m),s&&e<r-1&&l.current[e+1]?.focus()},I=(a,e)=>{if(a.key==="Backspace"){if(!o[e]&&e>0){const t=[...o];t[e-1]="",i(t),h(t),l.current[e-1]?.focus()}else if(o[e]){const t=[...o];t[e]="",i(t),h(t)}}else a.key==="ArrowLeft"&&e>0?(a.preventDefault(),l.current[e-1]?.focus()):a.key==="ArrowRight"&&e<r-1&&(a.preventDefault(),l.current[e+1]?.focus())},O=a=>{a.preventDefault();const t=a.clipboardData.getData("text").slice(0,r).split(""),s=[...o];t.forEach((E,w)=>{w<r&&(s[w]=E)}),i(s),h(s);const m=Math.min(t.length,r-1);l.current[m]?.focus()};return c.jsx("div",{className:["wim-otp-input-container",V?"wim-otp-input-container--disabled":"",T].filter(Boolean).join(" "),children:Array.from({length:r}).map((a,e)=>c.jsx("input",{ref:t=>{l.current[e]=t},className:["wim-otp-input",D?"wim-otp-input--error":"",V?"wim-otp-input--disabled":""].filter(Boolean).join(" "),type:"text",maxLength:1,value:o[e],onChange:t=>_(t,e),onKeyDown:t=>I(t,e),onPaste:O,disabled:V,"aria-label":`Digit ${e+1}`},e))})};b.propTypes={length:u.number,value:u.string,onChange:u.func,disabled:u.bool,error:u.bool,className:u.string};b.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"入力桁数。デフォルトは6。",defaultValue:{value:"6",computed:!1},type:{name:"number"}},value:{required:!1,tsType:{name:"string"},description:"現在の値。",defaultValue:{value:'""',computed:!1},type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"値が変更された時に呼ばれるコールバック。結合された文字列を返します。",type:{name:"func"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"エラー状態フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const P={title:"Component/Form Inputs/OtpInput",component:b,argTypes:{onChange:{action:"changed"}}},d={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},y={args:{length:6,error:!0,value:"123456"}},p=()=>{const[r,n]=v.useState("");return c.jsxs("div",{children:[c.jsx(b,{value:r,onChange:n,length:6}),c.jsxs("p",{style:{marginTop:"1rem"},children:["Current Value: ",r]}),c.jsx("button",{onClick:()=>n(""),style:{marginTop:"0.5rem"},children:"Clear"})]})};p.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: "123456"
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const k=["Default","Length6","Disabled","Error","Controlled"],L=Object.freeze(Object.defineProperty({__proto__:null,Controlled:p,Default:d,Disabled:g,Error:y,Length6:f,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{d as D,y as E,f as L,L as O,g as a};
