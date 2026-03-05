import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as q}from"./index-CWCO5Yw8.js";import{I as E}from"./Icon-C7cklonI.js";import{u as j}from"./useTranslation-BYDAsujS.js";const S=({size:d="medium",content:f="span",color:e="black",weight:x="normal",fontStyle:b="normal",iconName:p=void 0,iconPosition:g="left",decoration:y="none",className:_,style:z,...k})=>{const{t:I}=j(),T={"ex-small":"xs",small:"sm",medium:"md",large:"lg","ex-large":"xl"},C={"ex-small":"small",small:"small",medium:"medium",large:"large","ex-large":"large"}[d]||"medium",w=p?a.jsx(E,{name:p,size:C}):null,O=a.jsxs(a.Fragment,{children:[p&&g==="left"&&w,a.jsx("span",{children:I(f)}),p&&g==="right"&&w]}),h=e&&(e.startsWith("var(")||e.includes("#")||e.includes("rgb"));return a.jsx("span",{className:q("wim-span",`wim-span--${T[d]}`,!h&&`wim-span--${e}`,x==="bold"&&"wim-span--bold",b==="italic"&&"wim-span--italic",y!=="none"&&`wim-span--${y}`,_),style:{color:h?e:void 0,...z},...k,children:O})};S.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "error"
| "primary"
| "success"
| "warning"
| "info"
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
| "var(--wim-color-text-on-overlay)"`,elements:[{name:"literal",value:'"var(--color-destructive)"'},{name:"literal",value:'"var(--color-positive)"'},{name:"literal",value:'"var(--color-caution)"'},{name:"literal",value:'"var(--color-primary)"'},{name:"literal",value:'"var(--color-secondary)"'},{name:"literal",value:'"var(--color-informative)"'},{name:"literal",value:'"var(--color-disabled)"'},{name:"literal",value:'"var(--color-text-on-primary)"'},{name:"literal",value:'"var(--color-text-on-destructive)"'},{name:"literal",value:'"var(--color-text-on-positive)"'},{name:"literal",value:'"var(--color-text-on-caution)"'},{name:"literal",value:'"var(--color-text-on-secondary)"'},{name:"literal",value:'"var(--color-text-on-informative)"'},{name:"literal",value:'"var(--color-text-on-disabled)"'},{name:"literal",value:'"var(--text-primary)"'},{name:"literal",value:'"var(--text-secondary)"'},{name:"literal",value:'"var(--text-tertiary)"'},{name:"literal",value:'"var(--text-disabled)"'},{name:"literal",value:'"var(--text-white)"'},{name:"literal",value:'"var(--text-error)"'},{name:"literal",value:'"var(--bg-app)"'},{name:"literal",value:'"var(--bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--color-focus-outline)"'},{name:"literal",value:'"var(--scrollbar-thumb)"'},{name:"literal",value:'"var(--scrollbar-track)"'},{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"black"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},fontStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:L}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Typography & Icons/Span",component:S,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:L()}},r={args:{size:"ex-large",content:"ex-large_span",weight:"normal",color:"deepgray",fontStyle:"normal"}},l={args:{size:"large",content:"large_span",weight:"normal",color:"deepgray",fontStyle:"normal"}},n={args:{size:"medium",content:"medium_span",weight:"normal",color:"deepgray",fontStyle:"normal"}},o={args:{size:"small",content:"small_span",weight:"normal",color:"deepgray",fontStyle:"normal"}},t={args:{size:"ex-small",content:"ex-small_span",weight:"normal",color:"deepgray",fontStyle:"normal"}},i={args:{size:"small",content:"small_span",weight:"normal",color:"deepgray",fontStyle:"normal",iconName:"SquareIcon",iconPosition:"left"}},m={args:{size:"large",content:"large_span",weight:"bold",color:"black",fontStyle:"italic",iconName:"CircleIcon",iconPosition:"right"}},s={args:{size:"medium",content:"",iconName:"CircleIcon"}},c={args:{size:"medium",content:"Bold Span",weight:"bold"}},u={args:{size:"medium",content:"Strikethrough Span",decoration:"line-through"}},v={args:{size:"medium",content:"Highlight Span",decoration:"highlight"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "ex-large",\n    content: `ex-large_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    fontStyle: `normal`\n  }\n}',...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "large",\n    content: `large_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    fontStyle: `normal`\n  }\n}',...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "medium",\n    content: `medium_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    fontStyle: `normal`\n  }\n}',...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    content: `small_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    fontStyle: `normal`\n  }\n}',...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "ex-small",\n    content: `ex-small_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    fontStyle: `normal`\n  }\n}',...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_span\`,
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`,
    iconName: "SquareIcon",
    //アイコン名を指定
    iconPosition: "left" //アイコンの位置を指定
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    content: \`large_span\`,
    weight: "bold",
    color: "black",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right"
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Bold Span",
    weight: "bold"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Strikethrough Span",
    decoration: "line-through"
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Highlight Span",
    decoration: "highlight"
  }
}`,...v.parameters?.docs?.source}}};const V=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],H=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:c,ExLargeSpan:r,ExSmallSpan:t,HighlightSpan:v,IconOnlySpan:s,LargeSpan:l,LargeSpanWithIconOnRight:m,MediumSpan:n,SmallSpan:o,SmallSpanWithIcon:i,StrikethroughSpan:u,__namedExportsOrder:V,default:M},Symbol.toStringTag,{value:"Module"}));export{r as E,v as H,l as L,n as M,H as S,o as a,i as b,u as c};
