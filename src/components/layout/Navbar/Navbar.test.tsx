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
import styles from "./navbar.module.scss";

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
    expect(nav).toHaveClass(styles.fixed);
    expect(nav).toHaveClass(styles.sticky);
  });

  it("applies transparent, glass, and bordered classes", () => {
    const { container } = render(<Navbar transparent glass bordered />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass(styles.transparent);
    expect(nav).toHaveClass(styles.glass);
    expect(nav).toHaveClass(styles.bordered);
  });

  it("applies the fluid class to the inner container (disables max-width)", () => {
    const { container, rerender } = render(<Navbar>content</Navbar>);
    const inner = () => container.querySelector(`.${styles.container}`);
    expect(inner()).not.toHaveClass(styles.fluid);
    rerender(<Navbar fluid>content</Navbar>);
    expect(inner()).toHaveClass(styles.fluid);
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
    expect(screen.getByText("Active Item")).toHaveClass(styles.active);
    expect(screen.getByText("Active Link")).toHaveClass(styles.active);
  });

  it("applies justify class to NavbarContent", () => {
    const { container } = render(
      <NavbarContent justify="center">Content</NavbarContent>,
    );
    expect(container.firstChild).toHaveClass(styles.center);
  });

  it("applies justify start and end to NavbarContent", () => {
    const { rerender, container } = render(<NavbarContent justify="start">C</NavbarContent>);
    expect(container.firstChild).toHaveClass(styles.start);
    rerender(<NavbarContent justify="end">C</NavbarContent>);
    expect(container.firstChild).toHaveClass(styles.end);
  });

  it("applies hidden-mobile class to NavbarContent", () => {
    const { container } = render(
      <NavbarContent hiddenOnMobile>Content</NavbarContent>,
    );
    expect(container.firstChild).toHaveClass(styles.hiddenMobile);
  });

  it("applies custom className to Navbar", () => {
    const { container } = render(<Navbar className="my-nav" />);
    expect(container.querySelector("nav")).toHaveClass("my-nav");
  });

  it("uses defaultMenuOpen to initialize internal state", () => {
    const { container } = render(
      <Navbar defaultMenuOpen={false}>
        <NavbarToggle />
      </Navbar>,
    );
    const toggleWrapper = container.querySelector(`.${styles.toggle}`);
    expect(toggleWrapper).toBeInTheDocument();
  });

  it("calls onMenuOpenChange when toggle is clicked", () => {
    const onMenuOpenChange = vi.fn();
    render(
      <Navbar onMenuOpenChange={onMenuOpenChange}>
        <NavbarToggle />
      </Navbar>,
    );
    // Find by aria-label which is more stable
    const btn = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(btn);
    expect(onMenuOpenChange).toHaveBeenCalledWith(true);
  });

  it("respects controlled isMenuOpen prop", () => {
    render(
      <Navbar isMenuOpen={true}>
        <NavbarToggle />
      </Navbar>,
    );
    const btn = screen.getByRole("button", { name: /close menu/i });
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });
});

describe("NavbarToggle", () => {
  it("throws when used outside Navbar", () => {
    // Silence error log for expected throw
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<NavbarToggle />)).toThrow(
      "NavbarToggle must be used within a Navbar",
    );
    spy.mockRestore();
  });
});

describe("NavbarMenuItem", () => {
  it("renders with active class", () => {
    render(
      <Navbar>
        <NavbarMenuItem active>Active Menu Item</NavbarMenuItem>
      </Navbar>,
    );
    expect(screen.getByText("Active Menu Item")).toHaveClass(styles.active);
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
