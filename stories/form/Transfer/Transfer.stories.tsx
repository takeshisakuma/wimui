import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Transfer } from "../../../src/components/form/Transfer/Transfer";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Transfer> = {
  title: "Components/Advanced Inputs/Transfer",
  component: Transfer,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

/**
 * 注文 CSV に含める列を選ぶ、という Transfer の典型的な使い方。
 *
 * もとは `Item 1`〜`Item 20` を番号で作っていた（翻訳済みの文字列に番号を継ぎ足す
 * 書き方で、T256 の `Option 1 2` と同じ形）。並んでいるものの名前を出さないと、
 * 左右に動かす操作が何を意味するのかが読めない（DESIGN.md `realism` / T255）。
 *
 * `locked` は「必ず書き出される列」＝利用者が外せない列で、disabled の見え方を
 * 左右どちらのパネルでも見せるために先頭 3 つに置いてある。
 */
const useDataSource = () => {
  const { t } = useTranslation("docs_stories_common");
  const columns = [
    { title: t("story.transfer_col_order_id"), type: t("story.transfer_type_text"), locked: true },
    { title: t("story.transfer_col_placed_at"), type: t("story.transfer_type_timestamp"), locked: true },
    { title: t("story.transfer_col_customer"), type: t("story.transfer_type_text"), locked: true },
    { title: t("story.transfer_col_tracking"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_total"), type: t("story.transfer_type_money") },
    { title: t("story.transfer_col_email"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_payment_method"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_phone"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_ship_city"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_postcode"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_carrier"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_weight"), type: t("story.transfer_type_number") },
    { title: t("story.transfer_col_items"), type: t("story.transfer_type_number") },
    { title: t("story.transfer_col_subtotal"), type: t("story.transfer_type_money") },
    { title: t("story.transfer_col_discount"), type: t("story.transfer_type_money") },
    { title: t("story.transfer_col_tax"), type: t("story.transfer_type_money") },
    { title: t("story.transfer_col_shipping_fee"), type: t("story.transfer_type_money") },
    { title: t("story.transfer_col_refunded"), type: t("story.transfer_type_flag") },
    { title: t("story.transfer_col_channel"), type: t("story.transfer_type_text") },
    { title: t("story.transfer_col_warehouse"), type: t("story.transfer_type_text") },
  ];
  return columns.map((column, i) => ({
    key: i.toString(),
    title: column.title,
    description: column.type,
    disabled: column.locked === true,
  }));
};

const DefaultTransfer = (args: React.ComponentProps<typeof Transfer>) => {
  const { t } = useTranslation("form");
  const dataSource = useDataSource();
  const labels = {
    noData: t("transfer.no_data"),
    moveToTarget: t("transfer.move_to_target"),
    moveToSource: t("transfer.move_to_source"),
    statusMovedToTarget: (count: number) => t("transfer.status_moved_to_target", { count }),
    statusMovedToSource: (count: number) => t("transfer.status_moved_to_source", { count }),
  };

  return (
    <Transfer
      {...args}
      dataSource={dataSource}
      targetKeys={["1", "3", "5"]}
      labels={labels}
      titles={[t("transfer.source"), t("transfer.target")]}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultTransfer {...args} />,
};

const TransferWrapper = () => {
  const { t } = useTranslation("form");
  const dataSource = useDataSource();
  const [targetKeys, setTargetKeys] = useState<string[]>(["1", "2"]);
  const labels = {
    noData: t("transfer.no_data"),
    moveToTarget: t("transfer.move_to_target"),
    moveToSource: t("transfer.move_to_source"),
    statusMovedToTarget: (count: number) => t("transfer.status_moved_to_target", { count }),
    statusMovedToSource: (count: number) => t("transfer.status_moved_to_source", { count }),
  };

  return (
    <Transfer
      dataSource={dataSource}
      targetKeys={targetKeys}
      onChange={(nextTargetKeys) => setTargetKeys(nextTargetKeys)}
      labels={labels}
      titles={[t("transfer.source"), t("transfer.target")]}
    />
  );
};

export const Controlled: Story = {
  render: () => <TransferWrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 左パネルに残っている最初の「外せる列」（dataSource の index 3）。
    // キー 1・2 は TransferWrapper の既定で target 側にある。
    const trackingColumn = canvas.getByText("Tracking number");
    await userEvent.click(trackingColumn);

    // Move to right
    const moveToRightButton = canvas.getByRole("button", { name: "Move to Target" });
    await userEvent.click(moveToRightButton);

    // 右パネルへ移ったことの確認（"Target" という見出しは翻訳されるため、
    // パネル名ではなく列名の存在で見る）。
    await expect(canvas.getByText("Tracking number")).toBeInTheDocument();
  },
};

const CustomTitlesTransfer = (args: React.ComponentProps<typeof Transfer>) => {
  const { t } = useTranslation(["docs_stories_common", "form"]);
  const dataSource = useDataSource();
  const labels = {
    noData: t("form:transfer.no_data"),
    moveToTarget: t("form:transfer.move_to_target"),
    moveToSource: t("form:transfer.move_to_source"),
    statusMovedToTarget: (count: number) => t("form:transfer.status_moved_to_target", { count }),
    statusMovedToSource: (count: number) => t("form:transfer.status_moved_to_source", { count }),
  };
  return (
    <Transfer
      {...args}
      dataSource={dataSource}
      titles={[t("docs_stories_common:story.transfer_available"), t("docs_stories_common:story.transfer_selected")]}
      targetKeys={["10", "11"]}
      labels={labels}
    />
  );
};

export const CustomTitles: Story = {
  render: (args) => <CustomTitlesTransfer {...args} />,
};

const DisabledTransfer = (args: React.ComponentProps<typeof Transfer>) => {
  const dataSource = useDataSource();
  return (
    <Transfer
      {...args}
      dataSource={dataSource}
      disabled={true}
      targetKeys={["1", "2"]}
    />
  );
};

export const Disabled: Story = {
  render: (args) => <DisabledTransfer {...args} />,
};
export const LongText: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const dataSource = [
      {
        key: "1",
        title: t("story.transfer_long_title"),
        description: t("story.transfer_long_desc"),
      },
      {
        key: "2",
        title: t("story.transfer_short_title"),
        description: t("story.transfer_short_desc"),
      },
    ];
    return <Transfer {...args} dataSource={dataSource} titles={["Very Long Title for the Source Panel Header", "Very Long Title for the Target Panel Header"]} />;
  },
};
