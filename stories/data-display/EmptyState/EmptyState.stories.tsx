import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "@/components/data-display/EmptyState/EmptyState";
import { Icon } from "@/components/media/Icon/Icon";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof EmptyState> = {
  title: "Components/Data Indicators/EmptyState",
  component: EmptyState,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_nodata_title")}
        description={t("story.emptystate_nodata_desc")}
        icon={<Icon name="SearchIcon" size="lg" />}
        extra={<Button >{t("story.emptystate_clear_search")}</Button>}
      />
    );
  },
};

export const Simple: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_nomessages_title")}
        description={t("story.emptystate_nomessages_desc")}
        variant="simple"
      />
    );
  },
};

export const WithoutDescription: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_empty_list")}
        icon={<Icon name="CircleIcon" size="lg" />}
      />
    );
  },
};

export const CustomAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_ready_title")}
        description={t("story.emptystate_ready_desc")}
        icon={<Icon name="PlusIcon" style={{ width: 48, height: 48 }} />}
        extra={
          <>
            <Button variant="outline">{t("story.emptystate_browse_templates")}</Button>
            <Button variant="filled">{t("story.emptystate_create_project")}</Button>
          </>
        }
      />
    );
  },
};

export const NoMessages: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_noemails_title")}
        description={t("story.emptystate_noemails_desc")}
        icon={<Icon name="EmailIcon" size="lg" />}
      />
    );
  },
};

export const NoVideos: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_novideos_title")}
        description={t("story.emptystate_novideos_desc")}
        icon={<Icon name="VideoIcon" size="lg" />}
        extra={<Button variant="filled">{t("story.emptystate_upload_video")}</Button>}
      />
    );
  },
};

export const NoFiles: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <EmptyState
        {...args}
        title={t("story.emptystate_nofiles_title")}
        description={t("story.emptystate_nofiles_desc")}
        icon={<Icon name="DocumentIcon" size="lg" />}
      />
    );
  },
};
