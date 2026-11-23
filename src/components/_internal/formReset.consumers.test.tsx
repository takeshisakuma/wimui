import React from "react";
import { describe, it, expect, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../form/Input/Input";
import { NumberInput } from "../form/NumberInput/NumberInput";
import { PasswordInput } from "../form/PasswordInput/PasswordInput";
import { SearchInput } from "../form/SearchInput/SearchInput";
import { TimePicker } from "../form/TimePicker/TimePicker";
import { ColorPicker } from "../form/ColorPicker/ColorPicker";
import { Combobox } from "../form/Combobox/Combobox";
import { Mentions } from "../form/Mentions/Mentions";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const cases: [string, () => React.ReactElement, string, string][] = [
  ["Input", () => <Input aria-label="field" defaultValue="north" />, "north", "south"],
  ["NumberInput", () => <NumberInput aria-label="field" defaultValue={12} />, "12", "34"],
  ["PasswordInput", () => <PasswordInput aria-label="field" defaultValue="north" />, "north", "south"],
  ["SearchInput", () => <SearchInput aria-label="field" defaultValue="north" />, "north", "south"],
  ["TimePicker", () => <TimePicker aria-label="field" defaultValue="10:00" />, "10:00", "11:30"],
  ["ColorPicker", () => <ColorPicker aria-label="field" defaultValue="#112233" />, "#112233", "#445566"],
  ["Combobox", () => <Combobox aria-label="field" defaultValue="north" options={[]} />, "north", "south"],
  ["Mentions", () => <Mentions aria-label="field" defaultValue="north" options={[]} />, "north", "south"],
];

const field = (container: HTMLElement) =>
  container.querySelector("input, textarea") as HTMLInputElement | HTMLTextAreaElement;

describe("form reset", () => {
  it.each(cases)("%s returns to its default value", async (_name, renderField, initial, changed) => {
    const { container } = render(<form>{renderField()}</form>);
    fireEvent.change(field(container), { target: { value: changed } });
    expect(field(container).value).toBe(changed);

    await act(async () => {
      container.querySelector("form")!.reset();
    });

    expect(field(container).value).toBe(initial);
  });

  it("leaves a controlled value to its owner", async () => {
    const { container } = render(
      <form>
        <Input aria-label="field" value="north" onChange={() => undefined} />
      </form>,
    );

    await act(async () => {
      container.querySelector("form")!.reset();
    });

    expect(screen.getByLabelText("field")).toHaveValue("north");
  });
});
