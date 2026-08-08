"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{kr as s,t as c}from"./src-BE5jBQ9L.js";import{l}from"./FieldTemplate-C0nkiaIz.js";import{r as u}from"./TagInput-Den4avVR.js";import{i as d,n as f,r as p,t as m}from"./AuditUtils-C0tQOUtW.js";var h,g,_,v;e((()=>{t(),a(),r(),c(),h=i(),d(),g={title:`Audit/IndicatorFamily`,parameters:{layout:`fullscreen`}},_={render:()=>{let{t:e}=n([...o,`audit`]);return(0,h.jsxs)(m,{title:e(`audit:indicator_family_title`),children:[(0,h.jsx)(f,{title:e(`audit:intent_comparison`),children:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`].map(t=>(0,h.jsxs)(p,{label:e(`audit:label_intent`,{intent:t}),direction:`row`,wrap:!0,children:[(0,h.jsx)(l,{intent:t,children:e(`audit:label_badge`)}),(0,h.jsx)(s,{intent:t,children:e(`audit:label_chip`)}),(0,h.jsx)(u,{intent:t,children:e(`audit:label_tag`)})]},t))}),(0,h.jsx)(f,{title:e(`audit:variant_comparison`),children:[`solid`,`outline`,`subtle`].map(t=>(0,h.jsxs)(p,{label:e(`audit:label_variant`,{variant:t}),direction:`row`,wrap:!0,children:[(0,h.jsx)(l,{variant:t,intent:`primary`,children:e(`audit:label_badge`)}),(0,h.jsx)(s,{variant:t,intent:`primary`,children:e(`audit:label_chip`)}),(0,h.jsx)(u,{variant:t,intent:`primary`,children:e(`audit:label_tag`)})]},t))}),(0,h.jsx)(f,{title:e(`audit:size_comparison`),children:[`sm`,`md`,`lg`].map(t=>(0,h.jsxs)(p,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,wrap:!0,children:[(0,h.jsx)(l,{size:t,children:e(`audit:label_badge`)}),(0,h.jsx)(s,{size:t,children:e(`audit:label_chip`)}),(0,h.jsx)(u,{size:t,children:e(`audit:label_tag`)})]},t))}),(0,h.jsxs)(f,{title:e(`audit:label_special_states_interactions`),children:[(0,h.jsxs)(p,{label:e(`audit:label_interactive_chips_tags`),direction:`row`,wrap:!0,children:[(0,h.jsx)(s,{onClick:()=>alert(`Clicked`),children:e(`audit:label_clickable_chip`)}),(0,h.jsx)(s,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_chip`)}),(0,h.jsx)(u,{onDelete:()=>alert(`Deleted`),children:e(`audit:label_deletable_tag`)})]}),(0,h.jsxs)(p,{label:e(`audit:label_badge_variations`),direction:`row`,wrap:!0,children:[(0,h.jsx)(l,{content:`99+`}),(0,h.jsx)(l,{variant:`solid`,intent:`danger`}),` `]})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "subtle"] as const;
    const intents = ["primary", "secondary", "success", "warning", "danger", "info", "neutral"] as const;
    return <AuditPage title={t("audit:indicator_family_title")}>
        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map(intent => <ComponentGroup key={intent} label={t("audit:label_intent", {
          intent
        })} direction="row" wrap>
              <Badge intent={intent}>{t("audit:label_badge")}</Badge>
              <Chip intent={intent}>{t("audit:label_chip")}</Chip>
              <Tag intent={intent}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map(variant => <ComponentGroup key={variant} label={t("audit:label_variant", {
          variant
        })} direction="row" wrap>
              <Badge variant={variant} intent="primary">{t("audit:label_badge")}</Badge>
              <Chip variant={variant} intent="primary">{t("audit:label_chip")}</Chip>
              <Tag variant={variant} intent="primary">{t("audit:label_tag")}</Tag>
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
}`,..._.parameters?.docs?.source}}},v=[`Overview`]}))();export{_ as Overview,v as __namedExportsOrder,g as default};