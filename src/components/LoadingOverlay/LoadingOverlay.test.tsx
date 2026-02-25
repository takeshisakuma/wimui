import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingOverlay from "./LoadingOverlay";

describe("LoadingOverlay", () => {
  it("renders nothing when visible is false", () => {
    const { container } = render(<LoadingOverlay visible={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders overlay when visible is true", () => {
    const { container } = render(<LoadingOverlay visible={true} />);
    const overlay = container.querySelector(".wim-loading-overlay");
    expect(overlay).toBeInTheDocument();
  });

  it("renders spinner by default", () => {
    const { container } = render(<LoadingOverlay visible={true} />);
    const spinner = container.querySelector(".wim-spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders loader with specified type", () => {
    const { container } = render(
      <LoadingOverlay visible={true} loaderType="bars" />,
    );
    const loader = container.querySelector(".wim-loader--bars");
    expect(loader).toBeInTheDocument();
  });

  it("renders message when provided", () => {
    render(<LoadingOverlay visible={true} message="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies fixed class when fixed prop is true", () => {
    const { container } = render(
      <LoadingOverlay visible={true} fixed={true} />,
    );
    const overlay = container.querySelector(".wim-loading-overlay--fixed");
    expect(overlay).toBeInTheDocument();
  });

  it("applies custom zIndex when provided", () => {
    const { container } = render(
      <LoadingOverlay visible={true} zIndex={9999} />,
    );
    const overlay = container.querySelector(
      ".wim-loading-overlay",
    ) as HTMLElement;
    expect(overlay.style.zIndex).toBe("9999");
  });

  it("renders custom children when provided", () => {
    render(
      <LoadingOverlay visible={true}>
        <div>Custom Loader</div>
      </LoadingOverlay>,
    );
    expect(screen.getByText("Custom Loader")).toBeInTheDocument();
  });

  it("applies backdrop variant class", () => {
    const { container } = render(
      <LoadingOverlay visible={true} backdropVariant="light" />,
    );
    const backdrop = container.querySelector(
      ".wim-loading-overlay__backdrop--light",
    );
    expect(backdrop).toBeInTheDocument();
  });

  it("applies blur class", () => {
    const { container } = render(<LoadingOverlay visible={true} blur="lg" />);
    const backdrop = container.querySelector(
      ".wim-loading-overlay__backdrop--blur-lg",
    );
    expect(backdrop).toBeInTheDocument();
  });

  it("has correct aria attributes", () => {
    const { container } = render(<LoadingOverlay visible={true} />);
    const overlay = container.querySelector(".wim-loading-overlay");
    expect(overlay).toHaveAttribute("role", "status");
    expect(overlay).toHaveAttribute("aria-live", "polite");
    expect(overlay).toHaveAttribute("aria-busy", "true");
  });
});
