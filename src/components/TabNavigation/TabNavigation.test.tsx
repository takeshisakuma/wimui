import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TabNavigation } from "./TabNavigation";

const renderTabs = (activeTab = "home") => {
  const onClickHome = vi.fn();
  const onClickAbout = vi.fn();
  const onClickContact = vi.fn();
  const utils = render(
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
  return { ...utils, onClickHome, onClickAbout, onClickContact };
};

describe("TabNavigation", () => {
  it("renders items/links", () => {
    render(
      <TabNavigation>
        <TabNavigation.Item href="/home" active>
          Home
        </TabNavigation.Item>
        <TabNavigation.Item href="/about">About</TabNavigation.Item>
      </TabNavigation>,
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveAttribute("href", "/home");
    expect(homeLink).toHaveClass("wim-tab-navigation__item--active");
  });

  it("prevents click and doesn't call onClick when disabled", () => {
    const onClick = vi.fn();
    render(
      <TabNavigation.Item disabled onClick={onClick}>
        Disabled
      </TabNavigation.Item>,
    );
    const item = screen.getByText("Disabled");
    fireEvent.click(item);
    expect(onClick).not.toHaveBeenCalled();
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the active tab", () => {
      renderTabs("about");
      expect(screen.getByText("Home")).toHaveAttribute("tabindex", "-1");
      expect(screen.getByText("About")).toHaveAttribute("tabindex", "0");
      expect(screen.getByText("Contact")).toHaveAttribute("tabindex", "-1");
    });

    it("gives tabIndex=-1 to disabled tab regardless of active", () => {
      render(
        <TabNavigation>
          <TabNavigation.Item active disabled>
            Disabled Active
          </TabNavigation.Item>
        </TabNavigation>,
      );
      expect(screen.getByText("Disabled Active")).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("keyboard navigation", () => {
    it("ArrowRight moves focus and calls onClick of next tab", () => {
      const { onClickAbout } = renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      expect(document.activeElement).toBe(tabs[1]);
      expect(onClickAbout).toHaveBeenCalled();
    });

    it("ArrowLeft moves focus and calls onClick of previous tab", () => {
      const { onClickHome } = renderTabs("about");
      const tabs = screen.getAllByRole("tab");
      tabs[1].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowLeft" });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("ArrowRight wraps from last to first", () => {
      const { onClickHome } = renderTabs("contact");
      const tabs = screen.getAllByRole("tab");
      tabs[2].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("ArrowLeft wraps from first to last", () => {
      const { onClickContact } = renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowLeft" });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("Home moves focus to first tab", () => {
      const { onClickHome } = renderTabs("contact");
      const tabs = screen.getAllByRole("tab");
      tabs[2].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "Home" });
      expect(document.activeElement).toBe(tabs[0]);
      expect(onClickHome).toHaveBeenCalled();
    });

    it("End moves focus to last tab", () => {
      const { onClickContact } = renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "End" });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("skips disabled tabs when navigating", () => {
      const onClickContact = vi.fn();
      render(
        <TabNavigation>
          <TabNavigation.Item active onClick={vi.fn()}>Home</TabNavigation.Item>
          <TabNavigation.Item disabled onClick={vi.fn()}>About</TabNavigation.Item>
          <TabNavigation.Item onClick={onClickContact}>Contact</TabNavigation.Item>
        </TabNavigation>,
      );
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
      expect(document.activeElement).toBe(tabs[2]);
      expect(onClickContact).toHaveBeenCalled();
    });

    it("does not navigate on other keys", () => {
      const { onClickAbout } = renderTabs("home");
      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();
      fireEvent.keyDown(screen.getByRole("tablist"), { key: "Enter" });
      expect(onClickAbout).not.toHaveBeenCalled();
    });
  });
});
