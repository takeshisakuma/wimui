import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
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

const meta: Meta = {
  title: "Token/Density",
  parameters: {
    layout: "padded",
  },
};

export default meta;

function DensityDemo({ density }: { density: "comfortable" | "compact" }) {
  const [range, setRange] = useState("week");
  const [align, setAlign] = useState("left");

  return (
    <div data-density={density} style={{ padding: "var(--wim-spacing-xl)" }}>
      {/* i18n-ignore-start */}
      <Stack gap="lg">
        <Text content={`${density} density`} size="sm" color="text-secondary" />
        <Group gap="md" align="center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Group>
        <Input label="Email" placeholder="you@example.com" fullWidth />
        <Textarea label="Notes" placeholder="Optional notes" fullWidth rows={2} />
        <Group gap="lg" align="center">
          <Checkbox defaultChecked>Notify me</Checkbox>
          <Switch defaultChecked>Compact rows</Switch>
        </Group>
        <SegmentedControl
          options={[
            { label: "Day", value: "day" },
            { label: "Week", value: "week" },
            { label: "Month", value: "month" },
          ]}
          value={range}
          onChange={setRange}
        />
        <ToggleGroup
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
          value={align}
          onChange={(value) => setAlign(typeof value === "string" ? value : value[0] ?? "left")}
        />
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Role</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Ada</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grace</Table.Cell>
              <Table.Cell>Editor</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Stack>
      {/* i18n-ignore-end */}
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
