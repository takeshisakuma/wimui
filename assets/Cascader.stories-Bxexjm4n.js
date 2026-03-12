import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-DYlShzji.js";import{c as A}from"./index-Cm_IZiCA.js";import{T as ue}from"./Transition-DV9-2CdQ.js";import{I as pe}from"./Icon-B_fKZ-SS.js";import{B as _e}from"./BaseListItem-Cic4EoQN.js";import{I as me}from"./InputBase-B6ww8n-u.js";import{F as ye}from"./FieldTemplate-Cf1XI41D.js";import{u as k}from"./useTranslation-DygSvNPf.js";const b=({options:l=[],value:a,onChange:p,placeholder:B,label:F,error:j,required:K,layout:U,className:G,disabled:m=!1,defaultValue:J,id:Q,expandTrigger:X="click",separator:Y=" / ",allowClear:Z=!1,...ee})=>{const{t:V}=k("common"),ae=B??V("select_option"),se=g.useId(),w=Q||`wim-cascader-${se}`,M=F?`${w}-label`:void 0,P=j?`${w}-error`:void 0,re=`${w}-trigger`,[y,x]=g.useState(!1),[ne,H]=g.useState(J||[]),[h,S]=g.useState([]),[o,f]=g.useState(-1),[E,v]=g.useState([]),D=g.useRef(null),N=a!==void 0,C=N?a:ne;g.useEffect(()=>{const e=d=>{D.current&&!D.current.contains(d.target)&&x(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const R=()=>{if(!m){const e=!y;x(e),e?(S(C||[]),f(0),v([0])):f(-1)}},oe=()=>{if(!C||C.length===0)return null;const e=[];let d=l;for(const i of C){const r=d.find(s=>s.value===i);if(r)e.push(V(r.label)),d=r.children||[];else break}return e.join(Y)},W=(e,d)=>{if(e.disabled)return;const i=[...h.slice(0,d),e.value];if(S(i),!e.children||e.children.length===0){if(N||H(i),p){const r=[];let s=l;for(const t of i){const _=s.find(n=>n.value===t);_&&(r.push(_),s=_.children||[])}p(i,r)}x(!1)}},te=e=>{m||(N||H([]),p&&p([],[]))},ce=(e,d)=>{X==="hover"&&!e.disabled&&S([...h.slice(0,d),e.value])},le=e=>{if(m)return;if(!y){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),R());return}const d=[l];let i=l;for(let t=0;t<h.length;t++){const _=h[t],n=i.find(c=>c.value===_);if(n&&n.children&&n.children.length>0)d.push(n.children),i=n.children;else break}const r=d[o]||[],s=E[o]||0;switch(e.key){case"ArrowDown":e.preventDefault(),v(n=>{const c=[...n];return c[o]=Math.min(s+1,r.length-1),c});break;case"ArrowUp":e.preventDefault(),v(n=>{const c=[...n];return c[o]=Math.max(s-1,0),c});break;case"ArrowRight":e.preventDefault();const t=r[s];t&&t.children&&t.children.length>0&&(S([...h.slice(0,o),t.value]),f(o+1),v(n=>[...n.slice(0,o+1),0]));break;case"ArrowLeft":e.preventDefault(),o>0&&(f(o-1),v(n=>n.slice(0,o)));break;case"Enter":case" ":e.preventDefault();const _=r[s];_&&W(_,o);break;case"Escape":e.preventDefault(),x(!1),f(-1),D.current?.querySelector(".wim-cascader__trigger")?.focus();break;case"Home":e.preventDefault(),v(n=>{const c=[...n];return c[o]=0,c});break;case"End":e.preventDefault(),v(n=>{const c=[...n];return c[o]=r.length-1,c});break;case"Tab":y&&(x(!1),f(-1));break}},de=()=>{const e=[];let d=l;e.push(d);for(let i=0;i<h.length;i++){const r=h[i],s=d.find(t=>t.value===r);if(s&&s.children&&s.children.length>0)e.push(s.children),d=s.children;else break}return e.map((i,r)=>u.jsx("div",{className:"wim-cascader__menu",role:"menu",children:i.map((s,t)=>{const _=h[r]===s.value,n=o===r&&E[r]===t,c=C[r]===s.value,ie=s.children&&s.children.length>0;return u.jsx(_e,{className:A("wim-cascader__menu-item",c&&"wim-cascader__menu-item--selected"),active:n||_,disabled:s.disabled,onClick:L=>{L.stopPropagation(),W(s,r)},onMouseEnter:()=>{ce(s,r),f(r),v(L=>[...L.slice(0,r),t])},rightSection:ie?u.jsx(pe,{name:"ChevronRightIcon",size:"small"}):void 0,role:"option",id:`${w}-menu-${r}-option-${t}`,"aria-selected":c,tabIndex:-1,children:V(s.label)},s.value)})},r))},$=oe();return u.jsx(ye,{label:F,error:j,required:K,layout:U,labelId:M,errorId:P,className:G,children:u.jsxs("div",{className:"wim-cascader",ref:D,...ee,children:[u.jsx(me,{disabled:m,allowClear:Z,hasValue:!!$,onClear:()=>te(),status:j?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:y}],className:A(y&&"wim-cascader__trigger--open"),children:u.jsx("div",{id:re,className:A("wim-cascader__trigger",m&&"wim-cascader__trigger--disabled"),onClick:R,onKeyDown:le,tabIndex:m?-1:0,role:"combobox","aria-expanded":y,"aria-haspopup":"listbox","aria-disabled":m,"aria-labelledby":M,"aria-describedby":P,"aria-invalid":!!j,"aria-activedescendant":y&&o>=0?`${w}-menu-${o}-option-${E[o]}`:void 0,children:u.jsx("div",{className:A("wim-cascader__value",!$&&"wim-cascader__value--placeholder"),children:$||ae})})}),u.jsx(ue,{show:y&&!m,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:de()})]})})};b.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}}}};const he={title:"Components/Advanced Inputs/Cascader",component:b,parameters:{layout:"centered"}},T={render:l=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),p=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return u.jsx(b,{...l,options:p,placeholder:a("story_cascader_placeholder")})}},O={render:l=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),p=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]},{label:a("story_cascader_osaka"),value:"osaka",children:[{label:a("story_cascader_osaka_city"),value:"osaka_city",children:[{label:a("story_cascader_umeda"),value:"umeda"}]}]}];return u.jsx(b,{...l,options:p,label:a("story_cascader_placeholder"),placeholder:a("story_cascader_placeholder")})}},q={render:l=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),p=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return u.jsx(b,{...l,options:p,expandTrigger:"hover",placeholder:a("story_cascader_placeholder")})}},z={render:l=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return u.jsx(b,{...l,disabled:!0,placeholder:a("story_cascader_placeholder")})}},I={render:l=>{const{t:a}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),p=[{label:a("story_cascader_tokyo"),value:"tokyo",children:[{label:a("story_cascader_shibuya"),value:"shibuya",children:[{label:a("story_cascader_dogenzaka"),value:"dogenzaka"}]}]}];return u.jsx(b,{...l,options:p,separator:" > ",defaultValue:["tokyo","shibuya","dogenzaka"]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Cascader {...args} disabled placeholder={t("story_cascader_placeholder")} />;
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const ve=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ze=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:I,Default:T,Disabled:z,HoverExpand:q,WithLabel:O,__namedExportsOrder:ve,default:he},Symbol.toStringTag,{value:"Module"}));export{ze as C,T as D,q as H,O as W,z as a,I as b};
