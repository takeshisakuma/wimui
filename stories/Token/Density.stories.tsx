import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Checkbox,
  Group,
  Input,
  SegmentedControl,
  Stack,
  Switch,
  Table,
  Text,
  Textarea,
  ToggleGroup,
} from "wimui";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta = {
  title: "Token/Density",
  parameters: {
    layout: "padded",
  },
};

export default meta;

function DensityDemo({ density }: { density: "comfortable" | "compact" }) {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [range, setRange] = useState("week");
  const [align, setAlign] = useState("left");

  return (
    <div data-density={density} style={{ padding: "var(--wim-spacing-xl)" }}>
      <Stack gap="lg">
        <Text
          content={t(`story.density_${density}`)}
          size="sm"
          color="text-secondary"
        />
        <Group gap="md" align="center">
          <Button size="sm">{t("common.small")}</Button>
          <Button size="md">{t("common.medium")}</Button>
          <Button size="lg">{t("common.large")}</Button>
        </Group>
        <Input
          label={t("story.density_email")}
          placeholder={t("story.density_email_ph")}
          fullWidth
        />
        <Textarea
          label={t("story.density_notes")}
          placeholder={t("story.density_notes_ph")}
          fullWidth
          rows={2}
        />
        <Group gap="lg" align="center">
          <Checkbox defaultChecked>{t("story.density_notify")}</Checkbox>
          <Switch defaultChecked>{t("story.density_compact_rows")}</Switch>
        </Group>
        <SegmentedControl
          options={[
            { label: t("story.density_day"), value: "day" },
            { label: t("story.density_week"), value: "week" },
            { label: t("story.density_month"), value: "month" },
          ]}
          value={range}
          onChange={setRange}
        />
        <ToggleGroup
          options={[
            { label: t("story.toggle_left"), value: "left" },
            { label: t("story.toggle_center"), value: "center" },
            { label: t("story.toggle_right"), value: "right" },
          ]}
          value={align}
          onChange={(value) => setAlign(typeof value === "string" ? value : value[0] ?? "left")}
        />
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>{t("story.density_name")}</Table.Head>
              <Table.Head>{t("story.density_role")}</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Ada</Table.Cell>
              <Table.Cell>{t("story.tree_admin")}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grace</Table.Cell>
              <Table.Cell>{t("story.density_editor")}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Stack>
    </div>
  );
}

export const Comfortable: StoryObj = {
  render: () => <DensityDemo density="comfortable" />,
};

export const Compact: StoryObj = {
  render: () => <DensityDemo density="compact" />,
};

export const SideBySide: StoryObj = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--wim-spacing-2xl)",
      }}
    >
      <DensityDemo density="comfortable" />
      <DensityDemo density="compact" />
    </div>
  ),
};
