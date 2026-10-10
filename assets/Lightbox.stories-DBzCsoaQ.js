"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Image-qXOZSslM.js";import{a as u,i as d,n as f,r as p,t as m}from"./Lightbox-CN5rNHeW.js";import{r as h,t as g}from"./playOpen-BfHmRBb6.js";var _=t({Default:()=>x,Gallery:()=>S,Open:()=>w,WithCaptions:()=>C,__namedExportsOrder:()=>T,default:()=>y}),v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),g(),u(),c(),v=s(),y={title:`Components/Media/Lightbox`,component:m,parameters:{layout:`centered`}},b=e=>[{src:`./demo/lightbox_1.png`,alt:e(`story.lightbox_alt_mountain`),title:e(`story.lightbox_title_mountain`),caption:e(`story.lightbox_caption_mountain`)},{src:`./demo/lightbox_2.png`,alt:e(`story.lightbox_alt_building`),title:e(`story.lightbox_title_architecture`),caption:e(`story.lightbox_caption_architecture`)},{src:`./demo/lightbox_3.png`,alt:e(`story.lightbox_alt_tropical`),title:e(`story.lightbox_title_flora`),caption:e(`story.lightbox_caption_flora`)}],x={render:function(){let{t:e}=r(o),t=b(e);return(0,v.jsxs)(m,{children:[(0,v.jsx)(p,{items:[{src:t[0].src,alt:t[0].alt}],children:(0,v.jsx)(d,{src:t[0].src,children:(0,v.jsx)(l,{src:t[0].src,alt:t[0].alt,width:300,radius:`md`,shadow:!0})})}),(0,v.jsx)(f,{})]})}},S={render:function(){let{t:e}=r(o),t=b(e);return(0,v.jsxs)(m,{children:[(0,v.jsx)(p,{items:t,children:t.map((e,t)=>(0,v.jsx)(d,{index:t,children:(0,v.jsx)(l,{src:e.src,alt:e.alt,width:200,height:150,radius:`md`,shadow:!0,zoom:!0})},t))}),(0,v.jsx)(f,{})]})}},C={render:function(){let{t:e}=r(o),t=b(e);return(0,v.jsxs)(m,{children:[(0,v.jsx)(p,{items:[t[2]],children:(0,v.jsx)(d,{src:t[2].src,title:e(`story.lightbox_flower_title`),caption:e(`story.lightbox_flower_caption`),children:(0,v.jsx)(l,{src:t[2].src,alt:e(`story.lightbox_alt_flower`),width:400,radius:`lg`,shadow:!0})})}),(0,v.jsx)(f,{showCounter:!1})]})}},w={...C,play:h(`click`,`button`,`.wim-lightbox`)},T=[`Default`,`Gallery`,`WithCaptions`,`Open`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return <Lightbox>
      <LightboxGallery items={[{
        src: images[0].src,
        alt: images[0].alt
      }]}>
        <LightboxTrigger src={images[0].src}>
          <Image src={images[0].src} alt={images[0].alt} width={300} radius="md" shadow />
        </LightboxTrigger>
      </LightboxGallery>
      <LightboxContent />
    </Lightbox>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return <Lightbox>
      <LightboxGallery items={images}>
        {images.map((item, index) => <LightboxTrigger key={index} index={index}>
            <Image src={item.src} alt={item.alt} width={200} height={150} radius="md" shadow zoom />
          </LightboxTrigger>)}
      </LightboxGallery>
      <LightboxContent />
    </Lightbox>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return <Lightbox>
      <LightboxGallery items={[images[2]]}>
        <LightboxTrigger src={images[2].src} title={t("story.lightbox_flower_title")} caption={t("story.lightbox_flower_caption")}>
          <Image src={images[2].src} alt={t("story.lightbox_alt_flower")} width={400} radius="lg" shadow />
        </LightboxTrigger>
      </LightboxGallery>
      <LightboxContent showCounter={false} />
    </Lightbox>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...WithCaptions,
  play: openWith("click", "button", ".wim-lightbox")
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,C as i,S as n,_ as r,x as t};