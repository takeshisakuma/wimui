import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as c,A as x}from"./iframe-BDBmq9kz.js";import{c as I}from"./index-DR7vVb7D.js";import{I as re}from"./Icon-D7a_aJQd.js";import{C as se}from"./Chip-CkCZsS53.js";import{B as ne}from"./BaseListItem-DSQ5qLwu.js";import{I as oe}from"./InputBase-CJl3y1Wm.js";import{F as ie}from"./FieldTemplate-D_k7WUyS.js";import{u as w}from"./useTranslation-Eq2fY2Qq.js";const b=({options:i=[],value:s,onChange:e,placeholder:n="Select options...",label:E,error:T,required:$,layout:B,className:W,disabled:o=!1,defaultValue:z=[],allowClear:F=!1,id:K,...U})=>{const[l,_]=c.useState(!1),[H,M]=c.useState(z),[d,u]=c.useState(-1),[G,N]=c.useState(!1),q=c.useRef(null),C=c.useRef(null),R=c.useRef(null),J=c.useId(),f=K||`wim-multiselect-${J}`,k=`${f}-list`,j=E?`${f}-label`:void 0,V=T?`${f}-error`:void 0,Q=`${f}-trigger`,A=s!==void 0,p=A?s:H;c.useEffect(()=>{const a=t=>{q.current&&!q.current.contains(t.target)&&_(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const X=a=>{if(o||a&&a.target.closest(".wim-multiselect-badge-remove"))return;const t=!l;_(t),u(t?0:-1)},P=a=>{if(o)return;let t;p?.includes(a)?t=p.filter(m=>m!==a):t=[...p||[],a],A||M(t),e&&e(t)},Y=(a,t)=>{if(a.stopPropagation(),o)return;const m=(p||[]).filter(D=>D!==t);A||M(m),e&&e(m)},Z=a=>{a?.stopPropagation(),!o&&(A||M([]),e&&e([]))},L=i.filter(a=>p?.includes(a.value)),ee=a=>{if(N(!0),!o)switch(a.key){case"ArrowDown":a.preventDefault(),l?u(t=>t<i.length-1?t+1:0):(_(!0),u(0));break;case"ArrowUp":a.preventDefault(),l&&u(t=>t>0?t-1:i.length-1);break;case"Enter":case" ":a.preventDefault(),l?d>=0&&P(i[d].value):(_(!0),u(0));break;case"Escape":l&&(a.preventDefault(),_(!1),u(-1),R.current?.focus());break;case"Home":l&&(a.preventDefault(),u(0));break;case"End":l&&(a.preventDefault(),u(i.length-1));break;case"Tab":l&&(_(!1),u(-1));break}};c.useEffect(()=>{l&&d>=0&&C.current&&C.current.children[d]?.scrollIntoView({block:"nearest"})},[d,l]);const{"aria-label":ae,"aria-labelledby":O,"aria-describedby":te,...le}=U;return r.jsx(ie,{label:E,error:T,required:$,layout:B,labelId:j,errorId:V,className:W,children:r.jsxs("div",{className:"wim-multiselect",ref:q,onMouseMove:()=>N(!1),"data-keyboard-nav":G,...le,children:[r.jsx(oe,{disabled:o,allowClear:F,hasValue:p&&p.length>0,onClear:Z,status:T?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:l}],className:I(l&&"wim-multiselect-trigger--open"),children:r.jsx("div",{id:Q,className:I("wim-multiselect-trigger",o&&"wim-multiselect-trigger--disabled"),onClick:X,tabIndex:o?-1:0,role:"combobox","aria-expanded":l,"aria-haspopup":"listbox","aria-controls":l?k:void 0,"aria-disabled":o,"aria-labelledby":j||O,"aria-describedby":V||te,"aria-invalid":!!T,"aria-label":E?void 0:ae||n,onKeyDown:ee,ref:R,"aria-activedescendant":l&&d>=0?`${f}-option-${d}`:void 0,children:r.jsx("div",{className:I("wim-multiselect-value",L.length===0&&"wim-multiselect-value--placeholder"),children:L.length>0?L.map(a=>r.jsx(se,{label:a.label,size:"small",color:"primary",variant:"solid",disabled:o,onDelete:o?void 0:t=>Y(t,a.value),className:"wim-multiselect-badge"},a.value)):n})})}),l&&!o&&r.jsx("ul",{id:k,ref:C,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":j||O||void 0,children:i.map((a,t)=>{const m=p?.includes(a.value),D=t===d;return r.jsx(ne,{as:"li",id:`${f}-option-${t}`,className:I("wim-multiselect-option",m&&"wim-multiselect-option--selected"),active:D,disabled:a.disabled,onClick:()=>!a.disabled&&P(a.value),onMouseEnter:()=>u(t),rightSection:m?r.jsx(re,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":m,tabIndex:-1,children:a.label},a.value)})})]})})};b.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const ue={title:"Components/Selection Controls/MultiSelect",component:b,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},g={render:function(s){const{t:e}=w(x),n=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...s,options:n,placeholder:e("story_multiselect_fruits")})}},v={render:function(s){const{t:e}=w(x),n=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...s,label:e("story_multiselect_favorites"),options:n,placeholder:e("story_selectbox_placeholder")})}},y={render:function(s){const{t:e}=w(x),n=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...s,options:n,defaultValue:["apple","orange"]})}},h={render:function(s){const{t:e}=w(x),n=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...s,options:n,disabled:!0,defaultValue:["banana"]})}},S={render:function(s){const{t:e}=w(x),n=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return r.jsx(b,{...s,options:n,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const ce=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Disabled:h,MultipleSelected:y,WithClearButton:S,WithLabel:v,__namedExportsOrder:ce,default:ue},Symbol.toStringTag,{value:"Module"}));export{g as D,he as M,v as W,y as a,h as b};
