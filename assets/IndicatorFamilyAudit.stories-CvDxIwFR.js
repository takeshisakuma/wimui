"use client";
import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-YD8z3mm4.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Badge-CWMYBHho.js";import{n as u,t as d}from"./Text-D9yqbrao.js";import{n as f,t as p}from"./Chip-BLd88nmX.js";import{n as m,t as h}from"./Tag-Dgt6fFEm.js";import{n as g,t as _}from"./Avatar-BwUrlFeR.js";import{n as v,t as y}from"./RelativeTime-BGKf5MIv.js";import{n as b,t as x}from"./Countdown-c6KY6_LA.js";import{n as S,t as C}from"./Presence-DRqR85FA.js";import{n as w,t as T}from"./Persona-CsI0iswf.js";import{n as E,t as D}from"./Barcode-B6Tah8PG.js";import{i as O,n as k,r as A,t as j}from"./AuditUtils-DTsCA1qz.js";var M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{M=e(n(),1),i(),a(),g(),c(),E(),f(),b(),w(),S(),v(),m(),u(),N=s(),O(),P=new Date(`2024-01-01T00:00:00Z`),F=()=>typeof window<`u`&&!!window.__VRT__,I=e=>new Date((F()?P.getTime():Date.now())-e*6e4),L=e=>new Date((F()?P.getTime():Date.now())+e*1e3),R=()=>F()?{baseDate:P,live:!1}:{},z=()=>F()?{baseDate:P,paused:!0}:{},B={title:`Audit/IndicatorFamily`,parameters:{layout:`fullscreen`}},V={render:()=>{let{t:e}=r([...o,`audit`]),t=[`sm`,`md`,`lg`],n=[`solid`,`outline`,`subtle`],i=[`primary`,`success`,`warning`,`danger`,`info`,`neutral`];return(0,N.jsxs)(j,{title:e(`audit:indicator_family_title`),children:[(0,N.jsx)(k,{title:e(`audit:variant_intent_matrix`),overflowX:`auto`,children:[[`badge`,(t,n)=>(0,N.jsx)(l,{intent:t,variant:n,children:e(`audit:label_badge`)})],[`chip`,(t,n)=>(0,N.jsx)(p,{intent:t,variant:n,children:e(`audit:label_chip`)})],[`tag`,(t,n)=>(0,N.jsx)(h,{intent:t,variant:n,children:e(`audit:label_tag`)})]].map(([t,r])=>(0,N.jsx)(A,{label:e(`audit:label_${t}`),noStack:!0,children:(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto repeat(${i.length}, max-content)`,gap:`var(--wim-spacing-sm)`,alignItems:`center`,width:`max-content`},children:[(0,N.jsx)(`span`,{}),i.map(e=>(0,N.jsx)(d,{size:`xs`,color:`text-secondary`,children:e},e)),n.map(e=>(0,N.jsxs)(M.Fragment,{children:[(0,N.jsx)(d,{size:`xs`,color:`text-secondary`,children:e}),i.map(t=>(0,N.jsx)(`span`,{children:r(t,e)},`${e}-${t}`))]},e))]})},t))}),(0,N.jsx)(k,{title:e(`audit:size_comparison`),children:t.map(t=>(0,N.jsxs)(A,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,wrap:!0,children:[(0,N.jsx)(l,{size:t,children:e(`audit:label_badge`)}),(0,N.jsx)(p,{size:t,children:e(`audit:label_chip`)}),(0,N.jsx)(h,{size:t,children:e(`audit:label_tag`)})]},t))}),(0,N.jsxs)(k,{title:e(`audit:label_time_indicators`),children:[(0,N.jsxs)(A,{label:e(`audit:label_relative_time`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,N.jsx)(y,{date:I(3),...R()}),(0,N.jsx)(y,{date:I(300),...R()}),(0,N.jsx)(y,{date:I(4320),...R()})]}),(0,N.jsx)(A,{label:e(`audit:label_countdown`),direction:`row`,gap:`xl`,wrap:!0,children:(0,N.jsx)(x,{target:L(15153),...z()})})]}),(0,N.jsxs)(k,{title:e(`audit:label_presence`),children:[(0,N.jsxs)(A,{label:e(`audit:label_presence_statuses`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,N.jsx)(C,{status:`online`,showLabel:!0}),(0,N.jsx)(C,{status:`away`,showLabel:!0}),(0,N.jsx)(C,{status:`busy`,showLabel:!0}),(0,N.jsx)(C,{status:`offline`,showLabel:!0})]}),(0,N.jsx)(A,{label:e(`audit:label_presence_on_avatar`),direction:`row`,gap:`xl`,wrap:!0,children:t.map(e=>(0,N.jsx)(C,{status:`online`,size:e,children:(0,N.jsx)(_,{initials:`AF`,size:e,intent:`neutral`})},e))})]}),(0,N.jsxs)(k,{title:e(`audit:label_persona`),children:[(0,N.jsx)(A,{label:e(`audit:label_persona_sizes`),gap:`lg`,children:t.map(t=>(0,N.jsx)(T,{size:t,name:e(`audit:sample_persona_name`),description:e(`audit:sample_persona_role`),secondaryDescription:e(`audit:sample_persona_activity`),avatar:{initials:`ID`},presence:`away`},t))}),(0,N.jsx)(A,{label:e(`audit:label_persona_below`),children:(0,N.jsx)(T,{size:`lg`,textPosition:`below`,name:e(`audit:sample_persona_name`),description:e(`audit:sample_persona_role`),avatar:{initials:`ID`}})})]}),(0,N.jsxs)(k,{title:e(`audit:label_barcode`),children:[(0,N.jsxs)(A,{label:e(`audit:label_barcode_formats`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,N.jsx)(D,{value:`WIM-4829-KT`,format:`code128`,height:48}),(0,N.jsx)(D,{value:`490177701868`,format:`ean13`,height:48})]}),(0,N.jsx)(A,{label:e(`audit:label_barcode_unencodable`),direction:`row`,gap:`xl`,wrap:!0,children:(0,N.jsx)(D,{value:`4901777018680`,format:`ean13`})})]}),(0,N.jsxs)(k,{title:e(`audit:label_special_states_interactions`),children:[(0,N.jsxs)(A,{label:e(`audit:label_interactive_chips_tags`),direction:`row`,wrap:!0,children:[(0,N.jsx)(p,{onClick:()=>alert(`Clicked`),children:e(`audit:label_clickable_chip`)}),(0,N.jsx)(p,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_chip`)}),(0,N.jsx)(h,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_tag`)})]}),(0,N.jsxs)(A,{label:e(`audit:label_badge_variations`),direction:`row`,wrap:!0,children:[(0,N.jsx)(l,{content:`99+`}),(0,N.jsx)(l,{variant:`solid`,intent:`danger`}),` `]})]})]})}},H=[`Overview`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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

        {/* Persona: アバターの大きさ 3 段と、文字の大きさ・間隔の対応 */}
        <ComparisonGrid title={t("audit:label_persona")}>
          <ComponentGroup label={t("audit:label_persona_sizes")} gap="lg">
            {sizes.map(size => <Persona key={size} size={size} name={t("audit:sample_persona_name")} description={t("audit:sample_persona_role")} secondaryDescription={t("audit:sample_persona_activity")} avatar={{
            initials: "ID"
          }} presence="away" />)}
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_persona_below")}>
            <Persona size="lg" textPosition="below" name={t("audit:sample_persona_name")} description={t("audit:sample_persona_role")} avatar={{
            initials: "ID"
          }} />
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Overview,H as __namedExportsOrder,B as default};