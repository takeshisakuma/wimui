import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-CchWMc2Z.js";import{P as l}from"./index-BMB_0ZU1.js";import"./preload-helper-PPVm8Dsz.js";const b=({length:t=6,value:c="",onChange:C,disabled:V=!1,error:D=!1,className:T=""})=>{const[n,p]=v.useState(Array(t).fill("")),o=v.useRef([]);v.useEffect(()=>{const r=c.split("").slice(0,t),e=Array(t).fill("").map((a,s)=>r[s]||"");p(e)},[c,t]);const d=r=>{const e=r.join("");C&&C(e)},j=(r,e)=>{const s=r.target.value.slice(-1),i=[...n];i[e]=s,p(i),d(i),s&&e<t-1&&o.current[e+1]?.focus()},I=(r,e)=>{if(r.key==="Backspace"){if(!n[e]&&e>0){const a=[...n];a[e-1]="",p(a),d(a),o.current[e-1]?.focus()}else if(n[e]){const a=[...n];a[e]="",p(a),d(a)}}else r.key==="ArrowLeft"&&e>0?(r.preventDefault(),o.current[e-1]?.focus()):r.key==="ArrowRight"&&e<t-1&&(r.preventDefault(),o.current[e+1]?.focus())},S=r=>{r.preventDefault();const a=r.clipboardData.getData("text").slice(0,t).split(""),s=[...n];a.forEach((_,w)=>{w<t&&(s[w]=_)}),p(s),d(s);const i=Math.min(a.length,t-1);o.current[i]?.focus()};return u.jsx("div",{className:["wim-otp-input-container",V?"wim-otp-input-container--disabled":"",T].filter(Boolean).join(" "),children:Array.from({length:t}).map((r,e)=>u.jsx("input",{ref:a=>{o.current[e]=a},className:["wim-otp-input",D?"wim-otp-input--error":"",V?"wim-otp-input--disabled":""].filter(Boolean).join(" "),type:"text",maxLength:1,value:n[e],onChange:a=>j(a,e),onKeyDown:a=>I(a,e),onPaste:S,disabled:V,"aria-label":`Digit ${e+1}`},e))})};b.propTypes={length:l.number,value:l.string,onChange:l.func,disabled:l.bool,error:l.bool,className:l.string};b.__docgenInfo={description:"OTP（ワンタイムパスワード）入力用コンポーネント。",methods:[],displayName:"OtpInput",props:{length:{required:!1,tsType:{name:"number"},description:"入力桁数。デフォルトは6。",defaultValue:{value:"6",computed:!1},type:{name:"number"}},value:{required:!1,tsType:{name:"string"},description:"現在の値。",defaultValue:{value:'""',computed:!1},type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"値が変更された時に呼ばれるコールバック。結合された文字列を返します。",type:{name:"func"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効化フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"エラー状態フラグ。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const O={title:"Component/Forms/OtpInput",component:b,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},f={args:{length:4}},g={args:{length:6}},y={args:{length:4,disabled:!0,value:"1234"}},h={args:{length:6,error:!0,value:"123456"}},m=()=>{const[t,c]=v.useState("");return u.jsxs("div",{children:[u.jsx(b,{value:t,onChange:c,length:6}),u.jsxs("p",{style:{marginTop:"1rem"},children:["Current Value: ",t]}),u.jsx("button",{onClick:()=>c(""),style:{marginTop:"0.5rem"},children:"Clear"})]})};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: "123456"
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const A=["Default","Length6","Disabled","Error","Controlled"];export{m as Controlled,f as Default,y as Disabled,h as Error,g as Length6,A as __namedExportsOrder,O as default};
