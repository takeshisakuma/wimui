"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{Gr as s,L as c,cr as l,t as u,vr as d,xi as f}from"./src-Ssuy8lr7.js";import{t as p}from"./Box--bAE-pUN.js";import{t as m}from"./Stack-CC3QEopK.js";import{t as h}from"./Text-DzblcqZm.js";import{t as g}from"./ImageCropper-CIOqgjbD.js";import{i as _,n as v,r as y,t as b}from"./AuditUtils-Cal9MsZq.js";import{n as x,t as S}from"./scene_wide-D9LdrP9R.js";var C,w,T,E;e((()=>{t(),a(),r(),u(),C=i(),_(),S(),w={title:`Audit/InteractionFamily`,parameters:{layout:`fullscreen`}},T={render:()=>{let{t:e}=n([...o,`audit`]);return(0,C.jsxs)(b,{title:e(`audit:interaction_family_title`),children:[(0,C.jsxs)(v,{title:e(`audit:label_surface_comparison`),children:[(0,C.jsx)(y,{label:e(`audit:label_dropzone`),children:(0,C.jsx)(s,{})}),(0,C.jsx)(y,{label:e(`audit:label_signature_pad`),children:(0,C.jsx)(l,{width:800,height:300})}),(0,C.jsx)(y,{label:e(`audit:label_image_cropper`),children:(0,C.jsx)(p,{style:{height:`400px`,position:`relative`,background:`var(--wim-color-surface-subtle)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:(0,C.jsx)(g,{src:x,aspectRatio:16/9})})}),(0,C.jsx)(y,{label:e(`audit:label_rich_text_editor`),children:(0,C.jsx)(d,{placeholder:e(`audit:interaction_placeholder_project`),minHeight:200,fullWidth:!0})}),(0,C.jsx)(y,{label:e(`audit:label_context_menu`),children:(0,C.jsx)(c,{menu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c.Item,{children:`Action 1`}),(0,C.jsx)(c.Item,{children:`Action 2`}),(0,C.jsx)(c.Divider,{}),(0,C.jsx)(c.Item,{danger:!0,children:`Delete`})]}),children:(0,C.jsx)(p,{style:{height:`150px`,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`2px dashed var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,cursor:`context-menu`,background:`var(--wim-color-surface)`,width:`100%`},children:(0,C.jsx)(h,{color:`text-secondary`,children:e(`audit:interaction_context_trigger`)})})})})]}),(0,C.jsxs)(v,{title:e(`audit:label_surface_comparison`)+` (InteractiveArea)`,children:[(0,C.jsx)(y,{label:e(`audit:interaction_dashed_default`),children:(0,C.jsx)(f,{variant:`dashed`,description:e(`audit:interaction_dashed_surface`)})}),(0,C.jsx)(y,{label:e(`audit:interaction_solid_label`),children:(0,C.jsx)(f,{variant:`solid`,description:e(`audit:interaction_solid_surface`)})}),(0,C.jsx)(y,{label:e(`audit:interaction_muted_bg`),children:(0,C.jsx)(f,{variant:`dashed`,bgVariant:`muted`,description:e(`audit:interaction_muted_surface`)})}),(0,C.jsx)(y,{label:e(`audit:interaction_dragging`),children:(0,C.jsx)(f,{variant:`dashed`,isDragging:!0,description:e(`audit:interaction_dragging_desc`)})})]}),(0,C.jsxs)(p,{m:`lg`,children:[(0,C.jsx)(h,{color:`text-secondary`,size:`sm`,style:{marginBottom:`var(--wim-spacing-md)`},children:e(`audit:label_border_style_check`)}),(0,C.jsx)(m,{gap:`lg`,children:(0,C.jsxs)(m,{direction:`row`,gap:`md`,align:`start`,children:[(0,C.jsxs)(p,{p:`md`,radius:`md`,style:{border:`2px dashed var(--wim-color-primary)`,flex:1},children:[(0,C.jsx)(h,{size:`sm`,weight:`bold`,color:`primary`,children:e(`audit:interaction_dashed_title`)}),(0,C.jsx)(h,{size:`xs`,color:`text-secondary`,children:e(`audit:interaction_dashed_desc`)})]}),(0,C.jsxs)(p,{p:`md`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`,flex:1},children:[(0,C.jsx)(h,{size:`sm`,weight:`bold`,children:e(`audit:interaction_solid_title`)}),(0,C.jsx)(h,{size:`xs`,color:`text-secondary`,children:e(`audit:interaction_solid_desc`)})]})]})})]})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:interaction_family_title")}>
        {/* Surface Comparison */}
        <ComparisonGrid title={t("audit:label_surface_comparison")}>
          <ComponentGroup label={t("audit:label_dropzone")}>
            <Dropzone />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_signature_pad")}>
            <SignaturePad width={800} height={300} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_image_cropper")}>
            <Box style={{
            height: "400px",
            position: "relative",
            background: "var(--wim-color-surface-subtle)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden"
          }}>
               <ImageCropper src={sceneWide} aspectRatio={16 / 9} />
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_rich_text_editor")}>
            <RichTextEditor placeholder={t("audit:interaction_placeholder_project")} minHeight={200} fullWidth />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_context_menu")}>
            <ContextMenu menu={<>
                  <ContextMenu.Item>Action 1</ContextMenu.Item>
                  <ContextMenu.Item>Action 2</ContextMenu.Item>
                  <ContextMenu.Divider />
                  <ContextMenu.Item danger>Delete</ContextMenu.Item>
                </>}>
              <Box style={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed var(--wim-color-border)",
              borderRadius: "var(--wim-radius-md)",
              cursor: "context-menu",
              background: "var(--wim-color-surface)",
              width: "100%"
            }}>
                <Text color="text-secondary">{t("audit:interaction_context_trigger")}</Text>
              </Box>
            </ContextMenu>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Core Surface Comparison (InteractiveArea) */}
        <ComparisonGrid title={t("audit:label_surface_comparison") + " (InteractiveArea)"}>
          <ComponentGroup label={t("audit:interaction_dashed_default")}>
            <InteractiveArea variant="dashed" description={t("audit:interaction_dashed_surface")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:interaction_solid_label")}>
            <InteractiveArea variant="solid" description={t("audit:interaction_solid_surface")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:interaction_muted_bg")}>
            <InteractiveArea variant="dashed" bgVariant="muted" description={t("audit:interaction_muted_surface")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:interaction_dragging")}>
            <InteractiveArea variant="dashed" isDragging description={t("audit:interaction_dragging_desc")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Border and Active States Audit */}
        <Box m="lg">
           <Text color="text-secondary" size="sm" style={{
          marginBottom: "var(--wim-spacing-md)"
        }}>
            {t("audit:label_border_style_check")}
          </Text>
          <Stack gap="lg">
            <Stack direction="row" gap="md" align="start">
               <Box p="md" radius="md" style={{
              border: "2px dashed var(--wim-color-primary)",
              flex: 1
            }}>
                  <Text size="sm" weight="bold" color="primary">{t("audit:interaction_dashed_title")}</Text>
                  <Text size="xs" color="text-secondary">{t("audit:interaction_dashed_desc")}</Text>
               </Box>
               <Box p="md" radius="md" style={{
              border: "1px solid var(--wim-color-border)",
              flex: 1
            }}>
                  <Text size="sm" weight="bold">{t("audit:interaction_solid_title")}</Text>
                  <Text size="xs" color="text-secondary">{t("audit:interaction_solid_desc")}</Text>
               </Box>
            </Stack>
          </Stack>
        </Box>
      </AuditPage>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Overview`]}))();export{T as Overview,E as __namedExportsOrder,w as default};