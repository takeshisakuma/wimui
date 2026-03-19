import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-Db9rXbo4.js";import{c as q}from"./index-BeEGmSlY.js";import{T as _e}from"./Transition-DerBAdg1.js";import{I as ve}from"./Icon-BR9xtm29.js";import{B as be}from"./BaseListItem-qkzMtVUm.js";import{I as fe}from"./InputBase-ABXyFPjo.js";import{F as ge}from"./FieldTemplate-irpBl0pw.js";import{u as k}from"./useTranslation-CwCoJP0K.js";import{A as C}from"./i18nConstants-BpHxieg5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldLabelContent-BtF11t-o.js";import"./Badge-BZXVKPWW.js";import"./IndicatorBase-DK2uvDA_.js";import"./FieldError-rfIgKmcd.js";import"./Paragraph-sC-8pUiP.js";import"./index-CFQh5TjE.js";import"./index-CwyaDGxd.js";const f=({options:l=[],value:a,onChange:u,placeholder:G,label:F,error:A,required:J,layout:Q,className:X,disabled:h=!1,defaultValue:Y,id:Z,expandTrigger:ee="click",separator:ae=" / ",allowClear:re=!1,"aria-label":se,...te})=>{const{t:D}=k("common"),ne=G??D("select_option"),oe=m.useId(),g=Z||`wim-cascader-${oe}`,N=F?`${g}-label`:void 0,R=A?`${g}-error`:void 0,le=`${g}-trigger`,H=`${g}-popup`,[y,w]=m.useState(!1),[ce,K]=m.useState(Y||[]),[_,T]=m.useState([]),[o,b]=m.useState(-1),[V,v]=m.useState([]),[ie,B]=m.useState(!1),S=m.useRef(null),M=a!==void 0,x=M?a:ce;m.useEffect(()=>{const e=c=>{S.current&&!S.current.contains(c.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const W=()=>{if(!h){const e=!y;w(e),e?(T(x||[]),b(0),v([0])):b(-1)}},de=()=>{if(!x||x.length===0)return null;const e=[];let c=l;for(const i of x){const t=c.find(s=>s.value===i);if(t)e.push(D(t.label)),c=t.children||[];else break}return e.join(ae)},U=(e,c)=>{if(e.disabled)return;const i=[..._.slice(0,c),e.value];if(T(i),!e.children||e.children.length===0){if(M||K(i),u){const t=[];let s=l;for(const r of i){const n=s.find(p=>p.value===r);n&&(t.push(n),s=n.children||[])}u(i,t)}w(!1)}},ue=e=>{e?.stopPropagation(),!h&&(M||K([]),u&&u([],[]))},pe=(e,c)=>{ee==="hover"&&!e.disabled&&T([..._.slice(0,c),e.value])},me=e=>{if(B(!0),h)return;if(!y){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),W());return}const c=[l];let i=l;for(let r=0;r<_.length;r++){const n=_[r],p=i.find(O=>O.value===n);if(p&&p.children&&p.children.length>0)c.push(p.children),i=p.children;else break}const t=c[o]||[],s=V[o]||0;switch(e.key){case"ArrowDown":e.preventDefault(),v(r=>{const n=[...r];return n[o]=Math.min(s+1,t.length-1),n});break;case"ArrowUp":e.preventDefault(),v(r=>{const n=[...r];return n[o]=Math.max(s-1,0),n});break;case"ArrowRight":{e.preventDefault();const r=t[s];r&&r.children&&r.children.length>0&&(T([..._.slice(0,o),r.value]),b(o+1),v(n=>[...n.slice(0,o+1),0]));break}case"ArrowLeft":e.preventDefault(),o>0&&(b(o-1),v(r=>r.slice(0,o)));break;case"Enter":case" ":{e.preventDefault();const r=t[s];r&&U(r,o);break}case"Escape":e.preventDefault(),w(!1),b(-1),S.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),v(r=>{const n=[...r];return n[o]=0,n});break;case"End":e.preventDefault(),v(r=>{const n=[...r];return n[o]=t.length-1,n});break;case"Tab":y&&(w(!1),b(-1));break}},he=()=>{const e=[];let c=l;e.push(c);for(let i=0;i<_.length;i++){const t=_[i],s=c.find(r=>r.value===t);if(s&&s.children&&s.children.length>0)e.push(s.children),c=s.children;else break}return e.map((i,t)=>d.jsx("div",{className:"wim-cascader__menu",role:"menu",children:i.map((s,r)=>{const n=_[t]===s.value,p=o===t&&V[t]===r,O=x[t]===s.value,ye=s.children&&s.children.length>0;return d.jsx(be,{className:q("wim-cascader__menu-item",O&&"wim-cascader__menu-item--selected"),active:p||n,disabled:s.disabled,onClick:$=>{$.stopPropagation(),U(s,t)},onMouseEnter:()=>{pe(s,t),b(t),v($=>[...$.slice(0,t),r])},rightSection:ye?d.jsx(ve,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${g}-menu-${t}-option-${r}`,"aria-selected":O,tabIndex:-1,children:D(s.label)},s.value)})},t))},P=de();return d.jsx(ge,{label:F,error:A,required:J,layout:Q,labelId:N,errorId:R,className:X,children:d.jsxs("div",{className:"wim-cascader",ref:S,onMouseMove:()=>B(!1),"data-keyboard-nav":ie,...te,children:[d.jsx(fe,{disabled:h,allowClear:re,hasValue:!!P,onClear:ue,status:A?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:y}],className:q(y&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:le,className:q("wim-cascader__trigger",h&&"wim-cascader__trigger--disabled"),onClick:W,onKeyDown:me,tabIndex:h?-1:0,role:"combobox","aria-expanded":y,"aria-controls":H,"aria-haspopup":"listbox","aria-disabled":h,"aria-labelledby":N,"aria-label":N?void 0:se,"aria-describedby":R,"aria-invalid":!!A,"aria-activedescendant":y&&o>=0?`${g}-menu-${o}-option-${V[o]}`:void 0,children:d.jsx("div",{className:q("wim-cascader__value",!P&&"wim-cascader__value--placeholder"),children:P||ne})})}),d.jsx(_e,{show:y&&!h,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:H,className:"wim-cascader__dropdown",children:he()})]})})};f.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the trigger when no visible label is provided"}}};const $e={title:"Components/Advanced Inputs/Cascader",component:f,parameters:{layout:"centered"}},E={render:l=>{const{t:a}=k(C),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},I={render:l=>{const{t:a}=k(C),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},L={render:l=>{const{t:a}=k(C),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,expandTrigger:"hover",placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},z={render:l=>{const{t:a}=k(C);return d.jsx(f,{...l,disabled:!0,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},j={render:l=>{const{t:a}=k(C),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"],"aria-label":"Location"})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story_cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story_cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story_cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story_cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story_cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story_cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} placeholder={t("story_cascader_placeholder")} aria-label={t("story_cascader_placeholder")} />;
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story_cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story_cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story_cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story_cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story_cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story_cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} label={t("story_cascader_placeholder")} placeholder={t("story_cascader_placeholder")} />;
  }
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story_cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story_cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story_cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} expandTrigger="hover" placeholder={t("story_cascader_placeholder")} aria-label={t("story_cascader_placeholder")} />;
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} aria-label={t("story_cascader_placeholder")} />;
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story_cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story_cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story_cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} aria-label="Location" />;
  }
}`,...j.parameters?.docs?.source}}};const Fe=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"];export{j as CustomSeparator,E as Default,z as Disabled,L as HoverExpand,I as WithLabel,Fe as __namedExportsOrder,$e as default};
