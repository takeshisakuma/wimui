import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreditCardInput } from "./CreditCardInput";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("CreditCardInput", () => {
  it("renders correctly", () => {
    render(<CreditCardInput defaultValue="4111111111111111" />);
    expect(screen.getByDisplayValue("4111 1111 1111 1111")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <CreditCardInput asChild>
        <input data-testid="child" defaultValue="1234" />
      </CreditCardInput>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it.each([
    ["4111111111111111", "visa"],
    ["5111111111111111", "mastercard"],
    ["341111111111111", "amex"],
    ["371111111111111", "amex"],
    ["6011111111111111", "discover"],
    ["6511111111111111", "discover"],
    ["3511111111111111", "jcb"],
    ["2131111111111111", "jcb"],
    ["1800111111111111", "jcb"],
    ["30011111111111", "diners"],
    ["36111111111111", "diners"],
    ["38111111111111", "diners"],
    ["9111111111111111", "generic"],
    ["", "generic"],
  ])("detects brand of %s as %s", (number, brand) => {
    const onBrandChange = vi.fn();
    render(<CreditCardInput defaultValue={number} onBrandChange={onBrandChange} />);
    expect(onBrandChange).toHaveBeenLastCalledWith(brand);
  });

  it("formats amex numbers as 4-6-5 and limits length", () => {
    render(<CreditCardInput defaultValue="341111111111111" />);
    const input = screen.getByDisplayValue("3411 111111 11111");
    expect(input).toHaveAttribute("maxlength", "17");
  });

  it("formats diners numbers as 4-6-4 and limits length", () => {
    render(<CreditCardInput defaultValue="30011111111111" />);
    const input = screen.getByDisplayValue("3001 111111 1111");
    expect(input).toHaveAttribute("maxlength", "16");
  });

  it("limits default brands to 16 digits plus separators", () => {
    render(<CreditCardInput defaultValue="4111111111111111" />);
    const input = screen.getByDisplayValue("4111 1111 1111 1111");
    expect(input).toHaveAttribute("maxlength", "19");
  });

  it("formats typed input and strips non-digits", async () => {
    const user = userEvent.setup();
    render(<CreditCardInput />);
    const input = screen.getByRole("textbox");

    await user.type(input, "4111abcd1111");
    expect(input).toHaveValue("4111 1111");
  });

  it("passes the formatted value to onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<CreditCardInput onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "41111");
    const lastEvent = onChange.mock.calls.at(-1)?.[0];
    expect(lastEvent.target.value).toBe("4111 1");
  });

  it("formats the controlled value and keeps it under parent control", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<CreditCardInput value="34111" onChange={onChange} />);
    const input = screen.getByDisplayValue("3411 1");

    await user.type(input, "9");
    // controlled のため表示値は親の value のまま
    expect(input).toHaveValue("3411 1");
    expect(onChange).toHaveBeenCalled();
  });
});
