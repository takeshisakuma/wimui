import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as L,A as m}from"./iframe-Cm7axuZH.js";import{I as j}from"./Input-CQyi56Pb.js";import{L as g}from"./FieldTemplate-BptL9gjC.js";import{u as k}from"./useTranslation-NKv2iRzU.js";const l=({mask:n,maskChar:r="_",value:e,defaultValue:x,onChange:f,...C})=>{const[M,S]=L.useState(x||""),_=e!==void 0,I=_?e:M,y=L.useCallback(o=>{let t="",c=0;const A=o.replace(/[^a-zA-Z0-9]/g,"");let h=0;for(;c<n.length;){const s=n[c];if(s==="9"||s==="a"||s==="*")if(h<A.length){const b=A[h];if(s==="9"&&/[0-9]/.test(b)||s==="a"&&/[a-zA-Z]/.test(b)||s==="*")t+=b,h++;else break}else break;else t+=s;c++}return t},[n]),E=o=>{const t=y(o.target.value);if(_||S(t),f){const c={...o,target:{...o.target,value:t},currentTarget:{...o.currentTarget,value:t}};f(c)}};return a.jsx(j,{...C,value:I,onChange:E,placeholder:C.placeholder||n.replace(/[9a*]/g,r)})};l.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
'9': 数字 (0-9)
'a': 英字 (a-z, A-Z)
'*': 英数字
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const T={title:"Components/Basic Inputs/InputMask",component:l,args:{disabled:!1},argTypes:{disabled:{control:"boolean"},mask:{control:"text",description:"Mask pattern ('9': number, 'a': letter, '*': alphanumeric)"},maskChar:{control:"text",description:"Placeholder character for unentered parts"}}},u={render:function(r){const{t:e}=k(m);return a.jsx(g,{label:e("story.inputmask_zip"),children:a.jsx(l,{...r})})},args:{mask:"999-9999",placeholder:"000-0000"}},p={render:function(r){const{t:e}=k(m);return a.jsx(g,{label:e("story.inputmask_phone"),children:a.jsx(l,{...r})})},args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},d={render:function(r){const{t:e}=k(m);return a.jsx(g,{label:e("story.inputmask_credit"),children:a.jsx(l,{...r})})},args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},i={render:function(r){const{t:e}=k(m);return a.jsx(g,{label:e("story.inputmask_custom"),children:a.jsx(l,{...r})})},args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_zip")}>
        <InputMask {...args} />
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
    return <Label label={t("story.inputmask_phone")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_credit")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_custom")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...i.parameters?.docs?.source}}};const P=["ZipCode","Phone","CreditCard","CustomMask"],V=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:d,CustomMask:i,Phone:p,ZipCode:u,__namedExportsOrder:P,default:T},Symbol.toStringTag,{value:"Module"}));export{d as C,V as I,p as P,u as Z,i as a};
