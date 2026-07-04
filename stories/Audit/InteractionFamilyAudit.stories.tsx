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
                <Text color="text-secondary">Right click here (Full Width Trigger Area)</Text>
              </Box>
            </ContextMenu>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Core Surface Comparison (InteractiveArea) */}
        <ComparisonGrid title={t("audit:label_surface_comparison") + " (InteractiveArea)"}>
          <ComponentGroup label="Dashed (Default)">
            <InteractiveArea variant="dashed" description="Default dashed surface" />
          </ComponentGroup>
          <ComponentGroup label="Solid">
            <InteractiveArea variant="solid" description="Solid border surface" />
          </ComponentGroup>
          <ComponentGroup label="Muted Background">
            <InteractiveArea variant="dashed" bgVariant="muted" description="Muted background surface" />
          </ComponentGroup>
          <ComponentGroup label="Dragging State">
            <InteractiveArea variant="dashed" isDragging description="Currently dragging..." />
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
                  <Text size="sm" weight="bold" color="primary">Primary Dashed (Dropzone Style)</Text>
                  <Text size="xs" color="text-secondary">Ensuring consistent dash gaps and weights.</Text>
               </Box>
               <Box p="md" radius="md" style={{ border: "1px solid var(--wim-color-border)", flex: 1 }}>
                  <Text size="sm" weight="bold">Standard Solid (Editor Style)</Text>
                  <Text size="xs" color="text-secondary">Comparing with standard input borders.</Text>
               </Box>
            </Stack>
          </Stack>
        </Box>
      </AuditPage>
    );
  },
};
