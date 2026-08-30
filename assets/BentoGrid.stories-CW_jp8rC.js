"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{It as c,Pt as l,Ui as u,Wi as d,jn as f,t as p}from"./src-CV0le6yM.js";import{t as m}from"./Icon-DKSRBrcV.js";import{t as h}from"./Badge-A6ygOnY-.js";import{t as g}from"./Sparkline-ODcYwvDv.js";import{t as _}from"./charts-Dg5J96mY.js";var v=e({Default:()=>S,__namedExportsOrder:()=>C,default:()=>b}),y,b,x,S,C,w=t((()=>{n(),o(),i(),p(),_(),y=a(),b={title:`Components/Layout/BentoGrid`,component:u,tags:[]},x={display:`flex`,height:`100%`,minHeight:`6rem`,padding:`var(--wim-spacing-sm)`},S={render:function(e){let{t}=r(s),n=[{title:t(`story.bento_ai_title`,`Draft assist`),description:t(`story.bento_ai_desc`,`Classify, extract, summarize, and translate the same draft.`),header:(0,y.jsxs)(`div`,{style:{...x,flexWrap:`wrap`,alignContent:`center`,gap:`var(--wim-spacing-xs)`},children:[(0,y.jsx)(h,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_summarize`)}),(0,y.jsx)(h,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_classify`)}),(0,y.jsx)(h,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_extract`)}),(0,y.jsx)(h,{intent:`neutral`,variant:`subtle`,children:t(`story.bento_ai_cap_translate`)})]}),className:`wim-bento-grid-item--col-span-2`,icon:(0,y.jsx)(m,{name:`CircleIcon`})},{title:t(`story.bento_collab_title`,`Live co-editing`),description:t(`story.bento_collab_desc`,`Five teammates are editing the same brief right now.`),header:(0,y.jsxs)(`div`,{style:{...x,alignItems:`center`,gap:`var(--wim-spacing-sm)`},children:[(0,y.jsxs)(l,{max:4,size:`sm`,children:[(0,y.jsx)(c,{initials:`AM`}),(0,y.jsx)(c,{initials:`RK`}),(0,y.jsx)(c,{initials:`SÖ`}),(0,y.jsx)(c,{initials:`JW`}),(0,y.jsx)(c,{initials:`LP`})]}),(0,y.jsx)(`span`,{style:{fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:t(`story.bento_collab_editing`)})]}),className:`wim-bento-grid-item--col-span-1`,icon:(0,y.jsx)(m,{name:`SquareIcon`})},{title:t(`story.bento_analytics_title`,`Signup trends`),description:t(`story.bento_analytics_desc`,`See which campaigns drove the most signups this week.`),header:(0,y.jsxs)(`div`,{style:{...x,flexDirection:`column`,justifyContent:`flex-end`,gap:`var(--wim-spacing-2xs)`},children:[(0,y.jsx)(`span`,{style:{fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:t(`story.bento_analytics_metric`)}),(0,y.jsx)(g,{data:[82,140,118,173,156,201,264],type:`area`,width:`100%`,height:44,ariaLabel:t(`story.bento_analytics_metric`)})]}),className:`wim-bento-grid-item--col-span-1`,icon:(0,y.jsx)(m,{name:`ChevronDownIcon`})},{title:t(`story.bento_cloud_title`,`Hosting usage`),description:t(`story.bento_cloud_desc`,`Apps share 2 TB storage and 8 Gbps bandwidth this month.`),header:(0,y.jsxs)(`div`,{style:{...x,flexDirection:`column`,justifyContent:`center`,gap:`var(--wim-spacing-sm)`},children:[(0,y.jsx)(f,{value:68,label:t(`story.bento_cloud_storage`),showValue:!0,size:`sm`}),(0,y.jsx)(f,{value:41,label:t(`story.bento_cloud_bandwidth`),showValue:!0,size:`sm`})]}),className:`wim-bento-grid-item--col-span-2`,icon:(0,y.jsx)(m,{name:`ExternalLinkIcon`})}];return(0,y.jsx)(u,{...e,children:n.map((e,t)=>(0,y.jsx)(d,{title:e.title,description:e.description,header:e.header,className:e.className,icon:e.icon},t))})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      className: "wim-bento-grid-item--col-span-2",
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
      className: "wim-bento-grid-item--col-span-1",
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
      className: "wim-bento-grid-item--col-span-1",
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
      className: "wim-bento-grid-item--col-span-2",
      icon: <Icon name="ExternalLinkIcon" />
    }];
    return <BentoGrid {...args}>
        {items.map((item, i) => <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />)}
      </BentoGrid>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`]}));w();export{S as Default,C as __namedExportsOrder,b as default,w as n,v as t};