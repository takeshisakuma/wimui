import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Persona } from "./Persona";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Persona", () => {
  it("names the person once: the avatar is hidden from assistive technology", () => {
    const { container } = render(
      <Persona name="Priya Raman" description="SRE" avatar={{ initials: "PR" }} />
    );
    // 名前の文字は 1 か所だけ。アバターの根は支援技術から隠す（Avatar はイニシャルだけのとき
    // role="img" と aria-label="PR" を自分で付けるので、隠さないと「PR」も読まれる）
    expect(container.querySelector(".wim-avatar")).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByRole("img", { name: "Priya Raman" })).not.toBeInTheDocument();
    expect(screen.getAllByText("Priya Raman")).toHaveLength(1);
    expect(container.querySelector("img[alt]:not([alt=''])")).toBeNull();
  });

  it("does not name an image avatar with the person's name", () => {
    const { container } = render(<Persona name="Priya Raman" avatar={{ src: "/p.png" }} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("alt", "");
  });

  it("renders only the description lines it is given, in order", () => {
    const { container, rerender } = render(<Persona name="Priya Raman" />);
    const parts = () => [...container.querySelectorAll("[data-part]")].map((el) => el.getAttribute("data-part"));
    expect(parts()).toEqual(["name"]);
    rerender(<Persona name="Priya Raman" description="SRE" secondaryDescription="Replied 5 min ago" />);
    expect(parts()).toEqual(["name", "description", "secondary-description"]);
  });

  it("announces presence right after the name, not before it", () => {
    const { container } = render(<Persona name="Priya Raman" presence="online" />);
    // Presence 自身の文字は読ませない（名前より先に読まれるため）
    expect(container.querySelector(".wim-presence")).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelector('[data-part="name"]')).toHaveTextContent("Priya Raman, Online");
  });

  it("matches the avatar size to the text size", () => {
    const { container } = render(<Persona name="Priya Raman" size="lg" textPosition="below" />);
    const root = container.querySelector(".wim-persona")!;
    expect(root.className).toMatch(/lg/);
    expect(root.className).toMatch(/below/);
  });

  it("forwards the ref and extra props to the root", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Persona ref={ref} name="Priya Raman" data-testid="p" className="custom" />);
    expect(ref.current).toBe(screen.getByTestId("p"));
    expect(ref.current).toHaveClass("wim-persona", "custom");
  });
});
