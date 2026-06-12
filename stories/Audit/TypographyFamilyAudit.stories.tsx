import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation, Trans } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Title,
  Text,
  Link,
} from "../../src";

const meta: Meta = {
  title: "Audit/TypographyFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const headingLevels = [1, 2, 3, 4, 5, 6] as const;
    const headingSizes = { 1: "3xl", 2: "2xl", 3: "xl", 4: "lg", 5: "md", 6: "sm" } as const;
    const textSizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <AuditPage title={t("audit:typography_family_title")}>
        {/* Heading Levels */}
        <ComparisonGrid title={t("audit:label_heading")}>
          {headingLevels.map((level) => (
            <ComponentGroup key={level} label={t("audit:label_level_n", { level })}>
              <Title tag={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"} size={headingSizes[level]}>
                {t("audit:sample_typography_heading", { level })}
              </Title>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Text Sizes */}
        <ComparisonGrid title={t("audit:label_text")}>
          {textSizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })}>
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
              <Trans i18nKey="audit:sample_link_standard" components={[<Link key="link" href="#" />]} />
            </Text>
            <Text color="text-secondary">
              <Trans i18nKey="audit:sample_link_subtle" components={[<Link key="link" href="#" priority="secondary" />]} />
            </Text>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
