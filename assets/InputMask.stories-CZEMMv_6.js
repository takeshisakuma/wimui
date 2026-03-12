import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-DYlShzji.js";import{I as L}from"./Input-BpCjc_6Q.js";import{L as _}from"./FieldTemplate-Cf1XI41D.js";import{u as m}from"./useTranslation-DygSvNPf.js";const c=({mask:n,maskChar:o="_",value:s,defaultValue:x,onChange:k,...h})=>{const[C,I]=v.useState(x||""),f=s!==void 0,j=f?s:C,M=v.useCallback(t=>{let a="",d=0;const b=t.replace(/[^a-zA-Z0-9]/g,"");let g=0;for(;d<n.length;){const r=n[d];if(r==="9"||r==="a"||r==="*")if(g<b.length){const y=b[g];if(r==="9"&&/[0-9]/.test(y)||r==="a"&&/[a-zA-Z]/.test(y)||r==="*")a+=y,g++;else break}else break;else a+=r;d++}return a},[n]),T=t=>{const a=M(t.target.value);if(f||I(a),k){const d={...t,target:{...t.target,value:a},currentTarget:{...t.currentTarget,value:a}};k(d)}};return e.jsx(L,{...h,value:j,onChange:T,placeholder:h.placeholder||n.replace(/[9a*]/g,o)})};c.__docgenInfo={description:`特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
'9': 数字 (0-9)
'a': 英字 (a-z, A-Z)
'*': 英数字
その他: そのまま表示`,methods:[],displayName:"InputMask",props:{mask:{required:!0,tsType:{name:"string"},description:""},maskChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_"',computed:!1}}}};const R={title:"Components/Basic Inputs/InputMask",component:c,argTypes:{mask:{control:"text",description:"Mask pattern ('9': number, 'a': letter, '*': alphanumeric)"},maskChar:{control:"text",description:"Placeholder character for unentered parts"}}},i={render:function(o){const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(_,{label:s("story_inputmask_zip"),children:e.jsx(c,{...o})})},args:{mask:"999-9999",placeholder:"000-0000"}},l={render:function(o){const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(_,{label:s("story_inputmask_phone"),children:e.jsx(c,{...o})})},args:{mask:"(99) 9999-9999",placeholder:"(03) 1234-5678"}},u={render:function(o){const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(_,{label:s("story_inputmask_credit"),children:e.jsx(c,{...o})})},args:{mask:"9999-9999-9999-9999",placeholder:"0000-0000-0000-0000"}},p={render:function(o){const{t:s}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(_,{label:s("story_inputmask_custom"),children:e.jsx(c,{...o})})},args:{mask:"aaaa-9999-*",placeholder:"ABCD-1234-X"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_inputmask_zip")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "999-9999",
    placeholder: "000-0000"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_inputmask_phone")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_inputmask_credit")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_inputmask_custom")}>\r
        <InputMask {...args} />\r
      </Label>;
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...p.parameters?.docs?.source}}};const S=["ZipCode","Phone","CreditCard","CustomMask"],E=Object.freeze(Object.defineProperty({__proto__:null,CreditCard:u,CustomMask:p,Phone:l,ZipCode:i,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{u as C,E as I,l as P,i as Z,p as a};
