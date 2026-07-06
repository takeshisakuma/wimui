import type { Meta, StoryObj } from "@storybook/react-vite";
import { RelativeTime } from "@/components/data-display/RelativeTime/RelativeTime";

const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000);
const minutesLater = (m: number) => new Date(Date.now() + m * 60_000);

const meta: Meta<typeof RelativeTime> = {
  title: "Components/Data Indicators/RelativeTime",
  component: RelativeTime,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    date: { control: "date" },
    baseDate: { control: "date" },
    locale: {
      control: "select",
      options: [undefined, "en", "ja", "pt-BR"],
    },
    numeric: {
      control: "radio",
      options: ["auto", "always"],
    },
    format: {
      control: "radio",
      options: ["long", "short", "narrow"],
    },
    live: { control: "boolean" },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RelativeTime>;

export const Default: Story = {
  args: {
    date: minutesAgo(3),
  },
};

export const Units: Story = {
  render: () => (
    <ul style={{ margin: 0, paddingLeft: "var(--wim-spacing-lg)" }}>
      <li>
        <RelativeTime date={minutesAgo(0.5)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(3)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 5)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 3)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 14)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 90)} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 730)} />
      </li>
    </ul>
  ),
};

export const FutureDate: Story = {
  args: {
    date: minutesLater(60 * 2),
  },
};

export const NumericAlways: Story = {
  name: "Numeric: always",
  args: {
    date: minutesAgo(60 * 24),
    numeric: "always",
  },
};

export const ShortFormat: Story = {
  args: {
    date: minutesAgo(3),
    format: "short",
    numeric: "always",
  },
};

export const LocaleOverride: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wim-spacing-sm)",
      }}
    >
      <RelativeTime date={minutesAgo(3)} locale="en" />
      <RelativeTime date={minutesAgo(3)} locale="ja" />
      <RelativeTime date={minutesAgo(3)} locale="pt-BR" />
    </div>
  ),
};

export const StaticSnapshot: Story = {
  name: "Static (baseDate)",
  args: {
    date: new Date("2026-07-01T09:00:00Z"),
    baseDate: new Date("2026-07-07T09:00:00Z"),
  },
};

export const InSentence: Story = {
  render: () => (
    <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
      Last updated <RelativeTime date={minutesAgo(12)} />
    </p>
  ),
};
