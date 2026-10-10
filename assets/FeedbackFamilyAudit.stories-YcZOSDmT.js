"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-BNJo1pMu.js";import{n as l,t as u}from"./Stack-CrCPoxQ1.js";import{n as d,t as f}from"./Button-DSrkNfg0.js";import{n as p,t as m}from"./Text-1X1ZsZfu.js";import{n as h,t as g}from"./Alert-ClaCXHH4.js";import{n as _,t as v}from"./Banner-hyI6Uusf.js";import{n as y,t as b}from"./Loader-HcY4ecJL.js";import{n as x,t as S}from"./Spinner-q4VB1Pzw.js";import{n as C,t as w}from"./LoadingOverlay-C4Vz_WYG.js";import{n as T,t as E}from"./Notification-sfRmTvbE.js";import{n as D,t as O}from"./Progress-C0zI57n2.js";import{n as k,t as A}from"./Snackbar-Dxh2aWyA.js";import{r as j,t as M}from"./Toast-D1avuacN.js";import{n as N,t as P}from"./ProgressRing-CYQOfEfQ.js";import{i as F,n as I,r as L,t as R}from"./AuditUtils-DQd41XyN.js";var z,B,V,H;function U(){return(U=e((()=>{t(),r(),i(),h(),_(),T(),j(),k(),l(),s(),d(),D(),N(),x(),y(),C(),p(),F(),z=o(),B={title:`Audit/FeedbackFamily`,parameters:{layout:`fullscreen`}},V={render:()=>{let{t:e}=n([...a,`audit`]);return(0,z.jsxs)(R,{title:e(`audit:feedback_family_title`),children:[(0,z.jsxs)(I,{title:e(`audit:feedback_intent_consistency`),children:[(0,z.jsx)(L,{label:e(`audit:label_alert`),align:`stretch`,children:(0,z.jsxs)(u,{gap:`md`,children:[(0,z.jsx)(g,{intent:`info`,title:e(`audit:sample_alert_info_title`),description:e(`audit:sample_alert_info_desc`)}),(0,z.jsx)(g,{intent:`success`,title:e(`audit:sample_alert_success_title`),description:e(`audit:sample_alert_success_desc`)}),(0,z.jsx)(g,{intent:`warning`,title:e(`audit:sample_alert_warning_title`),description:e(`audit:sample_alert_warning_desc`)}),(0,z.jsx)(g,{intent:`danger`,title:e(`audit:sample_alert_error_title`),description:e(`audit:sample_alert_error_desc`)})]})}),(0,z.jsx)(L,{label:e(`audit:label_banner`),align:`stretch`,children:(0,z.jsxs)(u,{gap:`md`,children:[(0,z.jsx)(v,{intent:`info`,description:e(`audit:sample_banner_info`)}),(0,z.jsx)(v,{intent:`warning`,description:e(`audit:sample_banner_warning`)}),(0,z.jsx)(v,{intent:`danger`,description:e(`audit:sample_banner_error`)})]})})]}),(0,z.jsxs)(I,{title:e(`audit:loading_progress_consistency`),children:[(0,z.jsxs)(L,{label:e(`audit:label_spinner`),direction:`row`,align:`center`,gap:`lg`,wrap:!0,children:[(0,z.jsxs)(u,{align:`center`,gap:`xs`,children:[(0,z.jsx)(S,{size:`sm`}),(0,z.jsx)(m,{size:`xs`,children:`sm`})]}),(0,z.jsxs)(u,{align:`center`,gap:`xs`,children:[(0,z.jsx)(S,{size:`md`}),(0,z.jsx)(m,{size:`xs`,children:`md`})]}),(0,z.jsxs)(u,{align:`center`,gap:`xs`,children:[(0,z.jsx)(S,{size:`lg`}),(0,z.jsx)(m,{size:`xs`,children:`lg`})]}),(0,z.jsxs)(u,{align:`center`,gap:`xs`,children:[(0,z.jsx)(S,{size:`xl`}),(0,z.jsx)(m,{size:`xs`,children:`xl`})]})]}),(0,z.jsx)(L,{label:e(`audit:label_progress`),align:`stretch`,children:(0,z.jsxs)(u,{gap:`md`,children:[(0,z.jsx)(O,{value:30,label:e(`audit:sample_progress_uploading`),showValue:!0}),(0,z.jsx)(O,{value:60,intent:`success`,label:e(`audit:sample_progress_success`),showValue:!0}),(0,z.jsx)(O,{value:90,intent:`danger`,label:e(`audit:sample_progress_error`),showValue:!0}),(0,z.jsx)(O,{indeterminate:!0,label:e(`audit:sample_progress_processing`)})]})}),(0,z.jsxs)(L,{label:e(`audit:label_progress_ring`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,z.jsx)(P,{value:30,showValue:!0,label:e(`audit:sample_progress_uploading`)}),(0,z.jsx)(P,{value:70,intent:`success`,showValue:!0,label:e(`audit:sample_progress_success`)}),(0,z.jsx)(P,{indeterminate:!0,label:e(`audit:sample_progress_processing`)})]}),(0,z.jsxs)(L,{label:e(`audit:label_loader`),direction:`row`,gap:`xl`,wrap:!0,children:[(0,z.jsxs)(u,{align:`center`,gap:`sm`,children:[(0,z.jsx)(b,{variant:`bars`}),(0,z.jsx)(m,{size:`xs`,children:`Bars`})]}),(0,z.jsxs)(u,{align:`center`,gap:`sm`,children:[(0,z.jsx)(b,{variant:`dots`}),(0,z.jsx)(m,{size:`xs`,children:`Dots`})]}),(0,z.jsxs)(u,{align:`center`,gap:`sm`,children:[(0,z.jsx)(b,{variant:`pulse`}),(0,z.jsx)(m,{size:`xs`,children:`Pulse`})]})]})]}),(0,z.jsxs)(I,{title:e(`audit:overlay_feedback_consistency`),children:[(0,z.jsx)(L,{label:e(`audit:label_loading_overlay`),align:`stretch`,children:(0,z.jsxs)(c,{style:{position:`relative`,height:`150px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:[(0,z.jsx)(c,{p:`md`,children:(0,z.jsx)(m,{children:e(`audit:sample_overlay_blocked`)})}),(0,z.jsx)(w,{visible:!0,message:e(`audit:sample_progress_processing`),blur:`sm`})]})}),(0,z.jsx)(L,{label:e(`audit:label_toast_batch`),align:`stretch`,children:(0,z.jsxs)(u,{gap:`sm`,children:[(0,z.jsx)(M,{title:e(`audit:sample_toast_profile_title`),description:e(`audit:sample_toast_profile_desc`),intent:`success`}),(0,z.jsx)(M,{title:e(`audit:sample_toast_network_title`),description:e(`audit:sample_toast_network_desc`),intent:`danger`})]})})]}),(0,z.jsxs)(I,{title:e(`audit:feedback_layout_consistency`),children:[(0,z.jsx)(L,{label:e(`audit:label_notification`),align:`stretch`,children:(0,z.jsxs)(u,{gap:`md`,children:[(0,z.jsx)(E,{intent:`info`,title:e(`audit:sample_notif_update_title`),description:e(`audit:sample_notif_update_desc`)}),(0,z.jsx)(E,{intent:`success`,title:e(`audit:sample_notif_file_title`),description:e(`audit:sample_notif_file_desc`),closable:!0})]})}),(0,z.jsx)(L,{label:e(`audit:sample_alert_unsaved_title`),align:`stretch`,children:(0,z.jsx)(g,{intent:`warning`,title:e(`audit:sample_alert_unsaved_title`),description:e(`audit:sample_alert_unsaved_desc`),onClose:()=>{},children:(0,z.jsxs)(u,{direction:`row`,gap:`sm`,mt:`sm`,children:[(0,z.jsx)(f,{size:`sm`,variant:`solid`,children:e(`audit:sample_action_save`)}),(0,z.jsx)(f,{size:`sm`,variant:`outline`,children:e(`audit:sample_action_discard`)})]})})})]}),(0,z.jsxs)(I,{title:e(`audit:feedback_overlay_behavior`),children:[(0,z.jsx)(L,{label:e(`audit:label_toast`),align:`stretch`,children:(0,z.jsxs)(c,{style:{position:`relative`,height:`200px`,background:`var(--wim-color-surface-subtle-alpha)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`,padding:`1rem`},children:[(0,z.jsxs)(u,{gap:`sm`,children:[(0,z.jsx)(M,{title:e(`audit:sample_progress_success`),description:e(`audit:sample_toast_profile_desc`),intent:`success`}),(0,z.jsx)(M,{title:e(`audit:sample_progress_error`),description:e(`audit:sample_toast_network_desc`),intent:`danger`})]}),(0,z.jsx)(c,{style:{position:`absolute`,bottom:`10px`,right:`10px`},children:(0,z.jsx)(M,{title:e(`audit:sample_toast_floating_title`),description:e(`audit:sample_toast_floating_desc`),intent:`info`})})]})}),(0,z.jsx)(L,{label:e(`audit:label_snackbar`),align:`stretch`,children:(0,z.jsx)(c,{style:{position:`relative`,height:`200px`,background:`var(--wim-color-surface-subtle-alpha)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`,padding:`1rem`},children:(0,z.jsxs)(u,{gap:`sm`,align:`center`,justify:`center`,h:`100%`,children:[(0,z.jsx)(A,{message:e(`audit:sample_snackbar_simple`),open:!0,intent:`info`,position:`bottom-center`}),(0,z.jsx)(A,{message:e(`audit:sample_snackbar_action`),open:!0,intent:`warning`,actionLabel:e(`audit:sample_action_undo`),position:`bottom-center`})]})})})]})]})}},H=[`Overview`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Overview,H as __namedExportsOrder,B as default};