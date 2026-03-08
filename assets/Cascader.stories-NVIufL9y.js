import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DUo8Bj02.js";import{c as x}from"./index-CI1dtVTQ.js";import{T as ee}from"./Transition-B6GdazEw.js";import{I}from"./Icon-C5_8LwyI.js";import{B as ae}from"./BaseListItem-xP86GDCQ.js";import{u as p}from"./useTranslation-C2tw1dPV.js";const u=({options:t=[],value:e,onChange:o,placeholder:L="Select",label:O,className:P,disabled:d=!1,defaultValue:H,id:R,expandTrigger:W="click",separator:F=" / ",allowClear:M=!1,...B})=>{const{t:_}=p("common"),$=m.useId(),V=R||$,N=`wim-cascader-label-${V}`,A=`wim-cascader-trigger-${V}`,[y,T]=m.useState(!1),[G,E]=m.useState(H||[]),[h,j]=m.useState([]),z=m.useRef(null),q=e!==void 0,i=q?e:G;m.useEffect(()=>{const r=l=>{z.current&&!z.current.contains(l.target)&&T(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const J=()=>{d||(T(!y),y||j(i||[]))},K=()=>{if(!i||i.length===0)return null;const r=[];let l=t;for(const c of i){const n=l.find(a=>a.value===c);if(n)r.push(_(n.label)),l=n.children||[];else break}return r.join(F)},Q=(r,l)=>{if(r.disabled)return;const c=[...h.slice(0,l),r.value];if(j(c),!r.children||r.children.length===0){if(q||E(c),o){const n=[];let a=t;for(const v of c){const b=a.find(S=>S.value===v);b&&(n.push(b),a=b.children||[])}o(c,n)}T(!1)}},U=r=>{r.stopPropagation(),!d&&(q||E([]),o&&o([],[]))},X=(r,l)=>{W==="hover"&&!r.disabled&&j([...h.slice(0,l),r.value])},Y=()=>{const r=[];let l=t;r.push(l);for(let c=0;c<h.length;c++){const n=h[c],a=l.find(v=>v.value===n);if(a&&a.children&&a.children.length>0)r.push(a.children),l=a.children;else break}return r.map((c,n)=>s.jsx("div",{className:"wim-cascader__menu",children:c.map(a=>{const v=h[n]===a.value,b=i[n]===a.value,S=a.children&&a.children.length>0;return s.jsx(ae,{className:x("wim-cascader__menu-item",b&&"wim-cascader__menu-item--selected"),active:v,disabled:a.disabled,onClick:Z=>{Z.stopPropagation(),Q(a,n)},onMouseEnter:()=>X(a,n),rightSection:S?s.jsx(I,{name:"ChevronRightIcon",size:"small"}):void 0,role:"menuitem",children:_(a.label)},a.value)})},n))},D=K();return s.jsxs("div",{className:x("wim-cascader",P),ref:z,...B,children:[O&&s.jsx("label",{id:N,htmlFor:A,className:"wim-cascader__label",children:_(O)}),s.jsxs("div",{id:A,className:x("wim-cascader__trigger",y&&"wim-cascader__trigger--open",d&&"wim-cascader__trigger--disabled"),onClick:J,tabIndex:d?-1:0,role:"combobox","aria-expanded":y,"aria-haspopup":"listbox","aria-disabled":d,"aria-labelledby":O?N:void 0,children:[s.jsx("div",{className:x("wim-cascader__value",!D&&"wim-cascader__value--placeholder"),children:D||_(L)}),s.jsxs("div",{className:"wim-cascader__icons",children:[M&&i&&i.length>0&&!d&&s.jsx("button",{type:"button",className:"wim-cascader__clear",onClick:U,"aria-label":_("a11y_clear_selection"),children:s.jsx(I,{name:"CloseIcon",size:"small"})}),s.jsx("div",{className:"wim-cascader__icon",children:s.jsx(I,{name:"ChevronDownIcon",size:"medium"})})]})]}),s.jsx(ee,{show:y&&!d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:Y()})]})};u.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const re={title:"Components/Advanced Inputs/Cascader",component:u,parameters:{layout:"centered"}},g={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return s.jsx(u,{...t,options:o,placeholder:e("story_cascader_placeholder")})}},f={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:e("story_cascader_osaka"),value:"osaka",children:[{label:e("story_cascader_osaka_city"),value:"osaka_city",children:[{label:e("story_cascader_umeda"),value:"umeda"}]}]}];return s.jsx(u,{...t,options:o,label:e("story_cascader_placeholder"),placeholder:e("story_cascader_placeholder")})}},k={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return s.jsx(u,{...t,options:o,expandTrigger:"hover",placeholder:e("story_cascader_placeholder")})}},w={render:t=>{const{t:e}=p(["docs","common","components"]);return s.jsx(u,{...t,disabled:!0,placeholder:e("story_cascader_placeholder")})}},C={render:t=>{const{t:e}=p(["docs","common","components"]),o=[{label:e("story_cascader_tokyo"),value:"tokyo",children:[{label:e("story_cascader_shibuya"),value:"shibuya",children:[{label:e("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return s.jsx(u,{...t,options:o,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const se=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ue=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:C,Default:g,Disabled:w,HoverExpand:k,WithLabel:f,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as C,g as D,k as H,f as W,w as a,C as b};
