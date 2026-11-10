import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { AvatarGroup } from "./AvatarGroup";
import { Avatar } from "../../data-display/Avatar/Avatar";
import styles from "./avatar-group.module.scss";
import avatarStyles from "../Avatar/avatar.module.scss";

describe("AvatarGroup", () => {
  it("renders children avatars", () => {
    render(
      <AvatarGroup>
        <Avatar initials="JD" />
        <Avatar initials="AS" />
      </AvatarGroup>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.getByText("AS")).toBeInTheDocument();
  });

  it("limits the number of displayed avatars by max prop", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
        <Avatar initials="D" />
      </AvatarGroup>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.queryByText("C")).not.toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("displays excess count based on total prop", () => {
    render(
      <AvatarGroup max={2} total={10}>
        <Avatar initials="A" />
        <Avatar initials="B" />
      </AvatarGroup>,
    );
    expect(screen.getByText("+8")).toBeInTheDocument();
  });

  it("applies size to child avatars", () => {
    render(
      <AvatarGroup size="lg">
        <Avatar initials="A" />
      </AvatarGroup>,
    );
    const avatar = screen.getByRole("img", { name: "A" });
    expect(avatar).toHaveClass(avatarStyles.lg);
  });

  it("applies small size to excess badge", () => {
    const { container } = render(
      <AvatarGroup max={1} size="sm">
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
      </AvatarGroup>,
    );
    const excess = container.querySelector(`.${styles.excess}`);
    expect(excess).toHaveClass(styles.sm);
  });
});

describe('AvatarGroup overflow="collapse"', () => {
  // jsdom は幅を持たないので、アバターは 40px・「+N」の包みは 30px、器は data-available から読ませる。
  // 重なり（負のマージン）は jsdom の CSS Modules では効かないので、ここでは幅だけで数える
  const rectSpy = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect");
  const clientWidthDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");

  beforeAll(() => {
    rectSpy.mockImplementation(function (this: HTMLElement) {
      const width = this.classList.contains("wim-avatar") ? 40 : this.querySelector("button") ? 30 : 0;
      return { width, height: 0, top: 0, left: 0, right: width, bottom: 0, x: 0, y: 0, toJSON: () => ({}) };
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get(this: HTMLElement) {
        return Number(this.closest<HTMLElement>("[data-available]")?.dataset.available ?? 0);
      },
    });
  });

  afterAll(() => {
    rectSpy.mockRestore();
    if (clientWidthDescriptor) Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidthDescriptor);
  });

  const people = ["Aiko Tanaka", "Rafael Souza", "Mei Lin", "Kwame Mensah", "Priya Nair"];
  const renderGroup = (available: number) =>
    render(
      <div data-available={available}>
        <AvatarGroup overflow="collapse" max={1}>
          {people.map((name) => (
            <Avatar key={name} alt={name} initials={name.slice(0, 2)} />
          ))}
        </AvatarGroup>
      </div>,
    );

  it("shows as many avatars as fit and turns the rest into a +N button (max is ignored)", () => {
    // 30 + 40 × 3 = 150 <= 160 < 190
    renderGroup(160);
    expect(screen.getAllByRole("img", { hidden: false })).toHaveLength(3);
    const button = screen.getByRole("button", { name: "+2 Show everyone" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("lists the hidden people by name, with the avatars hidden from assistive technology", () => {
    renderGroup(160);
    fireEvent.click(screen.getByRole("button", { name: "+2 Show everyone" }));
    const panel = screen.getByRole("list");
    expect(Array.from(panel.querySelectorAll("li")).map((li) => li.textContent?.replace(/^\w{2}/, ""))).toEqual([
      "Kwame Mensah",
      "Priya Nair",
    ]);
    expect(panel.querySelector(".wim-avatar")).toHaveAttribute("aria-hidden", "true");
  });

  it("shows everyone and no button when they all fit", () => {
    renderGroup(1000);
    expect(screen.getAllByRole("img")).toHaveLength(5);
    expect(screen.queryByRole("button")).toBeNull();
  });
});
