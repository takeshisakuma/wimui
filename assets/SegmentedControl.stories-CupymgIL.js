import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-R-8edTSa.js";import{c as b}from"./index-BMiqMCWS.js";import{I as O}from"./Icon-QzvmdxNd.js";import{u as E}from"./useIndicator-Dpg3dSjK.js";import{F as R}from"./FieldTemplate-DmQvFLsh.js";import{u}from"./useTranslation-BsF8P6HZ.js";const d=({options:n,value:e,onChange:t,size:o="medium",fullWidth:l=!1,className:C,label:S,error:k,required:q,layout:W="vertical"})=>{const x=r.useRef([]),w=r.useId(),I=`wim-segmented-label-${w}`,j=`wim-segmented-error-${w}`,{containerRef:N,sliderStyle:T,isReady:V}=E({activeSelector:".wim-segmented-control__item--active",dependence:n.length}),L=n.findIndex(a=>a.value===e),z=(a,i)=>{let c=i;switch(a.key){case"ArrowLeft":case"ArrowUp":c=i-1,c<0&&(c=n.length-1);break;case"ArrowRight":case"ArrowDown":c=i+1,c>=n.length&&(c=0);break;default:return}a.preventDefault(),t(n[c].value),x.current[c]?.focus()};return s.jsx(R,{label:S,error:k,required:q,layout:W,labelId:I,errorId:j,className:b("wim-segmented-control-container",C),children:s.jsxs("div",{ref:N,className:b("wim-segmented-control",`wim-segmented-control--${o==="small"?"sm":o==="large"?"lg":"md"}`,l&&"wim-segmented-control--full-width",V&&"wim-segmented-control--ready"),role:"radiogroup","aria-labelledby":S?I:void 0,children:[s.jsx("div",{className:"wim-segmented-control__slider",style:T,"aria-hidden":"true"}),n.map((a,i)=>{const c=a.value===e,M=c||L===-1&&i===0;return s.jsxs("button",{ref:f=>{x.current[i]=f},type:"button",className:b("wim-segmented-control__item",c&&"wim-segmented-control__item--active",!a.label&&a.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>t(a.value),onKeyDown:f=>z(f,i),onFocus:()=>{},onBlur:()=>{},role:"radio","aria-checked":c,tabIndex:M?0:-1,"aria-label":a.label||a.value,children:[a.iconName&&s.jsx(O,{name:a.iconName,size:o}),a.label&&s.jsx("span",{className:"wim-segmented-control__label",children:a.label})]},a.value)})]})})};d.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const A={title:"Components/Selection Controls/SegmentedControl",component:d,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},m={args:{size:"small",fullWidth:!0},decorators:[n=>s.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:s.jsx(n,{})})],render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}},_={args:{size:"medium",fullWidth:!0},decorators:[n=>s.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:s.jsx(n,{})})],render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}},g={args:{size:"large",fullWidth:!0},decorators:[n=>s.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:s.jsx(n,{})})],render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("day"),l=r.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}},p={args:{size:"medium",fullWidth:!0},render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("on"),l=r.useMemo(()=>[{label:e("story_segmented_on"),value:"on"},{label:e("story_segmented_off"),value:"off"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}},y={args:{size:"medium",fullWidth:!1},render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("circle"),l=r.useMemo(()=>[{label:e("story_segmented_circle"),value:"circle",iconName:"CircleIcon"},{label:e("story_segmented_square"),value:"square",iconName:"SquareIcon"},{label:e("story_segmented_external"),value:"external",iconName:"ExternalLinkIcon"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}},v={args:{size:"medium",fullWidth:!1},render:n=>{const[e,t]=r.useState("circle"),o=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return s.jsx(d,{...n,options:o,value:e,onChange:t})}},h={args:{size:"medium",fullWidth:!0},decorators:[n=>s.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:s.jsx(n,{})})],render:n=>{const{t:e}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,o]=r.useState("long1"),l=r.useMemo(()=>[{label:e("story_segmented_long_label"),value:"long1"},{label:e("story_segmented_another_long"),value:"long2"},{label:e("story_segmented_short"),value:"short"}],[e]);return s.jsx(d,{...n,options:l,value:t,onChange:o})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...h.parameters?.docs?.source}}};const D=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],H=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:v,Large:g,LongLabel:h,Medium:_,Small:m,TwoOptions:p,WithIcons:y,__namedExportsOrder:D,default:A},Symbol.toStringTag,{value:"Module"}));export{v as I,g as L,_ as M,H as S,p as T,y as W,m as a};
