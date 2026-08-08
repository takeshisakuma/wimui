import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "./Tag";
import styles from "./tag.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>New</Tag>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies variant and status classes", () => {
    const { container } = render(
      <Tag variant="outline" intent="success">
        Success
      </Tag>,
    );
    expect(container.firstChild).toHaveClass(styles.outline);
    expect(container.firstChild).toHaveClass(styles.success);
  });

  it("renders with icon", () => {
    render(
      <Tag icon={<span data-testid="icon" />}>Icon</Tag>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  // T99: 以前は children が配列になり Slottable が必ず落ちていた。
  it("supports asChild", () => {
    render(
      <Tag asChild>
        <button type="button">slotted</button>
      </Tag>,
    );
    expect(screen.getByRole("button", { name: "slotted" })).toBeInTheDocument();
  });

  it("rejects asChild combined with onDelete", () => {
    expect(() =>
      render(
        <Tag asChild onDelete={() => {}}>
          <button type="button">x</button>
        </Tag>,
      ),
    ).toThrow(/asChild.*onDelete/);
  });
});
