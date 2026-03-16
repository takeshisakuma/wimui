import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PhoneInput, PHONE_COUNTRIES } from "./PhoneInput";

describe("PhoneInput", () => {
  it("renders the phone number input", () => {
    render(<PhoneInput placeholder="090-0000-0000" />);
    expect(screen.getByPlaceholderText("090-0000-0000")).toBeInTheDocument();
  });

  it("renders the country code selector", () => {
    render(<PhoneInput />);
    expect(screen.getByRole("combobox", { name: "Country code" })).toBeInTheDocument();
  });

  it("shows default country US dial code in preview", () => {
    const { container } = render(<PhoneInput />);
    const preview = container.querySelector(".wim-phone-input__dial-preview");
    expect(preview).toHaveTextContent("🇺🇸 +1");
  });

  it("shows selected country dial code in preview when countryCode prop changes", () => {
    const { container } = render(<PhoneInput countryCode="JP" />);
    const preview = container.querySelector(".wim-phone-input__dial-preview");
    expect(preview).toHaveTextContent("🇯🇵 +81");
  });

  it("calls onChange when phone number input changes", () => {
    const onChange = vi.fn();
    render(<PhoneInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "09012345678" } });
    expect(onChange).toHaveBeenCalledWith("09012345678");
  });

  it("filters out non-phone characters", () => {
    const onChange = vi.fn();
    render(<PhoneInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "090abc日本語" } });
    expect(onChange).toHaveBeenCalledWith("090");
  });

  it("calls onCountryChange when country selector changes", () => {
    const onCountryChange = vi.fn();
    render(<PhoneInput onCountryChange={onCountryChange} />);
    fireEvent.change(screen.getByRole("combobox", { name: "Country code" }), {
      target: { value: "JP" },
    });
    expect(onCountryChange).toHaveBeenCalledWith("JP");
  });

  it("disables both select and input when disabled", () => {
    render(<PhoneInput disabled />);
    expect(screen.getByRole("combobox", { name: "Country code" })).toBeDisabled();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders label when provided", () => {
    render(<PhoneInput label="Phone Number" />);
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<PhoneInput error="Invalid phone number" />);
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("marks input as aria-invalid when error is set", () => {
    render(<PhoneInput error="Invalid" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("contains all countries in the select", () => {
    render(<PhoneInput />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(PHONE_COUNTRIES.length);
  });

  it("applies error class when error is set", () => {
    const { container } = render(<PhoneInput error="Error" />);
    expect(container.querySelector(".wim-phone-input--error")).toBeInTheDocument();
  });

  it("applies disabled class when disabled", () => {
    const { container } = render(<PhoneInput disabled />);
    expect(container.querySelector(".wim-phone-input--disabled")).toBeInTheDocument();
  });
});
