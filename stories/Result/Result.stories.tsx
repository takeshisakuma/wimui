import type { Meta, StoryObj } from "@storybook/react-vite";
import { Result } from "@/components/feedback/Result/Result";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Result> = {
  title: "Components/Alerts & Notifications/Result",
  component: Result,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Result>;

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
          <Button variant="filled" key="console" label={t("story.result_go_console")} />,
          <Button key="buy" label={t("story.result_buy_again")} />,
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
        title={t("story.result_info_title")}
        extra={<Button variant="filled" label={t("story.result_go_console")} />}
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
        extra={<Button variant="filled" label={t("story.result_go_console")} />}
      />
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Result
        {...args}
        intent="error"
        title={t("story.result_error_title")}
        description={t("story.result_error_desc")}
        extra={[
          <Button variant="filled" key="console" label={t("story.result_go_console")} />,
          <Button key="buy" label={t("story.result_buy_again")} />,
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
        intent="404"
        title="404"
        description={t("story.result_404_desc")}
        extra={<Button variant="filled" label={t("story.result_back_home")} />}
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
        intent="403"
        title="403"
        description={t("story.result_403_desc")}
        extra={<Button variant="filled" label={t("story.result_back_home")} />}
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
        intent="500"
        title="500"
        description={t("story.result_500_desc")}
        extra={<Button variant="filled" label={t("story.result_back_home")} />}
      />
    );
  },
};
