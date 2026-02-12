import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink } from "./Navbar";

describe("Navbar", () => {
    it("renders children content", () => {
        render(
            <Navbar>
                <NavbarBrand>Brand</NavbarBrand>
                <NavbarContent>
                    <NavbarItem>Item 1</NavbarItem>
                    <NavbarLink href="#">Link 1</NavbarLink>
                </NavbarContent>
            </Navbar>
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
                <NavbarLink active href="#">Active Link</NavbarLink>
            </Navbar>
        );
        expect(screen.getByText("Active Item")).toHaveClass("wim-navbar__item--active");
        expect(screen.getByText("Active Link")).toHaveClass("wim-navbar__link--active");
    });

    it("applies justify class to NavbarContent", () => {
        const { container } = render(<NavbarContent justify="center">Content</NavbarContent>);
        expect(container.firstChild).toHaveClass("wim-navbar__content--center");
    });
});
