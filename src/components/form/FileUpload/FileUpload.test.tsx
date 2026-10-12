import { render, screen, fireEvent, act } from "@testing-library/react";
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

  it("announces the chosen file a moment after it is picked, through a status region that was already there", () => {
    vi.useFakeTimers();
    render(<FileUpload />);
    const status = screen.getByRole("status");
    expect(status).toBeEmptyDOMElement();

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["x"], "report.pdf", { type: "application/pdf" });
    fireEvent.change(input, { target: { files: [file] } });
    // 選んだ直後は、フォーカスがボタンへ戻る読み上げが走っている。そこで書き換えても読まれないので、待つ
    expect(status).toBeEmptyDOMElement();
    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(screen.getByRole("status")).toBe(status);
    expect(status).toHaveTextContent("Selected: report.pdf");
    vi.useRealTimers();
  });

  it("describes the button with the chosen file names", () => {
    render(<FileUpload value={["contract.pdf"]} />);
    const button = screen.getByRole("button");
    const ids = (button.getAttribute("aria-describedby") ?? "").split(" ");
    const names = screen.getByText("contract.pdf");
    expect(ids).toContain(names.id);
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

  it("sets aria-invalid on the trigger when error is present", () => {
    render(<FileUpload error="Required" />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  // role=button は aria-required を許可しない（axe aria-allowed-attr / WCAG 4.1.2）。
  it("announces the requirement as a description, not as aria-required", () => {
    render(<FileUpload label="Licence" required />);
    const button = screen.getByRole("button");

    expect(button).not.toHaveAttribute("aria-required");
    expect(button).toHaveAccessibleDescription(/required/i);
  });

  it("keeps the error in the description when the field is also required", () => {
    render(<FileUpload label="Licence" required error="Attach the licence" />);
    expect(screen.getByRole("button")).toHaveAccessibleDescription(
      /Attach the licence/,
    );
  });
});
