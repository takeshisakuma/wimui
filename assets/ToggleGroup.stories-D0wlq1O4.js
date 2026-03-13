import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-CKKDYfjM.js";import{c as S}from"./index-K_u7tV9x.js";import{I as G}from"./Icon-DuRhDIXo.js";import{u as C}from"./useIndicator-DPA4oQAP.js";import{u as T}from"./useTranslation-D80Uyf_x.js";const l=({options:a,value:s,defaultValue:n,onChange:v,selectionMode:p="single",size:_="medium",fullWidth:x=!1,className:N})=>{const b=s!==void 0,[I,h]=O.useState(n??(p==="multiple"?[]:"")),r=b?s:I,{containerRef:j,sliderStyle:R,isReady:q}=C({activeSelector:".wim-toggle-group__item--active",dependence:a.length}),M=e=>{let t;if(p==="multiple"){const y=Array.isArray(r)?r:[];y.includes(e)?t=y.filter(V=>V!==e):t=[...y,e]}else t=r===e?"":e;b||h(t),v&&v(t)},w=e=>p==="multiple"?(Array.isArray(r)?r:[]).includes(e):r===e;return o.jsxs("div",{ref:j,className:S("wim-toggle-group",`wim-toggle-group--${_==="small"?"sm":_==="large"?"lg":"md"}`,`wim-toggle-group--${p}`,x&&"wim-toggle-group--full-width",q&&"wim-toggle-group--ready",N),role:"group",children:[o.jsx("div",{className:"wim-toggle-group__slider",style:R,"aria-hidden":"true"}),a.map(e=>o.jsxs("button",{type:"button",className:S("wim-toggle-group__item",w(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>M(e.value),disabled:e.disabled,"aria-pressed":w(e.value),"aria-label":e.label||e.value,children:[e.iconName&&o.jsx(G,{name:e.iconName,size:_}),e.label&&o.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))]})};l.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/Selection Controls/ToggleGroup",component:l,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},f=()=>{const{t:a}=T(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{label:a("story_toggle_left"),value:"left",iconName:"CircleIcon"},{label:a("story_toggle_center"),value:"center",iconName:"SquareIcon"},{label:a("story_toggle_right"),value:"right",iconName:"LoadingIcon"}]},i={render:function(s){const n=f();return o.jsx(l,{...s,options:n,selectionMode:"single",defaultValue:"left"})}},u={render:function(s){const n=f();return o.jsx(l,{...s,options:n,selectionMode:"multiple",defaultValue:["left","right"]})}},c={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},d={render:function(s){const n=f();return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsx(l,{...s,options:n,size:"small"}),o.jsx(l,{...s,options:n,size:"medium"}),o.jsx(l,{...s,options:n,size:"large"})]})},args:{selectionMode:"single",defaultValue:"center"}},m={render:function(s){const n=f();return o.jsx(l,{...s,options:n,selectionMode:"single",defaultValue:"center",fullWidth:!0})}},g={render:function(s){const{t:n}=T(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(l,{...s,options:[{label:n("story_toggle_available"),value:"avail"},{label:n("story_toggle_disabled"),value:"disabled",disabled:!0},{label:n("story_toggle_selected_disabled"),value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};const z=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],L=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:g,FullWidth:m,IconOnly:c,MultipleSelection:u,SingleSelection:i,Sizes:d,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{g as D,m as F,c as I,u as M,i as S,L as T,d as a};
