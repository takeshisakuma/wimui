import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-fNm2XVWi.js";import{I as S}from"./Input-DzdvyW0G.js";import{L as u}from"./Label-VXfJMAG9.js";const t=({mask:e,maskChar:I="_",value:g,defaultValue:f,onChange:h,...k})=>{const[j,M]=C.useState(f||""),b=g!==void 0,L=b?g:j,_=C.useCallback(n=>{let a="",o=0;const x=n.replace(/[^a-zA-Z0-9]/g,"");let m=0;for(;o<e.length;){const s=e[o];if(s==="9"||s==="a"||s==="*")if(m<x.length){const i=x[m];if(s==="9"&&/[0-9]/.test(i)||s==="a"&&/[a-zA-Z]/.test(i)||s==="*")a+=i,m++;else break}else break;else a+=s;o++}return a},[e]),y=n=>{const a=_(n.target.value);if(b||M(a),h){const o={...n,target:{...n.target,value:a},currentTarget:{...n.currentTarget,value:a}};h(o)}};return r.jsx(S,{...k,value:L,onChange:y,placeholder:k.placeholder||e.replace(/[9a*]/g,I)})};t.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。\r
'9': 数字 (0-9)\r
'a': 英字 (a-z, A-Z)\r
'*': 英数字\r
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const v={title:"Component/Form Inputs/InputMask",component:t,argTypes:{mask:{control:"text",description:"マスクパターン ('9': 数字, 'a': 英字, '*': 英数字)"},maskChar:{control:"text",description:"未入力部分のプレースホルダー文字"}}},l={render:e=>r.jsx(u,{label:"郵便番号",children:r.jsx(t,{...e})}),args:{mask:"999-9999",placeholder:"000-0000"}},c={render:e=>r.jsx(u,{label:"電話番号",children:r.jsx(t,{...e})}),args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},p={render:e=>r.jsx(u,{label:"クレジットカード番号",children:r.jsx(t,{...e})}),args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},d={render:e=>r.jsx(u,{label:"カスタム（英4-数4-英数1）",children:r.jsx(t,{...e})}),args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
