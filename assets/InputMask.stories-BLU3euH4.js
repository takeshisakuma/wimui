import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-DUo8Bj02.js";import{I as R}from"./Input-bpl62K-a.js";import{L as i}from"./Label-LWwmYpB8.js";import{u as g}from"./useTranslation-C2tw1dPV.js";const c=({mask:a,maskChar:n="_",value:e,defaultValue:I,onChange:f,..._})=>{const[y,j]=C.useState(I||""),b=e!==void 0,M=b?e:y,T=C.useCallback(o=>{let s="",l=0;const x=o.replace(/[^a-zA-Z0-9]/g,"");let k=0;for(;l<a.length;){const t=a[l];if(t==="9"||t==="a"||t==="*")if(k<x.length){const h=x[k];if(t==="9"&&/[0-9]/.test(h)||t==="a"&&/[a-zA-Z]/.test(h)||t==="*")s+=h,k++;else break}else break;else s+=t;l++}return s},[a]),L=o=>{const s=T(o.target.value);if(b||j(s),f){const l={...o,target:{...o.target,value:s},currentTarget:{...o.currentTarget,value:s}};f(l)}};return r.jsx(R,{..._,value:M,onChange:L,placeholder:_.placeholder||a.replace(/[9a*]/g,n)})};c.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
'9': 数字 (0-9)
'a': 英字 (a-z, A-Z)
'*': 英数字
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const S={title:"Components/Basic Inputs/InputMask",component:c,argTypes:{mask:{control:"text",description:"Mask pattern ('9': number, 'a': letter, '*': alphanumeric)"},maskChar:{control:"text",description:"Placeholder character for unentered parts"}}},m={render:function(n){const{t:e}=g(["docs","common","components"]);return r.jsx(i,{label:e("story_inputmask_zip"),children:r.jsx(c,{...n})})},args:{mask:"999-9999",placeholder:"000-0000"}},p={render:function(n){const{t:e}=g(["docs","common","components"]);return r.jsx(i,{label:e("story_inputmask_phone"),children:r.jsx(c,{...n})})},args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},u={render:function(n){const{t:e}=g(["docs","common","components"]);return r.jsx(i,{label:e("story_inputmask_credit"),children:r.jsx(c,{...n})})},args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},d={render:function(n){const{t:e}=g(["docs","common","components"]);return r.jsx(i,{label:e("story_inputmask_custom"),children:r.jsx(c,{...n})})},args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_inputmask_zip")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "999-9999",
    placeholder: "000-0000"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_inputmask_phone")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_inputmask_credit")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_inputmask_custom")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...d.parameters?.docs?.source}}};const v=["ZipCode","Phone","CreditCard","CustomMask"],E=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:u,CustomMask:d,Phone:p,ZipCode:m,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{u as C,E as I,p as P,m as Z,d as a};
