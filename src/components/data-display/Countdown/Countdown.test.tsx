import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Countdown } from "./Countdown";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string, options?: Record<string, unknown>) =>
      key === "countdown.remaining" ? `${options?.time} remaining` : key,
    i18n: { language: "en" },
  }),
}));

const BASE = new Date("2026-07-07T12:00:00Z");
const later = (seconds: number) => new Date(BASE.getTime() + seconds * 1_000);

const HOUR = 3_600;
const DAY = 86_400;

afterEach(() => {
  vi.useRealTimers();
});

describe("Countdown", () => {
  it("renders remaining time as colon-separated digits", () => {
    const { container } = render(
      <Countdown target={later(4 * HOUR + 12 * 60 + 33)} baseDate={BASE} />
    );
    expect(container.querySelector("time")).toHaveTextContent("04:12:33");
  });

  it("omits the hours segment under one hour", () => {
    const { container } = render(
      <Countdown target={later(12 * 60 + 33)} baseDate={BASE} />
    );
    expect(container.querySelector("time")).toHaveTextContent(/^12:33$/);
  });

  it("folds days into hours in the digital variant", () => {
    const { container } = render(
      <Countdown target={later(2 * DAY + 4 * HOUR)} baseDate={BASE} />
    );
    expect(container.querySelector("time")).toHaveTextContent("52:00:00");
  });

  it("renders labeled segments in the units variant", () => {
    render(
      <Countdown
        target={later(2 * DAY + 4 * HOUR)}
        baseDate={BASE}
        variant="units"
        unitDisplay="long"
      />
    );
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("days")).toBeInTheDocument();
    expect(screen.getByText("hours")).toBeInTheDocument();
    expect(screen.getByText("minutes")).toBeInTheDocument();
    expect(screen.getByText("seconds")).toBeInTheDocument();
  });

  it("localizes unit labels via the locale prop", () => {
    render(
      <Countdown
        target={later(2 * DAY)}
        baseDate={BASE}
        variant="units"
        unitDisplay="long"
        locale="ja"
      />
    );
    expect(screen.getByText("日")).toBeInTheDocument();
    expect(screen.getByText("時間")).toBeInTheDocument();
  });

  it("exposes a semantic time element with role, dateTime and aria-label", () => {
    const target = later(90);
    render(<Countdown target={target} baseDate={BASE} />);
    const timer = screen.getByRole("timer");
    expect(timer).toHaveAttribute("dateTime", target.toISOString());
    expect(timer).toHaveAttribute("aria-label", "1 minute 30 seconds remaining");
  });

  it("renders zeros once the target has passed", () => {
    const { container } = render(
      <Countdown target={later(-10)} baseDate={BASE} />
    );
    expect(container.querySelector("time")).toHaveTextContent(/^00:00$/);
  });

  it("renders completedContent once the target has passed", () => {
    render(
      <Countdown
        target={later(-10)}
        baseDate={BASE}
        completedContent="Sale ended"
      />
    );
    expect(screen.getByText("Sale ended")).toBeInTheDocument();
  });

  it("ticks down every second while live", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    const { container } = render(<Countdown target={later(90)} />);
    expect(container.querySelector("time")).toHaveTextContent(/^01:30$/);
    act(() => {
      vi.advanceTimersByTime(1_000);
    });
    expect(container.querySelector("time")).toHaveTextContent(/^01:29$/);
  });

  it("calls onComplete once when reaching zero", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    const onComplete = vi.fn();
    render(<Countdown target={later(2)} onComplete={onComplete} />);
    // 再描画のたびに次のタイマーが張り直されるため、小刻みに進める
    for (let i = 0; i < 3; i++) {
      act(() => {
        vi.advanceTimersByTime(1_000);
      });
    }
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("does not tick while paused", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    const { container } = render(<Countdown target={later(90)} paused />);
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(container.querySelector("time")).toHaveTextContent(/^01:30$/);
  });

  it("does not tick when baseDate is set", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    const { container } = render(
      <Countdown target={later(90)} baseDate={BASE} />
    );
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(container.querySelector("time")).toHaveTextContent(/^01:30$/);
  });

  it("accepts ISO strings and epoch milliseconds", () => {
    const { container } = render(
      <Countdown target={later(60).toISOString()} baseDate={BASE.getTime()} />
    );
    expect(container.querySelector("time")).toHaveTextContent(/^01:00$/);
  });

  it("renders the fallback for unparsable targets", () => {
    render(<Countdown target="not-a-date" fallback="—" />);
    expect(screen.getByText("—")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <Countdown asChild target={later(90)} baseDate={BASE}>
        <span data-testid="child" />
      </Countdown>
    );
    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("01:30");
  });
});
