"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{Sn as s,t as c,ut as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Box-Bs2Irq0X.js";import{i as d}from"./List-C4WUy_aA.js";import{t as f}from"./Icon-Bz8kwOgZ.js";import{t as p}from"./Button-d-SlSJ4S.js";import{t as m}from"./Text-B6DLYHMc.js";import{i as h,n as g,r as _,t as v}from"./AuditUtils-C0tQOUtW.js";var y,b,x,S;e((()=>{t(),a(),r(),c(),y=i(),h(),b={title:`Audit/StateFamily`,parameters:{layout:`fullscreen`}},x={render:()=>{let{t:e}=n([...o,`audit`]);return(0,y.jsxs)(v,{title:e(`audit:state_family_title`),children:[(0,y.jsxs)(g,{title:e(`audit:structural_consistency_check`),children:[(0,y.jsx)(_,{label:e(`audit:label_result`),align:`stretch`,children:(0,y.jsx)(s,{intent:`success`,title:e(`audit:state_payment_success`),description:e(`audit:state_payment_success_desc`),extra:(0,y.jsxs)(d,{direction:`row`,gap:`sm`,wrap:!0,justify:`center`,children:[(0,y.jsx)(p,{variant:`solid`,children:e(`audit:state_print_receipt`)}),(0,y.jsx)(p,{variant:`outline`,children:e(`audit:state_back_home`)})]})})}),(0,y.jsx)(_,{label:e(`audit:label_empty_state`),align:`stretch`,children:(0,y.jsx)(l,{icon:(0,y.jsx)(f,{name:`SearchIcon`,size:`xl`,color:`secondary`}),title:e(`audit:state_no_data`),description:e(`audit:state_no_data_desc`),extra:(0,y.jsx)(p,{variant:`outline`,children:e(`audit:state_reset_filters`)})})}),(0,y.jsx)(_,{label:e(`audit:label_error_boundary`),align:`stretch`,children:(0,y.jsx)(u,{p:`lg`,radius:`md`,bg:`var(--wim-color-danger-subtle)`,style:{border:`1px solid var(--wim-color-danger)`},children:(0,y.jsxs)(d,{gap:`md`,children:[(0,y.jsx)(m,{weight:`bold`,color:`danger`,children:e(`audit:state_error_boundary_mock`)}),(0,y.jsx)(s,{intent:`danger`,title:e(`audit:state_something_wrong`),description:e(`audit:state_error_boundary_desc`),extra:(0,y.jsxs)(d,{direction:`row`,gap:`sm`,wrap:!0,justify:`center`,children:[(0,y.jsx)(p,{variant:`solid`,children:e(`audit:state_retry`)}),(0,y.jsx)(p,{variant:`outline`,children:e(`audit:state_show_details`)})]})})]})})})]}),(0,y.jsxs)(g,{title:e(`audit:vertical_spacing_check`),children:[(0,y.jsx)(_,{label:e(`audit:state_result_spacing`),align:`stretch`,children:(0,y.jsx)(s,{intent:`info`,title:e(`audit:state_info_consistency`),description:e(`audit:state_result_spacing_desc`),extra:(0,y.jsx)(p,{variant:`solid`,children:e(`audit:state_primary_action`)})})}),(0,y.jsx)(_,{label:e(`audit:state_empty_spacing`),align:`stretch`,children:(0,y.jsx)(l,{icon:(0,y.jsx)(f,{name:`CircleIcon`,size:`xl`,color:`secondary`}),title:e(`audit:state_no_content`),description:e(`audit:state_empty_spacing_desc`),extra:(0,y.jsx)(p,{variant:`outline`,children:e(`audit:state_secondary_action`)})})})]}),(0,y.jsx)(g,{title:e(`audit:action_button_style_check`),children:(0,y.jsxs)(d,{gap:`lg`,children:[(0,y.jsx)(_,{label:e(`audit:state_success_solid`),align:`stretch`,children:(0,y.jsx)(s,{intent:`success`,title:e(`audit:state_process_completed`),extra:(0,y.jsx)(p,{variant:`solid`,children:`Done`})})}),(0,y.jsx)(_,{label:e(`audit:state_empty_outline`),align:`stretch`,children:(0,y.jsx)(l,{title:e(`audit:state_no_items`),extra:(0,y.jsx)(p,{variant:`outline`,children:e(`audit:state_create_item`)})})})]})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Overview`]}))();export{x as Overview,S as __namedExportsOrder,b as default};