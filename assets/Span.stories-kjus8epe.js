import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-D0GPwUjE.js";import{I as M}from"./Icon-BJ9I8SuJ.js";import{u as o}from"./useTranslation-iqmbh8MZ.js";import{A as t}from"./iframe-BCt2Cqzi.js";const n=({size:e="md",content:r="span",color:l="black",weight:_="normal",fontStyle:A="normal",iconName:S=void 0,iconPosition:h="left",decoration:f="none",className:E,style:L,...T})=>{const{t:P}=o(),z={xs:"sm",sm:"sm",md:"md",lg:"lg",xl:"lg"}[e]||"md",x=S?a.jsx(M,{name:S,size:z}):null,C=a.jsxs(a.Fragment,{children:[S&&h==="left"&&x,a.jsx("span",{children:P(r)}),S&&h==="right"&&x]}),b=l&&(l.startsWith("var(")||l.includes("#")||l.includes("rgb"));return a.jsx("span",{className:j("wim-span",`wim-span--${e}`,!b&&`wim-span--${l}`,_==="bold"&&"wim-span--bold",A==="italic"&&"wim-span--italic",f!=="none"&&`wim-span--${f}`,E),style:{color:b?l:void 0,...L},...T,children:C})};n.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "error"
| "primary"
| "success"
| "warning"
| "info"
| WimColor`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:`| "var(--wim-color-primary)"
| "var(--wim-color-primary-hover)"
| "var(--wim-color-primary-active)"
| "var(--wim-color-primary-light)"
| "var(--wim-color-primary-container-alpha)"
| "var(--wim-color-secondary)"
| "var(--wim-color-informative)"
| "var(--wim-color-destructive)"
| "var(--wim-color-positive)"
| "var(--wim-color-caution)"
| "var(--wim-color-disabled)"
// Text colors
| "var(--wim-color-text-primary)"
| "var(--wim-color-text-secondary)"
| "var(--wim-color-text-tertiary)"
| "var(--wim-color-text-disabled)"
| "var(--wim-color-text-white)"
| "var(--wim-color-text-error)"
| "var(--wim-color-text-placeholder)"
// Text on semantic backgrounds
| "var(--wim-color-text-on-primary)"
| "var(--wim-color-text-on-secondary)"
| "var(--wim-color-text-on-destructive)"
| "var(--wim-color-text-on-positive)"
| "var(--wim-color-text-on-caution)"
| "var(--wim-color-text-on-informative)"
| "var(--wim-color-text-on-disabled)"
| "var(--wim-color-text-on-overlay)"
// Surface / background colors
| "var(--wim-color-surface)"
| "var(--wim-color-surface-variant)"
| "var(--wim-color-surface-hover)"
| "var(--wim-color-surface-variant-alpha)"
| "var(--wim-color-bg-app)"
| "var(--wim-color-bg-component)"
| "var(--wim-color-bg-primary)"
| "var(--wim-color-bg-secondary)"
| "var(--wim-color-bg-tertiary)"
| "var(--wim-color-bg-hover)"
// Border / focus colors
| "var(--wim-color-border)"
| "var(--wim-color-border-secondary)"
| "var(--wim-color-focus-outline)"
// Overlay colors
| "var(--wim-color-overlay-bg)"
| "var(--wim-color-overlay-bg-light)"
| "var(--wim-color-overlay-bg-dark)"
// Scrollbar colors
| "var(--wim-scrollbar-thumb)"
| "var(--wim-scrollbar-track)"`,elements:[{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-informative)"'},{name:"literal",value:'"var(--wim-color-destructive)"'},{name:"literal",value:'"var(--wim-color-positive)"'},{name:"literal",value:'"var(--wim-color-caution)"'},{name:"literal",value:'"var(--wim-color-disabled)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-white)"'},{name:"literal",value:'"var(--wim-color-text-error)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-text-on-destructive)"'},{name:"literal",value:'"var(--wim-color-text-on-positive)"'},{name:"literal",value:'"var(--wim-color-text-on-caution)"'},{name:"literal",value:'"var(--wim-color-text-on-informative)"'},{name:"literal",value:'"var(--wim-color-text-on-disabled)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-app)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--wim-color-focus-outline)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-scrollbar-thumb)"'},{name:"literal",value:'"var(--wim-scrollbar-track)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"black"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},fontStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:N}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Typography & Icons/Span",component:n,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:N()}},i={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"xl",weight:"normal",color:"deepgray",fontStyle:"normal"}},s={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"lg",weight:"normal",color:"deepgray",fontStyle:"normal"}},m={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"md",weight:"normal",color:"deepgray",fontStyle:"normal"}},c={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"sm",weight:"normal",color:"deepgray",fontStyle:"normal"}},u={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"xs",weight:"normal",color:"deepgray",fontStyle:"normal"}},p={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"sm",weight:"normal",color:"deepgray",fontStyle:"normal",iconName:"SquareIcon",iconPosition:"left"}},d={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"lg",weight:"bold",color:"black",fontStyle:"italic",iconName:"CircleIcon",iconPosition:"right"}},v={args:{size:"md",content:"",iconName:"CircleIcon"}},g={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"md",weight:"bold"}},w={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"md",decoration:"line-through"}},y={render:e=>{const{t:r}=o(t);return a.jsx(n,{...e,content:r("story.span_medium")})},args:{size:"md",decoration:"highlight"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xl",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xs",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`,
    iconName: "SquareIcon",
    //アイコン名を指定
    iconPosition: "left" //アイコンの位置を指定
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: "bold",
    color: "black",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right"
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: "bold"
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    decoration: "line-through"
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    decoration: "highlight"
  }
}`,...y.parameters?.docs?.source}}};const I=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],H=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:g,ExLargeSpan:i,ExSmallSpan:u,HighlightSpan:y,IconOnlySpan:v,LargeSpan:s,LargeSpanWithIconOnRight:d,MediumSpan:m,SmallSpan:c,SmallSpanWithIcon:p,StrikethroughSpan:w,__namedExportsOrder:I,default:k},Symbol.toStringTag,{value:"Module"}));export{i as E,y as H,s as L,m as M,H as S,c as a,p as b,w as c};
