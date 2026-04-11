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
  const { t } = useTranslation("docs");
  return Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    title: `${t("story.transfer_item")} ${i + 1}`,
    description: `${t("story.transfer_desc")} ${i + 1}`,
    disabled: i % 5 === 0,
  }));
};

const DefaultTransfer = (args: React.ComponentProps<typeof Transfer>) => {
  const dataSource = useDataSource();
  return <Transfer {...args} dataSource={dataSource} targetKeys={["1", "3", "5"]} />;
};

export const Default: Story = {
  render: (args) => <DefaultTransfer {...args} />,
};

const TransferWrapper = () => {
  const dataSource = useDataSource();
  const [targetKeys, setTargetKeys] = useState<string[]>(["1", "2"]);
  return (
    <Transfer
      dataSource={dataSource}
      targetKeys={targetKeys}
      onChange={(nextTargetKeys) => setTargetKeys(nextTargetKeys)}
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
    const targetList = canvas.getByRole("listbox", { name: "Target" });
    await expect(within(targetList).getByText("Item 4")).toBeInTheDocument();
  },
};

const CustomTitlesTransfer = (args: React.ComponentProps<typeof Transfer>) => {
  const { t } = useTranslation("docs");
  const dataSource = useDataSource();
  return (
    <Transfer
      {...args}
      dataSource={dataSource}
      titles={[t("story.transfer_available"), t("story.transfer_selected")]}
      targetKeys={["10", "11"]}
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
