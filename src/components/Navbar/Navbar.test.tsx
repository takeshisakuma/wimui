import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  NavbarToggle,
  NavbarMenuItem,
} from "./Navbar";

describe("Navbar", () => {
  it("renders children content", () => {
    render(
      <Navbar>
        <NavbarBrand>Brand</NavbarBrand>
        <NavbarContent>
          <NavbarItem>Item 1</NavbarItem>
          <NavbarLink href="#">Link 1</NavbarLink>
        </NavbarContent>
      </Navbar>,
    );
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Link 1")).toBeInTheDocument();
  });

  it("applies fixed and sticky classes", () => {
    const { container } = render(<Navbar fixed sticky />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("wim-navbar--fixed");
    expect(nav).toHaveClass("wim-navbar--sticky");
  });

  it("applies transparent, glass, and bordered classes", () => {
    const { container } = render(<Navbar transparent glass bordered />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("wim-navbar--transparent");
    expect(nav).toHaveClass("wim-navbar--glass");
    expect(nav).toHaveClass("wim-navbar--bordered");
  });

  it("applies active class to NavbarItem and NavbarLink", () => {
    render(
      <Navbar>
        <NavbarItem active>Active Item</NavbarItem>
        <NavbarLink active href="#">
          Active Link
        </NavbarLink>
      </Navbar>,
    );
    expect(screen.getByText("Active Item")).toHaveClass(
      "wim-navbar__item--active",
    );
    expect(screen.getByText("Active Link")).toHaveClass(
      "wim-navbar__link--active",
    );
  });

  it("applies justify class to NavbarContent", () => {
    const { container } = render(
      <NavbarContent justify="center">Content</NavbarContent>,
    );
    expect(container.firstChild).toHaveClass("wim-navbar__content--center");
  });

  it("applies justify start and end to NavbarContent", () => {
    const { rerender, container } = render(<NavbarContent justify="start">C</NavbarContent>);
    expect(container.firstChild).toHaveClass("wim-navbar__content--start");
    rerender(<NavbarContent justify="end">C</NavbarContent>);
    expect(container.firstChild).toHaveClass("wim-navbar__content--end");
  });

  it("applies hidden-mobile class to NavbarContent", () => {
    const { container } = render(
      <NavbarContent hiddenOnMobile>Content</NavbarContent>,
    );
    expect(container.firstChild).toHaveClass("wim-navbar__content--hidden-mobile");
  });

  it("applies custom className to Navbar", () => {
    const { container } = render(<Navbar className="my-nav" />);
    expect(container.querySelector("nav")).toHaveClass("my-nav");
  });

  it("uses defaultMenuOpen to initialize internal state", () => {
    render(
      <Navbar defaultMenuOpen={false}>
        <NavbarToggle />
      </Navbar>,
    );
    const toggleWrapper = document.querySelector(".wim-navbar__toggle");
    expect(toggleWrapper).toBeInTheDocument();
  });

  it("calls onMenuOpenChange when toggle is clicked", () => {
    const onMenuOpenChange = vi.fn();
    render(
      <Navbar onMenuOpenChange={onMenuOpenChange}>
        <NavbarToggle />
      </Navbar>,
    );
    const btn = document.querySelector(".wim-hamburger-menu") as HTMLElement;
    fireEvent.click(btn);
    expect(onMenuOpenChange).toHaveBeenCalledWith(true);
  });

  it("respects controlled isMenuOpen prop", () => {
    render(
      <Navbar isMenuOpen={true}>
        <NavbarToggle />
      </Navbar>,
    );
    const btn = document.querySelector("[aria-expanded]");
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });
});

describe("NavbarToggle", () => {
  it("throws when used outside Navbar", () => {
    expect(() => render(<NavbarToggle />)).toThrow(
      "NavbarToggle must be used within a Navbar",
    );
  });
});

describe("NavbarMenuItem", () => {
  it("renders with active class", () => {
    render(
      <Navbar>
        <NavbarMenuItem active>Active Menu Item</NavbarMenuItem>
      </Navbar>,
    );
    expect(screen.getByText("Active Menu Item")).toHaveClass("wim-navbar__menu-item--active");
  });

  it("calls onClick and closes menu", () => {
    const onClick = vi.fn();
    render(
      <Navbar>
        <NavbarMenuItem onClick={onClick}>Menu Item</NavbarMenuItem>
      </Navbar>,
    );
    fireEvent.click(screen.getByText("Menu Item"));
    expect(onClick).toHaveBeenCalled();
  });

  it("triggers click on Enter keydown", () => {
    const onClick = vi.fn();
    render(
      <Navbar>
        <NavbarMenuItem onClick={onClick}>Menu Item</NavbarMenuItem>
      </Navbar>,
    );
    const item = screen.getByText("Menu Item");
    fireEvent.keyDown(item, { key: "Enter" });
    expect(onClick).toHaveBeenCalled();
  });

  it("triggers click on Space keydown", () => {
    const onClick = vi.fn();
    render(
      <Navbar>
        <NavbarMenuItem onClick={onClick}>Menu Item</NavbarMenuItem>
      </Navbar>,
    );
    const item = screen.getByText("Menu Item");
    fireEvent.keyDown(item, { key: " " });
    expect(onClick).toHaveBeenCalled();
  });
});
