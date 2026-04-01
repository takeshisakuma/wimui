import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as be,A as O}from"./iframe-Cm7axuZH.js";import{c as I}from"./index-DlTOaDQ8.js";import{T as fe}from"./Transition-CmKr0OC5.js";import{I as ve}from"./Icon-gOPTt6zC.js";import{B as ge}from"./BaseListItem-BjG3HH1u.js";import{I as _e}from"./InputBase-WbJoeDtG.js";import{F as ke}from"./FieldTemplate-BptL9gjC.js";import{u as N}from"./useTranslation-NKv2iRzU.js";function J(s){return typeof s=="string"?s:typeof s=="number"?String(s):""}const _=({options:s=[],value:a,onChange:u,placeholder:P="Select option",label:$,error:R,required:Q,layout:X,className:Y,disabled:y=!1,defaultValue:Z,id:ee,expandTrigger:ae="click",separator:F=" / ",allowClear:re=!1,"aria-label":te,...ne})=>{const se=m.useId(),k=ee||`wim-cascader-${se}`,j=$?`${k}-label`:void 0,H=R?`${k}-error`:void 0,oe=`${k}-trigger`,K=`${k}-popup`,[h,w]=m.useState(!1),[le,W]=m.useState(Z||[]),[b,q]=m.useState([]),[i,g]=m.useState(-1),[z,f]=m.useState([]),[ce,B]=m.useState(!1),E=m.useRef(null),D=a!==void 0,v=D?a:le;m.useEffect(()=>{const e=c=>{E.current&&!E.current.contains(c.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const U=()=>{if(!y){const e=!h;w(e),e?(q(v||[]),g(0),f([0])):g(-1)}},ie=()=>{if(!v||v.length===0)return null;const e=[];let c=s;for(const l of v){const r=c.find(n=>n.value===l);if(r)e.push(r.label),c=r.children||[];else break}return e.length===0?null:e.map((l,r)=>d.jsxs(be.Fragment,{children:[l,r<e.length-1&&d.jsx("span",{children:F})]},r))},G=(e,c)=>{if(e.disabled)return;const l=[...b.slice(0,c),e.value];if(q(l),!e.children||e.children.length===0){if(D||W(l),u){const r=[];let n=s;for(const t of l){const o=n.find(p=>p.value===t);o&&(r.push(o),n=o.children||[])}u(l,r)}w(!1)}},de=e=>{e?.stopPropagation(),!y&&(D||W([]),u&&u([],[]))},ue=(e,c)=>{ae==="hover"&&!e.disabled&&q([...b.slice(0,c),e.value])},pe=e=>{if(B(!0),y)return;if(!h){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),U());return}const c=[s];let l=s;for(let t=0;t<b.length;t++){const o=b[t],p=l.find(L=>L.value===o);if(p&&p.children&&p.children.length>0)c.push(p.children),l=p.children;else break}const r=c[i]||[],n=z[i]||0;switch(e.key){case"ArrowDown":e.preventDefault(),f(t=>{const o=[...t];return o[i]=Math.min(n+1,r.length-1),o});break;case"ArrowUp":e.preventDefault(),f(t=>{const o=[...t];return o[i]=Math.max(n-1,0),o});break;case"ArrowRight":{e.preventDefault();const t=r[n];t&&t.children&&t.children.length>0&&(q([...b.slice(0,i),t.value]),g(i+1),f(o=>[...o.slice(0,i+1),0]));break}case"ArrowLeft":e.preventDefault(),i>0&&(g(i-1),f(t=>t.slice(0,i)));break;case"Enter":case" ":{e.preventDefault();const t=r[n];t&&G(t,i);break}case"Escape":e.preventDefault(),w(!1),g(-1),E.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),f(t=>{const o=[...t];return o[i]=0,o});break;case"End":e.preventDefault(),f(t=>{const o=[...t];return o[i]=r.length-1,o});break;case"Tab":h&&(w(!1),g(-1));break}},me=()=>{const e=[];let c=s;e.push(c);for(let l=0;l<b.length;l++){const r=b[l],n=c.find(t=>t.value===r);if(n&&n.children&&n.children.length>0)e.push(n.children),c=n.children;else break}return e.map((l,r)=>d.jsx("div",{className:"wim-cascader__menu",role:"menu",children:l.map((n,t)=>{const o=b[r]===n.value,p=i===r&&z[r]===t,L=v[r]===n.value,he=n.children&&n.children.length>0;return d.jsx(ge,{className:I("wim-cascader__menu-item",L&&"wim-cascader__menu-item--selected"),active:p||o,disabled:n.disabled,onClick:M=>{M.stopPropagation(),G(n,r)},onMouseEnter:()=>{ue(n,r),g(r),f(M=>[...M.slice(0,r),t])},rightSection:he?d.jsx(ve,{name:"ChevronRightIcon",size:"sm"}):void 0,role:"option",id:`${k}-menu-${r}-option-${t}`,"aria-selected":L,tabIndex:-1,children:n.label},n.value)})},r))},V=ie(),ye=()=>{if(!v||v.length===0)return"";const e=[];let c=s;for(const l of v){const r=c.find(n=>n.value===l);if(r)e.push(J(r.label)),c=r.children||[];else break}return e.join(F)};return d.jsx(ke,{label:$,error:R,required:Q,layout:X,labelId:j,errorId:H,className:Y,children:d.jsxs("div",{className:"wim-cascader",ref:E,onMouseMove:()=>B(!1),"data-keyboard-nav":ce,...ne,children:[d.jsx(_e,{disabled:y,allowClear:re,hasValue:!!V,onClear:de,intent:R?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:h}],className:I(h&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:oe,className:I("wim-cascader__trigger",y&&"wim-cascader__trigger--disabled"),onClick:U,onKeyDown:pe,tabIndex:y?-1:0,role:"combobox","aria-expanded":h,"aria-controls":K,"aria-haspopup":"listbox","aria-disabled":y,"aria-labelledby":j,"aria-label":j?void 0:te||ye()||J(P),"aria-describedby":H,"aria-invalid":!!R,"aria-activedescendant":h&&i>=0?`${k}-menu-${i}-option-${z[i]}`:void 0,children:d.jsx("div",{className:I("wim-cascader__value",!V&&"wim-cascader__value--placeholder"),children:V||P})})}),d.jsx(fe,{show:h&&!y,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:K,className:"wim-cascader__dropdown",children:me()})]})})};_.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Select option"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the trigger when no visible label is provided"}}};const we={title:"Components/Advanced Inputs/Cascader",component:_,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"}}},x={render:s=>{const{t:a}=N(O),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story.cascader_osaka"),value:"osaka",children:[{label:a("story.cascader_osaka_city"),value:"osaka_city",children:[{label:a("story.cascader_umeda"),value:"umeda"}]}]}];return d.jsx(_,{...s,options:u,placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},C={render:s=>{const{t:a}=N(O),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story.cascader_osaka"),value:"osaka",children:[{label:a("story.cascader_osaka_city"),value:"osaka_city",children:[{label:a("story.cascader_umeda"),value:"umeda"}]}]}];return d.jsx(_,{...s,options:u,label:a("story.cascader_placeholder"),placeholder:a("story.cascader_placeholder")})}},S={render:s=>{const{t:a}=N(O),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(_,{...s,options:u,expandTrigger:"hover",placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},T={render:s=>{const{t:a}=N(O);return d.jsx(_,{...s,disabled:!0,placeholder:a("story.cascader_placeholder"),"aria-label":a("story.cascader_placeholder")})}},A={render:s=>{const{t:a}=N(O),u=[{label:a("story.cascader_tokyo"),value:"tokyo",children:[{label:a("story.cascader_shibuya"),value:"shibuya",children:[{label:a("story.cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(_,{...s,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"],"aria-label":"Location"})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...A.parameters?.docs?.source}}};const xe=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],Ie=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:A,Default:x,Disabled:T,HoverExpand:S,WithLabel:C,__namedExportsOrder:xe,default:we},Symbol.toStringTag,{value:"Module"}));export{Ie as C,x as D,S as H,C as W,T as a,A as b};
