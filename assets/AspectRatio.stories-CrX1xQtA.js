"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ki as c,t as l}from"./src-CV0le6yM.js";var u,d=t((()=>{u=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%20400'%20width='300'%20height='400'%3e%3cdefs%3e%3clinearGradient%20id='sky'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23A8C4D8'/%3e%3cstop%20offset='100%25'%20stop-color='%23DCE9F2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='gr'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%235A6E7A'/%3e%3cstop%20offset='100%25'%20stop-color='%2333424A'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='300'%20height='400'%20fill='url(%23sky)'/%3e%3ccircle%20cx='234'%20cy='104'%20r='40'%20fill='%23FFF3C4'%20fill-opacity='0.9'/%3e%3cpath%20d='M0%20272%20L78%20160%20L138%20264%20L198%20136%20L300%20288%20L300%20400%20L0%20400%20Z'%20fill='url(%23gr)'/%3e%3c/svg%3e`})),f=e({Default:()=>h,Embed:()=>_,Square:()=>g,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v,y=t((()=>{n(),o(),i(),l(),d(),p=a(),m={title:`Components/Layout/AspectRatio`,component:c,tags:[],parameters:{layout:`padded`},argTypes:{ratio:{control:`number`}}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,children:(0,p.jsx)(`img`,{src:u,alt:t(`story.aspectratio_alt`,`Landscape`)})})},args:{ratio:16/9,style:{width:`100%`,maxWidth:`400px`,margin:`0 auto`}}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,children:(0,p.jsx)(`img`,{src:u,alt:t(`story.aspectratio_alt`,`Landscape`)})})},args:{ratio:1,style:{width:`100%`,maxWidth:`200px`,margin:`0 auto`}}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,children:(0,p.jsx)(`iframe`,{title:t(`story.aspectratio_map_title`,`Map`),src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp`,style:{border:0},allowFullScreen:!0})})},args:{ratio:16/9,style:{width:`100%`,maxWidth:`500px`,margin:`0 auto`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AspectRatio {...args}>
        <img src={scenePortraitTall} alt={t("story.aspectratio_alt", "Landscape")} />
      </AspectRatio>;
  },
  args: {
    ratio: 16 / 9,
    style: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto"
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AspectRatio {...args}>
        <img src={scenePortraitTall} alt={t("story.aspectratio_alt", "Landscape")} />
      </AspectRatio>;
  },
  args: {
    ratio: 1,
    style: {
      width: "100%",
      maxWidth: "200px",
      margin: "0 auto"
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AspectRatio {...args}>
        <iframe title={t("story.aspectratio_map_title", "Map")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp" style={{
        border: 0
      }} allowFullScreen />
      </AspectRatio>;
  },
  args: {
    ratio: 16 / 9,
    style: {
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto"
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Square`,`Embed`]}));y();export{h as Default,_ as Embed,g as Square,v as __namedExportsOrder,m as default,y as n,f as t};