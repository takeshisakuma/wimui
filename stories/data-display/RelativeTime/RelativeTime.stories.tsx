import type { Meta, StoryObj } from "@storybook/react-vite";
import { RelativeTime } from "@/components/data-display/RelativeTime/RelativeTime";

/** Frozen VRT / Storybook clock baseline (see vrt/vrt.spec.ts setFixedTime). */
const VRT_NOW = new Date("2024-01-01T00:00:00Z");

const isVrt = () =>
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  typeof window !== "undefined" && Boolean(window.__VRT__);

const minutesAgo = (m: number) => {
  const base = isVrt() ? VRT_NOW.getTime() : Date.now();
  return new Date(base - m * 60_000);
};
const minutesLater = (m: number) => {
  const base = isVrt() ? VRT_NOW.getTime() : Date.now();
  return new Date(base + m * 60_000);
};

/** Under VRT, freeze live refresh so phrasing cannot change between paints. */
const vrtFreeze = (): { baseDate?: Date; live?: boolean } =>
  isVrt() ? { baseDate: VRT_NOW, live: false } : {};

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
    ...vrtFreeze(),
  },
};

export const Units: Story = {
  render: () => (
    <ul style={{ margin: 0, paddingLeft: "var(--wim-spacing-lg)" }}>
      <li>
        <RelativeTime date={minutesAgo(0.5)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(3)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 5)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 3)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 14)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 90)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 730)} {...vrtFreeze()} />
      </li>
    </ul>
  ),
};

export const FutureDate: Story = {
  args: {
    date: minutesLater(60 * 2),
    ...vrtFreeze(),
  },
};

export const NumericAlways: Story = {
  name: "Numeric: always",
  args: {
    date: minutesAgo(60 * 24),
    numeric: "always",
    ...vrtFreeze(),
  },
};

export const ShortFormat: Story = {
  args: {
    date: minutesAgo(3),
    format: "short",
    numeric: "always",
    ...vrtFreeze(),
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
      <RelativeTime date={minutesAgo(3)} locale="en" {...vrtFreeze()} />
      <RelativeTime date={minutesAgo(3)} locale="ja" {...vrtFreeze()} />
      <RelativeTime date={minutesAgo(3)} locale="pt-BR" {...vrtFreeze()} />
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
      Last updated <RelativeTime date={minutesAgo(12)} {...vrtFreeze()} />
    </p>
  ),
};
