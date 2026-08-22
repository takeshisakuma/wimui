"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Ar as c,t as l}from"./src-Ssuy8lr7.js";import{t as u}from"./Badge-CRzmzbP0.js";import{t as d}from"./Text-DzblcqZm.js";import{r as f}from"./TagInput-B5pmYsid.js";import{t as p}from"./RelativeTime-BQNnGVst.js";import{t as m}from"./Countdown-BGGY7YSR.js";import{i as h,n as g,r as _,t as v}from"./AuditUtils-Cal9MsZq.js";var y,b,x,S,C,w,T,E,D,O,k;e((()=>{y=t(n(),1),o(),i(),l(),b=a(),h(),x=new Date(`2024-01-01T00:00:00Z`),S=()=>typeof window<`u`&&!!window.__VRT__,C=e=>new Date((S()?x.getTime():Date.now())-e*6e4),w=e=>new Date((S()?x.getTime():Date.now())+e*1e3),T=()=>S()?{baseDate:x,live:!1}:{},E=()=>S()?{baseDate:x,paused:!0}:{},D={title:`Audit/IndicatorFamily`,parameters:{layout:`fullscreen`}},O={render:()=>{let{t:e}=r([...s,`audit`]),t=[`sm`,`md`,`lg`],n=[`solid`,`outline`,`subtle`],i=[`primary`,`success`,`warning`,`danger`,`info`,`neutral`];return(0,b.jsxs)(v,{title:e(`audit:indicator_family_title`),children:[(0,b.jsx)(g,{title:e(`audit:variant_intent_matrix`),overflowX:`auto`,children:[[`badge`,(t,n)=>(0,b.jsx)(u,{intent:t,variant:n,children:e(`audit:label_badge`)})],[`chip`,(t,n)=>(0,b.jsx)(c,{intent:t,variant:n,children:e(`audit:label_chip`)})],[`tag`,(t,n)=>(0,b.jsx)(f,{intent:t,variant:n,children:e(`audit:label_tag`)})]].map(([t,r])=>(0,b.jsx)(_,{label:e(`audit:label_${t}`),noStack:!0,children:(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto repeat(${i.length}, max-content)`,gap:`var(--wim-spacing-sm)`,alignItems:`center`,width:`max-content`},children:[(0,b.jsx)(`span`,{}),i.map(e=>(0,b.jsx)(d,{size:`xs`,color:`text-secondary`,children:e},e)),n.map(e=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(d,{size:`xs`,color:`text-secondary`,children:e}),i.map(t=>(0,b.jsx)(`span`,{children:r(t,e)},`${e}-${t}`))]},e))]})},t))}),(0,b.jsx)(g,{title:e(`audit:size_comparison`),children:t.map(t=>(0,b.jsxs)(_,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,wrap:!0,children:[(0,b.jsx)(u,{size:t,children:e(`audit:label_badge`)}),(0,b.jsx)(c,{size:t,children:e(`audit:label_chip`)}),(0,b.jsx)(f,{size:t,children:e(`audit:label_tag`)})]},t))}),(0,b.jsxs)(g,{title:e(`audit:label_time_indicators`),children:[(0,b.jsxs)(_,{label:e(`audit:label_relative_time`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,b.jsx)(p,{date:C(3),...T()}),(0,b.jsx)(p,{date:C(300),...T()}),(0,b.jsx)(p,{date:C(1440*3),...T()})]}),(0,b.jsx)(_,{label:e(`audit:label_countdown`),direction:`row`,gap:`xl`,wrap:!0,children:(0,b.jsx)(m,{target:w(15153),...E()})})]}),(0,b.jsxs)(g,{title:e(`audit:label_special_states_interactions`),children:[(0,b.jsxs)(_,{label:e(`audit:label_interactive_chips_tags`),direction:`row`,wrap:!0,children:[(0,b.jsx)(c,{onClick:()=>alert(`Clicked`),children:e(`audit:label_clickable_chip`)}),(0,b.jsx)(c,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_chip`)}),(0,b.jsx)(f,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_tag`)})]}),(0,b.jsxs)(_,{label:e(`audit:label_badge_variations`),direction:`row`,wrap:!0,children:[(0,b.jsx)(u,{content:`99+`}),(0,b.jsx)(u,{variant:`solid`,intent:`danger`}),` `]})]})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "subtle"] as const;
    const intents = ["primary", "success", "warning", "danger", "info", "neutral"] as const;
    return <AuditPage title={t("audit:indicator_family_title")}>
        {/* Variant × Intent の全組み合わせ。
            これ以前は intent 軸（7 intent × 既定 variant）と variant 軸
            （3 variant × primary）の 1 次元スライス 2 本で、21 セル中 9 セルしか
            埋まっておらず、しかも solid/primary が二重に出ていた。
            埋まっていなかったセルに実害がある: \`check:contrast\` を基準 4.75 まで
            上げて binding cell を出すと、最も厳しいのは dark の danger/subtle
            （4.62、AA まで +0.12）で、次が primary/subtle 4.66・warning/subtle 4.72。
            **primary は最も安全な列ではない**のに、variant 軸はそこしか描いていなかった。
            \`IndicatorBase / Variants\` に同じ 3 × 7 の表が既にあるが、あれは共有基底に
            \`demoStyles\` を渡したもので、Badge / Tag / Chip 自身の module.scss は通らない
            （Badge は font-weight normal・Tag / Chip は medium、Chip は縦パディング 0 と
            radius-full、Badge は min-width / iconOnly を持つ）。基底が緑でも 3 つが
            緑とは限らないことは T99（#301）の className 上書きバグで実際に起きている。
            flex ではなく grid で組むのは、**列を揃えないと variant 間の縦比較ができない**
            ため。同じ intent が 3 行で同じ列に来ることが、この表の唯一の目的。 */}
        <ComparisonGrid title={t("audit:variant_intent_matrix")} overflowX="auto">
          {([["badge", (i: IndicatorIntent, v: IndicatorVariant) => <Badge intent={i} variant={v}>{t("audit:label_badge")}</Badge>], ["chip", (i: IndicatorIntent, v: IndicatorVariant) => <Chip intent={i} variant={v}>{t("audit:label_chip")}</Chip>], ["tag", (i: IndicatorIntent, v: IndicatorVariant) => <Tag intent={i} variant={v}>{t("audit:label_tag")}</Tag>]] as const).map(([key, render]) => <ComponentGroup key={key} label={t(\`audit:label_\${key}\`)} noStack>
              <div style={{
            display: "grid",
            gridTemplateColumns: \`auto repeat(\${intents.length}, max-content)\`,
            gap: "var(--wim-spacing-sm)",
            alignItems: "center",
            width: "max-content"
          }}>
                <span />
                {intents.map(intent => <Text key={intent} size="xs" color="text-secondary">
                    {intent}
                  </Text>)}
                {variants.map(variant => <React.Fragment key={variant}>
                    <Text size="xs" color="text-secondary">
                      {variant}
                    </Text>
                    {intents.map(intent => <span key={\`\${variant}-\${intent}\`}>{render(intent, variant)}</span>)}
                  </React.Fragment>)}
              </div>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map(size => <ComponentGroup key={size} label={t("audit:label_size_n", {
          size
        })} direction="row" wrap>
              <Badge size={size}>{t("audit:label_badge")}</Badge>
              <Chip size={size}>{t("audit:label_chip")}</Chip>
              <Tag size={size}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Special States */}
        <ComparisonGrid title={t("audit:label_time_indicators")}>
          <ComponentGroup label={t("audit:label_relative_time")} direction="row" gap="xl" wrap>
            <RelativeTime date={minutesAgo(3)} {...vrtFreeze()} />
            <RelativeTime date={minutesAgo(60 * 5)} {...vrtFreeze()} />
            <RelativeTime date={minutesAgo(60 * 24 * 3)} {...vrtFreeze()} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_countdown")} direction="row" gap="xl" wrap>
            <Countdown target={secondsLater(4 * 3600 + 12 * 60 + 33)} {...vrtBase()} />
          </ComponentGroup>
        </ComparisonGrid>

        <ComparisonGrid title={t("audit:label_special_states_interactions")}>
          <ComponentGroup label={t("audit:label_interactive_chips_tags")} direction="row" wrap>
            <Chip onClick={() => alert("Clicked")}>{t("audit:label_clickable_chip")}</Chip>
            <Chip onDelete={() => alert("Deleted")}>{t("audit:label_deletable_chip")}</Chip>
            <Tag onDelete={() => alert("Deleted")}>{t("audit:label_deletable_tag")}</Tag>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_badge_variations")} direction="row" wrap>
            <Badge content="99+" />
            <Badge variant="solid" intent="danger" /> {/* Dot badge */}
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Overview`]}))();export{O as Overview,k as __namedExportsOrder,D as default};