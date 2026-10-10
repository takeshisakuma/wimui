"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Avatar-BfxkKreA.js";import{i as u,n as d,r as f,t as p}from"./HoverCard-DrLvMjaw.js";import{n as m,t as h}from"./avatar_2-CYWjuDWh.js";var g=t({Default:()=>y,Instant:()=>b,Open:()=>x,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),a(),c(),u(),m(),_=s(),v={title:`Components/Overlays/HoverCard`,component:p},y={render:e=>{let{t}=r(o);return(0,_.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`600px`},children:(0,_.jsxs)(p,{...e,children:[(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`,cursor:`pointer`},children:(0,_.jsx)(l,{src:h,alt:t(`story.hovercard_name`)})})}),(0,_.jsx)(d,{side:`bottom`,children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,_.jsx)(l,{src:h,alt:t(`story.hovercard_name`),size:`lg`}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,_.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`16px`},children:t(`story.hovercard_name`)}),(0,_.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`,fontSize:`14px`},children:`@sarah_m`})]}),(0,_.jsx)(`div`,{style:{fontSize:`14px`},children:t(`story.hovercard_bio`)}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`452`}),` `,t(`story.hovercard_following`)]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`2.8k`}),` `,t(`story.hovercard_followers`)]})]})]})})]})})}},b={render:()=>{let{t:e}=r(o);return(0,_.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,minHeight:`200px`},children:(0,_.jsxs)(p,{openDelay:0,closeDelay:0,children:[(0,_.jsx)(f,{children:e(`story.hovercard_hover_me`)}),(0,_.jsx)(d,{children:e(`story.hovercard_instant_desc`)})]})})}},x={...y,args:{open:!0}},S=[`Default`,`Instant`,`Open`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "600px"
    }}>
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <a href="/" style={{
            borderRadius: "50%",
            display: "inline-block",
            cursor: "pointer"
          }}>
              <Avatar src={avatar2} alt={t("story.hovercard_name")} />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="bottom">
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}>
              <Avatar src={avatar2} alt={t("story.hovercard_name")} size="lg" />
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}>
                <div style={{
                fontWeight: "bold",
                fontSize: "16px"
              }}>
                  {t("story.hovercard_name")}
                </div>
                <div style={{
                color: "var(--wim-color-text-secondary)",
                fontSize: "14px"
              }}>
                  @sarah_m
                </div>
              </div>
              <div style={{
              fontSize: "14px"
            }}>
                {t("story.hovercard_bio")}
              </div>
              <div style={{
              display: "flex",
              gap: "16px",
              fontSize: "12px",
              color: "var(--wim-color-text-secondary)"
            }}>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)"
                }}>
                    452
                  </span>{" "}
                  {t("story.hovercard_following")}
                </div>
                <div>
                  <span style={{
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)"
                }}>
                    2.8k
                  </span>{" "}
                  {t("story.hovercard_followers")}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      minHeight: "200px"
    }}>
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger>{t("story.hovercard_hover_me")}</HoverCardTrigger>
          <HoverCardContent>{t("story.hovercard_instant_desc")}</HoverCardContent>
        </HoverCard>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    open: true
  }
}`,...x.parameters?.docs?.source}}}})))()}export{g as n,C as r,y as t};