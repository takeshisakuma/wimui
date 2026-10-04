"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,r as l,t as u}from"./BentoGrid-DpnqS_-h.js";import{n as d,t as f}from"./Icon-B_89lpXW.js";import{n as p,t as m}from"./Badge-CfPEoJgu.js";import{n as h,t as g}from"./Progress-C0zI57n2.js";import{n as _,t as v}from"./Avatar-C38mVE7B.js";import{n as y,t as b}from"./AvatarGroup-CWbcEplL.js";import{n as x,t as S}from"./Sparkline-BpjEPWI1.js";var C=t({Default:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O;function k(){return(k=e((()=>{n(),i(),a(),l(),d(),_(),y(),p(),h(),x(),w=s(),T={title:`Components/Layout/BentoGrid`,component:u,tags:[]},E={display:`flex`,height:`100%`,minHeight:`6rem`,padding:`var(--wim-spacing-sm)`},D={render:function(e){let{t}=r(o),n=[{title:t(`story.bento_ai_title`,`Draft assist`),description:t(`story.bento_ai_desc`,`Classify, extract, summarize, and translate the same draft.`),header:(0,w.jsxs)(`div`,{style:{...E,flexWrap:`wrap`,alignContent:`center`,gap:`var(--wim-spacing-xs)`},children:[(0,w.jsx)(m,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_summarize`)}),(0,w.jsx)(m,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_classify`)}),(0,w.jsx)(m,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_extract`)}),(0,w.jsx)(m,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_translate`)})]}),span:2,icon:(0,w.jsx)(f,{name:`CircleIcon`})},{title:t(`story.bento_collab_title`,`Live co-editing`),description:t(`story.bento_collab_desc`,`Five teammates are editing the same brief right now.`),header:(0,w.jsxs)(`div`,{style:{...E,alignItems:`center`,gap:`var(--wim-spacing-sm)`},children:[(0,w.jsxs)(b,{max:4,size:`sm`,children:[(0,w.jsx)(v,{initials:`AM`}),(0,w.jsx)(v,{initials:`RK`}),(0,w.jsx)(v,{initials:`SÖ`}),(0,w.jsx)(v,{initials:`JW`}),(0,w.jsx)(v,{initials:`LP`})]}),(0,w.jsx)(`span`,{style:{fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:t(`story.bento_collab_editing`)})]}),span:1,icon:(0,w.jsx)(f,{name:`SquareIcon`})},{title:t(`story.bento_analytics_title`,`Signup trends`),description:t(`story.bento_analytics_desc`,`See which campaigns drove the most signups this week.`),header:(0,w.jsxs)(`div`,{style:{...E,flexDirection:`column`,justifyContent:`flex-end`,gap:`var(--wim-spacing-2xs)`},children:[(0,w.jsx)(`span`,{style:{fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:t(`story.bento_analytics_metric`)}),(0,w.jsx)(S,{data:[82,140,118,173,156,201,264],type:`area`,width:`100%`,height:44,ariaLabel:t(`story.bento_analytics_metric`)})]}),span:1,icon:(0,w.jsx)(f,{name:`ChevronDownIcon`})},{title:t(`story.bento_cloud_title`,`Hosting usage`),description:t(`story.bento_cloud_desc`,`Apps share 2 TB storage and 8 Gbps bandwidth this month.`),header:(0,w.jsxs)(`div`,{style:{...E,flexDirection:`column`,justifyContent:`center`,gap:`var(--wim-spacing-sm)`},children:[(0,w.jsx)(g,{value:68,label:t(`story.bento_cloud_storage`),showValue:!0,size:`sm`}),(0,w.jsx)(g,{value:41,label:t(`story.bento_cloud_bandwidth`),showValue:!0,size:`sm`})]}),span:2,icon:(0,w.jsx)(f,{name:`ExternalLinkIcon`})}];return(0,w.jsx)(u,{...e,children:n.map((e,t)=>(0,w.jsx)(c,{title:e.title,description:e.description,header:e.header,span:e.span,icon:e.icon},t))})}},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = [{
      // AI: 対応できる操作を Badge チップで示す（ブランド名は使わない）
      title: t("story.bento_ai_title", "Draft assist"),
      description: t("story.bento_ai_desc", "Classify, extract, summarize, and translate the same draft."),
      header: <div style={{
        ...fillHeader,
        flexWrap: "wrap",
        alignContent: "center",
        gap: "var(--wim-spacing-xs)"
      }}>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_summarize")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_classify")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_extract")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_translate")}</Badge>
          </div>,
      span: 2 as const,
      icon: <Icon name="CircleIcon" />
    }, {
      // Collaboration: 実在感のある多様な頭文字の AvatarGroup + 編集中の人数
      title: t("story.bento_collab_title", "Live co-editing"),
      description: t("story.bento_collab_desc", "Five teammates are editing the same brief right now."),
      header: <div style={{
        ...fillHeader,
        alignItems: "center",
        gap: "var(--wim-spacing-sm)"
      }}>
            <AvatarGroup max={4} size="sm">
              <Avatar initials="AM" />
              <Avatar initials="RK" />
              <Avatar initials="SÖ" />
              <Avatar initials="JW" />
              <Avatar initials="LP" />
            </AvatarGroup>
            <span style={{
          fontSize: "var(--wim-font-size-sm)",
          color: "var(--wim-color-text-secondary)"
        }}>
              {t("story.bento_collab_editing")}
            </span>
          </div>,
      span: 1 as const,
      icon: <Icon name="SquareIcon" />
    }, {
      // Analytics: 現実的にギザついた推移の Sparkline
      title: t("story.bento_analytics_title", "Signup trends"),
      description: t("story.bento_analytics_desc", "See which campaigns drove the most signups this week."),
      header: <div style={{
        ...fillHeader,
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "var(--wim-spacing-2xs)"
      }}>
            <span style={{
          fontSize: "var(--wim-font-size-xs)",
          color: "var(--wim-color-text-secondary)"
        }}>
              {t("story.bento_analytics_metric")}
            </span>
            <Sparkline data={[82, 140, 118, 173, 156, 201, 264]} type="area" width="100%" height={44} ariaLabel={t("story.bento_analytics_metric")} />
          </div>,
      span: 1 as const,
      icon: <Icon name="ChevronDownIcon" />
    }, {
      // Cloud: リソース使用率を Progress で（実測的な半端な %）
      title: t("story.bento_cloud_title", "Hosting usage"),
      description: t("story.bento_cloud_desc", "Apps share 2 TB storage and 8 Gbps bandwidth this month."),
      header: <div style={{
        ...fillHeader,
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--wim-spacing-sm)"
      }}>
            <Progress value={68} label={t("story.bento_cloud_storage")} showValue size="sm" />
            <Progress value={41} label={t("story.bento_cloud_bandwidth")} showValue size="sm" />
          </div>,
      span: 2 as const,
      icon: <Icon name="ExternalLinkIcon" />
    }];
    return <BentoGrid {...args}>
        {items.map((item, i) => <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} span={item.span} icon={item.icon} />)}
      </BentoGrid>;
  }
}`,...D.parameters?.docs?.source}}}})))()}export{D as n,k as r,C as t};