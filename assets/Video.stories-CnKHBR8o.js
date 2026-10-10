"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-DSrkNfg0.js";import{a as d,c as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./video_poster-P3VI5dai.js";var y=n({AutoPlay:()=>T,CustomControls:()=>D,Default:()=>w,FullFeatured:()=>O,PremiumFeatures:()=>k,Rounded:()=>E,__namedExportsOrder:()=>A,default:()=>C}),b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{b=e(r(),1),d(),g(),v(),a(),o(),l(),f(),x=c(),S=r(),C={title:`Components/Media/Video`,component:_,parameters:{layout:`centered`},args:{tracks:[{kind:`captions`,src:p,srcLang:`en`,label:`English`}]},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},fit:{control:`select`,options:[`contain`,`cover`,`fill`,`none`,`scale-down`]}}},w={args:{src:h,poster:m,width:600}},T={render:function(e){let{t}=i(s);return(0,x.jsx)(_,{...e,src:h,poster:m,width:600,autoPlay:!0,muted:!0,loop:!0,controls:!1,caption:t(`story.video_autoplay_caption`)})}},E={args:{src:h,poster:m,width:400,radius:`lg`,shadow:!0}},D={render:function(e){let{t}=i(s);return(0,x.jsx)(_,{...e,src:h,poster:m,width:600,customControls:!0,radius:`md`,shadow:!0,caption:t(`story.video_custom_caption`)})}},O={render:function(e){let{t}=i(s);return(0,x.jsx)(_,{...e,width:800,videoId:`sample-demo-vid`,resumePlayback:!0,autoPlayNext:!0,controls:!1,radius:`lg`,shadow:!0,border:!0,fit:`cover`,preload:`auto`,caption:t(`story.video_full_caption`),customControls:!0,advancedControls:!0,qualities:[{label:`1080p`,src:h},{label:`720p`,src:h},{label:`Auto`,src:h}],playlist:[{src:h,title:t(`story.video_ep1`),poster:m},{src:h,title:t(`story.video_ep2`),poster:m},{src:h,title:t(`story.video_ep3`),poster:m}]})}},k={render:function(e){let{t}=i(s),[n,r]=b.useState(0);return(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.video_premium_features_lazy_load`)}),(0,x.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,x.jsx)(u,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.video_premium_features_reload`)})}),(0,S.createElement)(_,{...e,key:n,src:`${h}?k=${n}`,poster:m,width:600,fadeIn:!0,demoDelay:2e3,radius:`md`,shadow:!0,caption:t(`story.video_premium_features_caption`)})]})})}},A=[`Default`,`AutoPlay`,`Rounded`,`CustomControls`,`FullFeatured`,`PremiumFeatures`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} autoPlay={true} muted={true} loop={true} controls={false} caption={t("story.video_autoplay_caption")} />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "lg",
    shadow: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} customControls={true} radius="md" shadow={true} caption={t("story.video_custom_caption")} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} width={800} videoId="sample-demo-vid" resumePlayback={true} autoPlayNext={true} controls={false} radius="lg" shadow={true} border={true} fit="cover" preload="auto" caption={t("story.video_full_caption")} customControls={true} advancedControls={true} qualities={[{
      label: "1080p",
      src: sampleVideo
    }, {
      label: "720p",
      src: sampleVideo
    }, {
      label: "Auto",
      src: sampleVideo
    }]} playlist={[{
      src: sampleVideo,
      title: t("story.video_ep1"),
      poster: videoPoster
    }, {
      src: sampleVideo,
      title: t("story.video_ep2"),
      poster: videoPoster
    }, {
      src: sampleVideo,
      title: t("story.video_ep3"),
      poster: videoPoster
    }]} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [videoKey, setVideoKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.video_premium_features_lazy_load")}</p>
          <div style={{
          marginBottom: "1rem"
        }}>
            <Button variant="solid" onClick={() => setVideoKey(prev => prev + 1)} icon="RefreshIcon">{t("story.video_premium_features_reload")}</Button>
          </div>
          <Video {...args} key={videoKey} src={\`\${sampleVideo}?k=\${videoKey}\`} poster={videoPoster} width={600} fadeIn demoDelay={2000} radius="md" shadow caption={t("story.video_premium_features_caption")} />
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}}})))()}export{k as a,j as c,O as i,D as n,E as o,w as r,y as s,T as t};