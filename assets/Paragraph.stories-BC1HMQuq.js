import{j as n}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./Paragraph-DWf-1zBM.js";import{u as o}from"./useTranslation-DVQ5refS.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,d={title:"Components/Typography & Icons/Paragraph",component:e,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:h()}},t={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_exlarge")})},args:{size:"ex-large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},s={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_large")})},args:{size:"large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},m={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_medium")})},args:{size:"medium",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},c={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_small")})},args:{size:"small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},g={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_exsmall")})},args:{size:"ex-small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},p={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_bold")})},args:{size:"medium",weight:"bold"}},l={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_strikethrough")})},args:{size:"medium",decoration:"line-through"}},i={render:r=>{const{t:a}=o(["docs","common","components"]);return n.jsx(e,{...r,content:a("story_paragraph_highlight")})},args:{size:"medium",decoration:"highlight"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_exlarge')} />;
  },
  args: {
    size: "ex-large",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_large')} />;
  },
  args: {
    size: "large",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_medium')} />;
  },
  args: {
    size: "medium",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_small')} />;
  },
  args: {
    size: "small",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_exsmall')} />;
  },
  args: {
    size: "ex-small",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_bold')} />;
  },
  args: {
    size: "medium",
    weight: "bold"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_strikethrough')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_highlight')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight"
  }
}`,...i.parameters?.docs?.source}}};const u=["ExLargeParagraph","LargeParagraph","MediumParagraph","SmallParagrapht","ExSmallParagraph","BoldParagraph","StrikethroughParagraph","HighlightParagraph"],S=Object.freeze(Object.defineProperty({__proto__:null,BoldParagraph:p,ExLargeParagraph:t,ExSmallParagraph:g,HighlightParagraph:i,LargeParagraph:s,MediumParagraph:m,SmallParagrapht:c,StrikethroughParagraph:l,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{t as E,i as H,s as L,m as M,S as P,c as S,l as a};
