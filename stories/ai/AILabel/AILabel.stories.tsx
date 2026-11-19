import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { AILabel } from "@/components/ai/AILabel/AILabel";
import { Input } from "@/components/form/Input/Input";
import { Table } from "@/components/data-display/Table/Table";
import { Group } from "@/components/layout/Group/Group";
import { Stack } from "@/components/layout/Stack/Stack";
import { Title } from "@/components/typography/Title/Title";
import { Text } from "@/components/typography/Text/Text";

const meta: Meta<typeof AILabel> = {
  title: "Components/AI/AILabel",
  component: AILabel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    placement: {
      control: "select",
      options: ["bottom-start", "bottom", "bottom-end", "top-start", "top", "top-end"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AILabel>;

/**
 * 見出しの隣に置く。印は文章の中身より声量を下げ、押すと、何から何を作ったかが開く。
 */
export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="xs" style={{ maxWidth: "26rem" }}>
        {/* 印は見出しの中に置く（Title は幅いっぱいの塊なので、横に並べると次の行へ落ちる） */}
        <Title size="md">
          {t("story.ai_label_heading")}{" "}
          <AILabel {...args}>{t("story.ai_label_summary_explanation")}</AILabel>
        </Title>
        <Text size="sm">{t("story.ai_label_summary")}</Text>
      </Stack>
    );
  },
};

/**
 * 入力欄の中（`Input` の `suffix`）に置く。欄の説明として「AI が作成」も読まれる。
 */
export const InField: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Input
        label={t("story.ai_label_field_label")}
        defaultValue={t("story.ai_label_field_value")}
        width="md"
        suffix={<AILabel size="sm">{t("story.ai_label_field_explanation")}</AILabel>}
      />
    );
  },
};

/**
 * 表のセルの中に置く。AI が埋めた値の行にだけ付ける（人が入れた値には付けない）。
 */
export const InTableCell: Story = {
  parameters: { layout: "padded" },
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const rows = [
      { merchant: "ai_label_merchant_hotel", category: "ai_label_cat_lodging", amount: "¥8,900", ai: true },
      { merchant: "ai_label_merchant_rail", category: "ai_label_cat_train", amount: "¥11,210", ai: false },
      { merchant: "ai_label_merchant_cafe", category: "ai_label_cat_meals", amount: "¥1,340", ai: true },
    ];
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.ai_label_col_merchant")}</Table.Head>
            <Table.Head>{t("story.ai_label_col_category")}</Table.Head>
            <Table.Head>{t("story.ai_label_col_amount")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.merchant}>
              <Table.Cell>{t(`story.${row.merchant}`)}</Table.Cell>
              <Table.Cell>
                {t(`story.${row.category}`)}{" "}
                {row.ai && <AILabel size="sm">{t("story.ai_label_cell_explanation")}</AILabel>}
              </Table.Cell>
              <Table.Cell>{row.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

/** 3 つの大きさ。`sm` は入力欄とセルの中、`md` は見出しの隣、`lg` は大きな見出しの隣。 */
export const Sizes: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Group gap="md" align="center">
        <AILabel size="sm">{t("story.ai_label_summary_explanation")}</AILabel>
        <AILabel size="md">{t("story.ai_label_summary_explanation")}</AILabel>
        <AILabel size="lg">{t("story.ai_label_summary_explanation")}</AILabel>
      </Group>
    );
  },
};

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、説明の面を VRT と a11y に載せるために置く。
// docs ページには載せない（MDX の docs ページでは `!autodocs` が効かないので、docs.disable で外す）。
export const Open: Story = {
  ...Default,
  tags: ["!autodocs"],
  parameters: { docs: { disable: true } },
  args: { defaultOpen: true },
};
