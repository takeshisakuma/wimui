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

  // T352: `{badge && …}` は 0 を素の「0」として描いていた（FloatButton と同じ形・#1023）
  it("does not render a bare 0 when badge is 0", () => {
    render(
      <TabBar>
        <TabBar.Item label="Inbox" badge={0} />
      </TabBar>,
    );
    expect(screen.getByRole("button")).toHaveTextContent(/^Inbox$/);
  });

  it("still renders a positive badge", () => {
    render(
      <TabBar>
        <TabBar.Item label="Inbox" badge={3} />
      </TabBar>,
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
