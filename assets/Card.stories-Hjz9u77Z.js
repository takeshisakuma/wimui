"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{a as l,i as u,r as d,t as f}from"./Card-BT1d9WN9.js";import{t as p}from"./Button-vRcm9ObM.js";var m=e({Default:()=>_,Flat:()=>y,Outline:()=>v,WithHeaderAndFooter:()=>b,__namedExportsOrder:()=>x,default:()=>g}),h,g,_,v,y,b,x,S=t((()=>{n(),o(),i(),c(),l(),h=a(),g={title:`Components/Data Containers/Card`,component:f,tags:[],parameters:{layout:`padded`},decorators:[e=>(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`32px`},children:(0,h.jsx)(e,{})})],argTypes:{variant:{control:`select`,options:[`elevated`,`outline`,`flat`]},padding:{control:`select`,options:[...d]},radius:{control:`select`,options:[...u]}}},_={render:function(e){let{t}=r(s);return(0,h.jsx)(f,{...e,children:(0,h.jsxs)(f.Body,{children:[(0,h.jsx)(`h3`,{children:t(`story.card_default_title`)}),(0,h.jsx)(`p`,{children:t(`story.card_default_desc`)})]})})},args:{variant:`elevated`,style:{width:`300px`}}},v={render:function(e){let{t}=r(s);return(0,h.jsx)(f,{...e,children:(0,h.jsxs)(f.Body,{children:[(0,h.jsx)(`h3`,{children:t(`story.card_outline_title`)}),(0,h.jsx)(`p`,{children:t(`story.card_outline_desc`)})]})})},args:{variant:`outline`,style:{width:`300px`}}},y={render:function(e){let{t}=r(s);return(0,h.jsx)(f,{...e,children:(0,h.jsxs)(f.Body,{children:[(0,h.jsx)(`h3`,{children:t(`story.card_flat_title`)}),(0,h.jsx)(`p`,{children:t(`story.card_flat_desc`)})]})})},args:{variant:`flat`,style:{width:`300px`}}},b={render:function(e){let{t}=r(s);return(0,h.jsxs)(f,{...e,style:{width:`400px`},children:[(0,h.jsx)(f.Header,{children:(0,h.jsx)(`h4`,{style:{margin:0},children:t(`story.card_header_title`)})}),(0,h.jsx)(f.Body,{children:(0,h.jsx)(`p`,{children:t(`story.card_body_text`)})}),(0,h.jsx)(f.Footer,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,h.jsx)(p,{variant:`outline`,size:`sm`,children:t(`story.card_cancel`)}),(0,h.jsx)(p,{variant:`solid`,size:`sm`,children:t(`story.card_save`)})]})})]})},args:{variant:`elevated`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_default_title")}</h3>
          <p>{t("story.card_default_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "elevated",
    style: {
      width: "300px"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_outline_title")}</h3>
          <p>{t("story.card_outline_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "outline",
    style: {
      width: "300px"
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_flat_title")}</h3>
          <p>{t("story.card_flat_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "flat",
    style: {
      width: "300px"
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args} style={{
      width: "400px"
    }}>
        <Card.Header>
          <h4 style={{
          margin: 0
        }}>{t("story.card_header_title")}</h4>
        </Card.Header>
        <Card.Body>
          <p>{t("story.card_body_text")}</p>
        </Card.Body>
        <Card.Footer>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <Button variant="outline" size="sm">{t("story.card_cancel")}</Button>
            <Button variant="solid" size="sm">{t("story.card_save")}</Button>
          </div>
        </Card.Footer>
      </Card>;
  },
  args: {
    variant: "elevated"
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Outline`,`Flat`,`WithHeaderAndFooter`]}));S();export{_ as Default,y as Flat,v as Outline,b as WithHeaderAndFooter,x as __namedExportsOrder,g as default,S as n,m as t};