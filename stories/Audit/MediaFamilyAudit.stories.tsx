import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Avatar,
  AvatarGroup,
  Image,
  Carousel,
  AspectRatio,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/MediaFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const sampleImages = [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&auto=format&fit=crop&q=60",
    ];

    return (
      <AuditPage 
        title={t("audit:media_family_title")} 
        description={t("audit:media_family_description")} 
      >
        {/* Placeholder Tone Check */}
        <ComparisonGrid title={t("audit:media_placeholder_tone_check")}>
          <ComponentGroup label={`${t("audit:label_avatar")} — fallbacks`}>
            <Stack direction="row" gap="md" align="center">
              <Avatar initials="JD" />
              <Avatar src="invalid-url" alt={t("audit:media_alt_broken")} />
              <Avatar initials="AI" intent="primary" />
              <Avatar initials="ER" intent="error" />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_image")} — loading & fallback behavior`}>
            <Stack direction="row" gap="lg" align="start">
              <Box style={{ width: "200px" }}>
                <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:media_loading_state")}</Text>
                <Image 
                  src={sampleImages[0]} 
                  alt={t("audit:media_alt_delayed")} 
                  demoDelay={3000}
                  fadeIn
                  height={120}
                />
              </Box>
              <Box style={{ width: "200px" }}>
                <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:media_broken_src")}</Text>
                <Image 
                  src="invalid-path" 
                  alt={t("audit:media_alt_broken")} 
                  height={120}
                />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Image Radius Rules */}
        <ComparisonGrid title={t("audit:media_image_radius_check")}>
          <Stack direction="row" gap="lg" wrap>
            {(["none", "sm", "md", "lg", "full"] as const).map((r) => (
              <ComponentGroup key={r} label={`radius: ${r}`} width="fit-content">
                <Image 
                  src={sampleImages[0]} 
                  alt={r} 
                  width={100} 
                  height={100} 
                  radius={r} 
                />
              </ComponentGroup>
            ))}
          </Stack>
        </ComparisonGrid>

        {/* AvatarGroup Overlap & Border */}
        <ComparisonGrid title={t("audit:media_avatar_group_overlap")}>
          <ComponentGroup label={`${t("audit:label_avatar_group")} — overlap, border & background contrast`}>
            <Stack gap="xl">
              <Stack direction="row" gap="xl" align="center" wrap>
                <Box>
                  <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("common.small")}</Text>
                  <AvatarGroup size="sm">
                    <Avatar initials="A" />
                    <Avatar initials="B" />
                    <Avatar initials="C" />
                    <Avatar initials="D" />
                  </AvatarGroup>
                </Box>
                <Box>
                  <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:media_medium_standard")}</Text>
                  <AvatarGroup size="md">
                    <Avatar src={sampleImages[0]} />
                    <Avatar src={sampleImages[1]} />
                    <Avatar src={sampleImages[2]} />
                  </AvatarGroup>
                </Box>
                <Box>
                  <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("common.large")}</Text>
                  <AvatarGroup size="lg" max={3} total={10}>
                    <Avatar initials="U1" />
                    <Avatar initials="U2" />
                    <Avatar initials="U3" />
                  </AvatarGroup>
                </Box>
              </Stack>
              
              <Box p="lg" bg="bg-app" radius="md" style={{ border: "1px solid var(--wim-color-border)" }}>
                 <Text size="xs" color="text-secondary" style={{ marginBottom: "var(--wim-spacing-md)" }}>{t("audit:media_dark_surface")}</Text>
                 <AvatarGroup size="md">
                    <Avatar src={sampleImages[0]} />
                    <Avatar src={sampleImages[1]} />
                    <Avatar src={sampleImages[2]} />
                    <Avatar initials="+5" />
                 </AvatarGroup>
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Other Media Components */}
        <ComparisonGrid title={t("audit:media_other_components")}>
          <Stack direction="row" gap="xl" wrap align="start">
            <ComponentGroup label={t("audit:label_aspect_ratio")} width="fit-content">
              <Box style={{ width: "240px" }}>
                <AspectRatio ratio={16 / 9}>
                  <Image src={sampleImages[1]} alt="16:9" radius="md" />
                </AspectRatio>
              </Box>
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_carousel")} width="fit-content">
              <Box style={{ width: "400px" }}>
                <Carousel showIndicators showControls loop>
                  {sampleImages.map((src, i) => (
                    <Image key={i} src={src} alt={`Slide ${i}`} height={200} radius="md" />
                  ))}
                </Carousel>
              </Box>
            </ComponentGroup>
          </Stack>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
