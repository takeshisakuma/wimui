import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Dropzone,
  SignaturePad,
  ImageCropper,
  RichTextEditor,
  ContextMenu,
  InteractiveArea,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/InteractionFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:interaction_family_title")}>
        {/* Surface Comparison */}
        <ComparisonGrid title={t("audit:label_surface_comparison")}>
          <ComponentGroup label={t("audit:label_dropzone")}>
            <Dropzone />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_signature_pad")}>
            <SignaturePad width={800} height={300} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_image_cropper")}>
            <Box style={{ height: "400px", position: "relative", background: "var(--wim-color-bg-subtle)", borderRadius: "var(--wim-radius-md)", overflow: "hidden" }}>
               <ImageCropper
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop"
                aspectRatio={16 / 9}
              />
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_rich_text_editor")}>
            <RichTextEditor placeholder="Project title" minHeight={200} fullWidth />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_context_menu")}>
            <ContextMenu
              menu={
                <>
                  <ContextMenu.Item>Action 1</ContextMenu.Item>
                  <ContextMenu.Item>Action 2</ContextMenu.Item>
                  <ContextMenu.Divider />
                  <ContextMenu.Item danger>Delete</ContextMenu.Item>
                </>
              }
            >
              <Box
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px dashed var(--wim-color-border)",
                  borderRadius: "var(--wim-radius-md)",
                  cursor: "context-menu",
                  background: "var(--wim-color-bg-surface)",
                  width: "100%",
                }}
              >
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
           <Text color="text-secondary" size="sm" style={{ marginBottom: "var(--wim-spacing-md)" }}>
            {t("audit:label_border_style_check")}
          </Text>
          <Stack gap="lg">
            <Stack direction="row" gap="md" align="start">
               <Box p="md" radius="md" style={{ border: "2px dashed var(--wim-color-primary)", flex: 1 }}>
                  <Text size="sm" weight="bold" color="primary">{t("audit:interaction_dashed_title")}</Text>
                  <Text size="xs" color="text-secondary">{t("audit:interaction_dashed_desc")}</Text>
               </Box>
               <Box p="md" radius="md" style={{ border: "1px solid var(--wim-color-border)", flex: 1 }}>
                  <Text size="sm" weight="bold">{t("audit:interaction_solid_title")}</Text>
                  <Text size="xs" color="text-secondary">{t("audit:interaction_solid_desc")}</Text>
               </Box>
            </Stack>
          </Stack>
        </Box>
      </AuditPage>
    );
  },
};
