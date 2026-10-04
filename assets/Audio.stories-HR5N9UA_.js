"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-DrO46Brn.js";import{i as d,n as f,r as p,t as m}from"./audiosample-Cq0zfMqj.js";var h=n({AutoPlay:()=>S,CustomControls:()=>w,Default:()=>b,FullFeatured:()=>T,PremiumFeatures:()=>E,Rounded:()=>C,WithCaption:()=>x,__namedExportsOrder:()=>D,default:()=>y}),g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{g=e(r(),1),f(),a(),o(),d(),l(),_=c(),v=r(),y={title:`Components/Media/Audio`,component:p,parameters:{layout:`centered`},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]}}},b={args:{src:m,controls:!0,radius:`none`}},x={render:function(e){let{t}=i(s);return(0,_.jsx)(p,{...e,caption:t(`story.audio_caption`)})},args:{src:m,controls:!0,radius:`none`}},S={args:{src:m,controls:!0,autoPlay:!0,muted:!0}},C={args:{src:m,customControls:!0,controls:!1,radius:`full`,shadow:!0,border:!0}},w={name:`Custom Design`,args:{customControls:!0,showMetadata:!0,radius:`md`,shadow:!0,border:!0},render:function(e){let{t}=i(s);return(0,_.jsx)(p,{...e,src:{src:m,title:t(`story.audio_custom_player`),artist:`Wim UI`}})}},T={args:{customControls:!0,radius:`md`,shadow:!0,border:!0,visualizer:!0,showMetadata:!0,fadeIn:1500,fadeOut:1500,crossfade:2e3,playbackRate:!0,hotkeys:!0,presets:!0,sleepTimer:!0},render:function(e){let{t}=i(s);return(0,_.jsx)(p,{...e,src:[{src:m,title:t(`story.audio_sample_web_api`),artist:`Wim UI`},{src:m,title:t(`story.audio_track_2`),artist:`Wim UI`}]})}},E={render:function(e){let{t}=i(s),[n,r]=g.useState(0);return(0,_.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.audio_premium_features_lazy_load`)}),(0,_.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,_.jsx)(u,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.audio_premium_features_reload`)})}),(0,v.createElement)(p,{...e,key:n,src:m,customControls:!0,showMetadata:!0,demoDelay:2e3,radius:`md`,shadow:!0,caption:t(`story.audio_premium_features_caption`)})]})})}},D=[`Default`,`WithCaption`,`AutoPlay`,`Rounded`,`CustomControls`,`FullFeatured`,`PremiumFeatures`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}export{T as a,O as c,b as i,S as n,E as o,w as r,C as s,h as t};