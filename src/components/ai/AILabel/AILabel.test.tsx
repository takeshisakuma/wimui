import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AILabel } from "./AILabel";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("AILabel", () => {
  it("names the button so the visible text is part of the name", () => {
    render(<AILabel>Summarized by the assistant.</AILabel>);
    const button = screen.getByRole("button", { name: "AI-generated" });
    expect(button).toHaveTextContent("AI");
    expect(button).toHaveAttribute("type", "button");
  });

  it("does not show the explanation until pressed", () => {
    render(<AILabel>Summarized by the assistant.</AILabel>);
    expect(screen.queryByText("Summarized by the assistant.")).not.toBeInTheDocument();
  });

  it("opens the explanation as a dialog named by its heading", () => {
    render(<AILabel>Summarized by the assistant.</AILabel>);
    fireEvent.click(screen.getByRole("button", { name: "AI-generated" }));
    const dialog = screen.getByRole("dialog", { name: "AI-generated" });
    expect(dialog).toHaveTextContent("Summarized by the assistant.");
    expect(dialog).toHaveAttribute("data-part", "content");
  });

  it("uses the given title as the heading and the dialog name", () => {
    render(
      <AILabel title="Suggested by AI" defaultOpen>
        From the last three invoices.
      </AILabel>
    );
    expect(screen.getByRole("dialog", { name: "Suggested by AI" })).toBeInTheDocument();
    // The button keeps the built-in name.
    expect(screen.getByRole("button", { name: "AI-generated" })).toBeInTheDocument();
  });

  it("lets aria-label replace the built-in name", () => {
    render(<AILabel aria-label="AI-generated summary">Text</AILabel>);
    expect(screen.getByRole("button", { name: "AI-generated summary" })).toBeInTheDocument();
  });

  it("calls onOpenChange and the user's onClick", () => {
    const onOpenChange = vi.fn();
    const onClick = vi.fn();
    render(
      <AILabel onOpenChange={onOpenChange} onClick={onClick}>
        Text
      </AILabel>
    );
    fireEvent.click(screen.getByRole("button", { name: "AI-generated" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("forwards the ref to the button", () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<AILabel ref={ref}>Text</AILabel>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
