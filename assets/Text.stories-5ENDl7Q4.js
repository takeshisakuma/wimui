"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./Text-B6DLYHMc.js";var u=e({BoldText:()=>y,ExLargeText:()=>m,ExSmallText:()=>v,HighlightText:()=>x,LargeText:()=>h,LineClamp:()=>S,MediumText:()=>g,SmallText:()=>_,StrikethroughText:()=>b,__namedExportsOrder:()=>C,default:()=>p}),d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{n(),o(),i(),c(),d=a(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Typography & Icons/Text`,component:l,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:[`black`,`deepgray`,`gray`,`lightgray`,`white`,`danger`,`primary`,`success`,`warning`,`info`]}},args:{onClick:f()}},m={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_exlarge`)})},args:{size:`xl`,weight:`normal`,lineHeight:`normal-latn`,fontStyle:`normal`}},h={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_large`)})},args:{size:`lg`,weight:`normal`,lineHeight:`normal-latn`,fontStyle:`normal`}},g={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_medium`)})},args:{size:`md`,weight:`normal`,lineHeight:`normal-latn`,fontStyle:`normal`}},_={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_small`)})},args:{size:`sm`,weight:`normal`,lineHeight:`normal-latn`,fontStyle:`normal`}},v={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_exsmall`)})},args:{size:`xs`,weight:`normal`,lineHeight:`normal-latn`,fontStyle:`normal`}},y={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_bold`)})},args:{size:`md`,weight:`bold`}},b={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_strikethrough`)})},args:{size:`md`,decoration:`line-through`}},x={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.paragraph_highlight`)})},args:{size:`md`,decoration:`highlight`}},S={render:e=>{let{t}=r(s);return(0,d.jsx)(`div`,{style:{maxWidth:`22rem`},children:(0,d.jsx)(l,{...e,content:t(`story.paragraph_clamp_body`)})})},args:{size:`md`,lineClamp:3}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_exlarge')} />;
  },
  args: {
    size: "xl",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_large')} />;
  },
  args: {
    size: "lg",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_medium')} />;
  },
  args: {
    size: "md",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_small')} />;
  },
  args: {
    size: "sm",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_exsmall')} />;
  },
  args: {
    size: "xs",
    weight: \`normal\`,
    lineHeight: \`normal-latn\`,
    fontStyle: \`normal\`
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_bold')} />;
  },
  args: {
    size: "md",
    weight: "bold"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_strikethrough')} />;
  },
  args: {
    size: "md",
    decoration: "line-through"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_highlight')} />;
  },
  args: {
    size: "md",
    decoration: "highlight"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Text>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      maxWidth: "22rem"
    }}>
        <Text {...args} content={t("story.paragraph_clamp_body")} />
      </div>;
  },
  args: {
    size: "md",
    lineClamp: 3
  }
}`,...S.parameters?.docs?.source}}},C=[`ExLargeText`,`LargeText`,`MediumText`,`SmallText`,`ExSmallText`,`BoldText`,`StrikethroughText`,`HighlightText`,`LineClamp`]}));w();export{y as BoldText,m as ExLargeText,v as ExSmallText,x as HighlightText,h as LargeText,S as LineClamp,g as MediumText,_ as SmallText,b as StrikethroughText,C as __namedExportsOrder,p as default,w as n,u as t};