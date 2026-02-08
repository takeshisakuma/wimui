import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-CycZabT0.js";import{P as x}from"./index-BuljsEsS.js";import{I as T}from"./Input-DWjMKOBP.js";import{L as m}from"./Label-Ba0jss4L.js";const n=({mask:e,maskChar:I="_",value:h,defaultValue:j,onChange:k,...b})=>{const[y,M]=g.useState(j||""),f=h!==void 0,L=f?h:y;g.useRef(null);const _=g.useCallback(s=>{let t="",o=0;s.split("").filter((a,i)=>!0);const C=s.replace(/[^a-zA-Z0-9]/g,"");let u=0;for(;o<e.length;){const a=e[o];if(a==="9"||a==="a"||a==="*")if(u<C.length){const i=C[u];if(a==="9"&&/[0-9]/.test(i)||a==="a"&&/[a-zA-Z]/.test(i)||a==="*")t+=i,u++;else break}else break;else t+=a;o++}return t},[e]),S=s=>{const t=_(s.target.value);if(f||M(t),k){const o={...s,target:{...s.target,value:t},currentTarget:{...s.currentTarget,value:t}};k(o)}};return r.jsx(T,{...b,value:L,onChange:S,placeholder:b.placeholder||e.replace(/[9a*]/g,I)})};n.propTypes={mask:x.string.isRequired,maskChar:x.string};n.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。\r
'9': 数字 (0-9)\r
'a': 英字 (a-z, A-Z)\r
'*': 英数字\r
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:`マスクパターン。 '9'（数字）、'a'（英字）、'*'（英数字）を使用。\r
例: "999-9999", "(999) 999-9999"`,type:{name:"string"}},maskChar:{required:!1,tsType:{name:"string"},description:"未入力部分に表示する文字。",defaultValue:{value:'"_"',computed:!1},type:{name:"string"}}}};const v={title:"Component/Form Inputs/InputMask",component:n,argTypes:{mask:{control:"text",description:"マスクパターン ('9': 数字, 'a': 英字, '*': 英数字)"},maskChar:{control:"text",description:"未入力部分のプレースホルダー文字"}}},l={render:e=>r.jsx(m,{label:"郵便番号",children:r.jsx(n,{...e})}),args:{mask:"999-9999",placeholder:"000-0000"}},c={render:e=>r.jsx(m,{label:"電話番号",children:r.jsx(n,{...e})}),args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},p={render:e=>r.jsx(m,{label:"クレジットカード番号",children:r.jsx(n,{...e})}),args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},d={render:e=>r.jsx(m,{label:"カスタム（英4-数4-英数1）",children:r.jsx(n,{...e})}),args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="郵便番号">\r
            <InputMask {...args} />\r
        </Label>,
  args: {
    mask: "999-9999",
    placeholder: "000-0000"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="電話番号">\r
            <InputMask {...args} />\r
        </Label>,
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="クレジットカード番号">\r
            <InputMask {...args} />\r
        </Label>,
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="カスタム（英4-数4-英数1）">\r
            <InputMask {...args} />\r
        </Label>,
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...d.parameters?.docs?.source}}};const P=["ZipCode","Phone","CreditCard","CustomMask"],q=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:p,CustomMask:d,Phone:c,ZipCode:l,__namedExportsOrder:P,default:v},Symbol.toStringTag,{value:"Module"}));export{p as C,q as I,c as P,l as Z,d as a};
