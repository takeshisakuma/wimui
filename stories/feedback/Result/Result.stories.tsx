import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Result } from "wimui";


const meta: Meta<typeof Result> = {
  title: "Components/Alerts & Notifications/Result",
  component: Result,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="default"
        title={t("story.result_info_title")}
        extra={<Button variant="solid">{t("story.result_go_console")}</Button>}
      />
    );
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="success"
        title={t("story.result_success_title")}
        description={t("story.result_success_desc")}
        extra={[
          <Button variant="solid" key="console">{t("story.result_go_console")}</Button>,
          <Button key="buy">{t("story.result_buy_again")}</Button>,
        ]}
      />
    );
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="info"
        title={t("story.result_info_title")}
        extra={<Button variant="solid">{t("story.result_go_console")}</Button>}
      />
    );
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="warning"
        title={t("story.result_warning_title")}
        extra={<Button variant="solid">{t("story.result_go_console")}</Button>}
      />
    );
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="danger"
        title={t("story.result_error_title")}
        description={t("story.result_error_desc")}
        extra={[
          <Button variant="solid" key="console">{t("story.result_go_console")}</Button>,
          <Button key="buy">{t("story.result_buy_again")}</Button>,
        ]}
      />
    );
  },
};

export const Status404: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        status="404"
        title="404"
        description={t("story.result_404_desc")}
        extra={<Button variant="solid">{t("story.result_back_home")}</Button>}
      />
    );
  },
};

export const Status403: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        status="403"
        title="403"
        description={t("story.result_403_desc")}
        extra={<Button variant="solid">{t("story.result_back_home")}</Button>}
      />
    );
  },
};

export const Status500: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        status="500"
        title="500"
        description={t("story.result_500_desc")}
        extra={<Button variant="solid">{t("story.result_back_home")}</Button>}
      />
    );
  },
};
