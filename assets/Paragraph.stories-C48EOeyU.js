import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as n}from"./Paragraph-CQlnVbXO.js";import{u as o}from"./useTranslation-BJQcmf5i.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,d={title:"Components/Typography & Icons/Paragraph",component:n,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:h()}},t={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_exlarge")})},args:{size:"ex-large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},s={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_large")})},args:{size:"large",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},m={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_medium")})},args:{size:"medium",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},c={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_small")})},args:{size:"small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},g={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_exsmall")})},args:{size:"ex-small",weight:"normal",lineHeight:"normal-latn",fontStyle:"normal"}},l={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_bold")})},args:{size:"medium",weight:"bold"}},p={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_strikethrough")})},args:{size:"medium",decoration:"line-through"}},i={render:r=>{const{t:a}=o(["docs","common","components"]);return e.jsx(n,{...r,content:a("story_paragraph_highlight")})},args:{size:"medium",decoration:"highlight"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
  render: (args: any) => {
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
  render: (args: any) => {
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
  render: (args: any) => {
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
  render: (args: any) => {
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
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_bold')} />;
  },
  args: {
    size: "medium",
    weight: "bold"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_strikethrough')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through"
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Paragraph {...args} content={t('story_paragraph_highlight')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight"
  }
}`,...i.parameters?.docs?.source}}};const u=["ExLargeParagraph","LargeParagraph","MediumParagraph","SmallParagrapht","ExSmallParagraph","BoldParagraph","StrikethroughParagraph","HighlightParagraph"],S=Object.freeze(Object.defineProperty({__proto__:null,BoldParagraph:l,ExLargeParagraph:t,ExSmallParagraph:g,HighlightParagraph:i,LargeParagraph:s,MediumParagraph:m,SmallParagrapht:c,StrikethroughParagraph:p,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{t as E,i as H,s as L,m as M,S as P,c as S,p as a};
