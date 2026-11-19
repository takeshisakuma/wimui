import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeader } from "./PageHeader";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("PageHeader", () => {
  it("renders the title as the page's h1", () => {
    render(<PageHeader title="Lot intake" />);
    const heading = screen.getByRole("heading", { level: 1, name: "Lot intake" });
    expect(heading).toHaveAttribute("data-part", "title");
  });

  it("renders no landmark of its own", () => {
    const { container } = render(<PageHeader title="Lot intake" />);
    expect(container.querySelector("header")).toBeNull();
    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
  });

  it("renders only the parts it is given", () => {
    const { container } = render(<PageHeader title="Lot intake" />);
    const parts = [...container.querySelectorAll("[data-part]")].map((el) => el.getAttribute("data-part"));
    expect(parts).toEqual(["title"]);
  });

  it("puts every part in a fixed order", () => {
    const { container } = render(
      <PageHeader
        // 渡す順を入れ替えても、並びは部品が決める
        tabs={<nav aria-label="Views">Views</nav>}
        actions={<button type="button">Register lot</button>}
        description="3 of 12 lots are on hold"
        status={<span>On hold</span>}
        title="Lot intake"
        breadcrumb={<nav aria-label="Breadcrumb">Receiving</nav>}
      />
    );
    const parts = [...container.querySelectorAll("[data-part]")].map((el) => el.getAttribute("data-part"));
    expect(parts).toEqual(["breadcrumb", "title", "status", "description", "actions", "tabs"]);
    expect(screen.getByRole("button", { name: "Register lot" })).toBeInTheDocument();
  });

  it("forwards the ref and extra props to the root", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<PageHeader ref={ref} title="Lot intake" data-testid="head" className="custom" />);
    expect(ref.current).toBe(screen.getByTestId("head"));
    expect(ref.current).toHaveClass("wim-page-header", "custom");
  });
});
