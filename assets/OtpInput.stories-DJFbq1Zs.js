import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-B04ys94s.js";import{P as l}from"./index-44n1a-DB.js";const b=({length:t=6,value:p="",onChange:C,disabled:V=!1,error:D=!1,className:T=""})=>{const[n,i]=h.useState(Array(t).fill("")),o=h.useRef([]);h.useEffect(()=>{const r=p.split("").slice(0,t),e=Array(t).fill("").map((a,s)=>r[s]||"");i(e)},[p,t]);const v=r=>{const e=r.join("");C&&C(e)},j=(r,e)=>{const s=r.target.value.slice(-1),m=[...n];m[e]=s,i(m),v(m),s&&e<t-1&&o.current[e+1]?.focus()},S=(r,e)=>{if(r.key==="Backspace"){if(!n[e]&&e>0){const a=[...n];a[e-1]="",i(a),v(a),o.current[e-1]?.focus()}else if(n[e]){const a=[...n];a[e]="",i(a),v(a)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),o.current[e-1]?.focus()):r.key==="ArrowRight"&&e<t-1&&(r.preventDefault(),o.current[e+1]?.focus())},_=r=>{r.preventDefault();const a=r.clipboardData.getData("text").slice(0,t).split(""),s=[...n];a.forEach((I,w)=>{w<t&&(s[w]=I)}),i(s),v(s);const m=Math.min(a.length,t-1);o.current[m]?.focus()};return u.jsx("div",{className:["wim-otp-input-container",V?"wim-otp-input-container--disabled":"",T].filter(Boolean).join(" "),children:Array.from({length:t}).map((r,e)=>u.jsx("input",{ref:a=>{o.current[e]=a},className:["wim-otp-input",D?"wim-otp-input--error":"",V?"wim-otp-input--disabled":""].filter(Boolean).join(" "),type:"text",maxLength:1,value:n[e],onChange:a=>j(a,e),onKeyDown:a=>S(a,e),onPaste:_,disabled:V,"aria-label":`Digit ${e+1}`},e))})};b.propTypes={length:l.number,value:l.string,onChange:l.func,disabled:l.bool,error:l.bool,className:l.string};b.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"入力桁数。デフォルトは6。",defaultValue:{value:"6",computed:!1},type:{name:"number"}},value:{required:!1,tsType:{name:"string"},description:"現在の値。",defaultValue:{value:'""',computed:!1},type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"値が変更された時に呼ばれるコールバック。結合された文字列を返します。",type:{name:"func"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"エラー状態フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const O={title:"Component/Forms/OtpInput",component:b,argTypes:{onChange:{action:"changed"}}},d={args:{length:4}},f={args:{length:6}},g={args:{length:4,disabled:!0,value:"1234"}},y={args:{length:6,error:!0,value:"123456"}},c=()=>{const[t,p]=h.useState("");return u.jsxs("div",{children:[u.jsx(b,{value:t,onChange:p,length:6}),u.jsxs("p",{style:{marginTop:"1rem"},children:["Current Value: ",t]}),u.jsx("button",{onClick:()=>p(""),style:{marginTop:"0.5rem"},children:"Clear"})]})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const E=["Default","Length6","Disabled","Error","Controlled"],P=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:d,Disabled:g,Error:y,Length6:f,__namedExportsOrder:E,default:O},Symbol.toStringTag,{value:"Module"}));export{d as D,y as E,f as L,P as O,g as a};
