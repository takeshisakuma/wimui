import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
    it("renders children in vertical layout by default", () => {
        const { container } = render(
            <Stack>
                <div>1</div>
                <div>2</div>
            </Stack>
        );
        const stack = container.firstChild as HTMLElement;
        expect(stack.style.flexDirection).toBe("column");
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("renders horizontal layout when specified", () => {
        const { container } = render(
            <Stack direction="row">
                <div>1</div>
            </Stack>
        );
        const stack = container.firstChild as HTMLElement;
        expect(stack.style.flexDirection).toBe("row");
    });

    it("applies gap from spacing token", () => {
        const { container } = render(<Stack gap="lg" />);
        const stack = container.firstChild as HTMLElement;
        expect(stack.style.gap).toBe("var(--spacing-lg)");
    });
});
