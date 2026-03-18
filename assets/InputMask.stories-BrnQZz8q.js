import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as L}from"./iframe-CzzNuQsS.js";import{I as j}from"./Input-JB1HZW7v.js";import{L as m}from"./FieldTemplate-B9j8EmGe.js";import{A as g}from"./i18nConstants-BpHxieg5.js";import{u as k}from"./useTranslation-CcD7M1NG.js";const l=({mask:a,maskChar:r="_",value:e,defaultValue:x,onChange:f,...b})=>{const[M,S]=L.useState(x||""),C=e!==void 0,I=C?e:M,y=L.useCallback(o=>{let t="",c=0;const A=o.replace(/[^a-zA-Z0-9]/g,"");let h=0;for(;c<a.length;){const s=a[c];if(s==="9"||s==="a"||s==="*")if(h<A.length){const _=A[h];if(s==="9"&&/[0-9]/.test(_)||s==="a"&&/[a-zA-Z]/.test(_)||s==="*")t+=_,h++;else break}else break;else t+=s;c++}return t},[a]),E=o=>{const t=y(o.target.value);if(C||S(t),f){const c={...o,target:{...o.target,value:t},currentTarget:{...o.currentTarget,value:t}};f(c)}};return n.jsx(j,{...b,value:I,onChange:E,placeholder:b.placeholder||a.replace(/[9a*]/g,r)})};l.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
'9': 数字 (0-9)
'a': 英字 (a-z, A-Z)
'*': 英数字
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const T={title:"Components/Basic Inputs/InputMask",component:l,argTypes:{mask:{control:"text",description:"Mask pattern ('9': number, 'a': letter, '*': alphanumeric)"},maskChar:{control:"text",description:"Placeholder character for unentered parts"}}},u={render:function(r){const{t:e}=k(g);return n.jsx(m,{label:e("story_inputmask_zip"),children:n.jsx(l,{...r})})},args:{mask:"999-9999",placeholder:"000-0000"}},p={render:function(r){const{t:e}=k(g);return n.jsx(m,{label:e("story_inputmask_phone"),children:n.jsx(l,{...r})})},args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},i={render:function(r){const{t:e}=k(g);return n.jsx(m,{label:e("story_inputmask_credit"),children:n.jsx(l,{...r})})},args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},d={render:function(r){const{t:e}=k(g);return n.jsx(m,{label:e("story_inputmask_custom"),children:n.jsx(l,{...r})})},args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_inputmask_zip")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "999-9999",
    placeholder: "000-0000"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_inputmask_phone")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_inputmask_credit")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_inputmask_custom")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...d.parameters?.docs?.source}}};const P=["ZipCode","Phone","CreditCard","CustomMask"],w=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:i,CustomMask:d,Phone:p,ZipCode:u,__namedExportsOrder:P,default:T},Symbol.toStringTag,{value:"Module"}));export{i as C,w as I,p as P,u as Z,d as a};
