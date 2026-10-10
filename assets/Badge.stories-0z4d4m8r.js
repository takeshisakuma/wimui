"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Icon-TGLZuM2d.js";import{n as l,t as u}from"./Badge-B1Em0jvH.js";var d=t({Destructive:()=>h,IconOnly:()=>C,Neutral:()=>g,Optional:()=>x,Outline:()=>_,Primary:()=>m,Required:()=>b,Sizes:()=>T,Small:()=>y,Solid:()=>w,Subtle:()=>v,WithIcon:()=>S,__namedExportsOrder:()=>E,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),i(),l(),s(),f=o(),p={title:`Components/Data Indicators/Badge`,component:u,tags:[],parameters:{layout:`centered`}},m={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_content`)})},args:{intent:`primary`}},h={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_error`)})},args:{intent:`danger`}},g={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_neutral`)})},args:{intent:`neutral`}},_={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_outline`)})},args:{variant:`outline`,intent:`primary`}},v={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_subtle`)})},args:{variant:`subtle`,intent:`primary`}},y={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_small`)})},args:{size:`sm`}},b={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`required`)})},args:{intent:`danger`,variant:`subtle`,size:`sm`}},x={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`optional`)})},args:{intent:`neutral`,size:`sm`}},S={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_verified`),icon:(0,f.jsx)(c,{name:`CheckIcon`})})},args:{intent:`primary`}},C={args:{icon:(0,f.jsx)(c,{name:`CheckIcon`}),intent:`primary`}},w={render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,content:t(`story.badge_content`)})},args:{variant:`solid`}},T={render:function(e){let{t}=n(a);return(0,f.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`sm`,`md`,`lg`].map(n=>(0,f.jsx)(u,{...e,size:n,content:t(`story.badge_content`)},n))})}},E=[`Primary`,`Destructive`,`Neutral`,`Outline`,`Subtle`,`Small`,`Required`,`Optional`,`WithIcon`,`IconOnly`,`Solid`,`Sizes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    intent: "primary"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    intent: "danger"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    intent: "neutral"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_small")} />;
  },
  args: {
    size: "sm"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_verified")} icon={<Icon name="CheckIcon" />} />;
  },
  args: {
    intent: "primary"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    intent: "primary"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    variant: "solid"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <Badge key={size} {...args} size={size} content={t("story.badge_content")} />)}
      </div>;
  }
}`,...T.parameters?.docs?.source}}}})))()}export{T as a,S as c,_ as i,D as l,h as n,w as o,C as r,v as s,d as t};