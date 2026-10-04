"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Header-CEkDvelQ.js";import{n as u,t as d}from"./Button-DrO46Brn.js";var f=t({Bordered:()=>g,Default:()=>h,Glass:()=>_,Playground:()=>y,Sticky:()=>v,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),c(),u(),i(),a(),p=s(),m={title:`Components/Application Shell/Header`,component:l,parameters:{layout:`fullscreen`},tags:[],argTypes:{fixed:{control:`boolean`,description:`Fix header to top`},sticky:{control:`boolean`,description:`Make header sticky on scroll`},bordered:{control:`boolean`,description:`Show border at bottom`},glass:{control:`boolean`,description:`Apply glassmorphism effect`},background:{control:`select`,options:[`primary`,`secondary`,`transparent`],description:`Background color`},children:{table:{disable:!0}}}},h={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsxs)(l.Section,{align:`start`,children:[` `,(0,p.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,p.jsx)(l.Section,{align:`center`,children:(0,p.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,p.jsx)(l.Section,{align:`end`,children:(0,p.jsx)(d,{size:`sm`,children:t(`story.header_login`)})})]})}},g={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,bordered:!0,children:[(0,p.jsxs)(l.Section,{align:`start`,children:[` `,(0,p.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,p.jsx)(l.Section,{align:`center`,children:(0,p.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,p.jsx)(l.Section,{align:`end`,children:(0,p.jsx)(d,{size:`sm`,children:t(`story.header_login`)})})]})}},_={parameters:{backgrounds:{default:`dark`}},render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,glass:!0,background:`transparent`,children:[(0,p.jsxs)(l.Section,{align:`start`,children:[` `,(0,p.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,p.jsx)(l.Section,{align:`center`,children:(0,p.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,p.jsx)(l.Section,{align:`end`,children:(0,p.jsx)(d,{size:`sm`,children:t(`story.header_login`)})})]})}},v={render:function(e){let{t}=r(o);return(0,p.jsxs)(`div`,{style:{height:`200vh`,background:`linear-gradient(to bottom, var(--wim-color-surface-variant), var(--wim-color-surface-tertiary))`},children:[(0,p.jsxs)(l,{...e,sticky:!0,bordered:!0,children:[(0,p.jsx)(l.Section,{align:`start`,children:(0,p.jsx)(`div`,{style:{fontWeight:`bold`},children:t(`story.header_sticky_title`)})}),(0,p.jsx)(l.Section,{align:`end`,children:(0,p.jsx)(d,{size:`sm`,children:t(`story.header_action`)})})]}),(0,p.jsxs)(`div`,{style:{padding:`20px`},children:[(0,p.jsx)(`p`,{children:t(`story.header_scroll_desc`)}),Array.from({length:10}).map((e,n)=>(0,p.jsxs)(`p`,{style:{margin:`20px 0`},children:[t(`story.header_content_block`),` `,n+1]},n))]})]})}},y={args:{bordered:!0,glass:!1,background:`surface`},render:function(e){let{t}=r(o);return(0,p.jsxs)(`div`,{style:{height:`300px`,position:`relative`,border:`1px dashed var(--wim-color-border)`},children:[(0,p.jsxs)(l,{...e,style:{position:`absolute`,top:0,left:0,width:`100%`},children:[(0,p.jsxs)(l.Section,{align:`start`,children:[` `,(0,p.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,p.jsx)(l.Section,{align:`center`,children:(0,p.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,p.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,p.jsx)(l.Section,{align:`end`,children:(0,p.jsx)(d,{size:`sm`,children:t(`story.header_login`)})})]}),(0,p.jsxs)(`div`,{style:{padding:`100px 20px 20px`},children:[(0,p.jsx)(`p`,{children:t(`story.header_playground_desc`)}),(0,p.jsx)(`p`,{children:t(`story.header_control_desc`)})]})]})}},b=[`Default`,`Bordered`,`Glass`,`Sticky`,`Playground`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args}>
        <Header.Section align="start">
          {/* i18n-ignore */} <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <Button size="sm">{t("story.header_login")}</Button>
        </Header.Section>
      </Header>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args} bordered>
        <Header.Section align="start">
          {/* i18n-ignore */} <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <Button size="sm">{t("story.header_login")}</Button>
        </Header.Section>
      </Header>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args} glass background="transparent">
        <Header.Section align="start">
          {/* i18n-ignore */} <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <Button size="sm">{t("story.header_login")}</Button>
        </Header.Section>
      </Header>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args: HeaderProps) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      background: "linear-gradient(to bottom, var(--wim-color-surface-variant), var(--wim-color-surface-tertiary))"
    }}>
        <Header {...args} sticky bordered>
          <Header.Section align="start">
            <div style={{
            fontWeight: "bold"
          }}>{t("story.header_sticky_title")}</div>
          </Header.Section>
          <Header.Section align="end">
            <Button size="sm">{t("story.header_action")}</Button>
          </Header.Section>
        </Header>
        <div style={{
        padding: "20px"
      }}>
          <p>{t("story.header_scroll_desc")}</p>
          {Array.from({
          length: 10
        }).map((_, i) => <p key={i} style={{
          margin: "20px 0"
        }}>
              {t("story.header_content_block")} {i + 1}
            </p>)}
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    glass: false,
    background: "surface"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "300px",
      position: "relative",
      border: "1px dashed var(--wim-color-border)"
    }}>
        <Header {...args} style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}>
          <Header.Section align="start">
            {/* i18n-ignore */} <div style={{
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>WIM UI</div>
          </Header.Section>
          <Header.Section align="center">
            <nav style={{
            display: "flex",
            gap: "20px"
          }}>
              <a href="/">{t("story.header_home")}</a>
              <a href="/">{t("story.header_about")}</a>
              <a href="/">{t("story.header_contact")}</a>
            </nav>
          </Header.Section>
          <Header.Section align="end">
            <Button size="sm">{t("story.header_login")}</Button>
          </Header.Section>
        </Header>
        <div style={{
        padding: "100px 20px 20px"
      }}>
          <p>{t("story.header_playground_desc")}</p>
          <p>{t("story.header_control_desc")}</p>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{y as a,f as i,h as n,v as o,_ as r,x as s,g as t};