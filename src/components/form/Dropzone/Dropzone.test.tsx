import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Dropzone } from "./Dropzone";

describe("Dropzone", () => {
  it("renders label and description", () => {
    render(<Dropzone label="Upload Here" description="Drag file" />);
    expect(screen.getByText("Upload Here")).toBeInTheDocument();
    expect(screen.getByText("Drag file")).toBeInTheDocument();
  });

  it("handles drag events visually", () => {
    render(<Dropzone />);
    const dropzone = screen.getByRole("button");

    fireEvent.dragOver(dropzone);
    expect(dropzone).toHaveAttribute("data-dragging", "true");

    fireEvent.dragLeave(dropzone);
    expect(dropzone).toHaveAttribute("data-dragging", "false");
  });

  it("handles file drop", () => {
    const handleChange = vi.fn();
    render(<Dropzone onChange={handleChange} />);
    const dropzone = screen.getByRole("button");

    const file = new File(["content"], "test.png", { type: "image/png" });

    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [file],
      },
    });

    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByText("test.png")).toBeInTheDocument();
  });

  it("handles file selection via input change", () => {
    const handleChange = vi.fn();
    render(<Dropzone onChange={handleChange} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["content"], "document.pdf", { type: "application/pdf" });
    Object.defineProperty(input, "files", { value: [file], configurable: true });
    fireEvent.change(input);

    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByText("document.pdf")).toBeInTheDocument();
  });

  it("triggers click on Enter key", () => {
    render(<Dropzone />);
    const dropzone = screen.getByRole("button");
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const clickSpy = vi.spyOn(input, "click");

    fireEvent.keyDown(dropzone, { key: "Enter" });
    expect(clickSpy).toHaveBeenCalled();
  });

  it("triggers click on Space key", () => {
    render(<Dropzone />);
    const dropzone = screen.getByRole("button");
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const clickSpy = vi.spyOn(input, "click");

    fireEvent.keyDown(dropzone, { key: " " });
    expect(clickSpy).toHaveBeenCalled();
  });

  it("does not drop files when disabled", () => {
    const handleChange = vi.fn();
    // 無効時は role="button" を出さない設計なので、他のテストのように getByRole では引けない。
    // クラス名で引いていたが、あれは vitest のプロキシが作った名前で実在しなかった（T121）。
    const { container } = render(<Dropzone disabled onChange={handleChange} />);
    const dropzone = container.querySelector('[data-disabled="true"]')!;

    const file = new File(["content"], "test.png", { type: "image/png" });
    fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

    expect(handleChange).not.toHaveBeenCalled();
  });
});
