"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{F as c,N as l,P as u,kt as d,t as f}from"./src-BE5jBQ9L.js";import{n as p,t as m}from"./avatar_2-HSXvAPTt.js";var h=e({Default:()=>v,Instant:()=>y,__namedExportsOrder:()=>b,default:()=>_}),g,_,v,y,b,x=t((()=>{n(),o(),i(),f(),p(),g=a(),_={title:`Components/Overlays/HoverCard`,component:l},v={render:()=>{let{t:e}=r(s);return(0,g.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`600px`},children:(0,g.jsxs)(l,{children:[(0,g.jsx)(c,{asChild:!0,children:(0,g.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`,cursor:`pointer`},children:(0,g.jsx)(d,{src:m,alt:e(`story.hovercard_name`)})})}),(0,g.jsx)(u,{side:`bottom`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,g.jsx)(d,{src:m,alt:e(`story.hovercard_name`),size:`lg`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,g.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`16px`},children:e(`story.hovercard_name`)}),(0,g.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`,fontSize:`14px`},children:`@sarah_m`})]}),(0,g.jsx)(`div`,{style:{fontSize:`14px`},children:e(`story.hovercard_bio`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`452`}),` `,e(`story.hovercard_following`)]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`2.8k`}),` `,e(`story.hovercard_followers`)]})]})]})})]})})}},y={render:()=>{let{t:e}=r(s);return(0,g.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,minHeight:`200px`},children:(0,g.jsxs)(l,{openDelay:0,closeDelay:0,children:[(0,g.jsx)(c,{children:e(`story.hovercard_hover_me`)}),(0,g.jsx)(u,{children:e(`story.hovercard_instant_desc`)})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        <HoverCard>
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Instant`]}));x();export{v as Default,y as Instant,b as __namedExportsOrder,_ as default,x as n,h as t};