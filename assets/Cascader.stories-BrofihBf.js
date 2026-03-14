import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-CDoE-pWf.js";import{c as j}from"./index-D0Kn6Bmw.js";import{T as he}from"./Transition-B2hhvbso.js";import{I as ye}from"./Icon-B-05j6uF.js";import{B as _e}from"./BaseListItem-D9a2-JEG.js";import{I as be}from"./InputBase-C1SDmzlo.js";import{F as ve}from"./FieldTemplate-BnV7dOEz.js";import{u as k}from"./useTranslation-DUx5r_FT.js";import{A as q}from"./i18nConstants-BpHxieg5.js";const f=({options:l=[],value:a,onChange:u,placeholder:U,label:F,error:E,required:G,layout:J,className:Q,disabled:m=!1,defaultValue:X,id:Y,expandTrigger:Z="click",separator:ee=" / ",allowClear:ae=!1,"aria-label":re,...se})=>{const{t:D}=k("common"),ne=U??D("select_option"),te=b.useId(),g=Y||`wim-cascader-${te}`,N=F?`${g}-label`:void 0,H=E?`${g}-error`:void 0,oe=`${g}-trigger`,R=`${g}-popup`,[h,w]=b.useState(!1),[le,W]=b.useState(X||[]),[y,I]=b.useState([]),[o,v]=b.useState(-1),[V,_]=b.useState([]),L=b.useRef(null),P=a!==void 0,C=P?a:le;b.useEffect(()=>{const e=c=>{L.current&&!L.current.contains(c.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const B=()=>{if(!m){const e=!h;w(e),e?(I(C||[]),v(0),_([0])):v(-1)}},ce=()=>{if(!C||C.length===0)return null;const e=[];let c=l;for(const i of C){const n=c.find(s=>s.value===i);if(n)e.push(D(n.label)),c=n.children||[];else break}return e.join(ee)},K=(e,c)=>{if(e.disabled)return;const i=[...y.slice(0,c),e.value];if(I(i),!e.children||e.children.length===0){if(P||W(i),u){const n=[];let s=l;for(const r of i){const t=s.find(p=>p.value===r);t&&(n.push(t),s=t.children||[])}u(i,n)}w(!1)}},ie=e=>{e?.stopPropagation(),!m&&(P||W([]),u&&u([],[]))},de=(e,c)=>{Z==="hover"&&!e.disabled&&I([...y.slice(0,c),e.value])},ue=e=>{if(m)return;if(!h){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),B());return}const c=[l];let i=l;for(let r=0;r<y.length;r++){const t=y[r],p=i.find(z=>z.value===t);if(p&&p.children&&p.children.length>0)c.push(p.children),i=p.children;else break}const n=c[o]||[],s=V[o]||0;switch(e.key){case"ArrowDown":e.preventDefault(),_(r=>{const t=[...r];return t[o]=Math.min(s+1,n.length-1),t});break;case"ArrowUp":e.preventDefault(),_(r=>{const t=[...r];return t[o]=Math.max(s-1,0),t});break;case"ArrowRight":{e.preventDefault();const r=n[s];r&&r.children&&r.children.length>0&&(I([...y.slice(0,o),r.value]),v(o+1),_(t=>[...t.slice(0,o+1),0]));break}case"ArrowLeft":e.preventDefault(),o>0&&(v(o-1),_(r=>r.slice(0,o)));break;case"Enter":case" ":{e.preventDefault();const r=n[s];r&&K(r,o);break}case"Escape":e.preventDefault(),w(!1),v(-1),L.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),_(r=>{const t=[...r];return t[o]=0,t});break;case"End":e.preventDefault(),_(r=>{const t=[...r];return t[o]=n.length-1,t});break;case"Tab":h&&(w(!1),v(-1));break}},pe=()=>{const e=[];let c=l;e.push(c);for(let i=0;i<y.length;i++){const n=y[i],s=c.find(r=>r.value===n);if(s&&s.children&&s.children.length>0)e.push(s.children),c=s.children;else break}return e.map((i,n)=>d.jsx("div",{className:"wim-cascader__menu",role:"menu",children:i.map((s,r)=>{const t=y[n]===s.value,p=o===n&&V[n]===r,z=C[n]===s.value,me=s.children&&s.children.length>0;return d.jsx(_e,{className:j("wim-cascader__menu-item",z&&"wim-cascader__menu-item--selected"),active:p||t,disabled:s.disabled,onClick:$=>{$.stopPropagation(),K(s,n)},onMouseEnter:()=>{de(s,n),v(n),_($=>[...$.slice(0,n),r])},rightSection:me?d.jsx(ye,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${g}-menu-${n}-option-${r}`,"aria-selected":z,tabIndex:-1,children:D(s.label)},s.value)})},n))},M=ce();return d.jsx(ve,{label:F,error:E,required:G,layout:J,labelId:N,errorId:H,className:Q,children:d.jsxs("div",{className:"wim-cascader",ref:L,...se,children:[d.jsx(be,{disabled:m,allowClear:ae,hasValue:!!M,onClear:ie,status:E?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:h}],className:j(h&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:oe,className:j("wim-cascader__trigger",m&&"wim-cascader__trigger--disabled"),onClick:B,onKeyDown:ue,tabIndex:m?-1:0,role:"combobox","aria-expanded":h,"aria-controls":R,"aria-haspopup":"listbox","aria-disabled":m,"aria-labelledby":N,"aria-label":N?void 0:re,"aria-describedby":H,"aria-invalid":!!E,"aria-activedescendant":h&&o>=0?`${g}-menu-${o}-option-${V[o]}`:void 0,children:d.jsx("div",{className:j("wim-cascader__value",!M&&"wim-cascader__value--placeholder"),children:M||ne})})}),d.jsx(he,{show:h&&!m,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:R,className:"wim-cascader__dropdown",children:pe()})]})})};f.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the trigger when no visible label is provided"}}};const fe={title:"Components/Advanced Inputs/Cascader",component:f,parameters:{layout:"centered"}},x={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},A={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(f,{...l,options:u,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},T={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,expandTrigger:"hover",placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},S={render:l=>{const{t:a}=k(q);return d.jsx(f,{...l,disabled:!0,placeholder:a("story_cascader_placeholder"),"aria-label":a("story_cascader_placeholder")})}},O={render:l=>{const{t:a}=k(q),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(f,{...l,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"],"aria-label":"Location"})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} aria-label={t("story_cascader_placeholder")} />;
  }
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const ge=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:O,Default:x,Disabled:S,HoverExpand:T,WithLabel:A,__namedExportsOrder:ge,default:fe},Symbol.toStringTag,{value:"Module"}));export{Le as C,x as D,T as H,A as W,S as a,O as b};
