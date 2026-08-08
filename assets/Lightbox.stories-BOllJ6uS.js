"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Lightbox-BHnZSO8p.js";var h=e({Default:()=>y,Gallery:()=>b,WithCaptions:()=>x,__namedExportsOrder:()=>S,default:()=>_}),g,_,v,y,b,x,S,C=t((()=>{n(),o(),i(),c(),p(),g=a(),_={title:`Components/Media/Lightbox`,component:m,parameters:{layout:`centered`}},v=e=>[{src:`./demo/lightbox_1.png`,alt:e(`story.lightbox_alt_mountain`),title:e(`story.lightbox_title_mountain`),caption:e(`story.lightbox_caption_mountain`)},{src:`./demo/lightbox_2.png`,alt:e(`story.lightbox_alt_building`),title:e(`story.lightbox_title_architecture`),caption:e(`story.lightbox_caption_architecture`)},{src:`./demo/lightbox_3.png`,alt:e(`story.lightbox_alt_tropical`),title:e(`story.lightbox_title_flora`),caption:e(`story.lightbox_caption_flora`)}],y={render:function(){let{t:e}=r(s),t=v(e);return(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{items:[{src:t[0].src,alt:t[0].alt}],children:(0,g.jsx)(l,{src:t[0].src,children:(0,g.jsx)(d,{src:t[0].src,alt:t[0].alt,width:300,radius:`md`,shadow:!0})})}),(0,g.jsx)(u,{})]})}},b={render:function(){let{t:e}=r(s),t=v(e);return(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{items:t,children:t.map((e,t)=>(0,g.jsx)(l,{index:t,children:(0,g.jsx)(d,{src:e.src,alt:e.alt,width:200,height:150,radius:`md`,shadow:!0,zoom:!0})},t))}),(0,g.jsx)(u,{})]})}},x={render:function(){let{t:e}=r(s),t=v(e);return(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{items:[t[2]],children:(0,g.jsx)(l,{src:t[2].src,title:e(`story.lightbox_flower_title`),caption:e(`story.lightbox_flower_caption`),children:(0,g.jsx)(d,{src:t[2].src,alt:e(`story.lightbox_alt_flower`),width:400,radius:`lg`,shadow:!0})})}),(0,g.jsx)(u,{showCounter:!1})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Gallery`,`WithCaptions`]}));C();export{y as Default,b as Gallery,x as WithCaptions,S as __namedExportsOrder,_ as default,C as n,h as t};