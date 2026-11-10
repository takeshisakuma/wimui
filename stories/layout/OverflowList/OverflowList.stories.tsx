import type React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { OverflowList } from "@/components/layout/OverflowList/OverflowList";
import { Tag } from "@/components/data-display/Tag/Tag";
import { Button } from "@/components/form/Button/Button";
import { IconButton } from "@/components/form/IconButton/IconButton";
import { VisuallyHidden } from "@/components/layout/VisuallyHidden/VisuallyHidden";
import { Link } from "@/components/navigation/Link/Link";
import { Stack } from "@/components/layout/Stack/Stack";
import { Text } from "@/components/typography/Text/Text";
import { Span } from "@/components/typography/Span/Span";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlay/Popover/Popover";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof OverflowList> = {
  title: "Components/Layout/OverflowList",
  component: OverflowList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
    collapseFrom: { control: "radio", options: ["end", "start"] },
    minVisibleItems: { control: "number" },
    alwaysRenderOverflow: { control: "boolean" },
    gap: { control: "select", options: ["2xs", "xs", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof OverflowList>;

const AMENITY_KEYS = [
  "wifi",
  "breakfast",
  "parking",
  "late_checkout",
  "pets",
  "shuttle",
  "kitchen",
  "laundry",
];

const AmenityList = (props: Partial<React.ComponentProps<typeof OverflowList<string>>>) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const amenities = AMENITY_KEYS.map((key) => t(`story.overflowlist_amenity_${key}`));
  return (
    <OverflowList
      aria-label={t("story.overflowlist_amenities")}
      role="group"
      {...props}
      items={amenities}
      renderItem={(amenity) => (
        <Tag intent="neutral" variant="subtle" size="sm">
          {amenity}
        </Tag>
      )}
      renderOverflow={(hidden) => (
        <Popover placement="bottom-start">
          <PopoverTrigger asChild>
            {/* 名前は、見えている「+N」から始めて、何が隠れているかを続ける */}
            <Button size="sm" variant="ghost">
              +{hidden.length}
              <VisuallyHidden> {t("story.overflowlist_more_amenities")}</VisuallyHidden>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Stack gap="xs" align="start">
              {hidden.map((amenity) => (
                <Tag key={amenity} intent="neutral" variant="subtle" size="sm">
                  {amenity}
                </Tag>
              ))}
            </Stack>
          </PopoverContent>
        </Popover>
      )}
    />
  );
};

/** 宿の一覧の 1 行。幅は器（320px）が決め、入らない設備は「+N」から開いて読む */
export const Default: Story = {
  render: (args) => (
    <div style={{ width: "var(--wim-width-md)" }}>
      <AmenityList {...(args as Partial<React.ComponentProps<typeof OverflowList<string>>>)} />
    </div>
  ),
};

/** 同じ設備の並びを、3 つの幅の器に置く。畳んだ数と「+N」の数は、幅ごとに一致する */
export const ContainerWidths: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="xl">
        {[
          { token: "var(--wim-width-xl)", label: "640px" },
          { token: "var(--wim-width-md)", label: "320px" },
          { token: "var(--wim-width-sm)", label: "180px" },
        ].map(({ token, label }) => (
          <Stack key={label} gap="xs">
            <Text size="sm" color="text-secondary">
              {t("story.overflowlist_container_width", { width: label })}
            </Text>
            {/* 狭い画面では、器のほうを画面に収める（640px の器が 390px の画面からはみ出した） */}
            <div style={{ width: `min(${token}, 100%)` }} data-testid={`overflow-list-${label}`}>
              <AmenityList />
            </div>
          </Stack>
        ))}
      </Stack>
    );
  },
};

const FOLDER_KEYS = ["shared", "household", "year", "tax", "receipts"];

/** 先頭から畳む。今いるフォルダ（最後）を残し、上の階層を「…」にまとめる */
export const CollapseFromStart: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const folders = FOLDER_KEYS.map((key) => t(`story.overflowlist_folder_${key}`));
    const last = folders.length - 1;
    return (
      <nav aria-label={t("story.overflowlist_path")} style={{ width: "var(--wim-width-md)" }}>
        <OverflowList
          collapseFrom="start"
          minVisibleItems={1}
          gap="xs"
          items={folders}
          renderItem={(folder, index) => (
            <Span size="sm" color={index === last ? "text-primary" : "text-secondary"}>
              {index > 0 && <span aria-hidden="true">/ </span>}
              {index === last ? (
                <span aria-current="page">{folder}</span>
              ) : (
                <Link href="#" size="sm" priority="secondary">
                  {folder}
                </Link>
              )}
            </Span>
          )}
          renderOverflow={(hidden) => (
            <Popover placement="bottom-start">
              <PopoverTrigger asChild>
                <IconButton
                  iconName="MoreHorizontalIcon"
                  size="sm"
                  variant="ghost"
                  aria-label={t("story.overflowlist_hidden_folders", { count: hidden.length })}
                />
              </PopoverTrigger>
              <PopoverContent>
                <Stack gap="xs">
                  {hidden.map((folder) => (
                    <Link key={folder} href="#" size="sm" priority="secondary">
                      {folder}
                    </Link>
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          )}
        />
      </nav>
    );
  },
};
