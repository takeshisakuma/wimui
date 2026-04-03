import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as w,A as R}from"./iframe-Bc6tRPQC.js";import{c as A}from"./index-Bwa-Lhar.js";import{I as $}from"./Icon-BPIAQPrk.js";import{u as H}from"./useIndicator-BCw04HkA.js";import{u as D}from"./useTranslation-DlPMeJ4i.js";const u=({options:a,value:r,defaultValue:t,onChange:j,selectionMode:o="single",size:I="md",fullWidth:q=!1,className:V,"aria-label":O,"aria-labelledby":k,disabled:C=!1})=>{const c=r!==void 0,[G,z]=w.useState(t??(o==="multiple"?[]:"")),d=c?r:G,{containerRef:E,sliderStyle:M,isReady:L}=H({activeSelector:".wim-toggle-group__item--active",dependence:a.length}),T=w.useRef([]),v=a.findIndex(e=>!e.disabled),P=()=>{if(o==="single"){const e=c?r:t;if(typeof e=="string"){const n=a.findIndex(l=>!l.disabled&&l.value===e);if(n>=0)return n}}return v>=0?v:0},[F,x]=w.useState(P);w.useEffect(()=>{if(o==="single"&&c&&typeof r=="string"){const e=a.findIndex(n=>!n.disabled&&n.value===r);e>=0&&x(e)}},[r,o,c,a]);const h=e=>{let n;if(o==="multiple"){const l=Array.isArray(d)?d:[];l.includes(e)?n=l.filter(i=>i!==e):n=[...l,e]}else n=d===e?"":e;c||z(n),j?.(n)},S=e=>o==="multiple"?(Array.isArray(d)?d:[]).includes(e):d===e,N=(e,n)=>{for(let l=1;l<=a.length;l++){const i=(e+n*l+a.length)%a.length;if(!a[i].disabled)return i}return e},W=(e,n)=>{let l=null;if(n.key==="ArrowRight"||n.key==="ArrowDown")n.preventDefault(),l=N(e,1);else if(n.key==="ArrowLeft"||n.key==="ArrowUp")n.preventDefault(),l=N(e,-1);else if(n.key==="Home")n.preventDefault(),l=v>=0?v:null;else if(n.key==="End"){n.preventDefault();for(let i=a.length-1;i>=0;i--)if(!a[i].disabled){l=i;break}}l!==null&&l!==e&&(x(l),T.current[l]?.focus(),o==="single"&&h(a[l].value))},K=o==="single"?"radiogroup":"toolbar";return s.jsxs("div",{ref:E,className:A("wim-toggle-group",`wim-toggle-group--${I}`,`wim-toggle-group--${o}`,q&&"wim-toggle-group--full-width",L&&"wim-toggle-group--ready",V),role:K,"aria-label":O,"aria-labelledby":k,"aria-orientation":"horizontal",children:[s.jsx("div",{className:"wim-toggle-group__slider",style:M,"aria-hidden":"true"}),a.map((e,n)=>s.jsxs("button",{ref:l=>{T.current[n]=l},type:"button",className:A("wim-toggle-group__item",S(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>{x(n),h(e.value)},onKeyDown:l=>W(n,l),disabled:C||e.disabled,role:o==="single"?"radio":"button","aria-checked":o==="single"?S(e.value):void 0,"aria-pressed":o==="multiple"?S(e.value):void 0,"aria-label":e.label||e.value,tabIndex:!e.disabled&&n===F?0:-1,children:[e.iconName&&s.jsx($,{name:e.iconName,size:I}),e.label&&s.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))]})};u.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:'アクセシビリティ用のラベル（role="radiogroup" / "toolbar" の accessible name）'},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベルID（aria-label の代替）"},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか",defaultValue:{value:"false",computed:!1}}}};const U={title:"Components/Selection Controls/ToggleGroup",component:u,argTypes:{disabled:{control:"boolean"},selectionMode:{control:"select",options:["single","multiple"]},size:{control:"radio",options:["sm","md","lg"]}}},_=()=>{const{t:a}=D(R);return[{label:a("story.toggle_left"),value:"left",iconName:"CircleIcon"},{label:a("story.toggle_center"),value:"center",iconName:"SquareIcon"},{label:a("story.toggle_right"),value:"right",iconName:"LoadingIcon"}]},g={render:function(r){const t=_();return s.jsx(u,{...r,options:t,selectionMode:"single",defaultValue:"left"})}},m={render:function(r){const t=_();return s.jsx(u,{...r,options:t,selectionMode:"multiple",defaultValue:["left","right"]})}},p={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},f={render:function(r){const t=_();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(u,{...r,options:t,size:"sm"}),s.jsx(u,{...r,options:t,size:"md"}),s.jsx(u,{...r,options:t,size:"lg"})]})},args:{selectionMode:"single",defaultValue:"center"}},b={render:function(r){const t=_();return s.jsx(u,{...r,options:t,selectionMode:"single",defaultValue:"center",fullWidth:!0})}},y={render:function(r){const{t}=D(R);return s.jsx(u,{...r,options:[{label:t("story.toggle_available"),value:"avail"},{label:t("story.toggle_disabled"),value:"disabled",disabled:!0},{label:t("story.toggle_selected_disabled"),value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="left" />;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="multiple" defaultValue={["left", "right"]} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        <ToggleGroup {...args} options={options} size="sm" />
        <ToggleGroup {...args} options={options} size="md" />
        <ToggleGroup {...args} options={options} size="lg" />
      </div>;
  },
  args: {
    selectionMode: "single",
    defaultValue: "center"
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="center" fullWidth={true} />;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ToggleGroup {...args} options={[{
      label: t("story.toggle_available"),
      value: "avail"
    }, {
      label: t("story.toggle_disabled"),
      value: "disabled",
      disabled: true
    }, {
      label: t("story.toggle_selected_disabled"),
      value: "sel-disabled",
      disabled: true
    }]} selectionMode="multiple" defaultValue={["sel-disabled"]} />;
  }
}`,...y.parameters?.docs?.source}}};const B=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],ne=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:y,FullWidth:b,IconOnly:p,MultipleSelection:m,SingleSelection:g,Sizes:f,__namedExportsOrder:B,default:U},Symbol.toStringTag,{value:"Module"}));export{y as D,b as F,p as I,m as M,g as S,ne as T,f as a};
