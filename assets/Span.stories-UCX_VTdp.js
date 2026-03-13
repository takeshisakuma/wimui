import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as q}from"./index-Dz-H0ba_.js";import{I as E}from"./Icon-Dymv0mT2.js";import{u as o}from"./useTranslation-R4wwOoyb.js";const n=({size:e="medium",content:r="span",color:t="black",weight:b="normal",fontStyle:_="normal",iconName:w=void 0,iconPosition:h="left",decoration:S="none",className:z,style:T,...j})=>{const{t:I}=o(),k={"ex-small":"xs",small:"sm",medium:"md",large:"lg","ex-large":"xl"},C={"ex-small":"small",small:"small",medium:"medium",large:"large","ex-large":"large"}[e]||"medium",x=w?a.jsx(E,{name:w,size:C}):null,O=a.jsxs(a.Fragment,{children:[w&&h==="left"&&x,a.jsx("span",{children:I(r)}),w&&h==="right"&&x]}),f=t&&(t.startsWith("var(")||t.includes("#")||t.includes("rgb"));return a.jsx("span",{className:q("wim-span",`wim-span--${k[e]}`,!f&&`wim-span--${t}`,b==="bold"&&"wim-span--bold",_==="italic"&&"wim-span--italic",S!=="none"&&`wim-span--${S}`,z),style:{color:f?t:void 0,...T},...j,children:O})};n.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"\r
| "deepgray"\r
| "gray"\r
| "lightgray"\r
| "white"\r
| "error"\r
| "primary"\r
| "success"\r
| "warning"\r
| "info"\r
| WimColor`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:`| "var(--color-destructive)"\r
| "var(--color-positive)"\r
| "var(--color-caution)"\r
| "var(--color-primary)"\r
| "var(--color-secondary)"\r
| "var(--color-informative)"\r
| "var(--color-disabled)"\r
| "var(--color-text-on-primary)"\r
| "var(--color-text-on-destructive)"\r
| "var(--color-text-on-positive)"\r
| "var(--color-text-on-caution)"\r
| "var(--color-text-on-secondary)"\r
| "var(--color-text-on-informative)"\r
| "var(--color-text-on-disabled)"\r
| "var(--text-primary)"\r
| "var(--text-secondary)"\r
| "var(--text-tertiary)"\r
| "var(--text-disabled)"\r
| "var(--text-white)"\r
| "var(--text-error)"\r
| "var(--bg-app)"\r
| "var(--bg-component)"\r
| "var(--wim-color-bg-primary)"\r
| "var(--wim-color-bg-secondary)"\r
| "var(--wim-color-bg-hover)"\r
| "var(--wim-color-border)"\r
| "var(--wim-color-border-secondary)"\r
| "var(--color-focus-outline)"\r
| "var(--scrollbar-thumb)"\r
| "var(--scrollbar-track)"\r
| "var(--wim-color-primary)"\r
| "var(--wim-color-primary-hover)"\r
| "var(--wim-color-primary-active)"\r
| "var(--wim-color-primary-light)"\r
| "var(--wim-color-secondary)"\r
| "var(--wim-color-text-primary)"\r
| "var(--wim-color-text-secondary)"\r
| "var(--wim-color-text-tertiary)"\r
| "var(--wim-color-text-disabled)"\r
| "var(--wim-color-text-placeholder)"\r
| "var(--wim-color-text-on-primary)"\r
| "var(--wim-color-text-on-secondary)"\r
| "var(--wim-color-surface)"\r
| "var(--wim-color-surface-variant)"\r
| "var(--wim-color-surface-hover)"\r
| "var(--wim-color-primary-container-alpha)"\r
| "var(--wim-color-surface-variant-alpha)"\r
| "var(--wim-color-bg-tertiary)"\r
| "var(--wim-color-bg-component)"\r
| "var(--wim-color-overlay-bg)"\r
| "var(--wim-color-overlay-bg-light)"\r
| "var(--wim-color-overlay-bg-dark)"\r
| "var(--wim-color-text-on-overlay)"`,elements:[{name:"literal",value:'"var(--color-destructive)"'},{name:"literal",value:'"var(--color-positive)"'},{name:"literal",value:'"var(--color-caution)"'},{name:"literal",value:'"var(--color-primary)"'},{name:"literal",value:'"var(--color-secondary)"'},{name:"literal",value:'"var(--color-informative)"'},{name:"literal",value:'"var(--color-disabled)"'},{name:"literal",value:'"var(--color-text-on-primary)"'},{name:"literal",value:'"var(--color-text-on-destructive)"'},{name:"literal",value:'"var(--color-text-on-positive)"'},{name:"literal",value:'"var(--color-text-on-caution)"'},{name:"literal",value:'"var(--color-text-on-secondary)"'},{name:"literal",value:'"var(--color-text-on-informative)"'},{name:"literal",value:'"var(--color-text-on-disabled)"'},{name:"literal",value:'"var(--text-primary)"'},{name:"literal",value:'"var(--text-secondary)"'},{name:"literal",value:'"var(--text-tertiary)"'},{name:"literal",value:'"var(--text-disabled)"'},{name:"literal",value:'"var(--text-white)"'},{name:"literal",value:'"var(--text-error)"'},{name:"literal",value:'"var(--bg-app)"'},{name:"literal",value:'"var(--bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--color-focus-outline)"'},{name:"literal",value:'"var(--scrollbar-thumb)"'},{name:"literal",value:'"var(--scrollbar-track)"'},{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"black"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},fontStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:L}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Typography & Icons/Span",component:n,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:L()}},l={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"ex-large",weight:"normal",color:"deepgray",fontStyle:"normal"}},s={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"large",weight:"normal",color:"deepgray",fontStyle:"normal"}},i={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"medium",weight:"normal",color:"deepgray",fontStyle:"normal"}},m={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"small",weight:"normal",color:"deepgray",fontStyle:"normal"}},c={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"ex-small",weight:"normal",color:"deepgray",fontStyle:"normal"}},u={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"small",weight:"normal",color:"deepgray",fontStyle:"normal",iconName:"SquareIcon",iconPosition:"left"}},p={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"large",weight:"bold",color:"black",fontStyle:"italic",iconName:"CircleIcon",iconPosition:"right"}},d={args:{size:"medium",content:"",iconName:"CircleIcon"}},v={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"medium",weight:"bold"}},g={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"medium",decoration:"line-through"}},y={render:e=>{const{t:r}=o(["docs","common","components"]);return a.jsx(n,{...e,content:r("story_span_medium")})},args:{size:"medium",decoration:"highlight"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-large",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "large",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "small",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-small",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: "bold"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through"
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight"
  }
}`,...y.parameters?.docs?.source}}};const V=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],H=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:v,ExLargeSpan:l,ExSmallSpan:c,HighlightSpan:y,IconOnlySpan:d,LargeSpan:s,LargeSpanWithIconOnRight:p,MediumSpan:i,SmallSpan:m,SmallSpanWithIcon:u,StrikethroughSpan:g,__namedExportsOrder:V,default:M},Symbol.toStringTag,{value:"Module"}));export{l as E,y as H,s as L,i as M,H as S,m as a,u as b,g as c};
