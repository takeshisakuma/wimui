import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import { Breadcrumb } from "@/components/navigation/Breadcrumb/Breadcrumb";
import { TabNavigation } from "@/components/navigation/TabNavigation/TabNavigation";
import { Button } from "@/components/form/Button/Button";
import { Badge } from "@/components/data-display/Badge/Badge";

const meta: Meta<typeof PageHeader> = {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

function useCrumbs() {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <Breadcrumb
      size="sm"
      items={[
        { label: t("story.page_header_crumb_expenses"), href: "#" },
        { label: t("story.page_header_crumb_reports") },
      ]}
    />
  );
}

/**
 * 一覧画面の頭。パンくず・題・要約・操作。primary の面は「新しい申請」の 1 つだけにする。
 */
export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <PageHeader
        breadcrumb={useCrumbs()}
        title={t("story.page_header_title")}
        description={t("story.page_header_desc")}
        actions={
          <>
            <Button variant="outline">{t("story.page_header_action_export")}</Button>
            <Button variant="solid">{t("story.page_header_action_new")}</Button>
          </>
        }
      />
    );
  },
};

/** 題の隣に状態、いちばん下にページの中の切り替え。 */
export const WithStatusAndTabs: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [view, setView] = React.useState("submitted");
    const tabs = [
      ["submitted", "story.page_header_tab_submitted"],
      ["drafts", "story.page_header_tab_drafts"],
      ["returned", "story.page_header_tab_returned"],
    ] as const;
    return (
      <PageHeader
        breadcrumb={useCrumbs()}
        title={t("story.page_header_title")}
        status={<Badge content={t("story.page_header_status")} intent="warning" variant="subtle" size="sm" />}
        description={t("story.page_header_desc")}
        actions={<Button variant="solid">{t("story.page_header_action_new")}</Button>}
        tabs={
          <TabNavigation>
            {tabs.map(([id, key]) => (
              <TabNavigation.Item
                key={id}
                href="#"
                active={view === id}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setView(id);
                }}
              >
                {t(key)}
              </TabNavigation.Item>
            ))}
          </TabNavigation>
        }
      />
    );
  },
};

/** 長い題は省略せず折り返す。操作は題の右に入りきらないので、次の行へ回る。 */
export const LongTitle: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <PageHeader
        breadcrumb={useCrumbs()}
        title={t("story.page_header_title_long")}
        status={<Badge content={t("story.page_header_status")} intent="warning" variant="subtle" size="sm" />}
        actions={
          <>
            <Button variant="ghost">{t("story.page_header_action_policy")}</Button>
            <Button variant="outline">{t("story.page_header_action_export")}</Button>
            <Button variant="solid">{t("story.page_header_action_new")}</Button>
          </>
        }
      />
    );
  },
};

/** 題だけ。パンくずも操作も無いページ（設定の 1 ページなど）。 */
export const TitleOnly: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <PageHeader title={t("story.page_header_title")} />;
  },
};
