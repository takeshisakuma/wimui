import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  Button,
  Checkbox,
  Group,
  Input,
  OtpInput,
  RangeSlider,
  SegmentedControl,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  Textarea,
  ToggleGroup,
  Transfer,
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
  const [picked, setPicked] = useState<string[]>(["week"]);

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
        {/* T314 で密度に追従させた部品。compact の姿は、ここでしか撮られない。 */}
        <Tabs defaultValue="day">
          <Tabs.List>
            <Tabs.Trigger value="day">{t("story.density_day")}</Tabs.Trigger>
            <Tabs.Trigger value="week">{t("story.density_week")}</Tabs.Trigger>
            <Tabs.Trigger value="month">{t("story.density_month")}</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="day">{t("story.density_notes_ph")}</Tabs.Content>
        </Tabs>
        <Accordion type="single" collapsible defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>{t("story.accordion_trigger_1")}</Accordion.Trigger>
            <Accordion.Content>{t("story.accordion_content_1")}</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>{t("story.accordion_trigger_2")}</Accordion.Trigger>
            <Accordion.Content>{t("story.accordion_content_2")}</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <OtpInput length={4} label={t("story.density_role")} />
        <RangeSlider label={t("story.density_name")} defaultValue={[20, 80]} />
        <Transfer
          dataSource={[
            { key: "day", title: t("story.density_day") },
            { key: "week", title: t("story.density_week") },
            { key: "month", title: t("story.density_month") },
          ]}
          targetKeys={picked}
          onChange={setPicked}
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
        gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
        gap: "var(--wim-spacing-2xl)",
      }}
    >
      <DensityDemo density="comfortable" />
      <DensityDemo density="compact" />
    </div>
  ),
};
