import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Box,
  Flex,
  Stack,
  Grid,
  SimpleGrid,
  Group,
  Center,
  Container,
  AppShell,
  Text,
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/LayoutFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const Placeholder = ({ color = "var(--wim-color-primary-subtle)", height = "50px", label = "Item" }: { color?: string, height?: string, label?: string }) => (
      <Box
        bg={color}
        radius="sm"
        style={{
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed var(--wim-color-primary-border)",
          padding: "0 1rem",
          minWidth: "60px"
        }}
      >
        <Text size="xs" color="primary" weight="bold">{label}</Text>
      </Box>
    );

    return (
      <AuditPage title={t("audit:layout_family_title")}>
        {/* Layout Primitives */}
        <ComparisonGrid title={t("audit:layout_primitive_check")}>
          <ComponentGroup label={t("audit:label_stack")} align="stretch">
            <Stack gap="md">
              <Placeholder label="Stack 1" />
              <Placeholder label="Stack 2" />
              <Placeholder label="Stack 3" />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_group")} align="stretch">
            <Group gap="md">
              <Placeholder label="Group 1" />
              <Placeholder label="Group 2" />
              <Placeholder label="Group 3" />
            </Group>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_flex")} align="stretch">
            <Flex justify="between" align="center" style={{ background: "var(--wim-color-bg-surface)", padding: "0.5rem" }}>
              <Placeholder label="Flex Start" />
              <Placeholder label="Flex Center" />
              <Placeholder label="Flex End" />
            </Flex>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_grid")} align="stretch">
            <Grid cols={12} gap="md">
              <Box style={{ gridColumn: "span 4" }}><Placeholder label="Span 4" /></Box>
              <Box style={{ gridColumn: "span 8" }}><Placeholder label="Span 8" /></Box>
              <Box style={{ gridColumn: "span 6" }}><Placeholder label="Span 6" /></Box>
              <Box style={{ gridColumn: "span 3" }}><Placeholder label="Span 3" /></Box>
              <Box style={{ gridColumn: "span 3" }}><Placeholder label="Span 3" /></Box>
            </Grid>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_simple_grid")} align="stretch">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <Placeholder label="Auto 1" />
              <Placeholder label="Auto 2" />
              <Placeholder label="Auto 3" />
            </SimpleGrid>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Spacing & Container System */}
        <ComparisonGrid title={t("audit:layout_spacing_system")}>
          <ComponentGroup label={t("audit:label_container")} align="stretch">
            <Stack gap="sm">
              <Container size="xs" style={{ background: "var(--wim-color-bg-surface-subtle)", border: "1px solid var(--wim-color-border)" }}>
                <Placeholder label="Container XS" />
              </Container>
              <Container size="sm" style={{ background: "var(--wim-color-bg-surface-subtle)", border: "1px solid var(--wim-color-border)" }}>
                <Placeholder label="Container SM" />
              </Container>
              <Container size="md" style={{ background: "var(--wim-color-bg-surface-subtle)", border: "1px solid var(--wim-color-border)" }}>
                <Placeholder label="Container MD" />
              </Container>
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_center")} align="stretch">
            <Center style={{ height: "150px", background: "var(--wim-color-bg-surface-subtle)", border: "1px solid var(--wim-color-border)" }}>
              <Placeholder label="Centered Content" />
            </Center>
          </ComponentGroup>
        </ComparisonGrid>

        {/* AppShell Structure */}
        <ComparisonGrid title={t("audit:layout_app_shell_check")}>
          <ComponentGroup label={t("audit:label_app_shell")} align="stretch">
             <Box style={{ height: "400px", border: "1px solid var(--wim-color-border)", overflow: "hidden", position: "relative" }}>
                <AppShell
                  style={{ position: "absolute", inset: 0 }}
                  padding
                >
                  <AppShell.Header>
                    <Box h="40px" bg="var(--wim-color-bg-surface-subtle)" style={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--wim-color-border)" }}>
                      <Text size="xs" weight="bold">Header</Text>
                    </Box>
                  </AppShell.Header>
                  <AppShell.Body>
                    <AppShell.Sidebar style={{ width: "120px", borderRight: "1px solid var(--wim-color-border)", background: "var(--wim-color-bg-surface)" }}>
                      <Stack gap="xs" p="xs">
                        <Placeholder height="30px" label="Nav 1" />
                        <Placeholder height="30px" label="Nav 2" />
                      </Stack>
                    </AppShell.Sidebar>
                    <AppShell.Main>
                      <Stack gap="md">
                        <Text weight="bold">Main Content Area</Text>
                        <SimpleGrid cols={2} spacing="sm">
                          <Placeholder height="100px" label="Card 1" />
                          <Placeholder height="100px" label="Card 2" />
                        </SimpleGrid>
                      </Stack>
                    </AppShell.Main>
                  </AppShell.Body>
                </AppShell>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
