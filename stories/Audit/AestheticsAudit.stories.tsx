import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Card,
  Skeleton,
  Stack,
  Box,
  Text,
  Title,
  Grid,
  Header,
  Button,
  Avatar,
  Group,
  Flex
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/Aesthetics",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Glassmorphism: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:aesthetics_audit_title")}>
        {/* Glassmorphism Levels */}
        <ComparisonGrid title={t("audit:glass_tokenization_variants")}>
          <ComponentGroup label={t("audit:glass_levels_label")} align="stretch">
            <Box style={{ 
              backgroundImage: "linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, #fff 25%, #fff 75%, #f3f4f6 75%, #f3f4f6)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
              padding: "2rem",
              borderRadius: "var(--wim-radius-lg)"
            }}>
              <Stack gap="xl">
                <Card variant="glass" padding="md" style={{ backdropFilter: "blur(var(--wim-blur-sm))" }}>
                  <Title tag="h4" size="md">Glass Sm (Blur 8px)</Title>
                  <Text size="sm">Using --wim-blur-sm token.</Text>
                </Card>
                <Card variant="glass" padding="md" style={{ backdropFilter: "blur(var(--wim-blur-md))" }}>
                  <Title tag="h4" size="md">Glass Md (Blur 12px)</Title>
                  <Text size="sm">Using --wim-blur-md token (Default).</Text>
                </Card>
                <Card variant="glass" padding="md" style={{ backdropFilter: "blur(var(--wim-blur-lg))" }}>
                  <Title tag="h4" size="md">Glass Lg (Blur 16px)</Title>
                  <Text size="sm">Using --wim-blur-lg token.</Text>
                </Card>
              </Stack>
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:interactive_glass_label")} align="stretch">
             <Grid cols={2} gap="md">
                <Card variant="glass" interactive padding="md">
                   <Text weight="bold">Hover Me</Text>
                   <Text size="xs">Lifts and intensifies glass effect.</Text>
                </Card>
                <Card variant="glass" interactive padding="md">
                   <Text weight="bold">Tap Me</Text>
                   <Text size="xs">Scales down on active state.</Text>
                </Card>
             </Grid>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Skeleton & Motion */}
        <ComparisonGrid title={t("audit:refined_skeleton_motion")}>
          <ComponentGroup label={t("audit:skeleton_shimmer_refinement")} align="stretch">
            <Card padding="md">
              <Stack gap="md">
                <Group gap="md">
                  <Skeleton variant="circle" width={48} height={48} animation="wave" />
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" height={20} animation="wave" />
                    <Skeleton variant="text" width="40%" height={16} animation="wave" />
                  </Stack>
                </Group>
                <Skeleton variant="rect" height={120} animation="wave" />
                <Skeleton variant="text" height={16} animation="wave" />
                <Skeleton variant="text" height={16} animation="wave" />
                <Skeleton variant="text" width="80%" height={16} animation="wave" />
              </Stack>
            </Card>
          </ComponentGroup>

          <ComponentGroup label={t("audit:motion_easing_emphasized")} align="stretch">
             <Stack gap="md">
                <Box>
                  <Text size="xs" style={{ marginBottom: "var(--wim-spacing-xs)" }}>Emphasized (Standard for Large Movements)</Text>
                  <Box style={{ 
                    height: "4px", 
                    width: "100%", 
                    background: "var(--wim-color-bg-secondary)", 
                    borderRadius: "2px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Box style={{ 
                      position: "absolute",
                      height: "100%",
                      width: "40px",
                      background: "var(--wim-color-primary)",
                      animation: "moveRight 3s var(--wim-easing-emphasized) infinite"
                    }} />
                  </Box>
                </Box>
                
                <Box>
                  <Text size="xs" style={{ marginBottom: "var(--wim-spacing-xs)" }}>Spring (Organic / Playful)</Text>
                  <Box style={{ 
                    height: "4px", 
                    width: "100%", 
                    background: "var(--wim-color-bg-secondary)", 
                    borderRadius: "2px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Box style={{ 
                      position: "absolute",
                      height: "100%",
                      width: "40px",
                      background: "var(--wim-color-positive)",
                      animation: "moveRight 3s var(--wim-easing-spring) infinite"
                    }} />
                  </Box>
                </Box>

                <style>{`
                  @keyframes moveRight {
                    0% { left: 0; }
                    50% { left: calc(100% - 40px); }
                    100% { left: 0; }
                  }
                `}</style>
             </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Real World Example */}
        <ComparisonGrid title={t("audit:integrated_application_label")}>
          <ComponentGroup label={t("audit:glass_header_skeleton_content")} align="stretch">
            <Box style={{ 
              height: "400px", 
              border: "1px solid var(--wim-color-border)", 
              borderRadius: "var(--wim-radius-lg)",
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}>
              <Header glass fixed={false} style={{ position: "absolute", top: 0 }}>
                <Flex align="center" justify="between" style={{ height: "100%", paddingLeft: "var(--wim-spacing-md)", paddingRight: "var(--wim-spacing-md)", width: "100%" }}>
                   <Title tag="h4" size="md" style={{ color: "white" }}>WIM UI</Title>
                   <Avatar size="sm" src="https://i.pravatar.cc/150?u=wim" />
                </Flex>
              </Header>
              <Box p="xl" pt="80px">
                 <Stack gap="lg">
                    <Card variant="glass" padding="md">
                       <Stack gap="sm">
                          <Skeleton variant="text" width="30%" height={24} animation="wave" />
                          <Skeleton variant="text" width="100%" height={16} animation="wave" />
                          <Skeleton variant="text" width="100%" height={16} animation="wave" />
                          <Skeleton variant="text" width="60%" height={16} animation="wave" />
                          <Button size="sm" variant="solid" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
                             Action
                          </Button>
                       </Stack>
                    </Card>
                    <Grid cols={2} gap="md">
                       <Card variant="glass" padding="sm">
                          <Skeleton variant="rect" height={60} animation="wave" />
                       </Card>
                       <Card variant="glass" padding="sm">
                          <Skeleton variant="rect" height={60} animation="wave" />
                       </Card>
                    </Grid>
                 </Stack>
              </Box>
            </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
