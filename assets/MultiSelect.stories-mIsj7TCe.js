import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-SL2HqV3D.js";import{c as S}from"./index-30w8ikAG.js";import{I as Q}from"./Icon-LsAuz8T1.js";import{C as X}from"./Chip-CpCYlm-h.js";import{B as Y}from"./BaseListItem-wx-dS4Xz.js";import{I as Z}from"./InputBase-DpJHuTQg.js";import{F as ee}from"./FieldTemplate-DewR4Q5O.js";import{u as p}from"./useTranslation-ZF4WB21B.js";const d=({options:c=[],value:n,onChange:e,placeholder:s="Select options...",label:T,error:f,required:N,layout:E,className:O,disabled:r=!1,defaultValue:B=[],allowClear:L=!1,id:A,...W})=>{const{t:le}=p("common"),[o,h]=m.useState(!1),[z,I]=m.useState(B),j=m.useRef(null),$=m.useId(),x=A||`wim-multiselect-${$}`,V=`${x}-list`,q=T?`${x}-label`:void 0,C=f?`${x}-error`:void 0,P=`${x}-trigger`,w=n!==void 0,i=w?n:z;m.useEffect(()=>{const t=a=>{j.current&&!j.current.contains(a.target)&&h(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const M=t=>{r||t.target.closest(".wim-multiselect-badge-remove")||h(!o)},R=t=>{if(r)return;let a;i?.includes(t)?a=i.filter(u=>u!==t):a=[...i||[],t],w||I(a),e&&e(a)},F=(t,a)=>{if(t.stopPropagation(),r)return;const u=(i||[]).filter(J=>J!==a);w||I(u),e&&e(u)},K=t=>{r||(w||I([]),e&&e([]))},D=c.filter(t=>i?.includes(t.value)),{"aria-label":U,"aria-labelledby":k,"aria-describedby":G,...H}=W;return l.jsx(ee,{label:T,error:f,required:N,layout:E,labelId:q,errorId:C,className:O,children:l.jsxs("div",{className:"wim-multiselect",ref:j,...H,children:[l.jsx(Z,{disabled:r,allowClear:L,hasValue:i&&i.length>0,onClear:()=>K(),status:f?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:o}],className:S(o&&"wim-multiselect-trigger--open"),children:l.jsx("div",{id:P,className:S("wim-multiselect-trigger",r&&"wim-multiselect-trigger--disabled"),onClick:M,tabIndex:r?-1:0,role:"combobox","aria-expanded":o,"aria-haspopup":"listbox","aria-controls":o?V:void 0,"aria-disabled":r,"aria-labelledby":q||k,"aria-describedby":C||G,"aria-invalid":!!f,"aria-label":T?void 0:U||s,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),M(t)),t.key==="ArrowDown"&&!o&&(t.preventDefault(),h(!0)),t.key==="Escape"&&o&&(t.preventDefault(),h(!1))},children:l.jsx("div",{className:S("wim-multiselect-value",D.length===0&&"wim-multiselect-value--placeholder"),children:D.length>0?D.map(t=>l.jsx(X,{label:t.label,size:"small",color:"primary",variant:"solid",disabled:r,onDelete:r?void 0:a=>F(a,t.value),className:"wim-multiselect-badge"},t.value)):s})})}),o&&!r&&l.jsx("ul",{id:V,className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true","aria-labelledby":q||k||void 0,children:c.map(t=>{const a=i?.includes(t.value);return l.jsx(Y,{as:"li",className:S("wim-multiselect-option",a&&"wim-multiselect-option--selected"),disabled:t.disabled,onClick:()=>!t.disabled&&R(t.value),rightSection:a?l.jsx(Q,{name:"CheckIcon",size:"small"}):void 0,role:"option","aria-selected":a,tabIndex:0,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&!t.disabled&&(u.preventDefault(),R(t.value))},children:t.label},t.value)})})]})})};d.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button to remove all selections",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const te={title:"Components/Selection Controls/MultiSelect",component:d,parameters:{layout:"centered"},tags:[],argTypes:{onChange:{action:"changed"}}},b={render:function(n){const{t:e}=p(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,placeholder:e("story_multiselect_fruits")})}},_={render:function(n){const{t:e}=p(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,label:e("story_multiselect_favorites"),options:s,placeholder:e("story_selectbox_placeholder")})}},g={render:function(n){const{t:e}=p(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,defaultValue:["apple","orange"]})}},v={render:function(n){const{t:e}=p(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,disabled:!0,defaultValue:["banana"]})}},y={render:function(n){const{t:e}=p(["docs","common","components"]),s=[{label:e("story_multiselect_apple"),value:"apple"},{label:e("story_multiselect_banana"),value:"banana"},{label:e("story_multiselect_orange"),value:"orange"},{label:e("story_multiselect_grape"),value:"grape"},{label:e("story_selectbox_opt4"),value:"disabled",disabled:!0}];return l.jsx(d,{...n,options:s,allowClear:!0,defaultValue:["apple","banana"],placeholder:e("story_multiselect_fruits")})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    return <MultiSelect {...args} options={options} defaultValue={["apple", "orange"]} />;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const ae=["Default","WithLabel","MultipleSelected","Disabled","WithClearButton"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Disabled:v,MultipleSelected:g,WithClearButton:y,WithLabel:_,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{b as D,me as M,_ as W,g as a,v as b};
