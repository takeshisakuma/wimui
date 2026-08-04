import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Card } from "wimui";
import {
  CARD_STYLED_PADDING,
  CARD_STYLED_RADIUS,
} from "@/components/data-display/Card/styled-values";


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
    // SSOT から引く。手で並べていたぶんは **`xl` / `2xl` / `3xl` を足した
    // 2026-07-26 の拡張に追随できておらず**、padding は 4 つ・radius は 2 つ
    // 欠けていた。型と SCSS のズレは `Card.unstyled-values.test.tsx` が止めるが、
    // ここを SSOT と突き合わせるものは無く、Docgen も
    // `(typeof CARD_STYLED_PADDING)[number]` を生で出すだけなので、
    // **Storybook 上で `xl` の存在を知る手段が無い**状態になっていた。
    padding: {
      control: "select",
      options: [...CARD_STYLED_PADDING],
    },
    radius: {
      control: "select",
      options: [...CARD_STYLED_RADIUS],
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
            <Button variant="outline" size="sm">{t("story.card_cancel")}</Button>
            <Button variant="solid" size="sm">{t("story.card_save")}</Button>
          </div>
        </Card.Footer>
      </Card>
    );
  },
  args: {
    variant: "elevated",
  },
};
