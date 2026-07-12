import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { TabNavigation } from "./TabNavigation";
import styles from "./tab-navigation.module.scss";

const originalRAF = window.requestAnimationFrame;

const renderTabs = async (activeTab = "home") => {
  const onClickHome = vi.fn();
  const onClickAbout = vi.fn();
  const onClickContact = vi.fn();
  let utils: ReturnType<typeof render> = null!;
  await act(async () => {
    utils = render(
      <TabNavigation>
        <TabNavigation.Item
          href="/home"
          active={activeTab === "home"}
          onClick={onClickHome}
        >
          Home
        </TabNavigation.Item>
        <TabNavigation.Item
          href="/about"
          active={activeTab === "about"}
          onClick={onClickAbout}
        >
          About
        </TabNavigation.Item>
        <TabNavigation.Item
          href="/contact"
          active={activeTab === "contact"}
          onClick={onClickContact}
        >
          Contact
        </TabNavigation.Item>
      </TabNavigation>,
    );
  });
  return { ...utils, onClickHome, onClickAbout, onClickContact };
};

describe("TabNavigation", () => {
  beforeAll(() => {
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 0;
    };
  });

  afterAll(() => {
    window.requestAnimationFrame = originalRAF;
  });
  it("renders items/links", async () => {
    await act(async () => {
      render(
        <TabNavigation>
          <TabNavigation.Item href="/home" active>
            Home
          </TabNavigation.Item>
          <TabNavigation.Item href="/about">About</TabNavigation.Item>
        </TabNavigation>,
      );
    });
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveAttribute("href", "/home");
    expect(homeLink).toHaveClass(styles.active);
  });

  it("prevents click and doesn't call onClick when disabled", async () => {
    const onClick = vi.fn();
    await act(async () => {
      render(
        <TabNavigation.Item disabled onClick={onClick}>
          Disabled
        </TabNavigation.Item>,
      );
    });
    const item = screen.getByText("Disabled");
    act(() => {
      fireEvent.click(item);
    });
    expect(onClick).not.toHaveBeenCalled();
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the active tab", async () => {
      await renderTabs("about");
      expect(screen.getByText("Home")).toHaveAttribute("tabindex", "-1");
      expect(screen.getByText("About")).toHaveAttribute("tabindex", "0");
      expect(screen.getByText("Contact")).toHaveAttribute("tabindex", "-1");
    });

    it("gives tabIndex=-1 to disabled tab regardless of active", async () => {
      await act(async () => {
        render(
          <TabNavigation>
            <TabNavigation.Item active disabled>
              Disabled Active
            </TabNavigation.Item>
          </TabNavigation>,
        );
      });
      expect(screen.getByText("Disabled Active")).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("keyboard navigation", () => {
    it("ArrowRight moves focus and calls onClick of next tab", async () => {
      const { onClickAbout } = await renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      });
      expect(document.activeElement).toBe(tabs[1]);
      expect(onClickAbout).toHaveBeenCalled();
    });

    it("ArrowLeft moves focus and calls onClick of previous tab", async () => {
      const { onClickHome } = await renderTabs("about");
      const tabs = screen.getAllByRole("tab");
      tabs[1].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowLeft" });
      });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("ArrowRight wraps from last to first", async () => {
      const { onClickHome } = await renderTabs("contact");
      const tabs = screen.getAllByRole("tab");
      tabs[2].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("ArrowLeft wraps from first to last", async () => {
      const { onClickContact } = await renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowLeft" });
      });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("Home moves focus to first tab", async () => {
      const { onClickHome } = await renderTabs("contact");
      const tabs = screen.getAllByRole("tab");
      tabs[2].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "Home" });
      });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("End moves focus to last tab", async () => {
      const { onClickContact } = await renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "End" });
      });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("skips disabled tabs when navigating", async () => {
      const onClickContact = vi.fn();
      await act(async () => {
        render(
          <TabNavigation>
            <TabNavigation.Item active onClick={vi.fn()}>Home</TabNavigation.Item>
            <TabNavigation.Item disabled onClick={vi.fn()}>About</TabNavigation.Item>
            <TabNavigation.Item onClick={onClickContact}>Contact</TabNavigation.Item>
          </TabNavigation>,
        );
      });
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("does not navigate on other keys", async () => {
      const { onClickAbout } = await renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      act(() => {
        fireEvent.keyDown(screen.getByRole("tablist"), { key: "Enter" });
      });
      expect(onClickAbout).not.toHaveBeenCalled();
    });
  });

  it("supports asChild on Item", async () => {
    await act(async () => {
      render(
        <TabNavigation>
          <TabNavigation.Item asChild active href="/ignored">
            <a href="/home" data-testid="tab-link">
              Home
            </a>
          </TabNavigation.Item>
          <TabNavigation.Item href="/about">About</TabNavigation.Item>
        </TabNavigation>,
      );
    });
    const link = screen.getByTestId("tab-link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("role", "tab");
    expect(link).toHaveAttribute("aria-selected", "true");
    expect(link).toHaveClass(styles.active);
  });
});
