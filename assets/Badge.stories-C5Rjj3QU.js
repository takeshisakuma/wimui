"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{t as s}from"./src-CV0le6yM.js";import{t as c}from"./Icon-DKSRBrcV.js";import{t as l}from"./Badge-A6ygOnY-.js";var u=e({Destructive:()=>m,IconOnly:()=>S,Neutral:()=>h,Optional:()=>b,Outline:()=>g,Primary:()=>p,Required:()=>y,Small:()=>v,Subtle:()=>_,WithIcon:()=>x,__namedExportsOrder:()=>C,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{a(),r(),s(),d=i(),f={title:`Components/Data Indicators/Badge`,component:l,tags:[],parameters:{layout:`centered`}},p={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_content`)})},args:{intent:`primary`}},m={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_error`)})},args:{intent:`danger`}},h={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_neutral`)})},args:{intent:`neutral`}},g={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_outline`)})},args:{variant:`outline`,intent:`primary`}},_={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_subtle`)})},args:{variant:`subtle`,intent:`primary`}},v={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_small`)})},args:{size:`sm`}},y={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`required`)})},args:{intent:`danger`,variant:`subtle`,size:`sm`}},b={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`optional`)})},args:{intent:`neutral`,size:`sm`}},x={render:function(e){let{t}=n(o);return(0,d.jsx)(l,{...e,content:t(`story.badge_verified`),icon:(0,d.jsx)(c,{name:`CheckIcon`})})},args:{intent:`primary`}},S={args:{icon:(0,d.jsx)(c,{name:`CheckIcon`}),intent:`primary`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    intent: "primary"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    intent: "danger"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    intent: "neutral"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_outline")} />;
  },
  args: {
    variant: "outline",
    intent: "primary"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_subtle")} />;
  },
  args: {
    variant: "subtle",
    intent: "primary"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_small")} />;
  },
  args: {
    size: "sm"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  // 実使用（\`FieldLabelContent\` が \`<Input required>\` で描く必須バッジ）と
  // 同じ形にする。塗りだと必須項目の多いフォームで、何も間違えていないのに
  // ページ中がエラー色になり実際のエラーと区別が付かなくなるため subtle を使う。
  // 見本と実装が違うと、読んだ人が別の見た目を書くことになる（T51-①）。
  args: {
    intent: "danger",
    variant: "subtle",
    size: "sm"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    intent: "neutral",
    size: "sm"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_verified")} icon={<Icon name="CheckIcon" />} />;
  },
  args: {
    intent: "primary"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    intent: "primary"
  }
}`,...S.parameters?.docs?.source}}},C=[`Primary`,`Destructive`,`Neutral`,`Outline`,`Subtle`,`Small`,`Required`,`Optional`,`WithIcon`,`IconOnly`]}));w();export{m as Destructive,S as IconOnly,h as Neutral,b as Optional,g as Outline,p as Primary,y as Required,v as Small,_ as Subtle,x as WithIcon,C as __namedExportsOrder,f as default,w as n,u as t};