import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { Footer, FooterSection, FooterBottom } from "./Footer";

describe("Footer", () => {
  it("renders footer and sections", () => {
    render(
      <Footer>
        <FooterSection title="Section 1">Content 1</FooterSection>
        <FooterBottom>Bottom Content</FooterBottom>
      </Footer>,
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer role
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Bottom Content")).toBeInTheDocument();
    expect(screen.getByText("Section 1").tagName).toBe("P");
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("applies border attribute", () => {
    render(<Footer bordered />);
    expect(screen.getByRole("contentinfo")).toHaveAttribute("data-bordered", "true");
  });

  it("does not put section titles in the heading outline (T191)", () => {
    const src = readFileSync("src/components/layout/Footer/Footer.tsx", "utf8");
    expect(src).toMatch(/<p className=\{styles\.sectionTitle\}/);
    expect(src).not.toMatch(/<h4 className=\{styles\.sectionTitle\}/);
  });
});
