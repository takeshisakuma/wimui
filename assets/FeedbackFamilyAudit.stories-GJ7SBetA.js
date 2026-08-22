"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{Dn as s,Nn as c,Tn as l,Vn as u,_n as d,jn as f,kn as p,ln as m,pn as h,t as g,zn as _}from"./src-Ssuy8lr7.js";import{t as v}from"./Box--bAE-pUN.js";import{t as y}from"./Stack-CC3QEopK.js";import{t as b}from"./Button-Dps1MPAd.js";import{t as x}from"./Text-DzblcqZm.js";import{i as S,n as C,r as w,t as T}from"./AuditUtils-Cal9MsZq.js";var E,D,O,k;e((()=>{t(),a(),r(),g(),S(),E=i(),D={title:`Audit/FeedbackFamily`,parameters:{layout:`fullscreen`}},O={render:()=>{let{t:e}=n([...o,`audit`]);return(0,E.jsxs)(T,{title:e(`audit:feedback_family_title`),children:[(0,E.jsxs)(C,{title:e(`audit:feedback_intent_consistency`),children:[(0,E.jsx)(w,{label:e(`audit:label_alert`),align:`stretch`,children:(0,E.jsxs)(y,{gap:`md`,children:[(0,E.jsx)(u,{intent:`info`,title:e(`audit:sample_alert_info_title`),description:e(`audit:sample_alert_info_desc`)}),(0,E.jsx)(u,{intent:`success`,title:e(`audit:sample_alert_success_title`),description:e(`audit:sample_alert_success_desc`)}),(0,E.jsx)(u,{intent:`warning`,title:e(`audit:sample_alert_warning_title`),description:e(`audit:sample_alert_warning_desc`)}),(0,E.jsx)(u,{intent:`danger`,title:e(`audit:sample_alert_error_title`),description:e(`audit:sample_alert_error_desc`)})]})}),(0,E.jsx)(w,{label:e(`audit:label_banner`),align:`stretch`,children:(0,E.jsxs)(y,{gap:`md`,children:[(0,E.jsx)(_,{intent:`info`,description:e(`audit:sample_banner_info`)}),(0,E.jsx)(_,{intent:`warning`,description:e(`audit:sample_banner_warning`)}),(0,E.jsx)(_,{intent:`danger`,description:e(`audit:sample_banner_error`)})]})})]}),(0,E.jsxs)(C,{title:e(`audit:loading_progress_consistency`),children:[(0,E.jsxs)(w,{label:e(`audit:label_spinner`),direction:`row`,align:`center`,gap:`lg`,wrap:!0,children:[(0,E.jsxs)(y,{align:`center`,gap:`xs`,children:[(0,E.jsx)(f,{size:`sm`}),(0,E.jsx)(x,{size:`xs`,children:`sm`})]}),(0,E.jsxs)(y,{align:`center`,gap:`xs`,children:[(0,E.jsx)(f,{size:`md`}),(0,E.jsx)(x,{size:`xs`,children:`md`})]}),(0,E.jsxs)(y,{align:`center`,gap:`xs`,children:[(0,E.jsx)(f,{size:`lg`}),(0,E.jsx)(x,{size:`xs`,children:`lg`})]}),(0,E.jsxs)(y,{align:`center`,gap:`xs`,children:[(0,E.jsx)(f,{size:`xl`}),(0,E.jsx)(x,{size:`xs`,children:`xl`})]})]}),(0,E.jsx)(w,{label:e(`audit:label_progress`),align:`stretch`,children:(0,E.jsxs)(y,{gap:`md`,children:[(0,E.jsx)(l,{value:30,label:e(`audit:sample_progress_uploading`),showValue:!0}),(0,E.jsx)(l,{value:60,intent:`success`,label:e(`audit:sample_progress_success`),showValue:!0}),(0,E.jsx)(l,{value:90,intent:`danger`,label:e(`audit:sample_progress_error`),showValue:!0}),(0,E.jsx)(l,{indeterminate:!0,label:e(`audit:sample_progress_processing`)})]})}),(0,E.jsxs)(w,{label:e(`audit:label_progress_ring`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,E.jsx)(m,{value:30,showValue:!0,label:e(`audit:sample_progress_uploading`)}),(0,E.jsx)(m,{value:70,intent:`success`,showValue:!0,label:e(`audit:sample_progress_success`)}),(0,E.jsx)(m,{indeterminate:!0,label:e(`audit:sample_progress_processing`)})]}),(0,E.jsxs)(w,{label:e(`audit:label_loader`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,E.jsxs)(y,{align:`center`,gap:`sm`,children:[(0,E.jsx)(c,{variant:`bars`}),(0,E.jsx)(x,{size:`xs`,children:`Bars`})]}),(0,E.jsxs)(y,{align:`center`,gap:`sm`,children:[(0,E.jsx)(c,{variant:`dots`}),(0,E.jsx)(x,{size:`xs`,children:`Dots`})]}),(0,E.jsxs)(y,{align:`center`,gap:`sm`,children:[(0,E.jsx)(c,{variant:`pulse`}),(0,E.jsx)(x,{size:`xs`,children:`Pulse`})]})]})]}),(0,E.jsxs)(C,{title:e(`audit:overlay_feedback_consistency`),children:[(0,E.jsx)(w,{label:e(`audit:label_loading_overlay`),align:`stretch`,children:(0,E.jsxs)(v,{style:{position:`relative`,height:`150px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:[(0,E.jsx)(v,{p:`md`,children:(0,E.jsx)(x,{children:e(`audit:sample_overlay_blocked`)})}),(0,E.jsx)(p,{visible:!0,message:e(`audit:sample_progress_processing`),blur:`sm`})]})}),(0,E.jsx)(w,{label:e(`audit:label_toast_batch`),align:`stretch`,children:(0,E.jsxs)(y,{gap:`sm`,children:[(0,E.jsx)(h,{title:e(`audit:sample_toast_profile_title`),description:e(`audit:sample_toast_profile_desc`),intent:`success`}),(0,E.jsx)(h,{title:e(`audit:sample_toast_network_title`),description:e(`audit:sample_toast_network_desc`),intent:`danger`})]})})]}),(0,E.jsxs)(C,{title:e(`audit:feedback_layout_consistency`),children:[(0,E.jsx)(w,{label:e(`audit:label_notification`),align:`stretch`,children:(0,E.jsxs)(y,{gap:`md`,children:[(0,E.jsx)(s,{intent:`info`,title:e(`audit:sample_notif_update_title`),description:e(`audit:sample_notif_update_desc`)}),(0,E.jsx)(s,{intent:`success`,title:e(`audit:sample_notif_file_title`),description:e(`audit:sample_notif_file_desc`),closable:!0})]})}),(0,E.jsx)(w,{label:e(`audit:sample_alert_unsaved_title`),align:`stretch`,children:(0,E.jsx)(u,{intent:`warning`,title:e(`audit:sample_alert_unsaved_title`),description:e(`audit:sample_alert_unsaved_desc`),onClose:()=>{},children:(0,E.jsxs)(y,{direction:`row`,gap:`sm`,mt:`sm`,children:[(0,E.jsx)(b,{size:`sm`,variant:`solid`,children:e(`audit:sample_action_save`)}),(0,E.jsx)(b,{size:`sm`,variant:`outline`,children:e(`audit:sample_action_discard`)})]})})})]}),(0,E.jsxs)(C,{title:e(`audit:feedback_overlay_behavior`),children:[(0,E.jsx)(w,{label:e(`audit:label_toast`),align:`stretch`,children:(0,E.jsxs)(v,{style:{position:`relative`,height:`200px`,background:`var(--wim-color-surface-subtle-alpha)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`,padding:`1rem`},children:[(0,E.jsxs)(y,{gap:`sm`,children:[(0,E.jsx)(h,{title:e(`audit:sample_progress_success`),description:e(`audit:sample_toast_profile_desc`),intent:`success`}),(0,E.jsx)(h,{title:e(`audit:sample_progress_error`),description:e(`audit:sample_toast_network_desc`),intent:`danger`})]}),(0,E.jsx)(v,{style:{position:`absolute`,bottom:`10px`,right:`10px`},children:(0,E.jsx)(h,{title:e(`audit:sample_toast_floating_title`),description:e(`audit:sample_toast_floating_desc`),intent:`info`})})]})}),(0,E.jsx)(w,{label:e(`audit:label_snackbar`),align:`stretch`,children:(0,E.jsx)(v,{style:{position:`relative`,height:`200px`,background:`var(--wim-color-surface-subtle-alpha)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`,padding:`1rem`},children:(0,E.jsxs)(y,{gap:`sm`,align:`center`,justify:`center`,h:`100%`,children:[(0,E.jsx)(d,{message:e(`audit:sample_snackbar_simple`),open:!0,intent:`info`,position:`bottom-center`}),(0,E.jsx)(d,{message:e(`audit:sample_snackbar_action`),open:!0,intent:`warning`,actionLabel:e(`audit:sample_action_undo`),position:`bottom-center`})]})})})]})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:feedback_family_title")}>
        {/* Intent Consistency */}
        <ComparisonGrid title={t("audit:feedback_intent_consistency")}>
          <ComponentGroup label={t("audit:label_alert")} align="stretch">
            <Stack gap="md">
              <Alert intent="info" title={t("audit:sample_alert_info_title")} description={t("audit:sample_alert_info_desc")} />
              <Alert intent="success" title={t("audit:sample_alert_success_title")} description={t("audit:sample_alert_success_desc")} />
              <Alert intent="warning" title={t("audit:sample_alert_warning_title")} description={t("audit:sample_alert_warning_desc")} />
              <Alert intent="danger" title={t("audit:sample_alert_error_title")} description={t("audit:sample_alert_error_desc")} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_banner")} align="stretch">
            <Stack gap="md">
              <Banner intent="info" description={t("audit:sample_banner_info")} />
              <Banner intent="warning" description={t("audit:sample_banner_warning")} />
              <Banner intent="danger" description={t("audit:sample_banner_error")} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Loading & Progress Indicators */}
        <ComparisonGrid title={t("audit:loading_progress_consistency")}>
          <ComponentGroup label={t("audit:label_spinner")} direction="row" align="center" gap="lg" wrap>
            <Stack align="center" gap="xs">
              <Spinner size="sm" />
              <Text size="xs">sm</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="md" />
              <Text size="xs">md</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="lg" />
              <Text size="xs">lg</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="xl" />
              <Text size="xs">xl</Text>
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress")} align="stretch">
            <Stack gap="md">
              <Progress value={30} label={t("audit:sample_progress_uploading")} showValue />
              <Progress value={60} intent="success" label={t("audit:sample_progress_success")} showValue />
              <Progress value={90} intent="danger" label={t("audit:sample_progress_error")} showValue />
              <Progress indeterminate label={t("audit:sample_progress_processing")} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress_ring")} direction="row" gap="xl" wrap>
            <ProgressRing value={30} showValue label={t("audit:sample_progress_uploading")} />
            <ProgressRing value={70} intent="success" showValue label={t("audit:sample_progress_success")} />
            <ProgressRing indeterminate label={t("audit:sample_progress_processing")} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_loader")} direction="row" gap="xl" wrap>
            <Stack align="center" gap="sm">
              <Loader variant="bars" />
              <Text size="xs">Bars</Text>
            </Stack>
            <Stack align="center" gap="sm">
              <Loader variant="dots" />
              <Text size="xs">Dots</Text>
            </Stack>
            <Stack align="center" gap="sm">
              <Loader variant="pulse" />
              <Text size="xs">Pulse</Text>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Overlay & Full-screen Feedback */}
        <ComparisonGrid title={t("audit:overlay_feedback_consistency")}>
          <ComponentGroup label={t("audit:label_loading_overlay")} align="stretch">
             <Box style={{
            position: "relative",
            height: "150px",
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden"
          }}>
                <Box p="md">
                  <Text>{t("audit:sample_overlay_blocked")}</Text>
                </Box>
                <LoadingOverlay visible message={t("audit:sample_progress_processing")} blur="sm" />
             </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_toast_batch")} align="stretch">
            <Stack gap="sm">
               <Toast title={t("audit:sample_toast_profile_title")} description={t("audit:sample_toast_profile_desc")} intent="success" />
               <Toast title={t("audit:sample_toast_network_title")} description={t("audit:sample_toast_network_desc")} intent="danger" />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Layout Consistency */}
        <ComparisonGrid title={t("audit:feedback_layout_consistency")}>
          <ComponentGroup label={t("audit:label_notification")} align="stretch">
            <Stack gap="md">
              <Notification intent="info" title={t("audit:sample_notif_update_title")} description={t("audit:sample_notif_update_desc")} />
              <Notification intent="success" title={t("audit:sample_notif_file_title")} description={t("audit:sample_notif_file_desc")} closable />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:sample_alert_unsaved_title")} align="stretch">
            <Alert intent="warning" title={t("audit:sample_alert_unsaved_title")} description={t("audit:sample_alert_unsaved_desc")} onClose={() => {}}>
              <Stack direction="row" gap="sm" mt="sm">
                <Button size="sm" variant="solid">{t("audit:sample_action_save")}</Button>
                <Button size="sm" variant="outline">{t("audit:sample_action_discard")}</Button>
              </Stack>
            </Alert>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Overlay Feedback Behavior */}
        <ComparisonGrid title={t("audit:feedback_overlay_behavior")}>
          <ComponentGroup label={t("audit:label_toast")} align="stretch">
            <Box style={{
            position: "relative",
            height: "200px",
            background: "var(--wim-color-surface-subtle-alpha)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden",
            padding: "1rem"
          }}>
              <Stack gap="sm">
                 <Toast title={t("audit:sample_progress_success")} description={t("audit:sample_toast_profile_desc")} intent="success" />
                 <Toast title={t("audit:sample_progress_error")} description={t("audit:sample_toast_network_desc")} intent="danger" />
              </Stack>
              <Box style={{
              position: "absolute",
              bottom: "10px",
              right: "10px"
            }}>
                 <Toast title={t("audit:sample_toast_floating_title")} description={t("audit:sample_toast_floating_desc")} intent="info" />
              </Box>
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_snackbar")} align="stretch">
             <Box style={{
            position: "relative",
            height: "200px",
            background: "var(--wim-color-surface-subtle-alpha)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden",
            padding: "1rem"
          }}>
                <Stack gap="sm" align="center" justify="center" h="100%">
                   <Snackbar message={t("audit:sample_snackbar_simple")} open intent="info" position="bottom-center" />
                   <Snackbar message={t("audit:sample_snackbar_action")} open intent="warning" actionLabel={t("audit:sample_action_undo")} position="bottom-center" />
                </Stack>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Overview`]}))();export{O as Overview,k as __namedExportsOrder,D as default};