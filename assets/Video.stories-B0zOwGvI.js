"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{l,t as u}from"./src-BE5jBQ9L.js";import{t as d}from"./Button-d-SlSJ4S.js";var f,p=t((()=>{f=``+new URL(`videosample-j4XSMn77.mp4`,import.meta.url).href})),m,h=t((()=>{m=``+new URL(`imagesanple-j58eW6sL.webp`,import.meta.url).href})),g=e({AutoPlay:()=>S,CustomControls:()=>w,Default:()=>x,FullFeatured:()=>T,PremiumFeatures:()=>E,Rounded:()=>C,__namedExportsOrder:()=>D,default:()=>b}),_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{_=n(r(),1),p(),h(),s(),a(),u(),v=o(),y=n(r(),1),b={title:`Components/Media/Video`,component:l,parameters:{layout:`centered`},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},fit:{control:`select`,options:[`contain`,`cover`,`fill`,`none`,`scale-down`]}}},x={args:{src:f,poster:m,width:600}},S={render:function(e){let{t}=i(c);return(0,v.jsx)(l,{...e,src:f,poster:m,width:600,autoPlay:!0,muted:!0,loop:!0,controls:!1,caption:t(`story.video_autoplay_caption`)})}},C={args:{src:f,poster:m,width:400,radius:`lg`,shadow:!0}},w={render:function(e){let{t}=i(c);return(0,v.jsx)(l,{...e,src:f,poster:m,width:600,customControls:!0,radius:`md`,shadow:!0,caption:t(`story.video_custom_caption`)})}},T={render:function(e){let{t}=i(c);return(0,v.jsx)(l,{...e,width:800,videoId:`sample-demo-vid`,resumePlayback:!0,autoPlayNext:!0,controls:!1,radius:`lg`,shadow:!0,border:!0,fit:`cover`,preload:`auto`,caption:t(`story.video_full_caption`),customControls:!0,advancedControls:!0,qualities:[{label:`1080p`,src:f},{label:`720p`,src:f},{label:`Auto`,src:f}],playlist:[{src:f,title:t(`story.video_ep1`),poster:m},{src:f,title:t(`story.video_ep2`),poster:m},{src:f,title:t(`story.video_ep3`),poster:m}]})}},E={render:function(e){let{t}=i(c),[n,r]=_.useState(0);return(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.video_premium_features_lazy_load`)}),(0,v.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,v.jsx)(d,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.video_premium_features_reload`)})}),(0,y.createElement)(l,{...e,key:n,src:`${f}?k=${n}`,poster:m,width:600,fadeIn:!0,demoDelay:2e3,radius:`md`,shadow:!0,caption:t(`story.video_premium_features_caption`)})]})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} autoPlay={true} muted={true} loop={true} controls={false} caption={t("story.video_autoplay_caption")} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "lg",
    shadow: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Video {...args} src={sampleVideo} poster={videoPoster} width={600} customControls={true} radius="md" shadow={true} caption={t("story.video_custom_caption")} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`AutoPlay`,`Rounded`,`CustomControls`,`FullFeatured`,`PremiumFeatures`]}));O();export{S as AutoPlay,w as CustomControls,x as Default,T as FullFeatured,E as PremiumFeatures,C as Rounded,D as __namedExportsOrder,b as default,O as n,g as t};