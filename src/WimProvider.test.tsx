import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { getWimDensity } from "./density";
import { getWimLocale, setWimLocale } from "./i18n/instance";
import { getWimTheme } from "./theme";
import { useWim, WimProvider } from "./WimProvider";

function Probe() {
  const { theme, density, locale } = useWim();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="density">{density}</span>
      <span data-testid="locale">{locale}</span>
    </div>
  );
}

describe("WimProvider", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-density");
    setWimLocale("en");
  });

  afterEach(() => {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-density");
    setWimLocale("en");
  });

  it("applies theme, density, and locale to the document", () => {
    render(
      <WimProvider theme="dark" density="compact" locale="ja">
        <Probe />
      </WimProvider>,
    );

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(document.documentElement.getAttribute("data-density")).toBe("compact");
    expect(getWimTheme()).toBe("dark");
    expect(getWimDensity()).toBe("compact");
    expect(getWimLocale()).toBe("ja");
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(screen.getByTestId("density")).toHaveTextContent("compact");
    expect(screen.getByTestId("locale")).toHaveTextContent("ja");
  });

  it("removes data-theme for system", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    render(
      <WimProvider theme="system">
        <Probe />
      </WimProvider>,
    );
    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
    expect(getWimTheme()).toBe("system");
  });

  it("can target a nested root for theme and density", () => {
    const scope = document.createElement("div");
    document.body.appendChild(scope);

    render(
      <WimProvider theme="light" density="compact" root={scope}>
        <Probe />
      </WimProvider>,
    );

    expect(scope.getAttribute("data-theme")).toBe("light");
    expect(scope.getAttribute("data-density")).toBe("compact");
    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
    scope.remove();
  });

  it("useWim falls back to document globals outside a provider", () => {
    setWimThemeForTest();
    setWimDensityForTest();
    setWimLocale("pt");

    render(<Probe />);
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(screen.getByTestId("density")).toHaveTextContent("compact");
    expect(screen.getByTestId("locale")).toHaveTextContent("pt");
  });
});

function setWimThemeForTest() {
  document.documentElement.setAttribute("data-theme", "dark");
}

function setWimDensityForTest() {
  document.documentElement.setAttribute("data-density", "compact");
}
