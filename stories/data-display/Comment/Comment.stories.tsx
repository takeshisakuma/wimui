import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Comment, RelativeTime, Tag, Button, Textarea, Stack } from "wimui";

const meta: Meta<typeof Comment> = {
  title: "Components/Data-display/Comment",
  component: Comment,
  // チャートと同じ理由で `centered` にしない ── 親が shrink-to-fit の器だと
  // 幅が内容なりに縮み、狭い画面での折り返しを検査できない（T225 ③ の教訓）。
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Comment>;

/** 相対時刻は「今」から数えるので、話の流れが分かる間隔で置く。 */
const hoursAgo = (h: number) => new Date(Date.now() - h * 3600_000);

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Comment
        {...args}
        id="c1"
        author={{ name: t("story.comment_author_lead"), initials: "NO" }}
        timestamp={<RelativeTime date={hoursAgo(5)} />}
        onReply={() => {}}
      >
        {t("story.comment_body_lead")}
      </Comment>
    );
  },
};

/**
 * 返信の入れ子。**字下げだけでなく list として組む**ので、支援技術にも
 * 深さが伝わる（読み上げは「リスト、項目 1 の 2」のように段を言う）。
 */
export const Thread: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Comment
        {...args}
        id="c1"
        author={{
          name: t("story.comment_author_lead"),
          initials: "NO",
          badge: <Tag size="sm">{t("story.comment_badge_author")}</Tag>,
        }}
        timestamp={<RelativeTime date={hoursAgo(26)} />}
        onReply={() => {}}
        replies={[
          <Comment
            key="c2"
            id="c2"
            author={{ name: t("story.comment_author_reviewer"), initials: "BS" }}
            timestamp={<RelativeTime date={hoursAgo(21)} />}
            onReply={() => {}}
            replies={[
              <Comment
                key="c3"
                id="c3"
                author={{ name: t("story.comment_author_lead"), initials: "NO" }}
                timestamp={<RelativeTime date={hoursAgo(19)} />}
                edited
                onReply={() => {}}
              >
                {t("story.comment_body_nested")}
              </Comment>,
            ]}
          >
            {t("story.comment_body_reviewer")}
          </Comment>,
          <Comment
            key="c4"
            id="c4"
            author={{ name: t("story.comment_author_ops"), initials: "MT" }}
            timestamp={<RelativeTime date={hoursAgo(3)} />}
            onReply={() => {}}
          >
            {t("story.comment_body_ops")}
          </Comment>,
        ]}
      >
        {t("story.comment_body_lead")}
      </Comment>
    );
  },
};

/**
 * 返信欄が開いている状態。**開いているかは `replyingTo` で外から渡す** ──
 * 下書きも送信もアプリの持ち物なので、ここは差し込み口だけ。
 */
export const Replying: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Comment
        {...args}
        id="c1"
        author={{ name: t("story.comment_author_lead"), initials: "NO" }}
        timestamp={<RelativeTime date={hoursAgo(5)} />}
        replyingTo="c1"
        onReply={() => {}}
        composer={
          <Stack gap="sm" align="start">
            <Textarea
              label={t("story.comment_composer_label")}
              placeholder={t("story.comment_composer_placeholder")}
              rows={3}
            />
            <Button size="sm">{t("story.comment_composer_submit")}</Button>
          </Stack>
        }
      >
        {t("story.comment_body_lead")}
      </Comment>
    );
  },
};

/**
 * 編集中。**本文は差し替える** ── 本文と編集欄を並べると、どちらが今の内容か
 * 読み手に分からなくなる。
 */
export const Editing: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Comment
        {...args}
        id="c1"
        author={{ name: t("story.comment_author_lead"), initials: "NO" }}
        timestamp={<RelativeTime date={hoursAgo(5)} />}
        editingId="c1"
        onEdit={() => {}}
        onDelete={() => {}}
        editor={
          <Stack gap="sm" align="start">
            <Textarea
              label={t("story.comment_editor_label")}
              defaultValue={t("story.comment_body_lead")}
              rows={3}
            />
            <Button size="sm">{t("story.comment_editor_submit")}</Button>
          </Stack>
        }
      >
        {t("story.comment_body_lead")}
      </Comment>
    );
  },
};

/**
 * 読むだけの状態（コールバックを 1 つも渡さない）。操作の行そのものが出ない
 * ので、押せないボタンが並ぶことがない。
 */
export const ReadOnly: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Comment
        {...args}
        id="c1"
        author={{ name: t("story.comment_author_ops"), initials: "MT" }}
        timestamp={<RelativeTime date={hoursAgo(48)} />}
        edited
      >
        {t("story.comment_body_ops")}
      </Comment>
    );
  },
};
