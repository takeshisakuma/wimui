import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as fe,A as q}from"./iframe-By123agS.js";import{c as j}from"./index-DhHn5T7W.js";import{T as be}from"./Transition-Dh9PgyOR.js";import{I as ve}from"./Icon-jzV_n-kg.js";import{F as ge}from"./FieldTemplate-Cc8ARqCK.js";import{I as _e}from"./InputBase-CYPkr3jI.js";import{B as ke}from"./BaseListItem-DO2fi1oj.js";import{u as E}from"./useTranslation-svuQDxOH.js";function J(o){return typeof o=="string"?o:typeof o=="number"?String(o):""}const k=({options:o=[],value:a,onChange:u,placeholder:M="Select option",label:P,error:I,required:Q,layout:X,className:Y,disabled:y=!1,defaultValue:Z,id:ee,expandTrigger:ae="click",separator:F=" / ",allowClear:re=!1,"aria-label":te,...se})=>{const ne=m.useId(),f=ee||`wim-cascader-${ne}`,z=P?`${f}-label`:void 0,H=I?`${f}-error`:void 0,oe=`${f}-trigger`,K=`${f}-popup`,[p,w]=m.useState(!1),[le,W]=m.useState(Z||[]),[b,R]=m.useState([]),[l,_]=m.useState(-1),[x,v]=m.useState([]),[ce,B]=m.useState(!1),C=m.useRef(null),D=a!==void 0,g=D?a:le;m.useEffect(()=>{const e=i=>{C.current&&!C.current.contains(i.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),m.useEffect(()=>{if(p&&l>=0){const e=x[l],i=`${f}-menu-${l}-option-${e}`,n=C.current?.querySelector(`#${i}`);n&&n.scrollIntoView({block:"nearest",behavior:"smooth"})}},[l,x,p,f]);const U=()=>{if(!y){const e=!p;w(e),e?(R(g||[]),_(0),v([0])):_(-1)}},ie=()=>{if(!g||g.length===0)return null;const e=[];let i=o;for(const n of g){const r=i.find(s=>s.value===n);if(r)e.push(r.label),i=r.children||[];else break}return e.length===0?null:e.map((n,r)=>d.jsxs(fe.Fragment,{children:[n,r<e.length-1&&d.jsx("span",{children:F})]},r))},G=(e,i)=>{if(e.disabled)return;const n=[...b.slice(0,i),e.value];if(R(n),!e.children||e.children.length===0){if(D||W(n),u){const r=[];let s=o;for(const t of n){const c=s.find(h=>h.value===t);c&&(r.push(c),s=c.children||[])}u(n,r)}w(!1)}},de=e=>{e?.stopPropagation(),!y&&(D||W([]),u&&u([],[]))},ue=(e,i)=>{ae==="hover"&&!e.disabled&&R([...b.slice(0,i),e.value])},pe=e=>{if(B(!0),y)return;if(!p){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown"||e.key==="ArrowDown"&&e.altKey)&&(e.preventDefault(),U());return}const i=[o];let n=o;for(let t=0;t<b.length;t++){const c=b[t],h=n.find(L=>L.value===c);if(h&&h.children&&h.children.length>0)i.push(h.children),n=h.children;else break}const r=i[l]||[],s=x[l]||0;switch(e.key){case"ArrowDown":e.preventDefault(),v(t=>{const c=[...t];return c[l]=Math.min(s+1,r.length-1),c});break;case"ArrowUp":e.preventDefault(),v(t=>{const c=[...t];return c[l]=Math.max(s-1,0),c});break;case"ArrowRight":{e.preventDefault();const t=r[s];t&&t.children&&t.children.length>0&&(R([...b.slice(0,l),t.value]),_(l+1),v(c=>[...c.slice(0,l+1),0]));break}case"ArrowLeft":e.preventDefault(),l>0&&(_(l-1),v(t=>t.slice(0,l)));break;case"Enter":case" ":{e.preventDefault();const t=r[s];t&&G(t,l);break}case"Escape":e.preventDefault(),w(!1),_(-1),C.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),v(t=>{const c=[...t];return c[l]=0,c});break;case"End":e.preventDefault(),v(t=>{const c=[...t];return c[l]=r.length-1,c});break;case"Tab":p&&(w(!1),_(-1));break}},me=()=>{const e=[];let i=o;e.push(i);for(let n=0;n<b.length;n++){const r=b[n],s=i.find(t=>t.value===r);if(s&&s.children&&s.children.length>0)e.push(s.children),i=s.children;else break}return e.map((n,r)=>d.jsx("div",{className:"wim-cascader__menu",role:"listbox",children:n.map((s,t)=>{const c=b[r]===s.value,h=l===r&&x[r]===t,L=g[r]===s.value,ye=s.children&&s.children.length>0;return d.jsx(ke,{className:j("wim-cascader__menu-item",L&&"wim-cascader__menu-item--selected"),active:h||c,disabled:s.disabled,onClick:$=>{$.stopPropagation(),G(s,r)},onMouseEnter:()=>{ue(s,r),_(r),v($=>[...$.slice(0,r),t])},rightSection:ye?d.jsx(ve,{name:"ChevronRightIcon",size:"sm"}):void 0,role:"option",id:`${f}-menu-${r}-option-${t}`,"aria-selected":L,tabIndex:-1,children:s.label},s.value)})},r))},V=ie(),he=()=>{if(!g||g.length===0)return"";const e=[];let i=o;for(const n of g){const r=i.find(s=>s.value===n);if(r)e.push(J(r.label)),i=r.children||[];else break}return e.join(F)};return d.jsx(ge,{label:P,error:I,required:Q,layout:X,labelId:z,errorId:H,className:Y,children:d.jsxs("div",{className:"wim-cascader",ref:C,onMouseMove:()=>B(!1),"data-keyboard-nav":ce,...se,children:[d.jsx(_e,{disabled:y,allowClear:re,hasValue:!!V,onClear:de,intent:I?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:p}],className:j(p&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:oe,className:j("wim-cascader__trigger",y&&"wim-cascader__trigger--disabled"),onClick:U,onKeyDown:pe,tabIndex:y?-1:0,role:"combobox","aria-expanded":p,"aria-controls":K,"aria-haspopup":"listbox","aria-disabled":y,"aria-labelledby":z,"aria-label":z?void 0:te||he()||J(M),"aria-describedby":H,"aria-invalid":!!I,"aria-activedescendant":p&&l>=0?`${f}-menu-${l}-option-${x[l]}`:void 0,children:d.jsx("div",{className:j("wim-cascader__value",!V&&"wim-cascader__value--placeholder"),children:V||M})})}),d.jsx(be,{show:p&&!y,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:K,className:"wim-cascader__dropdown",children:me()})]})})};k.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Select option"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the trigger when no visible label is provided"}}};const we={title:"Components/Advanced Inputs/Cascader",component:k,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"}}},S={render:o=>{const{t:a}=E(q),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story.cascader_osaka"),value:"osaka",children:[{label:a("story.cascader_osaka_city"),value:"osaka_city",children:[{label:a("story.cascader_umeda"),value:"umeda"}]}]}];return d.jsx(k,{...o,options:u,placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},T={render:o=>{const{t:a}=E(q),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story.cascader_osaka"),value:"osaka",children:[{label:a("story.cascader_osaka_city"),value:"osaka_city",children:[{label:a("story.cascader_umeda"),value:"umeda"}]}]}];return d.jsx(k,{...o,options:u,label:a("story.cascader_placeholder"),placeholder:a("story.cascader_placeholder")})}},A={render:o=>{const{t:a}=E(q),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(k,{...o,options:u,expandTrigger:"hover",placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},O={render:o=>{const{t:a}=E(q);return d.jsx(k,{...o,disabled:!0,placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},N={render:o=>{const{t:a}=E(q),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(k,{...o,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"],"aria-label":"Location"})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story.cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story.cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story.cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story.cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story.cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story.cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} label={t("story.cascader_placeholder")} placeholder={t("story.cascader_placeholder")} />;
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} expandTrigger="hover" placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} aria-label="Location" />;
  }
}`,...N.parameters?.docs?.source}}};const xe=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:N,Default:S,Disabled:O,HoverExpand:A,WithLabel:T,__namedExportsOrder:xe,default:we},Symbol.toStringTag,{value:"Module"}));export{Le as C,S as D,A as H,T as W,O as a,N as b};
