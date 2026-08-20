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

  // T211 ②: 「欄名を見出しとして辿らせたい」ページのための**オプトイン**。
  // **既定を見出しにしない**のは T191 の判断（段を決め打つと利用者のページで
  // `heading-order` が飛ぶ）。`Alert` の `titleTag`（既定 `div`）と同じ形。
  it("titleLevel を渡したときだけ見出しになる", () => {
    render(
      <Footer>
        <FooterSection title="Section 1" titleLevel={3}>
          Content 1
        </FooterSection>
      </Footer>,
    );
    expect(screen.getByRole("heading", { level: 3, name: "Section 1" })).toBeInTheDocument();
  });

  it("titleLevel は呼び出し元が段を選べる", () => {
    render(
      <Footer>
        <FooterSection title="Section 1" titleLevel={5}>
          Content 1
        </FooterSection>
      </Footer>,
    );
    expect(screen.getByRole("heading", { level: 5, name: "Section 1" })).toBeInTheDocument();
  });
});
