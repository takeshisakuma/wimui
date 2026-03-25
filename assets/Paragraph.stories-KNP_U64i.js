import{j as t}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./Paragraph-CP43xay5.js";import{A as n}from"./iframe-DwNzUyVS.js";import{u as s}from"./useTranslation-IUowf2zp.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/Typography & Icons/Paragraph",component:e,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:u()}},o={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_exlarge")})},args:{size:"ex-large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},g={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_large")})},args:{size:"large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},l={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_medium")})},args:{size:"medium",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},p={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_small")})},args:{size:"small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},i={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_exsmall")})},args:{size:"ex-small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},m={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_bold")})},args:{size:"medium",weight:"bold"}},c={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_strikethrough")})},args:{size:"medium",decoration:"line-through"}},h={render:r=>{const{t:a}=s(n);return t.jsx(e,{...r,content:a("story_paragraph_highlight")})},args:{size:"medium",decoration:"highlight"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_exlarge')} />;
  },
  args: {
    size: "ex-large",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_large')} />;
  },
  args: {
    size: "large",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_medium')} />;
  },
  args: {
    size: "medium",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_small')} />;
  },
  args: {
    size: "small",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_exsmall')} />;
  },
  args: {
    size: "ex-small",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_bold')} />;
  },
  args: {
    size: "medium",
    weight: "bold"
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_strikethrough')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through"
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_highlight')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight"
  }
}`,...h.parameters?.docs?.source}}};const P=["ExLargeParagraph","LargeParagraph","MediumParagraph","SmallParagrapht","ExSmallParagraph","BoldParagraph","StrikethroughParagraph","HighlightParagraph"],f=Object.freeze(Object.defineProperty({__proto__:null,BoldParagraph:m,ExLargeParagraph:o,ExSmallParagraph:i,HighlightParagraph:h,LargeParagraph:g,MediumParagraph:l,SmallParagrapht:p,StrikethroughParagraph:c,__namedExportsOrder:P,default:d},Symbol.toStringTag,{value:"Module"}));export{o as E,h as H,g as L,l as M,f as P,p as S,c as a};
