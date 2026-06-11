import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AIResponseFeedback } from "./AIResponseFeedback";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("AIResponseFeedback", () => {
  it("renders positive and negative buttons", () => {
    render(<AIResponseFeedback />);
    expect(screen.getByLabelText("ai_feedback.positive_label")).toBeInTheDocument();
    expect(screen.getByLabelText("ai_feedback.negative_label")).toBeInTheDocument();
  });

  it("calls onFeedback with 'positive' when positive button clicked", () => {
    const onFeedback = vi.fn();
    render(<AIResponseFeedback onFeedback={onFeedback} />);
    fireEvent.click(screen.getByLabelText("ai_feedback.positive_label"));
    expect(onFeedback).toHaveBeenCalledWith("positive");
  });

  it("calls onFeedback with null when same button clicked again (toggle off)", () => {
    const onFeedback = vi.fn();
    render(<AIResponseFeedback defaultFeedback="positive" onFeedback={onFeedback} />);
    fireEvent.click(screen.getByLabelText("ai_feedback.positive_label"));
    expect(onFeedback).toHaveBeenCalledWith(null);
  });

  it("does not render regenerate button by default", () => {
    render(<AIResponseFeedback />);
    expect(screen.queryByLabelText("ai_feedback.regenerate_label")).not.toBeInTheDocument();
  });

  it("renders regenerate button when showRegenerate is true", () => {
    render(<AIResponseFeedback showRegenerate />);
    expect(screen.getByLabelText("ai_feedback.regenerate_label")).toBeInTheDocument();
  });

  it("calls onRegenerate when regenerate button clicked", () => {
    const onRegenerate = vi.fn();
    render(<AIResponseFeedback showRegenerate onRegenerate={onRegenerate} />);
    fireEvent.click(screen.getByLabelText("ai_feedback.regenerate_label"));
    expect(onRegenerate).toHaveBeenCalled();
  });

  it("disables all buttons when disabled", () => {
    render(<AIResponseFeedback disabled showRegenerate />);
    screen.getAllByRole("button").forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });
});
