import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BaseListItem } from "./BaseListItem";
import styles from "./base-list-item.module.scss";

describe("BaseListItem", () => {
    it("renders children correctly", () => {
        render(<BaseListItem>Test Item</BaseListItem>);
        expect(screen.getByText("Test Item")).toBeInTheDocument();
        expect(screen.getByText("Test Item").parentElement).toHaveClass(styles.root);
    });

    it("renders as a different element when 'asChild' prop is provided", () => {
        render(
            <BaseListItem asChild>
                <button type="button">Button Item</button>
            </BaseListItem>
        );
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("BUTTON");
        expect(element).toHaveAttribute("type", "button");
    });

    it("renders icon slot correctly", () => {
        render(
            <BaseListItem icon={<span data-testid="icon">icon</span>}>
                Item with Icon
            </BaseListItem>
        );
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByTestId("icon").parentElement).toHaveClass(styles.icon);
    });

    it("renders rightSection slot correctly", () => {
        render(
            <BaseListItem rightSection={<span data-testid="right">right</span>}>
                Item with Right Section
            </BaseListItem>
        );
        expect(screen.getByTestId("right")).toBeInTheDocument();
        expect(screen.getByTestId("right").parentElement).toHaveClass(styles.rightSection);
    });

    it("applies active class when 'active' prop is true", () => {
        render(<BaseListItem active>Active Item</BaseListItem>);
        const element = screen.getByText("Active Item").parentElement;
        expect(element).toHaveClass(styles.active);
    });

    it("applies disabled class and aria-disabled when 'disabled' prop is true", () => {
        render(<BaseListItem disabled>Disabled Item</BaseListItem>);
        const element = screen.getByText("Disabled Item").parentElement;
        expect(element).toHaveClass(styles.disabled);
        expect(element).toHaveAttribute("aria-disabled", "true");
    });

    it("applies danger class when 'danger' prop is true", () => {
        render(<BaseListItem danger>Danger Item</BaseListItem>);
        const element = screen.getByText("Danger Item").parentElement;
        expect(element).toHaveClass(styles.danger);
    });

    it("forwards ref to the root element", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<BaseListItem ref={ref}>Ref Item</BaseListItem>);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
        expect(ref.current?.textContent).toContain("Ref Item");
    });

    it("passes through additional props", () => {
        render(
            <BaseListItem data-custom="test-value" id="test-id">
                Item with Custom Props
            </BaseListItem>
        );
        const element = screen.getByText("Item with Custom Props").parentElement;
        expect(element).toHaveAttribute("data-custom", "test-value");
        expect(element).toHaveAttribute("id", "test-id");
    });

    it("applies custom className", () => {
        render(<BaseListItem className="custom-class">Item</BaseListItem>);
        const element = screen.getByText("Item").parentElement;
        expect(element).toHaveClass("custom-class");
        expect(element).toHaveClass(styles.root);
    });
});
