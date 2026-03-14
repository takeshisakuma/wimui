import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-CauSMpP2.js";import{c as w}from"./index-DG63t_hX.js";import{I as C}from"./Icon-BHqUNIEq.js";import{u as G}from"./useIndicator-QwvJ46Me.js";import{A as T}from"./i18nConstants-BpHxieg5.js";import{u as N}from"./useTranslation-DWvjPTrY.js";const s=({options:a,value:r,defaultValue:n,onChange:y,selectionMode:p="single",size:b="medium",fullWidth:x=!1,className:I})=>{const _=r!==void 0,[h,j]=O.useState(n??(p==="multiple"?[]:"")),t=_?r:h,{containerRef:M,sliderStyle:A,isReady:R}=G({activeSelector:".wim-toggle-group__item--active",dependence:a.length}),q=e=>{let o;if(p==="multiple"){const v=Array.isArray(t)?t:[];v.includes(e)?o=v.filter(V=>V!==e):o=[...v,e]}else o=t===e?"":e;_||j(o),y&&y(o)},S=e=>p==="multiple"?(Array.isArray(t)?t:[]).includes(e):t===e;return l.jsxs("div",{ref:M,className:w("wim-toggle-group",`wim-toggle-group--${b==="small"?"sm":b==="large"?"lg":"md"}`,`wim-toggle-group--${p}`,x&&"wim-toggle-group--full-width",R&&"wim-toggle-group--ready",I),role:"group",children:[l.jsx("div",{className:"wim-toggle-group__slider",style:A,"aria-hidden":"true"}),a.map(e=>l.jsxs("button",{type:"button",className:w("wim-toggle-group__item",S(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>q(e.value),disabled:e.disabled,"aria-pressed":S(e.value),"aria-label":e.label||e.value,children:[e.iconName&&l.jsx(C,{name:e.iconName,size:b}),e.label&&l.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))]})};s.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/Selection Controls/ToggleGroup",component:s,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},f=()=>{const{t:a}=N(T);return[{label:a("story_toggle_left"),value:"left",iconName:"CircleIcon"},{label:a("story_toggle_center"),value:"center",iconName:"SquareIcon"},{label:a("story_toggle_right"),value:"right",iconName:"LoadingIcon"}]},i={render:function(r){const n=f();return l.jsx(s,{...r,options:n,selectionMode:"single",defaultValue:"left"})}},u={render:function(r){const n=f();return l.jsx(s,{...r,options:n,selectionMode:"multiple",defaultValue:["left","right"]})}},c={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},d={render:function(r){const n=f();return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsx(s,{...r,options:n,size:"small"}),l.jsx(s,{...r,options:n,size:"medium"}),l.jsx(s,{...r,options:n,size:"large"})]})},args:{selectionMode:"single",defaultValue:"center"}},m={render:function(r){const n=f();return l.jsx(s,{...r,options:n,selectionMode:"single",defaultValue:"center",fullWidth:!0})}},g={render:function(r){const{t:n}=N(T);return l.jsx(s,{...r,options:[{label:n("story_toggle_available"),value:"avail"},{label:n("story_toggle_disabled"),value:"disabled",disabled:!0},{label:n("story_toggle_selected_disabled"),value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="left" />;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="multiple" defaultValue={["left", "right"]} />;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "bold",
      iconName: "CircleIcon"
    }, {
      value: "italic",
      iconName: "SquareIcon"
    }, {
      value: "underline",
      iconName: "LoadingIcon"
    }] satisfies Option[],
    selectionMode: "multiple",
    defaultValue: ["bold"]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>\r
        <ToggleGroup {...args} options={options} size="small" />\r
        <ToggleGroup {...args} options={options} size="medium" />\r
        <ToggleGroup {...args} options={options} size="large" />\r
      </div>;
  },
  args: {
    selectionMode: "single",
    defaultValue: "center"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="center" fullWidth={true} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ToggleGroup {...args} options={[{
      label: t("story_toggle_available"),
      value: "avail"
    }, {
      label: t("story_toggle_disabled"),
      value: "disabled",
      disabled: true
    }, {
      label: t("story_toggle_selected_disabled"),
      value: "sel-disabled",
      disabled: true
    }]} selectionMode="multiple" defaultValue={["sel-disabled"]} />;
  }
}`,...g.parameters?.docs?.source}}};const z=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],B=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:g,FullWidth:m,IconOnly:c,MultipleSelection:u,SingleSelection:i,Sizes:d,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{g as D,m as F,c as I,u as M,i as S,B as T,d as a};
