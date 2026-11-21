"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-YD8z3mm4.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Avatar-BrI76Ifq.js";import{n as u,t as d}from"./Persona-DYLhvVpV.js";import{i as f,n as p,r as m,t as h}from"./HoverCard-D9i41f9j.js";import{n as g,t as _}from"./avatar_2-hyY5MBl8.js";var v=t({Default:()=>x,Instant:()=>S,Open:()=>C,Placements:()=>w,__namedExportsOrder:()=>T,default:()=>b}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),c(),f(),u(),g(),y=s(),b={title:`Components/Overlays/HoverCard`,component:h},x={render:e=>{let{t}=r(o);return(0,y.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`600px`},children:(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(m,{asChild:!0,children:(0,y.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`,cursor:`pointer`},children:(0,y.jsx)(l,{src:_,alt:t(`story.hovercard_name`)})})}),(0,y.jsx)(p,{side:`bottom`,children:(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,y.jsx)(d,{size:`lg`,name:t(`story.hovercard_name`),description:t(`story.hovercard_handle`),avatar:{src:_}}),(0,y.jsx)(`div`,{style:{fontSize:`14px`},children:t(`story.hovercard_bio`)}),(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`452`}),` `,t(`story.hovercard_following`)]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:`2.8k`}),` `,t(`story.hovercard_followers`)]})]})]})})]})})}},S={render:()=>{let{t:e}=r(o);return(0,y.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`,minHeight:`200px`},children:(0,y.jsxs)(h,{openDelay:0,closeDelay:0,children:[(0,y.jsx)(m,{children:e(`story.hovercard_hover_me`)}),(0,y.jsx)(p,{children:e(`story.hovercard_instant_desc`)})]})})}},C={...x,args:{open:!0}},w={render:function(){let{t:e}=r(o);return(0,y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`48px`,padding:`24px`},children:[{side:`top`,align:`center`},{side:`left`,align:`center`},{side:`right`,align:`center`},{side:`bottom`,align:`left`},{side:`bottom`,align:`right`},{side:`bottom`,align:`center`,sideOffset:24}].map(({side:t,align:n,...r})=>(0,y.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`220px`},children:(0,y.jsxs)(h,{open:!0,children:[(0,y.jsx)(m,{asChild:!0,children:(0,y.jsx)(`a`,{href:`/`,style:{borderRadius:`50%`,display:`inline-block`},children:(0,y.jsx)(l,{src:_,alt:e(`story.hovercard_name`)})})}),(0,y.jsxs)(p,{side:t,align:n,...r,children:[(0,y.jsx)(`div`,{style:{fontWeight:`bold`},children:e(`story.hovercard_name`)}),(0,y.jsxs)(`div`,{children:[t,` / `,n,`sideOffset`in r&&` / ${r.sideOffset}px`]})]})]})},t+n+(`sideOffset`in r?r.sideOffset:``)))})}},T=[`Default`,`Instant`,`Open`,`Placements`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
              {/* 名前は Persona が 1 回だけ読ませる。以前は大きいアバターの alt にも名前を入れていて、
                  開いた面の中で名前が 2 回読まれていた（T414） */}
              <Persona size="lg" name={t("story.hovercard_name")} description={t("story.hovercard_handle")} avatar={{
              src: avatar2
            }} />
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    open: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    },
    // \`sideOffset\` も、どのストーリーにも描かれていなかった（T350 で効くようにした値）
    {
      side: "bottom",
      align: "center",
      sideOffset: 24
    }] as const;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      padding: "24px"
    }}>
        {placements.map(({
        side,
        align,
        ...rest
      }) => <div key={side + align + ("sideOffset" in rest ? rest.sideOffset : "")} style={{
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
              <HoverCardContent side={side} align={align} {...rest}>
                <div style={{
              fontWeight: "bold"
            }}>{t("story.hovercard_name")}</div>
                <div>
                  {side} / {align}
                  {"sideOffset" in rest && \` / \${rest.sideOffset}px\`}
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>)}
      </div>;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{v as n,E as r,x as t};