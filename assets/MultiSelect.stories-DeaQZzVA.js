import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-Db9rXbo4.js";import{c as x}from"./index-BeEGmSlY.js";import{I as re}from"./Icon-BR9xtm29.js";import{C as ne}from"./Chip-CR6ALQOF.js";import{B as se}from"./BaseListItem-qkzMtVUm.js";import{I as oe}from"./InputBase-ABXyFPjo.js";import{F as ie}from"./FieldTemplate-irpBl0pw.js";import{A as g}from"./i18nConstants-BpHxieg5.js";import{u as v}from"./useTranslation-CwCoJP0K.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldLabelContent-BtF11t-o.js";import"./Badge-BZXVKPWW.js";import"./IndicatorBase-DK2uvDA_.js";import"./FieldError-rfIgKmcd.js";import"./Paragraph-sC-8pUiP.js";import"./index-CFQh5TjE.js";import"./index-CwyaDGxd.js";const b=({options:i=[],value:n,onChange:e,placeholder:s="Select options...",label:E,error:y,required:B,layout:O,className:W,disabled:o=!1,defaultValue:z=[],allowClear:F=!1,id:K,...U})=>{const[l,f]=c.useState(!1),[H,q]=c.useState(z),[d,u]=c.useState(-1),[G,j]=c.useState(!1),C=c.useRef(null),M=c.useRef(null),k=c.useRef(null),J=c.useId(),_=K||`wim-multiselect-${J}`,D=`${_}-list`,L=E?`${_}-label`:void 0,V=y?`${_}-error`:void 0,Q=`${_}-trigger`,h=n!==void 0,p=h?n:H;c.useEffect(()=>{const a=t=>{C.current&&!C.current.contains(t.target)&&f(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const X=a=>{if(o||a&&a.target.closest(".wim-multiselect-badge-remove"))return;const t=!l;f(t),u(t?0:-1)},P=a=>{if(o)return;let t;p?.includes(a)?t=p.filter(m=>m!==a):t=[...p||[],a],h||q(t),e&&e(t)},Y=(a,t)=>{if(a.stopPropagation(),o)return;const m=(p||[]).filter(R=>R!==t);h||q(m),e&&e(m)},Z=a=>{a?.stopPropagation(),!o&&(h||q([]),e&&e([]))},N=i.filter(a=>p?.includes(a.value)),ee=a=>{if(j(!0),!o)switch(a.key){case"ArrowDown":a.preventDefault(),l?u(t=>t<i.length-1?t+1:0):(f(!0),u(0));break;case"ArrowUp":a.preventDefault(),l&&u(t=>t>0?t-1:i.length-1);break;case"Enter":case" ":a.preventDefault(),l?d>=0&&P(i[d].value):(f(!0),u(0));break;case"Escape":l&&(a.preventDefault(),f(!1),u(-1),k.current?.focus());break;case"Home":l&&(a.preventDefault(),u(0));break;case"End":l&&(a.preventDefault(),u(i.length-1));break;case"Tab":l&&(f(!1),u(-1));break}};c.useEffect(()=>{l&&d>=0&&M.current&&M.current.children[d]?.scrollIntoView({block:"nearest"})},[d,l]);const{"aria-label":ae,"aria-labelledby":$,"aria-describedby":te,...le}=U;return r.jsx(ie,{label:E,error:y,required:B,layout:O,labelId:L,errorId:V,className:W,children:r.jsxs("div",{className:"wim-multiselect",ref:C,onMouseMove:()=>j(!1),"data-keyboard-nav":G,...le,children:[r.jsx(oe,{disabled:o,allowClear:F,hasValue:p&&p.length>0,onClear:Z,status:y?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:l}],className:x(l&&"wim-multiselect-trigger--open"),children:r.jsx("div",{id:Q,className:x("wim-multiselect-trigger",o&&"wim-multiselect-trigger--disabled"),onClick:X,tabIndex:o?-1:0,role:"combobox","aria-expanded":l,"aria-haspopup":"listbox","aria-controls":l?D:void 0,"aria-disabled":o,"aria-labelledby":L||$,"aria-describedby":V||te,"aria-invalid":!!y,"aria-label":E?void 0:ae||s,onKeyDown:ee,ref:k,"aria-activedescendant":l&&d>=0?`${_}-option-${d}`:void 0,children:r.jsx("div",{className:x("wim-multiselect-value",N.length===0&&"wim-multiselect-value--placeholder"),children:N.length>0?N.map(a=>r.jsx(ne,{label:a.label,size:"small",color:"primary",variant:"solid",disabled:o,onDelete:o?void 0:t=>Y(t,a.value),className:"wim-multiselect-badge"},a.value)):s})})}),l&&!o&&r.jsx("ul",{id:D,ref:M,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":L||$||void 0,children:i.map((a,t)=>{const m=p?.includes(a.value),R=t===d;return r.jsx(se,{as:"li",id:`${_}-option-${t}`,className:x("wim-multiselect-option",m&&"wim-multiselect-option--selected"),active:R,disabled:a.disabled,onClick:()=>!a.disabled&&P(a.value),onMouseEnter:()=>u(t),rightSection:m?r.jsx(re,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":m,tabIndex:-1,children:a.label},a.value)})})]})})};b.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const Ee={title:"Components/Selection Controls/MultiSelect",component:b,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},S={render:function(n){const{t:e}=v(g),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...n,options:s,placeholder:e("story_multiselect_fruits")})}},w={render:function(n){const{t:e}=v(g),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...n,label:e("story_multiselect_favorites"),options:s,placeholder:e("story_selectbox_placeholder")})}},A={render:function(n){const{t:e}=v(g),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...n,options:s,defaultValue:["apple","orange"]})}},I={render:function(n){const{t:e}=v(g),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...n,options:s,disabled:!0,defaultValue:["banana"]})}},T={render:function(n){const{t:e}=v(g),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...n,options:s,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_multiselect_apple"),
      value: "apple"
    }, {
      label: t("story_multiselect_banana"),
      value: "banana"
    }, {
      label: t("story_multiselect_orange"),
      value: "orange"
    }, {
      label: t("story_multiselect_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} placeholder={t("story_multiselect_fruits")} />;
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_multiselect_apple"),
      value: "apple"
    }, {
      label: t("story_multiselect_banana"),
      value: "banana"
    }, {
      label: t("story_multiselect_orange"),
      value: "orange"
    }, {
      label: t("story_multiselect_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} label={t("story_multiselect_favorites")} options={options} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_multiselect_apple"),
      value: "apple"
    }, {
      label: t("story_multiselect_banana"),
      value: "banana"
    }, {
      label: t("story_multiselect_orange"),
      value: "orange"
    }, {
      label: t("story_multiselect_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} defaultValue={["apple", "orange"]} />;
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_multiselect_apple"),
      value: "apple"
    }, {
      label: t("story_multiselect_banana"),
      value: "banana"
    }, {
      label: t("story_multiselect_orange"),
      value: "orange"
    }, {
      label: t("story_multiselect_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} disabled={true} defaultValue={["banana"]} />;
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_multiselect_apple"),
      value: "apple"
    }, {
      label: t("story_multiselect_banana"),
      value: "banana"
    }, {
      label: t("story_multiselect_orange"),
      value: "orange"
    }, {
      label: t("story_multiselect_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} allowClear={true} defaultValue={["apple", "banana"]} placeholder={t("story_multiselect_fruits")} />;
  }
}`,...T.parameters?.docs?.source}}};const qe=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"];export{S as Default,I as Disabled,A as MultipleSelected,T as WithClearButton,w as WithLabel,qe as __namedExportsOrder,Ee as default};
