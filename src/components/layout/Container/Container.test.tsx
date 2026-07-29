import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Content").className).toMatch(/root/);
  });

  it("applies fluid styling", () => {
    render(<Container fluid>Fluid Content</Container>);
    const container = screen.getByText("Fluid Content");
    expect(container).toHaveStyle({ maxWidth: "100%" });
  });

  it("applies size sm styling", () => {
    render(<Container size="sm">Small Content</Container>);
    expect(screen.getByText("Small Content")).toHaveStyle({ maxWidth: "720px" });
  });

  it("applies size xs styling", () => {
    render(<Container size="xs">XS</Container>);
    expect(screen.getByText("XS")).toHaveStyle({ maxWidth: "540px" });
  });

  it("applies size md styling", () => {
    render(<Container size="md">MD</Container>);
    expect(screen.getByText("MD")).toHaveStyle({ maxWidth: "960px" });
  });

  it("applies size lg styling (default)", () => {
    render(<Container>LG</Container>);
    expect(screen.getByText("LG")).toHaveStyle({ maxWidth: "1140px" });
  });

  it("applies size xl styling", () => {
    render(<Container size="xl">XL</Container>);
    expect(screen.getByText("XL")).toHaveStyle({ maxWidth: "1320px" });
  });

  it("applies number size as px", () => {
    render(<Container size={800}>Custom</Container>);
    expect(screen.getByText("Custom")).toHaveStyle({ maxWidth: "800px" });
  });

  it("applies arbitrary string size", () => {
    render(<Container size="50vw">VW</Container>);
    // インラインの宣言で見る。`toHaveStyle` は getComputedStyle を通すため、
    // ビューポート単位は解決されてしまう（実ブラウザも同じ。jsdom は 29 まで
    // `50vw` をそのまま返していたが、30 で 512px＝既定ウィンドウ 1024 の
    // 半分を返すようになった）。ここで確かめたいのは Container が渡された
    // 文字列をそのまま max-width に置くことなので、解決前の値を見る。
    expect((screen.getByText("VW") as HTMLElement).style.maxWidth).toBe("50vw");
  });

  it("renders as child element when asChild is true", () => {
    render(
      <Container asChild>
        <section>Slotted Container</section>
      </Container>,
    );
    const el = screen.getByText("Slotted Container");
    expect(el.tagName).toBe("SECTION");
    expect(el).toHaveStyle({ maxWidth: "1140px" });
  });
});
