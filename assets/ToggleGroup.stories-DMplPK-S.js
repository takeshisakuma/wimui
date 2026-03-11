import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as R}from"./iframe-SL2HqV3D.js";import{c as T}from"./index-30w8ikAG.js";import{I as G}from"./Icon-LsAuz8T1.js";import{u as D}from"./useIndicator-Dmr9Yy3B.js";import{u as w}from"./useTranslation-ZF4WB21B.js";const s=({options:a,value:l,defaultValue:n,onChange:y,selectionMode:p="single",size:b="medium",fullWidth:x=!1,className:N})=>{const _=l!==void 0,[h,j]=R.useState(n??(p==="multiple"?[]:"")),t=_?l:h,{containerRef:I,sliderStyle:q,isReady:M}=D({activeSelector:".wim-toggle-group__item--active",dependence:a.length}),V=e=>{let o;if(p==="multiple"){const v=Array.isArray(t)?t:[];v.includes(e)?o=v.filter(O=>O!==e):o=[...v,e]}else o=t===e?"":e;_||j(o),y&&y(o)},S=e=>p==="multiple"?(Array.isArray(t)?t:[]).includes(e):t===e;return r.jsxs("div",{ref:I,className:T("wim-toggle-group",`wim-toggle-group--${b==="small"?"sm":b==="large"?"lg":"md"}`,`wim-toggle-group--${p}`,x&&"wim-toggle-group--full-width",M&&"wim-toggle-group--ready",N),role:"group",children:[r.jsx("div",{className:"wim-toggle-group__slider",style:q,"aria-hidden":"true"}),a.map(e=>r.jsxs("button",{type:"button",className:T("wim-toggle-group__item",S(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>V(e.value),disabled:e.disabled,"aria-pressed":S(e.value),"aria-label":e.label||e.value,children:[e.iconName&&r.jsx(G,{name:e.iconName,size:b}),e.label&&r.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))]})};s.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: any; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"any",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Components/Selection Controls/ToggleGroup",component:s,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},f=()=>{const{t:a}=w(["docs","common","components"]);return[{label:a("story_toggle_left"),value:"left",iconName:"CircleIcon"},{label:a("story_toggle_center"),value:"center",iconName:"SquareIcon"},{label:a("story_toggle_right"),value:"right",iconName:"LoadingIcon"}]},i={render:function(l){const n=f();return r.jsx(s,{...l,options:n,selectionMode:"single",defaultValue:"left"})}},u={render:function(l){const n=f();return r.jsx(s,{...l,options:n,selectionMode:"multiple",defaultValue:["left","right"]})}},c={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},d={render:function(l){const n=f();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(s,{...l,options:n,size:"small"}),r.jsx(s,{...l,options:n,size:"medium"}),r.jsx(s,{...l,options:n,size:"large"})]})},args:{selectionMode:"single",defaultValue:"center"}},m={render:function(l){const n=f();return r.jsx(s,{...l,options:n,selectionMode:"single",defaultValue:"center",fullWidth:!0})}},g={render:function(l){const{t:n}=w(["docs","common","components"]);return r.jsx(s,{...l,options:[{label:n("story_toggle_available"),value:"avail"},{label:n("story_toggle_disabled"),value:"disabled",disabled:!0},{label:n("story_toggle_selected_disabled"),value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    }],
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
    } = useTranslation(["docs", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};const A=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],$=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:g,FullWidth:m,IconOnly:c,MultipleSelection:u,SingleSelection:i,Sizes:d,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{g as D,m as F,c as I,u as M,i as S,$ as T,d as a};
