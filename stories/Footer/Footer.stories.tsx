import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "@/components/Footer/Footer";
import { SimpleGrid } from "@/components/SimpleGrid/SimpleGrid";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Footer> = {
  title: "Components/Application Shell/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Footer>;

const FooterDemo = (args: Parameters<typeof Footer>[0]) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <Footer {...args} bordered={args.bordered ?? true}>
      <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing={40}>
        <Footer.Section title={t("story.footer_product")}>
          <span>{t("story.footer_features")}</span>
          <span>{t("story.footer_pricing")}</span>
          <span>{t("story.footer_api")}</span>
        </Footer.Section>
        <Footer.Section title={t("story.footer_company")}>
          <span>{t("story.footer_about")}</span>
          <span>{t("story.footer_careers")}</span>
          <span>{t("story.footer_contact")}</span>
        </Footer.Section>
        <Footer.Section title={t("story.footer_resources")}>
          <span>{t("story.footer_docs")}</span>
          <span>{t("story.footer_blog")}</span>
          <span>{t("story.footer_support")}</span>
        </Footer.Section>
        <Footer.Section title={t("story.footer_legal")}>
          <span>{t("story.footer_privacy")}</span>
          <span>{t("story.footer_terms")}</span>
          <span>{t("story.footer_cookie")}</span>
        </Footer.Section>
      </SimpleGrid>
      <Footer.Bottom>
        <div>{t("story.footer_rights")}</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>X</span>
          <span>GitHub</span>
        </div>
      </Footer.Bottom>
    </Footer>
  );
};

export const Default: Story = {
  render: (args) => <FooterDemo {...args} />,
};

export const Dark: Story = {
  render: (args) => <FooterDemo {...args} background="dark" />,
};
