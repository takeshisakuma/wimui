import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CreditCardInput } from "./CreditCardInput";

vi.mock("react-i18next", () => ({
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
});
