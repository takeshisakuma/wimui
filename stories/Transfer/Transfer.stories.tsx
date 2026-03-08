import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Transfer, TransferItem } from "../../src/components/Transfer/Transfer";

const meta: Meta<typeof Transfer> = {
  title: "Components/Advanced Inputs/Transfer",
  component: Transfer,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

const useDataSource = () => {
  const { t } = useTranslation("docs");
  return Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    title: `${t("story_transfer_item")} ${i + 1}`,
    description: `${t("story_transfer_desc")} ${i + 1}`,
    disabled: i % 5 === 0,
  }));
};

export const Default: Story = {
  render: (args) => {
    const dataSource = useDataSource();
    return <Transfer {...args} dataSource={dataSource} targetKeys={["1", "3", "5"]} />;
  },
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
};

export const CustomTitles: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const dataSource = useDataSource();
    return (
      <Transfer
        {...args}
        dataSource={dataSource}
        titles={[t("story_transfer_available"), t("story_transfer_selected")]}
        targetKeys={["10", "11"]}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const dataSource = useDataSource();
    return (
      <Transfer
        {...args}
        dataSource={dataSource}
        disabled={true}
        targetKeys={["1", "2"]}
      />
    );
  },
};
