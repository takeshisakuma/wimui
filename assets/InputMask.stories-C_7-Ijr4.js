import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BUrtav60.js";import{I as S}from"./Input-6mgHB_-a.js";import{L as i}from"./Label-B5hYFGA5.js";const n=({mask:e,maskChar:C="_",value:h,defaultValue:I,onChange:k,...b})=>{const[j,M]=g.useState(I||""),f=h!==void 0,L=f?h:j;g.useRef(null);const _=g.useCallback(s=>{let t="",o=0;s.split("").filter((a,u)=>!0);const x=s.replace(/[^a-zA-Z0-9]/g,"");let m=0;for(;o<e.length;){const a=e[o];if(a==="9"||a==="a"||a==="*")if(m<x.length){const u=x[m];if(a==="9"&&/[0-9]/.test(u)||a==="a"&&/[a-zA-Z]/.test(u)||a==="*")t+=u,m++;else break}else break;else t+=a;o++}return t},[e]),y=s=>{const t=_(s.target.value);if(f||M(t),k){const o={...s,target:{...s.target,value:t},currentTarget:{...s.currentTarget,value:t}};k(o)}};return r.jsx(S,{...b,value:L,onChange:y,placeholder:b.placeholder||e.replace(/[9a*]/g,C)})};n.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。\r
'9': 数字 (0-9)\r
'a': 英字 (a-z, A-Z)\r
'*': 英数字\r
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const v={title:"Component/Form Inputs/InputMask",component:n,argTypes:{mask:{control:"text",description:"マスクパターン ('9': 数字, 'a': 英字, '*': 英数字)"},maskChar:{control:"text",description:"未入力部分のプレースホルダー文字"}}},l={render:e=>r.jsx(i,{label:"郵便番号",children:r.jsx(n,{...e})}),args:{mask:"999-9999",placeholder:"000-0000"}},c={render:e=>r.jsx(i,{label:"電話番号",children:r.jsx(n,{...e})}),args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},p={render:e=>r.jsx(i,{label:"クレジットカード番号",children:r.jsx(n,{...e})}),args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},d={render:e=>r.jsx(i,{label:"カスタム（英4-数4-英数1）",children:r.jsx(n,{...e})}),args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const T=["ZipCode","Phone","CreditCard","CustomMask"],E=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:p,CustomMask:d,Phone:c,ZipCode:l,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{p as C,E as I,c as P,l as Z,d as a};
