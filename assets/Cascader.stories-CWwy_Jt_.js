import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DgQoBtfe.js";import{c as x}from"./index-CFIryxeI.js";import{T as ee}from"./Transition-B3UVxOIU.js";import{I}from"./Icon-C-Y18G8f.js";import{B as ae}from"./BaseListItem-akGzRBd9.js";import{u as p}from"./useTranslation-DccyvZwG.js";const u=({options:n=[],value:c,onChange:t,placeholder:L="Select",label:O,className:P,disabled:d=!1,defaultValue:H,id:R,expandTrigger:W="click",separator:F=" / ",allowClear:M=!1,...B})=>{const{t:_}=p("common"),$=m.useId(),V=R||$,N=`wim-cascader-label-${V}`,A=`wim-cascader-trigger-${V}`,[y,T]=m.useState(!1),[G,E]=m.useState(H||[]),[h,j]=m.useState([]),z=m.useRef(null),q=c!==void 0,i=q?c:G;m.useEffect(()=>{const a=l=>{z.current&&!z.current.contains(l.target)&&T(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const J=()=>{d||(T(!y),y||j(i||[]))},K=()=>{if(!i||i.length===0)return null;const a=[];let l=n;for(const o of i){const s=l.find(e=>e.value===o);if(s)a.push(_(s.label)),l=s.children||[];else break}return a.join(F)},Q=(a,l)=>{if(a.disabled)return;const o=[...h.slice(0,l),a.value];if(j(o),!a.children||a.children.length===0){if(q||E(o),t){const s=[];let e=n;for(const v of o){const b=e.find(S=>S.value===v);b&&(s.push(b),e=b.children||[])}t(o,s)}T(!1)}},U=a=>{a.stopPropagation(),!d&&(q||E([]),t&&t([],[]))},X=(a,l)=>{W==="hover"&&!a.disabled&&j([...h.slice(0,l),a.value])},Y=()=>{const a=[];let l=n;a.push(l);for(let o=0;o<h.length;o++){const s=h[o],e=l.find(v=>v.value===s);if(e&&e.children&&e.children.length>0)a.push(e.children),l=e.children;else break}return a.map((o,s)=>r.jsx("div",{className:"wim-cascader__menu",children:o.map(e=>{const v=h[s]===e.value,b=i[s]===e.value,S=e.children&&e.children.length>0;return r.jsx(ae,{className:x("wim-cascader__menu-item",b&&"wim-cascader__menu-item--selected"),active:v,disabled:e.disabled,onClick:Z=>{Z.stopPropagation(),Q(e,s)},onMouseEnter:()=>X(e,s),rightSection:S?r.jsx(I,{name:"ChevronRightIcon",size:"small"}):void 0,role:"menuitem",children:_(e.label)},e.value)})},s))},D=K();return r.jsxs("div",{className:x("wim-cascader",P),ref:z,...B,children:[O&&r.jsx("label",{id:N,htmlFor:A,className:"wim-cascader__label",children:_(O)}),r.jsxs("div",{id:A,className:x("wim-cascader__trigger",y&&"wim-cascader__trigger--open",d&&"wim-cascader__trigger--disabled"),onClick:J,tabIndex:d?-1:0,role:"combobox","aria-expanded":y,"aria-haspopup":"listbox","aria-disabled":d,"aria-labelledby":O?N:void 0,children:[r.jsx("div",{className:x("wim-cascader__value",!D&&"wim-cascader__value--placeholder"),children:D||_(L)}),r.jsxs("div",{className:"wim-cascader__icons",children:[M&&i&&i.length>0&&!d&&r.jsx("button",{type:"button",className:"wim-cascader__clear",onClick:U,"aria-label":_("a11y_clear_selection"),children:r.jsx(I,{name:"CloseIcon",size:"small"})}),r.jsx("div",{className:"wim-cascader__icon",children:r.jsx(I,{name:"ChevronDownIcon",size:"medium"})})]})]}),r.jsx(ee,{show:y&&!d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:Y()})]})};u.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const re={title:"Components/Advanced Inputs/Cascader",component:u,parameters:{layout:"centered"}},g={render:n=>{const{t:c}=p("docs"),t=[{label:"story_cascader_tokyo",value:"tokyo",children:[{label:"story_cascader_shibuya",value:"shibuya",children:[{label:"story_cascader_dogenzaka",value:"dogenzaka"}]}]},{label:"story_cascader_osaka",value:"osaka",children:[{label:"story_cascader_osaka_city",value:"osaka_city",children:[{label:"story_cascader_umeda",value:"umeda"}]}]}];return r.jsx(u,{...n,options:t,placeholder:c("story_cascader_placeholder")})}},f={render:n=>{const{t:c}=p("docs"),t=[{label:"story_cascader_tokyo",value:"tokyo",children:[{label:"story_cascader_shibuya",value:"shibuya",children:[{label:"story_cascader_dogenzaka",value:"dogenzaka"}]}]},{label:"story_cascader_osaka",value:"osaka",children:[{label:"story_cascader_osaka_city",value:"osaka_city",children:[{label:"story_cascader_umeda",value:"umeda"}]}]}];return r.jsx(u,{...n,options:t,label:"story_cascader_placeholder",placeholder:"story_cascader_placeholder"})}},k={render:n=>{const{t:c}=p("docs"),t=[{label:"story_cascader_tokyo",value:"tokyo",children:[{label:"story_cascader_shibuya",value:"shibuya",children:[{label:"story_cascader_dogenzaka",value:"dogenzaka"}]}]}];return r.jsx(u,{...n,options:t,expandTrigger:"hover",placeholder:c("story_cascader_placeholder")})}},w={render:n=>{const{t:c}=p("docs");return r.jsx(u,{...n,disabled:!0,placeholder:c("story_cascader_placeholder")})}},C={render:n=>{const{t:c}=p("docs"),t=[{label:"story_cascader_tokyo",value:"tokyo",children:[{label:"story_cascader_shibuya",value:"shibuya",children:[{label:"story_cascader_dogenzaka",value:"dogenzaka"}]}]}];return r.jsx(u,{...n,options:t,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const options: CascaderOption[] = [{
      label: "story_cascader_tokyo",
      value: "tokyo",
      children: [{
        label: "story_cascader_shibuya",
        value: "shibuya",
        children: [{
          label: "story_cascader_dogenzaka",
          value: "dogenzaka"
        }]
      }]
    }, {
      label: "story_cascader_osaka",
      value: "osaka",
      children: [{
        label: "story_cascader_osaka_city",
        value: "osaka_city",
        children: [{
          label: "story_cascader_umeda",
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
    } = useTranslation("docs");
    const options: CascaderOption[] = [{
      label: "story_cascader_tokyo",
      value: "tokyo",
      children: [{
        label: "story_cascader_shibuya",
        value: "shibuya",
        children: [{
          label: "story_cascader_dogenzaka",
          value: "dogenzaka"
        }]
      }]
    }, {
      label: "story_cascader_osaka",
      value: "osaka",
      children: [{
        label: "story_cascader_osaka_city",
        value: "osaka_city",
        children: [{
          label: "story_cascader_umeda",
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} label="story_cascader_placeholder" placeholder="story_cascader_placeholder" />;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const options: CascaderOption[] = [{
      label: "story_cascader_tokyo",
      value: "tokyo",
      children: [{
        label: "story_cascader_shibuya",
        value: "shibuya",
        children: [{
          label: "story_cascader_dogenzaka",
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
    } = useTranslation("docs");
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const options: CascaderOption[] = [{
      label: "story_cascader_tokyo",
      value: "tokyo",
      children: [{
        label: "story_cascader_shibuya",
        value: "shibuya",
        children: [{
          label: "story_cascader_dogenzaka",
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} />;
  }
}`,...C.parameters?.docs?.source}}};const se=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ue=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:C,Default:g,Disabled:w,HoverExpand:k,WithLabel:f,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as C,g as D,k as H,f as W,w as a,C as b};
