import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FileUpload } from "./FileUpload";

describe("FileUpload", () => {
  it("renders with button label", () => {
    render(<FileUpload buttonLabel="Upload Now" />);
    expect(screen.getByText("Upload Now")).toBeInTheDocument();
  });

  it("shows 'No file selected' initially", () => {
    render(<FileUpload />);
    expect(screen.getByText(/No file selected/i)).toBeInTheDocument();
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

  it("displays file name after file is selected", () => {
    const handleChange = vi.fn();
    render(<FileUpload onChange={handleChange} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["content"], "photo.jpg", { type: "image/jpeg" });
    Object.defineProperty(input, "files", { value: [file], configurable: true });
    fireEvent.change(input);

    expect(screen.getByText("photo.jpg")).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders with label and error", () => {
    render(<FileUpload label="fileupload_label" error="File is required" />);
    expect(screen.getByText("File is required")).toBeInTheDocument();
  });

  it("renders with custom noFileLabel", () => {
    render(<FileUpload noFileLabel="No document chosen" />);
    expect(screen.getByText("No document chosen")).toBeInTheDocument();
  });
});
