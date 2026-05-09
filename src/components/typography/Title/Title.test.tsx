import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Title } from "./Title";
import styles from "./title.module.scss";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Title", () => {
  it("renders with correct tag", () => {
    render(<Title tag="h2">Title Text</Title>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders with default tag h1", () => {
    render(<Title>Title Text</Title>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("applies styling classes", () => {
    render(
      <Title size="xl" color="primary" align="center">
        Title Text
      </Title>,
    );
    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass(styles.xl);
    expect(heading).toHaveClass(styles.primary);
    expect(heading).toHaveClass(styles.center);
  });

  it("handles numeric sizes (e.g., 2xl)", () => {
    render(<Title size="2xl">Title Text</Title>);
    const heading = screen.getByRole("heading");
    // "2xl".replace(/^(\d+)/, 'xl$1') => "xl2xl"
    expect(heading).toHaveClass(styles.xl2xl);
  });

  it("handles decoration underline", () => {
    render(<Title decoration="underline">Title Text</Title>);
    const textElement = screen.getByText("Title Text");
    expect(textElement).toHaveClass(styles.underline);
  });

  it("handles decoration highlight", () => {
    render(<Title decoration="highlight">Title Text</Title>);
    const textElement = screen.getByText("Title Text");
    expect(textElement).toHaveClass(styles.highlight);
  });

  it("renders as child when asChild is true", () => {
    render(
      <Title asChild>
        <div data-testid="custom-child">Title Text</div>
      </Title>,
    );
    expect(screen.getByTestId("custom-child")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("applies inline style for custom colors", () => {
    render(<Title color="#ff0000">Title Text</Title>);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveStyle({ color: "#ff0000" });
  });

  it("applies class for mapped colors", () => {
    render(<Title color="success">Title Text</Title>);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass(styles.success);
    expect(heading).not.toHaveStyle({ color: "success" });
  });

  it("handles undefined size and color safely", () => {
    render(<Title size={undefined} color={undefined}>Title Text</Title>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("applies different alignment classes", () => {
    const { rerender } = render(<Title align="left">Text</Title>);
    expect(screen.getByRole("heading")).toHaveClass(styles.left);
    
    rerender(<Title align="right">Text</Title>);
    expect(screen.getByRole("heading")).toHaveClass(styles.right);
    
    rerender(<Title align="center">Text</Title>);
    expect(screen.getByRole("heading")).toHaveClass(styles.center);
  });

  it("merges custom styles", () => {
    render(<Title style={{ marginTop: "20px" }}>Text</Title>);
    expect(screen.getByRole("heading")).toHaveStyle({ marginTop: "20px" });
  });

  it("handles inline semantic colors correctly", () => {
    render(<Title color="text-primary">Text</Title>);
    expect(screen.getByRole("heading")).toHaveStyle({ color: "var(--wim-color-text-primary)" });
  });
});

