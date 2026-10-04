"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-lSx-_C-t.js";import{n as l,t as u}from"./InteractiveArea-Bj01wV8b.js";import{n as d,t as f}from"./Stack-D0pTsuU-.js";import{n as p,t as m}from"./Text-8oARqUeB.js";import{n as h,t as g}from"./Dropzone-BaSF-RDe.js";import{n as _,t as v}from"./SignaturePad-BO2ws4xo.js";import{n as y,t as b}from"./ImageCropper-nG8ZlQcM.js";import{a as x,t as S}from"./ContextMenu-BsGZGJin.js";import{i as C,n as w,r as T,t as E}from"./AuditUtils-DcuduY3M.js";import{n as D,t as O}from"./RichTextEditor-YUN0YaIt.js";import{n as k,t as A}from"./scene_wide-BjsOzZcP.js";var j,M,N,P;function F(){return(F=e((()=>{t(),r(),i(),h(),_(),y(),x(),l(),d(),p(),s(),D(),j=o(),C(),A(),M={title:`Audit/InteractionFamily`,parameters:{layout:`fullscreen`}},N={render:()=>{let{t:e}=n([...a,`audit`]);return(0,j.jsxs)(E,{title:e(`audit:interaction_family_title`),children:[(0,j.jsxs)(w,{title:e(`audit:label_surface_comparison`),children:[(0,j.jsx)(T,{label:e(`audit:label_dropzone`),children:(0,j.jsx)(g,{})}),(0,j.jsx)(T,{label:e(`audit:label_signature_pad`),children:(0,j.jsx)(v,{width:800,height:300})}),(0,j.jsx)(T,{label:e(`audit:label_image_cropper`),children:(0,j.jsx)(c,{style:{height:`400px`,position:`relative`,background:`var(--wim-color-surface-subtle)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:(0,j.jsx)(b,{src:k,aspectRatio:16/9})})}),(0,j.jsx)(T,{label:e(`audit:label_rich_text_editor`),children:(0,j.jsx)(O,{placeholder:e(`audit:interaction_placeholder_project`),minHeight:200,fullWidth:!0})}),(0,j.jsx)(T,{label:e(`audit:label_context_menu`),children:(0,j.jsx)(S,{menu:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Item,{children:`Action 1`}),(0,j.jsx)(S.Item,{children:`Action 2`}),(0,j.jsx)(S.Divider,{}),(0,j.jsx)(S.Item,{danger:!0,children:`Delete`})]}),children:(0,j.jsx)(c,{style:{height:`150px`,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`2px dashed var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,cursor:`context-menu`,background:`var(--wim-color-surface)`,width:`100%`},children:(0,j.jsx)(m,{color:`text-secondary`,children:e(`audit:interaction_context_trigger`)})})})})]}),(0,j.jsxs)(w,{title:e(`audit:label_surface_comparison`)+` (InteractiveArea)`,children:[(0,j.jsx)(T,{label:e(`audit:interaction_dashed_default`),children:(0,j.jsx)(u,{variant:`dashed`,description:e(`audit:interaction_dashed_surface`)})}),(0,j.jsx)(T,{label:e(`audit:interaction_solid_label`),children:(0,j.jsx)(u,{variant:`solid`,description:e(`audit:interaction_solid_surface`)})}),(0,j.jsx)(T,{label:e(`audit:interaction_muted_bg`),children:(0,j.jsx)(u,{variant:`dashed`,bgVariant:`muted`,description:e(`audit:interaction_muted_surface`)})}),(0,j.jsx)(T,{label:e(`audit:interaction_dragging`),children:(0,j.jsx)(u,{variant:`dashed`,isDragging:!0,description:e(`audit:interaction_dragging_desc`)})})]}),(0,j.jsxs)(c,{m:`lg`,children:[(0,j.jsx)(m,{color:`text-secondary`,size:`sm`,style:{marginBottom:`var(--wim-spacing-md)`},children:e(`audit:label_border_style_check`)}),(0,j.jsx)(f,{gap:`lg`,children:(0,j.jsxs)(f,{direction:`row`,gap:`md`,align:`start`,children:[(0,j.jsxs)(c,{p:`md`,radius:`md`,style:{border:`2px dashed var(--wim-color-primary)`,flex:1},children:[(0,j.jsx)(m,{size:`sm`,weight:`bold`,color:`primary`,children:e(`audit:interaction_dashed_title`)}),(0,j.jsx)(m,{size:`xs`,color:`text-secondary`,children:e(`audit:interaction_dashed_desc`)})]}),(0,j.jsxs)(c,{p:`md`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`,flex:1},children:[(0,j.jsx)(m,{size:`sm`,weight:`bold`,children:e(`audit:interaction_solid_title`)}),(0,j.jsx)(m,{size:`xs`,color:`text-secondary`,children:e(`audit:interaction_solid_desc`)})]})]})})]})]})}},P=[`Overview`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}}})))()}F();export{N as Overview,P as __namedExportsOrder,M as default};