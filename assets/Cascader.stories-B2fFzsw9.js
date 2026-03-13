import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-R-8edTSa.js";import{c as A}from"./index-BMiqMCWS.js";import{T as pe}from"./Transition-Dz9kiZjQ.js";import{I as _e}from"./Icon-QzvmdxNd.js";import{B as me}from"./BaseListItem-ZUMS14V2.js";import{I as ye}from"./InputBase-DFAbpatC.js";import{F as he}from"./FieldTemplate-DmQvFLsh.js";import{u as k}from"./useTranslation-BsF8P6HZ.js";const f=({options:c=[],value:a,onChange:u,placeholder:K,label:F,error:z,required:U,layout:G,className:J,disabled:_=!1,defaultValue:Q,id:X,expandTrigger:Y="click",separator:Z=" / ",allowClear:ee=!1,...ae})=>{const{t:V}=k("common"),se=K??V("select_option"),re=v.useId(),b=X||`wim-cascader-${re}`,P=F?`${b}-label`:void 0,M=z?`${b}-error`:void 0,oe=`${b}-trigger`,H=`${b}-popup`,[m,w]=v.useState(!1),[ne,R]=v.useState(Q||[]),[y,j]=v.useState([]),[t,g]=v.useState(-1),[E,h]=v.useState([]),S=v.useRef(null),$=a!==void 0,x=$?a:ne;v.useEffect(()=>{const e=l=>{S.current&&!S.current.contains(l.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const W=()=>{if(!_){const e=!m;w(e),e?(j(x||[]),g(0),h([0])):g(-1)}},te=()=>{if(!x||x.length===0)return null;const e=[];let l=c;for(const d of x){const o=l.find(r=>r.value===d);if(o)e.push(V(o.label)),l=o.children||[];else break}return e.join(Z)},B=(e,l)=>{if(e.disabled)return;const d=[...y.slice(0,l),e.value];if(j(d),!e.children||e.children.length===0){if($||R(d),u){const o=[];let r=c;for(const s of d){const n=r.find(p=>p.value===s);n&&(o.push(n),r=n.children||[])}u(d,o)}w(!1)}},ce=e=>{e?.stopPropagation(),!_&&($||R([]),u&&u([],[]))},le=(e,l)=>{Y==="hover"&&!e.disabled&&j([...y.slice(0,l),e.value])},de=e=>{if(_)return;if(!m){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),W());return}const l=[c];let d=c;for(let s=0;s<y.length;s++){const n=y[s],p=d.find(D=>D.value===n);if(p&&p.children&&p.children.length>0)l.push(p.children),d=p.children;else break}const o=l[t]||[],r=E[t]||0;switch(e.key){case"ArrowDown":e.preventDefault(),h(s=>{const n=[...s];return n[t]=Math.min(r+1,o.length-1),n});break;case"ArrowUp":e.preventDefault(),h(s=>{const n=[...s];return n[t]=Math.max(r-1,0),n});break;case"ArrowRight":{e.preventDefault();const s=o[r];s&&s.children&&s.children.length>0&&(j([...y.slice(0,t),s.value]),g(t+1),h(n=>[...n.slice(0,t+1),0]));break}case"ArrowLeft":e.preventDefault(),t>0&&(g(t-1),h(s=>s.slice(0,t)));break;case"Enter":case" ":{e.preventDefault();const s=o[r];s&&B(s,t);break}case"Escape":e.preventDefault(),w(!1),g(-1),S.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),h(s=>{const n=[...s];return n[t]=0,n});break;case"End":e.preventDefault(),h(s=>{const n=[...s];return n[t]=o.length-1,n});break;case"Tab":m&&(w(!1),g(-1));break}},ie=()=>{const e=[];let l=c;e.push(l);for(let d=0;d<y.length;d++){const o=y[d],r=l.find(s=>s.value===o);if(r&&r.children&&r.children.length>0)e.push(r.children),l=r.children;else break}return e.map((d,o)=>i.jsx("div",{className:"wim-cascader__menu",role:"menu",children:d.map((r,s)=>{const n=y[o]===r.value,p=t===o&&E[o]===s,D=x[o]===r.value,ue=r.children&&r.children.length>0;return i.jsx(me,{className:A("wim-cascader__menu-item",D&&"wim-cascader__menu-item--selected"),active:p||n,disabled:r.disabled,onClick:L=>{L.stopPropagation(),B(r,o)},onMouseEnter:()=>{le(r,o),g(o),h(L=>[...L.slice(0,o),s])},rightSection:ue?i.jsx(_e,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${b}-menu-${o}-option-${s}`,"aria-selected":D,tabIndex:-1,children:V(r.label)},r.value)})},o))},N=te();return i.jsx(he,{label:F,error:z,required:U,layout:G,labelId:P,errorId:M,className:J,children:i.jsxs("div",{className:"wim-cascader",ref:S,...ae,children:[i.jsx(ye,{disabled:_,allowClear:ee,hasValue:!!N,onClear:ce,status:z?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:m}],className:A(m&&"wim-cascader__trigger--open"),children:i.jsx("div",{id:oe,className:A("wim-cascader__trigger",_&&"wim-cascader__trigger--disabled"),onClick:W,onKeyDown:de,tabIndex:_?-1:0,role:"combobox","aria-expanded":m,"aria-controls":H,"aria-haspopup":"listbox","aria-disabled":_,"aria-labelledby":P,"aria-describedby":M,"aria-invalid":!!z,"aria-activedescendant":m&&t>=0?`${b}-menu-${t}-option-${E[t]}`:void 0,children:i.jsx("div",{className:A("wim-cascader__value",!N&&"wim-cascader__value--placeholder"),children:N||se})})}),i.jsx(pe,{show:m&&!_,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:H,className:"wim-cascader__dropdown",children:ie()})]})})};f.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  children?: CascaderOption[];\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const ve={title:"Components/Advanced Inputs/Cascader",component:f,parameters:{layout:"centered"}},C={render:c=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return i.jsx(f,{...c,options:u,placeholder:a("story_cascader_placeholder")})}},T={render:c=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return i.jsx(f,{...c,options:u,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},O={render:c=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return i.jsx(f,{...c,options:u,expandTrigger:"hover",placeholder:a("story_cascader_placeholder")})}},q={render:c=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return i.jsx(f,{...c,disabled:!0,placeholder:a("story_cascader_placeholder")})}},I={render:c=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),u=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return i.jsx(f,{...c,options:u,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
  }
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...I.parameters?.docs?.source}}};const ge=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ze=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:I,Default:C,Disabled:q,HoverExpand:O,WithLabel:T,__namedExportsOrder:ge,default:ve},Symbol.toStringTag,{value:"Module"}));export{ze as C,C as D,O as H,T as W,q as a,I as b};
