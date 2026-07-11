import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PhoneInput, PHONE_COUNTRIES } from "./PhoneInput";
import styles from "./phone-input.module.scss";

describe("PhoneInput", () => {
  it("renders the phone number input", () => {
    render(<PhoneInput placeholder="090-0000-0000" />);
    expect(screen.getByPlaceholderText("090-0000-0000")).toBeInTheDocument();
  });

  it("renders the country code selector button", () => {
    render(<PhoneInput />);
    expect(screen.getByRole("button", { name: "Select country" })).toBeInTheDocument();
  });

  it("shows default country US dial code", () => {
    render(<PhoneInput />);
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("🇺🇸")).toBeInTheDocument();
  });

  it("shows selected country dial code when countryCode prop is provided", () => {
    render(<PhoneInput countryCode="JP" />);
    expect(screen.getByText("+81")).toBeInTheDocument();
    expect(screen.getByText("🇯🇵")).toBeInTheDocument();
  });

  it("calls onChange when phone number input changes", () => {
    const onChange = vi.fn();
    render(<PhoneInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "09012345678" } });
    expect(onChange).toHaveBeenCalledWith("09012345678");
  });

  it("calls onCountryChange when a country is selected from the dropdown", async () => {
    const onCountryChange = vi.fn();
    render(<PhoneInput onCountryChange={onCountryChange} />);
    
    // Open dropdown
    fireEvent.click(screen.getByRole("button", { name: "Select country" }));
    
    // Select Japan
    const japanOption = screen.getByText("Japan");
    fireEvent.click(japanOption);
    
    expect(onCountryChange).toHaveBeenCalledWith("JP");
  });

  it("disables both button and input when disabled", () => {
    render(<PhoneInput disabled />);
    expect(screen.getByRole("button", { name: "Select country" })).toBeDisabled();
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

  it("contains all countries in the dropdown when opened", async () => {
    render(<PhoneInput />);
    
    // Open dropdown
    fireEvent.click(screen.getByRole("button", { name: "Select country" }));
    
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(PHONE_COUNTRIES.length);
  });

  it("applies error class when error is set", () => {
    render(<PhoneInput error="Error" />);
    const root = screen.getByTestId("phone-input-root");
    expect(root).toHaveClass(styles.danger);
  });

  it("applies disabled class when disabled", () => {
    render(<PhoneInput disabled />);
    const root = screen.getByTestId("phone-input-root");
    expect(root).toHaveClass(styles.disabled);
  });
});
