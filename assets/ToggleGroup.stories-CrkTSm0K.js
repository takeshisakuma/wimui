import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as _,A as R}from"./iframe-Bi63tkQv.js";import{c as A}from"./index-BAeKNy2L.js";import{I as K}from"./Icon-7x2_S7ov.js";import{u as $}from"./useIndicator-7mt8v-Gn.js";import{u as D}from"./useTranslation-D6_oF364.js";const u=({options:r,value:a,defaultValue:t,onChange:j,selectionMode:o="single",size:x="medium",fullWidth:q=!1,className:V,"aria-label":O,"aria-labelledby":k})=>{const c=a!==void 0,[C,G]=_.useState(t??(o==="multiple"?[]:"")),d=c?a:C,{containerRef:z,sliderStyle:E,isReady:M}=$({activeSelector:".wim-toggle-group__item--active",dependence:r.length}),T=_.useRef([]),v=r.findIndex(e=>!e.disabled),L=()=>{if(o==="single"){const e=c?a:t;if(typeof e=="string"){const n=r.findIndex(l=>!l.disabled&&l.value===e);if(n>=0)return n}}return v>=0?v:0},[P,S]=_.useState(L);_.useEffect(()=>{if(o==="single"&&c&&typeof a=="string"){const e=r.findIndex(n=>!n.disabled&&n.value===a);e>=0&&S(e)}},[a,o,c,r]);const h=e=>{let n;if(o==="multiple"){const l=Array.isArray(d)?d:[];l.includes(e)?n=l.filter(i=>i!==e):n=[...l,e]}else n=d===e?"":e;c||G(n),j?.(n)},I=e=>o==="multiple"?(Array.isArray(d)?d:[]).includes(e):d===e,N=(e,n)=>{for(let l=1;l<=r.length;l++){const i=(e+n*l+r.length)%r.length;if(!r[i].disabled)return i}return e},F=(e,n)=>{let l=null;if(n.key==="ArrowRight"||n.key==="ArrowDown")n.preventDefault(),l=N(e,1);else if(n.key==="ArrowLeft"||n.key==="ArrowUp")n.preventDefault(),l=N(e,-1);else if(n.key==="Home")n.preventDefault(),l=v>=0?v:null;else if(n.key==="End"){n.preventDefault();for(let i=r.length-1;i>=0;i--)if(!r[i].disabled){l=i;break}}l!==null&&l!==e&&(S(l),T.current[l]?.focus(),o==="single"&&h(r[l].value))},W=o==="single"?"radiogroup":"toolbar";return s.jsxs("div",{ref:z,className:A("wim-toggle-group",`wim-toggle-group--${x==="small"?"sm":x==="large"?"lg":"md"}`,`wim-toggle-group--${o}`,q&&"wim-toggle-group--full-width",M&&"wim-toggle-group--ready",V),role:W,"aria-label":O,"aria-labelledby":k,"aria-orientation":"horizontal",children:[s.jsx("div",{className:"wim-toggle-group__slider",style:E,"aria-hidden":"true"}),r.map((e,n)=>s.jsxs("button",{ref:l=>{T.current[n]=l},type:"button",className:A("wim-toggle-group__item",I(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>{S(n),h(e.value)},onKeyDown:l=>F(n,l),disabled:e.disabled,role:o==="single"?"radio":"button","aria-checked":o==="single"?I(e.value):void 0,"aria-pressed":o==="multiple"?I(e.value):void 0,"aria-label":e.label||e.value,tabIndex:!e.disabled&&n===P?0:-1,children:[e.iconName&&s.jsx(K,{name:e.iconName,size:x}),e.label&&s.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))]})};u.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:'アクセシビリティ用のラベル（role="radiogroup" / "toolbar" の accessible name）'},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベルID（aria-label の代替）"}}};const H={title:"Components/Selection Controls/ToggleGroup",component:u,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},w=()=>{const{t:r}=D(R);return[{label:r("story_toggle_left"),value:"left",iconName:"CircleIcon"},{label:r("story_toggle_center"),value:"center",iconName:"SquareIcon"},{label:r("story_toggle_right"),value:"right",iconName:"LoadingIcon"}]},m={render:function(a){const t=w();return s.jsx(u,{...a,options:t,selectionMode:"single",defaultValue:"left"})}},g={render:function(a){const t=w();return s.jsx(u,{...a,options:t,selectionMode:"multiple",defaultValue:["left","right"]})}},p={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},f={render:function(a){const t=w();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(u,{...a,options:t,size:"small"}),s.jsx(u,{...a,options:t,size:"medium"}),s.jsx(u,{...a,options:t,size:"large"})]})},args:{selectionMode:"single",defaultValue:"center"}},b={render:function(a){const t=w();return s.jsx(u,{...a,options:t,selectionMode:"single",defaultValue:"center",fullWidth:!0})}},y={render:function(a){const{t}=D(R);return s.jsx(u,{...a,options:[{label:t("story_toggle_available"),value:"avail"},{label:t("story_toggle_disabled"),value:"disabled",disabled:!0},{label:t("story_toggle_selected_disabled"),value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="left" />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="multiple" defaultValue={["left", "right"]} />;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <ToggleGroup {...args} options={options} size="small" />
        <ToggleGroup {...args} options={options} size="medium" />
        <ToggleGroup {...args} options={options} size="large" />
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
}`,...y.parameters?.docs?.source}}};const U=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],ee=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:y,FullWidth:b,IconOnly:p,MultipleSelection:g,SingleSelection:m,Sizes:f,__namedExportsOrder:U,default:H},Symbol.toStringTag,{value:"Module"}));export{y as D,b as F,p as I,g as M,m as S,ee as T,f as a};
