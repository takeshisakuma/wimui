import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SourceCitation, SourceCitationList } from "./SourceCitation";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string, opts?: Record<string, unknown>) =>
      opts ? `${key}:${JSON.stringify(opts)}` : key,
  }),
}));

describe("SourceCitation", () => {
  it("renders title", () => {
    render(<SourceCitation title="React Docs" />);
    expect(screen.getByText("React Docs")).toBeInTheDocument();
  });

  it("renders as a link when url is provided", () => {
    render(<SourceCitation title="React Docs" url="https://react.dev" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://react.dev");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders as a div when no url", () => {
    render(<SourceCitation title="Internal Doc" />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("shows domain derived from url", () => {
    render(<SourceCitation title="React" url="https://www.react.dev/docs" />);
    expect(screen.getByText("react.dev")).toBeInTheDocument();
  });

  it("shows custom domain over derived domain", () => {
    render(<SourceCitation title="React" url="https://react.dev" domain="React Official" />);
    expect(screen.getByText("React Official")).toBeInTheDocument();
  });

  it("renders index badge", () => {
    render(<SourceCitation title="React" index={3} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<SourceCitation title="React" description="A JS library" />);
    expect(screen.getByText("A JS library")).toBeInTheDocument();
  });
});

describe("SourceCitationList", () => {
  const sources = [
    { title: "React Docs", url: "https://react.dev" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
  ];

  it("renders all sources", () => {
    render(<SourceCitationList sources={sources} />);
    expect(screen.getByText("React Docs")).toBeInTheDocument();
    expect(screen.getByText("MDN Web Docs")).toBeInTheDocument();
  });

  it("auto-assigns sequential indices", () => {
    render(<SourceCitationList sources={sources} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
