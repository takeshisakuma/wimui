import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-DR7vVb7D.js";import{I as N}from"./Icon-D7a_aJQd.js";import{u as o}from"./useTranslation-Eq2fY2Qq.js";import{A as t}from"./iframe-BDBmq9kz.js";const n=({size:e="medium",content:a="span",color:l="black",weight:b="normal",fontStyle:A="normal",iconName:w=void 0,iconPosition:h="left",decoration:f="none",className:E,style:L,...z})=>{const{t:P}=o(),T={"ex-small":"xs",small:"sm",medium:"md",large:"lg","ex-large":"xl"},C={"ex-small":"small",small:"small",medium:"medium",large:"large","ex-large":"large"}[e]||"medium",x=w?r.jsx(N,{name:w,size:C}):null,M=r.jsxs(r.Fragment,{children:[w&&h==="left"&&x,r.jsx("span",{children:P(a)}),w&&h==="right"&&x]}),_=l&&(l.startsWith("var(")||l.includes("#")||l.includes("rgb"));return r.jsx("span",{className:j("wim-span",`wim-span--${T[e]}`,!_&&`wim-span--${l}`,b==="bold"&&"wim-span--bold",A==="italic"&&"wim-span--italic",f!=="none"&&`wim-span--${f}`,E),style:{color:_?l:void 0,...L},...z,children:M})};n.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "error"
| "primary"
| "success"
| "warning"
| "info"
| WimColor`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:`| "var(--color-destructive)"
| "var(--color-positive)"
| "var(--color-caution)"
| "var(--color-primary)"
| "var(--color-secondary)"
| "var(--color-informative)"
| "var(--color-disabled)"
| "var(--color-text-on-primary)"
| "var(--color-text-on-destructive)"
| "var(--color-text-on-positive)"
| "var(--color-text-on-caution)"
| "var(--color-text-on-secondary)"
| "var(--color-text-on-informative)"
| "var(--color-text-on-disabled)"
| "var(--text-primary)"
| "var(--text-secondary)"
| "var(--text-tertiary)"
| "var(--text-disabled)"
| "var(--text-white)"
| "var(--text-error)"
| "var(--bg-app)"
| "var(--bg-component)"
| "var(--wim-color-bg-primary)"
| "var(--wim-color-bg-secondary)"
| "var(--wim-color-bg-hover)"
| "var(--wim-color-border)"
| "var(--wim-color-border-secondary)"
| "var(--color-focus-outline)"
| "var(--scrollbar-thumb)"
| "var(--scrollbar-track)"
| "var(--wim-color-primary)"
| "var(--wim-color-primary-hover)"
| "var(--wim-color-primary-active)"
| "var(--wim-color-primary-light)"
| "var(--wim-color-secondary)"
| "var(--wim-color-text-primary)"
| "var(--wim-color-text-secondary)"
| "var(--wim-color-text-tertiary)"
| "var(--wim-color-text-disabled)"
| "var(--wim-color-text-placeholder)"
| "var(--wim-color-text-on-primary)"
| "var(--wim-color-text-on-secondary)"
| "var(--wim-color-surface)"
| "var(--wim-color-surface-variant)"
| "var(--wim-color-surface-hover)"
| "var(--wim-color-primary-container-alpha)"
| "var(--wim-color-surface-variant-alpha)"
| "var(--wim-color-bg-tertiary)"
| "var(--wim-color-bg-component)"
| "var(--wim-color-overlay-bg)"
| "var(--wim-color-overlay-bg-light)"
| "var(--wim-color-overlay-bg-dark)"
| "var(--wim-color-text-on-overlay)"`,elements:[{name:"literal",value:'"var(--color-destructive)"'},{name:"literal",value:'"var(--color-positive)"'},{name:"literal",value:'"var(--color-caution)"'},{name:"literal",value:'"var(--color-primary)"'},{name:"literal",value:'"var(--color-secondary)"'},{name:"literal",value:'"var(--color-informative)"'},{name:"literal",value:'"var(--color-disabled)"'},{name:"literal",value:'"var(--color-text-on-primary)"'},{name:"literal",value:'"var(--color-text-on-destructive)"'},{name:"literal",value:'"var(--color-text-on-positive)"'},{name:"literal",value:'"var(--color-text-on-caution)"'},{name:"literal",value:'"var(--color-text-on-secondary)"'},{name:"literal",value:'"var(--color-text-on-informative)"'},{name:"literal",value:'"var(--color-text-on-disabled)"'},{name:"literal",value:'"var(--text-primary)"'},{name:"literal",value:'"var(--text-secondary)"'},{name:"literal",value:'"var(--text-tertiary)"'},{name:"literal",value:'"var(--text-disabled)"'},{name:"literal",value:'"var(--text-white)"'},{name:"literal",value:'"var(--text-error)"'},{name:"literal",value:'"var(--bg-app)"'},{name:"literal",value:'"var(--bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--color-focus-outline)"'},{name:"literal",value:'"var(--scrollbar-thumb)"'},{name:"literal",value:'"var(--scrollbar-track)"'},{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"black"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},fontStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:I}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Typography & Icons/Span",component:n,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:I()}},i={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"ex-large",weight:"normal",color:"deepgray",fontStyle:"normal"}},s={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"large",weight:"normal",color:"deepgray",fontStyle:"normal"}},m={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"medium",weight:"normal",color:"deepgray",fontStyle:"normal"}},c={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"small",weight:"normal",color:"deepgray",fontStyle:"normal"}},u={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"ex-small",weight:"normal",color:"deepgray",fontStyle:"normal"}},p={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"small",weight:"normal",color:"deepgray",fontStyle:"normal",iconName:"SquareIcon",iconPosition:"left"}},v={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"large",weight:"bold",color:"black",fontStyle:"italic",iconName:"CircleIcon",iconPosition:"right"}},d={args:{size:"medium",content:"",iconName:"CircleIcon"}},g={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"medium",weight:"bold"}},y={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"medium",decoration:"line-through"}},S={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story_span_medium")})},args:{size:"medium",decoration:"highlight"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-large",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "large",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "small",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-small",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "small",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`,
    iconName: "SquareIcon",
    //アイコン名を指定
    iconPosition: "left" //アイコンの位置を指定
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "large",
    weight: "bold",
    color: "black",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right"
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: "bold"
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through"
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight"
  }
}`,...S.parameters?.docs?.source}}};const O=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],$=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:g,ExLargeSpan:i,ExSmallSpan:u,HighlightSpan:S,IconOnlySpan:d,LargeSpan:s,LargeSpanWithIconOnRight:v,MediumSpan:m,SmallSpan:c,SmallSpanWithIcon:p,StrikethroughSpan:y,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{i as E,S as H,s as L,m as M,$ as S,c as a,p as b,y as c};
