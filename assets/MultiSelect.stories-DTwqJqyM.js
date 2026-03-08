import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-D-INtma0.js";import{c as w}from"./index-BYKyH6Np.js";import{I as C}from"./Icon-B-pnkG7W.js";import{C as H}from"./Chip-BMTdZ4YJ.js";import{B as J}from"./BaseListItem-DNqw4WED.js";import{u as m}from"./useTranslation-gsjwUuWZ.js";const d=({options:c=[],value:n,onChange:e,placeholder:s="Select options...",label:p,className:N,disabled:r=!1,defaultValue:E=[],allowClear:O=!1,id:L,...A})=>{const{t:B}=m("common"),[u,x]=b.useState(!1),[W,S]=b.useState(E),j=b.useRef(null),z=b.useId(),T=L||z,V=`wim-multiselect-list-${T}`,I=`wim-multiselect-label-${T}`,k=`wim-multiselect-trigger-${T}`,h=n!==void 0,o=h?n:W;b.useEffect(()=>{const t=a=>{j.current&&!j.current.contains(a.target)&&x(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const q=t=>{r||t.target.closest(".wim-multiselect-badge-remove")||x(!u)},M=t=>{if(r)return;let a;o?.includes(t)?a=o.filter(i=>i!==t):a=[...o||[],t],h||S(a),e&&e(a)},P=(t,a)=>{if(t.stopPropagation(),r)return;const i=(o||[]).filter(G=>G!==a);h||S(i),e&&e(i)},$=t=>{t.stopPropagation(),!r&&(h||S([]),e&&e([]))},D=c.filter(t=>o?.includes(t.value)),{"aria-label":K,"aria-labelledby":R,"aria-describedby":F,...U}=A;return l.jsxs("div",{className:w("wim-multiselect",N),ref:j,...U,children:[p&&l.jsx("label",{id:I,htmlFor:k,className:"wim-label",children:p}),l.jsxs("div",{id:k,className:w("wim-multiselect-trigger",u&&"wim-multiselect-trigger--open",r&&"wim-multiselect-trigger--disabled"),onClick:q,tabIndex:r?-1:0,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox","aria-controls":u?V:void 0,"aria-disabled":r,"aria-labelledby":p?I:R,"aria-label":p?void 0:K||s,"aria-describedby":F,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),q(t)),t.key==="ArrowDown"&&!u&&(t.preventDefault(),x(!0)),t.key==="Escape"&&u&&(t.preventDefault(),x(!1))},children:[l.jsx("div",{className:w("wim-multiselect-value",D.length===0&&"wim-multiselect-value--placeholder"),children:D.length>0?D.map(t=>l.jsx(H,{label:t.label,size:"small",color:"primary",variant:"solid",disabled:r,onDelete:r?void 0:a=>P(a,t.value),className:"wim-multiselect-badge"},t.value)):s}),l.jsxs("div",{className:"wim-multiselect-icons",children:[O&&o&&o.length>0&&!r&&l.jsx("button",{type:"button",className:"wim-multiselect-clear",onClick:$,"aria-label":B("a11y_clear_selection"),children:l.jsx(C,{name:"CloseIcon",size:"small"})}),l.jsx("div",{className:"wim-multiselect-icon",children:l.jsx(C,{name:"ChevronDownIcon",size:"small"})})]})]}),u&&!r&&l.jsx("ul",{id:V,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":p?I:R||void 0,children:c.map(t=>{const a=o?.includes(t.value);return l.jsx(J,{as:"li",className:w("wim-multiselect-option",a&&"wim-multiselect-option--selected"),disabled:t.disabled,onClick:()=>!t.disabled&&M(t.value),rightSection:a?l.jsx(C,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":a,tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&!t.disabled&&(i.preventDefault(),M(t.value))},children:t.label},t.value)})})]})};d.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const Q={title:"Components/Selection Controls/MultiSelect",component:d,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},_={render:function(n){const{t:e}=m(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,placeholder:e("story_multiselect_fruits")})}},g={render:function(n){const{t:e}=m(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,label:e("story_multiselect_favorites"),options:s,placeholder:e("story_selectbox_placeholder")})}},y={render:function(n){const{t:e}=m(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,defaultValue:["apple","orange"]})}},v={render:function(n){const{t:e}=m(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,disabled:!0,defaultValue:["banana"]})}},f={render:function(n){const{t:e}=m(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...f.parameters?.docs?.source}}};const X=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:_,Disabled:v,MultipleSelected:y,WithClearButton:f,WithLabel:g,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{_ as D,se as M,g as W,y as a,v as b};
