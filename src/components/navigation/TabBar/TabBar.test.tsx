import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TabBar } from "./TabBar";
import styles from "./tab-bar.module.scss";

describe("TabBar", () => {
  it("renders children and applies fixed class by default", () => {
    const { container } = render(
      <TabBar>
        <TabBar.Item label="Home" />
      </TabBar>,
    );
    expect(container.firstChild).toHaveClass(styles.fixed);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders labels and icons", () => {
    render(
      <TabBar>
        <TabBar.Item
          icon={<span data-testid="icon">Icon</span>}
          label="Settings"
        />
      </TabBar>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("supports asChild on Item", () => {
    render(
      <TabBar>
        <TabBar.Item asChild active label="Home">
          <a href="/home" data-testid="tab-link">
            Home
          </a>
        </TabBar.Item>
      </TabBar>,
    );
    const link = screen.getByTestId("tab-link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("aria-pressed", "true");
    expect(link).toHaveClass(styles.active);
  });
});
