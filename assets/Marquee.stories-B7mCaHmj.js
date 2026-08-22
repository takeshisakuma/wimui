"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Ti as c,ot as l,t as u}from"./src-Ssuy8lr7.js";import{t as d}from"./Badge-CRzmzbP0.js";var f=e({Default:()=>h,Fast:()=>g,Reverse:()=>v,Slow:()=>_,Vertical:()=>y,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{n(),o(),i(),u(),p=a(),m={title:`Components/Utilities/Marquee`,component:l},h={render:e=>{let{t}=r(s);return(0,p.jsx)(l,{...e,children:(0,p.jsxs)(c,{gap:`xl`,children:[(0,p.jsx)(d,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,p.jsx)(d,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},g={args:{duration:5},render:e=>{let{t}=r(s);return(0,p.jsx)(l,{...e,children:(0,p.jsxs)(c,{gap:`xl`,children:[(0,p.jsx)(d,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,p.jsx)(d,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},_={args:{duration:40},render:e=>{let{t}=r(s);return(0,p.jsx)(l,{...e,children:(0,p.jsxs)(c,{gap:`xl`,children:[(0,p.jsx)(d,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,p.jsx)(d,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},v={args:{reverse:!0},render:e=>{let{t}=r(s);return(0,p.jsx)(l,{...e,children:(0,p.jsxs)(c,{gap:`xl`,children:[(0,p.jsx)(d,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,p.jsx)(d,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,p.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},y={render:e=>{let{t}=r(s);return(0,p.jsx)(`div`,{style:{height:`200px`,border:`1px solid var(--wim-color-border)`},children:(0,p.jsxs)(l,{...e,vertical:!0,duration:5,children:[(0,p.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_item`,{count:1})}),(0,p.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_item`,{count:2})}),(0,p.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_item`,{count:3})})]})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 40
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200px",
      border: "1px solid var(--wim-color-border)"
    }}>
        <Marquee {...args} vertical duration={5}>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 1
          })}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 2
          })}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 3
          })}
          </div>
        </Marquee>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Fast`,`Slow`,`Reverse`,`Vertical`]}));x();export{h as Default,g as Fast,v as Reverse,_ as Slow,y as Vertical,b as __namedExportsOrder,m as default,x as n,f as t};