import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-K9UxIAwh.js";import{I as M}from"./Icon-BhqaBnH4.js";import{d as I,g as k}from"./style-utils-Bzkn8Zxa.js";import{A as t}from"./iframe-Bn5mqC8Q.js";import{u as o}from"./useTranslation-Cn4N2seM.js";const n=({size:e="md",content:a,color:v,weight:f="normal",fontStyle:A="normal",iconName:h=void 0,iconPosition:x="left",decoration:b="none",className:C,style:E,children:L,...T})=>{const P=a??L,z={xs:"sm",sm:"sm",md:"md",lg:"lg",xl:"lg"}[e]||"md",_=h?r.jsx(M,{name:h,size:z}):null,N=r.jsxs(r.Fragment,{children:[h&&x==="left"&&_,r.jsx("span",{children:P}),h&&x==="right"&&_]}),w=typeof v=="string"&&["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"].includes(v);return r.jsx("span",{className:j("wim-span",`wim-span--${e}`,w&&`wim-span--${v}`,f==="bold"&&"wim-span--bold",A==="italic"&&"wim-span--italic",b!=="none"&&`wim-span--${b}`,C),style:{color:w?void 0:k(v),fontWeight:I(f),...E},...T,children:N})};n.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:"WimColorKey | WimColorToken",elements:[{name:"union",raw:`| "primary"
| "primary-hover"
| "primary-active"
| "primary-light"
| "primary-container-alpha"
| "secondary"
| "informative"
| "destructive"
| "positive"
| "caution"
| "disabled"
// Text colors
| "text-primary"
| "text-secondary"
| "text-tertiary"
| "text-disabled"
| "text-white"
| "text-error"
| "text-placeholder"
// Text on semantic backgrounds
| "text-on-primary"
| "text-on-secondary"
| "text-on-destructive"
| "text-on-positive"
| "text-on-caution"
| "text-on-informative"
| "text-on-disabled"
| "text-on-overlay"
// Surface / background colors
| "surface"
| "surface-variant"
| "surface-hover"
| "surface-variant-alpha"
| "bg-app"
| "bg-component"
| "bg-primary"
| "bg-secondary"
| "bg-tertiary"
| "bg-hover"
| "ghost-bg-hover"
// Border / focus colors
| "border"
| "border-secondary"
| "focus-outline"
// Overlay colors
| "overlay-bg"
| "overlay-bg-light"
| "overlay-bg-dark"
// Scrollbar colors
| "scrollbar-thumb"
| "scrollbar-track"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-hover"'},{name:"literal",value:'"primary-active"'},{name:"literal",value:'"primary-light"'},{name:"literal",value:'"primary-container-alpha"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"caution"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'},{name:"literal",value:'"text-disabled"'},{name:"literal",value:'"text-white"'},{name:"literal",value:'"text-error"'},{name:"literal",value:'"text-placeholder"'},{name:"literal",value:'"text-on-primary"'},{name:"literal",value:'"text-on-secondary"'},{name:"literal",value:'"text-on-destructive"'},{name:"literal",value:'"text-on-positive"'},{name:"literal",value:'"text-on-caution"'},{name:"literal",value:'"text-on-informative"'},{name:"literal",value:'"text-on-disabled"'},{name:"literal",value:'"text-on-overlay"'},{name:"literal",value:'"surface"'},{name:"literal",value:'"surface-variant"'},{name:"literal",value:'"surface-hover"'},{name:"literal",value:'"surface-variant-alpha"'},{name:"literal",value:'"bg-app"'},{name:"literal",value:'"bg-component"'},{name:"literal",value:'"bg-primary"'},{name:"literal",value:'"bg-secondary"'},{name:"literal",value:'"bg-tertiary"'},{name:"literal",value:'"bg-hover"'},{name:"literal",value:'"ghost-bg-hover"'},{name:"literal",value:'"border"'},{name:"literal",value:'"border-secondary"'},{name:"literal",value:'"focus-outline"'},{name:"literal",value:'"overlay-bg"'},{name:"literal",value:'"overlay-bg-light"'},{name:"literal",value:'"overlay-bg-dark"'},{name:"literal",value:'"scrollbar-thumb"'},{name:"literal",value:'"scrollbar-track"'}]},{name:"union",raw:"| `var(--wim-color-${WimColorKey})`\n| `var(--wim-${WimColorKey})`",elements:[{name:"literal",value:"`var(--wim-color-${WimColorKey})`"},{name:"literal",value:"`var(--wim-${WimColorKey})`"}]}]},{name:"unknown"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold" | "medium"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'},{name:"literal",value:'"medium"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},fontStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:O}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Typography & Icons/Span",component:n,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:O()}},l={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"xl",weight:"normal",color:"deepgray",fontStyle:"normal"}},s={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"lg",weight:"normal",color:"deepgray",fontStyle:"normal"}},i={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"md",weight:"normal",color:"deepgray",fontStyle:"normal"}},m={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"sm",weight:"normal",color:"deepgray",fontStyle:"normal"}},c={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"xs",weight:"normal",color:"deepgray",fontStyle:"normal"}},u={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"sm",weight:"normal",color:"deepgray",fontStyle:"normal",iconName:"SquareIcon",iconPosition:"left"}},p={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"lg",weight:"bold",color:"black",fontStyle:"italic",iconName:"CircleIcon",iconPosition:"right"}},d={args:{size:"md",content:"",iconName:"CircleIcon"}},g={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"md",weight:"bold"}},y={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"md",decoration:"line-through"}},S={render:e=>{const{t:a}=o(t);return r.jsx(n,{...e,content:a("story.span_medium")})},args:{size:"md",decoration:"highlight"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const R=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],U=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:g,ExLargeSpan:l,ExSmallSpan:c,HighlightSpan:S,IconOnlySpan:d,LargeSpan:s,LargeSpanWithIconOnRight:p,MediumSpan:i,SmallSpan:m,SmallSpanWithIcon:u,StrikethroughSpan:y,__namedExportsOrder:R,default:W},Symbol.toStringTag,{value:"Module"}));export{l as E,S as H,s as L,i as M,U as S,m as a,u as b,y as c};
