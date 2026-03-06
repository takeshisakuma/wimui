import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "@/components/Footer/Footer";
import { SimpleGrid } from "@/components/SimpleGrid/SimpleGrid";
import { useTranslation } from "react-i18next";

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

const FooterDemo = (args: any) => {
  const { t } = useTranslation();
  return (
    <Footer {...args} bordered={args.bordered ?? true}>
      <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing={40}>
        <Footer.Section title={t("story_footer_product")}>
          <span>{t("story_footer_features")}</span>
          <span>{t("story_footer_pricing")}</span>
          <span>{t("story_footer_api")}</span>
        </Footer.Section>
        <Footer.Section title={t("story_footer_company")}>
          <span>{t("story_footer_about")}</span>
          <span>{t("story_footer_careers")}</span>
          <span>{t("story_footer_contact")}</span>
        </Footer.Section>
        <Footer.Section title={t("story_footer_resources")}>
          <span>{t("story_footer_docs")}</span>
          <span>{t("story_footer_blog")}</span>
          <span>{t("story_footer_support")}</span>
        </Footer.Section>
        <Footer.Section title={t("story_footer_legal")}>
          <span>{t("story_footer_privacy")}</span>
          <span>{t("story_footer_terms")}</span>
          <span>{t("story_footer_cookie")}</span>
        </Footer.Section>
      </SimpleGrid>
      <Footer.Bottom>
        <div>{t("story_footer_rights")}</div>
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
