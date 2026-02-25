import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { EmptyState } from "./EmptyState";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="No Data" description="Try creating new item" />);
    expect(screen.getByText("No Data")).toBeInTheDocument();
    expect(screen.getByText("Try creating new item")).toBeInTheDocument();
  });

  it("renders action", () => {
    render(<EmptyState title="Title" action={<button>Create</button>} />);
    expect(screen.getByText("Create")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    render(<EmptyState title="Title" variant="simple" />);
    // We need to find the wrapper. It has class wim-empty-state
    const title = screen.getByText("Title");
    const wrapper = title.closest(".wim-empty-state");
    expect(wrapper).toHaveClass("wim-empty-state--simple");
  });
});
