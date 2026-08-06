import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingOverlay from "./LoadingOverlay";
import styles from "./loadingoverlay.module.scss";

describe("LoadingOverlay", () => {
  it("renders nothing when visible is false", () => {
    const { container } = render(<LoadingOverlay visible={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders overlay when visible is true", () => {
    render(<LoadingOverlay visible={true} />);
    const overlay = screen.getByTestId("loading-overlay");
    expect(overlay).toBeInTheDocument();
  });

  it("renders spinner by default", () => {
    const { container } = render(<LoadingOverlay visible={true} />);
    // Simply check if an svg exists inside the content area
    const content = container.querySelector(`.${styles.content}`);
    expect(content?.querySelector("svg")).toBeInTheDocument();
  });

  // T87: `loaderSize` は `xl` を受け付けるのに `lg` へ潰されていた（sizeMap の
  // `xl: "lg"`）。`Spinner` / `Loader` はどちらも `.xl` を実装しているので、
  // 「受け付けたサイズがそのまま描かれる」ことをサイズごとに固定する。
  it.each(["sm", "md", "lg", "xl"] as const)(
    "passes loaderSize=%s through to the spinner",
    (size) => {
      const { container } = render(<LoadingOverlay visible={true} loaderSize={size} />);
      const svg = container.querySelector("svg.wim-spinner");
      expect(svg?.getAttribute("class")).toContain(size);
    },
  );

  it("renders a different size for xl than for lg", () => {
    const classesFor = (size: "lg" | "xl") => {
      const { container } = render(<LoadingOverlay visible={true} loaderSize={size} />);
      return container.querySelector("svg.wim-spinner")?.getAttribute("class") ?? "";
    };
    expect(classesFor("xl")).not.toEqual(classesFor("lg"));
  });

  it("renders loader with specified type", () => {
    const { container } = render(
      <LoadingOverlay visible={true} loaderType="bars" />,
    );
    // Loader bars class is internal to Loader component, but we can check if content is rendered
    const content = container.querySelector(`.${styles.content}`);
    expect(content).toBeInTheDocument();
  });

  it("renders message when provided", () => {
    render(<LoadingOverlay visible={true} message="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies fixed class when fixed prop is true", () => {
    render(<LoadingOverlay visible={true} fixed={true} />);
    const overlay = screen.getByTestId("loading-overlay");
    expect(overlay).toHaveClass(styles.fixed);
  });

  it("applies custom zIndex when provided", () => {
    render(<LoadingOverlay visible={true} zIndex={9999} />);
    const overlay = screen.getByTestId("loading-overlay");
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
    const backdrop = container.querySelector(`.${styles.backdrop}`);
    expect(backdrop).toHaveClass(styles.light);
  });

  it("applies blur class", () => {
    const { container } = render(<LoadingOverlay visible={true} blur="lg" />);
    const backdrop = container.querySelector(`.${styles.backdrop}`);
    expect(backdrop).toHaveClass(styles["blur-lg"]);
  });

  it("has correct aria attributes", () => {
    render(<LoadingOverlay visible={true} />);
    const overlay = screen.getByTestId("loading-overlay");
    expect(overlay).toHaveAttribute("aria-live", "polite");
    expect(overlay).toHaveAttribute("aria-busy", "true");
  });
});
