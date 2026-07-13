import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { getWimDensity, setWimDensity } from "./density";

describe("setWimDensity / getWimDensity", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-density");
  });

  afterEach(() => {
    document.documentElement.removeAttribute("data-density");
  });

  it("defaults to comfortable", () => {
    expect(getWimDensity()).toBe("comfortable");
  });

  it("sets compact on the document element", () => {
    setWimDensity("compact");
    expect(document.documentElement.getAttribute("data-density")).toBe("compact");
    expect(getWimDensity()).toBe("compact");
  });

  it("resets to comfortable explicitly", () => {
    setWimDensity("compact");
    setWimDensity("comfortable");
    expect(document.documentElement.getAttribute("data-density")).toBe("comfortable");
    expect(getWimDensity()).toBe("comfortable");
  });

  it("can target a nested element", () => {
    const scope = document.createElement("div");
    document.body.appendChild(scope);
    setWimDensity("compact", scope);
    expect(scope.getAttribute("data-density")).toBe("compact");
    expect(getWimDensity(scope)).toBe("compact");
    expect(getWimDensity()).toBe("comfortable");
    scope.remove();
  });
});
