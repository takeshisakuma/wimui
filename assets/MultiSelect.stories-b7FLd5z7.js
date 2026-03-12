import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-DYlShzji.js";import{c as T}from"./index-Cm_IZiCA.js";import{I as te}from"./Icon-B_fKZ-SS.js";import{C as ae}from"./Chip-DKcXxaqW.js";import{B as se}from"./BaseListItem-Cic4EoQN.js";import{I as le}from"./InputBase-B6ww8n-u.js";import{F as ne}from"./FieldTemplate-Cf1XI41D.js";import{u as y}from"./useTranslation-DygSvNPf.js";const _=({options:i=[],value:n,onChange:e,placeholder:o="Select options...",label:j,error:S,required:A,layout:B,className:L,disabled:r=!1,defaultValue:W=[],allowClear:z=!1,id:F,...P})=>{const{t:ie}=y("common"),[s,b]=u.useState(!1),[K,q]=u.useState(W),[d,c]=u.useState(-1),D=u.useRef(null),R=u.useRef(null),C=u.useRef(null),U=u.useId(),g=F||`wim-multiselect-${U}`,E=`${g}-list`,V=j?`${g}-label`:void 0,N=S?`${g}-error`:void 0,H=`${g}-trigger`,I=n!==void 0,p=I?n:K;u.useEffect(()=>{const t=a=>{D.current&&!D.current.contains(a.target)&&b(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const G=t=>{if(r||t&&t.target.closest(".wim-multiselect-badge-remove"))return;const a=!s;b(a),c(a?0:-1)},O=t=>{if(r)return;let a;p?.includes(t)?a=p.filter(m=>m!==t):a=[...p||[],t],I||q(a),e&&e(a)},J=(t,a)=>{if(t.stopPropagation(),r)return;const m=(p||[]).filter(M=>M!==a);I||q(m),e&&e(m)},Q=t=>{r||(I||q([]),e&&e([]))},k=i.filter(t=>p?.includes(t.value)),X=t=>{if(!r)switch(t.key){case"ArrowDown":t.preventDefault(),s?c(a=>a<i.length-1?a+1:0):(b(!0),c(0));break;case"ArrowUp":t.preventDefault(),s&&c(a=>a>0?a-1:i.length-1);break;case"Enter":case" ":t.preventDefault(),s?d>=0&&O(i[d].value):(b(!0),c(0));break;case"Escape":s&&(t.preventDefault(),b(!1),c(-1),C.current?.focus());break;case"Home":s&&(t.preventDefault(),c(0));break;case"End":s&&(t.preventDefault(),c(i.length-1));break;case"Tab":s&&(b(!1),c(-1));break}};u.useEffect(()=>{s&&d>=0&&R.current&&R.current.children[d]?.scrollIntoView({block:"nearest"})},[d,s]);const{"aria-label":Y,"aria-labelledby":$,"aria-describedby":Z,...ee}=P;return l.jsx(ne,{label:j,error:S,required:A,layout:B,labelId:V,errorId:N,className:L,children:l.jsxs("div",{className:"wim-multiselect",ref:D,...ee,children:[l.jsx(le,{disabled:r,allowClear:z,hasValue:p&&p.length>0,onClear:()=>Q(),status:S?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:s}],className:T(s&&"wim-multiselect-trigger--open"),children:l.jsx("div",{id:H,className:T("wim-multiselect-trigger",r&&"wim-multiselect-trigger--disabled"),onClick:G,tabIndex:r?-1:0,role:"combobox","aria-expanded":s,"aria-haspopup":"listbox","aria-controls":s?E:void 0,"aria-disabled":r,"aria-labelledby":V||$,"aria-describedby":N||Z,"aria-invalid":!!S,"aria-label":j?void 0:Y||o,onKeyDown:X,ref:C,"aria-activedescendant":s&&d>=0?`${g}-option-${d}`:void 0,children:l.jsx("div",{className:T("wim-multiselect-value",k.length===0&&"wim-multiselect-value--placeholder"),children:k.length>0?k.map(t=>l.jsx(ae,{label:t.label,size:"small",color:"primary",variant:"solid",disabled:r,onDelete:r?void 0:a=>J(a,t.value),className:"wim-multiselect-badge"},t.value)):o})})}),s&&!r&&l.jsx("ul",{id:E,ref:R,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":V||$||void 0,children:i.map((t,a)=>{const m=p?.includes(t.value),M=a===d;return l.jsx(se,{as:"li",id:`${g}-option-${a}`,className:T("wim-multiselect-option",m&&"wim-multiselect-option--selected"),active:M,disabled:t.disabled,onClick:()=>!t.disabled&&O(t.value),onMouseEnter:()=>c(a),rightSection:m?l.jsx(te,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":m,tabIndex:-1,children:t.label},t.value)})})]})})};_.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const oe={title:"Components/Selection Controls/MultiSelect",component:_,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},v={render:function(n){const{t:e}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,placeholder:e("story_multiselect_fruits")})}},f={render:function(n){const{t:e}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,label:e("story_multiselect_favorites"),options:o,placeholder:e("story_selectbox_placeholder")})}},h={render:function(n){const{t:e}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,defaultValue:["apple","orange"]})}},x={render:function(n){const{t:e}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,disabled:!0,defaultValue:["banana"]})}},w={render:function(n){const{t:e}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...w.parameters?.docs?.source}}};const re=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Disabled:x,MultipleSelected:h,WithClearButton:w,WithLabel:f,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{v as D,ve as M,f as W,h as a,x as b};
