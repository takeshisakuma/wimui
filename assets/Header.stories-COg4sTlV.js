"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Ci as c,t as l}from"./src-Ssuy8lr7.js";import{t as u}from"./Button-Dps1MPAd.js";var d=e({Bordered:()=>h,Default:()=>m,Glass:()=>g,Playground:()=>v,Sticky:()=>_,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y,b=t((()=>{n(),l(),o(),i(),f=a(),p={title:`Components/Application Shell/Header`,component:c,parameters:{layout:`fullscreen`},tags:[],argTypes:{fixed:{control:`boolean`,description:`Fix header to top`},sticky:{control:`boolean`,description:`Make header sticky on scroll`},bordered:{control:`boolean`,description:`Show border at bottom`},glass:{control:`boolean`,description:`Apply glassmorphism effect`},background:{control:`select`,options:[`primary`,`secondary`,`transparent`],description:`Background color`},children:{table:{disable:!0}}}},m={render:function(e){let{t}=r(s);return(0,f.jsxs)(c,{...e,children:[(0,f.jsxs)(c.Section,{align:`start`,children:[` `,(0,f.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,f.jsx)(c.Section,{align:`center`,children:(0,f.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,f.jsx)(c.Section,{align:`end`,children:(0,f.jsx)(u,{size:`sm`,children:t(`story.header_login`)})})]})}},h={render:function(e){let{t}=r(s);return(0,f.jsxs)(c,{...e,bordered:!0,children:[(0,f.jsxs)(c.Section,{align:`start`,children:[` `,(0,f.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,f.jsx)(c.Section,{align:`center`,children:(0,f.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,f.jsx)(c.Section,{align:`end`,children:(0,f.jsx)(u,{size:`sm`,children:t(`story.header_login`)})})]})}},g={parameters:{backgrounds:{default:`dark`}},render:function(e){let{t}=r(s);return(0,f.jsxs)(c,{...e,glass:!0,background:`transparent`,children:[(0,f.jsxs)(c.Section,{align:`start`,children:[` `,(0,f.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,f.jsx)(c.Section,{align:`center`,children:(0,f.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,f.jsx)(c.Section,{align:`end`,children:(0,f.jsx)(u,{size:`sm`,children:t(`story.header_login`)})})]})}},_={render:function(e){let{t}=r(s);return(0,f.jsxs)(`div`,{style:{height:`200vh`,background:`linear-gradient(to bottom, var(--wim-color-surface-variant), var(--wim-color-surface-tertiary))`},children:[(0,f.jsxs)(c,{...e,sticky:!0,bordered:!0,children:[(0,f.jsx)(c.Section,{align:`start`,children:(0,f.jsx)(`div`,{style:{fontWeight:`bold`},children:t(`story.header_sticky_title`)})}),(0,f.jsx)(c.Section,{align:`end`,children:(0,f.jsx)(u,{size:`sm`,children:t(`story.header_action`)})})]}),(0,f.jsxs)(`div`,{style:{padding:`20px`},children:[(0,f.jsx)(`p`,{children:t(`story.header_scroll_desc`)}),Array.from({length:10}).map((e,n)=>(0,f.jsxs)(`p`,{style:{margin:`20px 0`},children:[t(`story.header_content_block`),` `,n+1]},n))]})]})}},v={args:{bordered:!0,glass:!1,background:`surface`},render:function(e){let{t}=r(s);return(0,f.jsxs)(`div`,{style:{height:`300px`,position:`relative`,border:`1px dashed var(--wim-color-border)`},children:[(0,f.jsxs)(c,{...e,style:{position:`absolute`,top:0,left:0,width:`100%`},children:[(0,f.jsxs)(c.Section,{align:`start`,children:[` `,(0,f.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})]}),(0,f.jsx)(c.Section,{align:`center`,children:(0,f.jsxs)(`nav`,{style:{display:`flex`,gap:`20px`},children:[(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_home`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_about`)}),(0,f.jsx)(`a`,{href:`/`,children:t(`story.header_contact`)})]})}),(0,f.jsx)(c.Section,{align:`end`,children:(0,f.jsx)(u,{size:`sm`,children:t(`story.header_login`)})})]}),(0,f.jsxs)(`div`,{style:{padding:`100px 20px 20px`},children:[(0,f.jsx)(`p`,{children:t(`story.header_playground_desc`)}),(0,f.jsx)(`p`,{children:t(`story.header_control_desc`)})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Bordered`,`Glass`,`Sticky`,`Playground`]}));b();export{h as Bordered,m as Default,g as Glass,v as Playground,_ as Sticky,y as __namedExportsOrder,p as default,b as n,d as t};