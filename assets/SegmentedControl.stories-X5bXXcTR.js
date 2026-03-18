import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-KO47qPQt.js";import{c as b}from"./index-DoF0NgAI.js";import{I as z}from"./Icon-C3wtoj5L.js";import{u as O}from"./useIndicator-DJHcTr5l.js";import{F as P}from"./FieldTemplate--r7M2MIs.js";import{A as m}from"./i18nConstants-BpHxieg5.js";import{u as d}from"./useTranslation-vvBMO_AT.js";const u=({options:n,value:e,onChange:s,size:a="medium",fullWidth:l=!1,className:L,label:x,error:N,required:k,layout:q="vertical"})=>{const w=o.useRef([]),C=o.useId(),I=`wim-segmented-label-${C}`,A=`wim-segmented-error-${C}`,{containerRef:W,sliderStyle:j,isReady:E}=O({activeSelector:".wim-segmented-control__item--active",dependence:n.length}),T=n.findIndex(r=>r.value===e),V=(r,c)=>{let i=c;switch(r.key){case"ArrowLeft":case"ArrowUp":i=c-1,i<0&&(i=n.length-1);break;case"ArrowRight":case"ArrowDown":i=c+1,i>=n.length&&(i=0);break;default:return}r.preventDefault(),s(n[i].value),w.current[i]?.focus()};return t.jsx(P,{label:x,error:N,required:k,layout:q,labelId:I,errorId:A,className:b("wim-segmented-control-container",L),children:t.jsxs("div",{ref:W,className:b("wim-segmented-control",`wim-segmented-control--${a==="small"?"sm":a==="large"?"lg":"md"}`,l&&"wim-segmented-control--full-width",E&&"wim-segmented-control--ready"),role:"radiogroup","aria-labelledby":x?I:void 0,children:[t.jsx("div",{className:"wim-segmented-control__slider",style:j,"aria-hidden":"true"}),n.map((r,c)=>{const i=r.value===e,M=i||T===-1&&c===0;return t.jsxs("button",{ref:S=>{w.current[c]=S},type:"button",className:b("wim-segmented-control__item",i&&"wim-segmented-control__item--active",!r.label&&r.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>s(r.value),onKeyDown:S=>V(S,c),onFocus:()=>{},onBlur:()=>{},role:"radio","aria-checked":i,tabIndex:M?0:-1,"aria-label":r.label||r.value,children:[r.iconName&&t.jsx(z,{name:r.iconName,size:a}),r.label&&t.jsx("span",{className:"wim-segmented-control__label",children:r.label})]},r.value)})]})})};u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const R={title:"Components/Selection Controls/SegmentedControl",component:u,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},g={args:{size:"small",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(m),[s,a]=o.useState("day"),l=o.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:s,onChange:a})}},p={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(m),[s,a]=o.useState("day"),l=o.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:s,onChange:a})}},v={args:{size:"large",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(m),[s,a]=o.useState("day"),l=o.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(u,{...n,options:l,value:s,onChange:a})}},y={args:{size:"medium",fullWidth:!0},render:n=>{const{t:e}=d(m),[s,a]=o.useState("on"),l=o.useMemo(()=>[{label:e("story_segmented_on"),value:"on"},{label:e("story_segmented_off"),value:"off"}],[e]);return t.jsx(u,{...n,options:l,value:s,onChange:a})}},_={args:{size:"medium",fullWidth:!1},render:n=>{const{t:e}=d(m),[s,a]=o.useState("circle"),l=o.useMemo(()=>[{label:e("story_segmented_circle"),value:"circle",iconName:"CircleIcon"},{label:e("story_segmented_square"),value:"square",iconName:"SquareIcon"},{label:e("story_segmented_external"),value:"external",iconName:"ExternalLinkIcon"}],[e]);return t.jsx(u,{...n,options:[...l],value:s,onChange:a})}},h={args:{size:"medium",fullWidth:!1},render:n=>{const[e,s]=o.useState("circle"),a=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return t.jsx(u,{...n,options:[...a],value:e,onChange:s})}},f={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(m),[s,a]=o.useState("long1"),l=o.useMemo(()=>[{label:e("story_segmented_long_label"),value:"long1"},{label:e("story_segmented_another_long"),value:"long2"},{label:e("story_segmented_short"),value:"short"}],[e]);return t.jsx(u,{...n,options:l,value:s,onChange:a})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
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
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    return <SegmentedControl {...args} options={[...options] as Parameters<typeof SegmentedControl>[0]["options"]} value={value} onChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    return <SegmentedControl {...args} options={[...iconOnlyOptions] as Parameters<typeof SegmentedControl>[0]["options"]} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...f.parameters?.docs?.source}}};const D=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],Q=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:h,Large:v,LongLabel:f,Medium:p,Small:g,TwoOptions:y,WithIcons:_,__namedExportsOrder:D,default:R},Symbol.toStringTag,{value:"Module"}));export{h as I,v as L,p as M,Q as S,y as T,_ as W,g as a};
