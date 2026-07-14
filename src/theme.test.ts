import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { getWimTheme, setWimTheme } from "./theme";

describe("setWimTheme / getWimTheme", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    document.documentElement.removeAttribute("data-theme");
  });

  it("defaults to system when attribute is absent", () => {
    expect(getWimTheme()).toBe("system");
  });

  it("sets light and dark on the document element", () => {
    setWimTheme("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(getWimTheme()).toBe("dark");
    setWimTheme("light");
    expect(getWimTheme()).toBe("light");
  });

  it("removes the attribute for system", () => {
    setWimTheme("dark");
    setWimTheme("system");
    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
    expect(getWimTheme()).toBe("system");
  });

  it("can target a nested element", () => {
    const scope = document.createElement("div");
    document.body.appendChild(scope);
    setWimTheme("dark", scope);
    expect(scope.getAttribute("data-theme")).toBe("dark");
    expect(getWimTheme(scope)).toBe("dark");
    expect(getWimTheme()).toBe("system");
    scope.remove();
  });
});
