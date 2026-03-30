import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Card> = {
  title: "Components/Data Containers/Card",
  component: Card,
  tags: [],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "32px" }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outline", "flat"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_default_title")}</h3>
          <p>{t("story.card_default_desc")}</p>
        </Card.Body>
      </Card>
    );
  },
  args: {
    variant: "elevated",
    style: { width: "300px" },
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_outline_title")}</h3>
          <p>{t("story.card_outline_desc")}</p>
        </Card.Body>
      </Card>
    );
  },
  args: {
    variant: "outline",
    style: { width: "300px" },
  },
};

export const Flat: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_flat_title")}</h3>
          <p>{t("story.card_flat_desc")}</p>
        </Card.Body>
      </Card>
    );
  },
  args: {
    variant: "flat",
    style: { width: "300px" },
  },
};

export const WithHeaderAndFooter: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Card {...args} style={{ width: "400px" }}>
        <Card.Header>
          <h4 style={{ margin: 0 }}>{t("story.card_header_title")}</h4>
        </Card.Header>
        <Card.Body>
          <p>{t("story.card_body_text")}</p>
        </Card.Body>
        <Card.Footer>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
          >
            <Button variant="outlined" size="sm" label={t("story.card_cancel")} />
            <Button variant="filled" size="sm" label={t("story.card_save")} />
          </div>
        </Card.Footer>
      </Card>
    );
  },
  args: {
    variant: "elevated",
  },
};
