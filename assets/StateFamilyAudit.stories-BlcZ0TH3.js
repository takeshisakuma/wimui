"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-BNJo1pMu.js";import{n as l,t as u}from"./Stack-CrCPoxQ1.js";import{n as d,t as f}from"./Icon-TGLZuM2d.js";import{n as p,t as m}from"./Button-DSrkNfg0.js";import{n as h,t as g}from"./Text-1X1ZsZfu.js";import{n as _,t as v}from"./Result-CKFAdhJP.js";import{n as y,t as b}from"./EmptyState-DuJdmpFg.js";import{i as x,n as S,r as C,t as w}from"./AuditUtils-DQd41XyN.js";var T,E,D,O;function k(){return(k=e((()=>{t(),r(),i(),_(),y(),p(),l(),h(),s(),d(),T=o(),x(),E={title:`Audit/StateFamily`,parameters:{layout:`fullscreen`}},D={render:()=>{let{t:e}=n([...a,`audit`]);return(0,T.jsxs)(w,{title:e(`audit:state_family_title`),children:[(0,T.jsxs)(S,{title:e(`audit:structural_consistency_check`),children:[(0,T.jsx)(C,{label:e(`audit:label_result`),align:`stretch`,children:(0,T.jsx)(v,{intent:`success`,title:e(`audit:state_payment_success`),description:e(`audit:state_payment_success_desc`),extra:(0,T.jsxs)(u,{direction:`row`,gap:`sm`,wrap:!0,justify:`center`,children:[(0,T.jsx)(m,{variant:`solid`,children:e(`audit:state_print_receipt`)}),(0,T.jsx)(m,{variant:`outline`,children:e(`audit:state_back_home`)})]})})}),(0,T.jsx)(C,{label:e(`audit:label_empty_state`),align:`stretch`,children:(0,T.jsx)(b,{icon:(0,T.jsx)(f,{name:`SearchIcon`,size:`xl`,color:`secondary`}),title:e(`audit:state_no_data`),description:e(`audit:state_no_data_desc`),extra:(0,T.jsx)(m,{variant:`outline`,children:e(`audit:state_reset_filters`)})})}),(0,T.jsx)(C,{label:e(`audit:label_error_boundary`),align:`stretch`,children:(0,T.jsx)(c,{p:`lg`,radius:`md`,bg:`var(--wim-color-danger-subtle)`,style:{border:`1px solid var(--wim-color-danger)`},children:(0,T.jsxs)(u,{gap:`md`,children:[(0,T.jsx)(g,{weight:`bold`,color:`danger`,children:e(`audit:state_error_boundary_mock`)}),(0,T.jsx)(v,{intent:`danger`,title:e(`audit:state_something_wrong`),description:e(`audit:state_error_boundary_desc`),extra:(0,T.jsxs)(u,{direction:`row`,gap:`sm`,wrap:!0,justify:`center`,children:[(0,T.jsx)(m,{variant:`solid`,children:e(`audit:state_retry`)}),(0,T.jsx)(m,{variant:`outline`,children:e(`audit:state_show_details`)})]})})]})})})]}),(0,T.jsxs)(S,{title:e(`audit:vertical_spacing_check`),children:[(0,T.jsx)(C,{label:e(`audit:state_result_spacing`),align:`stretch`,children:(0,T.jsx)(v,{intent:`info`,title:e(`audit:state_info_consistency`),description:e(`audit:state_result_spacing_desc`),extra:(0,T.jsx)(m,{variant:`solid`,children:e(`audit:state_primary_action`)})})}),(0,T.jsx)(C,{label:e(`audit:state_empty_spacing`),align:`stretch`,children:(0,T.jsx)(b,{icon:(0,T.jsx)(f,{name:`CircleIcon`,size:`xl`,color:`secondary`}),title:e(`audit:state_no_content`),description:e(`audit:state_empty_spacing_desc`),extra:(0,T.jsx)(m,{variant:`outline`,children:e(`audit:state_secondary_action`)})})})]}),(0,T.jsx)(S,{title:e(`audit:action_button_style_check`),children:(0,T.jsxs)(u,{gap:`lg`,children:[(0,T.jsx)(C,{label:e(`audit:state_success_solid`),align:`stretch`,children:(0,T.jsx)(v,{intent:`success`,title:e(`audit:state_process_completed`),extra:(0,T.jsx)(m,{variant:`solid`,children:`Done`})})}),(0,T.jsx)(C,{label:e(`audit:state_empty_outline`),align:`stretch`,children:(0,T.jsx)(b,{title:e(`audit:state_no_items`),extra:(0,T.jsx)(m,{variant:`outline`,children:e(`audit:state_create_item`)})})})]})})]})}},O=[`Overview`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:state_family_title")}>
        {/* Structural Consistency */}
        <ComparisonGrid title={t("audit:structural_consistency_check")}>
          <ComponentGroup label={t("audit:label_result")} align="stretch">
            <Result intent="success" title={t("audit:state_payment_success")} description={t("audit:state_payment_success_desc")} extra={<Stack direction="row" gap="sm" wrap justify="center">
                  <Button variant="solid">{t("audit:state_print_receipt")}</Button>
                  <Button variant="outline">{t("audit:state_back_home")}</Button>
                </Stack>} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_empty_state")} align="stretch">
            <EmptyState icon={<Icon name="SearchIcon" size="xl" color="secondary" />} title={t("audit:state_no_data")} description={t("audit:state_no_data_desc")} extra={<Button variant="outline">{t("audit:state_reset_filters")}</Button>} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_error_boundary")} align="stretch">
            <Box p="lg" radius="md" bg="var(--wim-color-danger-subtle)" style={{
            border: "1px solid var(--wim-color-danger)"
          }}>
              <Stack gap="md">
                <Text weight="bold" color="danger">{t("audit:state_error_boundary_mock")}</Text>
                <Result intent="danger" title={t("audit:state_something_wrong")} description={t("audit:state_error_boundary_desc")} extra={<Stack direction="row" gap="sm" wrap justify="center">
                      <Button variant="solid">{t("audit:state_retry")}</Button>
                      <Button variant="outline">{t("audit:state_show_details")}</Button>
                    </Stack>} />
              </Stack>
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Vertical Spacing Check */}
        <ComparisonGrid title={t("audit:vertical_spacing_check")}>
          <ComponentGroup label={t("audit:state_result_spacing")} align="stretch">
            <Result intent="info" title={t("audit:state_info_consistency")} description={t("audit:state_result_spacing_desc")} extra={<Button variant="solid">{t("audit:state_primary_action")}</Button>} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:state_empty_spacing")} align="stretch">
            <EmptyState icon={<Icon name="CircleIcon" size="xl" color="secondary" />} title={t("audit:state_no_content")} description={t("audit:state_empty_spacing_desc")} extra={<Button variant="outline">{t("audit:state_secondary_action")}</Button>} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Action Button Recommendation */}
        <ComparisonGrid title={t("audit:action_button_style_check")}>
          <Stack gap="lg">
            <ComponentGroup label={t("audit:state_success_solid")} align="stretch">
              <Result intent="success" title={t("audit:state_process_completed")} extra={<Button variant="solid">Done</Button>} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:state_empty_outline")} align="stretch">
              <EmptyState title={t("audit:state_no_items")} extra={<Button variant="outline">{t("audit:state_create_item")}</Button>} />
            </ComponentGroup>
          </Stack>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Overview,O as __namedExportsOrder,E as default};