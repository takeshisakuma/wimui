import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Header, { HeaderProps } from "@/components/Header/Header";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Header> = {
  title: "Components/Application Shell/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
  argTypes: {
    fixed: { control: "boolean", description: "Fix header to top" },
    sticky: {
      control: "boolean",
      description: "Make header sticky on scroll",
    },
    bordered: { control: "boolean", description: "Show border at bottom" },
    glass: {
      control: "boolean",
      description: "Apply glassmorphism effect",
    },
    background: {
      control: "select",
      options: ["primary", "secondary", "transparent"],
      description: "Background color",
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Header {...args}>
        <Header.Section align="start">
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/">{t("story_header_home")}</a>
            <a href="/">{t("story_header_about")}</a>
            <a href="/">{t("story_header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story_header_login")}</button>
        </Header.Section>
      </Header>
    );
  },
};

export const Bordered: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Header {...args} bordered>
        <Header.Section align="start">
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/">{t("story_header_home")}</a>
            <a href="/">{t("story_header_about")}</a>
            <a href="/">{t("story_header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story_header_login")}</button>
        </Header.Section>
      </Header>
    );
  },
};

export const Glass: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Header {...args} glass background="transparent">
        <Header.Section align="start">
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/">{t("story_header_home")}</a>
            <a href="/">{t("story_header_about")}</a>
            <a href="/">{t("story_header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story_header_login")}</button>
        </Header.Section>
      </Header>
    );
  },
};

export const Sticky: Story = {
  render: function Render(args: HeaderProps) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          height: "200vh",
          background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
        }}
      >
        <Header {...args} sticky bordered>
          <Header.Section align="start">
            <div style={{ fontWeight: "bold" }}>Sticky Header</div>
          </Header.Section>
          <Header.Section align="end">
            <button>{t("story_header_action")}</button>
          </Header.Section>
        </Header>
        <div style={{ padding: "20px" }}>
          <p>{t("story_header_scroll_desc")}</p>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} style={{ margin: "20px 0" }}>
              {t("story_header_content_block")} {i + 1}
            </p>
          ))}
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    bordered: true,
    glass: false,
    background: "primary",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          height: "300px",
          position: "relative",
          border: "1px dashed #ccc",
        }}
      >
        <Header
          {...args}
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        >
          <Header.Section align="start">
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
          </Header.Section>
          <Header.Section align="center">
            <nav style={{ display: "flex", gap: "20px" }}>
              <a href="/">{t("story_header_home")}</a>
              <a href="/">{t("story_header_about")}</a>
              <a href="/">{t("story_header_contact")}</a>
            </nav>
          </Header.Section>
          <Header.Section align="end">
            <button>{t("story_header_login")}</button>
          </Header.Section>
        </Header>
        <div style={{ padding: "100px 20px 20px" }}>
          <p>{t("story_header_playground_desc")}</p>
          <p>{t("story_header_control_desc")}</p>
        </div>
      </div>
    );
  },
};
