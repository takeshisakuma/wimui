import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-SL2HqV3D.js";import{c as T}from"./index-30w8ikAG.js";import{T as ne}from"./Transition-DVzvZ3NQ.js";import{I as te}from"./Icon-LsAuz8T1.js";import{B as oe}from"./BaseListItem-wx-dS4Xz.js";import{I as le}from"./InputBase-DpJHuTQg.js";import{F as ce}from"./FieldTemplate-DewR4Q5O.js";import{u as p}from"./useTranslation-ZF4WB21B.js";const i=({options:t=[],value:e,onChange:o,placeholder:L,label:A,error:w,required:P,layout:F,className:H,disabled:d=!1,defaultValue:R,id:W,expandTrigger:$="click",separator:B=" / ",allowClear:M=!1,...G})=>{const{t:x}=p("common"),J=L??x("select_option"),K=m.useId(),O=W||`wim-cascader-${K}`,E=A?`${O}-label`:void 0,N=w?`${O}-error`:void 0,Q=`${O}-trigger`,[u,q]=m.useState(!1),[U,D]=m.useState(R||[]),[y,z]=m.useState([]),j=m.useRef(null),I=e!==void 0,_=I?e:U;m.useEffect(()=>{const r=l=>{j.current&&!j.current.contains(l.target)&&q(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const X=()=>{d||(q(!u),u||z(_||[]))},Y=()=>{if(!_||_.length===0)return null;const r=[];let l=t;for(const c of _){const s=l.find(a=>a.value===c);if(s)r.push(x(s.label)),l=s.children||[];else break}return r.join(B)},Z=(r,l)=>{if(r.disabled)return;const c=[...y.slice(0,l),r.value];if(z(c),!r.children||r.children.length===0){if(I||D(c),o){const s=[];let a=t;for(const h of c){const v=a.find(V=>V.value===h);v&&(s.push(v),a=v.children||[])}o(c,s)}q(!1)}},ee=r=>{d||(I||D([]),o&&o([],[]))},ae=(r,l)=>{$==="hover"&&!r.disabled&&z([...y.slice(0,l),r.value])},re=()=>{const r=[];let l=t;r.push(l);for(let c=0;c<y.length;c++){const s=y[c],a=l.find(h=>h.value===s);if(a&&a.children&&a.children.length>0)r.push(a.children),l=a.children;else break}return r.map((c,s)=>n.jsx("div",{className:"wim-cascader__menu",children:c.map(a=>{const h=y[s]===a.value,v=_[s]===a.value,V=a.children&&a.children.length>0;return n.jsx(oe,{className:T("wim-cascader__menu-item",v&&"wim-cascader__menu-item--selected"),active:h,disabled:a.disabled,onClick:se=>{se.stopPropagation(),Z(a,s)},onMouseEnter:()=>ae(a,s),rightSection:V?n.jsx(te,{name:"ChevronRightIcon",size:"small"}):void 0,role:"menuitem",children:x(a.label)},a.value)})},s))},S=Y();return n.jsx(ce,{label:A,error:w,required:P,layout:F,labelId:E,errorId:N,className:H,children:n.jsxs("div",{className:"wim-cascader",ref:j,...G,children:[n.jsx(le,{disabled:d,allowClear:M,hasValue:!!S,onClear:()=>ee(),status:w?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:u}],className:T(u&&"wim-cascader__trigger--open"),children:n.jsx("div",{id:Q,className:T("wim-cascader__trigger",d&&"wim-cascader__trigger--disabled"),onClick:X,tabIndex:d?-1:0,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox","aria-disabled":d,"aria-labelledby":E,"aria-describedby":N,"aria-invalid":!!w,children:n.jsx("div",{className:T("wim-cascader__value",!S&&"wim-cascader__value--placeholder"),children:S||J})})}),n.jsx(ne,{show:u&&!d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:re()})]})})};i.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const de={title:"Components/Advanced Inputs/Cascader",component:i,parameters:{layout:"centered"}},b={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return n.jsx(i,{...t,options:o,placeholder:e("story_cascader_placeholder")})}},g={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return n.jsx(i,{...t,options:o,label:e("story_cascader_placeholder"),placeholder:e("story_cascader_placeholder")})}},f={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return n.jsx(i,{...t,options:o,expandTrigger:"hover",placeholder:e("story_cascader_placeholder")})}},k={render:t=>{const{t:e}=p(["docs","common","components"]);return n.jsx(i,{...t,disabled:!0,placeholder:e("story_cascader_placeholder")})}},C={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return n.jsx(i,{...t,options:o,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    return <Cascader {...args} options={options} placeholder={t("story_cascader_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    return <Cascader {...args} options={options} expandTrigger="hover" placeholder={t("story_cascader_placeholder")} />;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} />;
  }
}`,...C.parameters?.docs?.source}}};const ie=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],fe=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:C,Default:b,Disabled:k,HoverExpand:f,WithLabel:g,__namedExportsOrder:ie,default:de},Symbol.toStringTag,{value:"Module"}));export{fe as C,b as D,f as H,g as W,k as a,C as b};
