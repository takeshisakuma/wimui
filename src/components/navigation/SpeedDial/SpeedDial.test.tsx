import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpeedDial } from "./SpeedDial";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SpeedDial", () => {
  it("renders correctly", () => {
    render(<SpeedDial actions={[]} />);
    expect(screen.getByLabelText("PlusIcon")).toBeInTheDocument();
  });
});
