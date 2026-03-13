import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CKKDYfjM.js";import{c as I}from"./index-K_u7tV9x.js";import{I as ae}from"./Icon-DuRhDIXo.js";import{C as te}from"./Chip-DvB4OSbY.js";import{B as se}from"./BaseListItem-BYD7WhwV.js";import{I as le}from"./InputBase-DsliMLCX.js";import{F as ne}from"./FieldTemplate-Sq91j-YR.js";import{u as w}from"./useTranslation-D80Uyf_x.js";const _=({options:i=[],value:n,onChange:e,placeholder:o="Select options...",label:q,error:S,required:A,layout:B,className:L,disabled:r=!1,defaultValue:W=[],allowClear:z=!1,id:F,...P})=>{const[s,b]=u.useState(!1),[K,j]=u.useState(W),[d,c]=u.useState(-1),D=u.useRef(null),R=u.useRef(null),C=u.useRef(null),U=u.useId(),g=F||`wim-multiselect-${U}`,E=`${g}-list`,V=q?`${g}-label`:void 0,N=S?`${g}-error`:void 0,H=`${g}-trigger`,T=n!==void 0,p=T?n:K;u.useEffect(()=>{const a=t=>{D.current&&!D.current.contains(t.target)&&b(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const G=a=>{if(r||a&&a.target.closest(".wim-multiselect-badge-remove"))return;const t=!s;b(t),c(t?0:-1)},O=a=>{if(r)return;let t;p?.includes(a)?t=p.filter(m=>m!==a):t=[...p||[],a],T||j(t),e&&e(t)},J=(a,t)=>{if(a.stopPropagation(),r)return;const m=(p||[]).filter(M=>M!==t);T||j(m),e&&e(m)},Q=a=>{a?.stopPropagation(),!r&&(T||j([]),e&&e([]))},k=i.filter(a=>p?.includes(a.value)),X=a=>{if(!r)switch(a.key){case"ArrowDown":a.preventDefault(),s?c(t=>t<i.length-1?t+1:0):(b(!0),c(0));break;case"ArrowUp":a.preventDefault(),s&&c(t=>t>0?t-1:i.length-1);break;case"Enter":case" ":a.preventDefault(),s?d>=0&&O(i[d].value):(b(!0),c(0));break;case"Escape":s&&(a.preventDefault(),b(!1),c(-1),C.current?.focus());break;case"Home":s&&(a.preventDefault(),c(0));break;case"End":s&&(a.preventDefault(),c(i.length-1));break;case"Tab":s&&(b(!1),c(-1));break}};u.useEffect(()=>{s&&d>=0&&R.current&&R.current.children[d]?.scrollIntoView({block:"nearest"})},[d,s]);const{"aria-label":Y,"aria-labelledby":$,"aria-describedby":Z,...ee}=P;return l.jsx(ne,{label:q,error:S,required:A,layout:B,labelId:V,errorId:N,className:L,children:l.jsxs("div",{className:"wim-multiselect",ref:D,...ee,children:[l.jsx(le,{disabled:r,allowClear:z,hasValue:p&&p.length>0,onClear:Q,status:S?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:s}],className:I(s&&"wim-multiselect-trigger--open"),children:l.jsx("div",{id:H,className:I("wim-multiselect-trigger",r&&"wim-multiselect-trigger--disabled"),onClick:G,tabIndex:r?-1:0,role:"combobox","aria-expanded":s,"aria-haspopup":"listbox","aria-controls":s?E:void 0,"aria-disabled":r,"aria-labelledby":V||$,"aria-describedby":N||Z,"aria-invalid":!!S,"aria-label":q?void 0:Y||o,onKeyDown:X,ref:C,"aria-activedescendant":s&&d>=0?`${g}-option-${d}`:void 0,children:l.jsx("div",{className:I("wim-multiselect-value",k.length===0&&"wim-multiselect-value--placeholder"),children:k.length>0?k.map(a=>l.jsx(te,{label:a.label,size:"small",color:"primary",variant:"solid",disabled:r,onDelete:r?void 0:t=>J(t,a.value),className:"wim-multiselect-badge"},a.value)):o})})}),s&&!r&&l.jsx("ul",{id:E,ref:R,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":V||$||void 0,children:i.map((a,t)=>{const m=p?.includes(a.value),M=t===d;return l.jsx(se,{as:"li",id:`${g}-option-${t}`,className:I("wim-multiselect-option",m&&"wim-multiselect-option--selected"),active:M,disabled:a.disabled,onClick:()=>!a.disabled&&O(a.value),onMouseEnter:()=>c(t),rightSection:m?l.jsx(ae,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":m,tabIndex:-1,children:a.label},a.value)})})]})})};_.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Components/Selection Controls/MultiSelect",component:_,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},y={render:function(n){const{t:e}=w(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,placeholder:e("story_multiselect_fruits")})}},v={render:function(n){const{t:e}=w(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,label:e("story_multiselect_favorites"),options:o,placeholder:e("story_selectbox_placeholder")})}},f={render:function(n){const{t:e}=w(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,defaultValue:["apple","orange"]})}},h={render:function(n){const{t:e}=w(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,disabled:!0,defaultValue:["banana"]})}},x={render:function(n){const{t:e}=w(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(_,{...n,options:o,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    return <MultiSelect {...args} options={options} defaultValue={["apple", "orange"]} />;
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
    return <MultiSelect {...args} options={options} disabled={true} defaultValue={["banana"]} />;
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
    return <MultiSelect {...args} options={options} allowClear={true} defaultValue={["apple", "banana"]} placeholder={t("story_multiselect_fruits")} />;
  }
}`,...x.parameters?.docs?.source}}};const re=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:y,Disabled:h,MultipleSelected:f,WithClearButton:x,WithLabel:v,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{y as D,ye as M,v as W,f as a,h as b};
