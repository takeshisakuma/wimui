"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Badge-B1Em0jvH.js";import{n as u,t as d}from"./Text-1X1ZsZfu.js";import{n as f,t as p}from"./Chip-Ce4fGuZT.js";import{n as m,t as h}from"./Tag-Cp5Yzadp.js";import{n as g,t as _}from"./Avatar-BfxkKreA.js";import{n as v,t as y}from"./RelativeTime-D3PLCLab.js";import{n as b,t as x}from"./Countdown-BO7rqaMq.js";import{n as S,t as C}from"./Presence-Bin2cdQL.js";import{n as w,t as T}from"./Barcode-DPJ2kugo.js";import{i as E,n as D,r as O,t as k}from"./AuditUtils-DQd41XyN.js";var A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{A=e(n(),1),i(),a(),g(),c(),w(),f(),b(),S(),v(),m(),u(),j=s(),E(),M=new Date(`2024-01-01T00:00:00Z`),N=()=>typeof window<`u`&&!!window.__VRT__,P=e=>new Date((N()?M.getTime():Date.now())-e*6e4),F=e=>new Date((N()?M.getTime():Date.now())+e*1e3),I=()=>N()?{baseDate:M,live:!1}:{},L=()=>N()?{baseDate:M,paused:!0}:{},R={title:`Audit/IndicatorFamily`,parameters:{layout:`fullscreen`}},z={render:()=>{let{t:e}=r([...o,`audit`]),t=[`sm`,`md`,`lg`],n=[`solid`,`outline`,`subtle`],i=[`primary`,`success`,`warning`,`danger`,`info`,`neutral`];return(0,j.jsxs)(k,{title:e(`audit:indicator_family_title`),children:[(0,j.jsx)(D,{title:e(`audit:variant_intent_matrix`),overflowX:`auto`,children:[[`badge`,(t,n)=>(0,j.jsx)(l,{intent:t,variant:n,children:e(`audit:label_badge`)})],[`chip`,(t,n)=>(0,j.jsx)(p,{intent:t,variant:n,children:e(`audit:label_chip`)})],[`tag`,(t,n)=>(0,j.jsx)(h,{intent:t,variant:n,children:e(`audit:label_tag`)})]].map(([t,r])=>(0,j.jsx)(O,{label:e(`audit:label_${t}`),noStack:!0,children:(0,j.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto repeat(${i.length}, max-content)`,gap:`var(--wim-spacing-sm)`,alignItems:`center`,width:`max-content`},children:[(0,j.jsx)(`span`,{}),i.map(e=>(0,j.jsx)(d,{size:`xs`,color:`text-secondary`,children:e},e)),n.map(e=>(0,j.jsxs)(A.Fragment,{children:[(0,j.jsx)(d,{size:`xs`,color:`text-secondary`,children:e}),i.map(t=>(0,j.jsx)(`span`,{children:r(t,e)},`${e}-${t}`))]},e))]})},t))}),(0,j.jsx)(D,{title:e(`audit:size_comparison`),children:t.map(t=>(0,j.jsxs)(O,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,wrap:!0,children:[(0,j.jsx)(l,{size:t,children:e(`audit:label_badge`)}),(0,j.jsx)(p,{size:t,children:e(`audit:label_chip`)}),(0,j.jsx)(h,{size:t,children:e(`audit:label_tag`)})]},t))}),(0,j.jsxs)(D,{title:e(`audit:label_time_indicators`),children:[(0,j.jsxs)(O,{label:e(`audit:label_relative_time`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,j.jsx)(y,{date:P(3),...I()}),(0,j.jsx)(y,{date:P(300),...I()}),(0,j.jsx)(y,{date:P(4320),...I()})]}),(0,j.jsx)(O,{label:e(`audit:label_countdown`),direction:`row`,gap:`xl`,wrap:!0,children:(0,j.jsx)(x,{target:F(15153),...L()})})]}),(0,j.jsxs)(D,{title:e(`audit:label_presence`),children:[(0,j.jsxs)(O,{label:e(`audit:label_presence_statuses`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,j.jsx)(C,{status:`online`,showLabel:!0}),(0,j.jsx)(C,{status:`away`,showLabel:!0}),(0,j.jsx)(C,{status:`busy`,showLabel:!0}),(0,j.jsx)(C,{status:`offline`,showLabel:!0})]}),(0,j.jsx)(O,{label:e(`audit:label_presence_on_avatar`),direction:`row`,gap:`xl`,wrap:!0,children:t.map(e=>(0,j.jsx)(C,{status:`online`,size:e,children:(0,j.jsx)(_,{initials:`AF`,size:e,intent:`neutral`})},e))})]}),(0,j.jsxs)(D,{title:e(`audit:label_barcode`),children:[(0,j.jsxs)(O,{label:e(`audit:label_barcode_formats`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,j.jsx)(T,{value:`WIM-4829-KT`,format:`code128`,height:48}),(0,j.jsx)(T,{value:`490177701868`,format:`ean13`,height:48})]}),(0,j.jsx)(O,{label:e(`audit:label_barcode_unencodable`),direction:`row`,gap:`xl`,wrap:!0,children:(0,j.jsx)(T,{value:`4901777018680`,format:`ean13`})})]}),(0,j.jsxs)(D,{title:e(`audit:label_special_states_interactions`),children:[(0,j.jsxs)(O,{label:e(`audit:label_interactive_chips_tags`),direction:`row`,wrap:!0,children:[(0,j.jsx)(p,{onClick:()=>alert(`Clicked`),children:e(`audit:label_clickable_chip`)}),(0,j.jsx)(p,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_chip`)}),(0,j.jsx)(h,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_tag`)})]}),(0,j.jsxs)(O,{label:e(`audit:label_badge_variations`),direction:`row`,wrap:!0,children:[(0,j.jsx)(l,{content:`99+`}),(0,j.jsx)(l,{variant:`solid`,intent:`danger`}),` `]})]})]})}},B=[`Overview`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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

        {/* Presence: 状態 → 色の対応と、アバターに重ねたときの位置を並べて見る */}
        <ComparisonGrid title={t("audit:label_presence")}>
          <ComponentGroup label={t("audit:label_presence_statuses")} direction="row" gap="xl" wrap>
            <Presence status="online" showLabel />
            <Presence status="away" showLabel />
            <Presence status="busy" showLabel />
            <Presence status="offline" showLabel />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_presence_on_avatar")} direction="row" gap="xl" wrap>
            {sizes.map(size => <Presence key={size} status="online" size={size}>
                <Avatar initials="AF" size={size} intent="neutral" />
              </Presence>)}
          </ComponentGroup>
        </ComparisonGrid>

        {/* Barcode: テーマに追随しない面と、描かない状態を並べて見る */}
        <ComparisonGrid title={t("audit:label_barcode")}>
          <ComponentGroup label={t("audit:label_barcode_formats")} direction="row" gap="xl" wrap>
            <Barcode value="WIM-4829-KT" format="code128" height={48} />
            <Barcode value="490177701868" format="ean13" height={48} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_barcode_unencodable")} direction="row" gap="xl" wrap>
            <Barcode value="4901777018680" format="ean13" />
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Overview,B as __namedExportsOrder,R as default};