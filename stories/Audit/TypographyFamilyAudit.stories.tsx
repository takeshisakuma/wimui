import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation, Trans } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Title,
  Text,
  Link,
  Stack,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/TypographyFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box px="lg" py="md" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
    <Text size="lg" weight="bold">
      {children}
    </Text>
  </Box>
);

const ComparisonGrid = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box m="lg">
    <Text size="md" weight="bold" style={{ margin: "0 0 var(--wim-spacing-md) 0" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--wim-spacing-lg)",
        padding: "var(--wim-spacing-md)",
      }}
    >
      {children}
    </Box>
  </Box>
);

const ComponentGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Stack gap="var(--wim-spacing-xs)">
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="primary" weight="medium">
        {label}
      </Text>
    </Box>
    <Stack gap="var(--wim-spacing-md)" align="start">
      {children}
    </Stack>
  </Stack>
);

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const headingLevels = [1, 2, 3, 4, 5, 6] as const;
    const textSizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:typography_family_title")}</SectionTitle>

        {/* Heading Levels */}
        <ComparisonGrid title={t("audit:label_heading")}>
          {headingLevels.map((level) => (
            <ComponentGroup key={level} label={`Level ${level}`}>
              <Title tag={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}>
                {t("audit:sample_typography_heading", { level })}
              </Title>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Text Sizes */}
        <ComparisonGrid title={t("audit:label_text")}>
          {textSizes.map((size) => (
            <ComponentGroup key={size} label={`Size: ${size}`}>
              <Text size={size as "xs" | "sm" | "md" | "lg" | "xl"}>
                {t("audit:sample_typography_text", { size })}
              </Text>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Link Consistency */}
        <ComparisonGrid title={t("audit:label_link_styles")}>
          <ComponentGroup label={t("audit:label_link_styles")}>
            <Text>
              <Trans i18nKey="audit:sample_link_standard">
                This is a <Link href="#">Standard Link</Link> inside a paragraph.
              </Trans>
            </Text>
            <Text color="secondary">
              <Trans i18nKey="audit:sample_link_subtle">
                This is a <Link href="#" priority="secondary">Subtle Link</Link> inside a secondary paragraph.
              </Trans>
            </Text>
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
