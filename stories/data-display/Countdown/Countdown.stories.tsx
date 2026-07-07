import type { Meta, StoryObj } from "@storybook/react-vite";
import { Countdown } from "@/components/data-display/Countdown/Countdown";

const secondsLater = (s: number) => new Date(Date.now() + s * 1_000);

const HOUR = 3_600;
const DAY = 86_400;

const meta: Meta<typeof Countdown> = {
  title: "Components/Data Indicators/Countdown",
  component: Countdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    target: { control: "date" },
    baseDate: { control: "date" },
    variant: {
      control: "radio",
      options: ["digital", "units"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    locale: {
      control: "select",
      options: [undefined, "en", "ja", "pt-BR"],
    },
    unitDisplay: {
      control: "radio",
      options: ["long", "short", "narrow"],
    },
    paused: { control: "boolean" },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  args: {
    target: secondsLater(4 * HOUR + 12 * 60 + 33),
  },
};

export const UnitsVariant: Story = {
  name: "Units variant",
  args: {
    target: secondsLater(2 * DAY + 4 * HOUR + 12 * 60 + 33),
    variant: "units",
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wim-spacing-md)",
        alignItems: "flex-start",
      }}
    >
      <Countdown target={secondsLater(4 * HOUR)} size="sm" />
      <Countdown target={secondsLater(4 * HOUR)} size="md" />
      <Countdown target={secondsLater(4 * HOUR)} size="lg" />
    </div>
  ),
};

export const OtpResend: Story = {
  name: "OTP resend wait",
  render: () => (
    <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
      Resend code in <Countdown target={secondsLater(45)} size="sm" />
    </p>
  ),
};

export const Completed: Story = {
  args: {
    target: new Date("2026-01-01T00:00:00Z"),
    baseDate: new Date("2026-01-01T00:00:10Z"),
    completedContent: "Sale ended",
    variant: "units",
  },
};

export const LocaleOverride: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wim-spacing-md)",
      }}
    >
      <Countdown
        target={secondsLater(2 * DAY + 4 * HOUR)}
        variant="units"
        locale="en"
      />
      <Countdown
        target={secondsLater(2 * DAY + 4 * HOUR)}
        variant="units"
        locale="ja"
      />
      <Countdown
        target={secondsLater(2 * DAY + 4 * HOUR)}
        variant="units"
        locale="pt-BR"
      />
    </div>
  ),
};

export const StaticSnapshot: Story = {
  name: "Static (baseDate)",
  args: {
    target: new Date("2026-07-14T09:00:00Z"),
    baseDate: new Date("2026-07-12T04:47:27Z"),
    variant: "units",
  },
};

export const Paused: Story = {
  args: {
    target: secondsLater(15 * 60),
    paused: true,
  },
};
