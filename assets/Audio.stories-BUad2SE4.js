"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{d as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Button-vRcm9ObM.js";import{n as f,t as p}from"./audiosample-RzkJBVqu.js";var m=e({AutoPlay:()=>x,CustomControls:()=>C,Default:()=>y,FullFeatured:()=>w,PremiumFeatures:()=>T,Rounded:()=>S,WithCaption:()=>b,__namedExportsOrder:()=>E,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{h=n(r(),1),f(),s(),a(),u(),g=o(),_=n(r(),1),v={title:`Components/Media/Audio`,component:l,parameters:{layout:`centered`},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]}}},y={args:{src:p,controls:!0,radius:`none`}},b={render:function(e){let{t}=i(c);return(0,g.jsx)(l,{...e,caption:t(`story.audio_caption`)})},args:{src:p,controls:!0,radius:`none`}},x={args:{src:p,controls:!0,autoPlay:!0,muted:!0}},S={args:{src:p,customControls:!0,controls:!1,radius:`full`,shadow:!0,border:!0}},C={name:`Custom Design`,args:{customControls:!0,showMetadata:!0,radius:`md`,shadow:!0,border:!0},render:function(e){let{t}=i(c);return(0,g.jsx)(l,{...e,src:{src:p,title:t(`story.audio_custom_player`),artist:`Wim UI`}})}},w={args:{customControls:!0,radius:`md`,shadow:!0,border:!0,visualizer:!0,showMetadata:!0,fadeIn:1500,fadeOut:1500,crossfade:2e3,playbackRate:!0,hotkeys:!0,presets:!0,sleepTimer:!0},render:function(e){let{t}=i(c);return(0,g.jsx)(l,{...e,src:[{src:p,title:t(`story.audio_sample_web_api`),artist:`Wim UI`},{src:p,title:t(`story.audio_track_2`),artist:`Wim UI`}]})}},T={render:function(e){let{t}=i(c),[n,r]=h.useState(0);return(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.audio_premium_features_lazy_load`)}),(0,g.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,g.jsx)(d,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.audio_premium_features_reload`)})}),(0,_.createElement)(l,{...e,key:n,src:p,customControls:!0,showMetadata:!0,demoDelay:2e3,radius:`md`,shadow:!0,caption:t(`story.audio_premium_features_caption`)})]})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Audio {...args} caption={t("story.audio_caption")} />;
  },
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Custom Design",
  args: {
    customControls: true,
    showMetadata: true,
    radius: "md",
    shadow: true,
    border: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Audio {...args} src={{
      src: audioSample,
      title: t("story.audio_custom_player"),
      artist: "Wim UI"
    }} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    customControls: true,
    radius: "md",
    shadow: true,
    border: true,
    visualizer: true,
    showMetadata: true,
    fadeIn: 1500,
    fadeOut: 1500,
    crossfade: 2000,
    playbackRate: true,
    hotkeys: true,
    presets: true,
    sleepTimer: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Audio {...args} src={[{
      src: audioSample,
      title: t("story.audio_sample_web_api"),
      artist: "Wim UI"
    }, {
      src: audioSample,
      title: t("story.audio_track_2"),
      artist: "Wim UI"
    }]} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [audioKey, setAudioKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.audio_premium_features_lazy_load")}</p>
          <div style={{
          marginBottom: "1rem"
        }}>
            <Button variant="solid" onClick={() => setAudioKey(prev => prev + 1)} icon="RefreshIcon">{t("story.audio_premium_features_reload")}</Button>
          </div>
          <Audio {...args} key={audioKey} src={audioSample} customControls showMetadata demoDelay={2000} radius="md" shadow caption={t("story.audio_premium_features_caption")} />
        </div>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithCaption`,`AutoPlay`,`Rounded`,`CustomControls`,`FullFeatured`,`PremiumFeatures`]}));D();export{x as AutoPlay,C as CustomControls,y as Default,w as FullFeatured,T as PremiumFeatures,S as Rounded,b as WithCaption,E as __namedExportsOrder,v as default,D as n,m as t};