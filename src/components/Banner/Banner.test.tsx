import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Banner } from "./Banner";
import React from "react";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Banner", () => {
  it("renders title and description", () => {
    render(<Banner title="Alert" description="Something happened" />);
    expect(screen.getByText("Alert")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<Banner title="Close me" onClose={onClose} />);

    const closeBtn = screen.getByLabelText(/Close/i);
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it("renders extra actions", () => {
    render(<Banner title="T" extra={<button>Action</button>} />);
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("renders children as description when no description prop", () => {
    render(<Banner title="T">Child content</Banner>);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders with icon=true (default icon)", () => {
    const { container } = render(<Banner title="Info" icon={true} status="info" />);
    expect(container.querySelector(".wim-banner__icon")).toBeInTheDocument();
  });

  it("renders with icon=false (no icon)", () => {
    const { container } = render(<Banner title="No icon" icon={false} />);
    expect(container.querySelector(".wim-banner__icon")).not.toBeInTheDocument();
  });
});
