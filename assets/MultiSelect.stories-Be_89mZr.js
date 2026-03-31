import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c,A as x}from"./iframe-C9jI6wk5.js";import{c as I}from"./index-BdaCrWBW.js";import{I as se}from"./Icon-F6WZll9K.js";import{C as re}from"./Chip-DMz8YC0S.js";import{B as ne}from"./BaseListItem-CGFY0zIe.js";import{I as oe}from"./InputBase-Lvx8yr0q.js";import{F as ie}from"./FieldTemplate-DNPW3Y-H.js";import{u as w}from"./useTranslation-f2Ze7WA6.js";const b=({options:i=[],value:r,onChange:e,placeholder:n="Select options...",label:E,error:T,required:$,layout:B,className:W,disabled:o=!1,defaultValue:z=[],allowClear:F=!1,id:K,...U})=>{const[l,f]=c.useState(!1),[H,M]=c.useState(z),[d,u]=c.useState(-1),[G,N]=c.useState(!1),q=c.useRef(null),C=c.useRef(null),R=c.useRef(null),J=c.useId(),g=K||`wim-multiselect-${J}`,k=`${g}-list`,j=E?`${g}-label`:void 0,V=T?`${g}-error`:void 0,Q=`${g}-trigger`,A=r!==void 0,p=A?r:H;c.useEffect(()=>{const a=t=>{q.current&&!q.current.contains(t.target)&&f(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const X=a=>{if(o||a&&a.target.closest(".wim-multiselect-badge-remove"))return;const t=!l;f(t),u(t?0:-1)},P=a=>{if(o)return;let t;p?.includes(a)?t=p.filter(m=>m!==a):t=[...p||[],a],A||M(t),e&&e(t)},Y=(a,t)=>{if(a.stopPropagation(),o)return;const m=(p||[]).filter(D=>D!==t);A||M(m),e&&e(m)},Z=a=>{a?.stopPropagation(),!o&&(A||M([]),e&&e([]))},L=i.filter(a=>p?.includes(a.value)),ee=a=>{if(N(!0),!o)switch(a.key){case"ArrowDown":a.preventDefault(),l?u(t=>t<i.length-1?t+1:0):(f(!0),u(0));break;case"ArrowUp":a.preventDefault(),l&&u(t=>t>0?t-1:i.length-1);break;case"Enter":case" ":a.preventDefault(),l?d>=0&&P(i[d].value):(f(!0),u(0));break;case"Escape":l&&(a.preventDefault(),f(!1),u(-1),R.current?.focus());break;case"Home":l&&(a.preventDefault(),u(0));break;case"End":l&&(a.preventDefault(),u(i.length-1));break;case"Tab":l&&(f(!1),u(-1));break}};c.useEffect(()=>{l&&d>=0&&C.current&&C.current.children[d]?.scrollIntoView({block:"nearest"})},[d,l]);const{"aria-label":ae,"aria-labelledby":O,"aria-describedby":te,...le}=U;return s.jsx(ie,{label:E,error:T,required:$,layout:B,labelId:j,errorId:V,className:W,children:s.jsxs("div",{className:"wim-multiselect",ref:q,onMouseMove:()=>N(!1),"data-keyboard-nav":G,...le,children:[s.jsx(oe,{disabled:o,allowClear:F,hasValue:p&&p.length>0,onClear:Z,status:T?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:l}],className:I(l&&"wim-multiselect-trigger--open"),children:s.jsx("div",{id:Q,className:I("wim-multiselect-trigger",o&&"wim-multiselect-trigger--disabled"),onClick:X,tabIndex:o?-1:0,role:"combobox","aria-expanded":l,"aria-haspopup":"listbox","aria-controls":l?k:void 0,"aria-disabled":o,"aria-labelledby":j||O,"aria-describedby":V||te,"aria-invalid":!!T,"aria-label":E?void 0:ae||n,onKeyDown:ee,ref:R,"aria-activedescendant":l&&d>=0?`${g}-option-${d}`:void 0,children:s.jsx("div",{className:I("wim-multiselect-value",L.length===0&&"wim-multiselect-value--placeholder"),children:L.length>0?L.map(a=>s.jsx(re,{size:"sm",color:"primary",variant:"solid",disabled:o,onDelete:o?void 0:t=>Y(t,a.value),className:"wim-multiselect-badge",children:a.label},a.value)):n})})}),l&&!o&&s.jsx("ul",{id:k,ref:C,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":j||O||void 0,children:i.map((a,t)=>{const m=p?.includes(a.value),D=t===d;return s.jsx(ne,{as:"li",id:`${g}-option-${t}`,className:I("wim-multiselect-option",m&&"wim-multiselect-option--selected"),active:D,disabled:a.disabled,onClick:()=>!a.disabled&&P(a.value),onMouseEnter:()=>u(t),rightSection:m?s.jsx(se,{name:"CheckIcon",size:"sm"}):void 0,role:"option","aria-selected":m,tabIndex:-1,children:a.label},a.value)})})]})})};b.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const ue={title:"Components/Selection Controls/MultiSelect",component:b,parameters:{layout:"centered"},args:{disabled:!1},tags:[],argTypes:{disabled:{control:"boolean"},onChange:{action:"changed"}}},v={render:function(r){const{t:e}=w(x),n=[{label:e("story.multiselect_apple"),value:"apple"},{label:e("story.multiselect_banana"),value:"banana"},{label:e("story.multiselect_orange"),value:"orange"},{label:e("story.multiselect_grape"),value:"grape"},{label:e("story.selectbox_opt4"),value:"disabled",disabled:!0}];return s.jsx(b,{...r,options:n,placeholder:e("story.multiselect_fruits")})}},y={render:function(r){const{t:e}=w(x),n=[{label:e("story.multiselect_apple"),value:"apple"},{label:e("story.multiselect_banana"),value:"banana"},{label:e("story.multiselect_orange"),value:"orange"},{label:e("story.multiselect_grape"),value:"grape"},{label:e("story.selectbox_opt4"),value:"disabled",disabled:!0}];return s.jsx(b,{...r,label:e("story.multiselect_favorites"),options:n,placeholder:e("story.selectbox_placeholder")})}},_={render:function(r){const{t:e}=w(x),n=[{label:e("story.multiselect_apple"),value:"apple"},{label:e("story.multiselect_banana"),value:"banana"},{label:e("story.multiselect_orange"),value:"orange"},{label:e("story.multiselect_grape"),value:"grape"},{label:e("story.selectbox_opt4"),value:"disabled",disabled:!0}];return s.jsx(b,{...r,options:n,defaultValue:["apple","orange"]})}},h={render:function(r){const{t:e}=w(x),n=[{label:e("story.multiselect_apple"),value:"apple"},{label:e("story.multiselect_banana"),value:"banana"},{label:e("story.multiselect_orange"),value:"orange"},{label:e("story.multiselect_grape"),value:"grape"},{label:e("story.selectbox_opt4"),value:"disabled",disabled:!0}];return s.jsx(b,{...r,options:n,disabled:!0,defaultValue:["banana"]})}},S={render:function(r){const{t:e}=w(x),n=[{label:e("story.multiselect_apple"),value:"apple"},{label:e("story.multiselect_banana"),value:"banana"},{label:e("story.multiselect_orange"),value:"orange"},{label:e("story.multiselect_grape"),value:"grape"},{label:e("story.selectbox_opt4"),value:"disabled",disabled:!0}];return s.jsx(b,{...r,options:n,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story.multiselect_fruits")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} placeholder={t("story.multiselect_fruits")} />;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} label={t("story.multiselect_favorites")} options={options} placeholder={t("story.selectbox_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} defaultValue={["apple", "orange"]} />;
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.selectbox_opt4"),
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
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.selectbox_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} allowClear={true} defaultValue={["apple", "banana"]} placeholder={t("story.multiselect_fruits")} />;
  }
}`,...S.parameters?.docs?.source}}};const ce=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Disabled:h,MultipleSelected:_,WithClearButton:S,WithLabel:y,__namedExportsOrder:ce,default:ue},Symbol.toStringTag,{value:"Module"}));export{v as D,he as M,y as W,_ as a,h as b};
