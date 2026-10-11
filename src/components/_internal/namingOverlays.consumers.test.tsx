/**
 * 名前と説明の属性の、測り残しの 2 部品（T340 / T341 の続き。#965 で「測れていない」と書いたもの）。
 *
 * - CommandPaletteContent: `aria-label` しか受けず、`aria-labelledby` / `aria-describedby` は捨てていた
 * - LightboxContent: 3 つとも届いていた（ここでは、その状態を固定する）
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  CommandPalette,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
} from "../navigation/CommandPalette/CommandPalette";
import { LightboxRoot } from "../media/Lightbox/Lightbox";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Jump to</h2>
    <p id="ext-desc">Type to filter the commands.</p>
    {children}
  </>
);

const renderPalette = (contentProps: Partial<React.ComponentProps<typeof CommandPaletteContent>>) =>
  render(
    <Outside>
      <CommandPalette open onOpenChange={() => {}}>
        <CommandPaletteContent {...contentProps}>
          <CommandPaletteInput placeholder="Search" />
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>
    </Outside>,
  );

describe("CommandPaletteContent", () => {
  it("aria-labelledby を渡すと、外の見出しが dialog の名前になる（内蔵の aria-label は出さない）", () => {
    renderPalette({ "aria-labelledby": "ext-label" });
    const dialog = screen.getByRole("dialog", { name: "Jump to" });
    expect(dialog).not.toHaveAttribute("aria-label");
  });

  it("aria-describedby を渡すと、dialog の説明になる", () => {
    renderPalette({ "aria-describedby": "ext-desc" });
    expect(screen.getByRole("dialog")).toHaveAccessibleDescription("Type to filter the commands.");
  });

  it("aria-label を渡すと、その名前になる（これまでどおり）", () => {
    renderPalette({ "aria-label": "Commands" });
    expect(screen.getByRole("dialog", { name: "Commands" })).toBeInTheDocument();
  });

  it("何も渡さなければ、内蔵の名前が付く（これまでどおり）", () => {
    renderPalette({});
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-label");
    expect(dialog.getAttribute("aria-label")).not.toBe("");
  });
});

describe("LightboxContent", () => {
  const items = [{ src: "a.png", alt: "image-a" }];
  const renderLightbox = (contentProps: Record<string, string>) =>
    render(
      <Outside>
        <LightboxRoot defaultOpen>
          <LightboxRoot.Gallery items={items}>
            <LightboxRoot.Trigger index={0}>open-first</LightboxRoot.Trigger>
          </LightboxRoot.Gallery>
          <LightboxRoot.Content {...contentProps} />
        </LightboxRoot>
      </Outside>,
    );

  it("aria-labelledby と aria-describedby が、dialog に届く", () => {
    renderLightbox({ "aria-labelledby": "ext-label", "aria-describedby": "ext-desc" });
    const dialog = screen.getByRole("dialog", { name: "Jump to" });
    expect(dialog).toHaveAccessibleDescription("Type to filter the commands.");
    expect(dialog).not.toHaveAttribute("aria-label");
  });

  it("aria-label を渡すと、画像の alt より優先される", () => {
    renderLightbox({ "aria-label": "Product photos" });
    expect(screen.getByRole("dialog", { name: "Product photos" })).toBeInTheDocument();
  });

  it("何も渡さなければ、いまの画像の alt が名前になる（これまでどおり）", () => {
    renderLightbox({});
    expect(screen.getByRole("dialog", { name: "image-a" })).toBeInTheDocument();
  });
});
