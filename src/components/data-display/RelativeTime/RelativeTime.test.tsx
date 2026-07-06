import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { RelativeTime } from "./RelativeTime";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "en" },
  }),
}));

const BASE = new Date("2026-07-07T12:00:00Z");
const minutesAgo = (m: number) => new Date(BASE.getTime() - m * 60_000);

afterEach(() => {
  vi.useRealTimers();
});

describe("RelativeTime", () => {
  it("renders a relative phrase in minutes", () => {
    render(<RelativeTime date={minutesAgo(3)} baseDate={BASE} />);
    expect(screen.getByText("3 minutes ago")).toBeInTheDocument();
  });

  it("renders idiomatic phrases with numeric auto", () => {
    render(
      <RelativeTime date={minutesAgo(60 * 24)} baseDate={BASE} numeric="auto" />
    );
    expect(screen.getByText("yesterday")).toBeInTheDocument();
  });

  it("renders numbers with numeric always", () => {
    render(
      <RelativeTime
        date={minutesAgo(60 * 24)}
        baseDate={BASE}
        numeric="always"
      />
    );
    expect(screen.getByText("1 day ago")).toBeInTheDocument();
  });

  it("renders future dates", () => {
    render(
      <RelativeTime
        date={new Date(BASE.getTime() + 2 * 3_600_000)}
        baseDate={BASE}
      />
    );
    expect(screen.getByText("in 2 hours")).toBeInTheDocument();
  });

  it("respects the format prop", () => {
    render(
      <RelativeTime
        date={minutesAgo(3)}
        baseDate={BASE}
        format="short"
        numeric="always"
      />
    );
    expect(screen.getByText("3 min. ago")).toBeInTheDocument();
  });

  it("respects the locale prop", () => {
    render(<RelativeTime date={minutesAgo(3)} baseDate={BASE} locale="ja" />);
    expect(screen.getByText("3 分前")).toBeInTheDocument();
  });

  it("outputs a semantic time element with dateTime and title", () => {
    const date = minutesAgo(3);
    const { container } = render(<RelativeTime date={date} baseDate={BASE} />);
    const time = container.querySelector("time");
    expect(time).toBeInTheDocument();
    expect(time).toHaveAttribute("dateTime", date.toISOString());
    expect(time).toHaveAttribute("title");
  });

  it("keeps a user-provided title", () => {
    const { container } = render(
      <RelativeTime date={minutesAgo(3)} baseDate={BASE} title="custom" />
    );
    expect(container.querySelector("time")).toHaveAttribute("title", "custom");
  });

  it("accepts ISO strings and epoch milliseconds", () => {
    render(
      <RelativeTime date={minutesAgo(5).toISOString()} baseDate={BASE} />
    );
    render(<RelativeTime date={minutesAgo(10).getTime()} baseDate={BASE} />);
    expect(screen.getByText("5 minutes ago")).toBeInTheDocument();
    expect(screen.getByText("10 minutes ago")).toBeInTheDocument();
  });

  it("renders the fallback for unparsable dates", () => {
    render(<RelativeTime date="not-a-date" fallback="—" />);
    expect(screen.getByText("—")).toBeInTheDocument();
  });

  it("updates automatically while live", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    render(<RelativeTime date={minutesAgo(1)} />);
    expect(screen.getByText("1 minute ago")).toBeInTheDocument();
    // 再描画のたびに次のタイマーが張り直されるため、小刻みに進める
    for (let i = 0; i < 5; i++) {
      act(() => {
        vi.advanceTimersByTime(15_000);
      });
    }
    expect(screen.getByText("2 minutes ago")).toBeInTheDocument();
  });

  it("does not update when live is false", () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE);
    render(<RelativeTime date={minutesAgo(1)} live={false} />);
    act(() => {
      vi.advanceTimersByTime(61_000);
    });
    expect(screen.getByText("1 minute ago")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <RelativeTime asChild date={minutesAgo(3)} baseDate={BASE}>
        <span data-testid="child" />
      </RelativeTime>
    );
    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("3 minutes ago");
  });
});
