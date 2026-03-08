import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as j,r}from"./iframe-DEBOWsqM.js";import{c as x}from"./index-x98TZOX1.js";import{I as V}from"./Icon-0PxP3fzr.js";import{u as i}from"./useTranslation-C_sUcuQ0.js";const u=({options:n,value:e,onChange:a,size:s="medium",fullWidth:l=!1,className:k,label:b})=>{const[M,S]=j.useState(null),w=j.useRef([]),I=`wim-segmented-label-${r.useId()}`,C=n.findIndex(o=>o.value===e),W={width:`calc((100% - 4px) / ${n.length})`,transform:`translateX(${C*100}%)`},N=(o,m)=>{let c=m;switch(o.key){case"ArrowLeft":case"ArrowUp":c=m-1,c<0&&(c=n.length-1);break;case"ArrowRight":case"ArrowDown":c=m+1,c>=n.length&&(c=0);break;default:return}o.preventDefault(),a(n[c].value),w.current[c]?.focus()};return t.jsxs("div",{className:x("wim-segmented-control-container",k),children:[b&&t.jsx("div",{id:I,className:"wim-label",style:{marginBottom:"8px"},children:b}),t.jsxs("div",{className:x("wim-segmented-control",`wim-segmented-control--${s==="small"?"sm":s==="large"?"lg":"md"}`,l&&"wim-segmented-control--full-width"),role:"radiogroup","aria-labelledby":b?I:void 0,children:[t.jsx("div",{className:"wim-segmented-control__slider",style:W,"aria-hidden":"true"}),n.map((o,m)=>{const c=o.value===e,q=c||C===-1&&m===0;return t.jsxs("button",{ref:f=>{w.current[m]=f},type:"button",className:x("wim-segmented-control__item",c&&"wim-segmented-control__item--active",!o.label&&o.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>a(o.value),onKeyDown:f=>N(f,m),onFocus:()=>S(m),onBlur:()=>S(null),role:"radio","aria-checked":c,tabIndex:q?0:-1,"aria-label":o.label||o.value,children:[o.iconName&&t.jsx(V,{name:o.iconName,size:s}),o.label&&t.jsx("span",{className:"wim-segmented-control__label",children:o.label})]},o.value)})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"}}};const T={title:"Components/Selection Controls/SegmentedControl",component:u,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},d={args:{size:"small",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}},g={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}},p={args:{size:"large",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}},v={args:{size:"medium",fullWidth:!0},render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("on"),l=r.useMemo(()=>[{label:e("story_segmented_on"),value:"on"},{label:e("story_segmented_off"),value:"off"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}},y={args:{size:"medium",fullWidth:!1},render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("circle"),l=r.useMemo(()=>[{label:e("story_segmented_circle"),value:"circle",iconName:"CircleIcon"},{label:e("story_segmented_square"),value:"square",iconName:"SquareIcon"},{label:e("story_segmented_external"),value:"external",iconName:"ExternalLinkIcon"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}},_={args:{size:"medium",fullWidth:!1},render:n=>{const[e,a]=r.useState("circle"),s=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return t.jsx(u,{...n,options:s,value:e,onChange:a})}},h={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(["docs","common","components"]),[a,s]=r.useState("long1"),l=r.useMemo(()=>[{label:e("story_segmented_long_label"),value:"long1"},{label:e("story_segmented_another_long"),value:"long2"},{label:e("story_segmented_short"),value:"short"}],[e]);return t.jsx(u,{...n,options:l,value:a,onChange:s})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("on");
    const options = useMemo(() => [{
      label: t("story_segmented_on"),
      value: "on"
    }, {
      label: t("story_segmented_off"),
      value: "off"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("circle");
    const options = useMemo(() => [{
      label: t("story_segmented_circle"),
      value: "circle",
      iconName: "CircleIcon"
    }, {
      label: t("story_segmented_square"),
      value: "square",
      iconName: "SquareIcon"
    }, {
      label: t("story_segmented_external"),
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const, [t]);
    return <SegmentedControl {...args} options={options as any} value={value} onChange={setValue} />;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState("circle");
    const iconOnlyOptions = [{
      value: "circle",
      iconName: "CircleIcon"
    }, {
      value: "square",
      iconName: "SquareIcon"
    }, {
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const;
    return <SegmentedControl {...args} options={iconOnlyOptions as any} value={value} onChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [value, setValue] = useState("long1");
    const options = useMemo(() => [{
      label: t("story_segmented_long_label"),
      value: "long1"
    }, {
      label: t("story_segmented_another_long"),
      value: "long2"
    }, {
      label: t("story_segmented_short"),
      value: "short"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}};const L=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],$=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:_,Large:p,LongLabel:h,Medium:g,Small:d,TwoOptions:v,WithIcons:y,__namedExportsOrder:L,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as I,p as L,g as M,$ as S,v as T,y as W,d as a};
