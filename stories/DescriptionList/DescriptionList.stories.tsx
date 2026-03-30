import React from "react";
import { useTranslation } from "react-i18next";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DescriptionList,
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetails,
} from "@/components/DescriptionList/DescriptionList";

const meta: Meta<typeof DescriptionList> = {
  title: "Components/Data Structures/DescriptionList",
  component: DescriptionList,
  argTypes: {
    layout: {
      control: "select",
      options: ["horizontal", "vertical", "compact"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    border: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

const DescriptionListContent = () => {
  const { t } = useTranslation("docs");
  return (
    <>
      <DescriptionListItem>
        <DescriptionListTerm>{t("story.desc_list_user_name")}</DescriptionListTerm>
        <DescriptionListDetails>{t("story.desc_list_persona")}</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>{t("story.desc_list_email")}</DescriptionListTerm>
        <DescriptionListDetails>contact@example.com</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>{t("story.desc_list_position")}</DescriptionListTerm>
        <DescriptionListDetails>{t("story.desc_list_designer")}</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>{t("story.desc_list_description")}</DescriptionListTerm>
        <DescriptionListDetails>
          {t("story.desc_list_desc_val")}
        </DescriptionListDetails>
      </DescriptionListItem>
    </>
  );
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    children: <DescriptionListContent />,
  },
};

export const Vertical: Story = {
  args: {
    layout: "vertical",
    children: <DescriptionListContent />,
  },
};

export const Compact: Story = {
  args: {
    layout: "compact",
    children: <DescriptionListContent />,
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
    children: <DescriptionListContent />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <DescriptionListContent />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <DescriptionListContent />,
  },
};
