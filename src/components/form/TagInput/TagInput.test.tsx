import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TagInput } from "./TagInput";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("TagInput", () => {
  it("renders with default values", () => {
    render(<TagInput defaultValue={["Tag1"]} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
  });
});
