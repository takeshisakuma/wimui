import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Toast, ToastProvider, useToast } from "wimui";


const isVrt = () =>
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  typeof window !== "undefined" && Boolean(window.__VRT__);

/**
 * VRT では自動で閉じないようにする（`Snackbar` と同じ形）。
 *
 * `duration` の既定は **3 秒**（実装はさらに 300ms のバッファを足す）なので、
 * マウントから撮影までが 3.3 秒を跨ぐかで「出ている絵」と「閉じた絵」が入れ替わる
 * ── **実時間に依存する非決定性**で、CI の混み具合で結果が変わる。
 *
 * `Snackbar` では実際にこれが表に出た（#474 で dark の 4 枚が回ごとに入れ替わりで
 * 落ちた）。Toast はいまのところ中身が写った状態で撮れているだけで、**同じ coin flip**
 * を回している。VRT が見たいのは「Toast が出ている状態」なのでタイマーを止める。
 * Storybook の閲覧では従来どおり 3 秒で閉じる（`isVrt()` のときだけ 0）。
 */
const vrtStable = (): { duration?: number } =>
  isVrt() ? { duration: 0 } : {};

const meta: Meta<typeof Toast> = {
  title: "Components/Alerts & Notifications/Toast",
  component: Toast,
  tags: ["!autodocs"],
  args: {
    ...vrtStable(),
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "info", "success", "warning", "danger"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_system_notif")}
        description={args.description || t("story.toast_update_desc")}
      />
    );
  },
  args: {
    intent: "default",
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_success_title")}
        description={args.description || t("story.toast_success_desc")}
      />
    );
  },
  args: {
    intent: "success",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_update_title")}
        description={args.description || t("story.toast_update_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_connection_title")}
        description={args.description || t("story.toast_connection_desc")}
      />
    );
  },
  args: {
    intent: "warning",
  },
};

// T90 の横展開。**アイコンのずれは内容が伸びて初めて出る** ── 既定のストーリーは
// 説明が 1 行なので、`align-self: center` でも 1 行目とほぼ揃って見えていた。
// 実測でアイコンの top と title の top の差は、塊 43px で 14px、塊 100px で 43px。
// 折り返す長さを持つストーリーが 1 つも無いと、直しても戻しても VRT が同じ絵を撮る。
export const LongContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ maxWidth: "420px" }}>
        <Toast
          {...args}
          title={args.title || t("story.toast_long_title")}
          description={args.description || t("story.toast_long_desc")}
        />
      </div>
    );
  },
  args: {
    intent: "warning",
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_upload_failed_title")}
        description={args.description || t("story.toast_upload_failed_desc")}
      />
    );
  },
  args: {
    intent: "danger",
  },
};

// Interactive example using the hook
const ToastTrigger = () => {
  const { show } = useToast();
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        variant="solid"
        onClick={() =>
          show({
            title: t("story.toast_success_title"),
            description: t("story.toast_success_desc"),
            intent: "success",
          })
        }

      >{t("story.toast_show_success")}</Button>
      <Button
        variant="outline"
        onClick={() =>
          show({
            title: t("story.notification_error_title"),
            description: t("story.notification_error_desc"),
            intent: "danger",
          })
        }

      >{t("story.toast_show_error")}</Button>
      <Button
        variant="ghost"
        onClick={() =>
          show({
            title: t("story.toast_system_notif"),
            description: t("story.toast_5s_desc"),
            intent: "info",
            duration: 5000,
          })
        }

      >{t("story.toast_show_5s")}</Button>
    </div>
  );
};

export const Interactive = {
  render: () => (
    <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
  ),
};
