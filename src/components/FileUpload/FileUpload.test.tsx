import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FileUpload } from "./FileUpload";

describe("FileUpload", () => {
  it("renders with button label", () => {
    render(<FileUpload buttonLabel="Upload Now" />);
    expect(screen.getByText("Upload Now")).toBeInTheDocument();
  });

  it("shows '選択されていません' initially", () => {
    render(<FileUpload />);
    expect(screen.getByText("選択されていません")).toBeInTheDocument();
  });

  it("triggers input click when button is clicked", () => {
    render(<FileUpload />);
    const input = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    const clickSpy = vi.spyOn(input, "click");

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(clickSpy).toHaveBeenCalled();
  });
});
