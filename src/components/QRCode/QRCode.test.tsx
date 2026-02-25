import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { QRCode } from "./QRCode";

describe("QRCode", () => {
  it("renders svg by default", () => {
    const { container } = render(<QRCode value="https://example.com" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders canvas when renderAs='canvas'", () => {
    const { container } = render(
      <QRCode value="https://example.com" renderAs="canvas" />,
    );
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});
