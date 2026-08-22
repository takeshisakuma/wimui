"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{l,t as u}from"./src-Ssuy8lr7.js";import{t as d}from"./Button-Dps1MPAd.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./video_poster-CqGOMAzs.js";var v=e({AutoPlay:()=>w,CustomControls:()=>E,Default:()=>C,FullFeatured:()=>D,PremiumFeatures:()=>O,Rounded:()=>T,__namedExportsOrder:()=>k,default:()=>S}),y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{y=n(r(),1),f(),g(),_(),s(),a(),u(),b=o(),x=n(r(),1),S={title:`Components/Media/Video`,component:l,parameters:{layout:`centered`},args:{tracks:[{kind:`captions`,src:p,srcLang:`en`,label:`English`}]},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},fit:{control:`select`,options:[`contain`,`cover`,`fill`,`none`,`scale-down`]}}},C={args:{src:h,poster:m,width:600}},w={render:function(e){let{t}=i(c);return(0,b.jsx)(l,{...e,src:h,poster:m,width:600,autoPlay:!0,muted:!0,loop:!0,controls:!1,caption:t(`story.video_autoplay_caption`)})}},T={args:{src:h,poster:m,width:400,radius:`lg`,shadow:!0}},E={render:function(e){let{t}=i(c);return(0,b.jsx)(l,{...e,src:h,poster:m,width:600,customControls:!0,radius:`md`,shadow:!0,caption:t(`story.video_custom_caption`)})}},D={render:function(e){let{t}=i(c);return(0,b.jsx)(l,{...e,width:800,videoId:`sample-demo-vid`,resumePlayback:!0,autoPlayNext:!0,controls:!1,radius:`lg`,shadow:!0,border:!0,fit:`cover`,preload:`auto`,caption:t(`story.video_full_caption`),customControls:!0,advancedControls:!0,qualities:[{label:`1080p`,src:h},{label:`720p`,src:h},{label:`Auto`,src:h}],playlist:[{src:h,title:t(`story.video_ep1`),poster:m},{src:h,title:t(`story.video_ep2`),poster:m},{src:h,title:t(`story.video_ep3`),poster:m}]})}},O={render:function(e){let{t}=i(c),[n,r]=y.useState(0);return(0,b.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.video_premium_features_lazy_load`)}),(0,b.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,b.jsx)(d,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.video_premium_features_reload`)})}),(0,x.createElement)(l,{...e,key:n,src:`${h}?k=${n}`,poster:m,width:600,fadeIn:!0,demoDelay:2e3,radius:`md`,shadow:!0,caption:t(`story.video_premium_features_caption`)})]})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} autoPlay={true} muted={true} loop={true} controls={false} caption={t("story.video_autoplay_caption")} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "lg",
    shadow: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} customControls={true} radius="md" shadow={true} caption={t("story.video_custom_caption")} />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`AutoPlay`,`Rounded`,`CustomControls`,`FullFeatured`,`PremiumFeatures`]}));A();export{w as AutoPlay,E as CustomControls,C as Default,D as FullFeatured,O as PremiumFeatures,T as Rounded,k as __namedExportsOrder,S as default,A as n,v as t};