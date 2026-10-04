"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{a as c,i as l,n as u,r as d,t as f}from"./Card-BX8yw3HV.js";import{n as p,t as m}from"./Button-DrO46Brn.js";var h=t({Default:()=>v,Elevated:()=>y,Flat:()=>x,Outline:()=>b,WithHeaderAndFooter:()=>S,__namedExportsOrder:()=>C,default:()=>_}),g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),a(),p(),u(),c(),g=s(),_={title:`Components/Data Containers/Card`,component:f,tags:[],parameters:{layout:`padded`},decorators:[e=>(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`32px`},children:(0,g.jsx)(e,{})})],argTypes:{variant:{control:`select`,options:[`elevated`,`outline`,`flat`]},padding:{control:`select`,options:[...d]},radius:{control:`select`,options:[...l]}}},v={render:function(e){let{t}=r(o);return(0,g.jsx)(f,{...e,children:(0,g.jsxs)(f.Body,{children:[(0,g.jsx)(`h3`,{children:t(`story.card_default_title`)}),(0,g.jsx)(`p`,{children:t(`story.card_default_desc`)})]})})},args:{style:{width:`300px`}}},y={render:function(e){let{t}=r(o);return(0,g.jsx)(f,{...e,children:(0,g.jsxs)(f.Body,{children:[(0,g.jsx)(`h3`,{children:t(`story.card_elevated_title`)}),(0,g.jsx)(`p`,{children:t(`story.card_elevated_desc`)})]})})},args:{variant:`elevated`,style:{width:`300px`}}},b={render:function(e){let{t}=r(o);return(0,g.jsx)(f,{...e,children:(0,g.jsxs)(f.Body,{children:[(0,g.jsx)(`h3`,{children:t(`story.card_outline_title`)}),(0,g.jsx)(`p`,{children:t(`story.card_outline_desc`)})]})})},args:{variant:`outline`,style:{width:`300px`}}},x={render:function(e){let{t}=r(o);return(0,g.jsx)(f,{...e,children:(0,g.jsxs)(f.Body,{children:[(0,g.jsx)(`h3`,{children:t(`story.card_flat_title`)}),(0,g.jsx)(`p`,{children:t(`story.card_flat_desc`)})]})})},args:{variant:`flat`,style:{width:`300px`}}},S={render:function(e){let{t}=r(o);return(0,g.jsxs)(f,{...e,style:{width:`400px`},children:[(0,g.jsx)(f.Header,{children:(0,g.jsx)(`h4`,{style:{margin:0},children:t(`story.card_header_title`)})}),(0,g.jsx)(f.Body,{children:(0,g.jsx)(`p`,{children:t(`story.card_body_text`)})}),(0,g.jsx)(f.Footer,{children:(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,g.jsx)(m,{variant:`outline`,size:`sm`,children:t(`story.card_cancel`)}),(0,g.jsx)(m,{variant:`solid`,size:`sm`,children:t(`story.card_save`)})]})})]})},args:{variant:`elevated`}},C=[`Default`,`Elevated`,`Outline`,`Flat`,`WithHeaderAndFooter`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          <h3>{t("story.card_elevated_title")}</h3>
          <p>{t("story.card_elevated_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "elevated",
    style: {
      width: "300px"
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{b as a,x as i,v as n,S as o,y as r,w as s,h as t};