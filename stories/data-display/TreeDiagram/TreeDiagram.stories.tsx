import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Avatar, Text, TreeDiagram, type TreeDiagramNode } from "wimui";

const meta: Meta<typeof TreeDiagram> = {
  title: "Components/Visualization/TreeDiagram",
  component: TreeDiagram,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    orientation: { control: "radio", options: ["vertical", "horizontal"] },
  },
};

export default meta;
type Story = StoryObj<typeof TreeDiagram>;

// 人名は言語をまたいで共通。肩書きだけを翻訳する。チームの人数は揃えない（実際の組織は揃わない）
const useOrg = (withAvatars = false): TreeDiagramNode[] => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const person = (value: string, name: string, role: string, children?: TreeDiagramNode[]): TreeDiagramNode => ({
    value,
    label: name,
    description: t(`story.treediagram_role_${role}`),
    avatar: withAvatars ? <Avatar size="sm" initials={name.split(" ").map((w) => w[0]).join("")} /> : undefined,
    children,
  });
  return [
    person("mariana", "Mariana Costa", "ceo", [
      person("kenji", "Kenji Watanabe", "cto", [
        person("amara", "Amara Okafor", "backend"),
        person("liam", "Liam O'Connor", "frontend"),
        person("priya", "Priya Raman", "backend"),
      ]),
      person("sofia", "Sofia Lindqvist", "design"),
      person("tomas", "Tomás Herrera", "operations", [
        person("nadia", "Nadia Haddad", "support"),
        person("yuki", "Yuki Sato", "finance"),
      ]),
    ]),
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} />;
  },
};

/** 左から右へ。深い木や、横幅の狭い置き場に向く。 */
export const Horizontal: Story = {
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} />;
  },
  args: {
    orientation: "horizontal",
  },
};

/** 開いておく部分木を選ぶ。畳んだノードは、隠れている人数をボタンに出す。 */
export const Collapsed: Story = {
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} defaultExpandedValues={["mariana", "tomas"]} />;
  },
};

/** `onSelect` を渡すと選べる（渡さなければ読み取り専用）。 */
export const Selectable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const nodes = useOrg();
    const [selected, setSelected] = useState<string | null>("kenji");
    const find = (list: TreeDiagramNode[]): TreeDiagramNode | undefined =>
      list.reduce<TreeDiagramNode | undefined>((hit, n) => hit ?? (n.value === selected ? n : find(n.children ?? [])), undefined);
    const chosen = find(nodes);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
        <TreeDiagram {...args} nodes={nodes} selectedValue={selected} onSelect={setSelected} />
        <Text size="sm" color="text-tertiary" aria-live="polite">
          {t("story.treediagram_selected", { name: chosen?.label ?? "", role: chosen?.description ?? "" })}
        </Text>
      </div>
    );
  },
};

export const WithAvatars: Story = {
  render: function Render(args) {
    const nodes = useOrg(true);
    return <TreeDiagram {...args} nodes={nodes} nodeWidth={220} />;
  },
};
