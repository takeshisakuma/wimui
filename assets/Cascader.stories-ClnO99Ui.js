import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as m,A as q}from"./iframe-CF4lwqoS.js";import{c as j}from"./index-rEmvtr-m.js";import{T as _e}from"./Transition-B8jtpYyH.js";import{I as be}from"./Icon-BPSmrBcs.js";import{B as ve}from"./BaseListItem-Ro_MBII8.js";import{I as fe}from"./InputBase-4FDdjRuM.js";import{F as ge}from"./FieldTemplate-BV5fQsvD.js";import{u as k}from"./useTranslation-DtEA5sc5.js";const f=({options:l=[],value:a,onChange:u,placeholder:G,label:F,error:E,required:J,layout:Q,className:X,disabled:y=!1,defaultValue:Y,id:Z,expandTrigger:ee="click",separator:ae=" / ",allowClear:re=!1,"aria-label":se,...ne})=>{const{t:D}=k("common"),te=G??D("select_option"),oe=m.useId(),g=Z||`wim-cascader-${oe}`,N=F?`${g}-label`:void 0,H=E?`${g}-error`:void 0,le=`${g}-trigger`,R=`${g}-popup`,[h,w]=m.useState(!1),[ce,K]=m.useState(Y||[]),[_,I]=m.useState([]),[o,v]=m.useState(-1),[V,b]=m.useState([]),[ie,W]=m.useState(!1),L=m.useRef(null),M=a!==void 0,C=M?a:ce;m.useEffect(()=>{const e=c=>{L.current&&!L.current.contains(c.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const B=()=>{if(!y){const e=!h;w(e),e?(I(C||[]),v(0),b([0])):v(-1)}},de=()=>{if(!C||C.length===0)return null;const e=[];let c=l;for(const i of C){const n=c.find(s=>s.value===i);if(n)e.push(D(n.label)),c=n.children||[];else break}return e.join(ae)},U=(e,c)=>{if(e.disabled)return;const i=[..._.slice(0,c),e.value];if(I(i),!e.children||e.children.length===0){if(M||K(i),u){const n=[];let s=l;for(const r of i){const t=s.find(p=>p.value===r);t&&(n.push(t),s=t.children||[])}u(i,n)}w(!1)}},ue=e=>{e?.stopPropagation(),!y&&(M||K([]),u&&u([],[]))},pe=(e,c)=>{ee==="hover"&&!e.disabled&&I([..._.slice(0,c),e.value])},me=e=>{if(W(!0),y)return;if(!h){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),B());return}const c=[l];let i=l;for(let r=0;r<_.length;r++){const t=_[r],p=i.find(z=>z.value===t);if(p&&p.children&&p.children.length>0)c.push(p.children),i=p.children;else break}const n=c[o]||[],s=V[o]||0;switch(e.key){case"ArrowDown":e.preventDefault(),b(r=>{const t=[...r];return t[o]=Math.min(s+1,n.length-1),t});break;case"ArrowUp":e.preventDefault(),b(r=>{const t=[...r];return t[o]=Math.max(s-1,0),t});break;case"ArrowRight":{e.preventDefault();const r=n[s];r&&r.children&&r.children.length>0&&(I([..._.slice(0,o),r.value]),v(o+1),b(t=>[...t.slice(0,o+1),0]));break}case"ArrowLeft":e.preventDefault(),o>0&&(v(o-1),b(r=>r.slice(0,o)));break;case"Enter":case" ":{e.preventDefault();const r=n[s];r&&U(r,o);break}case"Escape":e.preventDefault(),w(!1),v(-1),L.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),b(r=>{const t=[...r];return t[o]=0,t});break;case"End":e.preventDefault(),b(r=>{const t=[...r];return t[o]=n.length-1,t});break;case"Tab":h&&(w(!1),v(-1));break}},ye=()=>{const e=[];let c=l;e.push(c);for(let i=0;i<_.length;i++){const n=_[i],s=c.find(r=>r.value===n);if(s&&s.children&&s.children.length>0)e.push(s.children),c=s.children;else break}return e.map((i,n)=>d.jsx("div",{className:"wim-cascader__menu",role:"menu",children:i.map((s,r)=>{const t=_[n]===s.value,p=o===n&&V[n]===r,z=C[n]===s.value,he=s.children&&s.children.length>0;return d.jsx(ve,{className:j("wim-cascader__menu-item",z&&"wim-cascader__menu-item--selected"),active:p||t,disabled:s.disabled,onClick:$=>{$.stopPropagation(),U(s,n)},onMouseEnter:()=>{pe(s,n),v(n),b($=>[...$.slice(0,n),r])},rightSection:he?d.jsx(be,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${g}-menu-${n}-option-${r}`,"aria-selected":z,tabIndex:-1,children:D(s.label)},s.value)})},n))},P=de();return d.jsx(ge,{label:F,error:E,required:J,layout:Q,labelId:N,errorId:H,className:X,children:d.jsxs("div",{className:"wim-cascader",ref:L,onMouseMove:()=>W(!1),"data-keyboard-nav":ie,...ne,children:[d.jsx(fe,{disabled:y,allowClear:re,hasValue:!!P,onClear:ue,status:E?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:h}],className:j(h&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:le,className:j("wim-cascader__trigger",y&&"wim-cascader__trigger--disabled"),onClick:B,onKeyDown:me,tabIndex:y?-1:0,role:"combobox","aria-expanded":h,"aria-controls":R,"aria-haspopup":"listbox","aria-disabled":y,"aria-labelledby":N,"aria-label":N?void 0:se,"aria-describedby":H,"aria-invalid":!!E,"aria-activedescendant":h&&o>=0?`${g}-menu-${o}-option-${V[o]}`:void 0,children:d.jsx("div",{className:j("wim-cascader__value",!P&&"wim-cascader__value--placeholder"),children:P||te})})}),d.jsx(_e,{show:h&&!y,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:R,className:"wim-cascader__dropdown",children:ye()})]})})};f.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the trigger when no visible label is provided"}}};const ke={title:"Components/Advanced Inputs/Cascader",component:f,parameters:{layout:"centered"}},x={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},A={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},S={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,expandTrigger:"hover",placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},T={render:l=>{const{t:a}=k(q);return d.jsx(f,{...l,disabled:!0,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},O={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"],"aria-label":"Location"})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} aria-label={t("story_cascader_placeholder")} />;
  }
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const we=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ze=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:O,Default:x,Disabled:T,HoverExpand:S,WithLabel:A,__namedExportsOrder:we,default:ke},Symbol.toStringTag,{value:"Module"}));export{ze as C,x as D,S as H,A as W,T as a,O as b};
