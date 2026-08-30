"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{At as c,t as l}from"./src-CV0le6yM.js";var u,d=t((()=>{u=``+new URL(`imagesanple-j58eW6sL.webp`,import.meta.url).href})),f=e({AspectRatioCheck:()=>w,AutoPlay:()=>b,Basic:()=>_,CustomContent:()=>x,MultipleItems:()=>v,NoLoop:()=>S,Responsive:()=>y,WithImage:()=>C,__namedExportsOrder:()=>T,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{n(),d(),o(),i(),l(),p=a(),m={title:`Components/Media/Carousel`,component:c,parameters:{layout:`fullscreen`},args:{loop:!0},argTypes:{autoPlay:{control:`boolean`},interval:{control:`number`},showIndicators:{control:`boolean`},showControls:{control:`boolean`},loop:{control:`boolean`},slidesToShow:{control:`number`},aspectRatio:{control:`text`},objectFit:{control:`select`,options:[`fill`,`contain`,`cover`,`none`,`scale-down`]}}},h=[{bg:`var(--wim-color-danger)`,text:`var(--wim-color-text-on-danger)`},{bg:`var(--wim-color-primary)`,text:`var(--wim-color-text-on-primary)`},{bg:`var(--wim-color-success)`,text:`var(--wim-color-text-on-success)`},{bg:`var(--wim-color-warning)`,text:`var(--wim-color-text-on-warning)`},{bg:`var(--wim-color-secondary)`,text:`var(--wim-color-text-on-secondary)`},{bg:`var(--wim-color-info)`,text:`var(--wim-color-text-on-info)`}],g=({index:e,label:t})=>{let{bg:n,text:r}=h[e%h.length];return(0,p.jsxs)(`div`,{style:{width:`100%`,height:`300px`,backgroundColor:n,display:`flex`,alignItems:`center`,justifyContent:`center`,color:r,fontSize:`32px`,fontWeight:`bold`,border:`4px solid var(--wim-color-border-secondary)`,boxSizing:`border-box`},children:[t,` `,e+1]})},_={render:function(e){let{t}=r(s),n=Array.from({length:4}).map((e,n)=>(0,p.jsx)(g,{index:n,label:t(`story.carousel_slide`)},n));return(0,p.jsx)(c,{...e,children:n})}},v={render:function(e){let{t}=r(s),n=Array.from({length:6}).map((e,n)=>(0,p.jsx)(g,{index:n,label:t(`story.carousel_slide`)},n));return(0,p.jsx)(c,{...e,slidesToShow:3,children:n})},parameters:{layout:`padded`}},y={render:function(e){let{t}=r(s),n=Array.from({length:6}).map((e,n)=>(0,p.jsx)(g,{index:n,label:t(`story.carousel_slide`)},n));return(0,p.jsx)(c,{...e,slidesToShow:{base:1,sm:2,md:3,lg:4},children:n})},parameters:{layout:`fullscreen`}},b={render:function(e){let{t}=r(s),n=Array.from({length:4}).map((e,n)=>(0,p.jsx)(g,{index:n,label:t(`story.carousel_slide`)},n));return(0,p.jsx)(c,{...e,autoPlay:!0,interval:3e3,children:n})}},x={render:function(e){let{t}=r(s);return(0,p.jsxs)(c,{...e,children:[(0,p.jsx)(`div`,{style:{padding:`0 10px`,width:`100%`},children:(0,p.jsxs)(`div`,{style:{padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-surface-variant)`},children:[(0,p.jsxs)(`h3`,{children:[t(`story.carousel_card`),` 1`]}),(0,p.jsx)(`p`,{children:t(`story.carousel_msg_loop`)})]})}),(0,p.jsx)(`div`,{style:{padding:`0 10px`,width:`100%`},children:(0,p.jsxs)(`div`,{style:{padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-surface-variant)`},children:[(0,p.jsxs)(`h3`,{children:[t(`story.carousel_card`),` 2`]}),(0,p.jsx)(`p`,{children:t(`story.carousel_msg_multiple`)})]})}),(0,p.jsx)(`div`,{style:{padding:`0 10px`,width:`100%`},children:(0,p.jsxs)(`div`,{style:{padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-surface-variant)`},children:[(0,p.jsxs)(`h3`,{children:[t(`story.carousel_card`),` 3`]}),(0,p.jsx)(`p`,{children:t(`story.carousel_msg_smooth`)})]})})]})}},S={render:function(e){let{t}=r(s),n=Array.from({length:3}).map((e,n)=>(0,p.jsx)(g,{index:n,label:t(`story.carousel_slide`)},n));return(0,p.jsx)(c,{...e,loop:!1,children:n})}},C={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,children:Array.from({length:4}).map((e,n)=>(0,p.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,p.jsx)(`img`,{src:u,alt:`${t(`story.carousel_sample_alt`)} ${n+1}`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})},`img-${n}`))})}},w={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,aspectRatio:`16/9`,objectFit:`cover`,children:Array.from({length:4}).map((e,n)=>(0,p.jsx)(`img`,{src:u,alt:`${t(`story.carousel_sample_alt`)} ${n+1}`},`img-${n}`))})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 6
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} slidesToShow={3}>
        {slides}
      </Carousel>;
  },
  parameters: {
    layout: "padded"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 6
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} slidesToShow={{
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    }}>
        {slides}
      </Carousel>;
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} autoPlay={true} interval={3000}>
        {slides}
      </Carousel>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args}>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 1
            </h3>
            <p>{t("story.carousel_msg_loop")}</p>
          </div>
        </div>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 2
            </h3>
            <p>{t("story.carousel_msg_multiple")}</p>
          </div>
        </div>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 3
            </h3>
            <p>{t("story.carousel_msg_smooth")}</p>
          </div>
        </div>
      </Carousel>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 3
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} loop={false}>
        {slides}
      </Carousel>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args}>
        {Array.from({
        length: 4
      }).map((_, i) => <div key={\`img-\${i}\`} style={{
        width: "100%",
        height: "300px"
      }}>
            <img src={SampleImage} alt={\`\${t("story.carousel_sample_alt")} \${i + 1}\`} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }} />
          </div>)}
      </Carousel>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args} aspectRatio="16/9" objectFit="cover">
        {Array.from({
        length: 4
      }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`\${t("story.carousel_sample_alt")} \${i + 1}\`} />)}
      </Carousel>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Basic`,`MultipleItems`,`Responsive`,`AutoPlay`,`CustomContent`,`NoLoop`,`WithImage`,`AspectRatioCheck`]}));E();export{w as AspectRatioCheck,b as AutoPlay,_ as Basic,x as CustomContent,v as MultipleItems,S as NoLoop,y as Responsive,C as WithImage,T as __namedExportsOrder,m as default,E as n,f as t};