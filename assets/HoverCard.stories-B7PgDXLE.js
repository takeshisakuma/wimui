"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-DzWR_e8l.js";import{n as a,t as o}from"./i18nConstants-Dz9WmqoW.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Avatar-DCwI6V3C.js";import{i as u,n as d,r as f,t as p}from"./HoverCard-BEdkNKfV.js";import{n as m,t as h}from"./avatar_2-hyY5MBl8.js";var g=t({Default:()=>y,Instant:()=>b,Open:()=>x,Placements:()=>S,__namedExportsOrder:()=>C,default:()=>v}),_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),a(),c(),u(),m(),_=s(),v={title:`Components/Overlays/HoverCard`,component:p},y={render:e=>{let{t}=r(o);return(0,_.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`600px`},children:(0,_.jsxs)(p,{...e,children:[(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`,cursor:`pointer`},children:(0,_.jsx)(l,{src:h,alt:t(`story.hovercard_name`)})})}),(0,_.jsx)(d,{side:`bottom`,children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,_.jsx)(l,{src:h,alt:t(`story.hovercard_name`),size:`lg`}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,_.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`16px`},children:t(`story.hovercard_name`)}),(0,_.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`,fontSize:`14px`},children:`@sarah_m`})]}),(0,_.jsx)(`div`,{style:{fontSize:`14px`},children:t(`story.hovercard_bio`)}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`452`}),` `,t(`story.hovercard_following`)]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`2.8k`}),` `,t(`story.hovercard_followers`)]})]})]})})]})})}},b={render:()=>{let{t:e}=r(o);return(0,_.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,minHeight:`200px`},children:(0,_.jsxs)(p,{openDelay:0,closeDelay:0,children:[(0,_.jsx)(f,{children:e(`story.hovercard_hover_me`)}),(0,_.jsx)(d,{children:e(`story.hovercard_instant_desc`)})]})})}},x={...y,args:{open:!0}},S={render:function(){let{t:e}=r(o);return(0,_.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`48px`,padding:`24px`},children:[{side:`top`,align:`center`},{side:`left`,align:`center`},{side:`right`,align:`center`},{side:`bottom`,align:`left`},{side:`bottom`,align:`right`}].map(({side:t,align:n})=>(0,_.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`220px`},children:(0,_.jsxs)(p,{open:!0,children:[(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`},children:(0,_.jsx)(l,{src:h,alt:e(`story.hovercard_name`)})})}),(0,_.jsxs)(d,{side:t,align:n,children:[(0,_.jsx)(`div`,{style:{fontWeight:`bold`},children:e(`story.hovercard_name`)}),(0,_.jsxs)(`div`,{children:[t,` / `,n]})]})]})},t+n))})}},C=[`Default`,`Instant`,`Open`,`Placements`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const placements = [{
      side: "top",
      align: "center"
    }, {
      side: "left",
      align: "center"
    }, {
      side: "right",
      align: "center"
    }, {
      side: "bottom",
      align: "left"
    }, {
      side: "bottom",
      align: "right"
    }] as const;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      padding: "24px"
    }}>
        {placements.map(({
        side,
        align
      }) => <div key={side + align} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "220px"
      }}>
            <HoverCard open>
              <HoverCardTrigger asChild>
                <a href="/" style={{
              borderRadius: "50%",
              display: "inline-block"
            }}>
                  <Avatar src={avatar2} alt={t("story.hovercard_name")} />
                </a>
              </HoverCardTrigger>
              <HoverCardContent side={side} align={align}>
                <div style={{
              fontWeight: "bold"
            }}>{t("story.hovercard_name")}</div>
                <div>{side} / {align}</div>
              </HoverCardContent>
            </HoverCard>
          </div>)}
      </div>;
  }
}`,...S.parameters?.docs?.source}}}})))()}export{g as n,w as r,y as t};