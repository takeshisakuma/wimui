import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, ConfirmProvider, useConfirm, type ConfirmOptions } from "wimui";

const meta: Meta<typeof ConfirmProvider> = {
  title: "Components/Overlays/Confirm",
  component: ConfirmProvider,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <ConfirmProvider>
        <Story />
      </ConfirmProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ConfirmProvider>;

/** 共有ファイルの行。削除の前に、取り消せないことを尋ねる */
const FileRow = ({ askOnMount = false }: { askOnMount?: boolean }) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const confirm = useConfirm();
  const [result, setResult] = useState<boolean | null>(null);

  const deleteOptions = (): ConfirmOptions => ({
    title: t("story.confirm_delete_title"),
    description: t("story.confirm_delete_desc"),
    confirmLabel: t("story.confirm_delete"),
    intent: "danger",
  });
  const askDelete = () => confirm(deleteOptions()).then(setResult);

  useEffect(() => {
    // 開いた姿のストーリーで、最初の描画のあと 1 回だけ尋ねる
    if (askOnMount) confirm(deleteOptions()).then(setResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section aria-labelledby="confirm-files-label" style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-sm)", maxWidth: "32rem" }}>
      <h3 id="confirm-files-label" style={{ margin: 0, fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
        {t("story.confirm_files_label")}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--wim-spacing-md)",
          padding: "var(--wim-spacing-sm) 0",
          borderBlock: "var(--wim-border-width-thin) solid var(--wim-color-border-secondary)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: "var(--wim-font-weight-semibold)" }}>Q3-report.pdf</div>
          <div style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>{t("story.confirm_file_meta")}</div>
        </div>
        <Button variant="ghost" intent="danger" onClick={askDelete}>
          {t("story.confirm_delete")}
        </Button>
      </div>
      <p role="status" style={{ margin: 0, fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
        {result === null ? "" : t(result ? "story.confirm_deleted" : "story.confirm_kept")}
      </p>
    </section>
  );
};

export const Default: Story = {
  render: () => <FileRow />,
};

/**
 * 開いた姿（VRT・a11y 用）。描画のあとすぐ confirm() を呼ぶ。
 * docs ページは <Stories /> で全ストーリーを並べるので、載せるとページを開いた瞬間に開く ── docs.disable で外す。
 */
export const Open: Story = {
  tags: ["!autodocs"],
  parameters: { docs: { disable: true } },
  render: () => <FileRow askOnMount />,
};

/** 破壊的でない操作。intent を付けないと、確認のボタンに最初のフォーカスが置かれる */
export const Publish: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const confirm = useConfirm();
    const [result, setResult] = useState<boolean | null>(null);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "var(--wim-spacing-md)", flexWrap: "wrap" }}>
        <Button
          variant="solid"
          onClick={async () =>
            setResult(
              await confirm({
                title: t("story.confirm_publish_title"),
                description: t("story.confirm_publish_desc"),
                confirmLabel: t("story.confirm_publish"),
              }),
            )
          }
        >
          {t("story.confirm_publish")}
        </Button>
        <span role="status" style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
          {result === null ? "" : t(result ? "story.confirm_published" : "story.confirm_not_published")}
        </span>
      </div>
    );
  },
};
