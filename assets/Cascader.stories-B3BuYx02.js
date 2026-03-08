import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DQwmcauy.js";import{c as x}from"./index-Bk7p5LNu.js";import{T as ae}from"./Transition-lFCC-9-p.js";import{I}from"./Icon-BSJg9_bB.js";import{B as re}from"./BaseListItem-CNXkdMhM.js";import{u as p}from"./useTranslation-CZ9vchf1.js";const u=({options:t=[],value:e,onChange:o,placeholder:D,label:O,className:L,disabled:d=!1,defaultValue:H,id:R,expandTrigger:W="click",separator:F=" / ",allowClear:M=!1,...B})=>{const{t:_}=p("common"),$=D??_("select_option"),G=m.useId(),N=R||G,V=`wim-cascader-label-${N}`,A=`wim-cascader-trigger-${N}`,[y,T]=m.useState(!1),[J,E]=m.useState(H||[]),[h,j]=m.useState([]),z=m.useRef(null),q=e!==void 0,i=q?e:J;m.useEffect(()=>{const r=l=>{z.current&&!z.current.contains(l.target)&&T(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const K=()=>{d||(T(!y),y||j(i||[]))},Q=()=>{if(!i||i.length===0)return null;const r=[];let l=t;for(const c of i){const n=l.find(a=>a.value===c);if(n)r.push(_(n.label)),l=n.children||[];else break}return r.join(F)},U=(r,l)=>{if(r.disabled)return;const c=[...h.slice(0,l),r.value];if(j(c),!r.children||r.children.length===0){if(q||E(c),o){const n=[];let a=t;for(const v of c){const b=a.find(S=>S.value===v);b&&(n.push(b),a=b.children||[])}o(c,n)}T(!1)}},X=r=>{r.stopPropagation(),!d&&(q||E([]),o&&o([],[]))},Y=(r,l)=>{W==="hover"&&!r.disabled&&j([...h.slice(0,l),r.value])},Z=()=>{const r=[];let l=t;r.push(l);for(let c=0;c<h.length;c++){const n=h[c],a=l.find(v=>v.value===n);if(a&&a.children&&a.children.length>0)r.push(a.children),l=a.children;else break}return r.map((c,n)=>s.jsx("div",{className:"wim-cascader__menu",children:c.map(a=>{const v=h[n]===a.value,b=i[n]===a.value,S=a.children&&a.children.length>0;return s.jsx(re,{className:x("wim-cascader__menu-item",b&&"wim-cascader__menu-item--selected"),active:v,disabled:a.disabled,onClick:ee=>{ee.stopPropagation(),U(a,n)},onMouseEnter:()=>Y(a,n),rightSection:S?s.jsx(I,{name:"ChevronRightIcon",size:"small"}):void 0,role:"menuitem",children:_(a.label)},a.value)})},n))},P=Q();return s.jsxs("div",{className:x("wim-cascader",L),ref:z,...B,children:[O&&s.jsx("label",{id:V,htmlFor:A,className:"wim-cascader__label",children:_(O)}),s.jsxs("div",{id:A,className:x("wim-cascader__trigger",y&&"wim-cascader__trigger--open",d&&"wim-cascader__trigger--disabled"),onClick:K,tabIndex:d?-1:0,role:"combobox","aria-expanded":y,"aria-haspopup":"listbox","aria-disabled":d,"aria-labelledby":O?V:void 0,children:[s.jsx("div",{className:x("wim-cascader__value",!P&&"wim-cascader__value--placeholder"),children:P||$}),s.jsxs("div",{className:"wim-cascader__icons",children:[M&&i&&i.length>0&&!d&&s.jsx("button",{type:"button",className:"wim-cascader__clear",onClick:X,"aria-label":_("a11y_clear_selection"),children:s.jsx(I,{name:"CloseIcon",size:"small"})}),s.jsx("div",{className:"wim-cascader__icon",children:s.jsx(I,{name:"ChevronDownIcon",size:"medium"})})]})]}),s.jsx(ae,{show:y&&!d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:Z()})]})};u.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const se={title:"Components/Advanced Inputs/Cascader",component:u,parameters:{layout:"centered"}},g={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return s.jsx(u,{...t,options:o,placeholder:e("story_cascader_placeholder")})}},f={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return s.jsx(u,{...t,options:o,label:e("story_cascader_placeholder"),placeholder:e("story_cascader_placeholder")})}},k={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return s.jsx(u,{...t,options:o,expandTrigger:"hover",placeholder:e("story_cascader_placeholder")})}},w={render:t=>{const{t:e}=p(["docs","common","components"]);return s.jsx(u,{...t,disabled:!0,placeholder:e("story_cascader_placeholder")})}},C={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return s.jsx(u,{...t,options:o,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ne=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],me=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:C,Default:g,Disabled:w,HoverExpand:k,WithLabel:f,__namedExportsOrder:ne,default:se},Symbol.toStringTag,{value:"Module"}));export{me as C,g as D,k as H,f as W,w as a,C as b};
