import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Skeleton,
  Spinner,
  Loader,
  LoadingOverlay,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/SkeletonFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const sizes = ["sm", "md", "lg", "xl"] as const;
    const colors = ["primary", "secondary", "success", "warning", "error", "neutral"] as const;
    const loaderVariants = ["bars", "dots", "pulse"] as const;
    const skeletonAnimations = ["pulse", "wave", "none"] as const;

    return (
      <AuditPage title={t("audit:skeleton_family_title")}>
        {/* Skeleton Radius Check */}
        <ComparisonGrid title={t("audit:skeleton_radius_check")}>
          <ComponentGroup label={`${t("audit:label_skeleton")} — text (radius-sm)`}>
            <Stack gap="xs" style={{ maxWidth: "400px" }}>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_skeleton")} — rect (radius-sm)`}>
            <Stack direction="row" gap="md" wrap>
              <Skeleton variant="rect" width={120} height={80} />
              <Skeleton variant="rect" width={200} height={40} />
              <Skeleton variant="rect" width={80} height={80} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_skeleton")} — circle (radius-full)`}>
            <Stack direction="row" gap="md" wrap>
              <Skeleton variant="circle" width={32} height={32} />
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="circle" width={56} height={56} />
              <Skeleton variant="circle" width={80} height={80} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:skeleton_radius_card_mock")}>
            <Stack gap="md" style={{ maxWidth: "320px" }}>
              <Stack direction="row" gap="md" align="center">
                <Skeleton variant="circle" width={40} height={40} />
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </Stack>
              </Stack>
              <Skeleton variant="rect" width="100%" height={160} />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="75%" />
              <Skeleton variant="text" width="50%" />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Animation Sync */}
        <ComparisonGrid title={t("audit:skeleton_animation_sync")}>
          {skeletonAnimations.map((animation) => (
            <ComponentGroup
              key={animation}
              label={`${t("audit:label_skeleton")} — animation: ${animation}`}
            >
              <Stack gap="xs" style={{ maxWidth: "400px" }}>
                <Skeleton variant="text" animation={animation} width="100%" />
                <Skeleton variant="text" animation={animation} width="80%" />
                <Skeleton variant="rect" animation={animation} width="100%" height={60} />
              </Stack>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Color & Size Sync: Spinner */}
        <ComparisonGrid title={t("audit:skeleton_color_size_sync")}>
          <ComponentGroup label={`${t("audit:label_spinner")} — ${t("audit:size_comparison")}`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {sizes.map((size) => (
                <Stack key={size} gap="xs" align="center">
                  <Spinner size={size} />
                  <Text size="xs" color="text-secondary">{size}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_spinner")} — ${t("audit:intent_comparison")}`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {colors.map((color) => (
                <Stack key={color} gap="xs" align="center">
                  <Spinner color={color} />
                  <Text size="xs" color="text-secondary">{color}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_spinner")} — label (right / bottom)`}>
            <Stack direction="row" gap="xl" align="start" wrap>
              <Spinner label={t("audit:demo_loading")} labelPosition="right" />
              <Spinner label={t("audit:demo_loading")} labelPosition="bottom" />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loader")} — ${t("audit:variant_comparison")}`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {loaderVariants.map((variant) => (
                <Stack key={variant} gap="xs" align="center">
                  <Loader variant={variant} />
                  <Text size="xs" color="text-secondary">{variant}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loader")} — ${t("audit:size_comparison")}`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {sizes.filter((s) => s !== "xl").map((size) => (
                <Stack key={size} gap="xs" align="center">
                  <Loader size={size} />
                  <Text size="xs" color="text-secondary">{size}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loader")} — ${t("audit:intent_comparison")}`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {colors.map((color) => (
                <Stack key={color} gap="xs" align="center">
                  <Loader color={color} />
                  <Text size="xs" color="text-secondary">{color}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* LoadingOverlay Variants */}
        <ComparisonGrid title={t("audit:skeleton_overlay_variants")}>
          <ComponentGroup label={`${t("audit:label_loading_overlay")} — backdropVariant: dark / light`}>
            <Stack direction="row" gap="lg" wrap>
              {(["dark", "light"] as const).map((variant) => (
                <Stack key={variant} gap="xs" align="center">
                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "120px",
                      borderRadius: "var(--wim-radius-md)",
                      border: "1px solid var(--wim-color-border)",
                      overflow: "hidden",
                      background: "var(--wim-color-surface)",
                    }}
                  >
                    <Box p="md">
                      <Text size="sm">{t("audit:skeleton_content_underneath")}</Text>
                    </Box>
                    <LoadingOverlay visible backdropVariant={variant} loaderSize="md" />
                  </div>
                  <Text size="xs" color="text-secondary">{variant}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loading_overlay")} — blur: none / sm / md / lg`}>
            <Stack direction="row" gap="lg" wrap>
              {(["none", "sm", "md", "lg"] as const).map((blur) => (
                <Stack key={blur} gap="xs" align="center">
                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "120px",
                      borderRadius: "var(--wim-radius-md)",
                      border: "1px solid var(--wim-color-border)",
                      overflow: "hidden",
                      background: "var(--wim-color-surface)",
                    }}
                  >
                    <Stack p="md" gap="xs">
                      <Skeleton variant="text" width="80%" />
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="rect" width="100%" height={40} />
                    </Stack>
                    <LoadingOverlay visible blur={blur} loaderSize="md" />
                  </div>
                  <Text size="xs" color="text-secondary">blur: {blur}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loading_overlay")} — loaderType comparison`}>
            <Stack direction="row" gap="lg" wrap>
              {(["spinner", "bars", "dots", "pulse"] as const).map((loaderType) => (
                <Stack key={loaderType} gap="xs" align="center">
                  <div
                    style={{
                      position: "relative",
                      width: "160px",
                      height: "100px",
                      borderRadius: "var(--wim-radius-md)",
                      border: "1px solid var(--wim-color-border)",
                      overflow: "hidden",
                      background: "var(--wim-color-surface)",
                    }}
                  >
                    <LoadingOverlay visible loaderType={loaderType} loaderSize="sm" />
                  </div>
                  <Text size="xs" color="text-secondary">{loaderType}</Text>
                </Stack>
              ))}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={`${t("audit:label_loading_overlay")} — with message`}>
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "160px",
                borderRadius: "var(--wim-radius-md)",
                border: "1px solid var(--wim-color-border)",
                overflow: "hidden",
                background: "var(--wim-color-surface)",
              }}
            >
              <LoadingOverlay
                visible
                loaderType="spinner"
                loaderSize="lg"
                message="Uploading files... Please wait."
                blur="md"
              />
            </div>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
