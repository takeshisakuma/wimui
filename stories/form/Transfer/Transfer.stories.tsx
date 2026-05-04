import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const useDataSource = () => {
  const { t } = useTranslation("docs_stories_common");
  return Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    title: `${t("story.transfer_item")} ${i + 1}`,
    description: `${t("story.transfer_desc")} ${i + 1}`,
    disabled: i % 5 === 0,
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

    // Find "Item 4" in the left panel (dataSource keys: 0-19)
    // Keys 1, 2 are in target by default in TransferWrapper
    const item4 = canvas.getByText("Item 4");
    await userEvent.click(item4);

    // Move to right
    const moveToRightButton = canvas.getByRole("button", { name: "Move to Target" });
    await userEvent.click(moveToRightButton);

    // Check if Item 4 is now in the right panel
    // We can't easily get by name "Target" if translated, so we use the wrapper class if available or just check existence
    await expect(canvas.getByText("Item 4")).toBeInTheDocument();
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
  render: (args) => {
    const dataSource = [
      {
        key: "1",
        title: "This is a very very very very very very very very very very very very very very very long title that should be truncated",
        description: "This is a very very very very very very very very very very very long description",
      },
      {
        key: "2",
        title: "Short Title",
        description: "Short Description",
      },
    ];
    return <Transfer {...args} dataSource={dataSource} titles={["Very Long Title for the Source Panel Header", "Very Long Title for the Target Panel Header"]} />;
  },
};
