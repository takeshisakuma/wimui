"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-lSx-_C-t.js";import{n as l,t as u}from"./Stack-D0pTsuU-.js";import{n as d,t as f}from"./Button-DrO46Brn.js";import{n as p,t as m}from"./ButtonGroup--DsEPyiU.js";import{n as h,t as g}from"./CopyButton-DHjmLxcn.js";import{n as _,t as v}from"./IconButton-Vaooi49W.js";import{n as y,t as b}from"./LinkButton-B7LlNzpw.js";import{n as x,t as S}from"./FloatButton-UEiC0xWr.js";import{n as C,t as w}from"./SplitButton-Df_co4Uy.js";import{i as T,n as E,r as D,t as O}from"./AuditUtils-DcuduY3M.js";var k,A,j,M;function N(){return(N=e((()=>{t(),r(),i(),d(),_(),y(),h(),x(),C(),p(),l(),s(),k=o(),T(),A={title:`Audit/ButtonFamily`,parameters:{layout:`fullscreen`}},j={render:()=>{let{t:e}=n([...a,`audit`]);return(0,k.jsxs)(O,{title:e(`audit:button_family_title`),children:[(0,k.jsx)(E,{title:e(`audit:size_comparison`),children:[`sm`,`md`,`lg`].map(t=>(0,k.jsxs)(D,{label:e(`audit:label_size_n`,{size:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(f,{size:t,variant:`solid`,children:e(`audit:label_button`)}),(0,k.jsx)(v,{size:t,variant:`solid`,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,k.jsx)(b,{size:t,variant:`solid`,children:e(`audit:label_link`)})]},t))}),(0,k.jsx)(E,{title:e(`audit:intent_comparison`),children:[`default`,`danger`,`success`].map(t=>(0,k.jsxs)(D,{label:e(`audit:label_intent`,{intent:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(f,{size:`md`,variant:`solid`,intent:t,children:e(`audit:label_button`)}),(0,k.jsx)(v,{size:`md`,variant:`solid`,intent:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,k.jsx)(S,{intent:t,iconName:`CircleIcon`,position:`inline`}),(0,k.jsx)(w,{intent:t,toggleLabel:e(`audit:sample_split_toggle`),actions:[{label:e(`action.copy`)},{label:e(`action.delete`)}],children:e(`action.save`)})]},t))}),(0,k.jsx)(E,{title:e(`audit:variant_comparison`),children:[`solid`,`outline`,`ghost`].map(t=>(0,k.jsxs)(D,{label:e(`audit:label_variant`,{variant:t}),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(f,{size:`md`,variant:t,children:e(`audit:label_button`)}),(0,k.jsx)(v,{size:`md`,variant:t,iconName:`CircleIcon`,"aria-label":e(`audit:demo_circle`)}),(0,k.jsx)(b,{size:`md`,variant:t,children:e(`audit:label_link`)}),(0,k.jsxs)(m,{variant:t,"aria-label":e(`audit:label_button_group`),children:[(0,k.jsx)(f,{size:`md`,children:e(`action.back`)}),(0,k.jsx)(f,{size:`md`,children:e(`action.next`)})]})]},t))}),(0,k.jsxs)(E,{title:e(`audit:specialized_buttons`),children:[(0,k.jsxs)(D,{label:e(`audit:label_copy_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(g,{value:`Copied Text`}),(0,k.jsx)(g,{value:`Copied Text`})]}),(0,k.jsxs)(D,{label:e(`audit:label_float_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(S,{iconName:`PlusIcon`,position:`inline`}),(0,k.jsx)(S,{iconName:`ChevronUpIcon`,variant:`outline`,position:`inline`}),(0,k.jsx)(S,{iconName:`StarIcon`,variant:`glass`,position:`inline`,"aria-label":e(`audit:label_float_button`)})]}),(0,k.jsxs)(D,{label:e(`audit:label_split_button`),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(w,{toggleLabel:e(`audit:sample_split_toggle`),actions:[{label:e(`action.copy`)},{label:e(`action.delete`)}],children:e(`action.save`)}),(0,k.jsx)(w,{variant:`outline`,toggleLabel:e(`audit:sample_split_toggle`),actions:[{label:e(`action.copy`)},{label:e(`action.delete`)}],children:e(`action.save`)})]})]}),(0,k.jsx)(E,{title:e(`audit:mixed_composition`),children:(0,k.jsxs)(D,{label:e(`audit:label_mix`),direction:`row`,align:`center`,wrap:!0,children:[(0,k.jsx)(f,{size:`md`,children:e(`audit:label_button`)}),(0,k.jsx)(v,{size:`md`,iconName:`SearchIcon`,"aria-label":e(`action.search`)}),(0,k.jsx)(g,{size:`md`,value:`test`}),(0,k.jsx)(b,{size:`md`,children:e(`audit:label_link`)})]})}),(0,k.jsx)(E,{title:e(`audit:fluid_width_check`),children:(0,k.jsx)(c,{style:{gridColumn:`1 / -1`},w:`100%`,children:(0,k.jsxs)(u,{gap:`lg`,children:[(0,k.jsx)(f,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_solid`)}),(0,k.jsx)(f,{fullWidth:!0,variant:`outline`,children:e(`audit:label_full_width_outline`)}),(0,k.jsx)(b,{fullWidth:!0,variant:`solid`,children:e(`audit:label_full_width_link`)})]})})})]})}},M=[`Overview`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
              {/* T280: SplitButton の danger / success はどのストーリーにも描かれていなかった */}
              <SplitButton intent={intent as "default" | "danger" | "success"} toggleLabel={t("audit:sample_split_toggle")} actions={[{
            label: t("action.copy")
          }, {
            label: t("action.delete")
          }]}>
                {t("action.save")}
              </SplitButton>
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
              {/* T280: ButtonGroup の variant は outline がどのストーリーにも描かれていなかった */}
              <ButtonGroup variant={variant} aria-label={t("audit:label_button_group")}>
                <Button size="md">{t("action.back")}</Button>
                <Button size="md">{t("action.next")}</Button>
              </ButtonGroup>
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
            {/* T280: glass はどのストーリーにも描かれていなかった */}
            <FloatButton iconName="StarIcon" variant="glass" position="inline" aria-label={t("audit:label_float_button")} />
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
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as Overview,M as __namedExportsOrder,A as default};