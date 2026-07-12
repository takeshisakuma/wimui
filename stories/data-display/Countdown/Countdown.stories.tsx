import type { Meta, StoryObj } from "@storybook/react-vite";
import { Countdown } from "@/components/data-display/Countdown/Countdown";

/** Frozen VRT / Storybook clock baseline (see vrt/vrt.spec.ts setFixedTime). */
const VRT_NOW = new Date("2024-01-01T00:00:00Z");

const isVrt = () =>
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  typeof window !== "undefined" && Boolean(window.__VRT__);

const secondsLater = (s: number) => {
  const base = isVrt() ? VRT_NOW.getTime() : Date.now();
  return new Date(base + s * 1_000);
};

/** Under VRT, pin baseDate so the live 1s refresh loop never mutates the frame. */
const vrtBase = (): { baseDate?: Date; paused?: boolean } =>
  isVrt() ? { baseDate: VRT_NOW, paused: true } : {};

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
    ...vrtBase(),
  },
};

export const UnitsVariant: Story = {
  name: "Units variant",
  args: {
    target: secondsLater(2 * DAY + 4 * HOUR + 12 * 60 + 33),
    variant: "units",
    ...vrtBase(),
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
      <Countdown target={secondsLater(4 * HOUR)} size="sm" {...vrtBase()} />
      <Countdown target={secondsLater(4 * HOUR)} size="md" {...vrtBase()} />
      <Countdown target={secondsLater(4 * HOUR)} size="lg" {...vrtBase()} />
    </div>
  ),
};

export const OtpResend: Story = {
  name: "OTP resend wait",
  render: () => (
    <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
      Resend code in <Countdown target={secondsLater(45)} size="sm" {...vrtBase()} />
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
        {...vrtBase()}
      />
      <Countdown
        target={secondsLater(2 * DAY + 4 * HOUR)}
        variant="units"
        locale="ja"
        {...vrtBase()}
      />
      <Countdown
        target={secondsLater(2 * DAY + 4 * HOUR)}
        variant="units"
        locale="pt-BR"
        {...vrtBase()}
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
    ...(isVrt() ? { baseDate: VRT_NOW } : {}),
  },
};
