import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { Banner } from "./Banner";
import React from "react";
import styles from "./banner.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Banner", () => {
  it("renders title and description", () => {
    render(<Banner title="Alert" description="Something happened" />);
    expect(screen.getByText("Alert")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<Banner title="Close me" onClose={onClose} />);

    const closeBtn = screen.getByLabelText(/Close/i);
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it("renders extra actions", () => {
    render(<Banner title="T" extra={<button>Action</button>} />);
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("renders children as description when no description prop", () => {
    render(<Banner title="T">Child content</Banner>);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders with icon=true (default icon)", () => {
    const { container } = render(<Banner title="Info" icon={true} intent="info" />);
    expect(container.querySelector(`.${styles.icon}`)).toBeInTheDocument();
  });

  it("renders with icon=false (no icon)", () => {
    const { container } = render(<Banner title="No icon" icon={false} />);
    expect(container.querySelector(`.${styles.icon}`)).not.toBeInTheDocument();
  });

  it("optically centers the icon on the first text line (T185)", () => {
    const scss = readFileSync(
      "src/components/feedback/Banner/banner.module.scss",
      "utf8",
    );
    const icon = scss.match(/^\s+\.icon\s*\{([^}]+)\}/m);
    expect(icon?.[1]).toMatch(/font-size:\s*var\(--wim-font-size-sm\)/);
    expect(icon?.[1]).toMatch(
      /padding-top:\s*calc\(\(var\(--wim-line-height-snug-jp\) - 1\) \* 1em \/ 2\)/,
    );
    expect(scss).toMatch(/align-items:\s*flex-start/);
  });
});
