"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{Yn as s,cr as c,or as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Box-BVB_9vOB.js";import{r as f}from"./SpeedDial-75iu1pCN.js";import{t as p}from"./Stack-z584y6QE.js";import{t as m}from"./Button-vRcm9ObM.js";import{t as h}from"./IconButton-DyTVmXf0.js";import{i as g,n as _,r as v,t as y}from"./AuditUtils-CDbRpqsv.js";var b,x,S,C;e((()=>{t(),a(),r(),u(),b=i(),g(),x={title:`Audit/ButtonFamily`,parameters:{layout:`fullscreen`}},S={render:()=>{let{t:e}=n([...o,`audit`]);return(0,b.jsxs)(y,{title:e(`audit:button_family_title`),children:[(0,b.jsx)(_,{title:e(`audit:size_comparison`),children:[`sm`,`md`,`lg`].map(t=>(0,b.jsxs)(v,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(m,{size:t,variant:`solid`,children:e(`audit:label_button`)}),(0,b.jsx)(h,{size:t,variant:`solid`,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,b.jsx)(l,{size:t,variant:`solid`,children:e(`audit:label_link`)})]},t))}),(0,b.jsx)(_,{title:e(`audit:intent_comparison`),children:[`default`,`danger`,`success`].map(t=>(0,b.jsxs)(v,{label:e(`audit:label_intent`,{intent:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(m,{size:`md`,variant:`solid`,intent:t,children:e(`audit:label_button`)}),(0,b.jsx)(h,{size:`md`,variant:`solid`,intent:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,b.jsx)(f,{intent:t,iconName:`CircleIcon`,position:`inline`})]},t))}),(0,b.jsx)(_,{title:e(`audit:variant_comparison`),children:[`solid`,`outline`,`ghost`].map(t=>(0,b.jsxs)(v,{label:e(`audit:label_variant`,{variant:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(m,{size:`md`,variant:t,children:e(`audit:label_button`)}),(0,b.jsx)(h,{size:`md`,variant:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,b.jsx)(l,{size:`md`,variant:t,children:e(`audit:label_link`)})]},t))}),(0,b.jsxs)(_,{title:e(`audit:specialized_buttons`),children:[(0,b.jsxs)(v,{label:e(`audit:label_copy_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(c,{value:`Copied Text`}),(0,b.jsx)(c,{value:`Copied Text`})]}),(0,b.jsxs)(v,{label:e(`audit:label_float_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(f,{iconName:`PlusIcon`,position:`inline`}),(0,b.jsx)(f,{iconName:`ChevronUpIcon`,variant:`outline`,position:`inline`})]}),(0,b.jsxs)(v,{label:e(`audit:label_split_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(s,{toggleLabel:e(`audit:sample_split_toggle`),actions:[{label:e(`action.copy`)},{label:e(`action.delete`)}],children:e(`action.save`)}),(0,b.jsx)(s,{variant:`outline`,toggleLabel:e(`audit:sample_split_toggle`),actions:[{label:e(`action.copy`)},{label:e(`action.delete`)}],children:e(`action.save`)})]})]}),(0,b.jsx)(_,{title:e(`audit:mixed_composition`),children:(0,b.jsxs)(v,{label:e(`audit:label_mix`),direction:`row`,align:`center`,wrap:!0,children:[(0,b.jsx)(m,{size:`md`,children:e(`audit:label_button`)}),(0,b.jsx)(h,{size:`md`,iconName:`SearchIcon`,"aria-label":e(`action.search`)}),(0,b.jsx)(c,{size:`md`,value:`test`}),(0,b.jsx)(l,{size:`md`,children:e(`audit:label_link`)})]})}),(0,b.jsx)(_,{title:e(`audit:fluid_width_check`),children:(0,b.jsx)(d,{style:{gridColumn:`1 / -1`},w:`100%`,children:(0,b.jsxs)(p,{gap:`lg`,children:[(0,b.jsx)(m,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_solid`)}),(0,b.jsx)(m,{fullWidth:!0,variant:`outline`,children:e(`audit:label_full_width_outline`)}),(0,b.jsx)(l,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_link`)})]})})})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
              <FloatButton intent={intent as "default" | "danger" | "success"} iconName="CircleIcon" position="inline" />
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
            <FloatButton iconName="PlusIcon" position="inline" />
            <FloatButton iconName="ChevronUpIcon" variant="outline" position="inline" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_split_button")} direction="row" align="center" wrap>
            <SplitButton toggleLabel={t("audit:sample_split_toggle")} actions={[{
            label: t("action.copy")
          }, {
            label: t("action.delete")
          }]}>
              {t("action.save")}
            </SplitButton>
            <SplitButton variant="outline" toggleLabel={t("audit:sample_split_toggle")} actions={[{
            label: t("action.copy")
          }, {
            label: t("action.delete")
          }]}>
              {t("action.save")}
            </SplitButton>
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
}`,...S.parameters?.docs?.source}}},C=[`Overview`]}))();export{S as Overview,C as __namedExportsOrder,x as default};