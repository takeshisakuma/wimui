import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-83F82oTe.js";import{c as L}from"./index-zfnUGBBN.js";import{T as me}from"./Transition-CEfHPD_-.js";import{I as he}from"./Icon-C3VpYLWw.js";import{B as ye}from"./BaseListItem-DIe3ldom.js";import{I as _e}from"./InputBase-DFVFrDUF.js";import{F as ve}from"./FieldTemplate-bjn7C47B.js";import{u as k}from"./useTranslation-CgRV5_0i.js";import{A as E}from"./i18nConstants-BpHxieg5.js";const b=({options:l=[],value:a,onChange:u,placeholder:U,label:$,error:q,required:G,layout:J,className:Q,disabled:m=!1,defaultValue:X,id:Y,expandTrigger:Z="click",separator:ee=" / ",allowClear:ae=!1,...re})=>{const{t:D}=k("common"),se=U??D("select_option"),ne=v.useId(),g=Y||`wim-cascader-${ne}`,F=$?`${g}-label`:void 0,H=q?`${g}-error`:void 0,te=`${g}-trigger`,R=`${g}-popup`,[h,w]=v.useState(!1),[oe,W]=v.useState(X||[]),[y,I]=v.useState([]),[o,f]=v.useState(-1),[N,_]=v.useState([]),z=v.useRef(null),V=a!==void 0,C=V?a:oe;v.useEffect(()=>{const e=c=>{z.current&&!z.current.contains(c.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const B=()=>{if(!m){const e=!h;w(e),e?(I(C||[]),f(0),_([0])):f(-1)}},le=()=>{if(!C||C.length===0)return null;const e=[];let c=l;for(const i of C){const n=c.find(s=>s.value===i);if(n)e.push(D(n.label)),c=n.children||[];else break}return e.join(ee)},K=(e,c)=>{if(e.disabled)return;const i=[...y.slice(0,c),e.value];if(I(i),!e.children||e.children.length===0){if(V||W(i),u){const n=[];let s=l;for(const r of i){const t=s.find(p=>p.value===r);t&&(n.push(t),s=t.children||[])}u(i,n)}w(!1)}},ce=e=>{e?.stopPropagation(),!m&&(V||W([]),u&&u([],[]))},ie=(e,c)=>{Z==="hover"&&!e.disabled&&I([...y.slice(0,c),e.value])},de=e=>{if(m)return;if(!h){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),B());return}const c=[l];let i=l;for(let r=0;r<y.length;r++){const t=y[r],p=i.find(j=>j.value===t);if(p&&p.children&&p.children.length>0)c.push(p.children),i=p.children;else break}const n=c[o]||[],s=N[o]||0;switch(e.key){case"ArrowDown":e.preventDefault(),_(r=>{const t=[...r];return t[o]=Math.min(s+1,n.length-1),t});break;case"ArrowUp":e.preventDefault(),_(r=>{const t=[...r];return t[o]=Math.max(s-1,0),t});break;case"ArrowRight":{e.preventDefault();const r=n[s];r&&r.children&&r.children.length>0&&(I([...y.slice(0,o),r.value]),f(o+1),_(t=>[...t.slice(0,o+1),0]));break}case"ArrowLeft":e.preventDefault(),o>0&&(f(o-1),_(r=>r.slice(0,o)));break;case"Enter":case" ":{e.preventDefault();const r=n[s];r&&K(r,o);break}case"Escape":e.preventDefault(),w(!1),f(-1),z.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),_(r=>{const t=[...r];return t[o]=0,t});break;case"End":e.preventDefault(),_(r=>{const t=[...r];return t[o]=n.length-1,t});break;case"Tab":h&&(w(!1),f(-1));break}},ue=()=>{const e=[];let c=l;e.push(c);for(let i=0;i<y.length;i++){const n=y[i],s=c.find(r=>r.value===n);if(s&&s.children&&s.children.length>0)e.push(s.children),c=s.children;else break}return e.map((i,n)=>d.jsx("div",{className:"wim-cascader__menu",role:"menu",children:i.map((s,r)=>{const t=y[n]===s.value,p=o===n&&N[n]===r,j=C[n]===s.value,pe=s.children&&s.children.length>0;return d.jsx(ye,{className:L("wim-cascader__menu-item",j&&"wim-cascader__menu-item--selected"),active:p||t,disabled:s.disabled,onClick:M=>{M.stopPropagation(),K(s,n)},onMouseEnter:()=>{ie(s,n),f(n),_(M=>[...M.slice(0,n),r])},rightSection:pe?d.jsx(he,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${g}-menu-${n}-option-${r}`,"aria-selected":j,tabIndex:-1,children:D(s.label)},s.value)})},n))},P=le();return d.jsx(ve,{label:$,error:q,required:G,layout:J,labelId:F,errorId:H,className:Q,children:d.jsxs("div",{className:"wim-cascader",ref:z,...re,children:[d.jsx(_e,{disabled:m,allowClear:ae,hasValue:!!P,onClear:ce,status:q?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:h}],className:L(h&&"wim-cascader__trigger--open"),children:d.jsx("div",{id:te,className:L("wim-cascader__trigger",m&&"wim-cascader__trigger--disabled"),onClick:B,onKeyDown:de,tabIndex:m?-1:0,role:"combobox","aria-expanded":h,"aria-controls":R,"aria-haspopup":"listbox","aria-disabled":m,"aria-labelledby":F,"aria-describedby":H,"aria-invalid":!!q,"aria-activedescendant":h&&o>=0?`${g}-menu-${o}-option-${N[o]}`:void 0,children:d.jsx("div",{className:L("wim-cascader__value",!P&&"wim-cascader__value--placeholder"),children:P||se})})}),d.jsx(me,{show:h&&!m,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:R,className:"wim-cascader__dropdown",children:ue()})]})})};b.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const fe={title:"Components/Advanced Inputs/Cascader",component:b,parameters:{layout:"centered"}},x={render:l=>{const{t:a}=k(E),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(b,{...l,options:u,placeholder:a("story_cascader_placeholder")})}},A={render:l=>{const{t:a}=k(E),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return d.jsx(b,{...l,options:u,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},S={render:l=>{const{t:a}=k(E),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(b,{...l,options:u,expandTrigger:"hover",placeholder:a("story_cascader_placeholder")})}},T={render:l=>{const{t:a}=k(E);return d.jsx(b,{...l,disabled:!0,placeholder:a("story_cascader_placeholder")})}},O={render:l=>{const{t:a}=k(E),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return d.jsx(b,{...l,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    return <Cascader {...args} options={options} placeholder={t("story_cascader_placeholder")} />;
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
    return <Cascader {...args} options={options} expandTrigger="hover" placeholder={t("story_cascader_placeholder")} />;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
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
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} />;
  }
}`,...O.parameters?.docs?.source}}};const be=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],Ie=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:O,Default:x,Disabled:T,HoverExpand:S,WithLabel:A,__namedExportsOrder:be,default:fe},Symbol.toStringTag,{value:"Module"}));export{Ie as C,x as D,S as H,A as W,T as a,O as b};
