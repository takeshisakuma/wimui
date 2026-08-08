"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{$n as s,t as c,tr as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Box-Bs2Irq0X.js";import{r as d}from"./SpeedDial-zLpS6dnZ.js";import{i as f}from"./List-C4WUy_aA.js";import{t as p}from"./Button-d-SlSJ4S.js";import{t as m}from"./IconButton-tz9NaSVb.js";import{i as h,n as g,r as _,t as v}from"./AuditUtils-C0tQOUtW.js";var y,b,x,S;e((()=>{t(),a(),r(),c(),y=i(),h(),b={title:`Audit/ButtonFamily`,parameters:{layout:`fullscreen`}},x={render:()=>{let{t:e}=n([...o,`audit`]);return(0,y.jsxs)(v,{title:e(`audit:button_family_title`),children:[(0,y.jsx)(g,{title:e(`audit:size_comparison`),children:[`sm`,`md`,`lg`].map(t=>(0,y.jsxs)(_,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(p,{size:t,variant:`solid`,children:e(`audit:label_button`)}),(0,y.jsx)(m,{size:t,variant:`solid`,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,y.jsx)(s,{size:t,variant:`solid`,children:e(`audit:label_link`)})]},t))}),(0,y.jsx)(g,{title:e(`audit:intent_comparison`),children:[`default`,`danger`,`success`].map(t=>(0,y.jsxs)(_,{label:e(`audit:label_intent`,{intent:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(p,{size:`md`,variant:`solid`,intent:t,children:e(`audit:label_button`)}),(0,y.jsx)(m,{size:`md`,variant:`solid`,intent:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,y.jsx)(d,{intent:t,iconName:`CircleIcon`,position:`static`})]},t))}),(0,y.jsx)(g,{title:e(`audit:variant_comparison`),children:[`solid`,`outline`,`ghost`].map(t=>(0,y.jsxs)(_,{label:e(`audit:label_variant`,{variant:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(p,{size:`md`,variant:t,children:e(`audit:label_button`)}),(0,y.jsx)(m,{size:`md`,variant:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,y.jsx)(s,{size:`md`,variant:t,children:e(`audit:label_link`)})]},t))}),(0,y.jsxs)(g,{title:e(`audit:specialized_buttons`),children:[(0,y.jsxs)(_,{label:e(`audit:label_copy_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(l,{value:`Copied Text`}),(0,y.jsx)(l,{value:`Copied Text`})]}),(0,y.jsxs)(_,{label:e(`audit:label_float_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(d,{iconName:`PlusIcon`,position:`static`}),(0,y.jsx)(d,{iconName:`ChevronUpIcon`,variant:`default`,position:`static`})]})]}),(0,y.jsx)(g,{title:e(`audit:mixed_composition`),children:(0,y.jsxs)(_,{label:e(`audit:label_mix`),direction:`row`,align:`center`,wrap:!0,children:[(0,y.jsx)(p,{size:`md`,children:e(`audit:label_button`)}),(0,y.jsx)(m,{size:`md`,iconName:`SearchIcon`,"aria-label":e(`action.search`)}),(0,y.jsx)(l,{size:`md`,value:`test`}),(0,y.jsx)(s,{size:`md`,children:e(`audit:label_link`)})]})}),(0,y.jsx)(g,{title:e(`audit:fluid_width_check`),children:(0,y.jsx)(u,{style:{gridColumn:`1 / -1`},w:`100%`,children:(0,y.jsxs)(f,{gap:`lg`,children:[(0,y.jsx)(p,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_solid`)}),(0,y.jsx)(p,{fullWidth:!0,variant:`outline`,children:e(`audit:label_full_width_outline`)}),(0,y.jsx)(s,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_link`)})]})})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "ghost"] as const;
    const intents = ["default", "danger", "success"] as const;
    return <AuditPage title={t("audit:button_family_title")}>
        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map(size => <ComponentGroup key={size} label={t("audit:label_size_n", {
          size
        })} direction="row" align="center" wrap>
              <Button size={size} variant="solid">
                {t("audit:label_button")}
              </Button>
              <IconButton size={size} variant="solid" iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <LinkButton size={size} variant="solid">
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map(intent => <ComponentGroup key={intent} label={t("audit:label_intent", {
          intent
        })} direction="row" align="center" wrap>
              <Button size="md" variant="solid" intent={intent as "default" | "danger" | "success"}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant="solid" intent={intent as "default" | "danger" | "success"} iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <FloatButton intent={intent as "default" | "danger" | "success"} iconName="CircleIcon" position="static" />
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map(variant => <ComponentGroup key={variant} label={t("audit:label_variant", {
          variant
        })} direction="row" align="center" wrap>
              <Button size="md" variant={variant}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant={variant} iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <LinkButton size="md" variant={variant}>
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Specialized Buttons */}
        <ComparisonGrid title={t("audit:specialized_buttons")}>
          <ComponentGroup label={t("audit:label_copy_button")} direction="row" align="center" wrap>
            <CopyButton value="Copied Text" />
            <CopyButton value="Copied Text" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_float_button")} direction="row" align="center" wrap>
            <FloatButton iconName="PlusIcon" position="static" />
            <FloatButton iconName="ChevronUpIcon" variant="default" position="static" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Mixed Composition */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")} direction="row" align="center" wrap>
            <Button size="md">{t("audit:label_button")}</Button>
            <IconButton size="md" iconName="SearchIcon" aria-label={t("action.search")} />
            <CopyButton size="md" value="test" />
            <LinkButton size="md">{t("audit:label_link")}</LinkButton>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <Box style={{
          gridColumn: "1 / -1"
        }} w="100%">
            <Stack gap="lg">
              <Button fullWidth variant="solid">{t("audit:label_full_width_solid")}</Button>
              <Button fullWidth variant="outline">{t("audit:label_full_width_outline")}</Button>
              <LinkButton fullWidth variant="solid">{t("audit:label_full_width_link")}</LinkButton>
            </Stack>
          </Box>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Overview`]}))();export{x as Overview,S as __namedExportsOrder,b as default};